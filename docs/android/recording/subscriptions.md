# Record subscriptions

:::{important}
The following steps only set up subscription tracking within the Adjust SDK. To enable the feature, Adjust need to set up app-specific information. Contact <support@adjust.com> or talk to your Technical Account manager to set this up.
:::

You can record Play Store subscriptions and verify their validity with the Adjust SDK. After the user purchases a subscription, create an [`AdjustPlayStoreSubscription` instance](/android/reference/AdjustPlayStoreSubscription.md) containing the details.

## 1. Set up your subscription object

To get started, you need to create a subscription object containing details of the subscription purchase.

Create an `AdjustPlayStoreSubscription` object with the following properties

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
:::

:::{include} /android/reference/AdjustPlayStoreSubscription.md
:start-after: AdjustPlayStoreSubscription snippet
:end-before: Snippet end
:::

### Record the purchase date

You can record the date on which the user purchased a subscription. The SDK returns this data for you to report on.

Call the [`setPurchaseTime` method](#android-setpurchasetime-invocation) on your subscription object to record the timestamp of the subscription.

:::{include} /android/reference/AdjustPlayStoreSubscription.md
:start-after: setPurchaseTime snippet
:end-before: Snippet end
:::

### Add callback parameters

You can add callback parameters to your subscription object. The SDK appends these parameters to your callback URL. To add callback parameters, call the [`addCallbackParameter` method](#android-adjustplaystoresubscription-addcallbackparameter-invocation) on your subscription object. You can add multiple callback parameters by calling this method multiple times.

:::{include} /android/reference/AdjustPlayStoreSubscription.md
:start-after: addCallbackParameter snippet
:end-before: Snippet end
:::

### Add partner parameters

You can add partner parameters to your subscription object. The SDK sends these to Adjust's servers when the user purchases a subscription. Adjust's servers forward the information on to your network partner. To add partner parameters, call the [`addPartnerParameter` method](#android-adjustplaystoresubscription-addpartnerparameter-invocation) on your subscription object. You can add multiple partner parameters by calling this method multiple times.

:::{include} /android/reference/AdjustPlayStoreSubscription.md
:start-after: addPartnerParameter snippet
:end-before: Snippet end
:::

## 2. Record subscription information

Once you have set up your subscription object, you can record it using the Adjust SDK.

Pass your subscription object to the [`trackPlayStoreSubscription` method](#android-trackplaystoresubscription-invocation) method to record the user's subscription purchase.

:::{include} /android/reference/Adjust/recording.md
:start-after: trackPlayStoreSubscription snippet
:end-before: Snippet end
:::
