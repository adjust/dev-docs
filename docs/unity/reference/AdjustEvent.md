# AdjustEvent class

This class contains information about events triggered in your application. You can send this information to Adjust's servers by passing an `AdjustEvent` object to the [`trackEvent` method](#unity-trackevent-invocation).

% Class method AdjustEvent

::::{function} AdjustEvent (eventToken)
:noindex:

Creates an event object initialized with an Adjust event token

{#unity-adjustevent-invocation}
```c#
public AdjustEvent(string eventToken)
```

:param eventToken: A 6 character Adjust event token
:type eventToken: string

:::{include} /unity/reference/Adjust/recording.md
:start-after: trackEvent snippet
:end-before: Snippet end
:::

::::

% Class method end

% Class method setRevenue

::::{function} setRevenue (amount, currency)
:noindex:

Sets the revenue and currency associated with the event

{#unity-adjustevent-setrevenue-invocation}
```c#
public void setRevenue(double amount, string currency)
```

:param amount: The amount of currency units associated with the event
:type amount: double
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: string

% setRevenue snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
AdjustEvent adjustEvent = new AdjustEvent("abc123");
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

{#unity-adjustevent-addcallbackparameter-invocation}
```c#
public void addCallbackParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addCallbackParameter snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
AdjustEvent adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.addCallbackParameter("key", "value");
//...
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

{#unity-adjustevent-addpartnerparameter-invocation}
```c#
public void addPartnerParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addPartnerParameter snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
AdjustEvent adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.addPartnerParameter("key", "value");
//...
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

{#unity-settransactionid-invocation}
```c#
public void setTransactionId(string transactionId)
```

:param transactionId: A unique identifier used to deduplicate events
:type transactionId: string

% setTransactionId snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
AdjustEvent adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.setTransactionId("transactionId");
//...
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

{#unity-setcallbackid-invocation}
```c#
public void setCallbackId(string callbackId)
```

:param callbackId: A custom identifier for your event object
:type callbackId: string

% setCallbackId snippet

:::{tab-set-code}

{emphasize-lines="3"}
```c#
AdjustEvent adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.setCallbackId("{your_callback_id}");
//...
Adjust.trackEvent(adjustEvent);
```
:::

% Snippet end

::::

% Class method end
