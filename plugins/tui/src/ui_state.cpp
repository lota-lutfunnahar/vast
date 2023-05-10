//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tui/ui_state.hpp"

#include "tui/components.hpp"

#include <vast/concept/printable/to_string.hpp>
#include <vast/concept/printable/vast/data.hpp>

#include <ftxui/component/component.hpp>
#include <ftxui/dom/elements.hpp>

namespace vast::plugins::tui {

using namespace ftxui;

namespace {

/// Renders a data view according to a given kheme.
auto render(data_view v, const struct theme& theme) -> Element {
  auto align_left = [](const auto& x) {
    return text(to_string(x));
  };
  auto align_center = [](const auto& x) {
    return hbox({filler(), text(to_string(x)), filler()});
  };
  auto align_right = [](const auto& x) {
    return hbox({filler(), text(to_string(x))});
  };
  auto f = detail::overload{
    [&](const auto& x) {
      return align_left(x) | color(theme.palette.color0);
    },
    [&](caf::none_t) {
      return align_center("∅") | color(theme.palette.subtle);
    },
    [&](view<bool> x) {
      return align_left(x) | color(theme.palette.number);
    },
    [&](view<int64_t> x) {
      return align_right(x) | color(theme.palette.number);
    },
    [&](view<uint64_t> x) {
      return align_right(x) | color(theme.palette.number);
    },
    [&](view<double> x) {
      return align_right(x) | color(theme.palette.number);
    },
    [&](view<duration> x) {
      return align_right(x) | color(theme.palette.operator_);
    },
    [&](view<time> x) {
      return align_left(x) | color(theme.palette.operator_);
    },
    [&](view<std::string> x) {
      return align_left(x) | color(theme.palette.string);
    },
    [&](view<pattern> x) {
      return align_left(x) | color(theme.palette.string);
    },
    [&](view<ip> x) {
      return align_left(x) | color(theme.palette.type);
    },
    [&](view<subnet> x) {
      return align_left(x) | color(theme.palette.type);
    },
  };
  return caf::visit(f, v);
}

/// A table header component.
auto Header(std::string top, std::string bottom, int height,
            const struct theme& theme) -> Component {
  return Renderer(
    [height, top_text = std::move(top), bottom_text = std::move(bottom),
     top_color = color(theme.palette.text),
     bottom_color = color(theme.palette.comment)](bool focused) mutable {
      auto header = text(top_text) | bold | center | top_color;
      if (focused)
        header = header | inverted | focus;
      auto element = vbox({
                       filler(),
                       std::move(header),
                       text(bottom_text) | center | bottom_color,
                       filler(),
                     })
                     | size(HEIGHT, EQUAL, height);
      return element;
    });
}

/// A cell in the table body.
auto Cell(view<data> x, const struct theme& theme) -> Component {
  return Renderer([element = render(x, theme)](bool focused) mutable {
    if (focused)
      return element | inverted | focus;
    return element;
  });
}

/// A table column consisting of header and body.
auto Column(record_type::leaf_view leaf,
            std::shared_ptr<std::vector<table_slice>> slices,
            const struct theme& theme) -> Component {
  class Impl : public ComponentBase {
  public:
    Impl(record_type::leaf_view leaf,
         std::shared_ptr<std::vector<table_slice>> slices,
         const struct theme& theme)
      : index_{leaf.index}, slices_{std::move(slices)}, theme_{theme} {
      VAST_ASSERT(slices_ != nullptr);
      VAST_ASSERT(!slices_->empty());
      const auto& first = (*slices_)[0];
      const auto& schema = caf::get<record_type>(first.schema());
      auto depth = schema.depth();
      auto height
        = detail::narrow_cast<int>((depth - leaf.index.size() + 1) * 2);
      auto header = Header(std::string{leaf.field.name},
                           fmt::to_string(leaf.field.type), height, theme_);
      auto separator = theme.separator();
      auto container = Container::Vertical({});
      container->Add(header);
      container->Add(component(separator));
      container->Add(body_);
      Add(container);
    }

    auto Render() -> Element override {
      if (num_slices_rendered_ == slices_->size())
        return ComponentBase::Render();
      for (auto i = num_slices_rendered_; i < slices_->size(); ++i) {
        const auto& slice = (*slices_)[i];
        const auto& schema = caf::get<record_type>(slice.schema());
        auto col = schema.flat_index(index_);
        for (size_t row = 0; row < slice.rows(); ++row)
          body_->Add(Cell(slice.at(row, col), theme_));
      }
      num_slices_rendered_ = slices_->size();
      return ComponentBase::Render();
    }

  private:
    size_t num_slices_rendered_ = 0;
    offset index_ = {};
    std::shared_ptr<std::vector<table_slice>> slices_ = {};
    Component body_ = Container::Vertical({});
    const struct theme& theme_;
    // bool collapsed_ = false;
  };
  return Make<Impl>(leaf, std::move(slices), theme);
}

} // namespace

auto ui_state::add(table_slice slice) -> void {
  VAST_ASSERT(caf::holds_alternative<record_type>(slice.schema()));
  auto& state = tables[slice.schema()];
  if (!state.slices)
    state.slices = std::make_shared<std::vector<table_slice>>();
  state.slices->push_back(slice);
  if (!state.leaves.empty())
    return;
  // Initialize columns if this was the first
  const auto& schema = caf::get<record_type>(slice.schema());
  for (auto leaf : schema.leaves()) {
    auto column = Column(leaf, state.slices, theme);
    state.leaves.push_back(column);
  }
  VAST_ASSERT(state.leaves.size() == schema.num_leaves());
  // TODO: we want to get rid of this special casing of RIDs. Ideally, the user
  // provides a dedicated 'enumerate' operator that adds the RIDs at the data
  // level. Or this operator gets a flag to opt of that. But the special casing
  // needs to go regardless.
  state.rids = Container::Vertical({});
  auto height = detail::narrow_cast<int>(schema.depth() * 2);
  auto header = Header(" # ", "", height, theme);
  state.rids->Add(header);
  state.rids->Add(component(theme.separator()));
  auto base = uint64_t{state.rids->ChildCount() - 2};
  for (size_t j = 0; j < slice.rows(); ++j)
    state.rids->Add(Cell(view<data>{base + j}, theme));
}

} // namespace vast::plugins::tui
