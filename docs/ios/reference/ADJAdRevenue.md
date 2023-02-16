# ADJAdRevenue class

Use this class to store ad revenue information. You can pass this to Adjust's servers using the [`trackAdRevenue` method](ios-trackAdRevenue-invocation).


% classMethod initWithSource

::::{function} initWithSource (eventToken)
:noindex:

Creates an ad revenue object initialized with an external ad revenue source

```{code-block} objc
:name: ios-initWithSource-invocation

- (nullable id)initWithSource:(nonnull NSString *)source;
```

:param source: The source of the ad revenue. See table below for available options
:type source: NSString

```{include} /ios/fragments/ADJAdRevenue.md
:start-after: initWithSource
:end-before: methodEnd
```

:::{dropdown} Sources

```{list-table}
:header-rows: 1

* - Parameter
   - Source
* - `ADJAdRevenueSourceAppLovinMAX`
   - AppLovin MAX
* - `ADJAdRevenueSourceMopub`
   - Mopub
* - `ADJAdRevenueSourceAdMob`
   - AdMob
* - `ADJAdRevenueSourceIronSource`
   - ironSource
* - `ADJAdRevenueSourceAdMost`
   - AdMost
* - `ADJAdRevenueSourceUnity`
   - Unity
* - `ADJAdRevenueSourceHeliumChartboost`
   - Helium Chartboost
* - `ADJAdRevenueSourcePublisher`
   - Generic source
```
:::

::::

% classMethodEnd

% classMethod setRevenue

:::{function} setRevenue (amount, currency)
:noindex:

Creates an event object initialized with an Adjust event token

```{code-block} objc
:name: ios-ADJAdRevenue-setRevenue-invocation

- (void)setRevenue:(double)amount currency:(nonnull NSString *)currency;
```

:param amount: The amount of currency units associated with the ad
:type amount: double
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: NSString

```{include} /ios/fragments/ADJAdRevenue.md
:start-after: setRevenue
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setAdImpressionsCount

:::{function} setAdImpressionsCount (adImpressionsCount)
:noindex:

Sets the number of impressions received for an ad

```{code-block} objc
:name: ios-setAdImpressionsCount-invocation

- (void)setAdImpressionsCount:(int)adImpressionsCount;
```

:param adImpressionsCount: The number of impressions associated with the ad
:type adImpressionsCount: int

```{include} /ios/fragments/ADJAdRevenue.md
:start-after: setAdImpressionsCount
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setAdRevenueNetwork

:::{function} setAdRevenueNetwork (adRevenueNetwork)
:noindex:

Sets the number of impressions received for an ad

```{code-block} objc
:name: ios-setAdRevenueNetwork-invocation

- (void)setAdRevenueNetwork:(nonnull NSString *)adRevenueNetwork;
```

:param adRevenueNetwork: The network associated with the ad revenue
:type adRevenueNetwork: NSString

```{include} /ios/fragments/ADJAdRevenue.md
:start-after: setAdRevenueNetwork
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setAdRevenueUnit

:::{function} setAdRevenueUnit (adRevenueUnit)
:noindex:

Sets the ad unit ID associated with the ad revenue

```{code-block} objc
:name: ios-setAdRevenueUnit-invocation

- (void)setAdRevenueUnit:(nonnull NSString *)adRevenueUnit;
```

:param adRevenueUnit: The ad unit ID associated with the ad revenue
:type adRevenueUnit: NSString

```{include} /ios/fragments/ADJAdRevenue.md
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
:name: ios-setAdRevenuePlacement-invocation

- (void)setAdRevenuePlacement:(nonnull NSString *)adRevenuePlacement;
```

:param adRevenuePlacement: The placement of the ad associated with the revenue
:type adRevenuePlacement: NSString

```{include} /ios/fragments/ADJAdRevenue.md
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

```{code-block} objc
:name: ios-ADJAdRevenue-addCallbackParameter-invocation

- (void)addCallbackParameter:(nonnull NSString *)key value:(nonnull NSString *)value;
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

```{include} /ios/fragments/ADJAdRevenue.md
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
:name: ios-ADJAdRevenue-addPartnerParameter-invocation

- (void)addPartnerParameter:(nonnull NSString *)key value:(nonnull NSString *)value;
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

```{include} /ios/fragments/ADJAdRevenue.md
:start-after: addPartnerParameter
:end-before: methodEnd
```

:::

% classMethodEnd
