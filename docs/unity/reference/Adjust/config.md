# Config methods

% classMethod sendFirstPackages

::::{function} sendFirstPackages ()
:noindex:

:::{note}
This method has an effect only if you delay the start of the Adjust SDK.
:::

The Adjust SDK sends information to Adjust's servers as soon as it starts. If you delay the start of the SDK, you can use this method to send packages before the delay ends.

```{code-block} cs
:name: unity-sendFirstPackages-invocation

public static void sendFirstPackages()
```

```{include} /unity/fragments/Adjust.md
:start-after: sendFirstPackages
:end-before: methodEnd
```

::::

% classMethodEnd

% classMethod setOfflineMode

:::{function} setOfflineMode (enabled)
:noindex:

Controls whether the SDK is in offline mode. When in offline mode, the SDK queues all events in a file until offline mode is disabled. When offline mode is disabled, the SDK sends all queued events.

```{code-block} cs
:name: unity-setOfflineMode-invocation

public static void setOfflineMode(bool enabled)
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: Boolean

```{include} /unity/fragments/Adjust.md
:start-after: setOfflineMode
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setDeviceToken

:::{function} setDeviceToken (deviceToken)
:noindex:

Set your [push token](https://help.adjust.com/en/article/push-notifications) to record [uninstalls and reattributions](https://help.adjust.com/en/article/uninstalls-reinstalls). You can update this value at any time.

```{code-block} cs
:name: unity-setDeviceToken-invocation

public static void setDeviceToken(string deviceToken)
```

:param deviceToken: Your push token
:type deviceToken: String

```{include} /unity/fragments/Adjust.md
:start-after: setDeviceToken
:end-before: methodEnd
```

:::

% classMethodEnd
