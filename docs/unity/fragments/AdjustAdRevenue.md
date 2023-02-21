---
orphan: true
nosearch: true
---

% AdjustAdRevenue

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
Adjust.trackAdRevenue(adjustAdRevenue);
```
:::
::::

% methodEnd

% setRevenue

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.setRevenue(1.00, "EUR");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```
:::
::::

% methodEnd

% addCallbackParameter

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.addCallbackParameter("key", "value");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```
:::
::::

% methodEnd

% addPartnerParameter

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.addPartnerParameter("key", "value");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```
:::
::::

% methodEnd

% setAdImpressionsCount

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.setAdImpressionsCount(10);
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```
:::
::::

% methodEnd

% setAdRevenueNetwork

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.setAdRevenueNetwork("network1");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```
:::
::::

% methodEnd

% setAdRevenuePlacement

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.setAdRevenuePlacement("banner");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```
:::
::::


% methodEnd

% setAdRevenueUnit

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
adjustAdRevenue.setAdRevenueUnit("unit1");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```
:::
::::

% methodEnd

