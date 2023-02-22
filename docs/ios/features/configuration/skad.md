# Set up SKAdNetwork and conversion values

:::{important}
This feature is only available on devices running iOS 14 and above.
:::

{abbr}`SKAdNetwork (StoreKit Ad Network)`  is Apple's attribution framework for app install and reinstall attribution. The SKAdNetwork workflow goes like this:

1. Apple gathers attribution information and notifies the relevant ad network.
2. The network sends a postback with this information to Adjust.
3. Adjust displays SKAdNetwork data in [Datascape](https://help.adjust.com/en/article/welcome-to-datascape) and [Data Canvas](https://help.adjust.com/en/article/data-canvas).

## Disable SKAdNetwork communication

:::{versionadded} v4.23.0
The Adjust SDK communicates with SKAdNetwork by default on v4.23.0 and above. The SDK registers for SKAdNetwork attribution upon initialization.
:::

Your config object contains a boolean `isSKAdNetworkHandlingActive` property that controls this behavior. You can disable SKAdNetwork communication by calling the [`deactivateSKAdNetworkHandling` method](ios-deactivateSKAdNetworkHandling-invocation) with no argument.

:::{important}
You must call the `deactivateSKAdNetworkHandling` method *before* initializing the Adjust SDK.
:::

:::{include} /ios/reference/ADJConfig/setup.md
:start-after: deactivateSKAdNetworkHandling snippet
:end-before: Snippet end
:::

## Update conversion values

Conversion values are a mechanism used to track user behavior in SKAdNetwork. You can map 64 conditions to values from 0 through 63 and send this integer value to SKAdNetwork on user install. This gives you insight into how your users interact with your app in the first few days.

If you manage your conversion values with Adjust, the servers update this value in the SDK. You can also update this value by using the [`updateConversionValue` method](ios-updateConversionValue-invocation). This method wraps [Apple's `updateConversionValue` method](https://developer.apple.com/documentation/storekit/skadnetwork/3566697-updateconversionvalue). It accepts an integer argument representing your updated conversion value.

:::{include} /ios/reference/Adjust/skan-att.md
:start-after: updateConversionValue snippet
:end-before: Snippet end
:::

:::::{dropdown} Example

This example demonstrates how to update a conversion value to `10` in response to a user triggering an event.

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
func onButtonClick() {
   Adjust.updateConversionValue(10)
}
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
- (void)onButtonClick {
   [Adjust updateConversionValue:10];
}
```
:::::

### Set up completion handlers

:::{versionadded} v4.33.0
The Adjust SDK contains wrappers for Apple's `updatePostbackConversionValue` methods. These methods provide more options for handling SKAdNetwork postbacks, including the option to handle failures.
:::

The following methods are supported:

* [`updatePostbackConversionValue(_:completionHandler:)`](https://developer.apple.com/documentation/storekit/skadnetwork/3919928-updatepostbackconversionvalue): update conversion values and handle failures.
* [`updatePostbackConversionValue(_:completionHandler:coarseValue:)`](https://developer.apple.com/documentation/storekit/skadnetwork/4090669-updatepostbackconversionvalue/) : update both fine and coarse conversion values and handle failures.
updatePostbackConversionValue
* [`updatePostbackConversionValue(_:coarseValue:lockWindow:completionHandler:)`](https://developer.apple.com/documentation/storekit/skadnetwork/4097267-updatepostbackconversionvalue): update both fine and coarse conversion values, determine whether to send the postback before the end of the conversion value window, and handle errors.

:::{list-table}
:header-rows: 1

* - Argument
   - Data type
   - Description
* - `fineValue`
   - Integer
   - Your conversion value. Must be between 0 and 63
* - `coarseValue`
   - [`SKAdNetwork.CoarseConversionValue`](https://developer.apple.com/documentation/storekit/skadnetwork/coarseconversionvalue)
   - The coarse conversion value. This value is used if your app doesn't have sufficient installs to reach the privacy threshold.
      * `SKAdNetworkCoarseConversionValueLow`
      * `SKAdNetworkCoarseConversionValueMedium`
      * `SKAdNetworkCoarseConversionValueHigh`
* - `lockWindow`
   - Boolean
   - Whether to send the postback before the conversion window ends. Use `true` to tell the system to send the postback without waiting for the end of the conversion window. Defaults to `false`.
* - `completion`
   - Function
   - An optional completion handler you provide to catch and handle any errors this method encounters when you update a conversion value. Set this value to `nil` if you don’t provide a handler.
:::

:::::{dropdown} Example
::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
if #available(iOS 16.1, *) {
    Adjust.updatePostbackConversionValue(
        1,
        coarseValue: SKAdNetwork.CoarseConversionValue.low.rawValue,
        lockWindow: false) { error in
        if let error {
            print(String(format: "An error occurred during completion: %a", error))
        }
    }
}
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
if (@available(iOS 16.1, *)) {
  [Adjust updatePostbackConversionValue:1
                            coarseValue:SKAdNetworkCoarseConversionValueLow
                             lockWindow:NO
                      completionHandler:^(NSError *_Nullable error) {
                        NSLog(@"An error occurred during completion: %a", error);
                      }];
}
```
:::
::::
:::::

## Listen for changes to conversion values

If you use Adjust to manage conversion values, the Adjust's servers send conversion value updates to the SDK. You can set up a delegate function to listen for these changes using the `adjustConversionValueUpdated` method.

:::::{dropdown} Example
This example demonstrates how to log the following when the conversion value updates:

* A message confirming the conversion value update
* The new conversion value

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
func adjustConversionValueUpdated(_ conversionValue: NSNumber?) {
    print("Conversion value: \(conversionValue ?? 0)")
}
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
- (void)adjustConversionValueUpdated:(NSNumber *)conversionValue {
    NSLog(@"Conversion value: %@", conversionValue);
}
```
:::
::::
:::::

## SKAdNetwork 4.0 callbacks

:::{versionadded} v4.33.0
SKAdNetwork 4.0 postbacks contain some additional information to give advertisers more insight into their users. When Adjust's servers update conversion values, this additional information is sent in a payload. You can access this information with the `adjustConversionValueUpdated` callback method.
:::

:::{list-table}
:header-rows: 1

* - Arguments
   - Data type
   - Description
* - `fineValue`
   - Integer
   - The conversion value sent by Adjust's servers
* - `coarseValue`
   - String
   - The coarse conversion value. This value is used if your app doesn't have sufficient installs to reach the privacy threshold. Accepted values:
      * `low`
      * `medium`
      * `high`
* - `lockWindow`
   - Integer
   - Whether to send the postback before the conversion window ends. `1` indicates the postback will be sent before the conversion window ends. Defaults to `0` in SKAdNetwork 4.0 postbacks and `nil` in older SKAdNetwork versions
:::

:::::{dropdown} Example

This example desmontrates how to log the the fine conversion value, the coarse conversion value, and whether the SKAdNetwork postback is set to send before the conversion window ends.

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
func adjustConversionValueUpdated(_ fineValue: NSNumber?, coarseValue: String?, lockWindow: NSNumber?) {
    print("Fine conversion value: \(fineValue ?? 0)")
    print("Coarse conversion value: \(coarseValue ?? "")")
    print("Will send before conversion value window ends: \(lockWindow?.boolValue ?? nil)")
}
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
- (void)adjustConversionValueUpdated:(NSNumber *)fineValue coarseValue:(NSString *)coarseValue lockWindow:(NSNumber *)lockWindow {
    NSLog(@"Fine conversion value: %@", fineValue);
    NSLog(@"Coarse conversion value: %@", coarseValue);
    NSLog(@"Will send before conversion value window ends: %u", [lockWindow boolValue]);
}
```
:::
::::
:::::

## Set up direct install postbacks

:::{note}
Direct install postbacks contain only SKAdNetwork information. Information such as campaign data isn't included in these postbacks.
:::

You can configure your app to send a copy of winning SKAdNetwork callbacks to Adjust. This enables you to use SKAdNetwork information in your analytics.

To set up direct install postbacks, you need to add the Adjust callback URL to your {file}`Info.plist` file:

1. Select {guilabel}`Info.plist` in the Project navigator in Xcode.
2. Select the Add button ({guilabel}`+`) beside a key in the property list editor and press {kbd}`Return`.
3. Enter _`NSAdvertisingAttributionReportEndpoint`_ as the key name.
4. Set the {guilabel}`Type` to **String** in the pop up menu.
5. Enter the address _`https://adjust-skadnetwork.com`_.

:::{seealso}
See Apple's guide on [Configuring an Advertised App](https://developer.apple.com/documentation/storekit/skadnetwork/configuring_an_advertised_app) for more information.
:::
