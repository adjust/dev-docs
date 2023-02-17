# Record subscriptions

:::{important}
The following steps only set up subscription tracking within the Adjust SDK. To enable the feature, Adjust need to set up app-specific information. Contact <support@adjust.com> or talk to your Technical Account manager to set this up.
:::

```{versionadded} v4.22.0
You can record App Store and Play Store subscriptions and verify their validity with the Adjust SDK. After the user purchases a subscription, create an `AdjustAppStoreSubscription` or `AdjustPlayStoreSubscription` instance containing the details.
```

## 1. Set up your subscription object

To get started, you need to create a subscription object containing details of the subscription purchase.

::::::{tab-set}
:::::{tab-item} App Store
:sync: appstore

Create an `AdjustAppStoreSubscription` object with the following properties

```{list-table}
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
   - The receipt information
```

```{include} /unity/fragments/AdjustAppStoreSubscription.md
:start-after: AdjustAppStoreSubscription
:end-before: methodEnd
```
:::::
:::::{tab-item} Play Store
:sync: playstore

Create an `AdjustPlayStoreSubscription` object with the following properties

```{list-table}
:header-rows: 1

* - Parameter
   - Data type
   - Description
* - `price`
   - Number
   - The price of the subscription
* - `currency`
   - String
   - The currency of the subscription
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
```

```{include} /unity/fragments/AdjustPlayStoreSubscription.md
:start-after: AdjustPlayStoreSubscription
:end-before: methodEnd
```
:::::
::::::

### Record the purchase date

You can record the date on which the user purchased a subscription. The SDK returns this data for you to report on. 

::::::{tab-set}
:::::{tab-item} App Store
:sync: appstore

Call the [`setTransactionDate` method](unity-setTransactionDate-invocation) method on your subscription object to record the timestamp of the subscription.

```{include} /unity/fragments/AdjustAppStoreSubscription.md
:start-after: setTransactionDate
:end-before: methodEnd
```
:::::
:::::{tab-item} Play Store
:sync: playstore

Call the [`setPurchaseTime` method](unity-setPurchaseTime-invocation) on your subscription object to record the timestamp of the subscription.

```{include} /unity/fragments/AdjustPlayStoreSubscription.md
:start-after: setPurchaseTime
:end-before: methodEnd
```
:::::
::::::

### Record the purchase region (iOS only)

You can record the region in which the user purchased a subscription. To do this, call the [`setSalesRegion` method](unity-setSalesRegion-invocation) on your subscription object and pass the country code as a **string**. This needs to be formatted as the [`countryCode`](https://developer.apple.com/documentation/foundation/nslocale/1643060-countrycode?language=swift) of the [`priceLocale`](https://developer.apple.com/documentation/storekit/skproduct/1506145-pricelocale?language=swift) object.

```{include} /unity/fragments/AdjustAppStoreSubscription.md
:start-after: setSalesRegion
:end-before: methodEnd
```

### Add callback parameters

You can add callback parameters to your subscription object. The SDK appends these parameters to your callback URL. To add callback parameters, call the `addCallbackParameter` method on your subscription object. You can add multiple callback parameters by calling this method multiple times.

::::::{tab-set}
:::::{tab-item} App Store
:sync: appstore
```{include} /unity/fragments/AdjustAppStoreSubscription.md
:start-after: addCallbackParameter
:end-before: methodEnd
```
:::::
:::::{tab-item} Play Store
:sync: playstore
```{include} /unity/fragments/AdjustPlayStoreSubscription.md
:start-after: addCallbackParameter
:end-before: methodEnd
```
:::::
::::::

### Add partner parameters

You can add partner parameters to your subscription object. The SDK sends these to Adjust's servers when the user purchases a subscription. Adjust's servers forward the information on to your network partner. To add partner parameters, call the `addPartnerParameter` method on your subscription object. You can add multiple partner parameters by calling this method multiple times.

::::::{tab-set}
:::::{tab-item} App Store
:sync: appstore
```{include} /unity/fragments/AdjustAppStoreSubscription.md
:start-after: addPartnerParameter
:end-before: methodEnd
```
:::::
:::::{tab-item} Play Store
:sync: playstore
```{include} /unity/fragments/AdjustPlayStoreSubscription.md
:start-after: addPartnerParameter
:end-before: methodEnd
```
:::::
::::::

## 2. Record subscription information

Once you have set up your subscription object, you can record it using the Adjust SDK.

::::::{tab-set}
:::::{tab-item} App Store
:sync: appstore

Pass your subscription object to the [`trackAppStoreSubscription` method](unity-trackAppStoreSubscription-invocation) method to record the user's subscription purchase.

```{include} /unity/fragments/Adjust.md
:start-after: trackAppStoreSubscription
:end-before: methodEnd
```
:::::
:::::{tab-item} Play Store
:sync: playstore

Pass your subscription object to the [`trackPlayStoreSubscription` method](unity-trackPlayStoreSubscription-invocation) method to record the user's subscription purchase.

```{include} /unity/fragments/Adjust.md
:start-after: trackPlayStoreSubscription
:end-before: methodEnd
```
:::::
::::::

