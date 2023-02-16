# Set up deep linking

You can create deep links to take users to specific pages in your app. The Adjust SDK uses different logic depending on if the user already has your app installed on their device:

Direct deep linking
   : Occurs if the user already has your app installed. The link takes the user to the page specified in the link

Deferred deep linking
   : Occurs if the user doesn't have your app installed. The link takes the user to a storefront to install your app first. After the user installs the app, it opens to the page specified in the link.

The SDK can read deep link data after a user opens your app from a link.

## Set up deep linking

If a user has your app installed, it opens when they interact with a link containing deep link information. The Adjust SDK contains tools to parse deep link information for use throughout your app.

The SDK injects the required settings into Android and iOS projects in v4.30 and above. To configure deep linking, add your URL schemes in the Unity Editor inspector window.

```{image} https://images.ctfassets.net/5s247im0esyq/4zj31Hg4AXE8WDKKqbz5xM/1535bc4d75e1b4ad826c002c7e9fe61a/ios_deeplinks.png
:alt: A screenshot of the Unity editor
```

For Adjust SDK below v4.30 or Unity Editor below v2019.2 (Android only), you need to set up deep linking on an app level. Follow the instructions linked below to set up deep linking on your target platform:

- iOS
- Android

## Deep linking on iOS

### Set up universal links

Devices running iOS 9 and later use [universal links](https://developer.apple.com/library/ios/documentation/General/Conceptual/AppSearch/UniversalLinks.html) to handle deep links. You need to add your universal link scheme to your app to open deep links in your app. To do this:

1. Set up your universal links in the Adjust dashboard.
2. Configure {guilabel}`Associated Domains` for your app in the Apple Developer Portal.
3. Open the Unity editor.
4. Navigate to the {guilabel}`DEEP LINKING` section of the Adjust prefab.
5. Enter your universal link(s) in the {guilabel}`iOS Universal Links Domain` field. Replace the `https://` protocol with `applinks:`

### Set up a custom URL scheme

Devices running iOS 8 and earlier use a custom URL scheme to handle deep links. 

1. Set up your deep links in the Adjust dashboard.
2. Open the Unity editor.
3. Navigate to the {guilabel}`DEEP LINKING` section of the Adjust prefab.
4. Enter your URL scheme(s) in the {guilabel}`iOS URL Schemes` field. Enter only the scheme without the following `://`.

## Deep linking on Android

Android devices use a unique URI scheme to handle deep links. To set up deep linking, add your scheme to the {guilabel}`Android URI Schemes` section of the Adjust prefab. The SDK adds the required XML tags to your {file}`AndroidManifest.xml`.

```{image} https://images.ctfassets.net/5s247im0esyq/3NYo4ctARqUSwJJz7wyOjI/276b2699ef82fc0ab72989a5aaa2b347/android_uri_schemes.png
:alt: A screenshot of the Android URI Schemes section in the Unity prefab menu
```

## Deferred deep linking

### Disable deferred deep linking

The SDK opens deferred deep links by default. You can configure this by passing a **boolean** argument to the {code}`setLaunchDeferredDeeplink` method.

```{include} /unity/fragments/AdjustConfig.md
:start-after: setLaunchDeferredDeeplink
:end-before: methodEnd
```

### Set up a deferred deep link delegate

You can configure the Adjust SDK to call a delegate function when it receives a deferred deep link. This delegate function receives the deep link as a **string** argument.

```{include}/unity/fragments/AdjustConfig.md
:start-after: setDeferredDeeplinkDelegate
:end-before: methodEnd
```

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

### Enable LinkMe

The Adjust SDK lets you copy deep link information from the device pasteboard. When combined with Adjust’s LinkMe solution, this feature enables deferred deep linking on devices running iOS 15 and above.

:::{important}
The Adjust SDK checks the pasteboard when a user opens the app for the first time. The device displays a dialog asking if the user wants to allow the app to read the pasteboard.
:::

When a user clicks on a LinkMe URL they have the option to copy the link information to their system pasteboard. You can use the Adjust SDK to read the system pasteboard for deep link information. If deep link information is present, the SDK forwards the user to the correct page in your app.

To enable pasteboard checking in your app, pass a true value to the {code}`setLinkMeEnabled` method on your config object:

```{include} /unity/fragments/AdjustConfig.md
:start-after: setLinkMeEnabled
:end-before: methodEnd
```
