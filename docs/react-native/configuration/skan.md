# Set up SKAdNetwork and conversion values

:::{important} 
This feature is only available on devices running iOS 14 and above.
:::

[SKAdNetwork](https://help.adjust.com/en/article/skadnetwork) is Apple's attribution framework for app install and reinstall attribution. The SKAdNetwork workflow goes like this:

1. Apple gathers attribution information and notifies the relevant ad network.
2. The network sends a postback with this information to Adjust.
3. Adjust displays SKAdNetwork data in [Datascape](https://help.adjust.com/en/article/datascape) and [Data Canvas](https://help.adjust.com/en/article/data-canvas).

## Disable SKAdNetwork communication
The Adjust SDK communicates with SKAdNetwork by default on v4.23.0 and above. The SDK registers for SKAdNetwork attribution upon initialization.

Your config object contains a boolean {code}`isSKAdNetworkHandlingActive` property that controls this behavior. You can disable SKAdNetwork communication by calling the {code}`deactivateSKAdNetworkHandling` method with no argument.

:::{important} 
You must call the {code}`deactivateSKAdNetworkHandling` method _before_ initializing the Adjust SDK in your app.
:::

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.deactivateSKAdNetworkHandling();
//...
Adjust.create(adjustConfig);
```

:::

## Update conversion values
[Conversion values](https://help.adjust.com/en/article/map-conversion-values) are a mechanism used to track user behavior in SKAdNetwork. You can map 64 conditions to values from 0-63 and send this integer value to SKAdNetwork on user install. This gives you insight into how your users interact with your app in the first few days.

If you manage your conversion values with Adjust, the server updates this value in the SDK. You can also update this value by using the {code}`updateConversionValue` method. This method wraps [Apple's `updateConversionValue` method](https://developer.apple.com/documentation/storekit/skadnetwork/3566697-updateconversionvalue). It accepts an integer argument representing your updated conversion value.

:::{tab-set-code}
```js
Adjust.updateConversionValue(6);
```
:::

::::{dropdown} Example

This example demonstrates how to update a conversion value to `10` in response to a user triggering an event.

:::{tab-set-code}

{emphasize-lines="2"}
```js
function _onPress_trackSimpleEvent() {
    Adjust.updateConversionValue(10);
    };
```
:::

::::

## Listen for changes to conversion values

You can configure the Adjust SDK to listen for when a user's conversion value updates. Your config object contains a {code}`setConversionValueUpdatedCallbackListener` method that listens for updates. This method accepts a listener function as its argument.

::::{dropdown} Example

This example demonstrates how to log the following to the console when the conversion value updates:

- A message confirming the conversion value updated
- The new conversion value

:::{important}
You must call the {code}`setConversionValueUpdatedCallbackListener` method _before_ initializing the Adjust SDK in your app.
:::

:::{tab-set-code}

```js
import {
    Adjust,
    AdjustEvent,
    AdjustConfig
  } from 'react-native-adjust';
  import { AdjustOaid } from 'react-native-adjust-oaid';
  
  const App: () => React$Node = () => {
    Adjust.getSdkVersion(function(sdkVersion) {
      console.log("Adjust SDK version: " + sdkVersion);
    });
    
   const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);

   adjustConfig.setConversionValueUpdatedCallbackListener(function(conversionValue) {
       console.log("Conversion value updated. Callback received");
       console.log("Conversion value: " + conversionValue.conversionValue);
     });

   Adjust.create(adjustConfig);
   
};

export default App;
```

:::

::::

