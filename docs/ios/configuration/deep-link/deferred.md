# Set up deferred deep linking

A deferred deep link sends a user to a place in your app after routing them via the App Store to install the app first.

## How it works

This is how a deferred deep link works:

1. The user clicks on an Adjust deep link.
2. Adjust's servers redirect the user to the App Store.
3. The user installs your app and opens it.
4. Adjust's servers perform attribution and send the deep link to the Adjust SDK.
5. Your app displays its preliminary content, such as onboarding screens and user login, if applicable.
6. Your app retrieves the deep link from the Adjust SDK and handles the deep link.

## Setup

:::{important}
When you set up Adjust deferred deep linking, you need to disable deferred deep linking in other SDKs in your app. You also need to disable any deep linking setup from other MMPs.
:::

:::{seealso}
Check out the [Facebook deferred deep linking documentation](https://developers.facebook.com/docs/ios/deep-linking#deferred-deep-linking) for information about how to configure deep linking with your Facebook campaigns.
:::

There are 2 approaches to set up deferred deep linking in your app:

1. Adjust's servers automatically pass the deferred deep link to the Adjust SDK. When the user opens your app, the Adjust SDK automatically calls the `open(_:options:completionHandler:)` method with the deep link. If your app doesn't have preliminary content (for example: onboarding screens and user login), or if your app already handles this content before opening the deep link, then no further configuration is required, and you can skip the rest of this section.
2. If your app has preliminary content (for example: onboarding screens and user login), but your app doesn't already handle this before handling the deep link, then you can add a deferred deep link listener.

### Set up a deferred deep link listener

1. Set up a delegate callback for deferred deep linking. If you have already configured attribution callbacks, you can skip this step.

   :::{tab-set-code}

   ```swift
   :caption: AppDelegate.swift
   class AppDelegate: UIResponder, UIApplicationDelegate, AdjustDelegate {
   }
   ```

   ```objective-c
   :caption: AppDelegate.h
   @interface AppDelegate : UIResponder <UIApplicationDelegate, AdjustDelegate>
   ```

   :::

2. if you haven’t already done so, create an instance of the `ADJConfig` class and set a delegate on the `ADJConfig` object in your app delegate. You need to set the delegate in `ADJConfig` before initializing the SDK.

   :::{tab-set-code}

   ```swift
   let yourAppToken = "{YourAppToken}"
   let environment = ADJEnvironmentSandbox as? String
   let adjustConfig = ADJConfig(
      appToken: yourAppToken,
      environment: environment)
   adjustConfig?.delegate = self

   // ...

   Adjust.appDidLaunch(adjustConfig)
   ```

   ```objective-c
   *adjustConfig = [ADJConfig configWithAppToken:@"{YourAppToken}"
                                  environment:ADJEnvironmentSandbox];
   [adjustConfig setDelegate:self];

   // ...

   [Adjust appDidLaunch:adjustConfig];
   ```

   :::

3. Add the `adjustDeeplinkResponse` deferred deep link callback method to the delegate. The Adjust SDK calls this method after receiving a deferred deep link.
   1. Set your deep link handling code.
   2. Set the return value of the `adjustDeeplinkResponse` method to true or false. This indicates whether you want the Adjust SDK to call the `open(_:options:completionHandler:)` method to open the deep link after your deep link handling code runs.

   :::{tab-set-code}

   ```swift
   func adjustDeeplinkResponse(_ deeplink: URL?) -> Bool {
      // add your code below to handle deep link
      // (for example, show onboarding screens, then open deep link content)
      // deeplink object contains the deep link


      return false
   }
   ```

   ```objective-c
   - (BOOL)adjustDeeplinkResponse:(NSURL *)deeplink {
       // add your code below to handle deep link
       // (for example, show onboarding screens, then open deep link content)
       // deeplink object contains the deep link
       
       
       return NO;
   }
   ```
   :::

## Set up Adjust LinkMe

:::{note}
Discuss with your marketing team whether you need to implement LinkMe in your app.
:::

[Adjust’s LinkMe solution](hc:linkme) is an optional feature that ensures robust deferred deep linking performance by enabling your app to read deep link information from the device pasteboard.

:::{important}
The Adjust SDK checks the pasteboard when a user opens the app for the first time. The device displays a dialog asking if the user wants to allow the app to read the pasteboard.
:::

When a user clicks on a LinkMe URL they have the option to copy the link information to their system pasteboard. You can use the Adjust SDK to read the system pasteboard for deep link information. If deep link information is present, the Adjust SDK forwards the user to the correct page in your app.

To enable pasteboard checking in your app, pass a **true** value to the `setLinkMeEnabled` method on your `ADJConfig` object:

:::{include} /ios/reference/ADJConfig/setup.md
:start-after: setLinkMeEnabled snippet
:end-before: Snippet end
:::
