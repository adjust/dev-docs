# Setup methods

% Class method setLogLevel

:::::{function} setLogLevel (logLevel)
:noindex:

Set the verbosity of logs you want to receive from the Adjust SDK

```{code-block} java
:name: android-setLogLevel-invocation

public void setLogLevel(LogLevel logLevel)
```

:param logLevel: The verbosity of the logging
:type logLevel: LogLevel

% setLogLevel snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin
```{code-block} kotlin
:emphasize-lines: 4

val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setLogLevel(LogLevel.VERBOSE)
//...
Adjust.onCreate(config)
```
:::
:::{tab-item} Java
:sync: java
```{code-block} java
:emphasize-lines: 4

String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setLogLevel(LogLevel.VERBOSE);
//...
Adjust.onCreate(config);
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
:emphasize-lines: 4

var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);
```
:::
::::

% Snippet end


::::{dropdown} Available log levels
% logLevel table
:::{list-table}
:header-rows: 1

* - Log level
   - Web View value
   - Description
* - `LogLevel.VERBOSE`
   - `AdjustConfig.LogLevelVerbose`
   - Enable all logging
* - `LogLevel.DEBUG`
   - `AdjustConfig.LogLevelDebug`
   - Enable debug logging
* - `LogLevel.INFO`
   - `AdjustConfig.LogLevelInfo`
   - Only show info level logs (default option)
* - `LogLevel.WARN`
   - `AdjustConfig.LogLevelWarn`
   - Disable info logging
* - `LogLevel.ERROR`
   - `AdjustConfig.LogLevelError`
   - Disable warning level logging and below
* - `LogLevel.ASSERT`
   - `AdjustConfig.LogLevelAssert`
   - Disable error level logging and below
* - `LogLevel.SUPPRESS`
   - `AdjustConfig.LogLevelSuppress`
   - Suppress all logging

:::
% tableEnd

::::
:::::

% Class method end

% Class method setExternalDeviceId

:::::{function} setExternalDeviceId (externalDeviceId)
:noindex:

:::{versionadded} v4.20.0
Sets an external device identifier for reporting purposes
:::

```{code-block} objc
:name: ios-setExternalDeviceId-invocation

@property (nonatomic, copy, nullable) NSString *externalDeviceId;
```

:param externalDeviceId: The external device ID associated with the device
:type externalDeviceId: NSString

% setExternalDeviceId snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin
```{code-block} kotlin
:emphasize-lines: 4

val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.externalDeviceId("{YourExternalDeviceId}")
//...
Adjust.onCreate(config)
```
:::
:::{tab-item} Java
:sync: java
```{code-block} java
:emphasize-lines: 4

String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.externalDeviceId("{YourExternalDeviceId}");
//...
Adjust.onCreate(config);
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
:emphasize-lines: 4

var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.externalDeviceId('{YourExternalDeviceId}');
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method setEventBufferingEnabled

:::::{function} setEventBufferingEnabled (eventBufferingEnabled)
:noindex:

Sets event buffering. If enabled, the SDK stores events on the device and sends all requests once per minute.

```{code-block} java
:name: android-setEventBufferingEnabled-invocation

public void setEventBufferingEnabled(Boolean eventBufferingEnabled)
```

:param eventBufferingEnabled: Whether event buffering is enabled or not
:type eventBufferingEnabled: boolean

% setEventBufferingEnabled snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin
```{code-block} kotlin
:emphasize-lines: 4

val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setEventBufferingEnabled(true)
//...
Adjust.onCreate(config)
```
:::
:::{tab-item} Java
:sync: java
```{code-block} java
:emphasize-lines: 4

String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setEventBufferingEnabled(true);
//...
Adjust.onCreate(config);
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
:emphasize-lines: 4

var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setEventBufferingEnabled(true);
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method setSendInBackground

:::::{function} setSendInBackground (sendInBackground)
:noindex:

Sets whether the SDK should send data while the app is running in the background

```{code-block} java
:name: android-setSendInBackground-invocation

public void setSendInBackground(boolean sendInBackground)
```

:param sendInBackground: Whether the SDK should send information when the app is running in the background
:type sendInBackground: boolean

% setSendInBackground snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin
```{code-block} kotlin
:emphasize-lines: 4

val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setSendInBackground(true)
//...
Adjust.onCreate(config)
```
:::
:::{tab-item} Java
:sync: java
```{code-block} java
:emphasize-lines: 4

String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setSendInBackground(true);
//...
Adjust.onCreate(config);
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
:emphasize-lines: 4

var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setSendInBackground(true);
```
:::
::::

% Snippet end

:::::

% Class method end
