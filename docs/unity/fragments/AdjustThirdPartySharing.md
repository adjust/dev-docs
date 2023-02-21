---
orphan: true
nosearch: true
---

% AdjustThirdPartySharing true

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(true);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

% AdjustThirdPartySharing false

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(false);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

% addGranularOption

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(null);
//...
adjustThirdPartySharing.addGranularOption("PartnerA", "key", "value");
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

% addGranularOption Facebook

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(null);
//...
adjustThirdPartySharing.addGranularOption("facebook", "data_processing_options_country", "1");
adjustThirdPartySharing.addGranularOption("facebook", "data_processing_options_state", "1000");
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

% addPartnerSharingSetting

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(null);
//...
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "foo", false);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

