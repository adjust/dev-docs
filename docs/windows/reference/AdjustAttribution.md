# AdjustAttribution class

The `AdjustAttribution` class contains details about the current attribution status of the device.

## Properties

The following properties can be accessed by calling the [`GetAttribution` method](#windows-getattribution-invocation). Any values that aren't populated for the user are returned as a null value.

:::{list-table}
:header-rows: 1

-  -  Values
   -  Data type
   -  Description
-  -  `TrackerToken`
   -  String
   -  The link token to which the device is currently attributed
-  -  `TrackerName`
   -  String
   -  The link name to which the device is currently attributed
-  -  `Network`
   -  String
   -  The name of the network to which the device is currently attributed
-  -  `Campaign`
   -  String
   -  The name of the campaign to which the device is currently attributed
-  -  `Adgroup`
   -  String
   -  The name of the adgroup to which the device is currently attributed
-  -  `Creative`
   -  String
   -  The name of the creative to which the device is currently attributed
-  -  `ClickLabel`
   -  String
   -  The [click label](https://help.adjust.com/en/article/user-rewards) that the install is tagged with
-  -  `Adid`
   -  String
   -  The unique Adjust ID assigned to the device

:::
