# AdjustEvent class

This class contains information about events triggered in your application. You can send this information to Adjust's servers by passing an `AdjustEvent` object to the [`trackEvent` method](unity-trackEvent-invocation).

% classMethod AdjustEvent

:::{function} AdjustEvent (eventToken)
:noindex:

Creates an event object initialized with an Adjust event token

```{code-block} cs
:name: unity-AdjustEvent-invocation

public AdjustEvent(string eventToken)
```

:param eventToken: A 6 character Adjust event token
:type eventToken: string

```{include} /unity/fragments/Adjust.md
:start-after: trackEvent
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setRevenue

:::{function} setRevenue (amount, currency)
:noindex:

Sets the revenue and currency associated with the event

```{code-block} cs
:name: unity-AdjustEvent-setRevenue-invocation

public void setRevenue(double amount, string currency)
```

:param amount: The amount of currency units associated with the event
:type amount: double
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: string

```{include} /unity/fragments/AdjustEvent.md
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

```{code-block} cs
:name: unity-AdjustEvent-addCallbackParameter-invocation

public void addCallbackParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

```{include} /unity/fragments/AdjustEvent.md
:start-after: addCallbackParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addPartnerParameter

:::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the event object. You can add multiple parameters by calling this method multiple times.

```{code-block} cs
:name: unity-AdjustEvent-addPartnerParameter-invocation

public void addPartnerParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

```{include} /unity/fragments/AdjustEvent.md
:start-after: addPartnerParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setTransactionId

:::{function} setTransactionId (transactionId)
:noindex:

Sets a deduplication ID on your event to avoid recording duplicates. The SDK stores the last ten identifiers and skips revenue events with duplicate IDs.

```{code-block} cs
:name: unity-setTransactionId-invocation

public void setTransactionId(string transactionId)
```

:param transactionId: A unique identifier used to deduplicate events
:type transactionId: string

```{include} /unity/fragments/AdjustEvent.md
:start-after: setTransactionId
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setCallbackId

:::{function} setCallbackId (callbackId)
:noindex:

Sets a custom identifier for your event object. Adjust's servers can report on this identifier in event callbacks.

```{code-block} cs
:name: unity-setCallbackId-invocation

public void setCallbackId(string callbackId)
```

:param callbackId: A custom identifier for your event object
:type callbackId: string

```{include} /unity/fragments/AdjustEvent.md
:start-after: setCallbackId
:end-before: methodEnd
```

:::

% classMethodEnd
