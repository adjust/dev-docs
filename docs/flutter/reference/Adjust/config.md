# Configuration methods

Use these methods to update the Adjust SDK's configuration.

% Class method setEnabled

::::{function} setEnabled (isEnabled)
:noindex:

Enable or disable the Adjust SDK. The SDK doesn't send any information while disabled.

{#flutter-setenabled-invocation}
```dart
static void setEnabled(bool isEnabled)
```

:param isEnabled: Whether the SDK should be enabled or not
:rtype isEnabled: Boolean

% setEnabled snippet

:::{tab-set-code}

```dart
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

{#flutter-isenabled-invocation}
```dart
static Future<bool> isEnabled() async
```

:returns: Whether the SDK is currently enabled
:type: Boolean

% isEnabled snippet

:::{tab-set-code}

```dart
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

{#flutter-sendfirstpackages-invocation}
```dart
static void sendFirstPackages()
```

% sendFirstPackages snippet

:::{tab-set-code}

```dart
Adjust.sendFirstPackages();
```

:::

% Snippet end

::::

% Class method end

% Class method setOfflineMode

::::{function} setOfflineMode (isOffline)
:noindex:

Controls whether the SDK is in offline mode. When in offline mode, the SDK queues all events in a file until offline mode is disabled. When offline mode is disabled, the SDK sends all queued events.

{#flutter-setofflinemode-invocation}
```dart
static void setOfflineMode(bool isOffline)
```

:param isOffline: Whether the SDK should be enabled or not
:type isOffline: Boolean

% setOfflineMode snippet

:::{tab-set-code}

```dart
Adjust.setOfflineMode(true);
```

:::

% Snippet end

::::

% Class method end

% Class method setDeviceToken

::::{function} setPushToken (token)
:noindex:

Set your [push token](hc:push-notifications) to record [uninstalls and reattributions](hc:uninstalls-reinstalls). You can update this value at any time.

{#flutter-setpushtoken-invocation}
```dart
static void setPushToken(String token)
```

:param token: Your push token
:type token: String

% setDeviceToken snippet

:::{tab-set-code}

```dart
Adjust.setPushToken('{PushNotificationsToken}');
```

:::

% Snippet end

::::

% Class method end
