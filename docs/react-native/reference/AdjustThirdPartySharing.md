# AdjustThirdPartySharing class

Use this class to communicate a user's third party sharing preferences. Send this information to Adjust's servers using the [`trackThirdPartySharing` method](#react-native-trackthirdpartysharing-invocation).

% Class method AdjustThirdPartySharing

::::{function} AdjustThirdPartySharing (isEnabled)
:noindex:

Creates a third party sharing object initialized with an optional **boolean** value

{#react-native-adjustthirdpartysharing-invocation}

```ts
export class AdjustThirdPartySharing {
   constructor(isEnabled: boolean)
   ..//
}
```

:param isEnabled: A nullable boolean value
:type isEnabled: Boolean

% AdjustThirdPartySharing true snippet

:::{tab-set-code}

```js
var adjustThirdPartySharing = new AdjustThirdPartySharing(true);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

% Snippet end

% AdjustThirdPartySharing false snippet

:::{tab-set-code}

```js
var adjustThirdPartySharing = new AdjustThirdPartySharing(false);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

% Snippet end

::::

% Class method end

% Class method addGranularOption

::::{function} addGranularOption (partnerName, key, value)
:noindex:

Adds additional key-value pairs of information to share with third parties. You can add multiple parameters by calling this method multiple times.

{#react-native-addgranularoption-invocation}

```ts
public addGranularOption(partnerName: string, key: string, value: string): void
```

:param partnerName: The name of the partner you want to share information with
:type partnerName: String
:param key: The data key
:type key: String
:param value: The data value
:type value: String

% addGranularOption snippet

:::{tab-set-code}

```js
var adjustThirdPartySharing = new AdjustThirdPartySharing(null);
//...
adjustThirdPartySharing.addGranularOption("PartnerA", "key", "value");
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

% Snippet end

::::

% Class method end

% Class method addPartnerSharingSetting

::::{function} addPartnerSharingSetting (partnerName, key, value)
:noindex:

:::{versionadded} v4.32.0
Adds additional key-value pairs of settings to share with third parties. You can add multiple settings by calling this method multiple times.
:::

{#react-native-addpartnersharingsetting-invocation}

```ts
public addPartnerSharingSetting(partnerName: string, key: string, value: boolean): void
```

:param partnerName: The name of the partner whose settings you want to update
:type partnerName: String
:param key: The setting you want to update
:type key: String
:param value: Whether the setting is enabled
:type value: Boolean

% addPartnerSharingSetting snippet

:::{tab-set-code}

```js Yes
var adjustThirdPartySharing = new AdjustThirdPartySharing(null);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "install", true);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "events", true);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "sessions", true);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

% Snippet end

::::

% Class method end
