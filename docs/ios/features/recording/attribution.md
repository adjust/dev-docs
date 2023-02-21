# Get attribution information

When a user interacts with a campaign link, their attribution information updates. This can happen if the user interacts with a [deep link](https://help.adjust.com/en/article/deep-links). The SDK can listen for attribution changes and call a function when it detects an update.

1. If you aren't using web views, add the `AdjustDelegate` declaration to your `AppDelegate` header file.

   ::::{tab-set}
   :::{tab-item} Swift
   :sync: swift
   ```{code-block} swift
   :caption: AppDelegate.swift

   class AppDelegate: UIResponder, UIApplicationDelegate, AdjustDelegate {
   }
   ```
   :::
   :::{tab-item} Objective-C
   :sync: objc
   ```{code-block} objc
   :caption: AppDelegate.h

   @interface AppDelegate : UIResponder <UIApplicationDelegate, AdjustDelegate>
   ```
   :::
   ::::

2. Add the delegate callback function to your app delegate implementation.

   ::::{tab-set}
   :::{tab-item} Swift
   :sync: swift
   ```{code-block} swift
   :caption: AppDelegate.swift

   class AppDelegate: UIResponder, UIApplicationDelegate, AdjustDelegate {
      //...
      func adjustAttributionChanged(_ attribution: ADJAttribution?) {
         //...
      }
   }
   ```
   :::
   :::{tab-item} Objective-C
   :sync: objc
   ```{code-block} objc
   :caption: AppDelegate.m

   - (void)adjustAttributionChanged:(ADJAttribution *)attribution {
      //...
   }
   ```
   :::
   ::::

3. Set the delegate with your Adjust config instance.

   :::{include} /ios/reference/ADJConfig/setup.md
   :start-after: setDelegate snippet
   :end-before: Snippet end
   :::

Within your delegate function, you have access to the user's `Attribution` information. See the [`ADJAttribution` class reference](/ios/reference/ADJAttribution.md) for a list of available properties.

## Get current attribution information

:::{versionadded} v4.11.0
When a user installs your app, Adjust attributes the install to a campaign. The Adjust SDK gives you access to campaign attribution details for your install. To return this information, call the [`attribution` method](ios-attribution-invocation).
:::

This method returns an Attribution object. See the [`ADJAttribution` class reference](/ios/reference/ADJAttribution.md) for a list of available properties.

:::{include} /ios/reference/Adjust/recording.md
:start-after: attribution snippet
:end-before: Snippet end
:::
