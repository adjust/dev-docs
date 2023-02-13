# Set up deep links in the Adjust dashboard

You need to configure your app in the Adjust dashboard to enable deep linking. To do this, make sure you have done the following:

- [ ] Added your app in the Adjust dashboard.
- [ ] Retrieved all the required deep linking data.

Since iOS 9, Apple has changed the way you should handle deep linking in your apps. Depending on which iOS versions you are targeting, you need to set deep links to handle one or both of these methods.

* iOS 9 and later - Universal links
* iOS 8 and earlier - Deep links with a custom URL scheme

## Set up universal links in your app

To enable deep linking support for iOS 9 and later you need to set up universal links in the Adjust dashboard.

:::{note}
You can enter only one Bundle ID per app. If you are testing an app with a Debug Bundle ID, you need to create a separate app.
:::

Once you have gathered your setup data, you can add this to your app in the Adjust dashboard. Adding the information to your app enables you to add deep links to your campaigns. To set up universal links, follow these steps:

1. Log in to the Adjust dashboard.
2. Navigate to your app and select your app options caret ({guilabel}`^`).
3. Select {menuselection}`All Settings --> Platforms`.
4. Select {guilabel}`iOS`.
   1. If you haven't entered your Bundle ID, enter it in the {guilabel}`IOS BUNDLE ID` field. Make sure you enter the {term}`Release Bundle ID` for your live app and the {term}`Debug Bundle ID` for a debug app.
5. Select {guilabel}`Universal Linking`.
6. Enter your App Prefix.
7. Enter your App Scheme. If required, add your {term}`Release Custom URL Scheme` or {term}`Debug Custom URL Scheme` in the {guilabel}`APP Scheme` field.
8. A raw universal link appears. You need this value to configure Associated Domains in Xcode. Example: `abcd.adj.st`
9.  Select {guilabel}`Save`.
10. Select {guilabel}`Save` on the platform overview to save all settings.

## Set up deep links with a custom URL scheme

In this case, you need to pick a custom URL scheme name which your app will be responsible for opening. You can then use this scheme name in the Adjust tracker URL as part of the deeplink parameter.

To create a deep link with a custom URL scheme, follow these steps:

1. Define the format of your custom URL scheme. If you are using a cross-platform framework, refer to the documentation for that framework to define the format of your custom URL scheme. Example: `example://summer-clothes?promo=beach`
2. URL encode the deep link. Example: `example%3A%2F%2Fsummer-clothes%3Fpromo%3Dbeach`
3. Pass this encoded deep link into an Adjust tracker URL. Example: `https://app.adjust.com/abc123?deeplink=%3A%2F%2Fsummer-clothes%3Fpromo%3Dbeach`
4. Append the `deeplink_js=1` parameter to the tracker URL with the encoded deep link. This forces the Adjust system to use the iOS custom URL scheme. Example: `https://app.adjust.com/abc123?deeplink_js=1&deeplink=%3A%2F%2Fsummer-clothes%3Fpromo%3Dbeach`
