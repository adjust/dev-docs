# Set log level

The Adjust SDK provides configurable log levels to return different amounts of information. The following log levels are available:

```{include} /fragments/unity/data/adjustloglevel-enum.md
```

You can set your log level in the Adjust prefab menu or by calling the {code}`setLogLevel` method on your config instance.

```{include} /fragments/unity/snippets/setloglevel.md
```

## [Disable all logging](disable-all-logging)

To disable all log output when initializing the SDK manually, call {code}`setLogLevel(AdjustLogLevel.Suppress)` on your config instance. You need to set {code}`allowSuppressLogLevel` by passing a `true` value as the third argument in your `AdjustConfig` declaration.

```{include} /fragments/unity/snippets/allowsuppressloglevel.md
```

## View compiled logs on Windows

If your target is Windows-based and you want to see the compiled logs from our library in **Production** mode, redirect the log output to your app while testing it in **Sandbox** mode.

To register a log delegate, call the {code}`setLogDelegate` method on your `AdjustConfig` instance.

:::{important}
You must call the {code}`setLogDelegate` method **before** you initialize the Adjust SDK.
:::

```{include} /fragments/unity/snippets/setlogdelegate.md
```
