# Test deep linking

Before your marketing team goes live with your deep links in a campaign, it's important to test them. This ensures that:

* They're set up correctly.
* They deliver the user to the intended content.
* Adjust is recording them.

## Before you begin

Here's what you need to do before getting started.

1. Set your app environment to `sandbox` and log level to `verbose`.
2. Build and run your app in {program}`Xcode`.
3. Obtain an example deep link from your marketing team. Combine the deep link with your Adjust universal link domain or custom URL scheme and a test tracker token.

   Example: `https://example.go.link/summer-clothes?promo=beach&adj_t=abc123`

## Create a test link

To test your deep link implementation, you need to create a test link. To do this:

1. Log in to the Adjust dashboard.
2. Locate your app in the app overview page.
3. Select the caret ({guilabel}`^`) at the bottom of the app card.
4. Select {guilabel}`All Settings`. A sidebar menu opens.
5. Select {guilabel}`Trackers` in the sidebar menu.
6. Select {guilabel}`NEW TRACKER`.
7. Enter a {guilabel}`TRACKER NAME` of your choice.
8. Select {guilabel}`--none--` in the {guilabel}`NETWORK` menu.
9. Select {guilabel}`CUSTOMIZE` to open the customization menu.
10. Select {guilabel}`Attribution Settings`.
11. Set {guilabel}`Probabilistic Matching` to {guilabel}`ON` under the {guilabel}`Click-based Attribution` section.
12. Select {guilabel}`APPLY`.

You need to append the tracker token to the deep link that you received from your marketing team.

## Test direct deep linking

You can test the following universal link configurations:

* Adjust universal links
* Email redirect and URL shortener universal links

### Check universal link domain configuration

:::{important}
iOS doesn't open universal links as deep links if you enter them directly into your browser. You need to select the universal link as a link.
:::

To check your universal link domain configuration, follow these steps.

1. On your iOS test device, paste your universal link in {program}`Apple Notes`.
2. In {program}`Apple Notes`, long press on the universal link to open an iOS menu. If you see the {guilabel}`Open in your app` option, iOS was able to make the connection between your app and the domain.

If this option doesn't appear, check the following issues.

:::{dropdown} Adjust universal links
* Check your marketing team has enabled Adjust universal links in the Adjust dashboard.
* Check the {guilabel}`Associated Domains` configuration in {program}`Xcode`.
  * The `applinks: prefix` must be present.
   The domain in {program}`Xcode` must match the Adjust Universal Link domain that your marketing team created in the Adjust dashboard.
* Check if the following values in your app match with the values in the Adjust dashboard:
   * {guilabel}`App ID prefix`
   * {guilabel}`Bundle ID`: Verify whether you are using the bundle ID of the debug build or release build.
   * {guilabel}`Universal link domain`: Verify whether you are using the universal link domain of the debug build or release build. The universal link domain in the app needs to match with the branded link in the Adjust dashboard.
:::

:::{dropdown} Email redirect and URL shortener universal links
* Check the Associated Domains configuration in {program}`Xcode`.
   * The `applinks: prefix` must be present.
   * The domain in {program}`Xcode` must match the email redirect domain or URL shortener domain configured in the partner’s system.
* Check if the following values in your app match with the values in the {abbr}`AASA (Apple-App-Site-Association)` file for the email redirect domain or URL shortener domain in the partner’s system:
  * {guilabel}`App ID prefix`
   * {guilabel}`Bundle ID`: Verify whether you are using the bundle ID of the debug build or release build.
   * Email redirect domain / URL shortener domain - Verify whether you have configured the domain as a custom domain in the email partner's system.
:::

### Test direct deep linking in the app

You can test direct deep linking when your app is closed or running in the background on the test device.

#### App closed

In {program}`Apple Notes`, select the universal link. The app should open and display the deep link content.

If you don't see the correct page in the app, check the following:

* Verify that the path or parameters in the deep link are correct. Check if you have used the `?` symbol twice instead of the `&` symbol.
* Check if your app handles the deep link via the following methods.
   * **App doesn't use scenes**: `application(_:continue:restorationHandler:)` method
   * **App uses scenes**: `scene(_:continue:)` method
* Check if other content in your code is interfering with the deep link.
* If you've set up a redirect to the universal link, ensure that you have configured the redirect correctly.
* Check if you have configured the Link Resolution method correctly. Ensure that you have added the email redirect domain or URL shortener domain to `resolveUrlSuffixArray`.

After selecting the deep link, your app calls the appWillOpen method in the Adjust SDK, and you should see entries similar to the following in your {program}`Xcode` logs:

```
2022-09-28 09:19:30.873598+0900 example[1619:241845]  [Adjust]d: Added sdk_click 1
2022-09-28 09:19:30.873782+0900 example[1619:241845]  [Adjust]v: Path:      /sdk_click
2022-09-28 09:19:30.873806+0900 example[1619:241845]  [Adjust]v: ClientSdk: ios4.32.1
2022-09-28 09:19:30.873824+0900 example[1619:241845]  [Adjust]v: Parameters:
[...]
2022-03-15 09:19:30.873956+0900 example[1619:241845]  [Adjust]v: source   deeplink
```

If you don't see these entries in your {program}`Xcode` logs, ensure the following:

* You have set the environment to `sandbox` and logging to `verbose` in the Adjust SDK.
  * Verbose logging is indicated by `[Adjust]v` in your {program}`Xcode` logs.
* Your app calls the [`appWillOpenUrl` method](ios-appWillOpenUrl-invocation) in the method that receives the deep link.

#### App running in background

In {program}`Apple Notes`, select the universal link. The app should display the deep link content.

If you don't see the correct page in the app, check the following:

* Check if your app handles the deep link via the following methods.
   * **App doesn't use scenes**: `application(_:continue:restorationHandler:)` method
   * **App uses scenes**: `scene(_:continue:)` method

After selecting the deep link, your app calls the [`appWillOpenUrl` method](ios-appWillOpenUrl-invocation) in the Adjust SDK, and you should see entries similar to the following in your {program}`Xcode` logs:

```
2022-09-28 09:19:30.873598+0900 example[1619:241845]  [Adjust]d: Added sdk_click 1
2022-09-28 09:19:30.873782+0900 example[1619:241845]  [Adjust]v: Path:      /sdk_click
2022-09-28 09:19:30.873806+0900 example[1619:241845]  [Adjust]v: ClientSdk: ios4.32.1
2022-09-28 09:19:30.873824+0900 example[1619:241845]  [Adjust]v: Parameters:
[...]
2022-03-15 09:19:30.873956+0900 example[1619:241845]  [Adjust]v: source   deeplink
```

If you don't see these entries in your {program}`Xcode` logs, ensure the following:

* You have set the environment to `sandbox` and logging to `verbose` in the Adjust SDK.
   * Verbose logging is indicated by `[Adjust]v` in your {program}`Xcode` logs.
* Your app calls the [`appWillOpenUrl` method](ios-appWillOpenUrl-invocation) in the method that receives the deep link.

## Test direct deep linking with a custom URL scheme

You can test direct deep linking with a custom URL scheme when your app is closed or running in the background on the test device.

In {program}`Apple Notes`, select the universal link. The app should open and display the deep link content.

If the app doesn't open, check the following:

* You have configured the URL scheme correctly in {program}`Xcode`.
* If you are testing a debug build of the app, Verify whether you are using the debug or release custom URL scheme.

If you don't see the correct page in the app, check the following:

* Verify that the path or parameters in the deep link are correct. Check if you have used the `?` symbol twice instead of the `&` symbol.
* Check if your app handles the deep link via the following methods.
   * **App doesn't use scenes**: `application(_:continue:restorationHandler:)` method
   * **App uses scenes**: `scene(_:continue:)` method
* Check if other content in your code is interfering with the deep link.

After selecting the deep link, your app calls the [`appWillOpenUrl` method](ios-appWillOpenUrl-invocation) in the Adjust SDK, and you should see entries similar to the following in your {program}`Xcode` logs:

```
2022-09-28 09:19:30.873598+0900 example[1619:241845]  [Adjust]d: Added sdk_click 1
2022-09-28 09:19:30.873782+0900 example[1619:241845]  [Adjust]v: Path:      /sdk_click
2022-09-28 09:19:30.873806+0900 example[1619:241845]  [Adjust]v: ClientSdk: ios4.32.1
2022-09-28 09:19:30.873824+0900 example[1619:241845]  [Adjust]v: Parameters:
[...]
2022-03-15 09:19:30.873956+0900 example[1619:241845]  [Adjust]v: source   deeplink
```

If you don't see these entries in your {program}`Xcode` logs, ensure the following:

* You have set the environment to `sandbox` and `logging` to verbose in the Adjust SDK.
   * Verbose logging is indicated by `[Adjust]v` in your {program}`Xcode` logs.
* Your app calls the [`appWillOpenUrl` method](ios-appWillOpenUrl-invocation) in the method that receives the deep link.

## Test deferred deep linking

To test deferred deep linking on the test device, follow these steps.

1. Install your app.
2. Retrieve the {abbr}`ADID (Adjust device identifier)` from your {program}`Xcode` logs. Example:

   ```
   2022-09-28 09:19:35.609913+0900 example[1619:241847] [Adjust]v: Response: {"app_token":"2eb2na2w54c3","adid":"4446ab34861b99b78ee374c3bd38a350","timestamp":"2022-09-28T00:19:35.841Z+0000","message":"Attribution found","attribution":{"tracker_token":"abc123","tracker_name":"Organic","network":"Organic"}}
   ```

3. Uninstall your app.
4. Open the [Testing Console](https://help.adjust.com/en/article/testing-console), enter the Adjust ADID and select {guilabel}`View Device Data`. You should see the `TrackerName` as `Organic`.
5. Forget your device in the testing console.
6. Paste your universal link or custom URL scheme deep link in {program}`Apple Notes`.
7. Select the deep link. This should redirect you to the App Store.
8. Install your app from a local build. Don't install your app from the store.
9. Open your app. This app should open and display the deep link content.

If you don't see the correct page in the app, check the following:

* Check if other content in your code is interfering with the deep link. For example: If your app has onboarding screens or requires user login, but your app doesn't already handle this before opening the deep link. You might have to implement the `adjustDeeplinkResponse` method to handle onboarding screens or user login before handling the deep link.
* Your app code isn't handling the incoming deep link in the `adjustDeeplinkResponse` method.
* Adjust didn't attribute your install to the click. In the Testing Console, select {guilabel}`View Device Data`. The `TrackerName` field should display your test link. Before you start your test, ensure the following:
   * Probabilistic matching was enabled on your test link.
   * In the Testing Console, the `TrackerName` was set to `Organic`.
