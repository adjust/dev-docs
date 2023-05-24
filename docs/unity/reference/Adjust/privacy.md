# Privacy methods

Use these methods to handle user privacy in your app.

% Class method disableThirdPartySharing

::::{function} disableThirdPartySharing
:noindex:

:::{versionadded} v4.19.0
Disables sharing of information with third parties for all users.
:::

{#unity-disablethirdpartysharing-invocation}
```c#
public static void disableThirdPartySharing()
```

% disableThirdPartySharing snippet

:::{tab-set-code}

```c#
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

{#unity-trackthirdpartysharing-invocation}
```c#
public static void trackThirdPartySharing(AdjustThirdPartySharing thirdPartySharing)
```

:param thirdPartySharing: The third party sharing object
:type thirdPartySharing: [*AdjustThirdPartySharing*](/unity/reference/AdjustThirdPartySharing.md)

% trackThirdPartySharing snippet

:::{tab-set-code}

```c#
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(true);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

% Snippet end

::::

% Class method end

% Class method trackMeasurementConsent

::::{function} trackMeasurementConsent(enabled)
:noindex:

Set whether [data collection and retention rules](https://help.adjust.com/en/article/manage-data-collection-and-retention) apply to a user.

{#unity-trackmeasurementconsent-invocation}
```c#
public static void trackMeasurementConsent(bool measurementConsent)
```

:param enabled: Whether data collection and retention rules apply for the user
:type enabled: Boolean

% trackMeasurementConsent snippet

:::{tab-set-code}

```c#
Adjust.trackMeasurementConsent(true);
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

{#unity-gdprforgetme-invocation}
```c#
public static void gdprForgetMe()
```

% gdprForgetMe snippet

:::{tab-set-code}

```c#
Adjust.gdprForgetMe();
```

:::

% Snippet end

::::

% Class method end
