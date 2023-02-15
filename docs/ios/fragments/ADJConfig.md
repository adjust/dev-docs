---
orphan: true
nosearch: true
---

% deactivateSKAdNetworkHandling

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:emphasize-lines: 7

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
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 4

*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig.deactivateSKAdNetworkHandling];
//...
[Adjust appDidLaunch:adjustConfig];
```
:::
::::

% methodEnd

% externalDeviceId

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:emphasize-lines: 7

let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
   appToken: yourAppToken,
   environment: environment)
// ...
adjustConfig?.externalDeviceId = "yourExternalDeviceId"
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 6

NSString *yourAppToken = @"{YourAppToken}";
NSString *environment = ADJEnvironmentSandbox;
*adjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
// ...
[adjustConfig setExternalDeviceId:@"yourExternalDeviceId"];
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
:emphasize-lines: 6

setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setExternalDeviceId("yourExternalDeviceId");
});
```
:::
::::

% methodEnd

% setDefaultTracker

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:emphasize-lines: 7

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
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 4

*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig setDefaultTracker:@"{Token}"];
//...
[Adjust appDidLaunch:adjustConfig];
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
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
::::

% methodEnd

% setDelayStart

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:emphasize-lines: 7

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
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 4

*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig setDelayStart:5.5];
//...
[Adjust appDidLaunch:adjustConfig];
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
:emphasize-lines: 6

setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setDelayStart(5.5);
});
```
:::
::::

% methodEnd

% setDelegate

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:emphasize-lines: 7

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
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 4

*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig setDelegate:self];
//...
[Adjust appDidLaunch:adjustConfig];
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
:emphasize-lines: 6

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
::::

% methodEnd

% setEventBufferingEnabled

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:emphasize-lines: 7

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
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 4

*adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[adjustConfig setEventBufferingEnabled:YES];
//...
[Adjust appDidLaunch:adjustConfig];
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
:emphasize-lines: 6

setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setEventBufferingEnabled(true);
});
```
:::
::::

% methodEnd

% setLinkMeEnabled

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:emphasize-lines: 7

let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
   appToken: yourAppToken,
   environment: environment)
// ...
adjustConfig?.linkMeEnabled = true
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 6

NSString *yourAppToken = @"{YourAppToken}";
NSString *environment = ADJEnvironmentSandbox;
*adjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
// ...
[adjustConfig setLinkMeEnabled:YES];
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
:emphasize-lines: 6

setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setLinkMeEnabled(true);
});
```
:::
::::

% methodEnd

% setLogLevel

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:emphasize-lines: 7

let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
   appToken: yourAppToken,
   environment: environment)
// ...
adjustConfig?.logLevel = ADJLogLevelVerbose
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 6

NSString *yourAppToken = @"{YourAppToken}";
NSString *environment = ADJEnvironmentSandbox;
*adjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
// ...
[adjustConfig setLogLevel:ADJLogLevelVerbose];
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
:emphasize-lines: 6

setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);
});
```
:::
::::

% methodEnd

% setSendInBackground

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:emphasize-lines: 7

let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
   appToken: yourAppToken,
   environment: environment)
// ...
adjustConfig?.sendInBackground = true
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 6

NSString *yourAppToken = @"{YourAppToken}";
NSString *environment = ADJEnvironmentSandbox;
*adjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
// ...
[adjustConfig setSendInBackground:YES];
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
:emphasize-lines: 6

setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setSendInBackground(true);
});
```
:::
::::

% methodEnd

% updateConversionValue

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
Adjust.updateConversionValue(value)
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
[Adjust updateConversionValue:value];
```
:::
::::

% methodEnd
