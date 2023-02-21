# AdjustConfig class

Use the methods in this class to set up the Adjust SDK.

:::{important}
The methods in this class must be called **before** you initialize the SDK.
:::

% classMethod AdjustConfig

:::{function} AdjustConfig(appToken, environment,allowSuppressLogLevel)
:noindex:

Initialize the configuration object with your Adjust app token.

```{code-block} cs
:name: unity-AdjustConfig-invocation

public AdjustConfig(string appToken, AdjustEnvironment environment, bool allowSuppressLogLevel)
```

:param appToken: Your Adjust app token
:type appToken: String
:param environment: The environment your app is running in
:type environment: String
:param allowSuppressLogLevel: Whether to allow all logging to be suppressed
:type allowSuppressLogLevel: Boolean
:returns: A config object initialized with the provided params
:rtype: AdjustConfig

```{include} /unity/fragments/AdjustConfig.md
:start-after: AdjustConfig
:end-before: methodEnd
```

:::

% classMethodEnd

```{toctree}
---
caption: Class methods
maxdepth: 1
---

setup
privacy

```
