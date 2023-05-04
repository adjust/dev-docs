# Configuration methods

Use these methods to update the Adjust SDK's configuration.

% Class method setEnabled

::::{function} setEnabled (enabled)
:noindex:

Enable or disable the Adjust SDK. The SDK doesn't send any information while disabled.

{#react-native-setenabled-invocation}
```ts
setEnabled: (enabled: boolean) => void
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: Boolean

% setEnabled snippet

:::{tab-set-code}

```js
Adjust.setEnabled(false);
```

:::

% Snippet end

::::

% Class method end

% Class method isEnabled

::::{function} isEnabled ()
:noindex:

Call this method to check whether the Adjust SDK is enabled. The method returns a **boolean** value indicating the SDK's status.


{#react-native-isenabled-invocation}
```ts
isEnabled: (callback: (enabled: boolean) => void) => void
```

:returns: Whether the SDK is currently enabled
:rtype: Boolean

% isEnabled snippet

:::{tab-set-code}

```js
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

{#react-native-sendfirstpackages-invocation}
```ts
sendFirstPackages: () => void
```

% sendFirstPackages snippet

:::{tab-set-code}

```js
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

{#react-native-setofflinemode-invocation}
```js
setOfflineMode: (enabled: boolean) => void
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: Boolean

% setOfflineMode snippet

:::{tab-set-code}

```js
Adjust.setOfflineMode(true);
```

:::

% Snippet end

::::

% Class method end

% Class method setPushToken

::::{function} setPushToken (token)
:noindex:

Set your [push token](hc:push-notifications) to record [uninstalls and reattributions](hc:uninstalls-reinstalls). You can update this value at any time.

{#react-native-setpushtoken-invocation}
```ts
setPushToken: (token: string) => void
```

:param token: Your push token
:type token: String

% setPushToken snippet

:::{tab-set-code}

```js
Adjust.setPushToken("YourPushNotificationToken");

```

:::

% Snippet end

::::

% Class method end
