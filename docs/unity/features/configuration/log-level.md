# Set log level

The Adjust SDK provides configurable log levels to return different amounts of information. You can set your log level in the Adjust prefab menu or by calling the [`setLogLevel` method](unity-setLogLevel-invocation) on your config instance.

:::{include} /unity/reference/AdjustConfig/setup.md
:start-after: setLogLevel snippet
:end-before: Snippet end
:::

## Disable all logging

To disable all log output when initializing the SDK manually, call `setLogLevel(AdjustLogLevel.Suppress)` on your config instance. You need to set `allowSuppressLogLevel` by passing a `true` value as the third argument in your `AdjustConfig` declaration.

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setLogLevel(AdjustLogLevel.Suppress);
//...
Adjust.start(adjustConfig);
```
:::
::::

## View compiled logs on Windows

If your target is Windows-based and you want to see the compiled logs from the SDK in **Production** mode, redirect the log output to your app while testing it in **Sandbox** mode.

To register a log delegate, call the [`setLogDelegate` method](unity-setLogDelegate-invocation) on your `AdjustConfig` instance.

:::{important}
You must call the {code}`setLogDelegate` method **before** you initialize the Adjust SDK.
:::

:::{include} /unity/reference/AdjustConfig/setup.md
:start-after: setLogDelegate snippet
:end-before: Snippet end
:::
