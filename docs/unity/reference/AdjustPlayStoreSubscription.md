# AdjustPlayStoreSubscription class

Use this class to store Play Store subscription information. You can pass this to Adjust's servers using the [`trackPlayStoreSubscription` method](#unity-trackplaystoresubscription-invocation).

% Class method AdjustPlayStoreSubscription

::::{function} AdjustPlayStoreSubscription (price, currency, sku, orderId, signature, purchaseToken)
:noindex:

Initializes a subscription

{#unity-adjustplaystoresubscription-invocation}
```c#
public AdjustPlayStoreSubscription(string price, string currency, string sku, string orderId, string signature, string purchaseToken)
```

:param price: The price of the subscription
:type price: string
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: string
:param sku: The ID of the product
:type sku: string
:param orderId: Your ID for the transaction
:type orderId: string
:param signature: The signature of the purchase data
:type signature: string
:param purchaseToken: The unique token of the transaction. See [Google's documentation](https://developer.android.com/reference/com/android/billingclient/api/Purchase#getPurchaseToken()) for more information
:type purchaseToken: string


% AdjustPlayStoreSubscription snippet

:::{tab-set-code}

```c#
AdjustPlayStoreSubscription subscription = new AdjustPlayStoreSubscription(
    price,
    currency,
    sku,
    orderId,
    signature,
    purchaseToken);
```

:::

% Snippet end

::::

% Class method end

% Class method setPurchaseTime

::::{function} setPurchaseTime (purchaseTime)
:noindex:

Sets the date of the transaction in the subscription object

{#unity-setpurchasetime-invocation}
```c#
public void setPurchaseTime(string purchaseTime)
```

:param purchaseTime: The date on which the subscription was purchased
:type purchaseTime: string

% setPurchaseTime snippet

:::{tab-set-code}

```c#
AdjustPlayStoreSubscription subscription = new AdjustPlayStoreSubscription(
    price,
    currency,
    sku,
    orderId,
    signature,
    purchaseToken);
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

{#unity-adjustplaystoresubscription-addcallbackparameter-invocation}
```c#
public void addCallbackParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addCallbackParameter snippet

:::{tab-set-code}

```c#
AdjustPlayStoreSubscription subscription = new AdjustPlayStoreSubscription(
    price,
    currency,
    sku,
    orderId,
    signature,
    purchaseToken);
//...
subscription.addCallbackParameter("key1", "value1");
subscription.addCallbackParameter("key2", "value2");
```

:::

% Snippet end

::::

% Class method end

% Class method addPartnerParameter

::::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

{#unity-adjustplaystoresubscription-addpartnerparameter-invocation}
```c#
public void addPartnerParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addPartnerParameter snippet

:::{tab-set-code}

```c#
AdjustPlayStoreSubscription subscription = new AdjustPlayStoreSubscription(
    price,
    currency,
    sku,
    orderId,
    signature,
    purchaseToken);
//...
subscription.addPartnerParameter("key1", "value1");
subscription.addPartnerParameter("key2", "value2");
```

:::

% Snippet end

::::

% Class method end
