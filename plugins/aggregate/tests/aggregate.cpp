//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2021 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

// NOTE: This file contains an example for using the CAF testing framework, and
// does not contain any meaningful tests for the example plugin. It merely
// exists to show how to setup unit tests.

#define SUITE aggregate

#include <vast/concept/parseable/to.hpp>
#include <vast/concept/parseable/vast.hpp>
#include <vast/plugin.hpp>
#include <vast/test/fixtures/events.hpp>
#include <vast/test/test.hpp>
#include <vast/transform_step.hpp>

#include <caf/settings.hpp>
#include <caf/test/dsl.hpp>

namespace vast {

namespace {

struct fixture : fixtures::events {
  fixture() {
    aggregate_plugin = plugins::find<transform_plugin>("aggregate");
    REQUIRE(aggregate_plugin);
  }

  const transform_plugin* aggregate_plugin = nullptr;
};

} // namespace

FIXTURE_SCOPE(aggregate_tests, fixture);

TEST(aggregate Zeek conn log) {
  auto opts = caf::settings{};
  caf::put(opts, "group-by", std::vector<std::string>{"ts"});
  caf::put(opts, "round-temporal-multiple", "1 day");
  caf::put(opts, "sum", std::vector<std::string>{"duration", "resp_pkts"});
  caf::put(opts, "min", std::vector<std::string>{"orig_ip_bytes"});
  caf::put(opts, "max", std::vector<std::string>{"resp_ip_bytes"});
  auto aggregate_step = unbox(aggregate_plugin->make_transform_step(opts));
  REQUIRE_EQUAL(rows(zeek_conn_log_full), 8462u);
  for (const auto& slice : zeek_conn_log_full)
    CHECK_EQUAL(aggregate_step->add(slice.layout(), to_record_batch(slice)),
                caf::none);
  const auto result = unbox(aggregate_step->finish());
  REQUIRE_EQUAL(result.size(), 1u);
  const auto aggregated_slice = table_slice{result[0].batch, result[0].layout};
  // NOTE: I calculated this data ahead of time using jq, so it can safely be
  // used for comparion here. -- DL
  const auto expected_data = std::vector<std::vector<std::string_view>>{
    {"2009-11-19", "179794541699806ns", "0", "621055", "286586076"},
    {"2009-11-18", "1010088519993ns", "48", "693", "98531"},
  };
  REQUIRE_EQUAL(aggregated_slice.rows(), expected_data.size());
  REQUIRE_EQUAL(aggregated_slice.columns(), expected_data[0].size());
  for (size_t row = 0; row < aggregated_slice.rows(); ++row)
    for (size_t column = 0; column < aggregated_slice.columns(); ++column)
      CHECK_EQUAL(materialize(aggregated_slice.at(row, column)), //
                  unbox(to<data>(expected_data[row][column])));
}

FIXTURE_SCOPE_END();

} // namespace vast
