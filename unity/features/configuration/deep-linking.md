# Set up deep linking

```{include} ../../../fragments/feature-intros/deep-links.md
```

## Set up deep linking

If a user has your app installed, it opens when they interact with a URL containing a deep link. The Adjust SDK contains tools to parse deep link information for use throughout your app.

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
:alt: A screenshot of the Andorid URI Schemes section in the Unity prefab menu
```

## Deferred deep linking

### Disable deferred deep linking

```{include} ../../../fragments/method-intros/setlaunchdeferreddeeplink.md
```

```{include} ../../../fragments/unity/snippets/setlaunchdeferreddeeplink.md
```

### Set up a deferred deep link delegate

```{include} ../../../fragments/method-intros/setdeferreddeeplinkdelegate.md
```

```{include} ../../../fragments/unity/snippets/setdeferreddeeplinkdelegate.md
```

:::{dropdown} Example

```{include} ../../../fragments/example-intros/setdeferreddeeplinkdelegate.md
```

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

### Enable LinkMe

```{include} ../../../fragments/method-intros/setlinkmeenabled.md
```

```{include} ../../../fragments/unity/snippets/setlinkmeenabled.md
```
