# ADJAdRevenue class

Use this class to store ad revenue information. You can pass this to Adjust's servers using the [`trackAdRevenue` method](unity-trackAdRevenue-invocation).


% classMethod AdjustAdRevenue

::::{function} AdjustAdRevenue (source)
:noindex:

Creates an ad revenue object initialized with an external ad revenue source

```{code-block} cs
:name: unity-AdjustAdRevenue-invocation

public AdjustAdRevenue(string source)
```

:param source: The source of the ad revenue. See table below for available options
:type source: string

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: AdjustAdRevenue
:end-before: methodEnd
```

:::{dropdown} Sources

```{list-table}
:header-rows: 1

* - Parameter
   - Source
* - `AdjustConfig.AdjustAdRevenueSourceAppLovinMAX`
   - AppLovin MAX
* - `AdjustConfig.AdjustAdRevenueSourceMopub`
   - Mopub
* - `AdjustConfig.AdjustAdRevenueSourceAdMo`
   - AdMob
* - `AdjustConfig.AdjustAdRevenueSourceIronSource`
   - ironSource
* - `AdjustConfig.AdjustAdRevenueSourceAdmost`
   - AdMost
* - `AdjustConfig.AdjustAdRevenueSourceUnity`
   - Unity
* - `AdjustConfig.AdjustAdRevenueSourceHeliumChartboost`
   - Helium Chartboost
* - `AdjustConfig.AdjustAdRevenueSourcePublisher`
   - Generic source
```
:::

::::

% classMethodEnd

% classMethod setRevenue

:::{function} setRevenue (amount, currency)
:noindex:

Creates an event object initialized with an Adjust event token

```{code-block} cs
:name: unity-AdjustAdRevenue-setRevenue-invocation

public void setRevenue(double amount, string currency)
```

:param amount: The amount of currency units associated with the ad
:type amount: double
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: string

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: setRevenue
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setAdImpressionsCount

:::{function} setAdImpressionsCount (adImpressionsCount)
:noindex:

Sets the number of impressions received for an ad

```{code-block} cs
:name: unity-setAdImpressionsCount-invocation

public void setAdImpressionsCount(int adImpressionsCount)
```

:param adImpressionsCount: The number of impressions associated with the ad
:type adImpressionsCount: int

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: setAdImpressionsCount
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setAdRevenueNetwork

:::{function} setAdRevenueNetwork (adRevenueNetwork)
:noindex:

Sets the number of impressions received for an ad

```{code-block} cs
:name: unity-setAdRevenueNetwork-invocation

public void setAdRevenueNetwork(string adRevenueNetwork)
```

:param adRevenueNetwork: The network associated with the ad revenue
:type adRevenueNetwork: string

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: setAdRevenueNetwork
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setAdRevenueUnit

:::{function} setAdRevenueUnit (adRevenueUnit)
:noindex:

Sets the ad unit ID associated with the ad revenue

```{code-block} cs
:name: unity-setAdRevenueUnit-invocation

public void setAdRevenueUnit(string adRevenueUnit)
```

:param adRevenueUnit: The ad unit ID associated with the ad revenue
:type adRevenueUnit: NSString

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: setAdRevenueUnit
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setAdRevenuePlacement

:::{function} setAdRevenuePlacement (adRevenuePlacement)
:noindex:

Sets the placement of the ad associated with the ad revenue

```{code-block} objc
:name: unity-setAdRevenuePlacement-invocation

public void setAdRevenuePlacement(string adRevenuePlacement)
```

:param adRevenuePlacement: The placement of the ad associated with the revenue
:type adRevenuePlacement: string

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: setAdRevenuePlacement
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addCallbackParameter

:::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the ad revenue object. You can add multiple parameters by calling this method multiple times.

Event callback parameters override session callback parameters that have the same key.

```{code-block} cs
:name: unity-AdjustAdrevenue-addCallbackParameter-invocation

public void addCallbackParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: addCallbackParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addPartnerParameter

:::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the ad revenue object. You can add multiple parameters by calling this method multiple times.

```{code-block} objc
:name: unity-AdjustAdRevenue-addPartnerParameter-invocation

public void addPartnerParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: addPartnerParameter
:end-before: methodEnd
```

:::

% classMethodEnd
