//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2018 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/table_slice.hpp"

#include "vast/arrow_table_slice.hpp"
#include "vast/bitmap_algorithms.hpp"
#include "vast/chunk.hpp"
#include "vast/collect.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/assert.hpp"
#include "vast/detail/overload.hpp"
#include "vast/detail/passthrough.hpp"
#include "vast/detail/string.hpp"
#include "vast/error.hpp"
#include "vast/expression.hpp"
#include "vast/fbs/table_slice.hpp"
#include "vast/fbs/utils.hpp"
#include "vast/ids.hpp"
#include "vast/logger.hpp"
#include "vast/table_slice_builder.hpp"
#include "vast/type.hpp"
#include "vast/value_index.hpp"

#include <arrow/record_batch.h>

#include <cstddef>
#include <span>

namespace vast {

// -- utility functions --------------------------------------------------------

namespace {

/// Visits a FlatBuffers table slice to dispatch to its specific encoding.
/// @param visitor A callable object to dispatch to.
/// @param x The FlatBuffers root type for table slices.
/// @note The handler for invalid table slices takes no arguments. If none is
/// specified, visig aborts when the table slice encoding is invalid.
template <class Visitor>
auto visit(Visitor&& visitor, const fbs::TableSlice* x) noexcept(
  std::conjunction_v<
    // Check whether the handlers for all other table slice encodings are
    // noexcept-specified. When adding a new encoding, add it here as well.
    std::is_nothrow_invocable<Visitor>,
    std::is_nothrow_invocable<Visitor, const fbs::table_slice::arrow::v2&>>) {
  if (!x)
    return std::invoke(std::forward<Visitor>(visitor));
  switch (x->table_slice_type()) {
    case fbs::table_slice::TableSlice::NONE:
      return std::invoke(std::forward<Visitor>(visitor));
    case fbs::table_slice::TableSlice::msgpack_v0:
    case fbs::table_slice::TableSlice::msgpack_v1:
    case fbs::table_slice::TableSlice::arrow_v0:
    case fbs::table_slice::TableSlice::arrow_v1:
      die("outdated table slice encoding");
    case fbs::table_slice::TableSlice::arrow_v2:
      return std::invoke(std::forward<Visitor>(visitor),
                         *x->table_slice_as_arrow_v2());
  }
  // GCC-8 fails to recognize that this can never be reached, so we just call a
  // [[noreturn]] function.
  die("unhandled table slice encoding");
}

/// Get a pointer to the `vast.fbs.TableSlice` inside the chunk.
/// @param chunk The chunk to look at.
const fbs::TableSlice* as_flatbuffer(const chunk_ptr& chunk) noexcept {
  if (!chunk)
    return nullptr;
  return fbs::GetTableSlice(chunk->data());
}

/// Verifies that the chunk contains a valid `vast.fbs.TableSlice` FlatBuffers
/// table and returns the `chunk` itself, or returns `nullptr`.
/// @param chunk The chunk to verify.
/// @param verify Whether to verify the chunk.
/// @note This is a no-op if `verify == table_slice::verify::no`.
chunk_ptr
verified_or_none(chunk_ptr&& chunk, enum table_slice::verify verify) noexcept {
  if (verify == table_slice::verify::yes && chunk) {
    const auto* const data = reinterpret_cast<const uint8_t*>(chunk->data());
    auto verifier = flatbuffers::Verifier{data, chunk->size()};
    if (!verifier.template VerifyBuffer<fbs::TableSlice>())
      chunk = {};
  }
  return std::move(chunk);
}

/// A helper utility for accessing the state of a table slice.
/// @param encoded The encoding-specific FlatBuffers table.
/// @param state The encoding-specific runtime state of the table slice.
template <class Slice, class State>
constexpr auto&
state([[maybe_unused]] Slice&& encoded, State&& state) noexcept {
  return std::forward<State>(state).arrow_v2;
}

} // namespace

// -- constructors, destructors, and assignment operators ----------------------

table_slice::table_slice() noexcept = default;

table_slice::table_slice(chunk_ptr&& chunk, enum verify verify,
                         const std::shared_ptr<arrow::RecordBatch>& batch,
                         type schema) noexcept
  : chunk_{verified_or_none(std::move(chunk), verify)} {
  VAST_ASSERT(!chunk_ || chunk_->unique());
  if (chunk_) {
    ++num_instances_;
    auto f = detail::overload{
      []() noexcept {
        die("invalid table slice encoding");
      },
      [&](const auto& encoded) noexcept {
        auto& state_ptr = state(encoded, state_);
        auto state = std::make_unique<std::decay_t<decltype(*state_ptr)>>(
          encoded, chunk_, batch, std::move(schema));
        state_ptr = state.get();
        const auto bytes = as_bytes(chunk_);
        // We create a second chunk with an intentionally decoupled reference
        // count here that we bind to the lifetime of the original chunk. This
        // avoids cyclic references between the table slice and its
        // encoding-specific state.
        chunk_
          = chunk::make(bytes, [state = std::move(state),
                                chunk = std::move(chunk_)]() mutable noexcept {
              --num_instances_;
              // We manually call the destructors in proper order here, as the
              // state (and thus the contained chunk that actually owns the
              // memory we decoupled) must be destroyed last and the destruction
              // order for lambda captures is undefined.
              chunk = {};
              state = {};
            });
      },
    };
    visit(f, as_flatbuffer(chunk_));
  }
}

table_slice::table_slice(const fbs::FlatTableSlice& flat_slice,
                         const chunk_ptr& parent_chunk,
                         enum verify verify) noexcept
  : table_slice(parent_chunk->slice(as_bytes(*flat_slice.data())), verify) {
  // nop
}

table_slice::table_slice(const std::shared_ptr<arrow::RecordBatch>& record_batch,
                         type schema, enum serialize serialize) {
  *this
    = table_slice_builder::create(record_batch, std::move(schema), serialize);
}

table_slice::table_slice(const table_slice& other) noexcept = default;

table_slice& table_slice::operator=(const table_slice& rhs) noexcept {
  if (this == &rhs)
    return *this;
  chunk_ = rhs.chunk_;
  offset_ = rhs.offset_;
  state_ = rhs.state_;
  return *this;
}

table_slice::table_slice(table_slice&& other) noexcept
  : chunk_{std::exchange(other.chunk_, {})},
    offset_{std::exchange(other.offset_, invalid_id)},
    state_{std::exchange(other.state_, {})} {
  // nop
}

table_slice& table_slice::operator=(table_slice&& rhs) noexcept {
  chunk_ = std::exchange(rhs.chunk_, {});
  offset_ = std::exchange(rhs.offset_, invalid_id);
  state_ = std::exchange(rhs.state_, {});
  return *this;
}

table_slice::~table_slice() noexcept = default;

table_slice table_slice::unshare() const noexcept {
  auto result = table_slice{chunk::copy(chunk_), verify::no};
  result.offset_ = offset_;
  return result;
}

// -- operators ----------------------------------------------------------------

// TODO: Dispatch to optimized implementations if the encodings are the same.
bool operator==(const table_slice& lhs, const table_slice& rhs) noexcept {
  if (!lhs.chunk_ && !rhs.chunk_)
    return true;
  constexpr auto check_metadata = true;
  return to_record_batch(lhs)->Equals(*to_record_batch(rhs), check_metadata);
}

bool operator!=(const table_slice& lhs, const table_slice& rhs) noexcept {
  return !(lhs == rhs);
}

// -- properties ---------------------------------------------------------------

enum table_slice_encoding table_slice::encoding() const noexcept {
  auto f = detail::overload{
    []() noexcept {
      return table_slice_encoding::none;
    },
    [&](const auto& encoded) noexcept {
      return state(encoded, state_)->encoding;
    },
  };
  return visit(f, as_flatbuffer(chunk_));
}

const type& table_slice::schema() const noexcept {
  auto f = detail::overload{
    []() noexcept {
      static const auto schema = type{};
      return &schema;
    },
    [&](const auto& encoded) noexcept {
      return &state(encoded, state_)->schema();
    },
  };
  return *visit(f, as_flatbuffer(chunk_));
}

table_slice::size_type table_slice::rows() const noexcept {
  auto f = detail::overload{
    []() noexcept {
      return size_type{};
    },
    [&](const auto& encoded) noexcept {
      return state(encoded, state_)->rows();
    },
  };
  return visit(f, as_flatbuffer(chunk_));
}

table_slice::size_type table_slice::columns() const noexcept {
  auto f = detail::overload{
    []() noexcept {
      return size_type{};
    },
    [&](const auto& encoded) noexcept {
      return state(encoded, state_)->columns();
    },
  };
  return visit(f, as_flatbuffer(chunk_));
}

id table_slice::offset() const noexcept {
  return offset_;
}

void table_slice::offset(id offset) noexcept {
  offset_ = offset;
}

time table_slice::import_time() const noexcept {
  auto f = detail::overload{
    []() noexcept {
      return time{};
    },
    [&](const auto& encoded) noexcept {
      return state(encoded, state_)->import_time();
    },
  };
  return visit(f, as_flatbuffer(chunk_));
}

void table_slice::import_time(time import_time) noexcept {
  if (import_time == this->import_time())
    return;
  // We work around the uniqueness requirement for the const_cast below by
  // creating a new table slice here that points to the same data as the current
  // table slice. This implies that the table slice is no longer in one
  // contiguous buffer.
  if (chunk_ && !chunk_->unique())
    *this = table_slice{to_record_batch(*this), schema()};
  auto f = detail::overload{
    []() noexcept {
      die("cannot assign import time to invalid table slice");
    },
    [&](const auto& encoded) noexcept {
      auto& mutable_state
        = const_cast<std::add_lvalue_reference_t<std::remove_const_t<
          std::remove_reference_t<decltype(*state(encoded, state_))>>>>(
          *state(encoded, state_));
      mutable_state.import_time(import_time);
    },
  };
  visit(f, as_flatbuffer(chunk_));
}

bool table_slice::is_serialized() const noexcept {
  auto f = detail::overload{
    []() noexcept {
      return true;
    },
    [&](const auto& encoded) noexcept {
      return state(encoded, state_)->is_serialized();
    },
  };
  return visit(f, as_flatbuffer(chunk_));
}

size_t table_slice::instances() noexcept {
  return num_instances_;
}

// -- data access --------------------------------------------------------------

void table_slice::append_column_to_index(table_slice::size_type column,
                                         value_index& index) const {
  VAST_ASSERT(offset() != invalid_id);
  auto f = detail::overload{
    []() noexcept {
      die("cannot append column of invalid table slice to index");
    },
    [&](const auto& encoded) noexcept {
      return state(encoded, state_)
        ->append_column_to_index(offset(), column, index);
    },
  };
  return visit(f, as_flatbuffer(chunk_));
}

data_view table_slice::at(table_slice::size_type row,
                          table_slice::size_type column) const {
  VAST_ASSERT(row < rows());
  VAST_ASSERT(column < columns());
  auto f = detail::overload{
    [&]() noexcept -> data_view {
      die("cannot access data of invalid table slice");
    },
    [&](const auto& encoded) noexcept {
      return state(encoded, state_)->at(row, column);
    },
  };
  return visit(f, as_flatbuffer(chunk_));
}

data_view table_slice::at(table_slice::size_type row,
                          table_slice::size_type column, const type& t) const {
  VAST_ASSERT(row < rows());
  VAST_ASSERT(column < columns());
  auto f = detail::overload{
    [&]() noexcept -> data_view {
      die("cannot access data of invalid table slice");
    },
    [&](const auto& encoded) noexcept {
      return state(encoded, state_)->at(row, column, t);
    },
  };
  return visit(f, as_flatbuffer(chunk_));
}

std::shared_ptr<arrow::RecordBatch> to_record_batch(const table_slice& slice) {
  auto f = detail::overload{
    []() noexcept -> std::shared_ptr<arrow::RecordBatch> {
      die("cannot access record batch of invalid table slice");
    },
    [&](const auto& encoded) noexcept -> std::shared_ptr<arrow::RecordBatch> {
      // The following does not work on all compilers, hence the ugly
      // decay+decltype workaround:
      //   if constexpr (state(encoding, slice.state_)->encoding
      //                 == table_slice_encoding::arrow) { ... }
      constexpr auto encoding
        = std::decay_t<decltype(*state(encoded, slice.state_))>::encoding;
      static_assert(encoding == table_slice_encoding::arrow);
      return state(encoded, slice.state_)->record_batch();
    },
  };
  return visit(f, as_flatbuffer(slice.chunk_));
}

// -- concepts -----------------------------------------------------------------

std::span<const std::byte> as_bytes(const table_slice& slice) noexcept {
  VAST_ASSERT(slice.is_serialized());
  return as_bytes(slice.chunk_);
}

// -- operations ---------------------------------------------------------------

table_slice concatenate(std::vector<table_slice> slices) {
  slices.erase(std::remove_if(slices.begin(), slices.end(),
                              [](const auto& slice) {
                                return slice.encoding()
                                       == table_slice_encoding::none;
                              }),
               slices.end());
  if (slices.empty())
    return {};
  if (slices.size() == 1)
    return std::move(slices[0]);
  auto schema = slices[0].schema();
  VAST_ASSERT(std::all_of(slices.begin(), slices.end(),
                          [&](const auto& slice) {
                            return slice.schema() == schema;
                          }),
              "concatenate requires slices to be homogeneous");
  auto builder = caf::get<record_type>(schema).make_arrow_builder(
    arrow::default_memory_pool());
  auto arrow_schema = schema.to_arrow_schema();
  const auto resize_result
    = builder->Resize(detail::narrow_cast<int64_t>(rows(slices)));
  VAST_ASSERT(resize_result.ok(), resize_result.ToString().c_str());
  const auto append_columns
    = [&](const auto& self, const record_type& schema,
          const type_to_arrow_array_t<record_type>& array,
          type_to_arrow_builder_t<record_type>& builder) noexcept -> void {
    // NTOE: Passing nullptr for the valid_bytes parameter has the undocumented
    // special meaning of all appenbded entries being valid. The Arrow unit
    // tests do the same thing in a few places; if this ever starts to cause
    // issues, we can create a vector<uint8_t> with desired_batch_size entries
    // of the value 1, call .data() on that and pass it in here instead.
    const auto append_status
      = builder.AppendValues(array.length(), /*valid_bytes*/ nullptr);
    VAST_ASSERT_CHEAP(append_status.ok(), append_status.ToString().c_str());
    for (auto field_index = 0; field_index < array.num_fields();
         ++field_index) {
      const auto field_type = schema.field(field_index).type;
      const auto& field_array = *array.field(field_index);
      auto& field_builder = *builder.field_builder(field_index);
      const auto append_column = detail::overload{
        [&](const record_type& concrete_field_type) noexcept {
          const auto& concrete_field_array
            = caf::get<type_to_arrow_array_t<record_type>>(field_array);
          auto& concrete_field_builder
            = caf::get<type_to_arrow_builder_t<record_type>>(field_builder);
          self(self, concrete_field_type, concrete_field_array,
               concrete_field_builder);
        },
        [&]<concrete_type Type>(
          [[maybe_unused]] const Type& concrete_field_type) noexcept {
          const auto& concrete_field_array
            = caf::get<type_to_arrow_array_t<Type>>(field_array);
          auto& concrete_field_builder
            = caf::get<type_to_arrow_builder_t<Type>>(field_builder);
          constexpr auto can_use_array_slice_api
            = basic_type<Type> && //
              !arrow::is_extension_type<type_to_arrow_type_t<Type>>::value;
          if constexpr (can_use_array_slice_api) {
            const auto append_array_slice_result
              = concrete_field_builder.AppendArraySlice(
                *concrete_field_array.data(), 0, array.length());
            VAST_ASSERT_CHEAP(append_array_slice_result.ok(),
                              append_array_slice_result.ToString().c_str());
          } else {
            // For complex types and extension types we cannot use the
            // AppendArraySlice API, so we need to take a slight detour by
            // manually appending column by column. This is almost exactly
            // what AppendArraySlice does under the hood, but since it's just
            // not implemented for extension types we need to do some extra
            // work here.
            const auto& concrete_field_array_storage
              = [&]() noexcept -> const type_to_arrow_array_storage_t<Type>& {
              // For extension types we need to additionally unwrap
              // the inner storage array.
              if constexpr (arrow::is_extension_type<
                              type_to_arrow_type_t<Type>>::value)
                return static_cast<const type_to_arrow_array_storage_t<Type>&>(
                  *concrete_field_array.storage());
              else
                return concrete_field_array;
            }();
            const auto reserve_result
              = concrete_field_builder.Reserve(array.length());
            VAST_ASSERT_CHEAP(reserve_result.ok(),
                              reserve_result.ToString().c_str());
            for (auto row = 0; row < array.length(); ++row) {
              if (concrete_field_array_storage.IsNull(row)) {
                const auto append_null_result
                  = concrete_field_builder.AppendNull();
                VAST_ASSERT(append_null_result.ok(),
                            append_null_result.ToString().c_str());
                continue;
              }
              const auto append_builder_result
                = append_builder(concrete_field_type, concrete_field_builder,
                                 value_at(concrete_field_type,
                                          concrete_field_array_storage, row));
              VAST_ASSERT(append_builder_result.ok(),
                          append_builder_result.ToString().c_str());
            }
          }
        },
      };
      caf::visit(append_column, field_type);
    }
  };
  for (const auto& slice : slices) {
    auto batch = to_record_batch(slice);
    append_columns(append_columns, caf::get<record_type>(schema),
                   *batch->ToStructArray().ValueOrDie(), *builder);
  }
  const auto rows = builder->length();
  if (rows == 0)
    return {};
  const auto array = builder->Finish().ValueOrDie();
  auto batch = arrow::RecordBatch::Make(
    std::move(arrow_schema), rows,
    caf::get<type_to_arrow_array_t<record_type>>(*array).fields());
  auto result = table_slice{batch, schema};
  result.offset(slices[0].offset());
  result.import_time(slices[0].import_time());
  return result;
}

generator<table_slice>
select(const table_slice& slice, expression expr, const ids& hints) {
  VAST_ASSERT(slice.encoding() != table_slice_encoding::none);
  const auto offset = slice.offset() == invalid_id ? 0 : slice.offset();
  auto slice_ids = make_ids({{offset, offset + slice.rows()}});
  auto selection = slice_ids;
  if (!hints.empty())
    selection &= hints;
  // Do no rows qualify?
  if (!any(selection))
    co_return;
  // Evaluate the filter expression.
  if (!caf::holds_alternative<caf::none_t>(expr)) {
    // Tailor the expression to the type; this is required for using the
    // evaluate function, which expects field and type extractors to be resolved
    // already.
    auto tailored_expr = tailor(expr, slice.schema());
    if (!tailored_expr)
      co_return;
    selection = evaluate(*tailored_expr, slice, selection);
    // Do no rows qualify?
    if (!any(selection))
      co_return;
  }
  // Do all rows qualify?
  if (rank(selection) == slice.rows()) {
    co_yield slice;
    co_return;
  }
  // Start slicing and dicing.
  auto batch = to_record_batch(slice);
  for (const auto [first, last] : select_runs(selection)) {
    auto selected = table_slice{
      batch->Slice(detail::narrow_cast<int64_t>(first - offset),
                   detail::narrow_cast<int64_t>(last - first)),
      slice.schema(),
    };
    selected.offset(offset + first);
    selected.import_time(slice.import_time());
    co_yield std::move(selected);
  }
}

table_slice head(table_slice slice, size_t num_rows) {
  if (slice.encoding() == table_slice_encoding::none)
    return {};
  if (num_rows >= slice.rows())
    return slice;
  auto rb = to_record_batch(slice);
  auto head = table_slice{rb->Slice(0, detail::narrow_cast<int64_t>(num_rows)),
                          slice.schema()};
  head.offset(slice.offset());
  head.import_time(slice.import_time());
  return head;
}

table_slice tail(table_slice slice, size_t num_rows) {
  if (slice.encoding() == table_slice_encoding::none)
    return {};
  if (num_rows >= slice.rows())
    return slice;
  auto rb = to_record_batch(slice);
  auto head = table_slice{
    rb->Slice(detail::narrow_cast<int64_t>(slice.rows() - num_rows)),
    slice.schema()};
  head.offset(slice.offset());
  head.import_time(slice.import_time());
  return head;
}

std::pair<table_slice, table_slice>
split(const table_slice& slice, size_t partition_point) {
  VAST_ASSERT(slice.encoding() != table_slice_encoding::none);
  if (partition_point == 0)
    return {{}, slice};
  if (partition_point >= slice.rows())
    return {slice, {}};
  return {
    head(slice, partition_point),
    tail(slice, slice.rows() - partition_point),
  };
}

auto subslice(const table_slice& slice, size_t begin, size_t end)
  -> table_slice {
  VAST_ASSERT(begin <= end);
  VAST_ASSERT(end <= slice.rows());
  if (begin == 0 && end == slice.rows()) {
    return slice;
  }
  auto offset = slice.offset();
  auto batch = to_record_batch(slice);
  auto sub_slice = table_slice{
    batch->Slice(detail::narrow_cast<int64_t>(begin - offset),
                 detail::narrow_cast<int64_t>(end - begin)),
    slice.schema(),
  };
  sub_slice.offset(offset + begin);
  sub_slice.import_time(slice.import_time());
  return sub_slice;
}

uint64_t rows(const std::vector<table_slice>& slices) {
  auto result = uint64_t{0};
  for (const auto& slice : slices)
    result += slice.rows();
  return result;
}

std::optional<table_slice>
filter(const table_slice& slice, expression expr, const ids& hints) {
  if (slice.encoding() == table_slice_encoding::none) {
    return {};
  }
  auto selected = collect(select(slice, std::move(expr), hints));
  if (selected.empty())
    return {};
  return concatenate(std::move(selected));
}

std::optional<table_slice>
filter(const table_slice& slice, const expression& expr) {
  return filter(slice, expr, ids{});
}

std::optional<table_slice> filter(const table_slice& slice, const ids& hints) {
  return filter(slice, expression{}, hints);
}

uint64_t count_matching(const table_slice& slice, const expression& expr,
                        const ids& hints) {
  VAST_ASSERT(slice.encoding() != table_slice_encoding::none);
  const auto offset = slice.offset() == invalid_id ? 0 : slice.offset();
  if (expr == expression{}) {
    auto result = uint64_t{};
    for (auto id : select(hints)) {
      if (id < offset)
        continue;
      if (id >= offset + slice.rows())
        break;
      ++result;
    }
    return result;
  }
  // Tailor the expression to the type; this is required for using the
  // evaluate function, which expects field and type extractors to be resolved
  // already.
  auto tailored_expr = tailor(expr, slice.schema());
  if (!tailored_expr)
    return 0;
  return rank(evaluate(expr, slice, hints));
}

table_slice resolve_enumerations(table_slice slice) {
  auto type = caf::get<record_type>(slice.schema());
  // Resolve enumeration types, if there are any.
  auto transformations = std::vector<indexed_transformation>{};
  for (const auto& [field, index] : type.leaves()) {
    if (!caf::holds_alternative<enumeration_type>(field.type))
      continue;
    static auto transformation =
      [](struct record_type::field field,
         std::shared_ptr<arrow::Array> array) noexcept
      -> std::vector<
        std::pair<struct record_type::field, std::shared_ptr<arrow::Array>>> {
      const auto& et = caf::get<enumeration_type>(field.type);
      auto new_type = vast::type{string_type{}};
      new_type.assign_metadata(field.type);
      auto builder
        = string_type::make_arrow_builder(arrow::default_memory_pool());
      for (const auto& value : values(
             et, caf::get<type_to_arrow_array_t<enumeration_type>>(*array))) {
        if (!value) {
          const auto append_result = builder->AppendNull();
          VAST_ASSERT_EXPENSIVE(append_result.ok(),
                                append_result.ToString().c_str());
          continue;
        }
        const auto append_result
          = append_builder(string_type{}, *builder, et.field(*value));
        VAST_ASSERT_EXPENSIVE(append_result.ok(),
                              append_result.ToString().c_str());
      }
      return {{
        {field.name, new_type},
        builder->Finish().ValueOrDie(),
      }};
    };
    transformations.push_back({index, transformation});
  }
  return transform_columns(slice, transformations);
}

auto resolve_meta_extractor(const table_slice& slice, const meta_extractor& ex)
  -> view<data> {
  if (slice.encoding() == table_slice_encoding::none)
    return {};
  switch (ex.kind) {
    case meta_extractor::type: {
      return slice.schema().name();
    }
    case meta_extractor::import_time: {
      const auto import_time = slice.import_time();
      if (import_time == time{}) {
        // The table slice API returns the epoch timestamp if no import
        // time was set, so we convert that to null.
        return {};
      }
      return import_time;
    }
  }
  die("unhandled meta extractor kind");
}

auto resolve_operand(const table_slice& slice, const operand& op)
  -> std::pair<type, std::shared_ptr<arrow::Array>> {
  if (slice.encoding() == table_slice_encoding::none)
    return {};
  const auto batch = to_record_batch(slice);
  const auto& layout = caf::get<record_type>(slice.schema());
  auto inferred_type = type{};
  auto array = std::shared_ptr<arrow::Array>{};
  // Helper function that binds a fixed value.
  auto bind_value = [&](const data& value) {
    inferred_type = type::infer(value);
    if (not inferred_type) {
      inferred_type = type{string_type{}};
      // VAST has no N/A type equivalent for Arrow, so we just use a string type
      // here.
      auto builder
        = string_type::make_arrow_builder(arrow::default_memory_pool());
      const auto append_result = builder->AppendNulls(batch->num_rows());
      VAST_ASSERT(append_result.ok(), append_result.ToString().c_str());
      array = builder->Finish().ValueOrDie();
      return;
    }
    auto g = [&]<concrete_type Type>(const Type& inferred_type) {
      auto builder
        = inferred_type.make_arrow_builder(arrow::default_memory_pool());
      for (int i = 0; i < batch->num_rows(); ++i) {
        const auto append_result
          = append_builder(inferred_type, *builder,
                           make_view(caf::get<type_to_data_t<Type>>(value)));
        VAST_ASSERT(append_result.ok(), append_result.ToString().c_str());
      }
      array = builder->Finish().ValueOrDie();
    };
    caf::visit(g, inferred_type);
  };
  // Helper function that binds an existing array.
  auto bind_array = [&](const offset& index) {
    inferred_type = layout.field(index).type;
    array = arrow::FieldPath{index}.Get(*batch).ValueOrDie();
  };
  auto f = detail::overload{
    [&](const data& value) {
      bind_value(value);
    },
    [&](const field_extractor& ex) {
      for (const auto& index :
           layout.resolve_key_suffix(ex.field, slice.schema().name())) {
        bind_array(index);
        return;
      }
      bind_value({});
    },
    [&](const type_extractor& ex) {
      for (const auto& [field, index] : layout.leaves()) {
        bool match = field.type == ex.type;
        if (not match) {
          for (auto name : field.type.names()) {
            if (name == ex.type.name()) {
              match = true;
              break;
            }
          }
        }
        if (match) {
          bind_array(index);
          return;
        }
      }
      bind_value({});
    },
    [&](const meta_extractor& ex) {
      bind_value(materialize(resolve_meta_extractor(slice, ex)));
    },
    [&](const data_extractor& ex) {
      bind_array(layout.resolve_flat_index(ex.column));
    },
  };
  caf::visit(f, op);
  return {
    std::move(inferred_type),
    std::move(array),
  };
}

namespace {

/// Combines offsets such that starting with the first array the list offsets
/// are replaced with the values of the next list offsets array, repeated until
/// all list offsets arrays have been combined into one. This allows for
/// flattening lists in Arrow's data model.
auto combine_offsets(
  const std::vector<std::shared_ptr<arrow::Array>>& list_offsets)
  -> std::shared_ptr<arrow::Array> {
  VAST_ASSERT(not list_offsets.empty());
  auto it = list_offsets.begin();
  auto result = *it++;
  auto builder = arrow::Int32Builder{};
  for (; it < list_offsets.end(); ++it) {
    for (const auto& index : static_cast<const arrow::Int32Array&>(*result)) {
      VAST_ASSERT(index);
      const auto& next = static_cast<const arrow::Int32Array&>(**it);
      VAST_ASSERT(not next.IsNull(*index));
      auto append_result = builder.Append(next.Value(*index));
      VAST_ASSERT(append_result.ok(), append_result.ToString().c_str());
    }
    result = builder.Finish().ValueOrDie();
  }
  return result;
}

auto make_flatten_transformation(
  std::string_view separator, const std::string& name_prefix,
  std::vector<std::shared_ptr<arrow::Array>> list_offsets)
  -> indexed_transformation::function_type;

auto flatten_record(
  std::string_view separator, std::string_view name_prefix,
  const std::vector<std::shared_ptr<arrow::Array>>& list_offsets,
  struct record_type::field field, const std::shared_ptr<arrow::Array>& array)
  -> std::vector<
    std::pair<struct record_type::field, std::shared_ptr<arrow::Array>>>;

auto flatten_list(std::string_view separator, std::string_view name_prefix,
                  std::vector<std::shared_ptr<arrow::Array>> list_offsets,
                  struct record_type::field field,
                  const std::shared_ptr<arrow::Array>& array)
  -> std::vector<
    std::pair<struct record_type::field, std::shared_ptr<arrow::Array>>> {
  using result_type = std::vector<
    std::pair<struct record_type::field, std::shared_ptr<arrow::Array>>>;
  const auto& lt = caf::get<list_type>(field.type);
  auto list_array
    = std::static_pointer_cast<type_to_arrow_array_t<list_type>>(array);
  list_offsets.push_back(list_array->offsets());
  auto f = detail::overload{
    [&]<concrete_type Type>(const Type&) -> result_type {
      auto result = result_type{};
      if (list_offsets.empty()) {
        result.push_back({
          {
            fmt::format("{}{}", name_prefix, field.name),
            field.type,
          },
          array,
        });
      } else {
        auto combined_offsets = combine_offsets(list_offsets);
        result.push_back({
          {
            fmt::format("{}{}", name_prefix, field.name),
            field.type,
          },
          arrow::ListArray::FromArrays(*combined_offsets, *list_array->values())
            .ValueOrDie(),
        });
      }
      return result;
    },
    [&](const list_type& lt) -> result_type {
      return flatten_list(separator, name_prefix, std::move(list_offsets),
                          {field.name, lt}, list_array->values());
    },
    [&](const record_type& rt) -> result_type {
      return flatten_record(separator, name_prefix, list_offsets,
                            {field.name, rt}, list_array->values());
    },
  };
  return caf::visit(f, lt.value_type());
}

auto flatten_record(
  std::string_view separator, std::string_view name_prefix,
  const std::vector<std::shared_ptr<arrow::Array>>& list_offsets,
  struct record_type::field field, const std::shared_ptr<arrow::Array>& array)
  -> std::vector<
    std::pair<struct record_type::field, std::shared_ptr<arrow::Array>>> {
  using result_type = std::vector<
    std::pair<struct record_type::field, std::shared_ptr<arrow::Array>>>;
  const auto& rt = caf::get<record_type>(field.type);
  auto struct_array
    = std::static_pointer_cast<type_to_arrow_array_t<record_type>>(array);
  const auto next_name_prefix
    = fmt::format("{}{}{}", name_prefix, field.name, separator);
  auto transformations = std::vector<indexed_transformation>{};
  for (size_t i = 0; i < rt.num_fields(); ++i) {
    transformations.push_back(
      {offset{i},
       make_flatten_transformation(separator, next_name_prefix, list_offsets)});
  }
  auto [output_type, output_struct_array]
    = transform_columns(field.type, struct_array, transformations);
  VAST_ASSERT(output_type);
  VAST_ASSERT(output_struct_array);
  auto result = result_type{};
  result.reserve(output_struct_array->num_fields());
  const auto& output_rt = caf::get<record_type>(output_type);
  for (int i = 0; i < output_struct_array->num_fields(); ++i) {
    const auto field_view = output_rt.field(i);
    result.push_back({
      {std::string{field_view.name}, field_view.type},
      output_struct_array->field(i),
    });
  }
  return result;
}

auto make_flatten_transformation(
  std::string_view separator, const std::string& name_prefix,
  std::vector<std::shared_ptr<arrow::Array>> list_offsets)
  -> indexed_transformation::function_type {
  return [=](struct record_type::field field,
             std::shared_ptr<arrow::Array> array)
           -> std::vector<std::pair<struct record_type::field,
                                    std::shared_ptr<arrow::Array>>> {
    using result_type = std::vector<
      std::pair<struct record_type::field, std::shared_ptr<arrow::Array>>>;
    auto f = detail::overload{
      [&]<concrete_type Type>(const Type&) -> result_type {
        // Return unchanged, but use prefix, and wrap in a list if we need to.
        if (list_offsets.empty()) {
          return {
            {
              {
                fmt::format("{}{}", name_prefix, field.name),
                field.type,
              },
              array,
            },
          };
        }
        auto combined_offsets = combine_offsets(list_offsets);
        return {
          {
            {
              fmt::format("{}{}", name_prefix, field.name),
              type{list_type{field.type}},
            },
            arrow::ListArray::FromArrays(*combined_offsets, *array).ValueOrDie(),
          },
        };
      },
      [&](const list_type&) -> result_type {
        return flatten_list(separator, name_prefix, list_offsets,
                            std::move(field), array);
      },
      [&](const record_type&) -> result_type {
        return flatten_record(separator, name_prefix, list_offsets,
                              std::move(field), array);
      },
    };
    auto result = caf::visit(f, field.type);
    return result;
  };
}

auto make_rename_transformation(std::string new_name)
  -> indexed_transformation::function_type {
  return [new_name = std::move(new_name)](struct record_type::field field,
                                          std::shared_ptr<arrow::Array> array)
           -> std::vector<std::pair<struct record_type::field,
                                    std::shared_ptr<arrow::Array>>> {
    return {
      {
        {
          new_name,
          field.type,
        },
        array,
      },
    };
  };
}

} // namespace

auto flatten(table_slice slice, std::string_view separator) -> flatten_result {
  if (slice.rows() == 0)
    return {std::move(slice), {}};
  // This version of flatten sometimes breaks if there's a record in a list. We
  // detect this and warn if in that case.
  for (const auto& leaf : caf::get<record_type>(slice.schema()).leaves()) {
    if (const auto* lt = caf::get_if<list_type>(&leaf.field.type)) {
      if (caf::holds_alternative<record_type>(lt->value_type())) {
        VAST_WARN("flatten may produce wrong results for records inside lists "
                  "inside records; this bug will be fixed in a future release");
        break;
      }
    }
  }
  // NOTE: We cannot use arrow::StructArray::Flatten here because that does not
  // work recursively, see apache/arrow#20683. Hence, we roll our own version
  // here.
  auto renamed_fields = std::vector<std::string>{};
  auto transformations = std::vector<indexed_transformation>{};
  auto num_fields = caf::get<record_type>(slice.schema()).num_fields();
  transformations.reserve(num_fields);
  for (size_t i = 0; i < num_fields; ++i) {
    transformations.push_back(
      {offset{i}, make_flatten_transformation(separator, "", {})});
  }
  slice = transform_columns(slice, transformations);
  // Flattening cannot fail.
  VAST_ASSERT(slice.rows() > 0);
  // The slice may contain duplicate field name here, so we perform an
  // additional transformation to rename them in case we detect any.
  transformations.clear();
  const auto& layout = caf::get<record_type>(slice.schema());
  VAST_ASSERT(layout.num_fields() == layout.num_leaves());
  for (const auto& leaf : layout.leaves()) {
    size_t num_occurences = 0;
    if (std::any_of(transformations.begin(), transformations.end(),
                    [&](const auto& t) {
                      return t.index == leaf.index;
                    }))
      continue;
    for (const auto& index : layout.resolve_key_suffix(leaf.field.name)) {
      if (index <= leaf.index)
        continue;
      while (true) {
        ++num_occurences;
        if (num_occurences > 0) {
          auto new_name = fmt::format("{}_{}", leaf.field.name, num_occurences);
          if (layout.resolve_key(new_name).has_value()) {
            // The new field name also already exists, so we just continue
            // incrementing until we find a non-conflicting name.
            continue;
          }
          renamed_fields.push_back(
            fmt::format("{} -> {}", leaf.field.name, new_name));
          transformations.push_back(
            {index, make_rename_transformation(std::move(new_name))});
        }
        break;
      }
    }
  }
  VAST_ASSERT(std::is_sorted(transformations.begin(), transformations.end()));
  slice = transform_columns(slice, transformations);
  // Renaming cannot fail.
  VAST_ASSERT(slice.rows() > 0);
  return {
    std::move(slice),
    std::move(renamed_fields),
  };
}

} // namespace vast
