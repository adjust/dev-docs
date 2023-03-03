# Get started

The Adjust iOS SDK enables you to record attribution, events, and more in your iOS app. This guide shows you how to integrate the Adjust SDK with your app.

## 1. Add the SDK to your project

To use the Adjust SDK in your iOS app, you need to add it to your {program}`Xcode` project.

To add the SDK using Swift's package manager:

1. Select {guilabel}`File`.
2. Select {guilabel}`Swift Packages`.
3. Select {guilabel}`Add Package Dependency`.
4. In the box that appears, enter the SDK's GitHub address.

  ```html
  https://github.com/adjust/ios_sdk
  ```

5. Select the version of the Adjust SDK you want to use in the {guilabel}`Version` dropdown. Check the [releases page](https://github.com/adjust/ios_sdk/releases) for the latest version.

### Alternative installation methods

:::{dropdown} Cocoapods

To add the SDK using Cocoapods, specify the version you want to use in your `Podfile`:

```{parsed-literal}
// Get pod from repository
pod 'Adjust', '~> {{ ios_version }}'

// Get source directly from GitHub
pod 'Adjust', :git => 'https://github.com/adjust/ios_sdk.git', :tag => '{{ ios_version }}'
```

If you're using web views in your app, add the Adjust Web Bridge by adding the following:

```{parsed-literal}
pod 'Adjust/WebBridge', '~> {{ ios_version }}'
```
:::

:::{dropdown} Carthage

To add the SDK using Carthage, add the following to your `Cartfile`:

```text
github "adjust/ios_sdk"
```
:::

:::{dropdown} Add as framework

You can integrate the Adjust SDK by adding it to your project as a framework. You can find the following archives on the [releases page](https://github.com/adjust/ios_sdk/releases/latest):

* `AdjustSdkStatic.framework.zip`: For devices running iOS 7 and below
* `AdjustSdkDynamic.framework.zip`: For devices running iOS 8 and above
* `AdjustSdkTvDynamic.framework.zip`: Dynamic framework for tvOS apps
* `AdjustSdkTvStatic.framework.zip`: Static framework for tvOS apps
* `AdjustSdkImDynamic.framework.zip`: Dynamic framework for iMessage apps
* `AdjustSdkWebBridgeDynamic.framework.zip`: Dynamic framework for web views

Choose the frameworks you need and add them to your {program}`Xcode` project:

1. Download the archive from the releases page.
2. Unzip the archive on your computer.
3. Copy the `.framework` folder into your {program}`Xcode` project.

:::

## 2. Integrate the Adjust SDK

Once you've added the Adjust SDK to your {program}`Xcode` project, you need to integrate it in your app.

:::::{dropdown} Cocoapods

Add the relevant import statements in your project files.

::::{tab-set}
:::{tab-item} SWIFT
:sync: tabcode-swift

To import the Adjust SDK, add the following to your bridging header file:

```objective-c
#import <Adjust/Adjust.h>
```

If you use the Adjust Web Bridge, add the following to your bridging header file:

```objective-c
#import "AdjustBridge.h"
```

:::
:::{tab-item} OBJECTIVE-C
:sync: tabcode-objective-c

To import the Adjust SDK, add the following to your `AppDelegate.h` file:

```objective-c
#import <Adjust/Adjust.h>
```

If you use the Adjust Web Bridge, add the following to your `AppDelegate.h` file:

```objective-c
#import "AdjustBridge.h"
```

:::
::::
:::::

:::::{dropdown} Carthage and framework import

Add the relevant import statements in your project files.

::::{tab-set}
:::{tab-item} SWIFT
:sync: tabcode-swift

To import the Adjust SDK, add the following to your bridging header file:

```objective-c
#import <Adjust/Adjust.h>
```

If you use the Adjust Web Bridge, add the following to your bridging header file:

```objective-c
#import <AdjustSdkWebBridge/AdjustBridge.h>
```

If you use the Adjust SDK in a tvOS app, add the following to your bridging header file:

```objective-c
#import <AdjustSdkTv/Adjust.h>
```

If you use the Adjust SDK in a iMessage app, add the following to your bridging header file:

```objective-c
#import <AdjustSdkIm/Adjust.h>
```

:::
:::{tab-item} OBJECTIVE-C
:sync: tabcode-objective-c

To import the Adjust SDK, add the following to your `AppDelegate.h` file:

```objective-c
#import <AdjustSdk/Adjust.h>
```

If you use the Adjust Web Bridge, add the following to your `AppDelegate.h` file:

```objective-c
#import <AdjustSdkWebBridge/AdjustBridge.h>
```

If you use the Adjust SDK in your tvOS app, add the following to your `AppDelegate.h` file:

```objective-c
#import <AdjustSdkTv/Adjust.h>
```

If you use the Adjust SDK in your iMessage app, add the following to your `AppDelegate.h` file:

```objective-c
#import <AdjustSdkIm/Adjust.h>
```
:::
::::
:::::

## 3. Add iOS frameworks

The Adjust SDK depends on frameworks to access certain device information. To enable reading this information, add the frameworks and mark them as **optional**.

:::{list-table}
:header-rows: 1

* - Framework
   - Description
   - Notes
* - `AdSupport.framework`
   - Enables access to the device's IDFA. Also enables access to LAT information on devices running iOS 14 or earlier
   - Don't add this framework if your app targets the "Kids" category
* - `AdServices.framework`
   - Handles Apple Search Ads attribution
   -
* - `StoreKit.framework`
   - Enables access to the SKAdNetwork framework
   - Required to allow the Adjust SDK to handle communication with SKAdNetwork on devices running iOS 14 or later
* - `AppTrackingTransparency.framework`
   - Required to allow the Adjust SDK to wrap user tracking consent dialog and access consent responses on devices running iOS 14 or later
   - Don't add this framework if your app targets the "Kids" category
* - `WebKit.framework`
   - Enables the use of web views in your application
   - Only required if your app uses web views

:::

## 4. Initialize the Adjust SDK

To initialize the Adjust SDK, you need to create a config object. This object contains configuration options that control how the Adjust SDK behaves. Pass the following arguments for a minimal setup:

- `appToken`: Your [app's token](hc:/app-settings#view-your-app-token).
- `environment`: The environment you want to run the SDK in. Set this to `ADJEnvironmentSandbox`.

To initialize the Adjust SDK with this config object:

1. Declare your config object in the `didFinishLaunching` or `didFinishLaunchingWithOptions` method of your app delegate.
2. Set the `logLevel` property on your config object to `ADJLogLevelVerbose` (verbose). You must enable verbose logging to retrieve device information.
3. Pass the config object as an argument to the `appDidLaunch` method.

:::{tab-set-code}

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
   let yourAppToken = "{YourAppToken}"
   let environment = ADJEnvironmentSandbox as? String
   let myAdjustConfig = ADJConfig(
       appToken: yourAppToken,
       environment: environment)
   myAdjustConfig?.logLevel = ADJLogLevelVerbose
   //...
   Adjust.appDidLaunch(myAdjustConfig)
   //...
   return true
}
```

```objective-c
#import "Adjust.h"

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
   NSString *yourAppToken = @"{YourAppToken}";
   NSString *environment = ADJEnvironmentSandbox;
   *myAdjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
   [myAdjustConfig setLogLevel:ADJLogLevelVerbose];
   //...
   [Adjust appDidLaunch:myAdjustConfig];
   //...
   return YES;
}
```
:::

### Set up your iMessage app

:::{important}
iMessage extensions have different bundle identifiers to apps and run in a different memory space. If you configure both with the same token, the SDK returns mixed data. You must create a separate app in the Adjust dashboard for your iMessage app and use its token when initializing the Adjust SDK.
:::

If your app targets iMessage, there are some additional settings you must configure:

- If you added the Adjust SDK from source, add the `ADJUST_IM=1` pre-processor macro to your iMessage project settings.
- If you added the Adjust SDK as a framework, make sure to add **New Copy Files Phase** in your **Build Phases** project settings. Set the `AdjustSdkIm.framework` to be copied to the Frameworks folder.

#### Record sessions

The Adjust SDK isn't subscribed to iOS system notifications in iMessage apps. To notify the Adjust SDK when your app has entered or left the foreground, you need to call the `trackSubsessionStart` and `trackSubsessionEnd` methods.

Add a call to `trackSubsessionStart` inside your `didBecomeActiveWithConversation:` method:

:::{tab-set-code}

```swift
func didBecomeActive(with conversation: MSConversation) {
    // Called when the extension is about to move from the inactive to active state.
    // This will happen when the extension is about to present UI.
    // Use this method to configure the extension and restore previously stored state.

    Adjust.trackSubsessionStart()
}
```

```objective-c
-(void)didBecomeActiveWithConversation:(MSConversation *)conversation {
    // Called when the extension is about to move from the inactive to active state.
    // This will happen when the extension is about to present UI.
    // Use this method to configure the extension and restore previously stored state.

    [Adjust trackSubsessionStart];
}
```
:::

Add a call to `trackSubsessionEnd` inside your `willResignActiveWithConversation:` method:

:::{tab-set-code}

```swift
func willResignActive(with conversation: MSConversation) {
    // Called when the extension is about to move from the active to inactive state.
    // This will happen when the user dismisses the extension, changes to a different
    // conversation or quits Messages.
    
    // Use this method to release shared resources, save user data, invalidate timers,
    // and store enough state information to restore your extension to its current state
    // in case it is terminated later.

    Adjust.trackSubsessionEnd()
}
```

```objective-c
-(void)willResignActiveWithConversation:(MSConversation *)conversation {
    // Called when the extension is about to move from the active to inactive state.
    // This will happen when the user dismisses the extension, changes to a different
    // conversation or quits Messages.
    
    // Use this method to release shared resources, save user data, invalidate timers,
    // and store enough state information to restore your extension to its current state
    // in case it is terminated later.

    [Adjust trackSubsessionEnd];
}
```
:::

### Set up the Adjust Web Bridge

If your app uses web views, you must set up the Adjust Web Bridge to record activity inside the web view.

#### Integrate `AdjustBridge` into your app

In the Project Navigator:

1. Open the source file of your View Controller. 
2. Add the `import` statement at the top of the file. 
3. Add the following calls to `AdjustBridge` in the `viewDidLoad` or `viewWillAppear` method of your Web View Delegate:

:::{tab-set-code}

```swift
func viewWillAppear(_ animated: Bool) {
    let webView = WKWebView(frame: view.bounds)

    // add var adjustBridge: AdjustBridge? on your interface
    adjustBridge.loadWKWebViewBridge(webView)
    // optionally you can add a web view delegate so that you can also capture its events
    // adjustBridge.loadWKWebViewBridge(webView, wkWebViewDelegate: self as? WKNavigationDelegate?);
}
```

```objective-c
#import "AdjustBridge.h"
// or #import <AdjustSdkWebBridge/AdjustBridge.h>

- (void)viewWillAppear:(BOOL)animated {
    WKWebView *webView = [[WKWebView alloc] initWithFrame:self.view.bounds];

    // add @property (nonatomic, strong) AdjustBridge *adjustBridge; on your interface
    [self.adjustBridge loadWKWebViewBridge:webView];
    // optionally you can add a web view delegate so that you can also capture its events
    // [self.adjustBridge loadWKWebViewBridge:webView wkWebViewDelegate:(id<WKNavigationDelegate>)self];
}

// ...
```
:::

You can also use the included `WebViewJavascriptBridge` by setting the `bridgeRegister` property of your `AdjustBridge` instance. See the [library's documentation](https://github.com/marcuswestin/WebViewJavascriptBridge#usage) for usage information.

#### Integrate `AdjustBridge` into your web view

To use the Javascript bridge in your web view, you need to configure the bridge. Add the following Javascript code to initialize the Adjust iOS web bridge:

:::{tab-set-code}

```javascript
function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
    }

    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
    }

    window.WVJBCallbacks = [callback];

    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://**bridge_loaded**';
    document.documentElement.appendChild(WVJBIframe);

    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}

setupWebViewJavascriptBridge(function(bridge) {
    // ...
    var yourAppToken = yourAppToken;
    var environment = AdjustConfig.EnvironmentSandbox;
    var adjustConfig = new AdjustConfig(yourAppToken, environment);
    Adjust.appDidLaunch(adjustConfig);
    // ...
});
```
:::

## 5. Configure the Adjust SDK

Once you've added your config object and initialization logic, you can configure the Adjust SDK to record information about different parts of your app. Check out the guides for the SDK's configuration features and recording features to set up exactly what you want to record.

## 6. Test the Adjust SDK

Now that you've configured the Adjust SDK to record information about your app, it's time to test it. Adjust offers a [testing console](hc:/testing-console) and a [Device API](hc:/device-api) to help you test your app.

Follow the [testing guide](hc:/test-the-adjust-sdk) to make sure Adjust receives the expected values back from your app.

## 7. Build your app for production

Once you've finished your testing, you can build your app for production. To do this, you need to update your config object.

Update the following values:

- `environment`: Set this to `ADJEnvironmentProduction`.
- `logLevel`: Choose a [logging level](features/configuration/log-level), or disable logging completely by passing an `allowSuppressLogLevel` argument in your config object.

:::{tab-set-code}

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
   let yourAppToken = "{YourAppToken}"
   let environment = ADJEnvironmentProduction as? String
   let myAdjustConfig = ADJConfig(
       appToken: yourAppToken,
       environment: environment,
       allowSuppressLogLevel: true)
   myAdjustConfig?.logLevel = ADJLogLevelSuppress
   //...
   Adjust.appDidLaunch(myAdjustConfig)
   //...
   return true
}
```

```objective-c
#import "Adjust.h"

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
   NSString *yourAppToken = @"{YourAppToken}";
   NSString *environment = ADJEnvironmentProduction;
   *myAdjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment
                                  allowSuppressLogLevel:YES];
   [myAdjustConfig setLogLevel:ADJLogLevelSuppress];
   //...
   [Adjust appDidLaunch:myAdjustConfig];
   //...
   return YES;
}
```
:::

You can use {program}`Xcode`'s build flags to dynamically update your config depending on whether you create a debug build or a production build.

:::{tab-set-code}

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
   let yourAppToken = "{YourAppToken}"
   
   #if DEBUG
   let environment = ADJEnvironmentSandbox as? String
   let myAdjustConfig = ADJConfig(
       appToken: yourAppToken,
       environment: environment)
   myAdjustConfig?.logLevel = ADJLogLevelVerbose
   
   #else
   let environment = ADJEnvironmentProduction as? String
   let myAdjustConfig = ADJConfig(
       appToken: yourAppToken,
       environment: environment,
       allowSuppressLogLevel: true)
   myAdjustConfig?.logLevel = ADJLogLevelSuppress
   #endif
   //...
   Adjust.appDidLaunch(myAdjustConfig)
   //...
   return true
}
```

```objective-c
#import "Adjust.h"

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
   NSString *yourAppToken = @"{YourAppToken}";
   
   #if DEBUG
   NSString *environment = ADJEnvironmentSandbox;
   *myAdjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment];
   [myAdjustConfig setLogLevel:ADJLogLevelVerbose];
   
   #else
   NSString *environment = ADJEnvironmentProduction;
   *myAdjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                  environment:environment
                                  allowSuppressLogLevel:YES];
   [myAdjustConfig setLogLevel:ADJLogLevelSuppress];
   #endif
   //...
   [Adjust appDidLaunch:myAdjustConfig];
   //...
   return YES;
}
```
:::
