# Record subscriptions

You can use the Adjust SDK to record subscription information. Pass your App Store or Play Store subscription data to the SDK to see it in your data exports and callbacks.

:::{note}
Subscription record is available in Adjust SDK v4.22.0 and later.
:::

## 1. Set up your subscription object


To get started, create a subscription object containing details of the subscription purchase.

:::::{tab-set}
::::{tab-item} App Store
:sync: appstore

Create an `AdjustAppStoreSubscription` object with the following properties

:::{list-table}
:header-rows: 1

* - Parameter
   - Data type
   - Description
* - `price`
   - Number
   - The price of the subscription
* - `currency`
   - String
   - The currency of the subscription. Formatted as the [`currencyCode`](https://developer.apple.com/documentation/foundation/nslocale/1642836-currencycode?language=objc) of the [`priceLocale`](https://developer.apple.com/documentation/storekit/skproduct/1506145-pricelocale?language=objc) object
* - `transactionId`
   - String
   - Your ID for the transaction
* - `receipt`
   - String
   - The receipt information. See [Apple's App Store receipt documentation](https://developer.apple.com/documentation/foundation/nsbundle/1407276-appstorereceipturl).
:::

See the AdjustAppStoreSubscription class reference for more information.

```js
var subscription = new AdjustAppStoreSubscription(
   price, 
   currency, 
   transactionId, 
   receipt);
```

::::

::::{tab-item} Play Store
:sync: playstore

Create an `AdjustPlayStoreSubscription` object with the following properties:

:::{list-table}
:header-rows: 1

* - Parameter
   - Data type
   - Description
* - `price`
   - Number
   - The price of the subscription
* - `currency`
   - String
   - The code of the currency used in the subscription
* - `sku`
   - String
   -  The ID of the product
* - `orderId`
   - String
   - Your ID for the transaction
* - `signature`
   - String
   - The signature of the purchase data
* - `purchaseToken`
   - String
   - The unique token of the transaction. See [Google's documentation](https://developer.android.com/reference/com/android/billingclient/api/Purchase#getPurchaseToken()) for more information
:::

See the AdjustPlayStoreSubscription class reference for more information.

```js
var subscription = new AdjustPlayStoreSubscription(
   price, 
   currency, 
   sku, 
   orderId, 
   signature, 
   purchaseToken);
```

::::
:::::

### Record the purchase date

You can record the date on which the user purchased a subscription. The SDK returns this data for you to report on.

::::{tab-set}
:::{tab-item} App Store
:sync: appstore

Call the `setTransactionDate` method on your subscription object to record the timestamp of the subscription.

{emphasize-lines="7"}
```js
var subscription = new AdjustAppStoreSubscription(
   price, 
   currency, 
   transactionId, 
   receipt);
//...
subscription.setTransactionDate(transactionDate);
```
:::

:::{tab-item} Play Store
:sync: playstore

Call the `setPurchaseTime` method on your subscription object to record the timestamp of the subscription.

{emphasize-lines="9"}
```js
var subscription = new AdjustPlayStoreSubscription(
   price, 
   currency, 
   sku, 
   orderId, 
   signature, 
   purchaseToken);
//...
subscription.setPurchaseTime(purchaseTime);
```

:::

::::

### Record the purchase region (iOS only)

On iOS devices, you can record the region in which the user purchased a subscription. To do this, call the `setSalesRegion` method on your subscription object and pass the country code as a **string**. This needs to be formatted as the [`countryCode`](https://developer.apple.com/documentation/foundation/nslocale/1643060-countrycode?language=swift) of the [`priceLocale`](https://developer.apple.com/documentation/storekit/skproduct/1506145-pricelocale?language=swift) object

::::{tab-set}
:::{tab-item} App Store
:sync: appstore

{emphasize-lines="7"}
```js
var subscription = new AdjustAppStoreSubscription(
   price, 
   currency, 
   transactionId, 
   receipt);
//...
subscription.setSalesRegion(salesRegion);
```

:::

::::

### Add callback parameters

You can add callback parameters to your subscription object. The SDK appends these parameters to your callback URL. To add callback parameters, call the `addCallbackParameter` method on your subscription object. You can add multiple callback parameters by calling this method multiple times.

::::{tab-set}
:::{tab-item} App Store
:sync: appstore

{emphasize-lines="7,8"}
```js
var subscription = new AdjustAppStoreSubscription(
   price, 
   currency, 
   transactionId, 
   receipt);
//...
subscription.addCallbackParameter("key1", "value1");
subscription.addCallbackParameter("key2", "value2");
```

:::

:::{tab-item} Play Store
:sync: playstore

{emphasize-lines="9,10"}
```js
var subscription = new AdjustPlayStoreSubscription(
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

### Add partner parameters

You can add partner parameters to your subscription object. The SDK sends these to the Adjust server when the user purchases a subscription. The server forwards the information on to your network partner. To add partner parameters, call the `addPartnerParameter` method on your subscription object. You can add multiple partner parameters by calling this method multiple times.

::::{tab-set}
:::{tab-item} App Store
:sync: appstore

{emphasize-lines="7,8"}
```js
var subscription = new AdjustAppStoreSubscription(
   price, 
   currency, 
   transactionId, 
   receipt);
//...
subscription.addPartnerParameter("key1", "value1");
subscription.addPartnerParameter("key2", "value2");
```

:::

:::{tab-item} Play Store
:sync: playstore

{emphasize-lines="9,10"}
```js
var subscription = new AdjustPlayStoreSubscription(
   price, 
   currency, 
   sku, 
   orderId, 
   signature, 
   purchaseToken);
//..
subscription.addPartnerParameter("key1", "value1");
subscription.addPartnerParameter("key2", "value2");
```

:::

::::


## 2. record subscription information

Once you have set up your subscription object, you can record it using the Adjust SDK.

::::{tab-set}
:::{tab-item} App Store
:sync: appstore

Pass your subscription object to the `trackAppStoreSubscription` method to record a user’s subscription purchase.

{emphasize-lines="13"}
```js
var subscription = new AdjustAppStoreSubscription(
   price, 
   currency, 
   transactionId, 
   receipt);
subscription.setTransactionDate(transactionDate);
subscription.setSalesRegion(salesRegion);
subscription.addCallbackParameter("key1", "value1");
subscription.addCallbackParameter("key2", "value2");
subscription.addPartnerParameter("key1", "value1");
subscription.addPartnerParameter("key2", "value2");

Adjust.trackAppStoreSubscription(subscription);
```

:::

:::{tab-item} Play Store
:sync: playstore

Pass your subscription object to the `trackPlayStoreSubscription` method to record a user’s subscription purchase.

{emphasize-lines="14"}
```js
var subscription = new AdjustPlayStoreSubscription(
   price, 
   currency, 
   sku, 
   orderId, 
   signature, 
   purchaseToken);
subscription.setPurchaseTime(purchaseTime);
subscription.addCallbackParameter("key", "value");
subscription.addCallbackParameter("foo", "bar");
subscription.addPartnerParameter("key", "value");
subscription.addPartnerParameter("foo", "bar");

Adjust.trackPlayStoreSubscription(subscription);
```

:::

::::


