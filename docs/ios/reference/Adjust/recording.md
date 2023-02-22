# Recording methods

% Class method trackEvent

:::::{function} trackEvent (event)
:noindex:

Record event information using an `ADJEvent` object and an [Adjust event token](https://help.adjust.com/en/article/basic-event-setup#create-an-event-token).

```{code-block} objc
:name: ios-trackEvent-invocation

+ (void) trackEvent: (nullable ADJEvent *) event
```

:param event: An event object containing information you want to record
:type event: [*ADJEvent*](/ios/reference/ADJEvent.md)

% trackEvent snippet

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

% Snippet end

:::::

% Class method end

% Class method addSessionCallbackParameter

:::::{function} addSessionCallbackParameter (key, value)
:noindex:

Adds callback parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

```{code-block} objc
:name: ios-addSessionCallbackParameter-invocation

+ (void) addSessionCallbackParameter: (nonnull NSString *) key
                               value: (nonnull NSString *) value
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

% addSessionCallbackParameter snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.addSessionCallbackParameter("foo", value: "bar")
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust addSessionCallbackParameter:@"foo" value:@"bar"];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.addSessionCallbackParameter('foo', 'bar');
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method removeSessionCallbackParameter

:::::{function} removeSessionCallbackParameter (key)
:noindex:

Removes a callback parameter

```{code-block} objc
:name: ios-removeSessionCallbackParameter-invocation

+ (void) removeSessionCallbackParameter: (nonnull NSString *) key
```

:param key: The data key
:type key: NSString

% removeSessionCallbackParameter snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.removeSessionCallbackParameter("foo")
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust removeSessionCallbackParameter:@"foo"];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.removeSessionCallbackParameter('foo');
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method resetSessionCallbackParameters

:::::{function} resetSessionCallbackParameters
:noindex:

Removes all callback parameters

```{code-block} objc
:name: ios-resetSessionCallbackParameters-invocation

+ (void) resetSessionCallbackParameters
```

% resetSessionCallbackParameters snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.resetSessionCallbackParameters()
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust resetSessionCallbackParameters];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.resetSessionCallbackParameters();
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method addSessionPartnerParameter

:::::{function} addSessionPartnerParameter (key, value)
:noindex:

Adds partner parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

```{code-block} objc
:name: ios-addSessionPartnerParameter-invocation

+ (void) addSessionPartnerParameter: (nonnull NSString *) key
                               value: (nonnull NSString *) value
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

% addSessionPartnerParameter snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.addSessionPartnerParameter("foo", value: "bar")
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust addSessionPartnerParameter:@"foo" value:@"bar"];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.addSessionPartnerParameter('foo', 'bar');
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method removeSessionPartnerParameter

:::::{function} removeSessionPartnerParameter (key)
:noindex:

Removes a partner parameter

```{code-block} objc
:name: ios-removeSessionPartnerParameter-invocation

+ (void) removeSessionPartnerParameter: (nonnull NSString *) key
```

:param key: The data key
:type key: NSString

% removeSessionPartnerParameter snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.removeSessionPartnerParameter("foo")
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust removeSessionPartnerParameter:@"foo"];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.removeSessionPartnerParameter('foo');
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method resetSessionPartnerParameters

:::::{function} resetSessionPartnerParameters
:noindex:

Resets all partner parameters

```{code-block} objc
:name: ios-resetSessionPartnerParameters-invocation

+ (void) resetSessionPartnerParameters
```

% resetSessionPartnerParameters snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.resetSessionPartnerParameters()
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust resetSessionPartnerParameters];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.resetSessionPartnerParameters();
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method appWillOpenUrl

:::::{function} appWillOpenUrl (url)
:noindex:

Instructs the Adjust SDK to search for attribution information in a URL. If the SDK finds valid information, it sends this information to Adjust's servers.

```{code-block} objc
:name: ios-appwillopenurl-invocation

+ (void) appWillOpenUrl: (nonnull NSURL *) url
```

:param url: A URL containing deep link information
:type url: NSURL

% appWillOpenUrl snippet

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

% Snippet end

:::::

% Class method end

% Class method attribution

:::::{function} attribution
:noindex:

Fetches attribution data from the device

```{code-block} objc
:name: ios-attribution-invocation

+ (ADJAttribution *) attribution
```

:returns: An attribution object containing attribution data associated with the device
:rtype: [`ADJAttribution` object](/ios/reference/ADJAttribution.md)

% attribution snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let attribution = Adjust.attribution()
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJAttribution *attribution = [Adjust attribution];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var attribution = Adjust.getAttribution();
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method trackSubscription

:::::{function} trackSubscription(subscription)
:noindex:

Record the details of an ADJSubscription object

```{code-block} objc
:name: ios-trackSubscription-invocation

+ (void)trackSubscription:(nonnull ADJSubscription *)subscription;
```

:param subscription: The subscription object containing the purchase details
:type subscription: [ADJSubscription object](/ios/reference/ADJSubscription.md)

% trackSubscription snippet

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

% Snippet end

:::::

% Class method end

% Class method trackAdRevenue

:::::{function} trackAdRevenue(adRevenue)
:noindex:

Record the details of an ADJAdRevenue object

```{code-block} objc
:name: ios-trackAdRevenue-invocation

+ (void)trackAdRevenue:(nonnull ADJAdRevenue *)adRevenue;
```

:param adRevenue: The ad revenue object containing the revenue details
:type adRevenue: [ADJAdRevenue object](/ios/reference/ADJAdRevenue.md)

% trackAdRevenue snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adRevenue = ADJAdRevenue(source: source);
Adjust.trackAdRevenue(adRevenue);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
//...
[Adjust trackAdRevenue:adRevenue];
```
:::
::::

% Snippet end

:::::

% Class method end
