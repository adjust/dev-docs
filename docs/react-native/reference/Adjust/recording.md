# Recording methods

Use these methods to record event and session information with the Adjust SDK.

% Class method trackEvent

::::{function} trackEvent (event)
:noindex:

Record event information using an `AdjustEvent` object and an [Adjust event token](hc:basic-event-setup#create-an-event-token).

{#react-native-trackevent-invocation}
```ts
trackEvent: (adjustEvent: AdjustEvent) => void
```

:param event: An event object containing information you want to record
:type event: [*AdjustEvent*](/react-native/reference/AdjustEvent.md)

% trackEvent snippet

:::{tab-set-code}

```js
var myAdjustEvent = new AdjustEvent("abc123");
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

Adds callback parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

:::{note}
If you have added an event callback parameter with the same key, the **event** parameter takes priority.
:::

{#react-native-addsessioncallbackparameter-invocation}
```ts
addSessionCallbackParameter: (key: string, value: string) => void
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addSessionCallbackParameter snippet

:::{tab-set-code}

```js
Adjust.addSessionCallbackParameter("key", "value");
```

:::

% Snippet end

::::

% Class method end

% Class method removeSessionCallbackParameter

::::{function} removeSessionCallbackParameter (key)
:noindex:

Removes a callback parameter.

{#react-native-removesessioncallbackparameter-invocation}
```ts
removeSessionCallbackParameter: (key: string) => void
```

:param key: The data key
:type key: NSString

% removeSessionCallbackParameter snippet

:::{tab-set-code}

```js
Adjust.removeSessionCallbackParameter("key");
```

:::

% Snippet end

::::

% Class method end

% Class method resetSessionCallbackParameters

::::{function} resetSessionCallbackParameters
:noindex:

Removes **all** callback parameters

{#react-native-resetsessioncallbackparameters-invocation}
```ts
resetSessionCallbackParameters: () => void
```

% resetSessionCallbackParameters snippet

:::{tab-set-code}

```js
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
If you have added an event callback parameter with the same key, the **event** parameter takes priority.
:::

{#react-native-addsessionpartnerparameter-invocation}
```ts
addSessionPartnerParameter: (key: string, value: string) => void
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addSessionPartnerParameter snippet

:::{tab-set-code}

```js
Adjust.addSessionPartnerParameter("key", "value");
```

:::

% Snippet end

::::

% Class method end

% Class method removeSessionPartnerParameter

::::{function} removeSessionPartnerParameter (key)
:noindex:

Removes a partner parameter.

{#react-native-removesessionpartnerparameter-invocation}
```ts
removeSessionPartnerParameter: (key: string) => void
```

:param key: The data key
:type key: string

% removeSessionPartnerParameter snippet

:::{tab-set-code}

```js
Adjust.removeSessionPartnerParameter("key");
```

:::

% Snippet end

::::

% Class method end

% Class method resetSessionPartnerParameters

::::{function} resetSessionPartnerParameters
:noindex:

Resets **all** partner parameters

{#react-native-resetsessionpartnerparameters-invocation}
```ts
resetSessionPartnerParameters: () => void
```

% resetSessionPartnerParameters snippet

:::{tab-set-code}

```js
Adjust.resetSessionPartnerParameters();
```

:::

% Snippet end

::::

% Class method end

% Class method trackAppStoreSubscription

::::{function} trackAppStoreSubscription(subscription)
:noindex:

Record an App Store subscription object.

{#react-native-trackappstoresubscription-invocation}
```ts
trackAppStoreSubscription: (subscription: AdjustAppStoreSubscription) => void
```

:param subscription: The ad revenue object containing the revenue details
:type subscription: [AdjustAppStoreSubscription object](/react-native/reference/AdjustAppStoreSubscription.md)

% trackAppStoreSubscription snippet

:::{tab-set-code}

```js
var subscription = new AdjustAppStoreSubscription(
   price, 
   currency, 
   transactionId, 
   receipt);
subscription.setTransactionDate(transactionDate);
subscription.setSalesRegion(salesRegion);
subscription.addCallbackParameter("key1", "value1");
subscription.addCallbackParameter("key2", "value2");
subscription.addPartnerParameter("key1", "value1");
subscription.addPartnerParameter("key2", "value2");

Adjust.trackAppStoreSubscription(subscription);
```

:::

% Snippet end

::::

% Class method end

% Class method trackPlayStoreSubscription

::::{function} trackPlayStoreSubscription(subscription)
:noindex:

Record an Play Store subscription object.

{#react-native-trackplaystoresubscription-invocation}
```ts
trackPlayStoreSubscription: (subscription: AdjustPlayStoreSubscription) => void
```

:param subscription: The ad revenue object containing the revenue details
:type subscription: [trackPlayStoreSubscription object](/react-native/reference/AdjustPlayStoreSubscription.md)

% trackPlayStoreSubscription snippet

:::{tab-set-code}

```js
var subscription = new AdjustPlayStoreSubscription(
    price,
    currency,
    sku,
    orderId,
    signature,
    purchaseToken);
subscription.setPurchaseTime(purchaseTime);
subscription.addCallbackParameter("key1", "value1");
subscription.addCallbackParameter("key2", "value2");
subscription.addPartnerParameter("key1", "value1");
subscription.addPartnerParameter("key2", "value2");

Adjust.trackPlayStoreSubscription(subscription);
```

:::

% Snippet end

::::

% Class method end

% Class method getAttribution

::::{function} getAttribution
:noindex:

Fetches attribution data from the device.

{#react-native-getattribution-invocation}
```ts
getAttribution: (callback: (attribution: AdjustAttribution) => void) => void
```

:returns: An attribution object containing attribution data associated with the device
:rtype: [`AdjustAttribution` object](/react-native/reference/AdjustAttribution.md)

% getAttribution snippet

:::{tab-set-code}

```js
AdjustAttribution attribution = Adjust.getAttribution();

```

:::

% Snippet end

::::
