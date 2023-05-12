//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/adaptive_table_slice_builder.hpp>
#include <vast/arrow_table_slice.hpp>
#include <vast/concept/parseable/to.hpp>
#include <vast/concept/parseable/vast/data.hpp>
#include <vast/data.hpp>
#include <vast/error.hpp>
#include <vast/plugin.hpp>
#include <vast/table_slice.hpp>
#include <vast/to_lines.hpp>
#include <vast/type.hpp>
#include <vast/view.hpp>

#include <arrow/record_batch.h>
#include <caf/error.hpp>
#include <caf/expected.hpp>
#include <fmt/format.h>

#include <yaml-cpp/yaml.h>

namespace vast::plugins::yaml {
namespace {

constexpr auto document_end_marker = "...";
constexpr auto document_start_marker = "---";

auto parse_node(auto& guard, const YAML::Node& node) -> void {
  switch (node.Type()) {
    case YAML::NodeType::Undefined:
    case YAML::NodeType::Null: {
      break;
    }
    case YAML::NodeType::Scalar: {
      if (auto as_bool = bool{}; YAML::convert<bool>::decode(node, as_bool)) {
        guard.add(as_bool);
        break;
      }
      // TODO: Do not attempt to parse pattern, map, list, and record here.
      if (auto as_data = data{}; parsers::data(node.Scalar(), as_data)) {
        guard.add(make_data_view(as_data));
        break;
      }
      guard.add(make_view(node.Scalar()));
      break;
    }
    case YAML::NodeType::Sequence: {
      auto list = guard.push_list();
      for (const auto& element : node) {
        parse_node(list, element);
      }
      break;
    }
    case YAML::NodeType::Map: {
      auto record = guard.push_record();
      for (const auto& element : node) {
        auto field = record.push_field(element.first.Scalar());
        parse_node(field, element.second);
      }
      break;
    }
  }
};

auto load_document(adaptive_table_slice_builder& builder,
                   std::string&& document) -> void {
  auto row = builder.push_row();
  try {
    auto node = YAML::Load(document);
    if (not node.IsMap()) {
      // TODO: Warn on the ctrl plane instead
      VAST_WARN("document is not a map");
      return;
    }
    for (const auto& element : node) {
      auto field = row.push_field(element.first.as<std::string>());
      parse_node(field, element.second);
    }
  } catch (const YAML::Exception& err) {
    // TODO: Warn on the ctrl plane instead
    VAST_WARN("yaml::load failed: {}", err.what());
    row.cancel();
  }
};

template <class View>
auto print_node(auto& out, const View& value) -> void {
  if constexpr (std::is_same_v<View, data_view>) {
    return caf::visit(
      [&](const auto& value) {
        return print_node(out, value);
      },
      value);
  } else if constexpr (std::is_same_v<View, caf::none_t>) {
    out << YAML::Null;
  } else if constexpr (std::is_same_v<View, view<bool>>) {
    out << (value ? "true" : "false");
  } else if constexpr (detail::is_any_v<View, view<int64_t>, view<uint64_t>>) {
    out << value;
  } else if constexpr (std::is_same_v<View, view<std::string>>) {
    out << std::string{value};
  } else if constexpr (detail::is_any_v<View, view<double>, view<duration>,
                                        view<time>, view<pattern>, view<ip>,
                                        view<subnet>, view<enumeration>>) {
    out << fmt::to_string(data_view{value});
  } else if constexpr (std::is_same_v<View, view<list>>) {
    out << YAML::BeginSeq;
    for (const auto& element : value) {
      print_node(out, element);
    }
    out << YAML::EndSeq;
  } else if constexpr (std::is_same_v<View, view<record>>) {
    out << YAML::BeginMap;
    for (const auto& [key, element] : value) {
      out << YAML::Key;
      print_node(out, key);
      out << YAML::Value;
      print_node(out, element);
    }
    out << YAML::EndMap;
  } else if constexpr (detail::is_any_v<View, view<pattern>, view<map>>) {
    die("unreachable");
  } else {
    static_assert(detail::always_false_v<View>, "missing overload");
  }
};

auto print_document(YAML::Emitter& out, const view<record>& row) -> void {
  out << YAML::BeginDoc;
  print_node(out, row);
  out << YAML::EndDoc;
};

class plugin final : public virtual parser_plugin,
                     public virtual printer_plugin {
  auto initialize(const record&, const record&) -> caf::error override {
    return caf::none;
  }

  auto name() const -> std::string override {
    return "yaml";
  }

  auto make_parser(std::vector<std::string> args, generator<chunk_ptr> loader,
                   operator_control_plane&) const
    -> caf::expected<parser> override {
    if (!args.empty()) {
      return caf::make_error(ec::invalid_argument,
                             fmt::format("YAML parser does not expecte any "
                                         "arguments but got [{}]",
                                         fmt::join(args, ", ")));
    }
    return std::invoke(
      [](generator<std::optional<std::string_view>> lines)
        -> generator<table_slice> {
        auto builder = adaptive_table_slice_builder{};
        // TODO: Consider making this an optional, and adding empty rows for
        // empty documents.
        auto document = std::string{};
        for (auto&& line : lines) {
          if (not line) {
            co_yield {};
            continue;
          }
          if (*line == document_end_marker) {
            if (document.empty()) {
              continue;
            }
            load_document(builder, std::exchange(document, {}));
            continue;
          }
          if (*line == document_start_marker) {
            if (not document.empty()) {
              load_document(builder, std::exchange(document, {}));
            }
            continue;
          }
          fmt::format_to(std::back_inserter(document), "{}\n", *line);
        }
        if (not document.empty()) {
          load_document(builder, std::exchange(document, {}));
        }
        co_yield builder.finish();
      },
      to_lines(std::move(loader)));
  }

  auto default_loader(std::span<std::string const> args) const
    -> std::pair<std::string, std::vector<std::string>> override {
    (void)args;
    return {"stdin", {}};
  }

  auto make_printer(std::span<std::string const>, type,
                    operator_control_plane& ctrl) const
    -> caf::expected<printer> override {
    // TODO: Consider exposing arguments for the emitter.
    return to_printer([&](table_slice slice) -> generator<chunk_ptr> {
      if (slice.rows() == 0) {
        co_yield {};
        co_return;
      }
      auto input_type = caf::get<record_type>(slice.schema());
      auto resolved_slice = resolve_enumerations(slice);
      auto array
        = to_record_batch(resolved_slice)->ToStructArray().ValueOrDie();
      auto out = std::make_unique<YAML::Emitter>();
      out->SetOutputCharset(YAML::EscapeNonAscii); // restrict to ASCII output
      out->SetNullFormat(YAML::LowerNull);
      out->SetIndent(2);
      for (const auto& row : values(input_type, *array)) {
        VAST_ASSERT_CHEAP(row);
        print_document(*out, *row);
      }
      // If the output failed, then we either failed to allocate memory or had a
      // mismatch between BeginSeq and EndSeq or BeginMap and EndMap; all of
      // these we cannot recover from.
      if (not out->good()) {
        ctrl.abort(
          caf::make_error(ec::logic_error, "failed to format YAML document"));
        co_return;
      }
      // We create a chunk out of the emitter directly, thus avoiding needing to
      // copy out the string from the emitter's stream object. The ownership of
      // the emitter is thus transferred into the deleter of the chunk.
      const auto* data = out->c_str();
      const auto size = out->size();
      co_yield chunk::make(data, size, [out = std::move(out)]() noexcept {
        (void)out;
      });
    });
  }

  auto default_saver(std::span<std::string const>) const
    -> std::pair<std::string, std::vector<std::string>> override {
    return {"stdout", {}};
  }

  auto printer_allows_joining() const -> bool override {
    return true;
  };
};

} // namespace
} // namespace vast::plugins::yaml

VAST_REGISTER_PLUGIN(vast::plugins::yaml::plugin)
