# Privacy methods

Use these methods to handle user privacy in your app.

% Class method disableThirdPartySharing

::::{function} disableThirdPartySharing
:noindex:

:::{versionadded} v4.19.0
Disables sharing of information with third parties for all users.
:::

{#react-native-disablethirdpartysharing-invocation}
```ts
disableThirdPartySharing: () => void
```

% disableThirdPartySharing snippet

:::{tab-set-code}

```js
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

{#react-native-trackthirdpartysharing-invocation}
```ts
trackThirdPartySharing: (adjustThirdPartySharing: AdjustThirdPartySharing) => void
```

:param thirdPartySharing: The third party sharing object
:type thirdPartySharing: [*AdjustThirdPartySharing*](/react-native/reference/AdjustThirdPartySharing.md)

% trackThirdPartySharing snippet

:::{tab-set-code}

```js
var adjustThirdPartySharing = new AdjustThirdPartySharing(true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

% Snippet end

::::

% Class method end

% Class method trackMeasurementConsent

::::{function} trackMeasurementConsent(enabled)
:noindex:

Set whether [data collection and retention rules](hc:manage-data-collection-and-retention) apply to a user.

{#react-native-trackmeasurementconsent-invocation}
```ts
trackMeasurementConsent: (measurementConsent: boolean) => void
```

:param enabled: Whether data collection and retention rules apply for the user
:type enabled: Boolean

% trackMeasurementConsent snippet

:::{tab-set-code}

```js
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

{#react-native-gdprforgetme-invocation}
```ts
trackMeasurementConsent: (measurementConsent: boolean) => void
```

% gdprForgetMe snippet

:::{tab-set-code}

```js
Adjust.gdprForgetMe();
```

:::

% Snippet end

::::

% Class method end
