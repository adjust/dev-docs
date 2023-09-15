# AppLovin MAX SDK integration

If you want to measure ad revenue with the AppLovin MAX SDK, you can use the SDK-to-SDK integration to pass this information to Adjust's servers. 

:::{note}
If you have any questions about ad revenue tracking with AppLovin MAX, please contact your dedicated Technical Account Manager or send an email to support@adjust.com.
:::

## Before you begin

__Requirements__

- Adjust Unity SDK v4.33.1 and later 

## Examples

:::{tab-set-code}

```Java
@Override
public void onAdRevenuePaid(final MaxAd ad) {
    AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue( AdjustConfig.AD_REVENUE_APPLOVIN_MAX);
    adjustAdRevenue.setRevenue(ad.getRevenue(), "USD");
    adjustAdRevenue.setAdRevenueNetwork(ad.getNetworkName());
    adjustAdRevenue.setAdRevenueUnit(ad.getAdUnitId());
    adjustAdRevenue.setAdRevenuePlacement(ad.getPlacement());

    Adjust.trackAdRevenue( adjustAdRevenue);
}
```

```C#
private void OnRewardedAdRevenuePaidEvent(string adUnitId, MaxSdkBase.AdInfo adInfo)
{
    var adRevenue = new AdjustAdRevenue(AdjustConfig.AdjustAdRevenueSourceAppLovinMAX);
    adRevenue.setRevenue(adInfo.Revenue, "USD");
    adRevenue.setAdRevenueNetwork(adInfo.NetworkName);
    adRevenue.setAdRevenueUnit(adInfo.AdUnitIdentifier);
    adRevenue.setAdRevenuePlacement(adInfo.Placement);

    Adjust.trackAdRevenue(adRevenue);
}
```
:::

To see how this integration works in context, check out AppLovin's [example Unity application](https://github.com/AppLovin/AppLovin-MAX-Unity-Plugin/blob/master/DemoApp/Assets/Scripts/HomeScreen.cs#L504-L514).