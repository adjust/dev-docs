# Retrieve data points

You need to retrieve the following data points before you can set up deep links in your app:

* {term}`App ID Prefix`
* {term}`Release Bundle ID`
* {term}`Debug Bundle ID`
* {term}`Release Custom URL Scheme`
* {term}`Debug Custom URL Scheme`
* {term}`Link resolution domain(s)`

## Instructions

Follow these instructions to retrieve your data points.

::::{dropdown} App ID Prefix and Release Bundle ID
Your App ID is found on the Apple Developer portal. It contains two parts:

1. The **App ID prefix**
2. The **Bundle ID**

The ID is formatted as `<app_id_prefix>.<bundle_id>`. For example: `ABC1234567.com.example.app`

To find your App ID Prefix and Bundle ID, follow these steps:

1. Log in to the [Apple Developer portal](https://developer.apple.com/account/).
2. Select {guilabel}`Certificates, IDs & Profiles` from the left-hand menu.
3. Select {guilabel}`Identifiers` from the left-hand menu.
4. Find your app and select it to open the edit page.
5. Your App ID Prefix and Bundle ID are displayed at the top of the page. Copy the relevant information and store it somewhere for later use.
::::
:::: {dropdown} Debug Bundle ID
If you're using a different bundle ID for your debug build, you can find its ID in {program}`Xcode`.

1. Open your app project in {program}`Xcode`.
2. Select your project from the left-hand menu.
3. Select your app under {guilabel}`Targets`.
4. Select {guilabel}`Signing & Capabilities` from the top menu.
5. Select {guilabel}`Debug` from the sub menu that appears.
6. Your Bundle ID is shown. Copy this information and store it somewhere for later use.
::::
::::{dropdown} Release Custom URL Scheme and Debug Custom URL Scheme
:::{tip}
A custom URL scheme is required for linking from other applications on the device, such as Telegram, Twitter, and YouTube, or from push notifications. Check with your marketing team to see if a custom URL scheme is needed for the app. It's highly recommend to use the same custom URL scheme for iOS and Android.
:::

To retrieve your Custom URL Scheme, follow these steps:

1. Open your app project in {program}`Xcode`.
2. Select your project from the left-hand menu.
3. Select your app under {guilabel}`Targets`.
4. Select {guilabel}`Info` from the top menu.
5. Expand the {guilabel}`URL Types` section and get the custom URL scheme. If the URL Schemes field contains a build setting (for example: `$(CUSTOM_URL_SCHEME)`), go to the build settings to retrieve the custom URL scheme values:
   1. Select {guilabel}`Build Settings` from the menu at the top.
   2. Find the setting named in the URL Schemes field and retrieve both the release and debug values.

If your iOS app doesn't have a custom URL scheme yet, follow these steps to set a custom URL scheme:

1. Open your app project in {program}`Xcode`.
2. Select your project from the left-hand menu.
3. Select your app under {guilabel}`Targets`. 
4. Select {guilabel}`Info` from the top menu.
5. Expand the {guilabel}`URL Types` section.
6. Select the Add option ({guilabel}`+`) to add a new URL type.
7. Fill in the following information to create a URL scheme:
   * {guilabel}`Identifier`: `$(PRODUCT_BUNDLE_IDENTIFIER)`
   * {guilabel}`URL Schemes`: your custom URL scheme. This must be unique. Don't use protected schemes such as `http`, `https`, or `mailto`
   * {guilabel}`Role`: Editor

This scheme will work for your production **and** debug builds.
::::
::::{dropdown} Link Resolution domains
:::{tip}
A link resolution domain is required for deep linking via email, SMS, QR codes, and platforms that shorten links. Check with your marketing team to see if [link resolution](https://help.adjust.com/en/article/link-resolution) is needed for the app.
:::

Your marketing team may already be using a link resolution domain for their email marketing platform. Get this domain from them and store it somewhere for later use.
::::
