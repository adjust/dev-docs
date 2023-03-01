# Configuration methods

Use these methods to update the Adjust SDK's configuration.

% Class method setEnabled

::::{function} setEnabled (enabled)
:noindex:

Enable or disable the Adjust SDK. The SDK doesn't send any information while disabled.

```{code-block} java
:name: android-setEnabled-invocation

public static void setEnabled(boolean enabled)
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: BOOL

% setEnabled snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.setEnabled(false)
```

```{code-block} java
Adjust.setEnabled(false);
```

```{code-block} javascript
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

```{code-block} java
:name: android-isEnabled-invocation

public static boolean isEnabled()
```

:returns: Whether the SDK is currently enabled
:rtype: boolean

% isEnabled snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.isEnabled()
```

```{code-block} java
Adjust.isEnabled();
```

```{code-block} javascript
Adjust.isEnabled();
```

:::

% Snippet end

::::

% Class method end

% Class method setOfflineMode

::::{function} setOfflineMode (isOffline)
:noindex:

Controls whether the SDK is in offline mode. When in offline mode, the SDK queues all events in a file until offline mode is disabled. When offline mode is disabled, the SDK sends all queued events.

```{code-block} java
:name: android-setOfflineMode-invocation

public static void setOfflineMode(boolean enabled)
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: boolean

% setOfflineMode snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.setOfflineMode(true)
```

```{code-block} java
Adjust.setOfflineMode(true);
```

```{code-block} javascript
Adjust.setOfflineMode(true);
```

:::

% Snippet end

::::

% Class method end

% Class method setPushToken

::::{function} setPushToken (pushToken, context)
:noindex:

Set your [push token](https://help.adjust.com/en/article/push-notifications) to record [uninstalls and reattributions](https://help.adjust.com/en/article/uninstalls-reinstalls). You can update this value at any time.

```{code-block} java
:name: android-setPushToken-invocation

public static void setPushToken(final String token, final Context context)
```

:param pushToken: Your push token
:type pushToken: String
:param context: The [context](https://developer.android.com/reference/android/content/Context) the method is being called in.
:type context: Context

% setPushToken snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.setPushToken("{YourPushToken}", getApplicationContext())
```

```{code-block} java
Adjust.setPushToken("{YourPushToken}", getApplicationContext());
```

```{code-block} javascript
Adjust.setPushToken('{YourPushToken}');
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

```{code-block} java
:name: android-sendFirstPackages-invocation

public static void sendFirstPackages()
```

% sendFirstPackages snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.sendFirstPackages()
```

```{code-block} java
Adjust.sendFirstPackages();
```

```{code-block} javascript
Adjust.sendFirstPackages();
```

:::

% Snippet end

::::

% Class method end
