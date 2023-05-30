# AdjustAttribution class

The `AdjustAttribution` class contains details about the current attribution status of the device.

## Properties

The following properties can be accessed by calling the [`getAttribution` method](#react-native-getattribution-invocation). Any values that aren't populated for the user are returned as a null value.

:::{note}
The following values can only be accessed if the [`needsCost`](#react-native-setneedscost-invocation) property on your `AdjustConfig` instance is `true`:

-  `costType`
-  `costAmount`
-  `costCurrency`

:::

:::{list-table}
:header-rows: 1

-  -  Values
   -  Data type
   -  Description
-  -  `trackerToken`
   -  String
   -  The token of the tracker to which the device is currently attributed
-  -  `trackerName`
   -  String
   -  The name of the tracker to which the device is currently attributed
-  -  `network`
   -  String
   -  The name of the network to which the device is currently attributed
-  -  `campaign`
   -  String
   -  The name of the campaign to which the device is currently attributed
-  -  `adgroup`
   -  String
   -  The name of the adgroup to which the device is currently attributed
-  -  `creative`
   -  String
   -  The name of the creative to which the device is currently attributed
-  -  `clickLabel`
   -  String
   -  The [click label](https://help.adjust.com/en/article/user-rewards) that the install is tagged with
-  -  `adid`
   -  String
   -  The unique Adjust ID assigned to the device
-  -  `costType`
   -  String
   -  The campaign pricing model (for example cpi)
-  -  `costAmount`
   -  Number
   -  The cost of the install.
-  -  `costCurrency`
   -  String
   -  The [three character ISO 4217 code](https://www.iban.com/currency-codes) of the currency associated with the cost.
-  -  `fbInstallReferrer`
   -  String
   -  The [Facebook install referrer](https://developers.facebook.com/docs/app-ads/install-referrer/). _Android only_.

:::
