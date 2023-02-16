# ADJEvent class

This class contains information about events triggered in your application. You can send this information to Adjust's servers by passing `ADJEvent` object to the [`trackEvent` method](ios-trackEvent-invocation).

% classMethod eventWithEventToken

:::{function} eventWithEventToken (eventToken)
:noindex:

Creates an event object initialized with an Adjust event token

```{code-block} objc
:name: ios-eventWithEventToken-invocation

+ (nullable ADJEvent *)eventWithEventToken:(nonnull NSString *)eventToken;
```

:param eventToken: A 6 character Adjust event token
:type eventToken: NSString

```{include} /ios/fragments/Adjust.md
:start-after: trackEvent
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setRevenue

:::{function} setRevenue (amount, currency)
:noindex:

Sets the revenue and currency associated with the event

```{code-block} objc
:name: ios-ADJEvent-setRevenue-invocation

- (void)setRevenue:(double)amount currency:(nonnull NSString *)currency;
```

:param amount: The amount of currency units associated with the event
:type amount: double
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: NSString

```{include} /ios/fragments/ADJEvent.md
:start-after: setRevenue
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addCallbackParameter

:::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the event object. You can add multiple parameters by calling this method multiple times.

Event callback parameters override session callback parameters that have the same key.

```{code-block} objc
:name: ios-ADJEvent-addCallbackParameter-invocation

- (void)addCallbackParameter:(nonnull NSString *)key value:(nonnull NSString *)value;
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

```{include} /ios/fragments/ADJEvent.md
:start-after: addCallbackParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addPartnerParameter

:::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the event object. You can add multiple parameters by calling this method multiple times.

```{code-block} objc
:name: ios-ADJEvent-addPartnerParameter-invocation

- (void)addPartnerParameter:(nonnull NSString *)key value:(nonnull NSString *)value;
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

```{include} /ios/fragments/ADJEvent.md
:start-after: addPartnerParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setTransactionId

:::{function} setTransactionId (transactionId)
:noindex:

Sets a deduplication ID on your event to avoid recording duplicates. The SDK stores the last ten identifiers and skips revenue events with duplicate IDs.

```{code-block} objc
:name: ios-setTransactionId-invocation

- (void)setTransactionId:(nonnull NSString *)transactionId;
```

:param transactionId: A unique identifier used to deduplicate events
:type transactionId: NSString

```{include} /ios/fragments/ADJEvent.md
:start-after: setTransactionId
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setCallbackId

:::{function} setCallbackId (callbackId)
:noindex:

Sets a custom identifier for your event object. Adjust's servers can report on this identifier in event callbacks.

```{code-block} objc
:name: ios-setCallbackId-invocation

- (void)setCallbackId:(nonnull NSString *)callbackId;
```

:param callbackId: A custom identifier for your event object
:type callbackId: NSString

```{include} /ios/fragments/ADJEvent.md
:start-after: setCallbackId
:end-before: methodEnd
```

:::

% classMethodEnd
