# Set up SKAdNetwork and conversion values

:::{important}
This feature is only available on devices running iOS 14 and above.
:::

[SKAdNetwork](https://help.adjust.com/en/article/skadnetwork) is Apple's attribution framework for app install and reinstall attribution. The SKAdNetwork workflow goes like this:

1. Apple gathers attribution information and notifies the relevant ad network.
2. The network sends a postback with this information to Adjust.
3. Adjust displays SKAdNetwork data in [Datascape](https://help.adjust.com/en/article/datascape) and [Data Canvas](https://help.adjust.com/en/article/data-canvas).

## Disable SKAdNetwork communication

:::{versionadded} v4.23.0
The Adjust SDK communicates with SKAdNetwork by default on v4.23.0 and above. The SDK registers for SKAdNetwork attribution upon initialization.
:::

Your config object contains a boolean `_skAdNetworkHandling` property that controls this behavior. You can disable SKAdNetwork communication by calling the [`deactivateSKAdNetworkHandling` method](#flutter-deactivateskadnetworkhandling-invocation) with no argument.

:::{important}
You must call the `deactivateSKAdNetworkHandling` method before initializing the Adjust SDK in your app.
:::

:::{include} /flutter/reference/AdjustConfig/setup.md
:start-after: deactivateSKAdNetworkHandling snippet
:end-before: Snippet end
:::

## Update conversion values

[Conversion values](https://help.adjust.com/en/article/map-conversion-values) are a mechanism used to track user behavior in SKAdNetwork. You can map 64 conditions to values from 0 through 63 and send this integer value to SKAdNetwork on user install. This gives you insight into how your users interact with your app in the first few days.

If you manage your conversion values with Adjust, the servers update this value in the SDK. You can also update this value by using the [`updateConversionValue` method](#flutter-updateconversionvalue-invocation). This method wraps [Apple's `updateConversionValue` method](https://developer.apple.com/documentation/storekit/skadnetwork/3566697-updateconversionvalue). It accepts an integer argument representing your updated conversion value.

:::{include} /flutter/reference/Adjust/skan-att.md
:start-after: updateConversionValue snippet
:end-before: Snippet end
:::

## Listen for changes to conversion values

You can configure the Adjust SDK to listen for when a user's conversion value updates. Your config object contains a [`conversionValueUpdatedCallback` method](#flutter-conversionvalueupdatedcallback-invocation) that listens for updates. This method accepts a delegate function as its argument.

:::{important}
You must call the `conversionValueUpdatedCallback` method before initializing the Adjust SDK in your app.
:::

:::{include} /flutter/reference/AdjustConfig/setup.md
:start-after: conversionValueUpdatedCallback snippet
:end-before: Snippet end
:::

:::{dropdown} Example

This example demonstrates how to emit the following to the console when the conversion value updates:

* A message confirming the conversion value update
* The new conversion value

```dart
// main.dart

import 'package:adjust_sdk/adjust.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

initPlatformState() async {
   AdjustConfig config =
      new AdjustConfig('{YourAppToken}', AdjustEnvironment.sandbox);
   config.logLevel = AdjustLogLevel.verbose;

config.conversionValueUpdatedCallback = (num? conversionValue) {
      print('[Adjust]: Received conversion value update: ' +
         conversionValue!.toString());
   };

Adjust.start(config);

}

```
:::
