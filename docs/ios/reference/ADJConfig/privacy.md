# Privacy methods

% Class method setUrlStrategy

:::::{function} setUrlStrategy(urlStrategy)
:noindex:

:::{versionadded} v4.23.0
Sets whether the Adjust SDK can read the device {abbr}`IDFA (ID for Advertisers)`
:::

{#ios-seturlstrategy-invocation}
```objective-c
@property (nonatomic, copy, readwrite, nullable) NSString *urlStrategy;
```

:param urlStrategy: The data residency target (see available values below)
:type urlStrategy: NSString

% setUrlStrategy snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
   appToken: yourAppToken,
   environment: environment)
// ...
adjustConfig?.urlStrategy = ADJDataResidencyEU
```

{emphasize-lilnes="6"}
```objective-c
NSString *yourAppToken = @"{YourAppToken}";
NSString *environment = ADJEnvironmentSandbox;
*adjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
// ...
[adjustConfig setUrlStrategy:ADJDataResidencyEU];
```

{emphasize-lines="6"}
```javascript
setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setUrlStrategy(ADJDataResidencyEU);
});
```
:::

::::{dropdown} Available URL strategies
:::{list-table}
:header-rows: 1

* - Value
   - Description
* - `AdjustDataResidencyEU`
   - Sets the area of data residency to the EU
* - `AdjustDataResidencyTR`
   - Sets the area of data residency to Turkey
* - `AdjustDataResidencyUS`
   - Sets the area of data residency to the USA
* - `AdjustUrlStrategyChina`
   - Sets the area of data residency to China
* - `AdjustUrlStrategyIndia`
   - Sets the area of data residency to India

:::
::::

% Snippet end

:::::

% Class method end

% Class method setCoppaCompliantEnabled

::::{function} setCoppaCompliantEnabled(coppaCompliantEnabled)
:noindex:

:::{versionadded} v4.30.0
Enable {abbr}`COPPA (Children's Online Privacy Protection Act)` compliance in your app.
:::

{#ios-setcoppacompliantenabled-invocation}
```objective-c
@property (nonatomic, assign) BOOL coppaCompliantEnabled;
```

:param coppaCompliantEnabled: Whether the app should be COPPA compliant
:type coppaCompliantEnabled: BOOL

% setCoppaCompliantEnabled snippet

:::{tab-set-code}

{emphasize-lines="7"}
```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
   appToken: yourAppToken,
   environment: environment)
// ...
adjustConfig?.coppaCompliantEnabled = true
```

{emphasize-lines="5"}
```objective-c
NSString *yourAppToken = @"{YourAppToken}";
NSString *environment = ADJEnvironmentSandbox;
*adjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
// ...
[adjustConfig setCoppaCompliantEnabled:YES];
```

{emphasize-lines="6"}
```javascript
setupWebViewJavascriptBridge(function(bridge) {
   // ...
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setCoppaCompliantEnabled(true);
});
```
:::

% Snippet end

::::

% Class method end
