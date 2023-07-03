# AdjustEvent class

This class contains information about events triggered in your application. You can send this information to Adjust's servers by passing an `AdjustEvent` object to the [`TrackEvent` method](#windows-trackevent-invocation).

% Class method AdjustEvent

::::{function} AdjustEvent(eventToken)
:noindex:

Creates an event object initialized with an Adjust event token

{#windows-adjustevent-invocation}
```c#
public AdjustEvent(string eventToken)
```

:param eventToken: A 6 character Adjust event token
:type eventToken: string

:::{include} /windows/reference/Adjust/recording.md
:start-after: TrackEvent snippet
:end-before: Snippet end
:::

::::

% Class method end

% Class method SetRevenue

::::{function} SetRevenue (revenue, currency)
:noindex:

Sets the revenue and currency associated with the event

{#windows-adjustevent-setrevenue-invocation}
```c#
public void SetRevenue(double revenue, string currency)
```

:param amount: The amount of currency units associated with the event
:type amount: double
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: string

% SetRevenue snippet

:::{tab-set-code}

```c#
var adjustEvent = new AdjustEvent("abc123");
adjustEvent.SetRevenue(0.01, "EUR");
Adjust.TrackEvent(adjustEvent);
```

:::

% Snippet end

::::

% Class method end

% Class method AddCallbackParameter

::::{function} AddCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the event object. You can add multiple parameters by calling this method multiple times.

Event callback parameters override session callback parameters that have the same key.

{#windows-adjustevent-addcallbackparameter-invocation}
```c#
public void AddCallbackParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% AddCallbackParameter snippet

:::{tab-set-code}

```c#
var adjustEvent = new AdjustEvent("abc123");

adjustEvent.AddCallbackParameter("key", "value");
adjustEvent.AddCallbackParameter("foo", "bar");

Adjust.TrackEvent(adjustEvent);
```

:::

% Snippet end

::::

% Class method end

% Class method AddPartnerParameter

::::{function} AddPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the event object. You can add multiple parameters by calling this method multiple times.

{#windows-adjustevent-addpartnerparameter-invocation}
```c#
public void AddPartnerParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% AddPartnerParameter snippet

:::{tab-set-code}

```c#
var adjustEvent = new AdjustEvent("abc123");

adjustEvent.AddPartnerParameter("key", "value");
adjustEvent.AddPartnerParameter("foo", "bar");

Adjust.TrackEvent(adjustEvent);
```

:::

% Snippet end

::::

% Class method end

% Class method PurchaseId

::::{function} PurchaseId { get; set; }
:noindex:

Sets a deduplication ID on your event to avoid recording duplicates. The SDK stores the last ten identifiers and skips revenue events with duplicate IDs.

{#windows-purchaseid-invocation}
```c#
public string PurchaseId { get; set; }
```

:param PurchaseId: A unique identifier used to deduplicate events
:type PurchaseId: string

% PurchaseId snippet

:::{tab-set-code}

```c#
AdjustEvent event = new AdjustEvent("abc123");

event.SetRevenue(0.01, "EUR");
event.PurchaseId = "{PurchaseId}";

Adjust.trackEvent(event);
```

:::

% Snippet end

::::

% Class method end

% Class method setCallbackId

::::{function} CallbackId { get; set; }
:noindex:

Sets a custom identifier for your event object. Adjust's servers can report on this identifier in event callbacks.

{#windows-callbackid-invocation}
```c#
public string CallbackId { get; set; }
```

:param CallbackId: A custom identifier for your event object
:type CallbackId: string

% CallbackId snippet

:::{tab-set-code}

```c#
var adjustEvent = new AdjustEvent("abc123");

adjustEvent.CallbackId = "Your-Custom-Id";

Adjust.TrackEvent(adjustEvent);
```

:::

% Snippet end

::::

% Class method end
