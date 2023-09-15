# ironSource SDK integration

If you want to measure ad revenue with the ironSource SDK, you can use the SDK-to-SDK integration to pass this information to Adjust's servers. 

:::{note}
If you have any questions about ad revenue measurement with ironSource, please contact your dedicated account manager or send an email to support@adjust.com.
:::

## Before you begin

__Requirement__

- Integrate the Adjust iOS SDK v4.29.0 or later in your app.

## Examples

:::{tab-set-code}

```Objective-C
- (void)impressionDataDidSucceed:(ISImpressionData *)impressionData {
    ADJAdRevenue *adjustAdRevenue = [[ADJAdRevenue alloc] initWithSource:ADJAdRevenueSourceIronSource];
    [adjustAdRevenue setRevenue:impressionData.revenue currency:@"USD"];
    // optional fields
    [adjustAdRevenue setAdRevenueNetwork:impressionData.ad_network];
    [adjustAdRevenue setAdRevenueUnit:impressionData.ad_unit];
    [adjustAdRevenue setAdRevenuePlacement:impressionData.placement];
    // track Adjust ad revenue
    [Adjust trackAdRevenue:adjustAdRevenue];
}
```
:::