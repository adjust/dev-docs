---
orphan: true
nosearch: true
---

% AdjustAppStoreSubscription

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

% methodEnd

% setTransactionDate

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

% methodEnd

% setSalesRegion

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

% methodEnd

% addCallbackParameter

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

% methodEnd

% addPartnerParameter

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

% methodEnd
