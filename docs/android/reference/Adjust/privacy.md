# Privacy methods

Use these methods to handle user privacy in your app.

% Class method disableThirdPartySharing

::::{function} disableThirdPartySharing(context)
:noindex:

:::{versionadded} v4.19.0
Disables sharing of information with third parties for all users.
:::

```{code-block} java
:name: android-disableThirdPartySharing-invocation

public static void disableThirdPartySharing(final Context context)
```

:param context: An optional parameter to pass the app context. Defaults to the extracted app context.
:type context: Context

% disableThirdPartySharing snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.disableThirdPartySharing()
```

```{code-block} java
Adjust.disableThirdPartySharing();
```

```{code-block} javascript
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

```{code-block} java
:name: android-trackThirdPartySharing-invocation

public static void trackThirdPartySharing(
            final AdjustThirdPartySharing adjustThirdPartySharing)
```

:param thirdPartySharing: The third party sharing object
:type thirdPartySharing: [*AdjustThirdPartySharing*](/android/reference/AdjustThirdPartySharing.md)

% trackThirdPartySharing snippet

:::{tab-set-code}

```{code-block} kotlin
val adjustThirdPartySharing = AdjustThirdPartySharing(true)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```

```{code-block} java
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

```{code-block} javascript
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

Set whether [data collection and retention rules](https://help.adjust.com/en/article/manage-data-collection-and-retention) apply to a user.

```{code-block} java
:name: android-trackMeasurementConsent-invocation

public static void trackMeasurementConsent(final boolean consentMeasurement)
```

:param consentMeasurement: Whether data collection and retention rules apply for the user
:type consentMeasurement: Boolean

% trackMeasurementConsent snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.trackMeasurementConsent(true)
```

```{code-block} java
Adjust.trackMeasurementConsent(true);
```

```{code-block} javascript
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

```{code-block} java
:name: android-gdprForgetMe-invocation

public static void gdprForgetMe(final Context context)
```

:param context: An optional parameter to pass the app context. Defaults to the extracted app context.
:type context: Context

% gdprForgetMe snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.gdprForgetMe()
```

```{code-block} java
Adjust.gdprForgetMe();
```

```{code-block} javascript
Adjust.gdprForgetMe();
```

:::

% Snippet end

::::

% Class method end
