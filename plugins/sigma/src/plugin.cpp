//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2022 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "sigma/parse.hpp"

#include <vast/arrow_table_slice.hpp>
#include <vast/bitmap.hpp>
#include <vast/concept/convertible/data.hpp>
#include <vast/concept/convertible/to.hpp>
#include <vast/concept/parseable/string/char_class.hpp>
#include <vast/concept/parseable/to.hpp>
#include <vast/concept/parseable/vast/pipeline.hpp>
#include <vast/data.hpp>
#include <vast/error.hpp>
#include <vast/io/read.hpp>
#include <vast/pipeline.hpp>
#include <vast/plugin.hpp>
#include <vast/table_slice_builder.hpp>

#include <arrow/record_batch.h>
#include <caf/error.hpp>
#include <caf/expected.hpp>
#include <caf/typed_event_based_actor.hpp>
#include <fmt/format.h>

#include <thread>

namespace vast::plugins::sigma {

class sigma_operator final : public crtp_operator<sigma_operator> {
public:
  explicit sigma_operator(std::string path) : path_{std::move(path)} {
  }

  struct monitor_state {
    auto update(const std::filesystem::path& path) -> caf::expected<void> {
      if (std::filesystem::is_directory(path)) {
        for (const auto& entry : std::filesystem::directory_iterator(path)) {
          auto status = update(entry.path());
          if (not status)
            return status;
        }
        return {};
      }
      if (path.extension() != ".yml" && path.extension() != ".yaml") {
        // TODO: error?
        return {};
      }
      auto query = vast::io::read(path);
      if (not query) {
        return std::move(query.error());
      }
      auto query_str = std::string_view{
        reinterpret_cast<const char*>(query->data()),
        reinterpret_cast<const char*>(query->data() + query->size())}; // NOLINT
      auto yaml = from_yaml(query_str);
      if (not yaml) {
        return std::move(yaml.error());
      }
      auto rule = parse_rule(*yaml);
      if (not rule) {
        return std::move(rule.error());
      }
      rules[path.string()] = {std::move(*yaml), std::move(*rule)};
      return {};
    }

    std::filesystem::path path;
    std::mutex mutex = {};
    std::unordered_map<std::string, std::pair<data, expression>> rules = {};
    std::atomic<bool> running = true;
  };

  auto
  operator()(generator<table_slice> input, operator_control_plane& ctrl) const
    -> generator<table_slice> {
    auto state = monitor_state{};
    state.path = path_;
    state.update(state.path);
    auto t = std::thread{
      [](monitor_state* state) {
        while (state->running) {
          state->update(state->path);
          std::this_thread::sleep_for(std::chrono::milliseconds{500});
        }
      },
      &state,
    };
    auto tguard = caf::detail::make_scope_guard(
      [state = &state, t = std::move(t)]() mutable {
        state->running = false;
        t.join();
      });
    for (auto&& slice : input) {
      if (slice.rows() == 0) {
        co_yield {};
        continue;
      }
      bool did_yield = false;
      auto lock = std::unique_lock{state.mutex};
      for (const auto& [path, entry] : state.rules) {
        const auto& [yaml, rule] = entry;
        auto expr = tailor(rule, slice.schema());
        if (not expr) {
          continue;
        }
        if (auto event = filter(slice, *expr)) {
          did_yield = true;
          const auto rule_schema = caf::get<record_type>(type::infer(yaml));
          const auto result_schema = type{
            "vast.sighting",
            record_type{
              {"event", event->schema()},
              {"rule", rule_schema},
            },
          };
          auto result_builder
            = result_schema.make_arrow_builder(arrow::default_memory_pool());
          auto array = to_record_batch(*event)->ToStructArray().ValueOrDie();
          for (const auto& row :
               values(caf::get<record_type>(slice.schema()), *array)) {
            (void)caf::get<arrow::StructBuilder>(*result_builder).Append();
            (void)append_builder(
              caf::get<record_type>(event->schema()),
              caf::get<arrow::StructBuilder>(
                *caf::get<arrow::StructBuilder>(*result_builder)
                   .field_builder(0)),
              *row);
            (void)append_builder(
              rule_schema,
              caf::get<arrow::StructBuilder>(
                *caf::get<arrow::StructBuilder>(*result_builder)
                   .field_builder(1)),
              caf::get<view<record>>(make_view(yaml)));
          }
          auto result = result_builder->Finish().ValueOrDie();
          auto rb = arrow::RecordBatch::Make(
            result_schema.to_arrow_schema(), event->rows(),
            caf::get<arrow::StructArray>(*result).fields());
          auto sl = table_slice{rb, result_schema};
          co_yield sl;
        }
      }
      if (not did_yield) {
        co_yield {};
      }
    }
  }

  auto to_string() const -> std::string override {
    // FIXME: escaping
    return fmt::format("sigma {}", path_);
  }

private:
  std::string path_ = {};
};

class plugin final : public virtual language_plugin, operator_plugin {
  auto initialize(const record&, const record&) -> caf::error override {
    return caf::none;
  }

  auto name() const -> std::string override {
    return "sigma";
  }

  auto parse_query(std::string_view query) const
    -> caf::expected<pipeline> override {
    if (auto yaml = from_yaml(query)) {
      auto parsed = parse_rule(*yaml);
      if (parsed) {
        return pipeline::parse(fmt::format("where {}", *parsed));
      }
      return std::move(parsed.error());
    } else {
      return caf::make_error(ec::invalid_query,
                             fmt::format("not a Sigma rule: {}", yaml.error()));
    }
  }

  auto make_operator(std::string_view pipeline) const
    -> std::pair<std::string_view, caf::expected<operator_ptr>> override {
    using parsers::optional_ws_or_comment, parsers::required_ws_or_comment,
      parsers::end_of_pipeline_operator, parsers::operator_arg;
    const auto* f = pipeline.begin();
    const auto* const l = pipeline.end();
    const auto p = required_ws_or_comment >> operator_arg
                   >> optional_ws_or_comment >> end_of_pipeline_operator;
    auto path = std::string{};
    if (!p(f, l, path)) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::syntax_error, fmt::format("failed to parse sigma "
                                                      "operator: '{}'",
                                                      pipeline)),
      };
    }
    return {
      std::string_view{f, l},
      std::make_unique<sigma_operator>(std::move(path)),
    };
  }
};

} // namespace vast::plugins::sigma

VAST_REGISTER_PLUGIN(vast::plugins::sigma::plugin)
