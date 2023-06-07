# Privacy methods

Use these methods to handle user privacy in your app.

% Class method disableThirdPartySharing

::::{function} disableThirdPartySharing
:noindex:

:::{versionadded} v4.19.0
Disables sharing of information with third parties for all users.
:::

{#flutter-disablethirdpartysharing-invocation}
```dart
static void disableThirdPartySharing()
```

% disableThirdPartySharing snippet

:::{tab-set-code}

```dart
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

{#flutter-trackthirdpartysharing-invocation}
```dart
static void trackThirdPartySharing(AdjustThirdPartySharing thirdPartySharing)
```

:param thirdPartySharing: The third party sharing object
:type thirdPartySharing: [*AdjustThirdPartySharing*](/flutter/reference/AdjustThirdPartySharing.md)

% trackThirdPartySharing snippet

:::{tab-set-code}

```dart
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(false);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

% Snippet end

::::

% Class method end

% Class method trackMeasurementConsent

::::{function} trackMeasurementConsent(measurementConsent)
:noindex:

Set whether [data collection and retention rules](hc:manage-data-collection-and-retention) apply to a user.

{#flutter-trackmeasurementconsent-invocation}
```dart
static void trackMeasurementConsent(bool measurementConsent)
```

:param measurementConsent: Whether data collection and retention rules apply for the user
:type measurementConsent: Boolean

% trackMeasurementConsent snippet

:::{tab-set-code}

```dart
Adjust.trackMeasurementConsent(true);
```

:::

% Snippet end

::::

% Class method end

% Class method gdprForgetMe

::::{function} gdprForgetMe
:noindex:

Send an [{abbr}` RTBF (Right To Be Forgotten)`](hc:gdpr) request to Adjust's servers. This erases all information about the user the source app. The SDK stops sending requests for the user.
:::

{#flutter-gdprforgetme-invocation}
```dart
static void gdprForgetMe()
```

% gdprForgetMe snippet

:::{tab-set-code}

```dart
Adjust.gdprForgetMe();
```

:::

% Snippet end

::::

% Class method end
