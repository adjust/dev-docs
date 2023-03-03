# AdjustEvent class

This class contains information about events triggered in your application. You can send this information to Adjust's servers by passing an `AdjustEvent` object to the [`trackEvent` method](#android-trackevent-invocation).

% Class method AdjustEvent

::::{function} AdjustEvent (eventToken)
:noindex:

Creates an event object initialized with an Adjust event token

{#android-adjustevent-invocation}
```java
public AdjustEvent(String eventToken)
```

:param eventToken: A 6 character Adjust event token
:type eventToken: String

:::{include} /android/reference/Adjust/recording.md
:start-after: trackEvent snippet
:end-before: Snippet end
:::

::::

% Class method end

% Class method setRevenue

::::{function} setRevenue (amount, currency)
:noindex:

Sets the revenue and currency associated with the event

{#android-adjustevent-setrevenue-invocation}
```java
public void setRevenue(double revenue, String currency)
```

:param amount: The amount of currency units associated with the event
:type amount: double
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: String

% setRevenue snippet

:::{tab-set-code}

```kotlin
val adjustEvent = AdjustEvent("abc123")
//...
adjustEvent.setRevenue(0.01, "EUR")
//...
Adjust.trackEvent(adjustEvent)
```

```java
AdjustEvent adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.setRevenue(0.01, "EUR");
//...
Adjust.trackEvent(adjustEvent);
```

```javascript
let adjustEvent = new AdjustEvent('abc123');
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

{#android-adjustevent-addcallbackparameter-invocation}
```java
public void addCallbackParameter(String key, String value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addCallbackParameter snippet

:::{tab-set-code}

```kotlin
val adjustEvent = AdjustEvent("abc123")
adjustEvent.addCallbackParameter("key", "value")
adjustEvent.addCallbackParameter("foo", "bar")
Adjust.trackEvent(adjustEvent)
```

```java
AdjustEvent adjustEvent = new AdjustEvent("abc123");
adjustEvent.addCallbackParameter("key", "value");
adjustEvent.addCallbackParameter("foo", "bar");
Adjust.trackEvent(adjustEvent);
```

```javascript
let adjustEvent = new AdjustEvent('abc123');
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

{#android-adjustevent-addpartnerparameter-invocation}
```java
public void addPartnerParameter(String key, String value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addPartnerParameter snippet

:::{tab-set-code}

```kotlin
val adjustEvent = AdjustEvent("abc123")
adjustEvent.addPartnerParameter("key", "value")
adjustEvent.addPartnerParameter("foo", "bar")
Adjust.trackEvent(adjustEvent)
```

```java
AdjustEvent adjustEvent = new AdjustEvent("abc123");
adjustEvent.addPartnerParameter("key", "value");
adjustEvent.addPartnerParameter("foo", "bar");
Adjust.trackEvent(adjustEvent);
```

```javascript
let adjustEvent = new AdjustEvent('abc123');
adjustEvent.addPartnerParameter('key', 'value');
adjustEvent.addPartnerParameter('foo', 'bar');
Adjust.trackEvent(adjustEvent);
```

:::

% Snippet end

::::

% Class method end

% Class method setOrderId

::::{function} setOrderId (orderId)
:noindex:

Sets a deduplication ID on your event to avoid recording duplicates. The SDK stores the last ten identifiers and skips revenue events with duplicate IDs.

{#android-setorderid-invocation}
```java
public void setOrderId(String orderId)
```

:param orderId: A unique identifier used to deduplicate events
:type orderId: string

% setOrderId snippet

:::{tab-set-code}

```kotlin
val adjustEvent = AdjustEvent("abc123")
adjustEvent.setRevenue(0.01, "EUR")
adjustEvent.setOrderId("{OrderId}")
Adjust.trackEvent(adjustEvent)
```

```java
AdjustEvent adjustEvent = new AdjustEvent("abc123");
adjustEvent.setRevenue(0.01, "EUR");
adjustEvent.setOrderId("{OrderId}");
Adjust.trackEvent(adjustEvent);
```

```javascript
let adjustEvent = new AdjustEvent('abc123');
adjustEvent.setRevenue(0.01, 'EUR');
adjustEvent.setOrderId('{OrderId}');
Adjust.trackEvent(event);
```

:::

% Snippet end

::::

% Class method end

% Class method setCallbackId

::::{function} setCallbackId (callbackId)
:noindex:

Sets a custom identifier for your event object. Adjust's servers can report on this identifier in event callbacks.

{#android-setcallbackid-invocation}
```java
public void setCallbackId(String callbackId)
```

:param callbackId: A custom identifier for your event object
:type callbackId: String

% setCallbackId snippet

:::{tab-set-code}

```kotlin
val adjustEvent = AdjustEvent("abc123")
adjustEvent.setCallbackId("{Your-Custom-Id}")
Adjust.trackEvent(adjustEvent)
```

```java
AdjustEvent adjustEvent = new AdjustEvent("abc123");
adjustEvent.setCallbackId("{Your-Custom-Id}");
Adjust.trackEvent(adjustEvent);
```

```javascript
let adjustEvent = new AdjustEvent('abc123');
adjustEvent.setCallbackId('{Your-Custom-Id}');
Adjust.trackEvent(adjustEvent);
```

:::

% Snippet end

::::

% Class method end
