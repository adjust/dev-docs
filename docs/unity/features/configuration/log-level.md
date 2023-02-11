# Set log level

The Adjust SDK provides configurable log levels to return different amounts of information. The following log levels are available:

```{list-table}
:header-rows: 1

* - Log level
   - Description
* - `AdjustLogLevel.Debug`
   - Enable full logging
* - `AdjustLogLevel.Info`
   - Enable more detailed logging for debugging issues
* - `AdjustLogLevel.Warn`
   - Return info, warnings, errors, and assert logs
* - `AdjustLogLevel.Warn`
   - Return warnings, errors, and assert logs
* - `AdjustLogLevel.Error`
   - Return only errors and assert logs
* - `AdjustLogLevel.Assert`
   - Return only assert logs
* - `AdjustLogLevel.Suppress`
   - Suppress all logging
```

You can set your log level in the Adjust prefab menu or by calling the {code}`setLogLevel` method on your config instance.

```{include} /unity/fragments/AdjustConfig.md
:start-after: setLogLevel
:end-before: methodEnd
```

## Disable all logging

To disable all log output when initializing the SDK manually, call {code}`setLogLevel(AdjustLogLevel.Suppress)` on your config instance. You need to set {code}`allowSuppressLogLevel` by passing a `true` value as the third argument in your `AdjustConfig` declaration.

```{include} /unity/fragments/AdjustConfig.md
:start-after: allowSuppressLogLevel
:end-before: methodEnd
```

## View compiled logs on Windows

If your target is Windows-based and you want to see the compiled logs from the SDK in **Production** mode, redirect the log output to your app while testing it in **Sandbox** mode.

To register a log delegate, call the {code}`setLogDelegate` method on your `AdjustConfig` instance.

:::{important}
You must call the {code}`setLogDelegate` method **before** you initialize the Adjust SDK.
:::

```{include} /unity/fragments/AdjustConfig.md
:start-after: setLogDelegate
:end-before: methodEnd
```
