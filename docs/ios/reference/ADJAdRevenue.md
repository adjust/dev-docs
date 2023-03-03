# ADJAdRevenue class

Use this class to store ad revenue information. You can pass this to Adjust's servers using the [`trackAdRevenue` method](#ios-trackadrevenue-invocation).


% Class method initWithSource

:::::{function} initWithSource (source)
:noindex:

Creates an ad revenue object initialized with an external ad revenue source

{#ios-initwithsource-invocation}
```objective-c
- (nullable id)initWithSource:(nonnull NSString *)source;
```

:param source: The source of the ad revenue. See table below for available options
:type source: NSString

% initWithSource snippet

:::{tab-set-code}

```swift
let adRevenue = ADJAdRevenue(source: source);
//...
Adjust.trackAdRevenue(adRevenue);
```

```objective-c
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
//...
[Adjust trackAdRevenue:adRevenue];
```
:::

% Snippet end

::::{dropdown} Sources

% adRevenue sources table

:::{list-table}
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
:::

% tableEnd

::::

:::::

% Class method end

% Class method setRevenue

::::{function} setRevenue (amount, currency)
:noindex:

Creates an event object initialized with an Adjust event token

{#ios-adjadrevenue-setrevenue-invocation}
```objective-c
- (void)setRevenue:(double)amount currency:(nonnull NSString *)currency;
```

:param amount: The amount of currency units associated with the ad
:type amount: double
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: NSString

% setRevenue snippet

:::{tab-set-code}

```swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue.setRevenue(1.6, currency: "USD");
Adjust.trackAdRevenue(adRevenue);
```

```objective-c
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue setRevenue:1.6 currency:@"USD"];
[Adjust trackAdRevenue:adRevenue];
```
:::

% Snippet end

::::

% Class method end

% Class method setAdImpressionsCount

::::{function} setAdImpressionsCount (adImpressionsCount)
:noindex:

Sets the number of impressions received for an ad

{#ios-setadimpressionscount-invocation}
```objective-c
- (void)setAdImpressionsCount:(int)adImpressionsCount;
```

:param adImpressionsCount: The number of impressions associated with the ad
:type adImpressionsCount: int

% setAdImpressionsCount snippet

:::{tab-set-code}

```swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue?.adImpressionsCount = 1;
Adjust.trackAdRevenue(adRevenue);
```

```objc
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue setAdImpressionsCount:1];
[Adjust trackAdRevenue:adRevenue];
```
:::

% Snippet end
::::

% Class method end

% Class method setAdRevenueNetwork

::::{function} setAdRevenueNetwork (adRevenueNetwork)
:noindex:

Sets the number of impressions received for an ad

{#ios-setadrevenuenetwork-invocation}
```objective-c
- (void)setAdRevenueNetwork:(nonnull NSString *)adRevenueNetwork;
```

:param adRevenueNetwork: The network associated with the ad revenue
:type adRevenueNetwork: NSString

% setAdRevenueNetwork snippet

:::{tab-set-code}

```swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue?.adRevenueNetwork = "network1";
Adjust.trackAdRevenue(adRevenue);
```

```objective-c
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue setAdRevenueNetwork:@"network1"];
[Adjust trackAdRevenue:adRevenue];
```
:::

% Snippet end

::::

% Class method end

% Class method setAdRevenueUnit

::::{function} setAdRevenueUnit (adRevenueUnit)
:noindex:

Sets the ad unit ID associated with the ad revenue

{#ios-setadrevenueunit-invocation}
```objective-c
- (void)setAdRevenueUnit:(nonnull NSString *)adRevenueUnit;
```

:param adRevenueUnit: The ad unit ID associated with the ad revenue
:type adRevenueUnit: NSString

% setAdRevenueUnit snippet

:::{tab-set-code}

```swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue?.adRevenueUnit = "unit1";
Adjust.trackAdRevenue(adRevenue);
```

```objective-c
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue setAdRevenueUnit:@"unit1"];
[Adjust trackAdRevenue:adRevenue];
```
:::

% Snippet end

::::

% Class method end

% Class method setAdRevenuePlacement

::::{function} setAdRevenuePlacement (adRevenuePlacement)
:noindex:

Sets the placement of the ad associated with the ad revenue

{#ios-setadrevenueplacement-invocation}
```objective-c
- (void)setAdRevenuePlacement:(nonnull NSString *)adRevenuePlacement;
```

:param adRevenuePlacement: The placement of the ad associated with the revenue
:type adRevenuePlacement: NSString

% setAdRevenuePlacement snippet

:::{tab-set-code}

```swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue?.adRevenuePlacement = "banner";
Adjust.trackAdRevenue(adRevenue);
```

```objective-c
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue setAdRevenuePlacement:@"banner"];
[Adjust trackAdRevenue:adRevenue];
```
:::

% Snippet end

::::

% Class method end

% Class method addCallbackParameter

::::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the ad revenue object. You can add multiple parameters by calling this method multiple times.

Event callback parameters override session callback parameters that have the same key.

{#ios-adjadrevenue-addcallbackparameter-invocation}
```objective-c
- (void)addCallbackParameter:(nonnull NSString *)key value:(nonnull NSString *)value;
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

% addCallbackParameter snippet

:::{tab-set-code}

```swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue.addCallbackParameter(key, value: value);
Adjust.trackAdRevenue(adRevenue);
```

```objective-c
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue addCallbackParameter:key value:value];
[Adjust trackAdRevenue:adRevenue];
```
:::

% Snippet end

::::

% Class method end

% Class method addPartnerParameter

::::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the ad revenue object. You can add multiple parameters by calling this method multiple times.

{#ios-adjadrevenue-addpartnerparameter-invocation}
```objective-c
- (void)addPartnerParameter:(nonnull NSString *)key value:(nonnull NSString *)value;
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

% addPartnerParameter snippet

:::{tab-set-code}

```swift
let adRevenue = ADJAdRevenue(source: source);
adRevenue.addPartnerParameter(key, value: value);
Adjust.trackAdRevenue(adRevenue);
```

```objective-c
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
[adRevenue addPartnerParameter:key value:value];
[Adjust trackAdRevenue:adRevenue];
```
:::

% Snippet end

::::

% Class method end
