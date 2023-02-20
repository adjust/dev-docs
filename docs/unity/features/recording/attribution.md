# Get attribution information

When a user interacts with a campaign link, their attribution information updates. This can happen if the user interacts with a [deep link](https://help.adjust.com/en/article/deep-links). The SDK can listen for attribution changes and call a function when it detects an update.

To configure your callback function, call the [`setAttributionChangedDelegate` method](unity-setAttributionChangedDelegate-invocation) with your function name as an argument.

:::{important}
You must call the `setAttributionChangedDelegate` method **before** initializing the Adjust SDK in your app.
:::


```{include} /unity/fragments/AdjustConfig.md
:start-after: setAttributionChangedDelegate
:end-before: methodEnd
```

Within your delegate function, you have access to the user's Attribution object. See the [`AdjustAttribution` class reference](/unity/reference/AdjustAttribution.md) for a list of available parameters.


## Get current attribution information

```{versionadded} v4.11.0
When a user installs your app, Adjust attributes the install to a campaign. The Adjust SDK gives you access to campaign attribution details for your install. To return this information, call the [`getAttribution` method](unity-getAttribution-invocation).
```

This method returns an Attribution object. See the [`AdjustAttribution` class reference](/unity/reference/AdjustAttribution.md) for a list of available properties.

```{include} /unity/fragments/Adjust.md
:start-after: getAttribution
:end-before: methodEnd
```
