# AdMob SDK integration

If you want to measure ad revenue with the AdMob SDK, you can use the SDK-to-SDK integration to pass this information to Adjust's servers. 

:::{note}
If you have any questions about ad revenue tracking with AdMob, please contact your dedicated account manager or send an email to support@adjust.com.
:::

## Before you begin

To use this feature, you need to first reach out to your Google representative and request access. Once that's done, you can proceed with setup in Adjust. 

__Requirements__

- Android SDK v4.28.0 and later 

## Examples

:::{tab-set-code}

```Java
AdRequest adRequest = new AdRequest.Builder().build();
 
RewardedAd.load(this, "ad unit ID",
adRequest, new RewardedAdLoadCallback(){
   @Override
   public void onAdLoaded(@NonNull RewardedAd ad) {
   rewardedAd = ad;
   // Set paid event listener
   rewardedAd.setOnPaidEventListener(new OnPaidEventListener() {
      @Override
      public void onPaidEvent(AdValue adValue) {
         // for more information, please check AdMob official docs at:
         // https://developers.google.com/admob/android/impression-level-ad-revenue
         AdapterResponseInfo loadedAdapterResponseInfo = rewardedAd.getResponseInfo().getLoadedAdapterResponseInfo();
         
         // send ad revenue info to Adjust
         AdjustAdRevenue adRevenue = new AdjustAdRevenue(AdjustConfig.AD_REVENUE_ADMOB);
         adRevenue.setRevenue(adValue.getValueMicros() / 1000000, adValue.getCurrencyCode());
         adRevenue.setAdRevenueNetwork(loadedAdapterResponseInfo.getAdSourceName());
         Adjust.trackAdRevenue(adRevenue);
         }
      });
   }
});
```

```C#
this.rewardedAd.OnPaidEvent += this.HandleAdPaidEvent;
public void HandleAdPaidEvent(object sender, AdValueEventArgs args)
{
    // for more information, please check AdMob official docs at:
    // https://developers.google.com/admob/unity/impression-level-ad-revenue
    AdValue adValue = args.AdValue;
    AdapterResponseInfo loadedAdapterResponseInfo = rewardedAd.GetResponseInfo().GetLoadedAdapterResponseInfo();

    // send ad revenue info to Adjust
    AdjustAdRevenue adRevenue = new AdjustAdRevenue(AdjustConfig.AdjustAdRevenueSourceAdMob);
    adRevenue.setRevenue(adValue.Value / 1000000f, adValue.CurrencyCode);
    adRevenue.setAdRevenueNetwork(loadedAdapterResponseInfo.AdSourceName)
    Adjust.trackAdRevenue(adRevenue);
}
```

:::