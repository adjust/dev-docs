# Record ad revenue

You can measure ad revenue for [supported network partners](https://help.adjust.com/en/article/ad-revenue) using the Adjust SDK.

:::{important}
You need to perform some extra setup steps in your Adjust dashboard to measure ad revenue. Contact your Technical Account Manager or <support@adjust.com> to get started.
:::

To measure ad revenue:

1. Create a new Adjust ad revenue instance and pass your ad revenue source as an argument.
2. Call the [`trackAdRevenue` method](unity-trackAdRevenue-invocation) with your ad revenue instance as an argument.

```{include} /unity/fragments/Adjust.md
:start-after: trackAdRevenue
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

## Record ad revenue amount

You can record ad revenue by setting the `revenue` and `currency` properties on your ad revenue instance.

To set these properties, call the [`setRevenue` method](unity-AdjustAdRevenue-setRevenue-invocation) and pass the following arguments:

* The `revenue` amount (**number**)
* The `currency` code (**string**)

You must format the currency code as a 3 character string that follows the [ISO 4217 standard](https://www.iban.com/currency-codes). Adjust's servers convert the reported revenue to your chosen reporting currency. 

:::{seealso}
Check the [guide to tracking purchases in different currencies](https://help.adjust.com/en/article/currency-conversion) for more information.
:::

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: setRevenue
:end-before: methodEnd
```

## Record ad campaign details

The ad revenue object contains properties you can use to report on your ad campaigns.

:::::{dropdown} Ad impressions
Record the number of ad impressions by passing an **integer** value to the [`setAdImpressionsCount` method](unity-setAdImpressionsCount-invocation).

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: setAdImpressionsCount
:end-before: methodEnd
```
:::::

:::::{dropdown} Ad revenue network
Record which network generated the revenue by passing a **string** value to the [`setAdRevenueNetwork` method](unity-setAdRevenueNetwork-invocation).

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: setAdRevenueNetwork
:end-before: methodEnd
```
:::::

:::::{dropdown} Ad revenue unit
Record which ad revenue unit generated the revenue by passing a **string** value to the [`setAdRevenueUnit` method](unity-setAdRevenueUnit-invocation).

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: setAdRevenueUnit
:end-before: methodEnd
```
:::::

:::::{dropdown} Ad revenue placement
Record the placement of your ad by passing a **string** value to the [`setAdRevenuePlacement` method](unity-setAdRevenuePlacement-invocation).

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: setAdRevenuePlacement
:end-before: methodEnd
```
:::::

## Add callback parameters

If you [register a callback URL](https://help.adjust.com/en/article/best-practices-callbacks) in the Adjust dashboard, the SDK sends a GET request to your callback URL when it records an event.

You can configure callback parameters to your servers. Once you configure parameters on an event, the SDK appends them to your [callback URL](https://help.adjust.com/en/article/raw-data-exports). You can use this information to analyze your users' in-app behavior with your BI system.

Add callback parameters to your event by calling the [`addCallbackParameter` method](unity-AdjustAdRevenue-addCallbackParameter-invocation) with **string** key-value arguments. You can add multiple parameters by calling this method multiple times.

The Adjust SDK measures the event and sends a request to your URL with the callback parameters. For example, if you register the URL `https://www.mydomain.com/callback`, your callback looks like this:

```
https://www.mydomain.com/callback?key=value&foo=bar
```

:::{note}
Adjust doesn't store your custom callback parameters. Custom parameters are only appended to your callback URL.
:::

If you are using CSV uploads, make sure to add the parameters to your CSV definition.

Adjust supports many placeholders which you can use to pass information from the SDK to your URL. For example, the `{idfa}` placeholder for iOS and the `{gps_adid}` placeholder for Android. The `{publisher_parameter}` placeholder presents all callback parameters in a single string.

:::{seealso}
You can read more about using URL callbacks, including a full list of available values, in the [callbacks guide](https://help.adjust.com/en/article/callbacks).
:::

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: addCallbackParameter
:end-before: methodEnd
```

## Add partner parameters

You can send extra information to your network partners by adding [partner parameters](https://help.adjust.com/en/article/advanced-event-setup#receive-custom-data-with-partner-parameters).

Adjust sends partner parameters to [external partners](https://help.adjust.com/en/article/integrated-partners) you have set up. This information is useful for more granular analysis and retargeting purposes. Adjust's servers forward these parameters once you have set them up and enabled them for a partner.

:::{note}
Partner parameters don't appear in raw data by default. You can add the `{partner_parameters}` placeholder to receive them as a single string.
:::

Add partner parameters to your event by calling the [`addPartnerParameter` method](unity-AdjustAdRevenue-addPartnerParameter-invocation) with **string** key-value arguments. You can add multiple parameters by calling this method multiple times.

```{include} /unity/fragments/AdjustAdRevenue.md
:start-after: addPartnerParameter
:end-before: methodEnd
```

## Example

This example demonstrates how to set up and record an ad revenue object with the following properties:

* AppLovin MAX as the revenue source
* 1 Euro as the revenue amount
* 10 ad impressions
* *`"network1"`* as the ad revenue network
* *`"unit1"`* as the ad revenue unit
* *`"banner"`* as the ad revenue placement
* A callback parameter: `"key1" = "value1"`
* A partner parameter: `"key2" = "value2"`

::::{tab-set}
:::{tab-item} C#
:sync: cs

```{code-block} cs
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue(AdjustConfig.AdjustAdRevenueSourceAppLovinMAX);
adjustAdRevenue.setRevenue(1.00, "EUR");
adjustAdRevenue.setAdImpressionsCount(10);
adjustAdRevenue.setAdRevenueNetwork("network1");
adjustAdRevenue.setAdRevenueUnit("unit1");
adjustAdRevenue.setAdRevenuePlacement("banner");
adjustAdRevenue.addCallbackParameter("key1", "value1");
adjustAdRevenue.addPartnerParameter("key2", "value2");
Adjust.trackAdRevenue(adjustAdRevenue);
```
:::
::::
