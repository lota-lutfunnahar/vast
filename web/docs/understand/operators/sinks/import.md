# import

Imports events into a VAST node.

## Synopsis

```
import
```

## Description

The `import` operator persists events in a VAST node.

Pipelines ending in the `import` operator always wait until all events in the
pipelines are written to disk.

## Examples

Import Zeek conn logs into a VAST node.

```
from file conn.log read zeek-tsv | import
```
