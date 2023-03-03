# Recording methods

% Class method trackEvent

::::{function} trackEvent (event)
:noindex:

Record event information using an `ADJEvent` object and an [Adjust event token](hc:/basic-event-setup#create-an-event-token).

{#ios-trackevent-invocation}
```objective-c
+ (void) trackEvent: (nullable ADJEvent *) event
```

:param event: An event object containing information you want to record
:type event: [*ADJEvent*](/ios/reference/ADJEvent.md)

% trackEvent snippet

:::{tab-set-code}

```swift
let event = ADJEvent(eventToken: "abc123")
Adjust.trackEvent(event)
```

```objective-c
ADJEvent *event = [ADJEvent eventWithEventToken:@"abc123"];
[Adjust trackEvent:event];
```

```javascript
var adjustEvent = new AdjustEvent('abc123');
Adjust.trackEvent(adjustEvent);
```

:::

% Snippet end

::::

% Class method end

% Class method addSessionCallbackParameter

::::{function} addSessionCallbackParameter (key, value)
:noindex:

Adds callback parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

{#ios-addsessioncallbackparameter-invocation}
```objective-c
+ (void) addSessionCallbackParameter: (nonnull NSString *) key
                               value: (nonnull NSString *) value
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

% addSessionCallbackParameter snippet

:::{tab-set-code}

```swift
Adjust.addSessionCallbackParameter("foo", value: "bar")
```

```objective-c
[Adjust addSessionCallbackParameter:@"foo" value:@"bar"];
```

```javascript
Adjust.addSessionCallbackParameter('foo', 'bar');
```

:::

% Snippet end

::::

% Class method end

% Class method removeSessionCallbackParameter

::::{function} removeSessionCallbackParameter (key)
:noindex:

Removes a callback parameter

{#ios-removesessioncallbackparameter-invocation}
```objective-c
+ (void) removeSessionCallbackParameter: (nonnull NSString *) key
```

:param key: The data key
:type key: NSString

% removeSessionCallbackParameter snippet

:::{tab-set-code}

```swift
Adjust.removeSessionCallbackParameter("foo")
```

```objective-c
[Adjust removeSessionCallbackParameter:@"foo"];
```

```javascript
Adjust.removeSessionCallbackParameter('foo');
```
:::

% Snippet end

::::

% Class method end

% Class method resetSessionCallbackParameters

::::{function} resetSessionCallbackParameters
:noindex:

Removes all callback parameters

{#ios-resetsessioncallbackparameters-invocation}
```objective-c
+ (void) resetSessionCallbackParameters
```

% resetSessionCallbackParameters snippet

:::{tab-set-code}

```swift
Adjust.resetSessionCallbackParameters()
```

```objective-c
[Adjust resetSessionCallbackParameters];
```

```javascript
Adjust.resetSessionCallbackParameters();
```
:::

% Snippet end

::::

% Class method end

% Class method addSessionPartnerParameter

::::{function} addSessionPartnerParameter (key, value)
:noindex:

Adds partner parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

{#ios-addsessionpartnerparameter-invocation}
```objective-c
+ (void) addSessionPartnerParameter: (nonnull NSString *) key
                               value: (nonnull NSString *) value
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

% addSessionPartnerParameter snippet

:::{tab-set-code}

```swift
Adjust.addSessionPartnerParameter("foo", value: "bar")
```

```objective-c
[Adjust addSessionPartnerParameter:@"foo" value:@"bar"];
```

```javascript
Adjust.addSessionPartnerParameter('foo', 'bar');
```

:::

% Snippet end

::::

% Class method end

% Class method removeSessionPartnerParameter

::::{function} removeSessionPartnerParameter (key)
:noindex:

Removes a partner parameter

{#ios-removesessionpartnerparameter-invocation}
```objective-c
+ (void) removeSessionPartnerParameter: (nonnull NSString *) key
```

:param key: The data key
:type key: NSString

% removeSessionPartnerParameter snippet

:::{tab-set-code}

```swift
Adjust.removeSessionPartnerParameter("foo")
```

```objective-c
[Adjust removeSessionPartnerParameter:@"foo"];
```

```javascript
Adjust.removeSessionPartnerParameter('foo');
```

:::

% Snippet end

::::

% Class method end

% Class method resetSessionPartnerParameters

::::{function} resetSessionPartnerParameters
:noindex:

Resets all partner parameters

{#ios-resetsessionpartnerparameters-invocation}
```objective-c
+ (void) resetSessionPartnerParameters
```

% resetSessionPartnerParameters snippet

:::{tab-set-code}

```swift
Adjust.resetSessionPartnerParameters()
```

```objective-c
[Adjust resetSessionPartnerParameters];
```

```javascript
Adjust.resetSessionPartnerParameters();
```

:::

% Snippet end

::::

% Class method end

% Class method appWillOpenUrl

::::{function} appWillOpenUrl (url)
:noindex:

Instructs the Adjust SDK to search for attribution information in a URL. If the SDK finds valid information, it sends this information to Adjust's servers.

{#ios-appwillopenurl-invocation}
```objective-c
+ (void) appWillOpenUrl: (nonnull NSURL *) url
```

:param url: A URL containing deep link information
:type url: NSURL

% appWillOpenUrl snippet

:::{tab-set-code}

```swift
Adjust.appWillOpenUrl(url)
```

```objective-c
[Adjust appWillOpenUrl:url];
```

:::

% Snippet end

::::

% Class method end

% Class method attribution

::::{function} attribution
:noindex:

Fetches attribution data from the device

{#ios-attribution-invocation}
```objective-c
+ (ADJAttribution *) attribution
```

:returns: An attribution object containing attribution data associated with the device
:rtype: [`ADJAttribution` object](/ios/reference/ADJAttribution.md)

% attribution snippet

:::{tab-set-code}

```swift
let attribution = Adjust.attribution()
```

```objective-c
ADJAttribution *attribution = [Adjust attribution];
```

```javascript
var attribution = Adjust.getAttribution();
```

:::

% Snippet end

::::

% Class method end

% Class method trackSubscription

::::{function} trackSubscription(subscription)
:noindex:

Record the details of an ADJSubscription object

{#ios-tracksubscription-invocation}
```objective-c
+ (void)trackSubscription:(nonnull ADJSubscription *)subscription;
```

:param subscription: The subscription object containing the purchase details
:type subscription: [ADJSubscription object](/ios/reference/ADJSubscription.md)

% trackSubscription snippet

:::{tab-set-code}

```swift
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

```objective-c
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

% Snippet end

::::

% Class method end

% Class method trackAdRevenue

::::{function} trackAdRevenue(adRevenue)
:noindex:

Record the details of an ADJAdRevenue object

{#ios-trackadrevenue-invocation}
```objective-c
+ (void)trackAdRevenue:(nonnull ADJAdRevenue *)adRevenue;
```

:param adRevenue: The ad revenue object containing the revenue details
:type adRevenue: [ADJAdRevenue object](/ios/reference/ADJAdRevenue.md)

% trackAdRevenue snippet

:::{tab-set-code}

```swift
let adRevenue = ADJAdRevenue(source: source);
Adjust.trackAdRevenue(adRevenue);
```

```objective-c
ADJAdRevenue *adRevenue = [[ADJAdRevenue alloc] initWithSource:source];
//...
[Adjust trackAdRevenue:adRevenue];
```

:::

% Snippet end

::::

% Class method end
