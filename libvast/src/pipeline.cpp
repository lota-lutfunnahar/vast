//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/pipeline.hpp"

#include "vast/concept/parseable/vast/pipeline.hpp"
#include "vast/element_type.hpp"
#include "vast/logical_operator.hpp"
#include "vast/operator_control_plane.hpp"
#include "vast/plugin.hpp"

#include <queue>
#include <unordered_map>

namespace vast {

namespace {

class execute_ctrl final : public operator_control_plane {
public:
  explicit execute_ctrl() noexcept = default;

  [[nodiscard]] auto error() const noexcept -> const caf::error& {
    return error_;
  }

private:
  [[nodiscard]] auto self() noexcept -> caf::event_based_actor* override {
    die("not implemented");
  }

  auto abort(caf::error error) noexcept -> void override {
    error_ = std::move(error);
  }

  auto warn(caf::error) noexcept -> void override {
    die("not implemented");
  }

  auto emit(table_slice) noexcept -> void override {
    die("not implemented");
  }

  auto demand(type = {}) const noexcept -> size_t override {
    die("not implemented");
  }

  /// Access available schemas.
  auto schemas() const noexcept -> const std::vector<type>& override {
    die("not implemented");
  }

  /// Access available concepts.
  auto concepts() const noexcept -> const concepts_map& override {
    die("not implemented");
  }

  caf::error error_ = {};
};

template <class Batch>
auto make_batch_bridge(bool& stop)
  -> std::pair<std::shared_ptr<std::queue<Batch>>, generator<Batch>> {
  auto queue = std::make_shared<std::queue<Batch>>();
  auto gen = [](std::shared_ptr<std::queue<Batch>> queue,
                bool& stop) -> generator<Batch> {
    while (!stop) {
      if (queue->empty()) {
        // MESSAGE("yield empty");
        co_yield Batch{};
        continue;
      }
      auto element = std::move(queue->front());
      VAST_ASSERT(batch_traits<Batch>::size(element) != 0);
      queue->pop();
      // MESSAGE("yield element");
      co_yield std::move(element);
    }
  }(queue, stop);
  return std::pair{std::move(queue), std::move(gen)};
}

/// Creates a generator from a source operator.
/// @pre `op->input_element_type()` must be `void`
auto make_pipeline_source(runtime_logical_operator* op,
                          operator_control_plane* ctrl)
  -> generator<runtime_batch> {
  auto gen = op->runtime_instantiate({}, ctrl);
  if (not gen) {
    ctrl->abort(gen.error());
    return {};
  }
  auto f = []<element_type Input, element_type Output>(
             physical_operator<Input, Output> gen) -> generator<runtime_batch> {
    if constexpr (not std::is_void_v<Input>) {
      die("tried to instantiate pipeline that does not begin with void");
    } else {
      for (auto&& output : gen()) {
        VAST_INFO("yield output");
        // This converts `Output -> runtime_batch`.
        co_yield std::move(output);
      }
    }
  };
  return std::visit(std::move(f), std::move(*gen));
}

struct instance_state {
  generator<runtime_batch> gen;
  generator<runtime_batch>::iterator it;

  /// This is a type-erased `push` on the input queue.
  std::function<void(runtime_batch)> push;
};

auto exhaust_on_stall(instance_state& instance) -> generator<runtime_batch> {
  // This effectively returns a generator that pulls from the instantiation,
  // which pulls from the queue. A stall is requested when the queue is empty.
  // In this case, the generator returned here becomes exhausted, which will
  // request the next batch from `previous`.
  while (true) {
    // The inner generators can only end after `stop` is set, but the operator
    // instantiation can end before that.
    if (instance.it == instance.gen.end()) {
      break;
    }
    auto output = std::move(*instance.it);
    auto empty = output.size() == 0;
    ++instance.it;
    VAST_INFO("yielded in generator");
    co_yield std::move(output);
    if (empty) {
      break;
    }
  }
};

/// Appends an operator to an existing generator.
/// @pre `previous` may only yield batches for `op->input_element_type()`
/// @pre `op->input_element_type()` must not be `void`
auto append_operator(generator<runtime_batch> previous,
                     runtime_logical_operator* op, operator_control_plane* ctrl)
  -> generator<runtime_batch> {
  // For every unique schema retrieved from `previous`, we want to instantiate
  // `op` once. Thus, we return a generator that, when advanced, advances
  // `previous` and looks at the schema of the input batch. If we have not seen
  // that schema yet, we instantiate `op` and a schema-specific queue. The
  // instantiated operator is provided a generator that tries to pull new
  // elements from the queue, and the input batch we are dispatching is pushed
  // to this queue. Because this provides additional input to to the
  // corresponding instance, we iterate over it in order to stream its
  // results if possible. This does not necessarily already yield results, due
  // to operators such as `summarize`. Hence, when the input generator is
  // exhausted, we signal the generators that pull from the queue that they
  // should stop as well. Finally, we iterate once more over all operator
  // instances. They will notice that their input is exhausted, which means
  // that they will become exhausted themselves eventually.

  auto stop = false;
  auto instances = std::unordered_map<type, instance_state>{};

  /// Dispatches an input batch, creating physical operators on demand.
  auto dispatch = [&]<class Batch>(Batch input) mutable
    -> caf::expected<std::reference_wrapper<instance_state>> {
    // Empty batches should be handled before calling this.
    VAST_ASSERT(batch_traits<Batch>::size(input) != 0);
    // For every input batch, we take the following steps:
    // 1. Find the input schema.
    auto input_schema = batch_traits<Batch>::schema(input);
    // 2. Try to find an already existing generator, or create a new one
    // if it doesn't exist yet for the given input schema.
    auto lookup = instances.find(input_schema);
    if (lookup == instances.end()) {
      auto physical_op = op->runtime_instantiate(input_schema, ctrl);
      if (not physical_op) {
        return std::move(physical_op.error());
      }
      lookup = instances.emplace_hint(lookup, input_schema, instance_state{});
      auto& instance = lookup->second;
      auto [buffer_queue, buffer] = make_batch_bridge<Batch>(stop);

      auto make_generator
        = [buffer = std::move(buffer)]<element_type Input, element_type Output>(
            physical_operator<Input, Output> physical_op) mutable noexcept
        -> generator<runtime_batch> {
        if constexpr (std::is_void_v<Input>) {
          die("input type of operator must not be void here");
        } else if constexpr (!std::is_same_v<element_type_to_batch_t<Input>,
                                             Batch>) {
          die("input generator did not yield operator input type");
        } else {
          // gen lives throughout the iteration
          for (auto&& output : physical_op(std::move(buffer))) {
            VAST_INFO("yield inner");
            co_yield std::move(output);
          }
        }
      };
      instance.gen
        = std::visit(std::move(make_generator), std::move(*physical_op));
      instance.push = [queue = std::move(buffer_queue)](runtime_batch batch) {
        queue->push(std::get<Batch>(std::move(batch)));
      };
      // 3. Push the input element into the buffer.
      instance.push(std::move(input));
      instance.it = instance.gen.begin();
    } else {
      // 3. Push the input element into the buffer.
      auto& instance = lookup->second;
      if (instance.it != instance.gen.end()) {
        instance.push(std::move(input));
      }
    }
    return std::ref(lookup->second);
  };

  for (auto&& input : previous) {
    if (input.size() == 0) {
      VAST_INFO("inner stalled");
      co_yield {};
      continue;
    }
    auto instance = std::visit(dispatch, std::move(input));
    if (!instance) {
      ctrl->abort(std::move(instance.error()));
    }
    // Iterate until the queue is empty.
    for (auto&& output : exhaust_on_stall(*instance)) {
      VAST_INFO("will yield in outer generator");
      co_yield std::move(output);
    }
    if (op->done()) {
      // If all instances require no more input, then we can abort the
      // iteration over `previous` and process the instances until they
      // become exhausted.
      break;
    }
  }
  stop = true;
  for (auto& [_, instance] : instances) {
    // The input to `gen` will now become exhausted when the queue is empty.
    // Thus, the instantiation must also become exhausted eventually. This also
    // implies that we can just ignore empty batches.
    for (; instance.it != instance.gen.end(); ++instance.it) {
      auto output = std::move(*instance.it);
      if (output.size() != 0) {
        co_yield std::move(output);
      }
    }
  }
}

/// Creates a generator from a pipeline that is closed from the left.
/// @pre `!ops.empty()`
/// @pre `ops[0]->input_element_type()` must be `void`
/// @pre The pipeline defined by `ops` must not be ill-typed.
auto make_run(std::span<logical_operator_ptr> ops, operator_control_plane* ctrl)
  -> generator<runtime_batch> {
  auto it = ops.begin();
  VAST_ASSERT(it != ops.end());
  auto run = make_pipeline_source((it++)->get(), ctrl);
  for (; it != ops.end(); ++it) {
    run = append_operator(std::move(run), it->get(), ctrl);
  }
  return run;
}

} // namespace

auto pipeline::parse(std::string_view repr) -> caf::expected<pipeline> {
  auto ops = std::vector<logical_operator_ptr>{};
  // plugin name parser
  using parsers::alnum, parsers::chr, parsers::space, parsers::optional_ws;
  const auto plugin_name_char_parser = alnum | chr{'-'};
  const auto plugin_name_parser = optional_ws >> +plugin_name_char_parser;
  while (!repr.empty()) {
    // 1. parse a single word as operator plugin name
    const auto* f = repr.begin();
    const auto* const l = repr.end();
    auto plugin_name = std::string{};
    if (!plugin_name_parser(f, l, plugin_name)) {
      return caf::make_error(ec::syntax_error,
                             fmt::format("failed to parse pipeline '{}': "
                                         "operator name is invalid",
                                         repr));
    }
    // 2. find plugin using operator name
    const auto* plugin = plugins::find<logical_operator_plugin>(plugin_name);
    if (!plugin) {
      return caf::make_error(ec::syntax_error,
                             fmt::format("failed to parse pipeline '{}': "
                                         "operator '{}' does not exist",
                                         repr, plugin_name));
    }
    // 3. ask the plugin to parse itself from the remainder
    auto [remaining_repr, op]
      = plugin->make_logical_operator(std::string_view{f, l});
    if (!op)
      return caf::make_error(ec::unspecified,
                             fmt::format("failed to parse pipeline '{}': {}",
                                         repr, op.error()));
    ops.push_back(std::move(*op));
    repr = remaining_repr;
  }
  return make(std::move(ops));
}

auto pipeline::make(std::vector<logical_operator_ptr> ops)
  -> caf::expected<pipeline> {
  auto mismatch
    = std::adjacent_find(ops.begin(), ops.end(), [](auto& a, auto& b) {
        return a->output_element_type() != b->input_element_type()
               && a->output_element_type().id != element_type_id<void>;
      });
  if (mismatch != ops.end()) {
    return caf::make_error(
      ec::invalid_argument,
      fmt::format("element type mismatch: cannot connect {} -> {}",
                  (*mismatch)->output_element_type().name,
                  (*(mismatch + 1))->input_element_type().name));
  }
  auto flattened = std::vector<logical_operator_ptr>{};
  flattened.reserve(ops.size());
  for (auto& op : ops) {
    if (auto* p = dynamic_cast<pipeline*>(op.get())) {
      flattened.insert(flattened.end(),
                       std::make_move_iterator(p->ops_.begin()),
                       std::make_move_iterator(p->ops_.end()));
    } else {
      flattened.push_back(std::move(op));
    }
  }
  return pipeline{std::move(flattened)};
}

auto pipeline::realize() && noexcept -> generator<caf::expected<void>> {
  auto ops = std::move(*this).unwrap();
  if (ops.empty())
    co_return; // no-op
  if (ops.front()->input_element_type().id != element_type_id<void>) {
    co_yield caf::make_error(
      ec::invalid_argument,
      fmt::format("unable to execute pipeline: expected "
                  "input type {}, got {}",
                  element_type_traits<void>::name,
                  ops.front()->input_element_type().name));
    co_return;
  }
  if (ops.back()->output_element_type().id != element_type_id<void>) {
    co_yield caf::make_error(
      ec::invalid_argument,
      fmt::format("unable to execute pipeline: expected "
                  "output type {}, got {}",
                  element_type_traits<void>::name,
                  ops.back()->output_element_type().name));
    co_return;
  }
  auto ctrl = execute_ctrl{};
  for (auto&& elem : make_run(ops, &ctrl)) {
    if (ctrl.error()) {
      VAST_INFO("got error: {}", ctrl.error());
      co_yield ctrl.error();
      co_return;
    }
    VAST_ASSERT(std::holds_alternative<std::monostate>(elem));
    co_yield {};
  }
  if (ctrl.error()) {
    VAST_INFO("got error: {}", ctrl.error());
    co_yield ctrl.error();
    co_return;
  }
}

} // namespace vast
