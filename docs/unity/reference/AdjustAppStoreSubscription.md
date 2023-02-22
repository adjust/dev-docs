# AdjustAppStoreSubscription class

Use this class to store App Store subscription information. You can pass this to Adjust's servers using the [`trackAppStoreSubscription` method](unity-trackAppStoreSubscription-invocation).

% Class method AdjustAppStoreSubscription

:::::{function} AdjustAppStoreSubscription (price, currency, transactionId, receipt)
:noindex:

Initializes a subscription

```{code-block} cs
:name: unity-AdjustAppStoreSubscription-invocation

public AdjustAppStoreSubscription(string price, string currency, string transactionId, string receipt)
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

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
    price,
    currency,
    transactionId,
    receipt);
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method setTransactionDate

:::::{function} setTransactionDate (transactionDate)
:noindex:

Sets the date of the transaction in the subscription object

```{code-block} cs
:name: unity-setTransactionDate-invocation

public void setTransactionDate(string transactionDate)
```

:param transactionDate: The date on which the subscription was purchased
:type transactionDate: string

% setTransactionDate snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
    price,
    currency,
    transactionId,
    receipt);
//...
subscription.setTransactionDate(transactionDate);
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method setSalesRegion

:::::{function} setSalesRegion (salesRegion)
:noindex:

You can record the region in which the user purchased a subscription

```{code-block} cs
:name: unity-setSalesRegion-invocation

public void setSalesRegion(string salesRegion)
```

:param salesRegion: The date on which the subscription was purchased
:type salesRegion: string

% setSalesRegion snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
    price,
    currency,
    transactionId,
    receipt);
//...
subscription.setSalesRegion(salesRegion);
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method addCallbackParameter

:::::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

```{code-block} cs
:name: unity-AdjustAppStoreSubscription-addCallbackParameter-invocation

public void addCallbackParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addCallbackParameter snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
    price,
    currency,
    transactionId,
    receipt);
//...
subscription.addCallbackParameter("key1", "value1");
subscription.addCallbackParameter("key2", "value2");
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method addPartnerParameter

:::::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

```{code-block} cs
:name: unity-AdjustAppStoreSubscription-addPartnerParameter-invocation

public void addPartnerParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addPartnerParameter snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
    price,
    currency,
    transactionId,
    receipt);
//...
subscription.addPartnerParameter("key1", "value1");
subscription.addPartnerParameter("key2", "value2");
```
:::
::::

% Snippet end

:::::

% Class method end
