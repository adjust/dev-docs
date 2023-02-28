# Setup methods

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
