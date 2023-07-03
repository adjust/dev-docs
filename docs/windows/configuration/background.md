# Record activity in the background

By default, the Adjust SDK pauses the sending of requests when your app is running in the background. You can configure the SDK to send requests in the background by enabling the background recording feature.

Your config object contains a boolean `sendInBackground` property that controls this behavior. You can set this property by calling the [`SendInBackground` method](#windows-sendinbackground-invocation) on your config instance with a boolean value.

:::{important}
You must set the `sendInBackground` property _before_ you initialize the Adjust SDK.
:::

:::{include} /windows/reference/AdjustConfig/setup.md
:start-after: SendInBackground snippet
:end-before: Snippet end
:::
