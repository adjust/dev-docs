# AdjustAppStoreSubscription class

Use this class to store App Store subscription information. You can pass this to Adjust's servers using the [`trackAppStoreSubscription` method](#flutter-trackappstoresubscription-invocation).

% Class method AdjustAppStoreSubscription

::::{function} AdjustAppStoreSubscription (price, currency, transactionId, receipt)
:noindex:

Initializes a subscription

{#flutter-adjustappstoresubscription-invocation}

```dart
AdjustAppStoreSubscription(String _price, String _currency, String _transactionId, String _receipt)
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

```dart
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
   price,
   currency,
   transactionId,
   receipt);
```

:::

% Snippet end

::::

% Class method end

% Class method setTransactionDate

::::{function} setTransactionDate (transactionDate)
:noindex:

Sets the date of the transaction in the subscription object

{#flutter-settransactiondate-invocation}

```dart
void setTransactionDate(String _transactionDate)
```

:param transactionDate: The date on which the subscription was purchased
:type transactionDate: string

% setTransactionDate snippet

:::{tab-set-code}

{emphasize-lines="7"}

```dart
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
   price,
   currency,
   transactionId,
   receipt);
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

{#flutter-setsalesregion-invocation}

```dart
void setSalesRegion(String _salesRegion)
```

:param salesRegion: The region in which the subscription was purchased
:type salesRegion: string

% setSalesRegion snippet

:::{tab-set-code}

{emphasize-lines="7"}

```dart
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
   price,
   currency,
   transactionId,
   receipt);
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

{#flutter-adjustappstoresubscription-addcallbackparameter-invocation}

```dart
void addCallbackParameter(String key, String value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addCallbackParameter snippet

:::{tab-set-code}

{emphasize-lines="7,8"}

```dart
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
   price,
   currency,
   transactionId,
   receipt);
//...
subscription.addCallbackParameter('key1', 'value1');
subscription.addCallbackParameter('key2', 'value2');
```

:::

% Snippet end

::::

% Class method end

% Class method addPartnerParameter

::::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

{#flutter-adjustappstoresubscription-addpartnerparameter-invocation}

```dart
void addPartnerParameter(String key, String value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addPartnerParameter snippet

:::{tab-set-code}

{emphasize-lines="7,8"}

```dart
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
   price,
   currency,
   transactionId,
   receipt);
//...
subscription.addPartnerParameter('key1', 'value1');
subscription.addPartnerParameter('key2', 'value2');
```

:::

% Snippet end

::::

% Class method end
