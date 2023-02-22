# Privacy methods

Use these methods to handle user privacy in your app.

% Class method disableThirdPartySharing

:::::{function} disableThirdPartySharing
:noindex:

:::{versionadded} v4.19.0
Disables sharing of information with third parties for all users.
:::

```{code-block} cs
:name: unity-disableThirdPartySharing-invocation

public static void disableThirdPartySharing()
```

% disableThirdPartySharing snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
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

```{code-block} cs
:name: unity-trackThirdPartySharing-invocation

public static void trackThirdPartySharing(AdjustThirdPartySharing thirdPartySharing)
```

:param thirdPartySharing: The third party sharing object
:type thirdPartySharing: [*AdjustThirdPartySharing*](/unity/reference/AdjustThirdPartySharing.md)

% trackThirdPartySharing snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(true);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method trackMeasurementConsent

:::::{function} trackMeasurementConsent(enabled)
:noindex:

Set whether [data collection and retention rules](https://help.adjust.com/en/article/manage-data-collection-and-retention) apply to a user.

```{code-block} cs
:name: unity-trackMeasurementConsent-invocation

public static void trackMeasurementConsent(bool measurementConsent)
```

:param enabled: Whether data collection and retention rules apply for the user
:type enabled: Boolean

% trackMeasurementConsent snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.trackMeasurementConsent(true);
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

```{code-block} cs
:name: unity-gdprForgetMe-invocation

public static void gdprForgetMe()
```

% gdprForgetMe snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.gdprForgetMe();
```
:::
::::

% Snippet end

:::::

% Class method end
