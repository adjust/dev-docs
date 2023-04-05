# AdjustConfig class

Use the methods in this class to set up the Adjust SDK.

:::{important}
The methods in this class must be called **before** you initialize the SDK.
:::

% Class method AdjustConfig

:::::{function} AdjustConfig(appToken, environment, logDelegate, logLevel)
:noindex:

Initialize the configuration object with your Adjust app token.

{#windows-AdjustConfig-invocation}
```c#
public AdjustConfig(string appToken, string environment, Action<string> logDelegate = null, LogLevel? logLevel = null)
```

:param appToken: Your Adjust app token
:type appToken: string
:param environment: The environment your app is running in
:type environment: string
:param logDelegate: A function to which logging is delegated
:type: logDelegate: Action\<string\>
:param logLevel: The verbosity of logging
:type logLevel: LogLevel
:returns: A config object initialized with the provided params
:rtype: AdjustConfig

% AdjustConfig snippet

:::{tab-set-code}

```c#
string appToken = "hmqwpvspxnuo";
string environment = AdjustConfig.EnvironmentSandbox;
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);
```

:::

% Snippet end

::::{dropdown} Available log levels

% logLevel table

:::{list-table}
:header-rows: 1

* - Log level
   - Description
* - `LogLevel.Verbose`
   - Enable all logging
* - `LogLevel.Debug`
   - Enable debug logging
* - `LogLevel.Info`
   - Only show info level logs (default option)
* - `LogLevel.Warn`
   - Disable info logging
* - `LogLevel.Error`
   - Disable warning level logging and below
* - `LogLevel.Assert`
   - Disable error level logging and below
* - `LogLevel.Suppress`
   - Suppress all logging

:::

% tableEnd

::::

:::::

% Class method end
