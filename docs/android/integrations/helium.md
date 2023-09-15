# Helium by Chartboost SDK integration

:::{note}
If you have any questions about ad revenue measurement with Helium by Chartboost, please contact your dedicated Technical Account Manager or send an email to support@adjust.com.
:::

If you want to measure ad revenue with the Helium by Chartboost SDK, you can use SDK-to-SDK integration to pass this information to Adjust's servers.

## Before you begin

__Requirement__

- Integrate the Adjust Android SDK v4.29.0 or later in your app.

## Examples

:::{tab-set-code}

```Java
public void ilrdObserver (final HeliumImpressionData impData) {
    final AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue(AdjustConfig.AD_REVENUE_HELIUM_CHARTBOOST);
    // extract the ILRD payload
    final JSONObject json = impData.getIlrdInfo();
    try {
        final double adRevenue = json.getDouble("ad_revenue");
        final String currencyType = json.getString("currency_type");
        adjustAdRevenue.setRevenue(adRevenue, currencyType);
    } catch (JSONException e) {
        // error handling as either revenue or currency was not present
        return;
    }
    // optional fields
    final String networkName = json.optString("network_name");     // Helium demand network name
    final String placementName = json.optString("placement_name"); // Helium placement name
    final String lineItemName = json.optString("line_item_name");  // Helium line item name
    adjustAdRevenue.setAdRevenueNetwork(networkName);
    adjustAdRevenue.setAdRevenueUnit(placementName);
    adjustAdRevenue.setAdRevenuePlacement(lineItemName);
    // track Adjust ad revenue
    Adjust.trackAdRevenue(adjustAdRevenue);
}
```

```C#
void DidReceiveImpressionLevelRevenueData(string placement, Hashtable impressionData)
{
    var json = HeliumJSON.Serialize(impressionData);

    ParsedJsonObject parsedJsonObject = foobar.parse(json); //app developer defined function to parse Helium impressionData JSON string
    
    AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue(AdjustConfig.AdjustAdRevenueSourceHeliumChartboost);
    adjustAdRevenue.setRevenue(parsedJsonObject.ad_revenue, parsedJsonObject.currency_type);

    // optional fields
    adjustAdRevenue.setAdRevenueNetwork(parsedJsonObject.network_name);     // Helium demand network name
    adjustAdRevenue.setAdRevenueUnit(parsedJsonObject.placement_name);      // Helium placement name
    adjustAdRevenue.setAdRevenuePlacement(parsedJsonObject.line_item_name); // Helium line item name
    // track Adjust ad revenue
    Adjust.trackAdRevenue(adjustAdRevenue);
}
```
:::