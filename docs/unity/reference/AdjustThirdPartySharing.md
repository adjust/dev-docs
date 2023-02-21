# AdjustThirdPartySharing class

Use this class to communicate a user's third party sharing preferences. Send this information to Adjust's servers using the [`trackThirdPartySharing` method](unity-trackThirdPartySharing-invocation).

% classMethod AdjustThirdPartySharing

:::{function} AdjustThirdPartySharing (isEnabled)
:noindex:

Creates a third party sharing object initialized with an optional **boolean** value

```{code-block} cs
:name: unity-AdjustThirdPartySharing-invocation

public AdjustThirdPartySharing(bool? isEnabled)
```

:param isEnabled: A nullable boolean value
:type isEnabled: Boolean

```{include} /unity/fragments/AdjustThirdPartySharing.md
:start-after: AdjustThirdPartySharing true
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addGranularOption

:::{function} addGranularOption (partnerName, key, value)
:noindex:

Adds additional key-value pairs of information to share with third parties. You can add multiple parameters by calling this method multiple times.

```{code-block} cs
:name: unity-addGranularOption-invocation

public void addGranularOption(string partnerName, string key, string value)
```

:param partnerName: The name of the partner you want to share information with
:type partnerName: String
:param key: The data key
:type key: String
:param value: The data value
:type value: String

```{include} /unity/fragments/AdjustThirdPartySharing.md
:start-after: addGranularOption
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addPartnerSharingSetting

:::{function} addPartnerSharingSetting (partnerName, key, value)
:noindex:

```{versionadded} v4.32.0
Adds additional key-value pairs of settings to share with third parties. You can add multiple settings by calling this method multiple times.
```

```{code-block} cs
:name: unity-addPartnerSharingSetting-invocation

public void addPartnerSharingSetting(string partnerName, string key, bool value)
```

:param partnerName: The name of the partner whose settings you want to update
:type partnerName: String
:param key: The setting you want to update
:type key: String
:param value: Whether the setting is enabled
:type value: Boolean

```{include} /unity/fragments/AdjustThirdPartySharing.md
:start-after: addPartnerSharingSetting
:end-before: methodEnd
```

:::

% classMethodEnd
