# AdjustEvent class

This class contains information about events triggered in your application. You can send this information to Adjust's servers by passing an `AdjustEvent` object to the [`trackEvent` method](#react-native-trackevent-invocation).

% Class method AdjustEvent

::::{function} AdjustEvent (eventToken)
:noindex:

Creates an event object initialized with an Adjust event token.

{#react-native-adjustevent-invocation}

```ts
export class AdjustEvent {
   constructor(eventToken: string);
   //...
}
```

:param eventToken: A 6 character Adjust event token
:type eventToken: string

:::{include} /react-native/reference/Adjust/recording.md
:start-after: trackEvent snippet
:end-before: Snippet end
:::

::::

% Class method end

% Class method setRevenue

::::{function} setRevenue (amount, currency)
:noindex:

Sets the revenue and currency associated with the event

{#react-native-adjustevent-setrevenue-invocation}

```ts
public setRevenue(revenue: number, currency: string): void
```

:param amount: The amount of currency units associated with the event
:type amount: number
:param currency: The three character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: string

% setRevenue snippet

:::{tab-set-code}

{emphasize-lines="3"}

```js
var adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.setRevenue(0.01, "EUR");
//...
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

{#react-native-adjustevent-addcallbackparameter-invocation}

```ts
public addCallbackParameter(key: string, value: string): void
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addCallbackParameter snippet

:::{tab-set-code}

{emphasize-lines="3"}

```js
var adjustEvent = new AdjustEvent("abc123");
//..
adjustEvent.addCallbackParameter("key", "value");
//..
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

Event partner parameters override session partner parameters that have the same key.

{#react-native-adjustevent-addpartnerparameter-invocation}

```ts
public addPartnerParameter(key: string, value: string): void
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addPartnerParameter snippet

:::{tab-set-code}

{emphasize-lines="3"}

```js
var adjustEvent = new AdjustEvent("abc123");
//..
adjustEvent.addPartnerParameter("key", "value");
//..
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

{#react-native-settransactionid-invocation}

```ts
public setTransactionId(transactionId: string): void
```

:param transactionId: A unique identifier used to deduplicate events
:type transactionId: string

% setTransactionId snippet

:::{tab-set-code}

{emphasize-lines="3"}

```js
var adjustEvent = new AdjustEvent("abc123");
//..
adjustEvent.setTransactionId("{TransactionId}");
//..
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

{#react-native-setcallbackid-invocation}

```ts
public setCallbackId(callbackId: string): void
```

:param callbackId: A custom identifier for your event object
:type callbackId: string

% setCallbackId snippet

:::{tab-set-code}

{emphasize-lines="3"}

```js
var adjustEvent = new AdjustEvent("abc123");
//..
adjustEvent.setCallbackId("your_callback_id");
//..
Adjust.trackEvent(adjustEvent);
```

:::

% Snippet end

::::

% Class method end
