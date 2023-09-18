# ironSource SDK integration

If you want to measure ad revenue with the ironSource SDK, you can use the SDK-to-SDK integration to pass this information to Adjust's servers. 

:::{note}
If you have any questions about ad revenue measurement with ironSource, please contact your dedicated account manager or send an email to support@adjust.com.
:::

## Before you begin

__Requirement__

- Integrate the Adjust Unity SDK v4.29.0 or later in your app.

## Examples

:::{tab-set-code}
```C#
IronSourceEvents.onImpressionDataReadyEvent += ImpressionDataReadyEvent;
private void ImpressionDataReadyEvent(IronSourceImpressionData impressionData)
{
    AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue(AdjustConfig.AdjustAdRevenueSourceIronSource);
    adjustAdRevenue.setRevenue(impressionData.revenue, "USD");
    // optional fields
    adjustAdRevenue.setAdRevenueNetwork(impressionData.adNetwork);
    adjustAdRevenue.setAdRevenueUnit(impressionData.adUnit);
    adjustAdRevenue.setAdRevenuePlacement(impressionData.placement);
    // track Adjust ad revenue
    Adjust.trackAdRevenue(adjustAdRevenue);
}
```
:::