# AdjustPlayStoreSubscription class

Use this class to store Play Store subscription information. You can pass this to Adjust's servers using the [`trackPlayStoreSubscription` method](#react-native-trackplaystoresubscription-invocation).

% Class method AdjustPlayStoreSubscription

::::{function} AdjustPlayStoreSubscription (price, currency, sku, orderId, signature, purchaseToken)
:noindex:

Initializes a subscription.

{#react-native-adjustplaystoresubscription-invocation}

```ts
export class AdjustPlayStoreSubscription {
      price: string,
      currency: string,
      sku: string,
      orderId: string,
      signature: string,
      purchaseToken: string
}
```

:param price: The price of the subscription
:type price: string
:param currency: The three character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: string
:param sku: The ID of the product
:type sku: string
:param orderId: Your ID for the transaction
:type orderId: string
:param signature: The signature of the purchase data
:type signature: string
:param purchaseToken: The unique token of the transaction. See [Google's documentation](<https://developer.android.com/reference/com/android/billingclient/api/Purchase#getPurchaseToken()>) for more information
:type purchaseToken: string

% AdjustPlayStoreSubscription snippet

:::{tab-set-code}

```js
var subscription = new AdjustPlayStoreSubscription(
   price,
   currency,
   sku,
   orderId,
   signature,
   purchaseToken
);
```

:::

% Snippet end

::::

% Class method end

% Class method setPurchaseTime

::::{function} setPurchaseTime (purchaseTime)
:noindex:

Sets the date of the transaction in the subscription object.

{#react-native-setpurchasetime-invocation}

```ts
public setPurchaseTime(purchaseTime: string): void
```

:param purchaseTime: The date on which the subscription was purchased
:type purchaseTime: string

% setPurchaseTime snippet

:::{tab-set-code}

```js
var subscription = new AdjustPlayStoreSubscription(
   price,
   currency,
   sku,
   orderId,
   signature,
   purchaseToken
);
subscription.setPurchaseTime(purchaseTime);
```

:::

% Snippet end

::::

% Class method end

% Class method addCallbackParameter

::::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

{#react-native-adjustplaystoresubscription-addcallbackparameter-invocation}

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
var subscription = new AdjustPlayStoreSubscription(
   price,
   currency,
   sku,
   orderId,
   signature,
   purchaseToken
);
//..
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

{#react-native-adjustplaystoresubscription-addpartnerparameter-invocation}

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
var subscription = new AdjustPlayStoreSubscription(
   price,
   currency,
   sku,
   orderId,
   signature,
   purchaseToken
);
//..
subscription.addPartnerParameter("key", "value");
```

:::

% Snippet end

::::

% Class method end
