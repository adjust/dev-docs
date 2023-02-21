# Set up SKAdNetwork and conversion values

:::{important}
This feature is only available on devices running iOS 14 and above.
:::

SKAdNetwork  is Apple's attribution framework for app install and reinstall attribution. The SKAdNetwork workflow goes like this:

1. Apple gathers attribution information and notifies the relevant ad network.
2. The network sends a postback with this information to Adjust.
3. Adjust displays SKAdNetwork data in Datascape and Data Canvas.

## Disable SKAdNetwork communication

```{versionadded} v4.23.0
The Adjust SDK communicates with SKAdNetwork by default on v4.23.0 and above. The SDK registers for SKAdNetwork attribution upon initialization.
```

Your config object contains a boolean `isSKAdNetworkHandlingActive` property that controls this behavior. You can disable SKAdNetwork communication by calling the [`deactivateSKAdNetworkHandling` method](unity-deactivateSKAdNetworkHandling-invocation) with no argument.

```{include} /unity/fragments/AdjustConfig.md
:start-after: deactivateSKAdNetworkHandling
:end-before: methodEnd
```

## Update conversion values

Conversion values are a mechanism used to track user behavior in SKAdNetwork. You can map 64 conditions to values from 0 through 63 and send this integer value to SKAdNetwork on user install. This gives you insight into how your users interact with your app in the first few days.

If you manage your conversion values with Adjust, the servers update this value in the SDK. You can also update this value by using the [`updateConversionValue` method](unity-updateConversionValue-invocation). This method wraps [Apple's `updateConversionValue` method](https://developer.apple.com/documentation/storekit/skadnetwork/3566697-updateconversionvalue). It accepts an integer argument representing your updated conversion value.

```{include} /unity/fragments/AdjustConfig.md
:start-after: updateConversionValue
:end-before: methodEnd
```

:::{dropdown} Example

This example demonstrates how to update a conversion value to `10` in response to a user triggering an event.

```{code-block} cs
:emphasize-lines: 2

public void OnButtonClick() {
   Adjust.updateConversionValue(10);
}
```
:::

## Listen for changes to conversion values

You can configure the Adjust SDK to listen for when a user's conversion value updates. Your config object contains a [`setConversionValueUpdatedCallbackDelegate` method](unity-setConversionValueUpdatedCallbackDelegate-invocation) that listens for updates. This method accepts a delegate function as its argument.

:::{dropdown} Example

This example demonstrates how to emit the following to the console when the conversion value updates:

* A message confirming the conversion value update
* The new conversion value

```{code-block} cs
:emphasize-lines: 8, 14-17

using com.adjust.sdk;

public class ExampleGUI : MonoBehaviour {
    void OnGUI() {
        if (GUI.Button(new Rect(0, 0, Screen.width, Screen.height), "callback")) {
            AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
            adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
            adjustConfig.setConversionValueUpdatedDelegate(ConversionValueUpdatedCallback);

            Adjust.start(adjustConfig);
        }
    }

    private void ConversionValueUpdatedCallback(int conversionValue) {
        Debug.Log("Conversion value updated. Callback received");
        Debug.Log("Conversion value: " + conversionValue);
    }
}
```
:::
