# Setup methods

% Class method logLevel

:::::{function} logLevel
:noindex:

Set the verbosity of logs you want to receive from the Adjust SDK

{#flutter-loglevel-invocation}
```dart
AdjustLogLevel? logLevel;
```

% logLevel snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.logLevel = AdjustLogLevel.verbose;
//...
Adjust.start(adjustConfig);
```

:::

::::{dropdown} Available log levels
:::{list-table}
:header-rows: 1

* - Log level
   - Description
* - `AdjustLogLevel.Verbose`
   - Enable full logging
* - `AdjustLogLevel.Debug`
   - Enable debug logging
* - `AdjustLogLevel.Info`
   - Only show info level logs (default option)
* - `AdjustLogLevel.Warn`
   - Disable info logging
* - `AdjustLogLevel.Error`
   - Disable warning level logging and below
* - `AdjustLogLevel.Assert`
   - Disable error level logging and below
* - `AdjustLogLevel.Suppress`
   - Suppress all logging

:::
::::

% Snippet end

:::::

% Class method end

% Class method defaultTracker

::::{function} defaultTracker
:noindex:

Sets a default tracker token to record organic installs against

{#flutter-defaulttracker-invocation}
```dart
String? defaultTracker;
```

% defaultTracker snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.defaultTracker = '{TrackerToken}';
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method sendInBackground

::::{function} sendInBackground
:noindex:

Sets whether the SDK should send data while the app is running in the background

{#flutter-sendinbackground-invocation}
```dart
bool? sendInBackground;
```

% sendInBackground snippet

:::{tab-set-code}

{emphasize-lines="4"}
```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.sendInBackground = true;
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method sessionSuccessCallback

::::{function} sessionSuccessCallback (SessionSuccessCallback)
:noindex:

Sets up a success callback to trigger a function when the SDK records a session.

{#flutter-sessionsuccesscallback-invocation}
```dart
typedef void SessionSuccessCallback(AdjustSessionSuccess successData);
SessionSuccessCallback? sessionSuccessCallback;
```

:param SessionSuccessCallback: The function to launch when the SDK successfully records a session
:type SessionSuccessCallback: Action

% sessionSuccessCallback snippet

{tab-set-code}

{emphasize-lines="3-18"}
```dart
AdjustConfig adjustConfig = new AdjustConfig(yourAppToken, environment);

config.sessionSuccessCallback = (AdjustSessionSuccess sessionSuccessData) {
  print('[Adjust]: Session tracking success!');

  if (sessionSuccessData.message != null) {
    print('[Adjust]: Message: ' + sessionSuccessData.message);
  }
  if (sessionSuccessData.timestamp != null) {
    print('[Adjust]: Timestamp: ' + sessionSuccessData.timestamp);
  }
  if (sessionSuccessData.adid != null) {
    print('[Adjust]: Adid: ' + sessionSuccessData.adid);
  }
  if (sessionSuccessData.jsonResponse != null) {
    print('[Adjust]: JSON response: ' + sessionSuccessData.jsonResponse);
  }
};

Adjust.start(adjustConfig);

```

:::

% Snippet end

::::

% Class method end

% Class method sessionFailureCallback

::::{function} sessionFailureCallback (SessionFailureCallback)
:noindex:

Sets up a callback to trigger a function when the SDK fails to record a session.

{#flutter-sessionfailurecallback-invocation}

```dart
typedef void SessionFailureCallback(AdjustSessionFailure failureData);
SessionFailureCallback? sessionFailureCallback;
```

:param SessionFailureCallback: The function to launch when the SDK fails to record a session
:type SessionFailureCallback: Action

% sessionFailureCallback snippet

:::{tab-set-code}

{emphasize-lines="3-21"}
```dart
AdjustConfig adjustConfig = new AdjustConfig(yourAppToken, environment);

config.sessionFailureCallback = (AdjustSessionFailure sessionFailureData) {
  print('[Adjust]: Session tracking failure!');

  if (sessionFailureData.message != null) {
    print('[Adjust]: Message: ' + sessionFailureData.message);
  }
  if (sessionFailureData.timestamp != null) {
    print('[Adjust]: Timestamp: ' + sessionFailureData.timestamp);
  }
  if (sessionFailureData.adid != null) {
    print('[Adjust]: Adid: ' + sessionFailureData.adid);
  }
  if (sessionFailureData.willRetry != null) {
    print('[Adjust]: Will retry: ' + sessionFailureData.willRetry.toString());
  }
  if (sessionFailureData.jsonResponse != null) {
    print('[Adjust]: JSON response: ' + sessionFailureData.jsonResponse);
  }
};

Adjust.start(adjustConfig);

```

:::

% Snippet end

::::

% Class method end

% Class method eventSuccessCallback

::::{function} eventSuccessCallback (EventSuccessCallback)
:noindex:

Sets up a success callback to trigger a function when the SDK records an event.

{#flutter-eventsuccesscallback-invocation}
```dart
typedef void EventSuccessCallback(AdjustEventSuccess successData);
EventSuccessCallback? eventSuccessCallback;
```

:param EventSuccessCallback: The function to launch when the SDK successfully records an event
:type EventSuccessCallback: Action

% eventSuccessCallback snippet

:::{tab-set-code}

{emphasize-lines="3-24"}
```dart
AdjustConfig adjustConfig = new AdjustConfig(yourAppToken, environment);

config.eventSuccessCallback = (AdjustEventSuccess eventSuccessData) {
  print('[Adjust]: Event tracking success!');

  if (eventSuccessData.eventToken != null) {
    print('[Adjust]: Event token: ' + eventSuccessData.eventToken);
  }
  if (eventSuccessData.message != null) {
    print('[Adjust]: Message: ' + eventSuccessData.message);
  }
  if (eventSuccessData.timestamp != null) {
    print('[Adjust]: Timestamp: ' + eventSuccessData.timestamp);
  }
  if (eventSuccessData.adid != null) {
    print('[Adjust]: Adid: ' + eventSuccessData.adid);
  }
  if (eventSuccessData.callbackId != null) {
    print('[Adjust]: Callback ID: ' + eventSuccessData.callbackId);
  }
  if (eventSuccessData.jsonResponse != null) {
    print('[Adjust]: JSON response: ' + eventSuccessData.jsonResponse);
  }
};

Adjust.start(adjustConfig);

```

:::

% Snippet end

::::

% Class method end

% Class method eventFailureCallback

::::{function} eventFailureCallback (EventFailureCallback)
:noindex:

Sets up a callback to trigger a function when the SDK fails to record an event.

{#flutter-eventfailurecallback-invocation}
```dart
typedef void EventFailureCallback(AdjustEventFailure failureData);
EventFailureCallback? eventFailureCallback;
```

:param EventFailureCallback: The function to launch when the SDK fails to record an event
:type EventFailureCallback: Action

% eventFailureCallback snippet

{tab-set-code}

{emphasize-lines="3, 7-9"}
```dart

AdjustConfig adjustConfig = new AdjustConfig(yourAppToken, environment);

config.eventFailureCallback = (AdjustEventFailure eventFailureData) {
  print('[Adjust]: Event tracking failure!');

  if (eventFailureData.eventToken != null) {
    print('[Adjust]: Event token: ' + eventFailureData.eventToken);
  }
  if (eventFailureData.message != null) {
    print('[Adjust]: Message: ' + eventFailureData.message);
  }
  if (eventFailureData.timestamp != null) {
    print('[Adjust]: Timestamp: ' + eventFailureData.timestamp);
  }
  if (eventFailureData.adid != null) {
    print('[Adjust]: Adid: ' + eventFailureData.adid);
  }
  if (eventFailureData.callbackId != null) {
    print('[Adjust]: Callback ID: ' + eventFailureData.callbackId);
  }
  if (eventFailureData.willRetry != null) {
    print('[Adjust]: Will retry: ' + eventFailureData.willRetry.toString());
  }
  if (eventFailureData.jsonResponse != null) {
    print('[Adjust]: JSON response: ' + eventFailureData.jsonResponse);
  }
};

Adjust.start(adjustConfig);

```

:::

% Snippet end

::::

% Class method end

% Class method delayStart

::::{function} delayStart
:noindex:

Sets a delay before the SDK starts to allow data to load before session information is sent to Adjust's servers. Maximum delay: 10 seconds

{#flutter-delaystart-invocation}
```dart
double? delayStart;
```

% delayStart snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.delayStart(5.5);
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method externalDeviceId

::::{function} externalDeviceId
:noindex:

Sets an external device identifier for reporting purposes

{#flutter-externaldeviceid-invocation}
```dart
String? externalDeviceId;
```

% externalDeviceId snippet

:::{tab-set-code}

{emphasize-line="3"}
```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.externalDeviceId = '{Your-External-Device-Id}';
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setEventBufferingEnabled

::::{function} setEventBufferingEnabled (eventBufferingEnabled)
:noindex:

Sets event buffering. If enabled, the SDK stores events on the device and sends all requests once per minute.

{#flutter-seteventbufferingenabled-invocation}
```dart
public void setEventBufferingEnabled(bool eventBufferingEnabled)
```

:param eventBufferingEnabled: Whether event buffering is enabled or not
:type eventBufferingEnabled: Boolean

% setEventBufferingEnabled snippet

:::{tab-set-code}

```dart
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
//...
adjustConfig.setEventBufferingEnabled(true);
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setNeedsCost

::::{function} setNeedsCost (needsCost)
:noindex:

:::{versionadded} v4.24.0
Sets whether the SDK should gather cost data. This is accessible in the user's attribution information.
:::

{#flutter-setneedscost-invocation}
```dart
public void setNeedsCost(bool needsCost)
```

:param needsCost: Whether the SDK should gather cost data
:type needsCost: bool

% setNeedsCost snippet

:::{tab-set-code}

```dart
AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setNeedsCost(true);
```

:::

% Snippet end

::::

% Class method end

% Class method setAttributionChangedDelegate

::::{function} setAttributionChangedDelegate (attributionChangedDelegate)
:noindex:

Sets a delegate function that fires when a user's attribution information updates

{#flutter-setattributionchangeddelegate-invocation}
```dart
public void setAttributionChangedDelegate(Action<AdjustAttribution> attributionChangedDelegate, string sceneName = "Adjust")
```

:param attributionChangedDelegate: The delegate function that the SDK calls when a the user's attribution information changes
:type attributionChangedDelegate: Action

% setAttributionChangedDelegate snippet

:::{tab-set-code}

```dart
:emphasize-lines: 9, 13-16

using com.adjust.sdk;

public class ExampleGUI : MonoBehaviour {
    void OnGUI() {
        if (GUI.Button(new Rect(0, 0, Screen.width, Screen.height), "callback")) {
            AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
            adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
            adjustConfig.setAttributionChangedDelegate(this.attributionChangedDelegate);
            Adjust.start(adjustConfig);
        }
    }

    public void attributionChangedDelegate(AdjustAttribution attribution) {
        Debug.Log("Attribution changed");
        // ...
    }
}
```

:::

% Snippet end

::::

% Class method end

% Class method setPreinstallTrackingEnabled

::::{function} setPreinstallTrackingEnabled (preinstallTrackingEnabled)
:noindex:

Enables or disables preinstall tracking

{#flutter-setpreinstalltrackingenabled-invocation}
```dart
public void setPreinstallTrackingEnabled(bool preinstallTrackingEnabled)
```

:param preinstallTrackingEnabled: Whether preinstall tracking is enabled
:type preinstallTrackingEnabled: Boolean

% setPreinstallTrackingEnabled snippet

:::{tab-set-code}

```dart
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setPreinstallTrackingEnabled(true);
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setPreinstallFilePath

::::{function} setPreinstallFilePath (preinstallFilePath)
:noindex:

Defines a relative path where preinstall information is available. This directory must be world-readable

{#flutter-setpreinstallfilepath-invocation}
```dart
public void setPreinstallFilePath(string preinstallFilePath)
```

:param preinstallFilePath: The path where the preinstall information is written
:type preinstallFilePath: String

% setPreinstallFilePath snippet

:::{tab-set-code}

```dart
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setPreinstallFilePath("../EngagementFile.xml");
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method deactivateSKAdNetworkHandling

::::{function} deactivateSKAdNetworkHandling
:noindex:

Turns off communication with SKAdNetwork. Communication is *enabled* by default

{#flutter-deactivateskadnetworkhandling-invocation}
```dart
public void deactivateSKAdNetworkHandling()
```

% deactivateSKAdNetworkHandling snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.deactivateSKAdNetworkHandling();
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setLaunchDeferredDeeplink

::::{function} setLaunchDeferredDeeplink (launchDeferredDeeplink)
:noindex:

Enables or disables launching deferred deep links with the SDK. If **enabled**, the SDK launches deep links the user interacts with

{#flutter-setlaunchdeferreddeeplink-invocation}
```dart
public void setLaunchDeferredDeeplink(bool launchDeferredDeeplink)
```

:param launchDeferredDeeplink: Whether to enable launching deferred deep links
:type launchDeferredDeeplink: Boolean

% setLaunchDeferredDeeplink snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
//...
adjustConfig.setLaunchDeferredDeeplink(true);
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setLinkMeEnabled

::::{function} setLinkMeEnabled (linkMeEnabled)
:noindex:

Toggle support for Adjust's [LinkMe solution](hc:linkme) for deep linking

{#flutter-setlinkmeenabled-invocation}
```dart
public void setLinkMeEnabled(bool linkMeEnabled)
```

:param linkMeEnabled: Whether LinkMe should be enabled
:type linkMeEnabled: Boolean

% setLinkMeEnabled snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setLinkMeEnabled(true);
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setConversionValueUpdatedCallbackDelegate

::::{function} setConversionValueUpdatedCallbackDelegate(conversionValueUpdatedDelegate)
:noindex:

Sets a delegate function to call when the user's conversion value updates.

{#flutter-setconversionvalueupdatedcallbackdelegate-invocation}
```dart
public void setConversionValueUpdatedDelegate(Action<int> conversionValueUpdatedDelegate, string sceneName = "Adjust")
```

:param conversionValueUpdatedDelegate: The delegate function the SDK launches when the conversion value updates
:type conversionValueUpdatedDelegate: Action

% setConversionValueUpdatedDelegate snippet

:::{tab-set-code}

```dart
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setConversionValueUpdatedDelegate(ConversionValueUpdatedCallback);
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end
