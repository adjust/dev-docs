# Set log level

The Adjust SDK provides configurable log levels to return different amounts of information. The following log levels are available:

```{list-table}
:header-rows: 1

* - Value
   - Description
   - Availability
* - `ADJLogLevelVerbose`
   - Enable full logging
   - Sandbox
* - `ADJLogLevelDebug`
   - Enable more detailed logging for debugging issues
   - Sandbox
* - `ADJLogLevelInfo`
   - Return information, warnings, errors, and assert logs
   - Sandbox
* - `ADJLogLevelWarn`
   - Return warnings, errors, and assert logs
   - Sandbox
* - `ADJLogLevelError`
   - Return only errors and assert logs
   - Sandbox
* - `ADJLogLevelAssert`
   - Return only assert logs
   - Sandbox
* - `ADJLogLevelSuppress`
   - Disable all logging
   - * Sandbox
      * Production
```

You can set your log level by calling the `setLogLevel` method on your `ADJConfig` instance.

```{include} /ios/fragments/ADJConfig.md
:start-after: setLogLevel
:end-before: end
```
