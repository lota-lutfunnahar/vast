setup_suite() {
  bats_require_minimum_version 1.8.0

  unset "${!VAST@}"
  # Enable bare mode so settings in ~/.config/vast or the build configuration
  # have no effect.
  export VAST_BARE=1

  mkdir -p cli-test-state
}

teardown_suite() {
  # coreutils rmdir has --ignore-fail-on-non-empty, but that is not portable.
  # We simply assume that an error means the directory is not empty.
  rmdir cli-test-state || true
}

BATS_SUITE_DIRNAME="${BATS_TEST_DIRNAME}"
export BATS_SUITE_DIRNAME
