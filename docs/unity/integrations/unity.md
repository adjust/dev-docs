# Unity SDK integration

If you want to measure ad revenue with the Unity SDK, you can use the SDK-to-SDK integration to pass this information to Adjust's servers. 

:::{note}
If you have any questions about ad revenue measurement with Unity, please contact your dedicated account manager or send an email to support@adjust.com.
:::

## Before you begin

To use this feature, you first need to download and set up the Adjust Android SDK for your app.

__Requirements__

- Adjust Unity SDK v4.29.6 or later 

For more information, see the Unity [Mediation API](https://docs.unity.com/mediation/APIReferenceUnity.html) and [impression events](https://docs.unity.com/mediation/SDKIntegrationUnityImpressionEvents.html) documentation.

## Examples

:::{tab-set-code}

```C#
static void OnImpression(object sender, ImpressionEventArgs e)
{
    var impressionData = e.ImpressionData != null ? JsonUtility.ToJson(e.ImpressionData, true) : "null";
    Debug.Log($"Impression event from ad unit id {e.AdUnitId} : {impressionData}");
    
    // send impression data to Adjust 
    if (e.ImpressionData != null)
    {
        AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue(AdjustConfig.AdjustAdRevenueSourceUnity);
        adjustAdRevenue.setRevenue(e.ImpressionData.PublisherRevenuePerImpression, e.ImpressionData.Currency);
        // optional fields
        adjustAdRevenue.setAdRevenueNetwork(e.ImpressionData.AdSourceName);
        adjustAdRevenue.setAdRevenueUnit(e.ImpressionData.AdUnitId);
        adjustAdRevenue.setAdRevenuePlacement(e.ImpressionData.AdSourceInstance);
        // track Adjust ad revenue
        Adjust.trackAdRevenue(adjustAdRevenue);
    }    
}
```
:::