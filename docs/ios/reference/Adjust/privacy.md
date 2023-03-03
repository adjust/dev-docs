# Privacy methods

Use these methods to handle user privacy in your app.

% Class method disableThirdPartySharing

::::{function} disableThirdPartySharing
:noindex:

:::{versionadded} v4.19.0
Disables sharing of information with third parties for all users.
:::

{#ios-disablethirdpartysharing-invocation}
```objective-c
+ (void)disableThirdPartySharing;
```

% disableThirdPartySharing snippet

:::{tab-set-code}

```swift
Adjust.disableThirdPartySharing()
```

```objective-c
[Adjust disableThirdPartySharing];
```

```javascript
Adjust.disableThirdPartySharing();
```

:::

% Snippet end

::::

% Class method end

% Class method trackThirdPartySharing

::::{function} trackThirdPartySharing(thirdPartySharing)
:noindex:

Disable or enable sharing of information with third parties on a per-user basis. Accepts a third party sharing object initialized with a **boolean** value.

{#ios-trackthirdpartysharing-invocation}
```objective-c
+ (void)trackThirdPartySharing:(nonnull ADJThirdPartySharing *)thirdPartySharing;
```

:param thirdPartySharing: The third party sharing object
:type thirdPartySharing: [*ADJThirdPartySharing*](/ios/reference/ADJThirdPartySharing.md)

% trackThirdPartySharing snippet

:::{tab-set-code}

```swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(true)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```

```objective-c
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:@YES];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```

```javascript
var adjustThirdPartySharing = new AdjustThirdPartySharing(true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

% Snippet end

::::

% Snippet end

% Class method trackMeasurementConsent

::::{function} trackMeasurementConsent(enabled)
:noindex:

Set whether [data collection and retention rules](hc:manage-data-collection-and-retention) apply to a user.

{#ios-trackmeasurementconsent-invocation}
```objective-c
+ (void) trackMeasurementConsent: (BOOL) enabled
```

:param enabled: Whether data collection and retention rules apply for the user
:type enabled: BOOL

% trackMeasurementConsent snippet

:::{tab-set-code}

```swift
Adjust.trackMeasurementConsent(true)
```

```objective-c
[Adjust trackMeasurementConsent:YES];
```

```javascript
Adjust.trackMeasurementConsent(false);
```

:::

% Snippet end

::::

% Class method end

% Class method gdprForgetMe

::::{function} gdprForgetMe
:noindex:

:::{versionadded} v4.13.0
Send an {abbr}`RTBF (Right To Be Forgotten)` request to Adjust's servers. This erases all information about the user the source app. The SDK stops sending requests for the user.
:::

{#ios-gdprforgetme-invocation}
```objective-c
- (void) gdprForgetMe
```

% gdprForgetMe snippet

:::{tab-set-code}

```swift
Adjust.gdprForgetMe();
```

```objective-c
[Adjust gdprForgetMe];
```

```javascript
Adjust.gdprForgetMe();
```

:::

% Snippet end

::::

% Class method end
