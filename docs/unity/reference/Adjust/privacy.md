# Privacy methods

Use these methods to handle user privacy in your app.

% classMethod disableThirdPartySharing

:::{function} disableThirdPartySharing
:noindex:

```{versionadded} v4.19.0
Disables sharing of information with third parties for all users.
```

```{code-block} cs
:name: unity-disableThirdPartySharing-invocation

public static void disableThirdPartySharing()
```

```{include} /unity/fragments/Adjust.md
:start-after: disableThirdPartySharing
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod trackThirdPartySharing

:::{function} trackThirdPartySharing(thirdPartySharing)
:noindex:

Disable or enable sharing of information with third parties on a per-user basis. Accepts a third party sharing object initialized with a **boolean** value.

```{code-block} cs
:name: unity-trackThirdPartySharing-invocation

public static void trackThirdPartySharing(AdjustThirdPartySharing thirdPartySharing)
```

:param thirdPartySharing: The third party sharing object
:type thirdPartySharing: [*AdjustThirdPartySharing*](/unity/reference/AdjustThirdPartySharing.md)

```{include} /unity/fragments/Adjust.md
:start-after: trackThirdPartySharing
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod trackMeasurementConsent

:::{function} trackMeasurementConsent(enabled)
:noindex:

Set whether [data collection and retention rules](https://help.adjust.com/en/article/manage-data-collection-and-retention) apply to a user.

```{code-block} cs
:name: unity-trackMeasurementConsent-invocation

public static void trackMeasurementConsent(bool measurementConsent)
```

:param enabled: Whether data collection and retention rules apply for the user
:type enabled: Boolean

```{include} /unity/fragments/Adjust.md
:start-after: trackMeasurementConsent
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod gdprForgetMe

:::{function} gdprForgetMe
:noindex:

```{versionadded} v4.13.0
Send an {abbr}`RTBF (Right To Be Forgotten)` request to Adjust's servers. This erases all information about the user the source app. The SDK stops sending requests for the user.
```

```{code-block} cs
:name: unity-gdprForgetMe-invocation

public static void gdprForgetMe()
```

```{include} /unity/fragments/Adjust.md
:start-after: gdprForgetMe
:end-before: methodEnd
```

:::

% classMethodEnd
