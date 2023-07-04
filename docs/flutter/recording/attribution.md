# Get attribution information

:::{versionadded} v4.26.0

When a user interacts with a campaign link, their attribution information updates. This can happen if the user interacts with a [deep link](https://help.adjust.com/en/article/deep-links). The SDK can listen for attribution changes and call a function when it detects an update.

To configure your callback function, call the [`attributionCallback` method](#flutter-attributionCallback-invocation) with your function name as an argument.

:::{important}
You must call the `attributionCallback` method **before** initializing the Adjust SDK in your app.
:::

:::{include} /flutter/reference/AdjustConfig/setup.md
:start-after: attributionCallback snippet
:end-before: Snippet end
:::

Within your delegate function, you have access to the user's Attribution object. See the [`AdjustAttribution` class reference](/flutter/reference/AdjustAttribution.md) for a list of available parameters.

## Get current attribution information

When a user installs your app, Adjust attributes the install to a campaign. The Adjust SDK gives you access to campaign attribution details for your install. To return this information, call the [`getAttribution` method](#flutter-getattribution-invocation).
:::

This method returns an Attribution object. See the [`AdjustAttribution` class reference](/flutter/reference/AdjustAttribution.md) for a list of available properties.

:::{note}
You can get information about current attribution only after Adjust tracks an app install and an attribution callback has been already triggered.
:::

:::{include} /flutter/reference/Adjust/recording.md
:start-after: getAttribution snippet
:end-before: Snippet end
:::
