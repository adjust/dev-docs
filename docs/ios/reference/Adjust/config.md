# Configuration methods

Use these methods to update the Adjust SDK's configuration.

% classMethod setEnabled

:::{function} setEnabled (boolean)
:noindex:

Enable or disable the Adjust SDK. The SDK doesn't send any information while disabled.

```{code-block} objc
:name: ios-setEnabled-invocation

+ (void) setEnabled: (BOOL) enabled
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: BOOL

```{include} /ios/fragments/Adjust.md
:start-after: setEnabled
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod isEnabled

:::{function} isEnabled ()
:noindex:

Call this method to check whether the Adjust SDK is enabled.

```{code-block} objc
:name: ios-isEnabled-invocation

+ (BOOL) isEnabled
```

:returns: Whether the SDK is currently enabled
:rtype: BOOL

```{include} /ios/fragments/Adjust.md
:start-after: isEnabled
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod sendFirstPackages

::::{function} sendFirstPackages ()
:noindex:

:::{note}
This method has an effect only if you delay the start of the Adjust SDK.
:::

The Adjust SDK sends information to Adjust's servers as soon as it starts. If you delay the start of the SDK, you can use this method to send packages before the delay ends.

```{code-block} objc
:name: ios-sendFirstPackages-invocation

+ (void)sendFirstPackages;
```

```{include} /ios/fragments/Adjust.md
:start-after: sendFirstPackages
:end-before: methodEnd
```

::::

% classMethodEnd

% classMethod setOfflineMode

:::{function} setOfflineMode (boolean)
:noindex:

Controls whether the SDK is in offline mode. When in offline mode, the SDK queues all events in a file until offline mode is disabled. When offline mode is disabled, the SDK sends all queued events.

```{code-block} objc
:name: ios-setOfflineMode-invocation

+ (void) setOfflineMode: (BOOL) enabled
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: BOOL

```{include} /ios/fragments/Adjust.md
:start-after: setOfflineMode
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setDeviceToken

:::{function} setDeviceToken (deviceToken)
:noindex:

Set your [push token](https://help.adjust.com/en/article/push-notifications) to record [uninstalls and reattributions](https://help.adjust.com/en/article/uninstalls-reinstalls). You can update this value at any time.

```{code-block} objc
:name: ios-setDeviceToken-invocation

+ (void) setDeviceToken: (nonnull NSData *) deviceToken
```

:param deviceToken: Your Apple push token
:type deviceToken: NSData

```{include} /ios/fragments/Adjust.md
:start-after: setDeviceToken
:end-before: methodEnd
```

:::

% classMethodEnd
