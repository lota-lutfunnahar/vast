//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/detail/assert.hpp"
#include "vast/detail/bit.hpp"
#include "vast/detail/xxhash.h"

#include <cstddef>
#include <cstring>
#include <type_traits>
#include <xxhash.h>
#include <span>

namespace vast {

// Exposed xxHash tuning parameters.

/// Use special path for aligned inputs (XXH32 and XXH64 only).
static constexpr bool xxh_force_align_check = XXH_FORCE_ALIGN_CHECK;

/// Use fast-path for aligned read at the cost of one branch per hash.
#ifdef XXH_FORCE_MEMORY_ACCESS
static constexpr int xxh_force_memory_access = XXH_FORCE_MEMORY_ACCESS;
#else
static constexpr int xxh_force_memory_access = 0;
#endif

/// Allow null pointer input when hashing data of length greater 0.
static constexpr bool xxh_accept_null_input_pointer
  = XXH_ACCEPT_NULL_INPUT_POINTER;

class xxh64 {
public:
  static constexpr detail::endian endian
    = XXH_CPU_LITTLE_ENDIAN ? detail::endian::little : detail::endian::big;

  using result_type = XXH64_hash_t;
  using seed_type = XXH64_hash_t;

  static result_type
  make(std::span<const std::byte> bytes, seed_type seed = 0) noexcept {
    VAST_ASSERT(xxh_accept_null_input_pointer
                || !(bytes.data() == nullptr && bytes.size() > 0));
    return XXH64(bytes.data(), bytes.size(), seed);
  }

  explicit xxh64(seed_type seed = 0) noexcept {
    XXH64_reset(&state_, seed);
  }

  void add(std::span<const std::byte> bytes) noexcept {
    VAST_ASSERT(xxh_accept_null_input_pointer
                || !(bytes.data() == nullptr && bytes.size() > 0));
    XXH64_update(&state_, bytes.data(), bytes.size());
  }

  result_type finish() noexcept {
    return XXH64_digest(&state_);
  }

  template <class Inspector>
  friend auto inspect(Inspector& f, xxh64& x) {
    return f(x.state_);
  }

private:
  XXH64_state_t state_;
};

class xxh3_64 {
public:
  static constexpr detail::endian endian = detail::endian::native;

  using result_type = XXH64_hash_t;
  using seed_type = XXH64_hash_t;

  static result_type make(std::span<const std::byte> bytes) noexcept {
    VAST_ASSERT(xxh_accept_null_input_pointer
                || !(bytes.data() == nullptr && bytes.size() > 0));
    return XXH3_64bits(bytes.data(), bytes.size());
  }

  static result_type
  make(std::span<const std::byte> bytes, seed_type seed) noexcept {
    VAST_ASSERT(xxh_accept_null_input_pointer
                || !(bytes.data() == nullptr && bytes.size() > 0));
    return XXH3_64bits_withSeed(bytes.data(), bytes.size(), seed);
  }

  xxh3_64() noexcept {
    XXH3_INITSTATE(&state_);
    XXH3_64bits_reset(&state_);
  }

  explicit xxh3_64(seed_type seed) noexcept {
    std::memset(&state_, 0, sizeof(state_));
    XXH3_64bits_reset_withSeed(&state_, seed);
  }

  void add(std::span<const std::byte> bytes) noexcept {
    VAST_ASSERT(xxh_accept_null_input_pointer
                || !(bytes.data() == nullptr && bytes.size() > 0));
    XXH3_64bits_update(&state_, bytes.data(), bytes.size());
  }

  result_type finish() noexcept {
    return XXH3_64bits_digest(&state_);
  }

  template <class Inspector>
  friend auto inspect(Inspector& f, xxh3_64& x) {
    return f(x.state_);
  }

private:
  XXH3_state_t state_;
};

class xxh3_128 {
public:
  static constexpr detail::endian endian = detail::endian::native;

  using result_type = XXH128_hash_t;
  using seed_type = XXH64_hash_t;

  static result_type make(std::span<const std::byte> bytes) noexcept {
    VAST_ASSERT(xxh_accept_null_input_pointer
                || !(bytes.data() == nullptr && bytes.size() > 0));
    return XXH3_128bits(bytes.data(), bytes.size());
  }

  static result_type
  make(std::span<const std::byte> bytes, seed_type seed) noexcept {
    VAST_ASSERT(xxh_accept_null_input_pointer
                || !(bytes.data() == nullptr && bytes.size() > 0));
    return XXH3_128bits_withSeed(bytes.data(), bytes.size(), seed);
  }

  xxh3_128() noexcept {
    XXH3_INITSTATE(&state_);
    XXH3_128bits_reset(&state_);
  }

  explicit xxh3_128(seed_type seed) noexcept {
    std::memset(&state_, 0, sizeof(state_));
    XXH3_128bits_reset_withSeed(&state_, seed);
  }

  void add(std::span<const std::byte> bytes) noexcept {
    VAST_ASSERT(xxh_accept_null_input_pointer
                || !(bytes.data() == nullptr && bytes.size() > 0));
    XXH3_128bits_update(&state_, bytes.data(), bytes.size());
  }

  result_type finish() noexcept {
    return XXH3_128bits_digest(&state_);
  }

  template <class Inspector>
  friend auto inspect(Inspector& f, xxh3_128& x) {
    return f(x.state_);
  }

private:
  XXH3_state_t state_;
};

struct xxhash_base {
  using result_type = size_t;
  // If XXH_FORCE_NATIVE_FORMAT == 1 in xxhash.c, then use endian::native.
  static constexpr detail::endian endian = detail::endian::little;
 };
 
/// The 32-bit version of xxHash.
class xxhash32 : public xxhash_base {
 public:
  explicit xxhash32(result_type seed = 0) noexcept;
  void operator()(const void* x, size_t n) noexcept;
  explicit operator result_type() noexcept;
   template <class Inspector>
  friend auto inspect(Inspector& f, xxhash32& xxh) {
    return f(xxh.state_);
  }
 private:
  // Must be kept in sync with xxhash.h.
  struct state_type {
    unsigned total_len_32;
    unsigned large_len;
    unsigned v1;
    unsigned v2;
    unsigned v3;
    unsigned v4;
    unsigned mem32[4];
    unsigned memsize;
    unsigned reserved;
  };

  state_type state_;
 };

/// The 64-bit version of xxHash.
class xxhash64 : public xxhash_base {
public:
  explicit xxhash64(result_type seed = 0) noexcept;

  void add(std::span<const std::byte>) noexcept;

  result_type finish() noexcept;

   template <class Inspector>
  friend auto inspect(Inspector& f, xxhash64& xxh) {
    return f(xxh.state_);
   }
 
 private:
  // Must be kept in sync with xxhash.h.
  struct state_type {
    unsigned long long total_len;
    unsigned long long v1;
    unsigned long long v2;
    unsigned long long v3;
    unsigned long long v4;
    unsigned long long mem64[4];
    unsigned memsize;
    unsigned reserved[2];
  };

  state_type state_;
 };
 
/// The [xxhash](https://github.com/Cyan4973/xxHash) algorithm.
using xxhash = std::conditional_t<sizeof(void*) == 4, xxhash32, xxhash64>;


} // namespace vast
