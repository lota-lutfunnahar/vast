# Prints the given parameters.
debug() {
  local level=$1
  shift
  if [ "$level" -le "${debug_level:-0}" ]; then
    echo "# $*" >&3
  fi
}

assert() {
  debug 0 "$*"
}

assert_sorted() {
  local output_="$output"
  output=$(sort <<< "$output_")
  assert_output "$@"
}

# TODO: Add documentation.
check() {
  local args=()
  if [[ -v step_nr_ ]]; then
    step_nr_=$(( step_nr_ + 1 ))
  else
    step_nr_=0
  fi
  local step
  step="step_$(printf '%02d' "${step_nr_}")"
  export step
  
  while [[ $# -gt 0 ]]; do
    case $1 in
      --bg)
        shift # past argument
        local process_group="$1"
        shift # past value
        ;;
      -c|--cmd)
        shift # past argument
        args+=("bash")
        args+=("-c")
        args+=("$1")
        shift # past value
        ;;
      *)
        args+=("$1") # save positional arg
        shift # past argument
        ;;
    esac
  done
  compare_or_update() {
    local file_ref_dir ref_path
    file_ref_dir="$(realpath --relative-to="${BATS_SUITE_DIRNAME}" "${BATS_TEST_FILENAME%.bats}")"
    ref_path="$(dirname "${BATS_SUITE_DIRNAME}")/reference/${file_ref_dir}/${BATS_TEST_NAME}"
    if [[ -v UPDATE ]]; then
      if [[ -z "${output}" ]]; then
        if [[ -f "${ref_path}/${step}.ref" ]]; then
          debug 0 "removing ${ref_path}/${step}.ref"
          rm "${ref_path}/${step}.ref"
        fi
      else
        mkdir -p "${ref_path}"
        local sorted
        sorted="$(printf '%s' "${output}" | sort)"
        if [[ -f "${ref_path}/${step}.ref" ]]; then
          local expected
          expected="$(<"${ref_path}/${step}.ref")"
          if [[ $sorted != "$expected" ]]; then
            debug 0 "updating ${ref_path}/${step}.ref"
            printf '%s' "${sorted}" > "${ref_path}/${step}.ref"
          else
            debug 1 "keeping ${ref_path}/${step}.ref"
          fi
        else
          debug 0 "creating ${ref_path}/${step}.ref"
          printf '%s' "${sorted}" > "${ref_path}/${step}.ref"
        fi
      fi
    else
      if [[ -f "${ref_path}/${step}.ref" ]]; then
        assert_output - < "${ref_path}/${step}.ref"
      else
        assert_output ""
      fi
    fi
  }
  debug 1 "running: ${args[*]}"
  if [ -n "${process_group}" ]; then
    {
      run -0 --separate-stderr -- "${args[@]}" 3>&-
      compare_or_update
    } &
    eval "$process_group+=(\"$!\")"
  else
    run -0 --separate-stderr -- "${args[@]}"
    compare_or_update
  fi
}

wait_all() {
  for pid in "$@"; do
    wait "$pid" || exit 1
  done
}

setup_db() {
  export VAST_DB_DIRECTORY="cli-test-state/$BATS_TEST_NAME"
  rm -rf "$VAST_DB_DIRECTORY"
}
teardown_db() {
  if [ -n  "$BATS_TEST_COMPLETED" ] && [  "$BATS_TEST_COMPLETED" -eq 1 ]; then
    rm -rf "$VAST_DB_DIRECTORY"
  fi
}

setup_node() {
  # The exec is needed so that signals to $NODE_PID actually reach the node.
  coproc NODE { exec vast -qq -e ":0" start --print-endpoint; }
  read -r -u "${NODE[0]}" VAST_ENDPOINT
  export VAST_ENDPOINT
}
teardown_node() {
  kill "$NODE_PID"
  # Hard kill the node after a bit of time.
  local seconds=5
  { sleep ${seconds} && { debug 0 "killing the node after ${seconds} second shutdown timeout"; kill -9 "$NODE_PID"; }; } &
  local killerPid=$!
  wait "$NODE_PID"
  # The sleep is a child process of the killer shell, so we have to use
  # `pkill -P`.
  pkill -P "$killerPid"
}

bats_load_library bats-support
bats_load_library bats-assert
