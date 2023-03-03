# ADJSubscription class

Use this class to store subscription information. You can pass this to Adjust's servers using the [`trackSubscription` method](#ios-tracksubscription-invocation).

% Class method initWithPrice

::::{function} initWithPrice (price, currency, transactionId, receipt)
:noindex:

Initializes a subscription

{#ios-initwithprice-invocation}
```objective-c
- (nullable id)initWithPrice:(nonnull NSDecimalNumber *)price
                    currency:(nonnull NSString *)currency
               transactionId:(nonnull NSString *)transactionId
                  andReceipt:(nonnull NSData *)receipt;
```

:param price: The price of the subscription
:type price: NSDecimalNumber
:param currency: The 3 character [ISO 4217 code](https://www.iban.com/currency-codes) of the currency unit
:type currency: NSString
:param transactionId: The unique ID of the purchase transaction
:type transactionId: NSString
:param receipt: A data object containing receipt details
:type receipt: NSData

% initWithPrice snippet

:::{tab-set-code}

```swift
let subscription = ADJSubscription(
    price: price,
    currency: currency,
    transactionId: transactionId,
    andReceipt: receipt)
```

```objective-c
ADJSubscription *subscription = [[ADJSubscription alloc] initWithPrice:price
                                                              currency:currency
                                                         transactionId:transactionId
                                                            andReceipt:receipt];
```
:::

% Snippet end

::::

% Class method end

% Class method setTransactionDate

::::{function} setTransactionDate (transactionDate)
:noindex:

Sets the date of the transaction in the subscription object

{#ios-settransactiondate-invocation}
```objective-c
- (void)setTransactionDate:(nonnull NSDate *)transactionDate;
```

:param transactionDate: The date on which the subscription was purchased
:type transactionDate: NSDate

% setTransactionDate snippet

:::{tab-set-code}

```swift
let subscription = ADJSubscription(
    price: price,
    currency: currency,
    transactionId: transactionId,
    andReceipt: receipt)
//...
subscription.setTransactionDate(transactionDate)
```

```objective-c
ADJSubscription *subscription = [[ADJSubscription alloc] initWithPrice:price
                                                              currency:currency
                                                         transactionId:transactionId
                                                            andReceipt:receipt];
//...
[subscription setTransactionDate:transactionDate];
```
:::

% Snippet end

::::

% Class method end

% Class method setSalesRegion

::::{function} setSalesRegion (salesRegion)
:noindex:

Sets the region in which the subscription purchase was made

{#ios-setsalesregion-invocation}
```objective-c
- (void)setSalesRegion:(nonnull NSString *)salesRegion;
```

:param salesRegion: The region in which the 
:type salesRegion: NSString

% setSalesRegion snippet

:::{tab-set-code}

```swift
let subscription = ADJSubscription(
    price: price,
    currency: currency,
    transactionId: transactionId,
    andReceipt: receipt)
//...
subscription.setSalesRegion(salesRegion)
```

```objective-c
ADJSubscription *subscription = [[ADJSubscription alloc] initWithPrice:price
                                                              currency:currency
                                                         transactionId:transactionId
                                                            andReceipt:receipt];
//...
[subscription setSalesRegion:salesRegion];
```
:::

% Snippet end

::::

% Class method end

% Class method addCallbackParameter

::::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

{#ios-adjsubscription-addcallbackparameter-invocation}
```objective-c
- (void)addCallbackParameter:(nonnull NSString *)key value:(nonnull NSString *)value;
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

% addCallbackParameter snippet

:::{tab-set-code}

```swift
let subscription = ADJSubscription(
    price: price,
    currency: currency,
    transactionId: transactionId,
    andReceipt: receipt)
//...
subscription.addCallbackParameter("key1", value: "value1")
subscription.addCallbackParameter("key2", value: "value2")
```

```objective-c
ADJSubscription *subscription = [[ADJSubscription alloc] initWithPrice:price
                                                              currency:currency
                                                         transactionId:transactionId
                                                            andReceipt:receipt];
//...
[subscription addCallbackParameter:@"key1" value:@"value1"];
[subscription addCallbackParameter:@"key2" value:@"value2"];
```
:::

% Snippet end

::::

% Class method end

% Class method addPartnerParameter

::::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

{#ios-adjsubscription-addpartnerparameter-invocation}
```objective-c
- (void)addPartnerParameter:(nonnull NSString *)key value:(nonnull NSString *)value;
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

% addPartnerParameter snippet

:::{tab-set-code}

```swift
let subscription = ADJSubscription(
    price: price,
    currency: currency,
    transactionId: transactionId,
    andReceipt: receipt)
//...
subscription.addPartnerParameter("key1", value: "value1")
subscription.addPartnerParameter("key2", value: "value2")
```

```objective-c
ADJSubscription *subscription = [[ADJSubscription alloc] initWithPrice:price
                                                              currency:currency
                                                         transactionId:transactionId
                                                            andReceipt:receipt];
//...
[subscription addPartnerParameter:@"key1" value:@"value1"];
[subscription addPartnerParameter:@"key2" value:@"value2"];
```
:::

% Snippet end

::::

% Class method end




