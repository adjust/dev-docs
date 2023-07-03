# Get attribution information

When a user interacts with a campaign link or [deep link](https://help.adjust.com/en/article/deep-links) their attribution information can update. The SDK can listen for attribution changes and call a function when it detects an update.

To configure your attribution update callback function, call the [`AttributionChanged` method](#windows-attributionchanged-invocation) with your function name as an argument.

:::{important}
You must call the `AttributionChanged` method **before** initializing the Adjust SDK in your app.
:::

:::{include} /windows/reference/AdjustConfig/setup.md
:start-after: AttributionChanged snippet 1
:end-before: Snippet end
:::

:::{include} /windows/reference/AdjustConfig/setup.md
:start-after: AttributionChanged snippet 2
:end-before: Snippet end
:::

Within your delegate function, you have access to the user's Attribution object. See the [`AdjustAttribution` class reference](/windows/reference/AdjustAttribution.md) for a list of available parameters.

## Get current attribution information

:::{versionadded} v4.12.0
When a user installs your app, Adjust attributes the install to either a campaign or an organic source. The Adjust SDK gives you access to campaign attribution details for your install. To return this information, call the [`GetAttribution` method](#windows-getattribution-invocation).
:::

This method returns an Attribution object. See the [`AdjustAttribution` class reference](/windows/reference/AdjustAttribution.md) for a list of available properties.

:::{include} /windows/reference/Adjust/recording.md
:start-after: GetAttribution snippet
:end-before: Snippet end
:::
