# Configuration methods

Use these methods to update the Adjust SDK's configuration.

% Class method setEnabled

::::{function} setEnabled (enabled)
:noindex:

Enable or disable the Adjust SDK. The SDK doesn't send any information while disabled.

{#ios-setenabled-invocation}
```objective-c
+ (void) setEnabled: (BOOL) enabled
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: BOOL

% setEnabled snippet

:::{tab-set-code}

```swift
Adjust.setEnabled(false);
```

```objective-c
[Adjust setEnabled:NO];
```

```javascript
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

{#ios-isenabled-invocation}
```objective-c
+ (BOOL) isEnabled
```

:returns: Whether the SDK is currently enabled
:rtype: BOOL

% isEnabled snippet

:::{tab-set-code}

```swift
Adjust.isEnabled();
```

```objective-c
[Adjust isEnabled];
```

```javascript
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

{#ios-sendfirstpackages-invocation}
```objective-c
+ (void)sendFirstPackages;
```

% sendFirstPackages snippet

:::{tab-set-code}

```swift
Adjust.sendFirstPackages()
```

```objective-c
[Adjust sendFirstPackages];
```

```javascript
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

{#ios-setofflinemode-invocation}
```objective-c
+ (void) setOfflineMode: (BOOL) enabled
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: BOOL

% setOfflineMode snippet

:::{tab-set-code}

```swift
Adjust.setOfflineMode(true);
```

```objective-c
[Adjust setOfflineMode:YES];
```

```javascript
Adjust.setOfflineMode(true);
```

:::

% Snippet end

::::

% Class method end

% Class method setDeviceToken

::::{function} setDeviceToken (deviceToken)
:noindex:

Set your [push token](https://help.adjust.com/en/article/push-notifications) to record [uninstalls and reattributions](https://help.adjust.com/en/article/uninstalls-reinstalls). You can update this value at any time.

{#ios-setdevicetoken-invocation}
```objective-c
+ (void) setDeviceToken: (nonnull NSData *) deviceToken
```

:param deviceToken: Your Apple push token
:type deviceToken: NSData

% setDeviceToken snippet

:::{tab-set-code}

{emphasize-lines="2"}
```swift
func application(_ app: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    Adjust.deviceToken = deviceToken
}
```

{emphasize-lines="2"}
```objective-c
- (void)application:(UIApplication *)app didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    [Adjust setDeviceToken:deviceToken];
}
```

```javascript
Adjust.setDeviceToken(deviceToken);
```
:::

% Snippet end

::::

% Class method end
