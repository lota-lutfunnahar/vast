: "${BATS_TEST_TIMEOUT:=3}"

setup() {
  bats_load_library bats-support
  bats_load_library bats-assert
}

@test "the version command" {
  run -0 --separate-stderr vast version

  assert_output --partial '"Build Configuration": {'
  jq -e . > /dev/null 2>&1 <<< "$output"
}
