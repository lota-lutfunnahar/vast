//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <vast/concept/parseable/to.hpp>
#include <vast/concept/parseable/vast/data.hpp>
#include <vast/detail/fdinbuf.hpp>
#include <vast/detail/fdoutbuf.hpp>
#include <vast/detail/file_path_to_parser.hpp>
#include <vast/detail/posix.hpp>
#include <vast/detail/string.hpp>
#include <vast/logger.hpp>
#include <vast/plugin.hpp>

#include <caf/error.hpp>

#include <archive.h>
#include <archive_entry.h>
#include <chrono>
#include <cstdio>
#include <fcntl.h>
#include <filesystem>
#include <memory>
#include <string_view>
#include <unistd.h>
#include <variant>

namespace {
const auto std_io_path = std::string{"-"};
} // namespace

namespace vast::plugins::file {

using file_description_deleter = std::function<void(int*)>;
using file_description_wrapper = std::shared_ptr<int>;

class plugin : public virtual loader_plugin, public virtual saver_plugin {
public:
  static constexpr auto max_chunk_size = size_t{16384};

  auto
  make_loader(std::span<std::string const> args, operator_control_plane&) const
    -> caf::expected<generator<chunk_ptr>> override {
    auto read_timeout = read_timeout_;
    auto path = std::string{};
    auto following = false;
    auto mmap = false;
    auto is_socket = false;
    for (auto i = size_t{0}; i < args.size(); ++i) {
      const auto& arg = args[i];
      VAST_TRACE("processing loader argument {}", arg);
      if (arg == "--timeout") {
        if (i + 1 == args.size()) {
          return caf::make_error(ec::syntax_error,
                                 fmt::format("missing duration value"));
        }
        if (auto parsed_duration = to<vast::duration>(args[i + 1])) {
          read_timeout = std::chrono::duration_cast<std::chrono::milliseconds>(
            *parsed_duration);
          ++i;
        } else {
          return caf::make_error(ec::syntax_error,
                                 fmt::format("could not parse duration: {}",
                                             args[i + 1]));
        }
      } else if (arg == "-") {
        path = ::std_io_path;
      } else if (arg == "--mmap") {
        mmap = true;
      } else if (arg == "-f" || arg == "--follow") {
        following = true;
      } else if (not arg.starts_with("-")) {
        std::error_code err{};
        auto status = std::filesystem::status(arg, err);
        if (err) {
          return caf::make_error(ec::parse_error,
                                 fmt::format("could not access file {}: {}",
                                             arg, err));
        }
        is_socket = (status.type() == std::filesystem::file_type::socket);
        if (path == ::std_io_path) {
          return caf::make_error(ec::parse_error,
                                 fmt::format("file argument {} can not be "
                                             "combined with "
                                             "stdin file argument",
                                             arg));
        }
        path = arg;
      } else {
        return caf::make_error(
          ec::invalid_argument,
          fmt::format("unexpected argument for 'file' connector: {}", arg));
      }
    }
    if (path.empty()) {
      return caf::make_error(ec::syntax_error,
                             fmt::format("no file specified"));
    }
    if (mmap) {
      if (path == ::std_io_path) {
        return caf::make_error(ec::filesystem_error, "cannot mmap STDIN");
      }
      if (following) {
        return caf::make_error(ec::filesystem_error,
                               "cannot use `--follow` with `--mmap`");
      }
      auto chunk = chunk::mmap(path);
      if (not chunk)
        return std::move(chunk.error());
      return std::invoke(
        [](chunk_ptr chunk) mutable -> generator<chunk_ptr> {
          co_yield std::move(chunk);
        },
        std::move(*chunk));
    }
    auto fd = file_description_wrapper(new int(STDIN_FILENO), [](auto* fd) {
      std::default_delete<int>()(fd);
    });
    if (is_socket) {
      if (path == ::std_io_path) {
        return caf::make_error(ec::filesystem_error, "cannot use STDIN as UNIX "
                                                     "domain socket");
      }
      auto uds = detail::unix_domain_socket::connect(path);
      if (!uds) {
        return caf::make_error(ec::filesystem_error,
                               fmt::format("unable to connect to UNIX domain "
                                           "socket at {}",
                                           path));
      }
      fd = file_description_wrapper(new int(uds.fd), [](auto fd) {
        if (*fd != -1) {
          ::close(*fd);
        }
        std::default_delete<int>()(fd);
      });
    } else {
      if (path != ::std_io_path) {
        fd = file_description_wrapper(new int(::open(path.c_str(), O_RDONLY)),
                                      [](auto fd) {
                                        if (*fd != -1) {
                                          ::close(*fd);
                                        }
                                        std::default_delete<int>()(fd);
                                      });
        if (*fd == -1) {
          return caf::make_error(ec::filesystem_error,
                                 fmt::format("open(2) for file {} failed {}:",
                                             path, std::strerror(errno)));
        }
      }
    }
    return std::invoke(
      [](auto timeout, auto fd, auto following) -> generator<chunk_ptr> {
        struct archive_entry* entry = nullptr;
        auto* a = archive_read_new();
        archive_read_support_filter_all(a);
        archive_read_support_format_raw(a);
        auto r = archive_read_open_fd(a, *fd, max_chunk_size);
        if (r == ARCHIVE_OK) {
          VAST_INFO("Using libarchive");
          while (archive_read_next_header(a, &entry) == ARCHIVE_OK) {
            const void* buf = nullptr;
            size_t len = 0;
            off_t offset = {};
            while (archive_read_data_block(a, &buf, &len, &offset)
                   != ARCHIVE_EOF) {
              auto view = std::span{static_cast<const std::byte*>(buf), len};
              auto chunk = chunk::copy(view);
              VAST_INFO("produced chunk of {} bytes", chunk->size());
              co_yield std::move(chunk);
            }
          }
          if (archive_read_free(a) != ARCHIVE_OK)
            VAST_WARN("???");
          co_return;
        }
        // auto in_buf = detail::fdinbuf(*fd, max_chunk_size);
        // in_buf.read_timeout() = timeout;
        // auto current_data = std::vector<std::byte>{};
        // current_data.reserve(max_chunk_size);
        // auto eof_reached = false;
        // while (following or not eof_reached) {
        //   auto current_char = in_buf.sbumpc();
        //   if (current_char != detail::fdinbuf::traits_type::eof()) {
        //     current_data.emplace_back(static_cast<std::byte>(current_char));
        //   }
        //   if (current_char == detail::fdinbuf::traits_type::eof()
        //       or current_data.size() == max_chunk_size) {
        //     eof_reached = (current_char == detail::fdinbuf::traits_type::eof()
        //                    and not in_buf.timed_out());
        //     if (eof_reached and current_data.empty() and not following) {
        //       break;
        //     }
        //     auto chunk = chunk::make(std::exchange(current_data, {}));
        //     co_yield std::move(chunk);
        //     if (eof_reached and not following) {
        //       break;
        //     }
        //     current_data.reserve(max_chunk_size);
        //   }
        // }
        co_return;
      },
      read_timeout, fd, following);
  }

  auto default_parser(std::span<std::string const> args) const
    -> std::pair<std::string, std::vector<std::string>> override {
    for (auto i = size_t{0}; i < args.size(); ++i) {
      const auto& arg = args[i];
      VAST_TRACE("processing loader argument {}", arg);
      if (arg == "-") {
        break;
      }
      if (arg == "--timeout") {
        ++i;
      } else if (!arg.starts_with("-")) {
        return {detail::file_path_to_parser(arg), {}};
      }
    }
    return {"json", {}};
  }

  auto initialize(const record&, const record& global_config)
    -> caf::error override {
    auto timeout
      = try_get<vast::duration>(global_config, "vast.import.read-timeout");
    if (!timeout.engaged()) {
      return std::move(timeout.error());
    }
    if (timeout->has_value()) {
      read_timeout_
        = std::chrono::duration_cast<std::chrono::milliseconds>(**timeout);
    }
    return caf::none;
  }

  auto make_saver(std::span<std::string const> args,
                  [[maybe_unused]] printer_info info,
                  operator_control_plane& ctrl) const
    -> caf::expected<saver> override {
    auto appending = false;
    auto real_time = false;
    auto is_socket = false;
    auto path = std::string{};
    for (auto i = size_t{0}; i < args.size(); ++i) {
      const auto& arg = args[i];
      VAST_TRACE("processing saver argument {}", arg);
      if (arg == "-") {
        path = ::std_io_path;
      } else if (arg == "-a" || arg == "--append") {
        appending = true;
      } else if (arg == "--real-time") {
        real_time = true;
      } else if (arg == "--uds") {
        is_socket = true;
      } else if (not arg.starts_with("-")) {
        if (path == ::std_io_path) {
          return caf::make_error(ec::parse_error,
                                 fmt::format("file argument {} can not be "
                                             "combined with "
                                             "stdout file argument",
                                             arg));
        }
        path = arg;
      } else {
        return caf::make_error(
          ec::invalid_argument,
          fmt::format("unexpected argument for 'file' sink: {}", arg));
      }
    }
    auto fd = file_description_wrapper(new int(STDOUT_FILENO), [](auto* fd) {
      std::default_delete<int>()(fd);
    });
    if (is_socket) {
      if (path == ::std_io_path) {
        return caf::make_error(ec::filesystem_error,
                               "cannot use STDOUT as UNIX "
                               "domain socket");
      }
      auto uds = detail::unix_domain_socket::connect(path);
      if (!uds) {
        return caf::make_error(ec::filesystem_error,
                               fmt::format("unable to connect to UNIX domain "
                                           "socket at {}",
                                           path));
      }
      fd = file_description_wrapper(new int(uds.fd), [](auto fd) {
        if (*fd != -1) {
          ::close(*fd);
        }
        std::default_delete<int>()(fd);
      });
    } else {
      if (path != ::std_io_path) {
        fd = file_description_wrapper(
          new int(::open(path.c_str(),
                         appending ? O_APPEND : O_CREAT | O_WRONLY | O_TRUNC,
                         0644)),
          [](auto fd) {
            if (*fd != -1) {
              ::close(*fd);
            }
            std::default_delete<int>()(fd);
          });
        if (*fd == -1) {
          return caf::make_error(ec::filesystem_error,
                                 fmt::format("open(2) for file {} failed: {}",
                                             path, std::strerror(errno)));
        }
      }
    }
    return [&ctrl, real_time, fd](chunk_ptr chunk) mutable {
      if (!fd) {
        return;
      }
      auto outbuf = detail::fdoutbuf(*fd);
      if (chunk) {
        outbuf.sputn(reinterpret_cast<const char*>(chunk->data()),
                     chunk->size());
        if (!real_time) {
          return;
        }
        auto sync_success = outbuf.pubsync();
        if (sync_success != -1) {
          ctrl.abort(caf::make_error(ec::filesystem_error,
                                     "writing to file failed: {}",
                                     std::strerror(errno)));
          fd.reset();
        }
      }
    };
  }

  auto default_printer([[maybe_unused]] std::span<std::string const> args) const
    -> std::pair<std::string, std::vector<std::string>> override {
    return {"json", {}};
  }

  auto saver_does_joining() const -> bool override {
    return true;
  }

  auto name() const -> std::string override {
    return "file";
  }

private:
  std::chrono::milliseconds read_timeout_{vast::defaults::import::read_timeout};
};

} // namespace vast::plugins::file

namespace vast::plugins::stdin_ {
class plugin : public virtual vast::plugins::file::plugin {
public:
  auto make_loader([[maybe_unused]] std::span<std::string const> args,
                   operator_control_plane& ctrl) const
    -> caf::expected<generator<chunk_ptr>> override {
    std::vector<std::string> new_args = {"-"};
    new_args.insert(new_args.end(), args.begin(), args.end());
    return vast::plugins::file::plugin::make_loader(new_args, ctrl);
  }

  auto default_parser([[maybe_unused]] std::span<std::string const> args) const
    -> std::pair<std::string, std::vector<std::string>> override {
    return {"json", {}};
  }

  auto name() const -> std::string override {
    return "stdin";
  }
};

} // namespace vast::plugins::stdin_

namespace vast::plugins::stdout_ {
class plugin : public virtual vast::plugins::file::plugin {
public:
  auto make_saver(std::span<std::string const> args, printer_info info,
                  operator_control_plane& ctrl) const
    -> caf::expected<saver> override {
    std::vector<std::string> new_args = {"-"};
    new_args.insert(new_args.end(), args.begin(), args.end());
    return vast::plugins::file::plugin::make_saver(new_args, std::move(info),
                                                   ctrl);
  }

  auto default_printer([[maybe_unused]] std::span<std::string const> args) const
    -> std::pair<std::string, std::vector<std::string>> override {
    return {"json", {}};
  }

  auto name() const -> std::string override {
    return "stdout";
  }
};

} // namespace vast::plugins::stdout_

VAST_REGISTER_PLUGIN(vast::plugins::file::plugin)
VAST_REGISTER_PLUGIN(vast::plugins::stdin_::plugin)
VAST_REGISTER_PLUGIN(vast::plugins::stdout_::plugin)
