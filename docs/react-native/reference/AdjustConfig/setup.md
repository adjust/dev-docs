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

{#react-native-setshouldlaunchdeeplink-invocation}
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

:::{tab-set-code}

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

:::{tab-set-code}

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

% End of setup in original article

% Class method setDeferredDeeplinkCallbackListener

::::{function} setDeferredDeeplinkCallbackListener (uri)
:noindex:

Define a listener function that the SDK calls when opening a deep link.

{#react-native-setdeferreddeeplinkcallbacklistener-invocation}
```ts
public setDeferredDeeplinkCallbackListener(
      callback: (uri: AdjustUri) => void
    ): void
```

:param uri: Contains the deep link `uri` that calls the listener to start
:type uri: AdjustUri

% setDeferredDeeplinkCallbackListener snippet

:::{tab-set-code}

{emphasize-lines="3,4,5"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setDeferredDeeplinkCallbackListener(function(deeplink) {
    console.log("Deferred deep link URL content: " + deeplink);
});
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setAttributionCallbackListener

::::{function} setAttributionCallbackListener (AdjustAttribution)
:noindex:

Sets a delegate function that fires when a user's attribution information updates

{#react-native-setAttributionCallbackListener-invocation}
```ts
public setAttributionCallbackListener(
      callback: (attribution: AdjustAttribution) => void
    ): void
```

:param attribution: The delegate function that the SDK calls when a the user's attribution information changes
:type attribution: AdjustAttribution

% setAttributionCallbackListener snippet

:::{tab-set-code}

```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setAttributionCallbackListener(function(attribution) {
    // Printing all attribution properties.
    console.log("Attribution changed!");
    console.log(attribution.trackerToken);
    console.log(attribution.trackerName);
    console.log(attribution.network);
    console.log(attribution.campaign);
    console.log(attribution.adgroup);
    console.log(attribution.creative);
    console.log(attribution.clickLabel);
    console.log(attribution.adid);
    console.log(attribution.costType);
    console.log(attribution.costAmount);
    console.log(attribution.costCurrency);
    console.log(attribution.fbInstallReferrer);
});
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setEventTrackingSucceededCallbackListener

::::{function} setEventTrackingSucceededCallbackListener (eventSuccess)
:noindex:

Sets up a success callback to trigger a function when the SDK records an event.

{#react-native-setEventTrackingSucceededCallbackListener-invocation}
```ts
public setEventTrackingSucceededCallbackListener(
      callback: (eventSuccess: AdjustEventTrackingSuccess) => void
    ): void
```

:param eventSuccess: The function to launch when the SDK successfully records an event
:type eventSuccess: AdjustEventTrackingSuccess

% setEventTrackingSucceededCallbackListener snippet

:::{tab-set-code}

```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setEventTrackingSucceededCallbackListener(function(eventSuccess) {
    // Printing all event success properties.
    console.log("Event tracking succeeded!");
    console.log(eventSuccess.message);
    console.log(eventSuccess.timestamp);
    console.log(eventSuccess.eventToken);
    console.log(eventSuccess.callbackId);
    console.log(eventSuccess.adid);
    console.log(eventSuccess.jsonResponse);
});
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setEventTrackingFailedCallbackListener

::::{function} setEventTrackingFailedCallbackListener (eventFailed)
:noindex:

Sets up a callback to trigger a function when the SDK fails to record an event.

{#react-native-setEventTrackingFailedCallbackListener-invocation}
```ts
public setEventTrackingFailedCallbackListener(
      callback: (eventFailed: AdjustEventTrackingFailure) => void
    ): void
```

:param eventFailed: The function to launch when the SDK fails to record an event
:type eventFailed: AdjustEventTrackingFailure

% setEventTrackingFailedCallbackListener snippet

:::{tab-set-code}

```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setEventTrackingFailedCallbackListener(function(eventFailure) {
    // Printing all event failure properties.
    console.log("Event tracking failed!");
    console.log(eventFailure.message);
    console.log(eventFailure.timestamp);
    console.log(eventFailure.eventToken);
    console.log(eventFailure.callbackId);
    console.log(eventFailure.adid);
    console.log(eventFailure.willRetry);
    console.log(eventFailure.jsonResponse);
});
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setSessionTrackingSucceededCallbackListener

::::{function} setSessionTrackingSucceededCallbackListener (sessionSuccess)
:noindex:

Sets up a success callback to trigger a function when the SDK records a session.

{#react-native-setSessionTrackingSucceededCallbackListener-invocation}
```ts
public setSessionTrackingSucceededCallbackListener(
      callback: (sessionSuccess: AdjustSessionTrackingSuccess) => void
    ): void
```

:param sessionSuccess: The function to launch when the SDK successfully records a session
:type sessionSuccess: AdjustSessionTrackingSuccess

% setSessionTrackingSucceededCallbackListener snippet

:::{tab-set-code}

```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setSessionTrackingSucceededCallbackListener(function(sessionSuccess) {
    // Printing all session success properties.
    console.log("Session tracking succeeded!");
    console.log(sessionSuccess.message);
    console.log(sessionSuccess.timestamp);
    console.log(sessionSuccess.adid);
    console.log(sessionSuccess.jsonResponse);
});
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setSessionTrackingFailedCallbackListener

::::{function} setSessionTrackingFailedCallbackListener (sessionFailed)
:noindex:

Sets up a callback to trigger a function when the SDK fails to record a session.

{#unity-setSessionTrackingFailedCallbackListener-invocation}
```ts
public setSessionTrackingFailedCallbackListener(
      callback: (sessionFailed: AdjustSessionTrackingFailure) => void
    ): void
```

:param sessionFailed: The function to launch when the SDK fails to record a session
:type sessionFailed: AdjustSessionTrackingFailure

% setSessionTrackingFailedCallbackListener snippet

:::{tab-set-code}

```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setSessionTrackingFailedCallbackListener(function(sessionFailure) {
    // Printing all session failure properties.
    console.log("Session tracking failed!");
    console.log(sessionFailure.message);
    console.log(sessionFailure.timestamp);
    console.log(sessionFailure.adid);
    console.log(sessionFailure.willRetry);
    console.log(sessionFailure.jsonResponse);
});
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

## iOS config methods

% Class method setAllowiAdInfoReading

::::{function} setAllowiAdInfoReading(allowiAdInfoReading)
:noindex:

:::{deprecated} v4.33.4
Sets whether the Adjust SDK can read iAd framework data.
:::

{#react-native-setllowiadinforeading-invocation}
```ts
public setAllowiAdInfoReading(allowiAdInfoReading: boolean): void
```

:param allowiAdInfoReading: Whether iAd framework data is read by the Adjust SDK
:type allowiAdInfoReading: Boolean

% setAllowiAdInfoReading snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setAllowiAdInfoReading(true);
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setAllowAdServicesInfoReading

::::{function} setAllowAdServicesInfoReading(allowAdServicesInfoReading)
:noindex:

Sets whether the Adjust SDK can read [AdServices framework](https://developer.apple.com/documentation/ad_services) data.

{#react-native-setallowadservicesinforeading-invocation}
```ts
public setAllowAdServicesInfoReading(allowAdServicesInfoReading: boolean): void
```

:param allowAdServicesInfoReading: Whether AdServices framework data is read by the Adjust SDK
:type allowAdServicesInfoReading: BOOL

% setAllowAdServicesInfoReading snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setAllowAdServicesInfoReading(true);
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setAllowIdfaReading

::::{function} setAllowIdfaReading(allowIdfaReading)
:noindex:

Sets whether the Adjust SDK can read the device {abbr}`IDFA (ID for Advertisers)`

{#react-native-setallowidfareading-invocation}
```ts
public setAllowIdfaReading(allowIdfaReading: boolean): void
```

:param allowIdfaReading: Whether the Adjust SDK can read the device IDFA
:type allowIdfaReading: BOOL

% setAllowIdfaReading snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setAllowIdfaReading(true);
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method deactivateSKAdNetworkHandling

::::{function} deactivateSKAdNetworkHandling
:noindex:

Turns off communication with SKAdNetwork. Communication is *enabled* by default.

{#react-native-deactivateskadnetworkhandling-invocation}
```ts
public deactivateSKAdNetworkHandling(): void;
```

% deactivateSKAdNetworkHandling snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.deactivateSKAdNetworkHandling();
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

:::::

% Class method end

% Class method setLinkMeEnabled

::::{function} setLinkMeEnabled (linkMeEnabled)
:noindex:

Toggle support for Adjust's [LinkMe solution](hc:linkme) for deep linking

{#react-native-setlinkmeenabled-invocation}
```ts
public setLinkMeEnabled(linkMeEnabled: boolean): void;
```

:param linkMeEnabled: Whether LinkMe should be enabled
:type linkMeEnabled: Boolean

% setLinkMeEnabled snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setLinkMeEnabled(true);
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setConversionValueUpdatedCallbackListener

::::{function} setConversionValueUpdatedCallbackListener(conversionValue)
:noindex:

Sets a listener function to call when the user's conversion value updates.

{#react-native-setconversionvalueupdatedcallbacklistener-invocation}
```ts
public setConversionValueUpdatedCallbackListener(
      callback: (conversionValue: AdjustConversionValue) => void
    ): void
```

:param conversionValue: The listener function the SDK launches when the conversion value updates
:type conversionValue: AdjustConversionValue

% setConversionValueUpdatedDelegate snippet

:::{tab-set-code}

{emphasize-lines="3-6"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setConversionValueUpdatedCallbackListener(function(conversionValue) {
    console.log("Conversion value updated callback recveived");
    console.log("Conversion value: " + conversionValue.conversionValue);
  });
//...
Adjust.create(adjustConfig);

```

:::

% Snippet end

::::

% Class method end

## Android config methods

% Class method setProcessName

::::{function} setProcessName(processName)
:noindex:

Define the process name your app runs under. Defaults to the app's package name.

{#react-native-setprocessname-invocation}
```ts
public setProcessName(processName: string): void
```

:param processName: The name of the main process
:type processName: String

% setProcessName snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setProcessName("com.example.myapp");
//...
Adjust.create(adjustConfig);
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
```ts
public setPreinstallTrackingEnabled(preinstallTrackingEnabled: boolean): void
```

:param preinstallTrackingEnabled: Whether preinstall tracking is enabled
:type preinstallTrackingEnabled: Boolean

% setPreinstallTrackingEnabled snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setPreinstallTrackingEnabled(true);
//...
Adjust.create(adjustConfig);
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
```ts
public setPreinstallFilePath(preinstallFilePath: string): void
```

:param preinstallFilePath: The path where the preinstall information is written
:type preinstallFilePath: String

% setPreinstallFilePath snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setPreinstallFilePath("../EngagementFile.xml");
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end.

% Class method setPlayStoreKidsAppEnabled

:::::{function} setPlayStoreKidsAppEnabled(playStoreKidsAppEnabled)
:noindex:

Marks your app as a Kids App and disables reading device information

{#react-native-setplaystorekidsappenabled-invocation}
```ts
public setPlayStoreKidsAppEnabled(playStoreKidsAppEnabled: boolean): void
```

:param playStoreKidsAppEnabled: Whether the app is a Kids app
:type playStoreKidsAppEnabled: boolean

% setPlayStoreKidsAppEnabled snippet

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//..
adjustConfig.setPlayStoreKidsAppEnabled(true);
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

:::::

% Class method end
