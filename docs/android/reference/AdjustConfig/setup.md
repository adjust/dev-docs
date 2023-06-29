# Setup methods

% Class method setLogLevel

:::::{function} setLogLevel (logLevel)
:noindex:

Set the verbosity of logs you want to receive from the Adjust SDK

{#android-setloglevel-invocation}

```java
public void setLogLevel(LogLevel logLevel)
```

:param logLevel: The verbosity of the logging
:type logLevel: LogLevel

% setLogLevel snippet

:::{tab-set-code}

{emphasize-lines="4"}

```kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setLogLevel(LogLevel.VERBOSE)
//...
Adjust.onCreate(config)
```

{emphasize-lines="4"}

```java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setLogLevel(LogLevel.VERBOSE);
//...
Adjust.onCreate(config);
```

{emphasize-lines="4"}

```javascript
var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);
```

:::

% Snippet end

::::{dropdown} Available log levels
% logLevel table
:::{list-table}
:header-rows: 1

-  -  Log level
   -  Web View value
   -  Description
-  -  `LogLevel.VERBOSE`
   -  `AdjustConfig.LogLevelVerbose`
   -  Enable all logging
-  -  `LogLevel.DEBUG`
   -  `AdjustConfig.LogLevelDebug`
   -  Enable debug logging
-  -  `LogLevel.INFO`
   -  `AdjustConfig.LogLevelInfo`
   -  Only show info level logs (default option)
-  -  `LogLevel.WARN`
   -  `AdjustConfig.LogLevelWarn`
   -  Disable info logging
-  -  `LogLevel.ERROR`
   -  `AdjustConfig.LogLevelError`
   -  Disable warning level logging and below
-  -  `LogLevel.ASSERT`
   -  `AdjustConfig.LogLevelAssert`
   -  Disable error level logging and below
-  -  `LogLevel.SUPPRESS`
   -  `AdjustConfig.LogLevelSuppress`
   -  Suppress all logging

:::
% tableEnd

::::
:::::

% Class method end

% Class method setExternalDeviceId

::::{function} setExternalDeviceId (externalDeviceId)
:noindex:

:::{versionadded} v4.20.0
Sets an external device identifier for reporting purposes
:::

{#android-setexternaldeviceid-invocation}

```java
public void setExternalDeviceId(String externalDeviceId)
```

:param externalDeviceId: The external device ID associated with the device
:type externalDeviceId: String

% setExternalDeviceId snippet

:::{tab-set-code}

{emphasize-lines="4"}

```kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.externalDeviceId("{YourExternalDeviceId}")
//...
Adjust.onCreate(config)
```

{emphasize-lines="4"}

```java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.externalDeviceId("{YourExternalDeviceId}");
//...
Adjust.onCreate(config);
```

{emphasize-lines="4"}

```javascript
var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.externalDeviceId("{YourExternalDeviceId}");
```

:::

% Snippet end

::::

% Class method end

% Class method setEventBufferingEnabled

::::{function} setEventBufferingEnabled (eventBufferingEnabled)
:noindex:

Sets event buffering. If enabled, the SDK stores events on the device and sends all requests once per minute.

{#android-seteventbufferingenabled-invocation}

```java
public void setEventBufferingEnabled(Boolean eventBufferingEnabled)
```

:param eventBufferingEnabled: Whether event buffering is enabled or not
:type eventBufferingEnabled: boolean

% setEventBufferingEnabled snippet

:::{tab-set-code}

{emphasize-lines="4"}

```kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setEventBufferingEnabled(true)
//...
Adjust.onCreate(config)
```

{emphasize-lines="4"}

```java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setEventBufferingEnabled(true);
//...
Adjust.onCreate(config);
```

{emphasize-lines="4"}

```javascript
var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setEventBufferingEnabled(true);
```

:::

% Snippet end

::::

% Class method end

% Class method setDefaultTracker

::::{function} setDefaultTracker (defaultTracker)
:noindex:

Sets a default tracker token to record installs against

{#android-setdefaulttracker-invocation}

```java
public void setDefaultTracker(String defaultTracker)
```

:param defaultTracker: The tracker token to which all preinstalled sessions are attributed
:type defaultTracker: String

% setDefaultTracker snippet

:::{tab-set-code}

{emphasize-lines="4"}

```kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setDefaultTracker("{TrackerToken}")
//...
Adjust.onCreate(config)
```

{emphasize-lines="4"}

```java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setDefaultTracker("{TrackerToken}");
//...
Adjust.onCreate(config);
```

{emphasize-lines="4"}

```javascript
var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setDefaultTracker("{TrackerToken}");
```

:::

% Snippet end

::::

% Class method end

% Class method setSendInBackground

::::{function} setSendInBackground (sendInBackground)
:noindex:

Sets whether the SDK should send data while the app is running in the background

{#android-setsendinbackground-invocation}

```java
public void setSendInBackground(boolean sendInBackground)
```

:param sendInBackground: Whether the SDK should send information when the app is running in the background
:type sendInBackground: boolean

% setSendInBackground snippet

:::{tab-set-code}

{emphasize-lines="4"}

```kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setSendInBackground(true)
//...
Adjust.onCreate(config)
```

{emphasize-lines="4"}

```java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setSendInBackground(true);
//...
Adjust.onCreate(config);
```

{emphasize-lines="4"}

```javascript
var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setSendInBackground(true);
```

:::

% Snippet end

::::

% Class method end

% Class method setPreinstallTrackingEnabled

::::{function} setPreinstallTrackingEnabled (preinstallTrackingEnabled)
:noindex:

Enables or disables preinstall tracking

{#android-setpreinstalltrackingenabled-invocation}

```java
public void setPreinstallTrackingEnabled(boolean preinstallTrackingEnabled)
```

:param preinstallTrackingEnabled: Whether preinstall tracking is enabled
:type preinstallTrackingEnabled: Boolean

% setPreinstallTrackingEnabled snippet

:::{tab-set-code}

{emphasize-lines="4"}

```kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setPreinstallTrackingEnabled(true)
//...
Adjust.onCreate(config)
```

{emphasize-lines="4"}

```java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setPreinstallTrackingEnabled(true);
//...
Adjust.onCreate(config);
```

{emphasize-lines="4"}

```javascript
var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setPreinstallTrackingEnabled(true);
```

:::

% Snippet end

::::

% Class method end

% Class method setPreinstallFilePath

::::{function} setPreinstallFilePath (preinstallFilePath)
:noindex:

Defines a relative path where preinstall information is available. This directory must be world-readable

{#android-setpreinstallfilepath-invocation}

```java
public void setPreinstallFilePath(String preinstallFilePath)
```

:param preinstallFilePath: The path where the preinstall information is written
:type preinstallFilePath: String

% setPreinstallFilePath snippet

:::{tab-set-code}

{emphasize-lines="4"}

```kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setPreinstallFilePath("../EngagementFile.xml")
//...
Adjust.onCreate(config)
```

{emphasize-lines="4"}

```java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setPreinstallFilePath("../EngagementFile.xml");
//...
Adjust.onCreate(config);
```

{emphasize-lines="4"}

```javascript
var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setPreinstallFilePath("../EngagementFile.xml");
```

:::

% Snippet end

::::

% Class method end

% Class method setOnAttributionChangedListener

::::{function} setOnAttributionChangedListener (attributionChangedDelegate)
:noindex:

Sets a delegate function that fires when a user's attribution information updates

{#android-setonattributionchangedlistener-invocation}

```java
public void setOnAttributionChangedListener(OnAttributionChangedListener onAttributionChangedListener)
```

:param onAttributionChangedListener: The delegate function that the SDK calls when a the user's attribution information changes
:type onAttributionChangedListener: OnAttributionChangedListener

% setOnAttributionChangedListener snippet

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)

config.setOnAttributionChangedListener {
   override fun onAttributionChanged(attribution: AdjustAttribution) {}
}

Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);

config.setOnAttributionChangedListener(new OnAttributionChangedListener() {
   @Override
   public void onAttributionChanged(AdjustAttribution attribution) {}
});

Adjust.onCreate(config);
```

```javascript
function attributionCallback(attribution) {}

// ...

let adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setAttributionCallback(attributionCallback);
Adjust.onCreate(adjustConfig);
```

:::

% Snippet end

% setOnAttributionChangedListener Facebook snippet

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)

config.setOnAttributionChangedListener {
   val fbInstallReferrerJSONObject = extractFBInstallReferrerJSON(it)
}

fun extractFBInstallReferrerJSON(adjustAttribution: AdjustAttribution): JSONObject? {
   try {
      return JSONObject(adjustAttribution.fbInstallReferrer)
   } catch (e: JSONException) {
      Log.d("example", e.message!!)
   }
   return null
}

Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);

config.setOnAttributionChangedListener(new OnAttributionChangedListener() {
   @Override
   public void onAttributionChanged(AdjustAttribution adjustAttribution) {
   JSONObject fbInstallReferrerJSONObject = extractFBInstallReferrerJSON(adjustAttribution);
   }
});

@Nullable
JSONObject extractFBInstallReferrerJSON(AdjustAttribution adjustAttribution) {
   try {
      return new JSONObject(adjustAttribution.fbInstallReferrer);
   } catch (JSONException e) {
      Log.d("example", e.getMessage());
   }
   return null;
}

Adjust.onCreate(config);
```

:::

% Snippet end

::::

% Class method end

% Class method setNeedsCost

::::{function} setNeedsCost (needsCost)
:noindex:

Sets whether the SDK should gather cost data. This is accessible in the user's attribution information.

{#android-setneedscost-invocation}

```java
public void setNeedsCost(boolean needsCost)
```

:param needsCost: Whether the SDK should gather cost data
:type needsCost: boolean

% setNeedsCost snippet

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)
config.setNeedsCost(true)
Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setNeedsCost(true);
Adjust.onCreate(config);
```

```javascript
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setNeedsCost(true);
Adjust.onCreate(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setDelayStart

::::{function} setDelayStart (delayStart)
:noindex:

Sets a delay before the SDK starts to allow data to load before {term}`session` information is sent to Adjust's servers. Maximum delay: 10 seconds

{#android-setdelaystart-invocation}

```java
public void setDelayStart(double delayStart)
```

:param delayStart: The time (in seconds) to delay the start of the SDK by
:type delayStart: double

% setDelayStart snippet

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)
config.setDelayStart(5.5)
Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setDelayStart(5.5);
Adjust.onCreate(config);
```

```javascript
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setDelayStart(5.5);
Adjust.onCreate(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setOnSessionTrackingSucceededListener

::::{function} setOnSessionTrackingSucceededListener (onSessionTrackingSucceededListener)
:noindex:

Sets up a success callback to trigger a function when the SDK records a session.

{#android-setonsessiontrackingsucceededlistener-invocation}

```java
public void setOnSessionTrackingSucceededListener(OnSessionTrackingSucceededListener onSessionTrackingSucceededListener)
```

:param onSessionTrackingSucceededListener: The function to launch when the SDK successfully records a session
:type onSessionTrackingSucceededListener: OnSessionTrackingSucceededListener

% setOnSessionTrackingSucceededListener snippet

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)

config.setOnSessionTrackingSucceededListener(new OnSessionTrackingSucceededListener() {
   override fun onFinishedSessionTrackingSucceeded(sessionSuccessResponseData: AdjustSessionSuccess) {
      // ...
   }
})

Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);

config.setOnSessionTrackingSucceededListener(new OnSessionTrackingSucceededListener() {
   @Override
   public void onFinishedSessionTrackingSucceeded(AdjustSessionSuccess sessionSuccessResponseData) {
      // ...
   }
});

Adjust.onCreate(config)
```

```javascript
function sessionSuccessCallback(sessionSuccessResponseData) {}

let adjustConfig = new AdjustConfig(appToken, environment);
adjustConfig.setSessionSuccessCallback(sessionSuccessCallback);

Adjust.onCreate(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setOnSessionTrackingFailedListener

::::{function} setOnSessionTrackingFailedListener (onSessionTrackingFailedListener)
:noindex:

Sets up a callback to trigger a function when the SDK fails to record a {term}`session`.

{#android-setonsessiontrackingfailedlistener-invocation}

```java
public void setOnSessionTrackingFailedListener(OnSessionTrackingFailedListener onSessionTrackingFailedListener)
```

:param onSessionTrackingFailedListener: The function to launch when the SDK fails to record a session
:type onSessionTrackingFailedListener: OnSessionTrackingFailedListener

% setOnSessionTrackingFailedListener snippet

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)

config.setOnSessionTrackingFailedListener(new OnSessionTrackingFailedListener() {
   override fun onFinishedSessionTrackingFailed(sessionFailureResponseData: AdjustSessionFailure) {
      // ...
   }
})

Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);

config.setOnSessionTrackingFailedListener(new OnSessionTrackingFailedListener() {
   @Override
   public void onFinishedSessionTrackingFailed(AdjustSessionFailure sessionFailureResponseData) {
      // ...
   }
});

Adjust.onCreate(config)
```

```javascript
function sessionFailureCallback(sessionFailureResponseData) {}

let adjustConfig = new AdjustConfig(appToken, environment);
adjustConfig.setSessionFailureCallback(sessionFailureCallback);

Adjust.onCreate(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setOnEventTrackingSucceededListener

::::{function} setOnEventTrackingSucceededListener (onEventTrackingSucceededListener)
:noindex:

Sets up a success callback to trigger a function when the SDK records an event.

{#android-setoneventtrackingsucceededlistener-invocation}

```java
public void setOnEventTrackingSucceededListener(OnEventTrackingSucceededListener onEventTrackingSucceededListener)
```

:param onEventTrackingSucceededListener: The function to launch when the SDK successfully records an event
:type onEventTrackingSucceededListener: OnEventTrackingSucceededListener

% setOnEventTrackingSucceededListener snippet

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)

config.setOnEventTrackingSucceededListener(new OnEventTrackingSucceededListener() {
   override fun onFinishedEventTrackingSucceeded(eventSuccessResponseData: AdjustEventSuccess) {
      // ...
   }
})

Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);

config.setOnEventTrackingSucceededListener(new OnEventTrackingSucceededListener() {
   @Override
   public void onFinishedEventTrackingSucceeded(AdjustEventSuccess eventSuccessResponseData) {
      // ...
   }
});

Adjust.onCreate(config)
```

```javascript
function eventSuccessCallback(eventSuccessResponseData) {}

let adjustConfig = new AdjustConfig(appToken, environment);
adjustConfig.setEventSuccessCallback(eventSuccessCallback);

Adjust.onCreate(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setOnEventTrackingFailedListener

::::{function} setOnEventTrackingFailedListener (onEventTrackingFailedListener)
:noindex:

Sets up a callback to trigger a function when the SDK fails to record an event.

{#android-setoneventtrackingfailedlistener-invocation}

```java
public void setOnEventTrackingFailedListener(OnEventTrackingFailedListener onEventTrackingFailedListener)
```

:param onEventTrackingFailedListener: The function to launch when the SDK fails to record an event
:type onEventTrackingFailedListener: OnEventTrackingFailedListener

% setOnEventTrackingFailedListener snippet

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)

config.setOnEventTrackingFailedListener (OnEventTrackingFailedListener() {
   override fun onFinishedEventTrackingFailed(eventFailureResponseData: AdjustEventFailure) {
      // ...
   }
})

Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);

config.setOnEventTrackingFailedListener(new OnEventTrackingFailedListener() {
   @Override
   public void onFinishedEventTrackingFailed(AdjustEventFailure eventFailureResponseData) {
      // ...
   }
});

Adjust.onCreate(config)
```

```javascript
function eventFailureCallback(eventFailureResponseData) {}

let adjustConfig = new AdjustConfig(appToken, environment);
adjustConfig.setEventFailureCallback(eventFailureCallback);

Adjust.onCreate(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setOnDeeplinkResponseListener

::::{function} setOnDeeplinkResponseListener (onDeeplinkResponseListener)
:noindex:

Sets up a callback to trigger a function when the SDK receives a deferred deep link

{#android-setondeeplinkresponselistener-invocation}

```java
public void setOnDeeplinkResponseListener(OnDeeplinkResponseListener onDeeplinkResponseListener)
```

:param onDeeplinkResponseListener: The function to launch when the SDK receives a deferred deep link
:type onDeeplinkResponseListener: OnDeeplinkResponseListener

% setOnDeeplinkResponseListener snippet

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)

config.setOnDeeplinkResponseListener { deeplink ->
   Log.d("example", "Deferred deep link callback called!")
   Log.d("example", "Deep link URL: $deeplink")
   true
}

Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);

// Evaluate the deeplink to be launched.
config.setOnDeeplinkResponseListener(new OnDeeplinkResponseListener() {
   @Override
   public boolean launchReceivedDeeplink(Uri deeplink) {
      Log.d("example", "Deferred deep link callback called!");
      Log.d("example", "Deep link URL: " + deeplink);
      
      return true;
   }
});

Adjust.onCreate(config);
```

```javascript
function deferredDeeplinkCallback(deeplink) {
   console.log("Deferred deep link callback called!");
   console.log(`Deep link URL: ${deeplink}`);
}

let adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setOpenDeferredDeeplink(true);
adjustConfig.setDeferredDeeplinkCallback(deferredDeeplinkCallback);

Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end
