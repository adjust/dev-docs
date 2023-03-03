# ADJConfig class

Use the methods in this class to set up the Adjust SDK.

:::{important}
The methods in this class must be called **before** you initialize the SDK.
:::

% Class method configWithAppToken

::::{function} configWithAppToken(appToken, environment,allowSuppressLogLevel)
:noindex:

Initialize the configuration object with your Adjust app token.

{#ios-configwithapptoken-invocation}
```objective-c
+ (nullable ADJConfig *)configWithAppToken:(nonnull NSString *)appToken
                               environment:(nonnull NSString *)environment
                     allowSuppressLogLevel:(BOOL)allowSuppressLogLevel;
```

:param appToken: Your Adjust app token
:type appToken: NSString
:param environment: The environment your app is running in
:type environment: NSString
:param allowSuppressLogLevel: Whether to allow all logging to be suppressed
:type allowSuppressLogLevel: BOOL
:returns: A config object initialized with the provided params
:rtype: ADJConfig

% configWithAppToken snippet

{tab-set-code}

```swift
let yourAppToken = "{YourAppToken}"
let environment = ADJEnvironmentSandbox as? String
let adjustConfig = ADJConfig(
   appToken: yourAppToken,
   environment: environment)
```

```objective-c
NSString *yourAppToken = @"{YourAppToken}";
NSString *environment = ADJEnvironmentSandbox;
*adjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
```

{emphasize-lines="4"}
```javascript
setupWebViewJavascriptBridge(function(bridge) {
   var yourAppToken = yourAppToken;
   var environment = AdjustConfig.EnvironmentSandbox;
   var adjustConfig = new AdjustConfig(yourAppToken, environment);
});
```

:::

% endSnippet

::::

% Class method end

:::{toctree}
---
caption: Setup methods
maxdepth: 2
---

setup
privacy

:::
