//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tui/elements.hpp" // TODO: remove

#include <vast/table_slice.hpp>
#include <vast/concept/parseable/vast/pipeline.hpp>
#include <vast/error.hpp>
#include <vast/logger.hpp>
#include <vast/plugin.hpp>

#include <ftxui/component/component.hpp> // TODO: remove
#include <ftxui/component/screen_interactive.hpp>

#include <thread>

namespace vast::plugins::tui {

namespace {

using namespace ftxui;

class tui_operator final : public crtp_operator<tui_operator> {
public:
  auto operator()(generator<table_slice> input,
                  operator_control_plane& ctrl) const -> generator<std::monostate> {
    auto screen = ScreenInteractive::Fullscreen();
    auto thread = std::thread([&] {
      auto main = Renderer([] {
        return Vee();
      });
      screen.Loop(main);
    });
    for (auto&& slice : input) {
      // Render slice
      // TODO
      // Update screen with every new piece of input.
      screen.PostEvent(Event::Custom);
      co_yield {};
    }
    thread.join();
  }

  auto to_string() const -> std::string override {
    return fmt::format("tui", command_);
  }

private:
  std::string command_;
};

class plugin final : public virtual operator_plugin {
public:
  // plugin API
  caf::error initialize([[maybe_unused]] const record& plugin_config,
                        [[maybe_unused]] const record& global_config) override {
    return {};
  }

  [[nodiscard]] std::string name() const override {
    return "tui";
  };

  auto make_operator(std::string_view pipeline) const
    -> std::pair<std::string_view, caf::expected<operator_ptr>> override {
    using parsers::optional_ws_or_comment, parsers::required_ws_or_comment,
      parsers::end_of_pipeline_operator, parsers::qqstr;
    const auto* f = pipeline.begin();
    const auto* const l = pipeline.end();
    const auto p = optional_ws_or_comment >> end_of_pipeline_operator;
    if (!p(f, l, unused)) {
      return {
        std::string_view{f, l},
        caf::make_error(ec::syntax_error,
                        fmt::format("failed to parse {} operator: '{}'", name(),
                                    pipeline)),
      };
    }
    return {
      std::string_view{f, l},
      std::make_unique<tui_operator>(),
    };
  }
};

} // namespace

} // namespace vast::plugins::tui

VAST_REGISTER_PLUGIN(vast::plugins::tui::plugin)
