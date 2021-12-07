#! /usr/bin/env python3

# NOTE: This script is also embedded in doc/cli/vast-export-arrow.md.
# When updating this file, please also update the embedded snippet.

# Example usage:
# vast -N export arrow '#type ~ /suricata.*/' | ./scripts/print-arrow.py

import sys
import pyarrow
import pyarrow.feather

# Open stdin in binary mode.
istream = pyarrow.input_stream(sys.stdin.buffer)
batch_count = 0
row_count = 0

# An Arrow reader consumes a stream of batches with the same schema. When
# reading the result for a query that returns multiple schemas, VAST will use
# multiple writers. Hence, we try to open record batch readers until an
# exception occurs.
try:
    while True:
        print(istream.size())
        print("open next table")
        table = pyarrow.feather.read_table(istream)
        try:
            batch_count += 1
            row_count += table.num_rows
            print(batch_count)
            print(row_count)
            istream.seek(table.nbytes)
            # print(str(table.schema))
        except StopIteration:
            # istream = pyarrow.input_stream(sys.stdin.buffer)
            print("done with current reader, rows: " + str(row_count))
            batch_count = 0
            row_count = 0
except:
    print("done with all readers")
