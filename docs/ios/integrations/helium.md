# Helium by Chartboost SDK integration

:::{note}
If you have any questions about ad revenue measurement with Helium by Chartboost, please contact your dedicated Technical Account Manager or send an email to support@adjust.com.
:::

If you want to measure ad revenue with the Helium by Chartboost SDK, you can use SDK-to-SDK integration to pass this information to Adjust's servers.

## Before you begin

__Requirement__

- Integrate the Adjust iOS SDK v4.29.7 or later in your app.

## Examples

:::{tab-set-code}

```Objective-C

[NSNotificationCenter.defaultCenter addObserverForName:kHeliumDidReceiveILRDNotification
                                                object:nil
                                                 queue:nil
                                            usingBlock:^(NSNotification * _Nonnull notification) {
    // extract the ILRD payload
    HeliumImpressionData *ilrd = (HeliumImpressionData *)notification.object;
    NSDictionary *json = ilrd.jsonData;
    // mandatory fields
    NSNumber *ad_revenue = [json objectForKey:@"ad_revenue"];
    NSString *currency_type = [json objectForKey:@"currency_type"];
    ADJAdRevenue *adjustAdRevenue = [[ADJAdRevenue alloc] initWithSource:ADJAdRevenueSourceHeliumChartboost];
    [adjustAdRevenue setRevenue:[ad_revenue doubleValue] currency:currency_type];
    // optional fields
    NSString *network_name = [json objectForKey:@"network_name"];     // Helium demand network name
    NSString *placement_name = [json objectForKey:@"placement_name"]; // Helium placement name
    NSString *line_item_name = [json objectForKey:@"line_item_name"]; // Helium line item name
    [adjustAdRevenue setAdRevenueNetwork:network_name];
    [adjustAdRevenue setAdRevenueUnit:placement_name];
    [adjustAdRevenue setAdRevenuePlacement:line_item_name];
    // track Adjust ad revenue
    [Adjust trackAdRevenue:adjustAdRevenue];
}
```
:::