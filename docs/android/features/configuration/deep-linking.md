# Set up deep linking

You can create deep links to take users to specific pages in your app. The Adjust SDK uses different logic depending on if the user already has your app installed on their device:

Direct deep linking
   : Occurs if the user already has your app installed. The link takes the user to the page specified in the link

Deferred deep linking
   : Occurs if the user doesn't have your app installed. The link takes the user to a storefront to install your app first. After the user installs the app, it opens to the page specified in the link.

The SDK can read deep link data after a user opens your app from a link.

## Set up deep linking

If a user has your app installed, it opens when they interact with a link containing deep link information. The Adjust SDK contains tools to parse deep link information for use throughout your app. To set up deep linking, you need to choose a unique **scheme name**.

You can launch a specific activity when a user interacts with a deep link. To do this:

1. Assign your **scheme name** to an activity in your {file}`AndroidManifest.xml` file.
2. Add an `intent-filter` node to 

## Deferred deep linking

### Disable deferred deep linking

The SDK opens deferred deep links by default. You can configure this by passing a **boolean** argument to the [`setLaunchDeferredDeeplink` method](unity-setLaunchDeferredDeeplink-invocation).

:::{include} /unity/reference/AdjustConfig/setup.md
:start-after: setLaunchDeferredDeeplink snippet
:end-before: Snippet end
:::

### Set up a deferred deep link delegate

You can configure the Adjust SDK to call a delegate function when it receives a deferred deep link. This delegate function receives the deep link as a **string** argument.

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 1-3, 6

private void DeferredDeeplinkCallback(string deeplinkURL) {
   //...
}

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
adjustConfig.setDeferredDeeplinkDelegate(DeferredDeeplinkCallback);
Adjust.start(adjustConfig);
```
:::
::::

:::::{dropdown} Example

This example demonstrates how to log a deep link address when the user opens a deferred deep link.

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
private void LogDeepLink(string deepLinkURL) {
 Debug.Log("Deeplink URL: " + deeplinkURL);
}
//...
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
adjustConfig.setDeferredDeeplinkDelegate(LogDeepLink);
//...
Adjust.start(adjustConfig);
```
:::
::::
:::::
