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
let myConfig = ADJConfig(
    appToken: yourAppToken,
    environment: environment)
//...
myConfig.deactivateSKAdNetworkHandling()
//...
Adjust.appDidLaunch(myConfig)
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 4

*myConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
//...
[myConfig.deactivateSKAdNetworkHandling];
//...
[Adjust appDidLaunch:myConfig];
```
:::
::::

% end

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

% end

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

% end

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

% end
