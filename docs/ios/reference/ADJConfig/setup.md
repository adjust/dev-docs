# Setup methods

% Class method setLogLevel

:::::{function} setLogLevel (logLevel)
:noindex:

Set the verbosity of logs you want to receive from the Adjust SDK

{#ios-setloglevel-invocation}
```objective-c
@property (nonatomic, assign) ADJLogLevel logLevel;
```

:param logLevel: The verbosity of the logging
:type logLevel: ADJLogLevel

% setLogLevel snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
   appToken: yourAppToken,
   environment: environment)
// ...
adjustConfig?.logLevel = ADJLogLevelVerbose
```

{emphasize-lines="6"}
```objective-c
NSString *yourAppToken = @"{YourAppToken}";
NSString *environment = ADJEnvironmentSandbox;
*adjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
// ...
[adjustConfig setLogLevel:ADJLogLevelVerbose];
```

{emphasize-lines="6"}
```javascript
setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);
});
```

:::

% Snippet end


::::{dropdown} Available log levels
% logLevel table
:::{list-table}
:header-rows: 1

* - ADJLogLevel
   - Description
* - `ADJLogLevelVerbose`
   - Enable all logging
* - `ADJLogLevelDebug`
   - Enable debug logging
* - `ADJLogLevelInfo`
   - Only show info level logs (default option)
* - `ADJLogLevelWarn`
   - Disable info logging
* - `ADJLogLevelError`
   - Disable warning level logging and below
* - `ADJLogLevelAssert`
   - Disable error level logging and below
* - `ADJLogLevelSuppress`
   - Suppress all logging

:::
% tableEnd

::::
:::::

% Class method end

% Class method setDefaultTracker

::::{function} setDefaultTracker (defaultTracker)
:noindex:

:::{versionadded} v4.2.2
Sets a default tracker token to record installs against
:::

{#ios-setdefaulttracker-invocation}
```objective-c
@property (nonatomic, copy, nullable) NSString *defaultTracker;
```

:param defaultTracker: The tracker token to which all preinstalled sessions are attributed
:type defaultTracker: NSString

% setDefaultTracker snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
    appToken: yourAppToken,
    environment: environment)
//...
adjustConfig?.defaultTracker = "{Token}"
//...
Adjust.appDidLaunch(adjustConfig)
```

{emphasize-lines="4"}
```objective-c
*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig setDefaultTracker:@"{Token}"];
//...
[Adjust appDidLaunch:adjustConfig];
```

{emphasize-lines="6"}
```javascript
:emphasize-lines: 6

setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setDefaultTracker("{Token}");
});
```
:::

% Snippet end

::::

% Class method end

% Class method setDelegate

::::{function} setDelegate (delegate)
:noindex:

Sets a delegate function that the SDK calls when the user's attribution changes

{#ios-setdelegate-invocation}
```objective-c
- (void)setDelegate:(NSObject<AdjustDelegate> *)delegate
```

:param delegate: The delegate function to call when attribution changes
:type delegate: NSObject

% setDelegate snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
    appToken: yourAppToken,
    environment: environment)
//...
adjustConfig?.delegate = self
//...
Adjust.appDidLaunch(adjustConfig)
```

{emphasize-lines="4"}
```objective-c
*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig setDelegate:self];
//...
[Adjust appDidLaunch:adjustConfig];
```

{emphasize-lines="6"}
```javascript
setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setAttributionCallback(function(attribution) {
    // In this example, we're just displaying alert with attribution content.
    alert('Tracker token = ' + attribution.trackerToken + '\n' +
          'Tracker name = ' + attribution.trackerName + '\n' +
          'Network = ' + attribution.network + '\n' +
          'Campaign = ' + attribution.campaign + '\n' +
          'Adgroup = ' + attribution.adgroup + '\n' +
          'Creative = ' + attribution.creative + '\n' +
          'Click label = ' + attribution.clickLabel + '\n' +
          'Adid = ' + attribution.adid);
   });
});
```
:::

% Snippet end

::::

% Class method end

% Class method setDelayStart

::::{function} setDelayStart (delayStart)
:noindex:

Sets a delay before the SDK starts to allow data to load before session information is sent to Adjust's servers. Maximum delay: 10 seconds

{#ios-setdelaystart-invocation}
```objective-c
@property (nonatomic, assign) double delayStart;
```

:param delayStart: The time (in seconds) to delay the start of the SDK by
:type delayStart: double

% setDelayStart snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
    appToken: yourAppToken,
    environment: environment)
//...
adjustConfig?.delayStart = 5.5
//...
Adjust.appDidLaunch(adjustConfig)
```

{emphasize-lines="4"}
```objective-c
*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig setDelayStart:5.5];
//...
[Adjust appDidLaunch:adjustConfig];
```

{emphasize-lines="6"}
```javascript
setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setDelayStart(5.5);
});
```
:::

% Snippet end

::::

% Class method end

% Class method setExternalDeviceId

::::{function} setExternalDeviceId (externalDeviceId)
:noindex:

:::{versionadded} v4.20.0
Sets an external device identifier for reporting purposes
:::

{#ios-setexternaldeviceid-invocation}
```objective-c
@property (nonatomic, copy, nullable) NSString *externalDeviceId;
```

:param externalDeviceId: The external device ID associated with the device
:type externalDeviceId: NSString

% setExternalDeviceId snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
   appToken: yourAppToken,
   environment: environment)
// ...
adjustConfig?.externalDeviceId = "yourExternalDeviceId"
```

{emphasize-lines="6"}
```objective-c
NSString *yourAppToken = @"{YourAppToken}";
NSString *environment = ADJEnvironmentSandbox;
*adjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
// ...
[adjustConfig setExternalDeviceId:@"yourExternalDeviceId"];
```

{emphasize-lines="6"}
```javascript
setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setExternalDeviceId("yourExternalDeviceId");
});
```

:::

% Snippet end

::::

% Class method end

% Class method setEventBufferingEnabled

::::{function} setEventBufferingEnabled (eventBufferingEnabled)
:noindex:

Sets event buffering. If enabled, the SDK stores events on the device and sends all requests once per minute.

{#ios-seteventbufferingenabled-invocation}
```objective-c
@property (nonatomic, assign) BOOL eventBufferingEnabled;
```

:param eventBufferingEnabled: Whether event buffering is enabled or not
:type eventBufferingEnabled: BOOL

% setEventBufferingEnabled snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
    appToken: yourAppToken,
    environment: environment)
//...
adjustConfig?.eventBufferingEnabled = true
//...
Adjust.appDidLaunch(adjustConfig)
```

{emphasize-lines="4"}
```objective-c
*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig setEventBufferingEnabled:YES];
//...
[Adjust appDidLaunch:adjustConfig];
```

{emphasize-lines="6"}
```javascript
setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setEventBufferingEnabled(true);
});
```
:::

% Snippet end

::::

% Class method end

% Class method setSendInBackground

::::{function} setSendInBackground (sendInBackground)
:noindex:

Sets whether the SDK should send data while the app is running in the background

{#ios-setsendinbackground-invocation}
```objective-c
@property (nonatomic, assign) BOOL sendInBackground;
```

:param sendInBackground: Whether the SDK should send information when the app is running in the background
:type sendInBackground: BOOL

% setSendInBackground snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
   appToken: yourAppToken,
   environment: environment)
// ...
adjustConfig?.sendInBackground = true
```

{emphasize-lines="6"}
```objective-c
NSString *yourAppToken = @"{YourAppToken}";
NSString *environment = ADJEnvironmentSandbox;
*adjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
// ...
[adjustConfig setSendInBackground:YES];
```

{emphasize-lines="6"}
```javascript
setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setSendInBackground(true);
});
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

{#ios-setneedscost-invocation}
```objective-c
@property (nonatomic, assign) BOOL needsCost;
```

:param needsCost: Whether the SDK should gather cost data
:type needsCost: BOOL

% setNeedsCost snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
   appToken: yourAppToken,
   environment: environment)
// ...
adjustConfig?.needsCost = true
```

{emphasize-lines="6"}
```objective-c
NSString *yourAppToken = @"{YourAppToken}";
NSString *environment = ADJEnvironmentSandbox;
*adjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
// ...
[adjustConfig setNeedsCost:NO];
```

{emphasize-lines="6"}
```javascript
setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setNeedsCost(false);
});
```
:::

% Snippet end

::::

% Class method end

% Class method setLinkMeEnabled

::::{function} setLinkMeEnabled (boolean)
:noindex:

:::{versionadded} v4.31.0
Toggle support for Adjust's [LinkMe solution](https://help.adjust.com/en/article/linkme) for deep linking
:::

{#ios-setlinkmeenabled-invocation}
```objective-c
@property (nonatomic, assign) BOOL linkMeEnabled;
```

:param linkMeEnabled: Whether LinkMe should be enabled
:type linkMeEnabled: BOOL

% setLinkMeEnabled snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
   appToken: yourAppToken,
   environment: environment)
// ...
adjustConfig?.linkMeEnabled = true
```

{emphasize-lines="6"}
```objective-c
NSString *yourAppToken = @"{YourAppToken}";
NSString *environment = ADJEnvironmentSandbox;
*adjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
// ...
[adjustConfig setLinkMeEnabled:YES];
```

{emphasize-lines="6"}
```javascript
setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setLinkMeEnabled(true);
});
```
:::

% Snippet end

::::

% Class method end

% Class method deactivateSKAdNetworkHandling

::::{function} deactivateSKAdNetworkHandling
:noindex:

:::{versionadded} v4.23.0
Turns off communication with SKAdNetwork. Communication is *enabled* by default.
:::

{#ios-deactivateskadnetworkhandling-invocation}
```objective-c
- (void)deactivateSKAdNetworkHandling;
```

% deactivateSKAdNetworkHandling snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
    appToken: yourAppToken,
    environment: environment)
//...
adjustConfig.deactivateSKAdNetworkHandling()
//...
Adjust.appDidLaunch(adjustConfig)
```

{emphasize-lines="4"}
```objective-c
*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig.deactivateSKAdNetworkHandling];
//...
[Adjust appDidLaunch:adjustConfig];
```

:::

% Snippet end

:::::

% Class method end

% Class method setAllowIdfaReading

::::{function} setAllowIdfaReading(allowIdfaReading)
:noindex:

Sets whether the Adjust SDK can read the device {abbr}`IDFA (ID for Advertisers)`

{#ios-setallowidfareading-invocation}
```objective-c
@property (nonatomic, assign) BOOL allowIdfaReading;
```

:param allowIdfaReading: Whether the Adjust SDK can read the device IDFA
:type allowIdfaReading: BOOL

% setAllowIdfaReading snippet

:::{tab-set-code}

```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
    appToken: yourAppToken,
    environment: environment)
//...
adjustConfig.allowIdfaReading = true;
//...
Adjust.appDidLaunch(adjustConfig)
```

{emphasize-lines="4"}
```objective-c
*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig.setAllowIdfaReading:YES];
//...
[Adjust appDidLaunch:adjustConfig];
```

:::

% Snippet end

::::

% Class method end

% Class method setAllowAdServicesInfoReading

::::{function} setAllowAdServicesInfoReading(allowAdServicesInfoReading)
:noindex:

Sets whether the Adjust SDK can read AdServices framework data.

{#ios-setallowadservicesinforeading-invocation}
```objective-c
@property (nonatomic, assign) BOOL allowAdServicesInfoReading;
```

:param allowAdServicesInfoReading: Whether AdServices framework data is read by the Adjust SDK
:type allowAdServicesInfoReading: BOOL

% setAllowAdServicesInfoReading snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
    appToken: yourAppToken,
    environment: environment)
//...
adjustConfig.allowAdServicesInfoReading = true;
//...
Adjust.appDidLaunch(adjustConfig)
```

{empahsize-lines="4"}
```objective-c
*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig.setAllowAdServicesInfoReading:YES];
//...
[Adjust appDidLaunch:adjustConfig];
```

:::

% Snippet end

::::

% Class method end

% Class method setAllowiAdInfoReading

::::{function} setAllowiAdInfoReading(allowiAdInfoReading)
:noindex:

:::{deprecated} v4.33.4
Sets whether the Adjust SDK can read iAd framework data.
:::

{#ios-setallowiadinforeading-invocation}
```objective-c
@property (nonatomic, assign) BOOL allowiAdInfoReading;
```

:param allowiAdInfoReading: Whether iAd framework data is read by the Adjust SDK
:type allowiAdInfoReading: BOOL

% allowiAdInfoReading snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
    appToken: yourAppToken,
    environment: environment)
//...
adjustConfig.allowiAdInfoReading = true;
//...
Adjust.appDidLaunch(adjustConfig)
```

{emphasize-lines="4"}
```objective-c
*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig.setAllowiAdInfoReading:YES];
//...
[Adjust appDidLaunch:adjustConfig];
```
:::

% Snippet end

::::

% Class method end
