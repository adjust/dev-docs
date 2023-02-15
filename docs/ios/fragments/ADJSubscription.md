---
orphan: true
nosearch: true
---

% addCallbackParameter

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
let subscription = ADJSubscription(
    price: price,
    currency: currency,
    transactionId: transactionId,
    andReceipt: receipt)
//...
subscription.addCallbackParameter("key1", value: "value1")
subscription.addCallbackParameter("key2", value: "value2")
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
ADJSubscription *subscription = [[ADJSubscription alloc] initWithPrice:price
                                                              currency:currency
                                                         transactionId:transactionId
                                                            andReceipt:receipt];
//...
[subscription addCallbackParameter:@"key1" value:@"value1"];
[subscription addCallbackParameter:@"key2" value:@"value2"];
```
:::
::::

% methodEnd

% addPartnerParameter

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
let subscription = ADJSubscription(
    price: price,
    currency: currency,
    transactionId: transactionId,
    andReceipt: receipt)
//...
subscription.addPartnerParameter("key1", value: "value1")
subscription.addPartnerParameter("key2", value: "value2")
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
ADJSubscription *subscription = [[ADJSubscription alloc] initWithPrice:price
                                                              currency:currency
                                                         transactionId:transactionId
                                                            andReceipt:receipt];
//...
[subscription addPartnerParameter:@"key1" value:@"value1"];
[subscription addPartnerParameter:@"key2" value:@"value2"];
```
:::
::::

% methodEnd

% initWithPrice method

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
let subscription = ADJSubscription(
    price: price,
    currency: currency,
    transactionId: transactionId,
    andReceipt: receipt)
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
ADJSubscription *subscription = [[ADJSubscription alloc] initWithPrice:price
                                                              currency:currency
                                                         transactionId:transactionId
                                                            andReceipt:receipt];
```
:::
::::

% methodEnd

% setSalesRegion

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
let subscription = ADJSubscription(
    price: price,
    currency: currency,
    transactionId: transactionId,
    andReceipt: receipt)
//...
subscription.setSalesRegion(salesRegion)
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
ADJSubscription *subscription = [[ADJSubscription alloc] initWithPrice:price
                                                              currency:currency
                                                         transactionId:transactionId
                                                            andReceipt:receipt];
//...
[subscription setSalesRegion:salesRegion];
```
:::
::::

% methodEnd

% setTransactionDate

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
let subscription = ADJSubscription(
    price: price,
    currency: currency,
    transactionId: transactionId,
    andReceipt: receipt)
//...
subscription.setTransactionDate(transactionDate)
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
ADJSubscription *subscription = [[ADJSubscription alloc] initWithPrice:price
                                                              currency:currency
                                                         transactionId:transactionId
                                                            andReceipt:receipt];
//...
[subscription setTransactionDate:transactionDate];
```
:::
::::

% methodEnd
