//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "vast/fwd.hpp"

#include "vast/ids.hpp"
#include "vast/logger.hpp"
#include "vast/plugin.hpp"
#include "vast/query.hpp"
#include "vast/system/actors.hpp"
#include "vast/table_slice.hpp"

#include <arrow/api.h>
#include <arrow/io/api.h>
#include <caf/attach_stream_sink.hpp>
#include <caf/typed_event_based_actor.hpp>
#include <parquet/arrow/reader.h>
#include <parquet/arrow/writer.h>
#include <parquet/exception.h>

namespace vast::system {

namespace {

struct parquet_store_state {};

store_actor::behavior_type
parquet_store(store_actor::stateful_pointer<parquet_store_state> self,
              filesystem_actor filesystem, std::string path) {
  return {
    [self](query, ids) -> caf::result<atom::done> {
      return caf::make_error(ec::unimplemented);
    },
    [self](atom::erase, ids) -> caf::result<atom::done> {
      return caf::make_error(ec::unimplemented);
    },
  };
}

struct parquet_store_builder_state {
  std::string path;
};

// TODO: Write into a buffer instead and pass it to the filesystem.
void write_parquet_file(const arrow::Table& table, const std::string& path) {
  std::shared_ptr<arrow::io::FileOutputStream> outfile;
  auto _error_or_value0 = (arrow::io::FileOutputStream::Open(path));
  ::arrow ::Status _s
    = ::arrow::internal::GenericToStatus(_error_or_value0.status());
  if (!_s.ok()) {
    throw ::parquet::ParquetStatusException(std ::move(_s));
  }
  outfile = std::move(_error_or_value0).ValueOrDie();
  // The last argument to the function call is the size of the RowGroup in
  // the parquet file. Normally you would choose this to be rather large but
  // for the example, we use a small value to have multiple RowGroups.
  parquet::WriterProperties::Builder builder;
  builder.version(parquet::ParquetVersion::PARQUET_2_0);
  auto props = builder.build();
  _s = ::arrow::internal::GenericToStatus(parquet::arrow::WriteTable(
    table, arrow::default_memory_pool(), outfile, 1000, props));
  if (!_s.ok()) {
    throw ::parquet::ParquetStatusException(std ::move(_s));
  }
}

store_builder_actor::behavior_type parquet_store_builder(
  store_builder_actor::stateful_pointer<parquet_store_builder_state> self,
  filesystem_actor filesystem, std::string path) {
  auto err = caf::error{};
  self->request(filesystem, caf::infinite, atom::get_v)
    .await(
      [&, self, path](std::filesystem::path& root) {
        self->state.path = fmt::format("{}/{}", root.string(), path);
        // std::filesystem::create_directories(root / std::filesystem::path{});
        VAST_INFO("self writes to {}", self->state.path);
      },
      [&](caf::error& e) {
        err = e;
        self->quit(e);
      });
  return {
    [self](query, ids) -> caf::result<atom::done> {
      return caf::make_error(ec::unimplemented);
    },
    [self](atom::erase, ids) -> caf::result<atom::done> {
      return caf::make_error(ec::unimplemented);
    },
    [self](
      caf::stream<table_slice> in) -> caf::inbound_stream_slot<table_slice> {
      return caf::attach_stream_sink(
               self, in, [=](caf::unit_t&) {},
               [=](caf::unit_t&, std::vector<table_slice>& batch) {
                 VAST_TRACE("{} gets batch of {} table slices", self,
                            batch.size());
                 for (auto slice : batch) {
                   // TODO: Group slices with the same layout and write them
                   // together.
                   auto rbs
                     = std::vector<std::shared_ptr<arrow::RecordBatch>>{};
                   rbs.push_back(as_record_batch(slice));
                   auto table = arrow::Table::FromRecordBatches(rbs);
                   write_parquet_file(*table.ValueOrDie(),
                                      self->state.path + "."
                                        + fmt::to_string(slice.offset()));
                 }
               },
               [=](caf::unit_t&, const caf::error&) {
                 VAST_DEBUG("{} stream shuts down", self);
                 // self->send(self, atom::internal_v, atom::persist_v);
               })
        .inbound_slot();
    },
    [self](atom::status, status_verbosity) -> caf::settings {
      return caf::settings{};
    },
  };
}

} // namespace

class parquet_store_plugin final : public virtual store_plugin {
public:
  caf::error initialize(data) override {
    return {};
  }

  [[nodiscard]] const char* name() const override {
    return "parquet-store";
  };

  [[nodiscard]] caf::expected<builder_and_header>
  make_store_builder(filesystem_actor fs, const vast::uuid& id) const override {
    auto path = fmt::format("parquet-store-{}", id);
    auto header = chunk::copy(path);
    auto builder = fs->home_system().spawn(parquet_store_builder, fs, path);
    return builder_and_header{builder, header};
  }

  [[nodiscard]] caf::expected<system::store_actor>
  make_store(filesystem_actor fs,
             std::span<const std::byte> header) const override {
    auto path = std::string{reinterpret_cast<const char*>(header.data()),
                            header.size()};
    return fs->home_system().spawn(parquet_store, fs, path);
  }
};

} // namespace vast::system

VAST_REGISTER_PLUGIN(vast::system::parquet_store_plugin)
