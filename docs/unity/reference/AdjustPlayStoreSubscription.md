# AdjustPlayStoreSubscription class

Use this class to store Play Store subscription information. You can pass this to Adjust's servers using the [`trackPlayStoreSubscription` method](unity-trackPlayStoreSubscription-invocation).

% classMethod AdjustPlayStoreSubscription

:::{function} AdjustPlayStoreSubscription (price, currency, sku, orderId, signature, purchaseToken)
:noindex:

Initializes a subscription

```{code-block} cs
:name: unity-AdjustPlayStoreSubscription-invocation

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


```{include} /unity/fragments/AdjustPlayStoreSubscription.md
:start-after: AdjustPlayStoreSubscription
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setPurchaseTime

:::{function} setPurchaseTime (purchaseTime)
:noindex:

Sets the date of the transaction in the subscription object

```{code-block} cs
:name: unity-setPurchaseTime-invocation

public void setPurchaseTime(string purchaseTime)
```

:param purchaseTime: The date on which the subscription was purchased
:type purchaseTime: string

```{include} /unity/fragments/AdjustPlayStoreSubscription.md
:start-after: setPurchaseTime
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addCallbackParameter

:::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

```{code-block} cs
:name: unity-AdjustPlayStoreSubscription-addCallbackParameter-invocation

public void addCallbackParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

```{include} /unity/fragments/AdjustPlayStoreSubscription.md
:start-after: addCallbackParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addPartnerParameter

:::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

```{code-block} cs
:name: unity-AdjustPlayStoreSubscription-addPartnerParameter-invocation

public void addPartnerParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

```{include} /unity/fragments/AdjustPlayStoreSubscription.md
:start-after: addPartnerParameter
:end-before: methodEnd
```

:::

% classMethodEnd
