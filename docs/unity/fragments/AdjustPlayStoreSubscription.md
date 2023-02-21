---
orphan: true
nosearch: true
---

% AdjustPlayStoreSubscription

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
AdjustPlayStoreSubscription subscription = new AdjustPlayStoreSubscription(
    price,
    currency,
    sku,
    orderId,
    signature,
    purchaseToken);
```
:::
::::

% methodEnd

% setPurchaseTime

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
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
::::

% methodEnd

% addCallbackParameter

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
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
::::

% methodEnd

% addPartnerParameter

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
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
::::

% methodEnd
