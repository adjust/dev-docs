# Setup methods

% Class method setLogLevel

:::::{function} setLogLevel (logLevel)
:noindex:

Set the verbosity of logs you want to receive from the Adjust SDK.

{#react-native-setloglevel-invocation}
```ts
public setLogLevel(level: LogLevel): void
```

:param logLevel: The verbosity of the logging
:type logLevel: ADJLogLevel

% setLogLevel snippet

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

::::{dropdown} Available log levels
:::{list-table}
:header-rows: 1

* - Log level
   - Description
* - `AdjustLogLevel.Verbose`
   - Enable all logging
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

% Class method setDefaultTracker

::::{function} setDefaultTracker (defaultTracker)
:noindex:

Define a default tracker token. Adjust assigns organic installs to this tracker token.

{#react-native-setdefaulttracker-invocation}
```ts
public setDefaultTracker(defaultTracked: string): void
```

:param defaultTracker: The tracker token to which all preinstalled sessions are attributed
:type defaultTracker: String

% setDefaultTracker snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setDefaultTracker("{TrackerToken}");
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setExternalDeviceId

::::{function} setExternalDeviceId (externalDeviceId)
:noindex:

Sets an external device identifier for reporting purposes.

{#react-native-setexternaldeviceid-invocation}
```ts
public setExternalDeviceId(externalDeviceId: string): void
```

:param externalDeviceId: The external device ID associated with the device
:type externalDeviceId: String

% setExternalDeviceId snippet

:::{tab-set-code}

{emphasize-line="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setExternalDeviceId("{Your-External-Device-Id}");
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setShouldLaunchDeeplink

::::{function} setShouldLaunchDeeplink (shouldLaunchDeeplink)
:noindex:

Enables or disables launching deferred deep links with the SDK. If **enabled**, the SDK launches deep links the user interacts with.

{#react-native-setlaunchdeferreddeeplink-invocation}
```ts
public setShouldLaunchDeeplink(shouldLaunchDeeplink: boolean): void
```

:param shouldLaunchDeeplink: Whether to enable launching deferred deep links
:type shouldLaunchDeeplink: Boolean

% setShouldLaunchDeeplink snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setShouldLaunchDeeplink(true);
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setSendInBackground

::::{function} setSendInBackground (sendInBackground)
:noindex:

Sets whether the SDK should send data while the app is running in the background.

{#react-native-setsendinbackground-invocation}
```ts
public setSendInBackground(sendInBackground: boolean): void
```

:param sendInBackground: Whether the SDK should send information when the app is running in the background
:type sendInBackground: Boolean

% setSendInBackground snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setSendInBackground(true);
//...
Adjust.create(adjustConfig);
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

{#react-native-setneedscost-invocation}
```ts
public setNeedsCost(needsCost: boolean): void
```

:param needsCost: Whether the SDK should gather cost data
:type needsCost: Boolean

% setNeedsCost snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setNeedsCost(true);
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setDelayStart

::::{function} setDelayStart (delayStart)
:noindex:

Sets a delay before the SDK starts to allow data to load before session information is sent to Adjust's servers. Maximum delay: 10 seconds.

{#react-native-setdelaystart-invocation}
```ts
public setDelayStart(delayStart: number): void
```

:param delayStart: The time (in seconds) to delay the start of the SDK by
:type delayStart: number

% setDelayStart snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setDelayStart(5.5);
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setUserAgent

::::{function} setUserAgent (userAgent)
:noindex:

Define a user agent string to send with each request.

{#react-native-setuseragent-invocation}
```ts
public setUserAgent(userAgent: string): void
```
:param userAgent: The user agent to send with a request
:type userAgent: String

% setUserAgent snippet

{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.userAgent("your-app/1.2.3");
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setIsDeviceKnown

::::{function} setIsDeviceKnown (isDeviceKnown)
:noindex:

Specify whether a device is already known.

{#react-native-isdeviceknown-invocation}
```ts
public setDeviceKnown(isDeviceKnown: boolean): void
```
:param isDeviceKnown: Whether a device is already known
:type isDeviceKnown: Boolean

% setIsDeviceKnown snippet

{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setIsDeviceKnown(true);
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setEventBufferingEnabled

::::{function} setEventBufferingEnabled (eventBufferingEnabled)
:noindex:

Sets event buffering. If enabled, the SDK stores events on the device and sends all requests once per minute.

{#react-native-seteventbufferingenabled-invocation}
```ts
public setEventBufferingEnabled(eventBufferingEnabled: boolean): void
```

:param eventBufferingEnabled: Whether event buffering is enabled or not
:type eventBufferingEnabled: Boolean

% setEventBufferingEnabled snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setEventBufferingEnabled(true);
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setSessionSuccessDelegate

::::{function} setSessionSuccessDelegate (sessionSuccessDelegate)
:noindex:

Sets up a success callback to trigger a function when the SDK records a session.

{#react-native-setsessionsuccessdelegate-invocation}
```c#
public void setSessionSuccessDelegate(Action<AdjustSessionSuccess> sessionSuccessDelegate, string sceneName = "Adjust")
```

:param sessionSuccessDelegate: The function to launch when the SDK successfully records a session
:type sessionSuccessDelegate: Action

% setSessionSuccessDelegate snippet

{tab-set-code}

{emphasize-lines="3, 7-9"}
```c#
AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setSessionSuccessDelegate(SessionSuccessCallback);
//...
Adjust.start(adjustConfig);
//...
public void SessionSuccessCallback (AdjustSessionSuccess sessionSuccessData) {
    //...
}
```

:::

% Snippet end

::::

% Class method end

% Class method setSessionFailureDelegate

::::{function} setSessionFailureDelegate (sessionSuccessDelegate)
:noindex:

Sets up a callback to trigger a function when the SDK fails to record a session.

```c#
:name: react-native-setSessionFailureDelegate-invocation

public void setSessionFailureDelegate(Action<AdjustSessionFailure> sessionFailureDelegate, string sceneName = "Adjust")
```

:param sessionFailureDelegate: The function to launch when the SDK fails to record a session
:type sessionFailureDelegate: Action

% setSessionFailureDelegate snippet

:::{tab-set-code}

{emphasize-lines="3, 7-9"}
```c#
AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setSessionFailureDelegate(SessionFailureCallback);
//...
Adjust.start(adjustConfig);
//...
public void SessionFailureCallback (AdjustSessionFailure sessionFailureData) {
    //...
}
```

:::

% Snippet end

::::

% Class method end

% Class method setEventSuccessDelegate

::::{function} eventSuccessDelegate (eventSuccessDelegate)
:noindex:

Sets up a success callback to trigger a function when the SDK records an event.

{#react-native-seteventsuccessdelegate-invocation}
```c#
public void setEventSuccessDelegate(Action<AdjustEventSuccess> eventSuccessDelegate, string sceneName = "Adjust")
```

:param eventSuccessDelegate: The function to launch when the SDK successfully records an event
:type eventSuccessDelegate: Action

% setEventSuccessDelegate snippet

:::{tab-set-code}

{emphasize-lines="3, 7-9"}
```c#
AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setEventSuccessDelegate(EventSuccessCallback);
//...
Adjust.start(adjustConfig);
//...
public void EventSuccessCallback(AdjustEventSuccess eventSuccessData) {
    //...
}
```

:::

% Snippet end

::::

% Class method end

% Class method setEventFailureDelegate

::::{function} setEventFailureDelegate (eventFailureDelegate)
:noindex:

Sets up a callback to trigger a function when the SDK fails to record an event.

{#react-native-seteventfailuredelegate-invocation}
```c#
public void setEventFailureDelegate(Action<AdjustEventFailure> eventFailureDelegate, string sceneName = "Adjust")
```

:param eventFailureDelegate: The function to launch when the SDK fails to record an event
:type eventFailureDelegate: Action

% setEventFailureDelegate snippet

{tab-set-code}

{emphasize-lines="3, 7-9"}
```c#
AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setEventFailureDelegate(EventFailureCallback);
//...
Adjust.start(adjustConfig);
//...
public void EventFailureCallback(AdjustEventFailure eventFailureData) {
    //...
}
```

:::

% Snippet end

::::

% Class method end

% Class method setAttributionChangedDelegate

::::{function} setAttributionChangedDelegate (attributionChangedDelegate)
:noindex:

Sets a delegate function that fires when a user's attribution information updates

{#react-native-setattributionchangeddelegate-invocation}
```c#
public void setAttributionChangedDelegate(Action<AdjustAttribution> attributionChangedDelegate, string sceneName = "Adjust")
```

:param attributionChangedDelegate: The delegate function that the SDK calls when a the user's attribution information changes
:type attributionChangedDelegate: Action

% setAttributionChangedDelegate snippet

:::{tab-set-code}

```c#
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

{#react-native-setpreinstalltrackingenabled-invocation}
```c#
public void setPreinstallTrackingEnabled(bool preinstallTrackingEnabled)
```

:param preinstallTrackingEnabled: Whether preinstall tracking is enabled
:type preinstallTrackingEnabled: Boolean

% setPreinstallTrackingEnabled snippet

:::{tab-set-code}

```c#
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

{#react-native-setpreinstallfilepath-invocation}
```c#
public void setPreinstallFilePath(string preinstallFilePath)
```

:param preinstallFilePath: The path where the preinstall information is written
:type preinstallFilePath: String

% setPreinstallFilePath snippet

:::{tab-set-code}

```c#
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

{#react-native-deactivateskadnetworkhandling-invocation}
```c#
public void deactivateSKAdNetworkHandling()
```

% deactivateSKAdNetworkHandling snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
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

% Class method setLinkMeEnabled

::::{function} setLinkMeEnabled (linkMeEnabled)
:noindex:

Toggle support for Adjust's [LinkMe solution](hc:linkme) for deep linking

{#react-native-setlinkmeenabled-invocation}
```c#
public void setLinkMeEnabled(bool linkMeEnabled)
```

:param linkMeEnabled: Whether LinkMe should be enabled
:type linkMeEnabled: Boolean

% setLinkMeEnabled snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
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

{#react-native-setconversionvalueupdatedcallbackdelegate-invocation}
```c#
public void setConversionValueUpdatedDelegate(Action<int> conversionValueUpdatedDelegate, string sceneName = "Adjust")
```

:param conversionValueUpdatedDelegate: The delegate function the SDK launches when the conversion value updates
:type conversionValueUpdatedDelegate: Action

% setConversionValueUpdatedDelegate snippet

:::{tab-set-code}

```c#
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
