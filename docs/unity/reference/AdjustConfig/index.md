# AdjustConfig class

Use the methods in this class to set up the Adjust SDK.

:::{important}
The methods in this class must be called **before** you initialize the SDK.
:::

% Class method AdjustConfig

::::{function} AdjustConfig(appToken, environment,allowSuppressLogLevel)
:noindex:

Initialize the configuration object with your Adjust app token.

{#unity-adjustconfig-invocation}
```c#
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

% AdjustConfig snippet

:::{tab-set-code}

```c#
AdjustConfig config = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
Adjust.start(config);
```

:::

% Snippet end

::::

% Class method end
