# Config methods

Use these methods to update the Adjust SDK's configuration.

% Class method setEnabled

::::{function} setEnabled (enabled)
:noindex:

Enable or disable the Adjust SDK. The SDK doesn't send any information while disabled.

{#unity-setenabled-invocation}
```c#
public static void setEnabled(bool enabled)
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: Boolean

% setEnabled snippet

:::{tab-set-code}

```c#
Adjust.setEnabled(false);
```

:::

% Snippet end

::::

% Class method end

% Class method isEnabled

::::{function} isEnabled ()
:noindex:

Call this method to check whether the Adjust SDK is enabled.

{#unity-isenabled-invocation}
```c#
public static bool isEnabled()
```

:returns: Whether the SDK is currently enabled
:rtype: Boolean

% isEnabled snippet

:::{tab-set-code}

```c#
Adjust.isEnabled();
```

:::

% Snippet end

::::

% Class method end

% Class method sendFirstPackages

::::{function} sendFirstPackages ()
:noindex:

:::{note}
This method has an effect only if you delay the start of the Adjust SDK.
:::

The Adjust SDK sends information to Adjust's servers as soon as it starts. If you delay the start of the SDK, you can use this method to send packages before the delay ends.

{#unity-sendfirstpackages-invocation}
```c#
public static void sendFirstPackages()
```

% sendFirstPackages snippet

:::{tab-set-code}

```c#
Adjust.sendFirstPackages();
```

:::

% Snippet end

::::

% Class method end

% Class method setOfflineMode

::::{function} setOfflineMode (enabled)
:noindex:

Controls whether the SDK is in offline mode. When in offline mode, the SDK queues all events in a file until offline mode is disabled. When offline mode is disabled, the SDK sends all queued events.

{#unity-setofflinemode-invocation}
```c#
public static void setOfflineMode(bool enabled)
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: Boolean

% setOfflineMode snippet

:::{tab-set-code}

```c#
Adjust.setOfflineMode(true);
```

:::

% Snippet end

::::

% Class method end

% Class method setDeviceToken

::::{function} setDeviceToken (deviceToken)
:noindex:

Set your [push token](hc:/push-notifications) to record [uninstalls and reattributions](hc:/uninstalls-reinstalls). You can update this value at any time.

{#unity-setdevicetoken-invocation}
```c#
public static void setDeviceToken(string deviceToken)
```

:param deviceToken: Your push token
:type deviceToken: String

% setDeviceToken snippet

:::{tab-set-code}

```c#
Adjust.setDeviceToken("{YourDeviceToken}");
```

:::

% Snippet end

::::

% Class method end
