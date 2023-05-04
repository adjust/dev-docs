# Set up deep linking
You can create [deep links](https://help.adjust.com/en/article/deep-links) to take users to specific pages in your app. The Adjust SDK uses different logic depending on if the user already has your app installed on their device:

- **Direct deep linking** occurs if the user already has your app installed. The link takes the user to the page specified in the link.
- **Deferred deep linking** occurs if the user doesn't have your app installed. The link takes the user to a storefront to install your app first. After the user installs the app, it opens to the page specified in the link.
The SDK can read deep link data after a user opens your app from a tracker URL.

## Set up deep linking
If a user has your app installed, it opens when they interact with a URL containing a deep link. The Adjust SDK contains tools to parse deep link information for use throughout your app.

To set up deep linking on your React Native app:

1. Set up deep linking on an app level. Follow the instructions linked below to set up deep linking on your target platform:
   - [iOS](https://help.adjust.com/en/article/deep-linking-ios-sdk)
   - [Android](https://help.adjust.com/en/article/deep-linking-android-sdk)
2. Refer to the [React Native documentation](https://reactnative.dev/docs/linking.html) and follow the instructions to learn how to support both platforms.
3. Use your obtained deep link URL in your JavaScript code.

## Deferred deep linking

### Disable deferred deep linking

The SDK opens deferred deep links by default. You can configure this by passing a boolean argument to the `setShouldLaunchDeeplink` method.

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setShouldLaunchDeeplink(true);
//...
Adjust.create(adjustConfig);
```
:::

### Set up a deferred deep link listener

You can configure the Adjust SDK to call a listener function when it receives a deferred deep link. This listener function receives the deep link as a string argument.

:::{tab-set-code}

{emphasize-lines="3,4,5"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setDeferredDeeplinkCallbackListener(function(deeplink) {
    console.log("Deferred deep link URL content: " + deeplink);
});
//...
Adjust.create(adjustConfig);
```
:::

::::{dropdown} Example
In this example, we log the deep link URL when the user opens a deferred deep link.

:::{tab-set-code}

```js
var LogDeepLink = function(deeplinkURL) {
  console.log("Deeplink URL: " + deeplinkURL);
};
//...
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
adjustConfig.setDeferredDeeplinkCallbackListener(LogDeepLink);
//...
Adjust.create(adjustConfig);
```
:::

::::

### Enable LinkMe

The Adjust SDK lets you copy deep link information from the device pasteboard. When combined with [Adjust’s LinkMe solution](https://help.adjust.com/en/article/linkme), this feature enables deferred deep linking on devices running iOS 15 and above.

:::{important}
The Adjust SDK checks the pasteboard when a user opens the app for the first time. The device displays a dialog asking if the user wants to allow the app to read the pasteboard.
:::

When a user clicks on a LinkMe URL they have the option to copy the link information to their system pasteboard. You can use the Adjust SDK to read the system pasteboard for deep link information. If deep link information is present, the SDK forwards the user to the correct page in your app.

To enable pasteboard checking in your app, pass a true value to the setLinkMeEnabled method on your config object:

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setLinkMeEnabled(true);
//...
Adjust.create(adjustConfig);
```
:::
