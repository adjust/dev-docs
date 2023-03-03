# Get attribution information

When a user interacts with a campaign link, their attribution information updates. This can happen if the user interacts with a [deep link](https://help.adjust.com/en/article/deep-links). The SDK can listen for attribution changes and call a function when it detects an update.

To configure your callback function, call the [`setOnAttributionChangedListener` method](#android-setonattributionchangedlistener-invocation) with your function name as an argument.

:::{important}
You must call the `setOnAttributionChangedListener` method **before** initializing the Adjust SDK in your app.
:::

:::{include} /android/reference/AdjustConfig/setup.md
:start-after: setOnAttributionChangedListener snippet
:end-before: Snippet end
:::

Within your delegate function, you have access to the user's Attribution object. See the [`AdjustAttribution` class reference](/android/reference/AdjustAttribution.md) for a list of available parameters.

## Facebook install referrer

The Adjust SDK receives Facebook install referrer information as a **string** property in the [`AdjustAttribution` object](/android/reference/AdjustAttribution.md). You can access this information by serializing the content as a JSON object.

:::{include} /android/reference/AdjustConfig/setup.md
:start-after: setOnAttributionChangedListener Facebook snippet
:end-before: Snippet end
:::

## Get current attribution information

When a user installs your app, Adjust attributes the install to a campaign. The Adjust SDK gives you access to campaign attribution details for your install. To return this information, call the [`getAttribution` method](#android-getattribution-invocation).

This method returns an Attribution object. See the [`AdjustAttribution` class reference](/android/reference/AdjustAttribution.md) for a list of available properties.

:::{include} /android/reference/Adjust/recording.md
:start-after: getAttribution snippet
:end-before: Snippet end
:::
