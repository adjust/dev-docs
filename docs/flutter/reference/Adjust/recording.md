# Recording methods

% Class method trackEvent

::::{function} trackEvent (event)
:noindex:

Record event information using an `AdjustEvent` object and an [Adjust event token](https://help.adjust.com/en/article/basic-event-setup#create-an-event-token).

{#flutter-trackevent-invocation}

```dart
static void trackEvent(AdjustEvent event)
```

:param event: An event object containing information you want to record
:type event: [_AdjustEvent_](/flutter/reference/AdjustEvent.md)

% trackEvent snippet

:::{tab-set-code}

```dart
AdjustEvent myAdjustEvent = new AdjustEvent('abc123');
//...
Adjust.trackEvent(myAdjustEvent);
```

:::

% Snippet end

::::

% Class method end

% Class method addSessionCallbackParameter

::::{function} addSessionCallbackParameter (key, value)
:noindex:

Adds callback parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling this method multiple times.

:::{note}
If you have added an event callback parameter with the same key, the **event** parameter takes priority.
:::

{#flutter-addsessioncallbackparameter-invocation}

```dart
static void addSessionCallbackParameter(String key, String value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addSessionCallbackParameter snippet

:::{tab-set-code}

```dart
Adjust.addSessionCallbackParameter('key', 'value');
```

:::

% Snippet end

::::

% Class method end

% Class method removeSessionCallbackParameter

::::{function} removeSessionCallbackParameter (key)
:noindex:

Removes a callback parameter

{#flutter-removesessioncallbackparameter-invocation}

```dart
static void removeSessionCallbackParameter(String key)
```

:param key: The data key
:type key: string

% removeSessionCallbackParameter snippet

:::{tab-set-code}

```dart
Adjust.removeSessionCallbackParameter('key');
```

:::

% Snippet end

::::

% Class method end

% Class method resetSessionCallbackParameters

::::{function} resetSessionCallbackParameters
:noindex:

Removes all callback parameters

{#flutter-resetsessioncallbackparameters-invocation}

```dart
static void resetSessionCallbackParameters()
```

% resetSessionCallbackParameters snippet

:::{tab-set-code}

```dart
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

:::{note}
If you have added an event partner parameter with the same key, the **event** parameter takes priority.
:::

{#flutter-addsessionpartnerparameter-invocation}

```dart
static void addSessionPartnerParameter(String key, String value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addSessionPartnerParameter snippet

:::{tab-set-code}

```dart
Adjust.addSessionPartnerParameter('key', 'value');
```

:::

% Snippet end

::::

% Class method end

% Class method removeSessionPartnerParameter

::::{function} removeSessionPartnerParameter (key)
:noindex:

Removes a partner parameter

{#flutter-removesessionpartnerparameter-invocation}

```dart
static void removeSessionPartnerParameter(String key)
```

:param key: The data key
:type key: string

% removeSessionPartnerParameter snippet

{tab-set-code}

```dart
Adjust.removeSessionPartnerParameter('key');
```

:::

% Snippet end

::::

% Class method end

% Class method resetSessionPartnerParameters

::::{function} resetSessionPartnerParameters
:noindex:

Resets all partner parameters

{#flutter-resetsessionpartnerparameters-invocation}

```dart
static void resetSessionPartnerParameters()
```

% resetSessionPartnerParameters snippet

:::{tab-set-code}

```dart
Adjust.resetSessionPartnerParameters();
```

:::

% Snippet end

::::

% Class method end

% Class method trackAppStoreSubscription

::::{function} trackAppStoreSubscription(subscription)
:noindex:

Record an App Store subscription object

{#flutter-trackappstoresubscription-invocation}

```dart
static void trackAppStoreSubscription(AdjustAppStoreSubscription subscription)
```

:param subscription: The subscription object containing the purchase details
:type subscription: [AdjustAppStoreSubscription object](/flutter/reference/AdjustAppStoreSubscription.md)

% trackAppStoreSubscription snippet

:::{tab-set-code}

```dart
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
   price,
   currency,
   transactionId,
   receipt);
subscription.setTransactionDate(transactionDate);
subscription.setSalesRegion(salesRegion);
subscription.addCallbackParameter('key1', 'value1');
subscription.addCallbackParameter('key2', 'value2');
subscription.addPartnerParameter('key1', 'value1');
subscription.addPartnerParameter('key2', 'value2');

Adjust.trackAppStoreSubscription(subscription);
```

:::

% Snippet end

::::

% Class method end

% Class method trackPlayStoreSubscription

::::{function} trackPlayStoreSubscription(subscription)
:noindex:

Record a Play Store subscription object

{#flutter-trackplaystoresubscription-invocation}

```dart
static void trackPlayStoreSubscription(AdjustPlayStoreSubscription subscription)
```

:param subscription: The subscription object containing the purchase details
:type subscription: [trackPlayStoreSubscription object](/flutter/reference/AdjustPlayStoreSubscription.md)

% trackPlayStoreSubscription snippet

:::{tab-set-code}

```dart
AdjustPlayStoreSubscription subscription = new AdjustPlayStoreSubscription(
   price,
   currency,
   sku,
   orderId,
   signature,
   purchaseToken);
subscription.setPurchaseTime(purchaseTime);
subscription.addCallbackParameter('key1', 'value1');
subscription.addCallbackParameter('key2', 'value2');
subscription.addPartnerParameter('key1', 'value1');
subscription.addPartnerParameter('key2', 'value2');

Adjust.trackPlayStoreSubscription(subscription);
```

:::

% Snippet end

::::

% Class method getAttribution

::::{function} getAttribution
:noindex:

Fetches attribution data from the device

{#flutter-getattribution-invocation}

```dart
static Future<AdjustAttribution> getAttribution() async
```

:returns: An attribution object containing attribution data associated with the device
:rtype: [`AdjustAttribution` object](/flutter/reference/AdjustAttribution.md)

% getAttribution snippet

:::{tab-set-code}

```dart
AdjustAttribution attribution = Adjust.getAttribution();
```

:::

% Snippet end

::::
