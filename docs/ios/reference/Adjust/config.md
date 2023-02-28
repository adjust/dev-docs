# Configuration methods

Use these methods to update the Adjust SDK's configuration.

% Class method setEnabled

:::::{function} setEnabled (enabled)
:noindex:

Enable or disable the Adjust SDK. The SDK doesn't send any information while disabled.

```{code-block} objc
:name: ios-setEnabled-invocation

+ (void) setEnabled: (BOOL) enabled
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: BOOL

% setEnabled snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.setEnabled(false);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust setEnabled:NO];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.setEnabled(false);
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method isEnabled

:::::{function} isEnabled ()
:noindex:

Call this method to check whether the Adjust SDK is enabled.

```{code-block} objc
:name: ios-isEnabled-invocation

+ (BOOL) isEnabled
```

:returns: Whether the SDK is currently enabled
:rtype: BOOL

% isEnabled snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.isEnabled();
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust isEnabled];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.isEnabled();
```
::::

% Snippet end

:::::

% Class method end

% Class method sendFirstPackages

:::::{function} sendFirstPackages ()
:noindex:

:::{note}
This method has an effect only if you delay the start of the Adjust SDK.
:::

The Adjust SDK sends information to Adjust's servers as soon as it starts. If you delay the start of the SDK, you can use this method to send packages before the delay ends.

```{code-block} objc
:name: ios-sendFirstPackages-invocation

+ (void)sendFirstPackages;
```

% sendFirstPackages snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.sendFirstPackages()
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust sendFirstPackages];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.sendFirstPackages();
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method setOfflineMode

:::::{function} setOfflineMode (boolean)
:noindex:

Controls whether the SDK is in offline mode. When in offline mode, the SDK queues all events in a file until offline mode is disabled. When offline mode is disabled, the SDK sends all queued events.

```{code-block} objc
:name: ios-setOfflineMode-invocation

+ (void) setOfflineMode: (BOOL) enabled
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: BOOL

% setOfflineMode snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.setOfflineMode(true);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust setOfflineMode:YES];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.setOfflineMode(true);
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method setDeviceToken

:::::{function} setDeviceToken (deviceToken)
:noindex:

Set your [push token](https://help.adjust.com/en/article/push-notifications) to record [uninstalls and reattributions](https://help.adjust.com/en/article/uninstalls-reinstalls). You can update this value at any time.

```{code-block} objc
:name: ios-setDeviceToken-invocation

+ (void) setDeviceToken: (nonnull NSData *) deviceToken
```

:param deviceToken: Your Apple push token
:type deviceToken: NSData

% setDeviceToken snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:emphasize-lines: 2

func application(_ app: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    Adjust.deviceToken = deviceToken
}
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 2

- (void)application:(UIApplication *)app didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    [Adjust setDeviceToken:deviceToken];
}
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
Adjust.setDeviceToken(deviceToken);
```
:::
::::

% Snippet end

:::::

% Class method end
