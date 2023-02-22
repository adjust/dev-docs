# Privacy methods

Use these methods to handle user privacy in your app.

% Class method disableThirdPartySharing

:::::{function} disableThirdPartySharing
:noindex:

:::{versionadded} v4.19.0
Disables sharing of information with third parties for all users.
:::

```{code-block} objc
:name: ios-disableThirdPartySharing-invocation

+ (void)disableThirdPartySharing;
```

% disableThirdPartySharing snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.disableThirdPartySharing()
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust disableThirdPartySharing];
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
Adjust.disableThirdPartySharing();
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method trackThirdPartySharing

:::::{function} trackThirdPartySharing(thirdPartySharing)
:noindex:

Disable or enable sharing of information with third parties on a per-user basis. Accepts a third party sharing object initialized with a **boolean** value.

```{code-block} objc
:name: ios-trackThirdPartySharing-invocation

+ (void)trackThirdPartySharing:(nonnull ADJThirdPartySharing *)thirdPartySharing;
```

:param thirdPartySharing: The third party sharing object
:type thirdPartySharing: [*ADJThirdPartySharing*](/ios/reference/ADJThirdPartySharing.md)

% trackThirdPartySharing snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(true)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:@YES];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustThirdPartySharing = new AdjustThirdPartySharing(true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% Snippet end

:::::

% Snippet end

% Class method trackMeasurementConsent

:::::{function} trackMeasurementConsent(enabled)
:noindex:

Set whether [data collection and retention rules](https://help.adjust.com/en/article/manage-data-collection-and-retention) apply to a user.

```{code-block} objc
:name: ios-trackMeasurementConsent-invocation

+ (void) trackMeasurementConsent: (BOOL) enabled
```

:param enabled: Whether data collection and retention rules apply for the user
:type enabled: BOOL

% trackMeasurementConsent snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.trackMeasurementConsent(true)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust trackMeasurementConsent:YES];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.trackMeasurementConsent(false);
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method gdprForgetMe

:::::{function} gdprForgetMe
:noindex:

:::{versionadded} v4.13.0
Send an {abbr}`RTBF (Right To Be Forgotten)` request to Adjust's servers. This erases all information about the user the source app. The SDK stops sending requests for the user.
:::

```{code-block} objc
:name: ios-gdprForgetMe-invocation

- (void) gdprForgetMe
```

% gdprForgetMe snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.gdprForgetMe();
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust gdprForgetMe];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.gdprForgetMe();
```
:::
::::

% Snippet end

:::::

% Class method end
