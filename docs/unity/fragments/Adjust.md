---
orphan: true
nosearch: true
---

% checkForNewAttStatus

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.checkForNewAttStatus();
```
:::
::::

% methodEnd

% getAppTrackingAuthorizationStatus

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.getAppTrackingAuthorizationStatus();
```
:::
::::

% methodEnd

% requestTrackingAuthorizationWithCompletionHandler

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.requestTrackingAuthorizationWithCompletionHandler((status) =>
{
    switch (status)
    {
        case 0:
            // ATTrackingManagerAuthorizationStatusNotDetermined case
            break;
        case 1:
            // ATTrackingManagerAuthorizationStatusRestricted case
            break;
        case 2:
            // ATTrackingManagerAuthorizationStatusDenied case
            break;
        case 3:
            // ATTrackingManagerAuthorizationStatusAuthorized case
            break;
    }
});
```
:::
::::

% methodEnd

% trackEvent

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustEvent adjustEvent = new AdjustEvent("abc123");
//...
Adjust.trackEvent(adjustEvent);
```
:::
::::

% methodEnd

% trackAdRevenue

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```
:::
::::

% methodEnd

% trackPlayStoreSubscription

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustPlayStoreSubscription subscription = new AdjustPlayStoreSubscription(
    price,
    currency,
    sku,
    orderId,
    signature,
    purchaseToken);
subscription.setPurchaseTime(purchaseTime);
subscription.addCallbackParameter("key1", "value1");
subscription.addCallbackParameter("key2", "value2");
subscription.addPartnerParameter("key1", "value1");
subscription.addPartnerParameter("key2", "value2");

Adjust.trackPlayStoreSubscription(subscription);
```
:::
::::

% methodEnd

% trackAppStoreSubscription

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
    price,
    currency,
    transactionId,
    receipt);
subscription.setTransactionDate(transactionDate);
subscription.setSalesRegion(salesRegion);
subscription.addCallbackParameter("key1", "value1");
subscription.addCallbackParameter("key2", "value2");
subscription.addPartnerParameter("key1", "value1");
subscription.addPartnerParameter("key2", "value2");

Adjust.trackAppStoreSubscription(subscription);
```
:::
::::

% methodEnd

% addSessionCallbackParameter

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.addSessionCallbackParameter("key", "value");
```
:::
::::

% methodEnd

% removeSessionCallbackParameter

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.removeSessionCallbackParameter("key");
```
:::
::::

% methodEnd

% resetSessionCallbackParameters

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.resetSessionCallbackParameters();
```
:::
::::

% methodEnd

% addSessionPartnerParameter

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.addSessionPartnerParameter("key", "value");
```
:::
::::

% methodEnd

% removeSessionPartnerParameter

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.removeSessionPartnerParameter("key");
```
:::
::::

% methodEnd

% resetSessionPartnerParameters

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.resetSessionPartnerParameters();
```
:::
::::

% methodEnd

% sendFirstPackages

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.sendFirstPackages();
```
:::
::::

% methodEnd

% getAttribution

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
var attribution = Adjust.getAttribution();
```
:::
::::

% methodEnd

% getAdid

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
string adid = Adjust.getAdid();
```
:::
::::

% methodEnd

% getIdfa

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
string idfa = Adjust.getIdfa();
```
:::
::::

% methodEnd

% getGoogleAdId

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.getGoogleAdId((string googleAdId) => {
   //...
}};
```
:::
::::

% methodEnd

% getAmazonAdId

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
string amazonAdId = Adjust.getAmazonAdId();
```
:::
::::

% methodEnd

% disableThirdPartySharing

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.disableThirdPartySharing();
```
:::
::::

% methodEnd

% trackMeasurementConsent

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.trackMeasurementConsent(true);
```
:::
::::

% methodEnd

% gdprForgetMe

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.gdprForgetMe();
```
:::
::::

% methodEnd

% setDeviceToken

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.setDeviceToken("{YourDeviceToken}");
```
:::
::::

% methodEnd

% trackThirdPartySharing

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustThirdPartySharing adjustThirdPartySharing = new AdjustThirdPartySharing(true);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

