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

% Class method externalDeviceId

::::{function} externalDeviceId
:noindex:

Sets an [external device identifier](https://help.adjust.com/en/article/external-device-identifiers) for reporting purposes

{#flutter-externaldeviceid-invocation}
```dart
String? externalDeviceId;
```

% externalDeviceId snippet

:::{tab-set-code}

{emphasize-lines="3"}
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

% Class method launchDeferredDeeplink

::::{function} launchDeferredDeeplink()
:noindex:

Enables or disables launching deferred deep links with the SDK. If **enabled**, the SDK launches deep links the user interacts with

{#flutter-launchdeferreddeeplink-invocation}
```dart
bool? launchDeferredDeeplink;
```

% setLaunchDeferredDeeplink snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.launchDeferredDeeplink = true;
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method sendInBackground

::::{function} sendInBackground()
:noindex:

Sets whether the SDK should send data while the app is running in the background

{#flutter-sendinbackground-invocation}
```dart
bool? sendInBackground;
```

% sendInBackground snippet

:::{tab-set-code}

{emphasize-lines="3"}
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

% Class method needsCost

::::{function} needsCost()
:noindex:

Sets whether the SDK should gather cost data. This is accessible in the user's attribution information.
:::

{#flutter-needscost-invocation}
```dart
bool? needsCost;
```

% needsCost snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.needsCost = true;
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method delayStart

::::{function} delayStart()
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

% Class method userAgent

::::{function} userAgent()
:noindex:

Define a user agent string to send with each request.

{#flutter-useragent-invocation}

```dart
String? userAgent;
```

% userAgent snippet

:::{tab-set-code}

{emphasize-lines="3"}

```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.userAgent = 'your-app/1.2.3"';
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method isDeviceKnown

::::{function} isDeviceKnown()
:noindex:

Specify whether a device is already known.

{#flutter-isdeviceknown-invocation}

```dart
bool? isDeviceKnown;
```

% isDeviceKnown snippet

:::{tab-set-code}

{emphasize-lines="3"}

```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.isDeviceKnown = true;
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method setEventBufferingEnabled

::::{function} eventBufferingEnabled()
:noindex:

Sets event buffering. If enabled, the SDK stores events on the device and sends all requests once per minute.

{#flutter-eventbufferingenabled-invocation}
```dart
bool? eventBufferingEnabled;
```

:param eventBufferingEnabled: Whether event buffering is enabled or not
:type eventBufferingEnabled: Boolean

% eventBufferingEnabled snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.eventBufferingEnabled = true;
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method deferredDeeplinkCallback

::::{function} deferredDeeplinkCallback(uri)
:noindex:

Define a function that the SDK calls when opening a deep link

{#flutter-deferreddeeplinkcallback-invocation}

```dart
typedef void DeferredDeeplinkCallback(String? uri);
DeferredDeeplinkCallback? deferredDeeplinkCallback;
```

:param uri: Contains the deep link `uri` that calls the listener to start
:type uri: String

% deferredDeeplinkCallback snippet

:::{tab-set-code}

{emphasize-lines="2,3,4"}

```dart
AdjustConfig adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.deferredDeeplinkCallback = (String uri) {
   print('[Adjust]: Received deferred deeplink: ' + uri);
};
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method attributionCallback

::::{function} attributionCallback (AdjustAttribution)
:noindex:

Define a function that the SDK calls when a user's attribution updates

{#flutter-attributionCallback-invocation}

```dart
typedef void AttributionCallback(AdjustAttribution attributionData);
AttributionCallback? attributionCallback;
```

:param attributionData: The delegate function that the SDK calls when a the user's attribution information changes
:type attribution: AdjustAttribution

% attributionCallback snippet

:::{tab-set-code}

{emphasize-lines="2-29"}
```dart
AdjustConfig adjustConfig = new AdjustConfig(yourAppToken, environment);
config.attributionCallback = (AdjustAttribution attributionChangedData) {
   print('[Adjust]: Attribution changed!');

   if (attributionChangedData.trackerToken != null) {
      print('[Adjust]: Tracker token: ' + attributionChangedData.trackerToken);
   }
   if (attributionChangedData.trackerName != null) {
      print('[Adjust]: Tracker name: ' + attributionChangedData.trackerName);
   }
   if (attributionChangedData.campaign != null) {
      print('[Adjust]: Campaign: ' + attributionChangedData.campaign);
   }
   if (attributionChangedData.network != null) {
      print('[Adjust]: Network: ' + attributionChangedData.network);
   }
   if (attributionChangedData.creative != null) {
      print('[Adjust]: Creative: ' + attributionChangedData.creative);
   }
   if (attributionChangedData.adgroup != null) {
      print('[Adjust]: Adgroup: ' + attributionChangedData.adgroup);
   }
   if (attributionChangedData.clickLabel != null) {
      print('[Adjust]: Click label: ' + attributionChangedData.clickLabel);
   }
   if (attributionChangedData.adid != null) {
      print('[Adjust]: Adid: ' + attributionChangedData.adid);
   }
};
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

:::{tab-set-code}

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

:::{tab-set-code}

{emphasize-lines="3-27"}
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


## iOS config methods

% Class method allowiAdInfoReading

::::{function} allowiAdInfoReading()
:noindex:

Sets whether the Adjust SDK can read iAd framework data.

:::{important}
The iAd framework was sunset by Apple on February 7th 2023. This property no longer has any effect.
:::

{#flutter-allowiAdInfoReading-invocation}

```dart
bool? allowiAdInfoReading
```

% allowiAdInfoReading snippet

:::{tab-set-code}

{emphasize-lines="3"}

```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.allowiAdInfoReading = true;
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method allowAdServicesInfoReading

::::{function} allowAdServicesInfoReading()
:noindex:

Sets whether the Adjust SDK can read [AdServices framework](https://developer.apple.com/documentation/ad_services) data.

{#flutter-allowadservicesinforeading-invocation}

```dart
bool? allowAdServicesInfoReading
```

% allowAdServicesInfoReading snippet

:::{tab-set-code}

{emphasize-lines="3"}

```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.allowAdServicesInfoReading = true;
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method allowIdfaReading

::::{function} allowIdfaReading()
:noindex:

Sets whether the Adjust SDK can read the device {abbr}`IDFA (ID for Advertisers)`

{#flutter-allowidfareading-invocation}

```dart
bool? allowIdfaReading
```

% allowIdfaReading snippet

:::{tab-set-code}

{emphasize-lines="3"}

```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.allowIdfaReading = true;
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

Turns off communication with [SKAdNetwork](https://help.adjust.com/en/article/skadnetwork). Communication is _enabled_ by default.

{#flutter-deactivateskadnetworkhandling-invocation}

```dart
void deactivateSKAdNetworkHandling()
```

% deactivateSKAdNetworkHandling snippet

:::{tab-set-code}

{emphasize-lines="3"}

```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox, true);
//...
adjustConfig.deactivateSKAdNetworkHandling();
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

:::::

% Class method end

% Class method linkMeEnabled

::::{function} linkMeEnabled()
:noindex:

Toggle support for Adjust's [LinkMe solution](https://help.adjust.com/en/article/linkme) for deep linking

{#flutter-linkmeenabled-invocation}

```dart
bool? linkMeEnabled
```

% linkMeEnabled snippet

:::{tab-set-code}

{emphasize-lines="3"}

```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.linkMeEnabled = true;
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method ConversionValueUpdatedCallback

::::{function} conversionValueUpdatedCallback(conversionValue)
:noindex:

Sets a function to call when the user's conversion value updates.

{#flutter-conversionvalueupdatedcallback-invocation}

```dart
typedef void ConversionValueUpdatedCallback(num? conversionValue);
```

:param conversionValue: The listener function the SDK launches when the conversion value updates
:type conversionValue: num

% ConversionValueUpdatedCallback snippet

:::{tab-set-code}

{emphasize-lines="2-4"}

```dart
AdjustConfig adjustConfig = new AdjustConfig(yourAppToken, environment);
config.conversionValueUpdatedCallback = (num? conversionValue) {
   print('[Adjust]: Received conversion value update: ' + conversionValue!.toString());
};
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

## Android config methods

% Class method processName

::::{function} processName()
:noindex:

Define the process name your app runs under. Defaults to the app's package name.

{#flutter-processname-invocation}

```dart
String? processName
```

% setProcessName snippet

:::{tab-set-code}

{emphasize-lines="3"}

```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.processName = '{com.example.myapp}';
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method preinstallTrackingEnabled

::::{function} preinstallTrackingEnabled()
:noindex:

Enables or disables preinstall tracking

{#flutter-preinstalltrackingenabled-invocation}

```dart
bool? preinstallTrackingEnabled
```

% preinstallTrackingEnabled snippet

:::{tab-set-code}

{emphasize-lines="3"}

```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.preinstallTrackingEnabled = true;
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method preinstallFilePath

::::{function} preinstallFilePath()
:noindex:

Defines a relative path where preinstall information is available. This directory must be world-readable

{#flutter-preinstallfilepath-invocation}

```dart
String? preinstallFilePath
```

% preinstallFilePath snippet

:::{tab-set-code}

{emphasize-lines="3"}

```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.preinstallFilePath = '../EngagementFile.xml';
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end.

% Class method playStoreKidsAppEnabled

:::::{function} playStoreKidsAppEnabled()
:noindex:

Marks your app as a Kids App and disables reading device information

{#flutter-playstorekidsappenabled-invocation}

```dart
bool? playStoreKidsAppEnabled
```

% playStoreKidsAppEnabled snippet

:::{tab-set-code}

{emphasize-lines="3"}

```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.playStoreKidsAppEnabled = true;
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

:::::

% Class method end
