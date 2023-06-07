# AdjustConfig class

Use the methods in this class to set up the Adjust SDK.

:::{important}
The methods in this class must be called **before** you initialize the SDK.
:::

% Class method AdjustConfig

::::{function} AdjustConfig(appToken, environment)
:noindex:

Initialize the configuration object with your Adjust app token.

{#flutter-adjustconfig-invocation}
```dart
AdjustConfig(String _appToken, AdjustEnvironment _environment)
```

:param appToken: Your Adjust app token
:type appToken: String
:param environment: The environment your app is running in
:type environment: String
:returns: A config object initialized with the provided params
:rtype: AdjustConfig

% AdjustConfig snippet

:::{tab-set-code}

```dart
AdjustConfig config = new AdjustConfig('abc123', AdjustEnvironment.Sandbox);
//...
Adjust.start(config);
```

:::

% Snippet end

::::

% Class method end
