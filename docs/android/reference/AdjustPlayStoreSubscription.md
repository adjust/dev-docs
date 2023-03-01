# AdjustPlayStoreSubscription class

Use this class to store Play Store subscription information. You can pass this to Adjust's servers using the [`trackPlayStoreSubscription` method](android-trackPlayStoreSubscription-invocation).

% Class method AdjustPlayStoreSubscription

::::{function} AdjustPlayStoreSubscription (price, currency, sku, orderId, signature, purchaseToken)
:noindex:

Initializes a subscription

```{code-block} java
:name: android-AdjustPlayStoreSubscription-invocation

public AdjustPlayStoreSubscription(final long price,
                                       final String currency,
                                       final String sku,
                                       final String orderId,
                                       final String signature,
                                       final String purchaseToken)
```

:param price: The price of the subscription
:type price: long
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: String
:param sku: The ID of the product
:type sku: String
:param orderId: Your ID for the transaction
:type orderId: String
:param signature: The signature of the purchase data
:type signature: String
:param purchaseToken: The unique token of the transaction. See [Google's documentation](https://developer.android.com/reference/com/android/billingclient/api/Purchase#getPurchaseToken()) for more information
:type purchaseToken: String

% AdjustPlayStoreSubscription snippet

:::{tab-set-code}

```{code-block} kotlin
val subscription = AdjustPlayStoreSubscription(
    price,
    currency,
    sku,
    orderId,
    signature,
    purchaseToken);
subscription.setPurchaseTime(purchaseTime)

Adjust.trackPlayStoreSubscription(subscription)
```

```{code-block} java
AdjustPlayStoreSubscription subscription = new AdjustPlayStoreSubscription(
    price,
    currency,
    sku,
    orderId,
    signature,
    purchaseToken);
subscription.setPurchaseTime(purchaseTime);

Adjust.trackPlayStoreSubscription(subscription);
```

:::

% Snippet end

::::

% Class method end

% Class method setPurchaseTime

::::{function} setPurchaseTime (purchaseTime)
:noindex:

Sets the date of the transaction in the subscription object

```{code-block} java
:name: android-setPurchaseTime-invocation

public void setPurchaseTime(final long purchaseTime)
```

:param purchaseTime: The date on which the subscription was purchased
:type purchaseTime: String

% setPurchaseTime snippet

:::{tab-set-code}

```{code-block} kotlin
subscription.setPurchaseTime("{purchaseTime}")
```

```{code-block} java
subscription.setPurchaseTime("{purchaseTime}");
```

:::

% Snippet end

::::

% Class method end

% Class method addCallbackParameter

::::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

```{code-block} java
:name: android-AdjustPlayStoreSubscription-addCallbackParameter-invocation

public void addCallbackParameter(String key, String value)
```

:param key: The data key
:type key: String
:param value: The data value
:type value: String

% addCallbackParameter snippet

:::{tab-set-code}

```{code-block} kotlin
subscription.addCallbackParameter("key", "value")
subscription.addCallbackParameter("foo", "bar")
```

```{code-block} java
subscription.addCallbackParameter("key", "value");
subscription.addCallbackParameter("foo", "bar");
```

:::

% Snippet end

::::

% Class method end

% Class method addPartnerParameter

::::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

```{code-block} java
:name: android-AdjustPlayStoreSubscription-addPartnerParameter-invocation

public void addPartnerParameter(String key, String value)
```

:param key: The data key
:type key: String
:param value: The data value
:type value: String

% addPartnerParameter snippet

:::{tab-set-code}

```{code-block} kotlin
subscription.addPartnerParameter("key", "value")
subscription.addPartnerParameter("foo", "bar")
```

```{code-block} java
subscription.addPartnerParameter("key", "value");
subscription.addPartnerParameter("foo", "bar");
```

:::

% Snippet end

::::

% Class method end
