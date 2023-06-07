# Get attribution information

:::{note}
This method is available in Adjust SDK v4.26.0 and later.
:::

When a user interacts with a campaign link, their attribution information updates. This can happen if the user interacts with a [deep link](https://help.adjust.com/en/article/deep-links). The SDK can listen for attribution changes and call a function when it detects an update.

To configure your callback function, call the `setAttributionCallbackListener` with your function name as an argument.

:::{tab-set-code}

```js
var adjustConfig = new AdjustConfig(appToken, environment);

adjustConfig.setAttributionCallbackListener(function () {
   // Printing all attribution properties.
   console.log("Attribution property");
});

Adjust.create(adjustConfig);
```

:::

Within your listener function, you have access to the user's `Attribution` object. See the [`AdjustAttribution` class reference](/react-native/reference/AdjustAttribution.md) for a list of available parameters.

## Get current attribution information

When a user installs your app, Adjust attributes the install to a campaign. The Adjust SDK gives you access to campaign attribution details for your install. To return this information, call the `getAttribution` method.

:::{note}
You can get information about current attribution only after Adjust tracks an app install and an attribution callback has been already triggered.
:::

:::{tab-set-code}

```js
AdjustAttribution attribution = Adjust.getAttribution();
```

:::

This method returns an `Attribution` object. See the [`AdjustAttribution` class reference](/react-native/reference/AdjustAttribution.md) for a list of available parameters.
