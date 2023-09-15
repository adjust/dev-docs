# AppLovin MAX SDK integration

If you want to measure ad revenue with the AppLovin MAX SDK, you can use the SDK-to-SDK integration to pass this information to Adjust's servers. 

:::{note}
If you have any questions about ad revenue tracking with AppLovin MAX, please contact your dedicated Technical Account Manager or send an email to support@adjust.com.
:::

## Before you begin

__Requirements__

- Adjust iOS SDK v4.29.2 and later 

## Examples

:::{tab-set-code}

```Objective-C
- (void)didPayRevenueForAd:(MAAd *)ad {
    ADJAdRevenue *adjustAdRevenue = [[ADJAdRevenue alloc] initWithSource: ADJAdRevenueSourceAppLovinMAX];
    [adjustAdRevenue setRevenue: ad.revenue currency: @"USD"];
    [adjustAdRevenue setAdRevenueNetwork: ad.networkName];
    [adjustAdRevenue setAdRevenueUnit: ad.adUnitIdentifier];
    [adjustAdRevenue setAdRevenuePlacement: ad.placement];
    //...
    [Adjust trackAdRevenue: adjustAdRevenue];
}
```
:::

To see how this integration works in context, check out AppLovin's [example iOS application](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/blob/master/AppLovin%20MAX%20Demo%20App%20-%20ObjC/AppLovin%20MAX%20Demo%20App%20-%20ObjC/MAX/Rewarded/ALMAXRewardedAdViewController.m#L116-L127).