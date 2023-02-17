---
orphan: true
nosearch: true
---

% initWithIsEnabledNumberBool true

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(true)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:@YES];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustThirdPartySharing = new AdjustThirdPartySharing(true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

% initWithIsEnabledNumberBool false

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(false)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:@NO];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustThirdPartySharing = new AdjustThirdPartySharing(false);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

% addGranularOption

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(nil)
adjustThirdPartySharing.addGranularOption("PartnerA", key: "foo", value: "bar")
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:nil];
[adjustThirdPartySharing addGranularOption:@"PartnerA" key:@"foo" value:@"bar"];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustThirdPartySharing = new AdjustThirdPartySharing(null);
adjustThirdPartySharing.addGranularOption('PartnerA', 'foo', 'bar');
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

% addGranularOption Facebook

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let tps = ADJThirdPartySharing.initWithIsEnabledNumberBool(nil)
tps.addGranularOption("facebook", key: "data_processing_options_country", value: "1")
tps.addGranularOption("facebook", key: "data_processing_options_state", value: "1000")
Adjust.trackThirdPartySharing(tps)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJThirdPartySharing *tps = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:@YES];
[tps addGranularOption:@"facebook" key:@"data_processing_options_country" value:@"1"];
[tps addGranularOption:@"facebook" key:@"data_processing_options_state" value:@"1000"];
[Adjust trackThirdPartySharing:tps];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var tps = new AdjustThirdPartySharing(null);
tps.addGranularOption('facebook', 'data_processing_options_country', '1');
tps.addGranularOption('facebook', 'data_processing_options_state', '1000');
Adjust.trackThirdPartySharing(tps);
```
:::
::::

% methodEnd

% addPartnerSharingSetting

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(nil)
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", key: "foo", value: false)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:nil];
[adjustThirdPartySharing addPartnerSharingSetting:@"PartnerA" key:@"foo" value:@NO];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustThirdPartySharing = new AdjustThirdPartySharing(null);
adjustThirdPartySharing.addPartnerSharingSetting('PartnerA', 'foo', false);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd
