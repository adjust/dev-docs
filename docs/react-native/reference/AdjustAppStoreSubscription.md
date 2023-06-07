# AdjustAppStoreSubscription class

Use this class to store App Store subscription information. You can pass this to Adjust's servers using the [`trackAppStoreSubscription` method](#react-native-trackappstoresubscription-invocation).

% Class method AdjustAppStoreSubscription

::::{function} AdjustAppStoreSubscription (price, currency, transactionId, receipt)
:noindex:

Initializes a subscription

{#react-native-adjustappstoresubscription-invocation}

```ts
export class AdjustAppStoreSubscription {
   price: string,
   currency: string,
   transactionId: string,
   receipt: string
}
```

:param price: The price of the subscription
:type price: string
:param currency: The currency of the subscription. Formatted as the [`currencyCode`](https://developer.apple.com/documentation/foundation/nslocale/1642836-currencycode?language=objc) of the [`priceLocale`](https://developer.apple.com/documentation/storekit/skproduct/1506145-pricelocale?language=objc) object
:type currency: string
:param transactionId: Your ID for the transaction
:type transactionId: string
:param receipt: The receipt information
:type receipt: string

% AdjustAppStoreSubscription snippet

:::{tab-set-code}

```js
var subscription = new AdjustAppStoreSubscription(
   price,
   currency,
   transactionId,
   receipt
);
```

:::

% Snippet end

::::

% Class method end

% Class method setTransactionDate

::::{function} setTransactionDate (transactionDate)
:noindex:

Sets the date of the transaction in the subscription object

{#react-native-settransactiondate-invocation}

```ts
public setTransactionDate(transactionDate: string): void
```

:param transactionDate: The date on which the subscription was purchased
:type transactionDate: string

% setTransactionDate snippet

:::{tab-set-code}

```js
var subscription = new AdjustAppStoreSubscription(
   price,
   currency,
   transactionId,
   receipt
);
//...
subscription.setTransactionDate(transactionDate);
```

:::

% Snippet end

::::

% Class method end

% Class method setSalesRegion

::::{function} setSalesRegion (salesRegion)
:noindex:

You can record the region in which the user purchased a subscription

{#react-native-setsalesregion-invocation}

```ts
public setSalesRegion(salesRegion: string): void
```

:param salesRegion: The date on which the subscription was purchased
:type salesRegion: string

% setSalesRegion snippet

:::{tab-set-code}

```js
var subscription = new AdjustAppStoreSubscription(
   price,
   currency,
   transactionId,
   receipt
);
//...
subscription.setSalesRegion(salesRegion);
```

:::

% Snippet end

::::

% Class method end

% Class method addCallbackParameter

::::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

{#react-native-adjustappstoresubscription-addcallbackparameter-invocation}

```ts
public addCallbackParameter(key: string, value: string): void
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addCallbackParameter snippet

:::{tab-set-code}

```js
var subscription = new AdjustAppStoreSubscription(
   price,
   currency,
   transactionId,
   receipt
);
//...
subscription.addCallbackParameter("key", "value");
```

:::

% Snippet end

::::

% Class method end

% Class method addPartnerParameter

::::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

{#react-native-adjustappstoresubscription-addpartnerparameter-invocation}

```ts
public addPartnerParameter(key: string, value: string): void
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addPartnerParameter snippet

:::{tab-set-code}

```js
var subscription = new AdjustAppStoreSubscription(
   price,
   currency,
   transactionId,
   receipt
);
//...
subscription.addPartnerParameter("key", "value");
```

:::

% Snippet end

::::

% Class method end
