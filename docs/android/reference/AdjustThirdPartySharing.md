# AdjustThirdPartySharing class

Use this class to communicate a user's third party sharing preferences. Send this information to Adjust's servers using the [`trackThirdPartySharing` method](android-trackThirdPartySharing-invocation).

% Class method AdjustThirdPartySharing

:::::{function} AdjustThirdPartySharing (isEnabled)
:noindex:

Creates a third party sharing object initialized with an optional **boolean** value

```{code-block} java
:name: android-AdjustThirdPartySharing-invocation

public AdjustThirdPartySharing(final Boolean isEnabled)
```

:param isEnabled: A nullable boolean value
:type isEnabled: Boolean

% AdjustThirdPartySharing true snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin

```{code-block} kotlin
val adjustThirdPartySharing = AdjustThirdPartySharing(true)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```

:::
:::{tab-item} Java
:sync: java

```{code-block} java
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
let adjustThirdPartySharing = new AdjustThirdPartySharing(true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::
::::

% Snippet end

% AdjustThirdPartySharing false snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin

```{code-block} kotlin
val adjustThirdPartySharing = AdjustThirdPartySharing(false)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```

:::
:::{tab-item} Java
:sync: java

```{code-block} java
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(false);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
let adjustThirdPartySharing = new AdjustThirdPartySharing(false);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::
::::

% Snippet end

:::::

% Class method end

% Class method addGranularOption

:::::{function} addGranularOption (partnerName, key, value)
:noindex:

Adds additional key-value pairs of information to share with third parties. You can add multiple parameters by calling this method multiple times.

```{code-block} java
:name: android-addGranularOption-invocation

public void addGranularOption(final String partnerName,
                              final String key,
                              final String value)
```

:param partnerName: The name of the partner you want to share information with
:type partnerName: String
:param key: The data key
:type key: String
:param value: The data value
:type value: String

% addGranularOption snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin

```{code-block} kotlin
val adjustThirdPartySharing = AdjustThirdPartySharing(true)
adjustThirdPartySharing.addGranularOption("PartnerA", "foo", "bar")
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```

:::
:::{tab-item} Java
:sync: java

```{code-block} java
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(true);
adjustThirdPartySharing.addGranularOption("PartnerA", "foo", "bar");
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
let adjustThirdPartySharing = new AdjustThirdPartySharing(true);
adjustThirdPartySharing.addGranularOption('PartnerA', 'foo', 'bar');
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::
::::

% Snippet end

You can use this method to toggle Facebook data processing options.

% addGranularOption Facebook snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin

```{code-block} kotlin
val adjustThirdPartySharing = AdjustThirdPartySharing(true)
adjustThirdPartySharing.addGranularOption("facebook", "data_processing_options_country", "1")
adjustThirdPartySharing.addGranularOption("facebook", "data_processing_options_state", "1000")
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```

:::
:::{tab-item} Java
:sync: java

```{code-block} java
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(true);
adjustThirdPartySharing.addGranularOption("facebook", "data_processing_options_country", "1");
adjustThirdPartySharing.addGranularOption("facebook", "data_processing_options_state", "1000");
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
let adjustThirdPartySharing = new AdjustThirdPartySharing(true);
adjustThirdPartySharing.addGranularOption('facebook', 'data_processing_options_country', '1');
adjustThirdPartySharing.addGranularOption('facebook', 'data_processing_options_state', '1000');
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::
::::

% Snippet end

:::::

% Class method end

% Class method addPartnerSharingSetting

:::::{function} addPartnerSharingSetting (partnerName, key, value)
:noindex:

:::{versionadded} v4.32.0
Adds additional key-value pairs of settings to share with third parties. You can add multiple settings by calling this method multiple times.
:::

```{code-block} java
:name: android-addPartnerSharingSetting-invocation

public void addPartnerSharingSetting(final String partnerName,
                                    final String key,
                                    final boolean value)
```

:param partnerName: The name of the partner whose settings you want to update
:type partnerName: String
:param key: The setting you want to update
:type key: String
:param value: Whether the setting is enabled
:type value: Boolean

% addPartnerSharingSetting snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin

```{code-block} kotlin
val adjustThirdPartySharing = AdjustThirdPartySharing(true)
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "install", true)
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "events", true)
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "sessions", true)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```

:::
:::{tab-item} Java
:sync: java

```{code-block} java
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(true);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "install", true);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "events", true);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "sessions", true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
let adjustThirdPartySharing = new AdjustThirdPartySharing(true);
adjustThirdPartySharing.addPartnerSharingSetting('PartnerA', 'install', true);
adjustThirdPartySharing.addPartnerSharingSetting('PartnerA', 'events', true);
adjustThirdPartySharing.addPartnerSharingSetting('PartnerA', 'sessions', true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::
::::

% Snippet end

:::::

% Class method end
