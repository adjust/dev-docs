---
orphan: true
nosearch: true
---

% appTrackingAuthorizationStatus

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let authorizationStatus = Adjust.appTrackingAuthorizationStatus();
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
int authorizationStatus = [Adjust appTrackingAuthorizationStatus];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var authorizationStatus = Adjust.appTrackingAuthorizationStatus();
```
:::
::::

% methodEnd

% appWillOpenUrl

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
Adjust.appWillOpenUrl(url)
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
[Adjust appWillOpenUrl:url];
```
:::
::::

% methodEnd

% checkForNewAttStatus

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.checkForNewAttStatus();
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust checkForNewAttStatus];
```
:::
::::

% methodEnd

% gdprForgetMe

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.gdprForgetMe();
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust gdprForgetMe];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.gdprForgetMe();
```
:::
::::

% methodEnd

% isEnabled

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.isEnabled();
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust isEnabled];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.isEnabled();
```
::::

% methodEnd

% requestTrackingAuthorizationWithCompletionHandler

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.requestTrackingAuthorization() { status in
   switch status {
   case 0:
      // ATTrackingManagerAuthorizationStatusNotDetermined case
      break
   case 1:
      // ATTrackingManagerAuthorizationStatusRestricted case
      break
   case 2:
      // ATTrackingManagerAuthorizationStatusDenied case
      break
   case 3:
      // ATTrackingManagerAuthorizationStatusAuthorized case
      break
   default:
      break
   }
}
```

:::

:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust requestTrackingAuthorizationWithCompletionHandler:^(NSUInteger status) {
   switch (status) {
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
}];
```

:::
::::

% methodEnd

% setDeviceToken

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:emphasize-lines: 2

func application(_ app: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    Adjust.deviceToken = deviceToken
}
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 2

- (void)application:(UIApplication *)app didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    [Adjust setDeviceToken:deviceToken];
}
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
Adjust.setDeviceToken(deviceToken);
```
:::
::::

% methodEnd

% setEnabled

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.setEnabled(false);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust setEnabled:NO];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.setEnabled(false);
```
:::
::::

% methodEnd

% setOfflineMode

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.setOfflineMode(true);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust setOfflineMode:YES];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.setOfflineMode(true);
```
:::
::::

% methodEnd

% trackAdRevenue

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adRevenue = ADJAdRevenue(source: source);
Adjust.trackAdRevenue(source, payload: payload);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
//...
[Adjust trackAdRevenue:source payload:payload];
```
:::
::::

% methodEnd

% trackSubscription

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
let subscription = ADJSubscription(
    price: price,
    currency: currency,
    transactionId: transactionId,
    andReceipt: receipt)
 
subscription.setTransactionDate(transactionDate)
subscription.setSalesRegion(salesRegion)

// Add callback parameters

subscription.addCallbackParameter("key1", value: "value1")
subscription.addCallbackParameter("key2", value: "value2")

// Add partner parameters

subscription.addPartnerParameter("key1", value: "value1")
subscription.addCallbackParameter("key2", value: "value2")

Adjust.trackSubscription(subscription)
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
ADJSubscription *subscription = [[ADJSubscription alloc] initWithPrice:price
                                                              currency:currency
                                                         transactionId:transactionId
                                                            andReceipt:receipt];
[subscription setTransactionDate:transactionDate]; 
[subscription setSalesRegion:salesRegion];
// Add callback parameters
[subscription addCallbackParameter:@"key1" value:@"value1"];
[subscription addCallbackParameter:@"key2" value:@"value2"];

// Add partner parameters
[subscription addPartnerParameter:@"key1" value:@"value1"];
[subscription addPartnerParameter:@"key2" value:@"value2"];

[Adjust trackSubscription:subscription];
```
:::
::::

% methodEnd

% trackEvent

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let event = ADJEvent(eventToken: "abc123")
Adjust.trackEvent(event)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJEvent *event = [ADJEvent eventWithEventToken:@"abc123"];
[Adjust trackEvent:event];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustEvent = new AdjustEvent('abc123');
Adjust.trackEvent(adjustEvent);
```
:::
::::

% methodEnd

% trackThirdPartySharing true

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(true)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:@YES];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustThirdPartySharing = new AdjustThirdPartySharing(true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

% trackThirdPartySharing false

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(false)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:@NO];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustThirdPartySharing = new AdjustThirdPartySharing(false);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

% trackThirdPartySharing addGranularOption

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(nil)
adjustThirdPartySharing.addGranularOption("PartnerA", key: "foo", value: "bar")
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:nil];
[adjustThirdPartySharing addGranularOption:@"PartnerA" key:@"foo" value:@"bar"];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustThirdPartySharing = new AdjustThirdPartySharing(null);
adjustThirdPartySharing.addGranularOption('PartnerA', 'foo', 'bar');
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd
