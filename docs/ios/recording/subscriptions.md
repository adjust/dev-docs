# Record subscriptions

:::{important}
The following steps only set up subscription tracking within the Adjust SDK. To enable the feature, Adjust need to set up app-specific information. Contact <support@adjust.com> or talk to your Technical Account manager to set this up.
:::

:::{versionadded} v4.22.0
You can record App Store subscriptions and verify their validity with the Adjust SDK. After the user purchases a subscription, create an `ADJSubscription` instance containing the details.
:::

## 1. Set up your subscription object

To get started, you need to create a subscription object containing details of the subscription purchase. To do this, initialize an `ADJSubscription` object using the [`initWithPrice` method](#ios-initwithprice-invocation).

:::{include} /ios/reference/ADJSubscription.md
:start-after: Class method initWithPrice
:end-before: Class method end
:::

### Record the purchase date

You can record the date on which the user purchased a subscription. The SDK returns this data for you to report on. Call the [`setTransactionDate` method](#ios-settransactiondate-invocation) with a timestamp to record this information.

:::{include} /ios/reference/ADJSubscription.md
:start-after: setTransactionDate snippet
:end-before: Snippet end
:::

### Record the purchase region

You can record the region in which the user purchased a subscription. To do this, call the [`setSalesRegion` method](#ios-setsalesregion-invocation) on your subscription object and pass the country code as a **string**. This needs to be formatted as the [`countryCode`](https://developer.apple.com/documentation/foundation/nslocale/1643060-countrycode?language=swift) of the [`priceLocale`](https://developer.apple.com/documentation/storekit/skproduct/1506145-pricelocale?language=swift) object.

:::{include} /ios/reference/ADJSubscription.md
:start-after: setSalesRegion snippet
:end-before: Snippet end
:::

### Add callback parameters

You can add callback parameters to your subscription object. The SDK appends these parameters to your callback URL. To add callback parameters, call the [`addCallbackParameter` method](#ios-adjsubscription-addcallbackparameter-invocation) on your subscription object. You can add multiple callback parameters by calling this method multiple times.

:::{include} /ios/reference/ADJSubscription.md
:start-after: addCallbackParameter snippet
:end-before: Snippet end
:::

### Add partner parameters

You can add partner parameters to your subscription object. The SDK sends these to Adjust's servers when the user purchases a subscription. Adjust's servers forward the information on to your network partner. To add partner parameters, call the [`addPartnerParameter` method](#ios-adjsubscription-addpartnerparameter-invocation) on your subscription object. You can add multiple partner parameters by calling this method multiple times.

:::{include} /ios/reference/ADJSubscription.md
:start-after: addPartnerParameter snippet
:end-before: Snippet end
:::

## 2. Record subscription information

Once you have set up your subscription object, you can record it using the Adjust SDK. Pass your completed object to the [`trackSubscription` method](#ios-tracksubscription-invocation) to record the user's subscription purchase.

:::{include} /ios/reference/Adjust/recording.md
:start-after: trackSubscription snippet
:end-before: Snippet end
:::
