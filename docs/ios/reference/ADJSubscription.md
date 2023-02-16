# ADJSubscription class

Use this class to store subscription information. You can pass this to Adjust's servers using the [`trackSubscription` method](ios-trackSubscription-invocation).

% classMethod initWithPrice

:::{function} initWithPrice (price, currency, transactionId, receipt)
:noindex:

Initializes a subscription

```{code-block} objc
:name: ios-initWithPrice-invocation

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

```{include} /ios/fragments/ADJSubscription.md
:start-after: initWithPrice method
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setTransactionDate

:::{function} setTransactionDate (transactionDate)
:noindex:

Sets the date of the transaction in the subscription object

```{code-block} objc
:name: ios-setTransactionDate-invocation

- (void)setTransactionDate:(nonnull NSDate *)transactionDate;
```

:param transactionDate: The date on which the subscription was purchased
:type transactionDate: NSDate

```{include} /ios/fragments/ADJSubscription.md
:start-after: setTransactionDate
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setSalesRegion

:::{function} setSalesRegion (salesRegion)
:noindex:

Sets the region in which the subscription purchase was made

```{code-block} objc
:name: ios-setSalesRegion-invocation

- (void)setSalesRegion:(nonnull NSString *)salesRegion;
```

:param salesRegion: The region in which the 
:type salesRegion: NSString

```{include} /ios/fragments/ADJSubscription.md
:start-after: setSalesRegion
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addCallbackParameter

:::{function} addCallbackParameter (key, value)
:noindex:

Adds key-value callback parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

```{code-block} objc
:name: ios-ADJSubscription-addCallbackParameter-invocation

- (void)addCallbackParameter:(nonnull NSString *)key value:(nonnull NSString *)value;
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

```{include} /ios/fragments/ADJSubscription.md
:start-after: addCallbackParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addPartnerParameter

:::{function} addPartnerParameter (key, value)
:noindex:

Adds key-value partner parameters to the subscription object. You can add multiple parameters by calling this method multiple times.

```{code-block} objc
:name: ios-ADJSubscription-addPartnerParameter-invocation

- (void)addPartnerParameter:(nonnull NSString *)key value:(nonnull NSString *)value;
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

```{include} /ios/fragments/ADJSubscription.md
:start-after: addPartnerParameter
:end-before: methodEnd
```

:::

% classMethodEnd




