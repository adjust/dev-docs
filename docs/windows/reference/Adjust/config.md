# Configuration methods

Use these methods to update the Adjust SDK's configuration.

% Class method SetEnabled

::::{function} SetEnabled (enabled)
:noindex:

Enable or disable the Adjust SDK. The SDK doesn't send any information while disabled.

{#windows-setenabled-invocation}

```c#
public static void SetEnabled(bool enabled)
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: bool

% SetEnabled snippet

:::{tab-set-code}

```c#
Adjust.SetEnabled(false);
```

:::

% Snippet end

::::

% Class method end

% Class method IsEnabled

::::{function} IsEnabled ()
:noindex:

Call this method to check whether the Adjust SDK is enabled.

{#windows-isenabled-invocation}

```c#
public static bool IsEnabled()
```

:returns: Whether the SDK is currently enabled
:rtype: bool

% IsEnabled snippet

:::{tab-set-code}

```c#
Adjust.IsEnabled();
```

:::

% Snippet end

::::

% Class method end

% Class method SendFirstPackages

::::{function} SendFirstPackages ()
:noindex:

:::{note}
This method has an effect only if you delay the start of the Adjust SDK.
:::

The Adjust SDK sends information to Adjust's servers as soon as it starts. If you delay the start of the SDK, you can use this method to send packages before the delay ends.

{#windows-sendfirstpackages-invocation}

```c#
public static void SendFirstPackages()
```

% SendFirstPackages snippet

:::{tab-set-code}

```c#
Adjust.SendFirstPackages()
```

:::

% Snippet end

::::

% Class method end

% Class method SetOfflineMode

::::{function} SetOfflineMode (offline)
:noindex:

Controls whether the SDK is in offline mode. When in offline mode, the SDK queues all events in a file until offline mode is disabled. When offline mode is disabled, the SDK sends all queued events.

{#windows-setofflinemode-invocation}

```c#
public void SetOfflineMode(bool offline)
```

:param offline: Whether offline mode should be enabled
:type offline: bool

% SetOfflineMode snippet

:::{tab-set-code}

```c#
Adjust.SetOfflineMode(true);
```

:::

% Snippet end

::::

% Class method end

% Class method SetPushToken

::::{function} SetPushToken (PushToken)
:noindex:

Set your [push token](https://help.adjust.com/en/article/push-notifications) to record [uninstalls and reinstalls](https://help.adjust.com/en/article/uninstalls-reinstalls). You can update this value at any time.

{#windows-setpushtoken-invocation}

```c#
public static void SetPushToken(string pushToken)
```

:param PushToken: Your notification push token
:type PushToken: string

% SetPushToken snippet

:::{tab-set-code}

```c#
Adjust.SetPushToken("{YourDeviceToken}");
```

:::

% Snippet end

::::

% Class method end
