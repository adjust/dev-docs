# ADJAdRevenue class

Use this class to store ad revenue information. You can pass this to Adjust's servers using the [`trackAdRevenue` method](android-trackAdRevenue-invocation).

% Class method AdjustAdRevenue

:::::{function} AdjustAdRevenue (source)
:noindex:

Creates an ad revenue object initialized with an external ad revenue source

```{code-block} java
:name: android-AdjustAdRevenue-invocation

public AdjustAdRevenue(final String source)
```

:param source: The source of the ad revenue. See table below for available options
:type source: string

% AdjustAdRevenue snippet

:::{tab-set-code}

```{code-block} kotlin
val adjustAdRevenue = AdjustAdRevenue("source")
Adjust.trackAdRevenue(adjustAdRevenue)
```

```{code-block} java
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
Adjust.trackAdRevenue(adjustAdRevenue);
```

```{code-block} javascript
let adjustAdRevenue = new AdjustAdRevenue('source')
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

::::{dropdown} Sources

:::{list-table}
:header-rows: 1

* - Parameter
   - Source
* - `AdjustConfig.AD_REVENUE_APPLOVIN_MAX`
   - AppLovin MAX
* - `AdjustConfig.AD_REVENUE_MOPUB`
   - Mopub
* - `AdjustConfig.AD_REVENUE_ADMOB`
   - AdMob
* - `AdjustConfig.AD_REVENUE_IRONSOURCE`
   - ironSource
* - `AdjustConfig.AD_REVENUE_ADMOST`
   - AdMost
* - `AdjustConfig.AD_REVENUE_UNITY`
   - Unity
* - `AdjustConfig.AD_REVENUE_HELIUM_CHARTBOOST`
   - Helium Chartboost
* - `AdjustConfig.AD_REVENUE_SOURCE_PUBLISHER`
   - Generic source
:::
::::

% Snippet end

:::::

% Class method end

% Class method setRevenue

::::{function} setRevenue (revenue, currency)
:noindex:

Creates an event object initialized with an Adjust event token

```{code-block} java
:name: android-AdjustAdRevenue-setRevenue-invocation

public void setRevenue(final Double revenue, final String currency)
```

:param revenue: The amount of currency units associated with the ad
:type revenue: Double
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: String

% setRevenue snippet

:::{tab-set-code}

```{code-block} kotlin
val adjustAdRevenue = AdjustAdRevenue("source")
adjustAdRevenue.setRevenue(1.00, "EUR")
Adjust.trackAdRevenue(adjustAdRevenue)
```

```{code-block} java
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
adjustAdRevenue.setRevenue(1.00, "EUR");
Adjust.trackAdRevenue(adjustAdRevenue);
```

```{code-block} javascript
let adjustAdRevenue = new AdjustAdRevenue('source')
adjustAdRevenue.setRevenue(1.00, 'EUR');
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end

% Class method setAdImpressionsCount

::::{function} setAdImpressionsCount (adImpressionsCount)
:noindex:

Sets the number of impressions received for an ad

```{code-block} java
:name: android-setAdImpressionsCount-invocation

public void setAdImpressionsCount(final Integer adImpressionsCount)
```

:param adImpressionsCount: The number of impressions associated with the ad
:type adImpressionsCount: Integer

% setAdImpressionsCount snippet

:::{tab-set-code}

```{code-block} kotlin
val adjustAdRevenue = AdjustAdRevenue("source")
adjustAdRevenue.setAdImpressionsCount(10)
Adjust.trackAdRevenue(adjustAdRevenue)
```

```{code-block} java
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
adjustAdRevenue.setAdImpressionsCount(10);
Adjust.trackAdRevenue(adjustAdRevenue);
```

```{code-block} javascript
let adjustAdRevenue = new AdjustAdRevenue('source')
adjustAdRevenue.setAdImpressionsCount(10);
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end

% Class method setAdRevenueNetwork

::::{function} setAdRevenueNetwork (adRevenueNetwork)
:noindex:

Sets the number of impressions received for an ad

```{code-block} java
:name: android-setAdRevenueNetwork-invocation

public void setAdRevenueNetwork(final String adRevenueNetwork)
```

:param adRevenueNetwork: The network associated with the ad revenue
:type adRevenueNetwork: String

% setAdRevenueNetwork snippet

:::{tab-set-code}

```{code-block} kotlin
val adjustAdRevenue = AdjustAdRevenue("source")
adjustAdRevenue.setAdRevenueNetwork("network1")
Adjust.trackAdRevenue(adjustAdRevenue)
```

```{code-block} java
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
adjustAdRevenue.setAdRevenueNetwork("network1");
Adjust.trackAdRevenue(adjustAdRevenue);
```

```{code-block} javascript
let adjustAdRevenue = new AdjustAdRevenue('source')
adjustAdRevenue.setAdRevenueNetwork('network1');
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end

% Class method setAdRevenueUnit

::::{function} setAdRevenueUnit (adRevenueUnit)
:noindex:

Sets the ad unit ID associated with the ad revenue

```{code-block} cs
:name: android-setAdRevenueUnit-invocation

public void setAdRevenueUnit(final String adRevenueUnit)
```

:param adRevenueUnit: The ad unit ID associated with the ad revenue
:type adRevenueUnit: String

% setAdRevenueUnit snippet

:::{tab-set-code}

```{code-block} kotlin
val adjustAdRevenue = AdjustAdRevenue("source")
adjustAdRevenue.setAdRevenueUnit("unit1")
Adjust.trackAdRevenue(adjustAdRevenue)
```

```{code-block} java
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
adjustAdRevenue.setAdRevenueUnit("unit1");
Adjust.trackAdRevenue(adjustAdRevenue);
```

```{code-block} javascript
let adjustAdRevenue = new AdjustAdRevenue('source')
adjustAdRevenue.setAdRevenueUnit('unit1');
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end

% Class method setAdRevenuePlacement

::::{function} setAdRevenuePlacement (adRevenuePlacement)
:noindex:

Sets the placement of the ad associated with the ad revenue

```{code-block} java
:name: android-setAdRevenuePlacement-invocation

public void setAdRevenuePlacement(final String adRevenuePlacement)
```

:param adRevenuePlacement: The placement of the ad associated with the revenue
:type adRevenuePlacement: String

% setAdRevenuePlacement snippet

:::{tab-set-code}

```{code-block} kotlin
val adjustAdRevenue = AdjustAdRevenue("source")
adjustAdRevenue.setAdRevenuePlacement("banner")
Adjust.trackAdRevenue(adjustAdRevenue)
```

```{code-block} java
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
adjustAdRevenue.setAdRevenuePlacement("banner");
Adjust.trackAdRevenue(adjustAdRevenue);
```

```{code-block} javascript
let adjustAdRevenue = new AdjustAdRevenue('source')
adjustAdRevenue.setAdRevenuePlacement('banner');
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end

% Class method addCallbackParameter

:::::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the ad revenue object. You can add multiple parameters by calling this method multiple times.

Event callback parameters override session callback parameters that have the same key.

```{code-block} java
:name: android-AdjustAdrevenue-addCallbackParameter-invocation

public void addCallbackParameter(final String key, final String value)
```

:param key: The data key
:type key: String
:param value: The data value
:type value: String

% addCallbackParameter snippet

:::{tab-set-code}

```{code-block} kotlin
val adjustAdRevenue = AdjustAdRevenue("source")
adjustAdRevenue.addCallbackParameter("key", "value")
Adjust.trackAdRevenue(adjustAdRevenue)
```

```{code-block} java
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
adjustAdRevenue.addCallbackParameter("key", "value");
Adjust.trackAdRevenue(adjustAdRevenue);
```

```{code-block} javascript
let adjustAdRevenue = new AdjustAdRevenue('source')
adjustAdRevenue.addCallbackParameter('key', 'value');
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

:::::

% Class method end

% Class method addPartnerParameter

::::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the ad revenue object. You can add multiple parameters by calling this method multiple times.

```{code-block} java
:name: android-AdjustAdRevenue-addPartnerParameter-invocation

public void addPartnerParameter(String key, String value)
```

:param key: The data key
:type key: String
:param value: The data value
:type value: String

% addPartnerParameter snippet

:::{tab-set-code}

```{code-block} kotlin
val adjustAdRevenue = AdjustAdRevenue("source")
adjustAdRevenue.addPartnerParameter("key", "value")
Adjust.trackAdRevenue(adjustAdRevenue)
```

```{code-block} java
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
adjustAdRevenue.addPartnerParameter("key", "value");
Adjust.trackAdRevenue(adjustAdRevenue);
```

```{code-block} javascript
let adjustAdRevenue = new AdjustAdRevenue('source')
adjustAdRevenue.addPartnerParameter('key', 'value');
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end
