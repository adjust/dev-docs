# Privacy methods

Use these methods to handle user privacy in your app.

% Class method disableThirdPartySharing

::::{function} disableThirdPartySharing(context)
:noindex:

:::{versionadded} v4.19.0
Disables sharing of information with third parties for all users.
:::

{#android-disablethirdpartysharing-invocation}
```java
public static void disableThirdPartySharing(final Context context)
```

:param context: An optional parameter to pass the app context. Defaults to the extracted app context.
:type context: Context

% disableThirdPartySharing snippet

:::{tab-set-code}

```kotlin
Adjust.disableThirdPartySharing()
```

```java
Adjust.disableThirdPartySharing();
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

{#android-trackthirdpartysharing-invocation}
```java
public static void trackThirdPartySharing(
            final AdjustThirdPartySharing adjustThirdPartySharing)
```

:param thirdPartySharing: The third party sharing object
:type thirdPartySharing: [*AdjustThirdPartySharing*](/android/reference/AdjustThirdPartySharing.md)

% trackThirdPartySharing snippet

:::{tab-set-code}

```kotlin
val adjustThirdPartySharing = AdjustThirdPartySharing(true)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```

```java
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

```javascript
let adjustThirdPartySharing = new AdjustThirdPartySharing(true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

% Snippet end

::::

% Class method end

% Class method trackMeasurementConsent

::::{function} trackMeasurementConsent(consentMeasurement)
:noindex:

Set whether [data collection and retention rules](hc:/manage-data-collection-and-retention) apply to a user.

{#android-trackmeasurementconsent-invocation}
```java
public static void trackMeasurementConsent(final boolean consentMeasurement)
```

:param consentMeasurement: Whether data collection and retention rules apply for the user
:type consentMeasurement: Boolean

% trackMeasurementConsent snippet

:::{tab-set-code}

```kotlin
Adjust.trackMeasurementConsent(true)
```

```java
Adjust.trackMeasurementConsent(true);
```

```javascript
Adjust.trackMeasurementConsent(true);
```

:::

% Snippet end

::::

% Class method end

% Class method gdprForgetMe

::::{function} gdprForgetMe(context)
:noindex:

Send an {abbr}`RTBF (Right To Be Forgotten)` request to Adjust's servers. This erases all information about the user the source app. The SDK stops sending requests for the user.

{#android-gdprforgetme-invocation}
```java
public static void gdprForgetMe(final Context context)
```

:param context: An optional parameter to pass the app context. Defaults to the extracted app context.
:type context: Context

% gdprForgetMe snippet

:::{tab-set-code}

```kotlin
Adjust.gdprForgetMe()
```

```java
Adjust.gdprForgetMe();
```

```javascript
Adjust.gdprForgetMe();
```

:::

% Snippet end

::::

% Class method end
