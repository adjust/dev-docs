# ADJConfig class

Use the methods in this class to set up the Adjust SDK.

:::{important}
The methods in this class must be called **before** you initialize the SDK.
:::

% classMethod configWithAppToken

:::{function} configWithAppToken(appToken, environment,allowSuppressLogLevel)
:noindex:

Initialize the configuration object with your Adjust app token.

```{code-block} objc
:name: ios-configWithAppToken-invocation

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

```{include} /ios/fragments/ADJConfig.md
:start-after: configWithAppToken
:end-before: methodEnd
```

:::

% classMethodEnd

```{toctree}
---
caption: Setup methods
maxdepth: 2
---

setup
privacy

```
