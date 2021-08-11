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

#include <caf/typed_event_based_actor.hpp>

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

struct parquet_store_builder_state {};

store_builder_actor::behavior_type parquet_store_builder(
  store_builder_actor::stateful_pointer<parquet_store_builder_state> self,
  filesystem_actor filesystem, std::string path) {
  return {
    [self](query, ids) -> caf::result<atom::done> {
      return caf::make_error(ec::unimplemented);
    },
    [self](atom::erase, ids) -> caf::result<atom::done> {
      return caf::make_error(ec::unimplemented);
    },
    [self](caf::stream<table_slice>)
      -> caf::result<caf::inbound_stream_slot<table_slice>> {
      return caf::make_error(ec::unimplemented);
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
    auto path = fmt::format("parquet-store/{}", id);
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
