---
orphan: true
nosearch: true
---

% addCallbackParameter

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue.addCallbackParameter(key, value: value);
Adjust.trackAdRevenue(adRevenue);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue addCallbackParameter:key value:value];
[Adjust trackAdRevenue:adRevenue];
```
:::
::::

% methodEnd

% addPartnerParameter

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue.addPartnerParameter(key, value: value);
Adjust.trackAdRevenue(adRevenue);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue addPartnerParameter:key value:value];
[Adjust trackAdRevenue:adRevenue];
```
:::
::::

% methodEnd

% setAdImpressionsCount

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue?.adImpressionsCount = 1;
Adjust.trackAdRevenue(adRevenue);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue setAdImpressionsCount:1];
[Adjust trackAdRevenue:adRevenue];
```
:::
::::

% methodEnd

% setAdRevenueNetwork

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue?.adRevenueNetwork = "network1";
Adjust.trackAdRevenue(adRevenue);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue setAdRevenueNetwork:@"network1"];
[Adjust trackAdRevenue:adRevenue];
```
:::
::::

% methodEnd

% setAdRevenuePlacement

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue?.adRevenuePlacement = "banner";
Adjust.trackAdRevenue(adRevenue);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue setAdRevenuePlacement:@"banner"];
[Adjust trackAdRevenue:adRevenue];
```
:::
::::

% methodEnd

% setAdRevenueUnit

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue?.adRevenueUnit = "unit1";
Adjust.trackAdRevenue(adRevenue);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue setAdRevenueUnit:@"unit1"];
[Adjust trackAdRevenue:adRevenue];
```
:::
::::

% methodEnd

% setRevenue

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue.setRevenue(1.6, currency: "USD");
Adjust.trackAdRevenue(adRevenue);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue setRevenue:1.6 currency:@"USD"];
[Adjust trackAdRevenue:adRevenue];
```
:::
::::

% methodEnd
