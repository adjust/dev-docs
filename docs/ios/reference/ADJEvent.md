# ADJEvent class

This class contains information about events triggered in your application. You can send this information to Adjust's servers by passing an `ADJEvent` object to the [`trackEvent` method](#ios-trackevent-invocation).

% Class method eventWithEventToken

::::{function} eventWithEventToken (eventToken)
:noindex:

Creates an event object initialized with an Adjust event token

{#ios-eventwitheventtoken-invocation}
```objective-c
+ (nullable ADJEvent *)eventWithEventToken:(nonnull NSString *)eventToken;
```

:param eventToken: A 6 character Adjust event token
:type eventToken: NSString

:::{include} /ios/reference/Adjust/recording.md
:start-after: trackEvent snippet
:end-before: Snippet end
:::

::::

% Class method end

% Class method setRevenue

::::{function} setRevenue (amount, currency)
:noindex:

Sets the revenue and currency associated with the event

{#ios-adjevent-setrevenue-invocation}
```objective-c
- (void)setRevenue:(double)amount currency:(nonnull NSString *)currency;
```

:param amount: The amount of currency units associated with the event
:type amount: double
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: NSString

% setRevenue snippet

:::{tab-set-code}

```swift
let event = ADJEvent(eventToken: "abc123")
event?.setRevenue(0.01, currency: "EUR")
Adjust.trackEvent(event)
```

```objective-c
ADJEvent *event = [ADJEvent eventWithEventToken:@"abc123"];
[event setRevenue:0.01 currency:@"EUR"];
[Adjust trackEvent:event];
```

```javascript
var adjustEvent = new AdjustEvent(eventToken);
adjustEvent.setRevenue(0.01, 'EUR');
Adjust.trackEvent(adjustEvent);
```
:::

% Snippet end

::::

% Class method end

% Class method addCallbackParameter

::::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the event object. You can add multiple parameters by calling this method multiple times.

Event callback parameters override session callback parameters that have the same key.

{#ios-adjevent-addcallbackparameter-invocation}
```objective-c
- (void)addCallbackParameter:(nonnull NSString *)key value:(nonnull NSString *)value;
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

% addCallbackParameter snippet

:::{tab-set-code}

```swift
let event = ADJEvent(eventToken: "abc123")
event?.addCallbackParameter("key", value: "value")
event?.addCallbackParameter("foo", value: "bar")
Adjust.trackEvent(event)
```

```objective-c
ADJEvent *event = [ADJEvent eventWithEventToken:@"abc123"];
[event addCallbackParameter:@"key" value:@"value"];
[event addCallbackParameter:@"foo" value:@"bar"];
[Adjust trackEvent:event];
```

```javascript
var adjustEvent = new AdjustEvent(eventToken);
adjustEvent.addCallbackParameter('key', 'value');
adjustEvent.addCallbackParameter('foo', 'bar');
Adjust.trackEvent(adjustEvent);
```
:::

% Snippet end

::::

% Class method end

% Class method addPartnerParameter

::::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the event object. You can add multiple parameters by calling this method multiple times.

{#ios-adjevent-addpartnerparameter-invocation}
```objective-c
- (void)addPartnerParameter:(nonnull NSString *)key value:(nonnull NSString *)value;
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

% addPartnerParameter snippet

:::{tab-set-code}

```swift
let event = ADJEvent(eventToken: "abc123")
event?.addPartnerParameter("key", value: "value")
event?.addPartnerParameter("foo", value: "bar")
Adjust.trackEvent(event)
```

```objective-c
ADJEvent *event = [ADJEvent eventWithEventToken:@"abc123"];
[event addPartnerParameter:@"key" value:@"value"];
[event addPartnerParameter:@"foo" value:@"bar"];
[Adjust trackEvent:event];
```

```javascript
var adjustEvent = new AdjustEvent(eventToken);
adjustEvent.addPartnerParameter('key', 'value');
adjustEvent.addPartnerParameter('foo', 'bar');
Adjust.trackEvent(adjustEvent);
```
:::

% Snippet end

::::

% Class method end

% Class method setTransactionId

::::{function} setTransactionId (transactionId)
:noindex:

Sets a deduplication ID on your event to avoid recording duplicates. The SDK stores the last ten identifiers and skips revenue events with duplicate IDs.

{#ios-settransactionid-invocation}
```objective-c
- (void)setTransactionId:(nonnull NSString *)transactionId;
```

:param transactionId: A unique identifier used to deduplicate events
:type transactionId: NSString

% setTransactionId snippet

:::{tab-set-code}

```swift
let event = ADJEvent(eventToken: "abc123")
event?.setTransactionId(eventIdentifier)
Adjust.trackEvent(event)
```

```objective-c
ADJEvent *event = [ADJEvent eventWithEventToken:@"abc123"];
[event setTransactionId:eventIdentifier];
[Adjust trackEvent:event];
```

```javascript
var adjustEvent = new AdjustEvent(eventToken);
adjustEvent.setTransactionId(eventIdentifier);
Adjust.trackEvent(adjustEvent);
```
:::

% Snippet end

::::

% Class method end

% Class method setCallbackId

::::{function} setCallbackId (callbackId)
:noindex:

Sets a custom identifier for your event object. Adjust's servers can report on this identifier in event callbacks.

{#ios-setcallbackid-invocation}
```objective-c
- (void)setCallbackId:(nonnull NSString *)callbackId;
```

:param callbackId: A custom identifier for your event object
:type callbackId: NSString

% setCallbackId snippet

:::{tab-set-code}

```swift
let event = ADJEvent(eventToken: "abc123")
event?.setCallbackId("Your-Custom-ID")
Adjust.trackEvent(event)
```

```objective-c
ADJEvent *event = [ADJEvent eventWithEventToken:@"abc123"];
[event setCallbackId:@"Your-Custom-ID"];
[Adjust trackEvent:event];
```

```javascript
var adjustEvent = new AdjustEvent('abc123')
adjustEvent.setCallbackId('Your-Custom-ID')
Adjust.trackEvent(adjustEvent)
```
:::

% Snippet end

::::

% Class method end
