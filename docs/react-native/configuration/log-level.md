# Set log level

The Adjust SDK provides configurable log levels to return different amounts of information. The following log levels are available:

:::{list-table}
:header-rows: 1

* - Log level
   - Description
* - `AdjustConfig.LogLevelVerbose`
   - 	Enable full logging.
* - `AdjustConfig.LogLevelDebug`
   - Enable more detailed logging for debugging issues.
* - `AdjustConfig.LogLevelInfo`
   - Return info, warnings, errors, and assert logs.
* - `AdjustConfig.LogLevelWarn`	
   - Return warnings, errors, and assert logs.
* - `AdjustConfig.LogLevelError`	
   - Return only errors and assert logs.
* - `AdjustConfig.LogLevelAssert`	
   - Return only assert logs.
* - `AdjustConfig.LogLevelSuppress`	
   - Disable all logging.

:::

You can set your log level in the Adjust prefab menu or by calling the {code}`setLogLevel` method on your config instance.

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);
//...
Adjust.create(adjustConfig);
```

:::

## Disable all logging

To disable all log output when initializing the SDK manually, call {code}`setLogLevel(AdjustConfig.LogLevelSuppress)` on your config instance.

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setLogLevel(AdjustConfig.LogLevelSuppress);
//...
Adjust.create(adjustConfig);
```

:::
