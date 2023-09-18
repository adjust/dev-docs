# AdjustEvent class

This class contains information about events triggered in your application. You can send this information to Adjust's servers by passing an `AdjustEvent` object to the [`trackEvent` method](#flutter-trackevent-invocation).

% Class method AdjustEvent

::::{function} AdjustEvent (eventToken)
:noindex:

Creates an event object initialized with an Adjust event token

{#flutter-adjustevent-invocation}
```dart
AdjustEvent(string eventToken)
```

:param eventToken: A 6 character Adjust event token
:type eventToken: string

:::{include} /flutter/reference/Adjust/recording.md
:start-after: trackEvent snippet
:end-before: Snippet end
:::

::::

% Class method end

% Class method setRevenue

::::{function} setRevenue (revenue, currency)
:noindex:

Sets the revenue and currency associated with the event

{#flutter-adjustevent-setrevenue-invocation}
```dart
void setRevenue(Num revenue, String currency)
```

:param revenue: The amount of currency units associated with the event
:type revenue: num
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: string

% setRevenue snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustEvent myAdjustEvent = new AdjustEvent('abc123');
//...
adjustEvent.setRevenue(0.01, 'EUR');
//...
Adjust.trackEvent(myAdjustEvent);
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

{#flutter-adjustevent-addcallbackparameter-invocation}
```dart
void addCallbackParameter(String key, String value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addCallbackParameter snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustEvent myAdjustEvent = new AdjustEvent('abc123');
//...
adjustEvent.addCallbackParameter('key', 'value');
//...
Adjust.trackEvent(myAdjustEvent);
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

{#flutter-adjustevent-addpartnerparameter-invocation}
```dart
void addPartnerParameter(String key, String value) 
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addPartnerParameter snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustEvent myAdjustEvent = new AdjustEvent('abc123');
//...
adjustEvent.addPartnerParameter('key', 'value');
//...
Adjust.trackEvent(myAdjustEvent);
```

:::

% Snippet end

::::

% Class method end

% Class method transactionId

::::{function} transactionId
:noindex:

A property defining a deduplication ID on your event to avoid recording duplicates. The SDK stores the last ten identifiers and skips revenue events with duplicate IDs.

{#flutter-transactionid-invocation}
```dart
String? transactionId;
```

% transactionId snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustEvent myAdjustEvent = new AdjustEvent('abc123');
//...
myAdjustEvent.transactionId = '{TransactionId}';
//...
Adjust.trackEvent(myAdjustEvent);
```

:::

% Snippet end

::::

% Class method end

% Class method callbackId

::::{function} callbackId
:noindex:

A property defining a custom identifier for your event object. Adjust's servers can report on this identifier in event callbacks.

{#flutter-callbackid-invocation}
```dart
String? callbackId;
```

% callbackId snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustEvent myAdjustEvent = new AdjustEvent('abc123');
//...
myAdjustEvent.callbackId = '{your_callback_id}';
//...
Adjust.trackEvent(myAdjustEvent);
```
:::

% Snippet end

::::

% Class method end
