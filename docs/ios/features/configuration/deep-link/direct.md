# Set up direct deep linking

You can configure deep linking in your app after you have set it up in the Adjust dashboard. **Direct deep linking** occurs when a user has your app installed on their device. The link takes the user to a specific page within your app.

To enable deep linking, you need to do the following:

- [ ] Enable Associated Domains for your app
- [ ] Configure your deep links in {program}`Xcode`

## Enable Associated Domains

To get started, you need to enable Associated Domains in your Apple Developer account. This allows you to set universal link domains in your app. To do this, follow these steps:

1. Log in to your [Apple Developer account](https://developer.apple.com/account/).
2. Select {guilabel}`Certificates, IDs & Profiles` in the left-hand menu.
3. Select {guilabel}`Identifiers` in the left-hand menu.
4. Find your app and select it to open the edit page.
5. Ensure that {guilabel}`Associated Domains` is checked under {guilabel}`Capabilities`.
6. Select {guilabel}`Save` to save your changes.

## Configure deep links in Xcode

Follow these steps to add your deep link configuration to your {program}`Xcode` project.

:::{dropdown} Adjust universal links domain
1. Open your app project in {program}`Xcode`.
2. Select your project from the left-hand menu.
3. Select your app under {guilabel}`Targets`.
4. Select {guilabel}`Signing & Capabilities` from the top menu.
5. Ensure that {guilabel}`All`is selected in the submenu below.
6. Select the Add option ({guilabel}`+`) to add a capability.
7. Select {guilabel}`Associated Domains`.
8. Enter the Branded Link domain from your marketing team. Here is an example using the `example.go.link` domain: `applinks:example.go.link`.
:::

::::{dropdown} Custom URL scheme
:::{tip}
Check with your marketing team to see if a custom URL scheme is needed for the app and discuss what the scheme name should be.
:::

1. Open your app project in {program}`Xcode`.
2. Select your project from the left-hand menu.
3. Select your app under {guilabel}`Targets`.
4. Select {guilabel}`Info` from the top menu.
5. Expand the {guilabel}`URL Types` section.
6. Select the Add option ({guilabel}`+`) to add a URL type.
7. Fill in the following information to create a URL scheme:
   * {guilabel}`Identifier`: `$(PRODUCT_BUNDLE_IDENTIFIER)`
   * {guilabel}`URL Schemes`: Your custom URL scheme. This must be unique. Don't use protected schemes such as `http`, `https`, or `mailto`.
   * {guilabel}`Role`: Editor

This scheme will work for your production **and** debug builds.
::::

## Modify your iOS app

You need to update your iOS app to set up different deep linking scenarios. How you update your app depends on whether your app uses [scenes](https://developer.apple.com/documentation/uikit/app_and_environment/scenes).

:::::{dropdown} App doesn't use scenes

If your app doesn't uses scenes, you need to update methods in your app delegate.

```{rubric} Universal links
```

Update the `application(_:continue:restorationHandler:)` method in your app delegate to call the following methods in the Adjust SDK:

* `ADJLinkResolution.resolveLink`: Call this method only if your your marketing team requires the use of Adjust's Link Resolution solution. If the deep link uses a domain that matches an element in the `resolveUrlSuffixArray`, then the method attempts to resolve the deep link, and returns the resolved link. If the deep link doesn't match an element in this array, then the method passes through the original deep link, so you can pass all deep links to this method.
* `Adjust.appWillOpen` - Call this method to send deep links to Adjust's servers to record information. You can pass both Adjust and non-Adjust deep links to this method. Adjust's servers will ignore any deep links that don’t have Adjust parameters.

When a user clicks on your universal link, iOS opens your app and delivers the deep link to `application(_:continue:restorationHandler:)`. This occurs whether the user has closed your app or has it running in the background.

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
func application(
    _ application: UIApplication,
    continue userActivity: NSUserActivity,
    restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void)
    -> Bool {
    
    if userActivity.activityType == NSUserActivityTypeBrowsingWeb {
        let incomingURL = userActivity.webpageURL

        // call the below method to resolve deep link
        ADJLinkResolution.resolveLink(
        withUrl: incomingURL,
        resolveUrlSuffixArray: ["email.example.com", "short.example.com"],
        callback: { resolvedURL in
            // add your code below to handle deep link
            // (e.g., open deep link content)    
            // resolvedURL object contains the deep link
          
          
            // call the below method to send deep link to Adjust backend
            Adjust.appWillOpen(resolvedURL)
        })
      } else {
          return false
      }
      
      return true
}
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
- (BOOL)application:(UIApplication *)application
    continueUserActivity:(NSUserActivity *)userActivity
    restorationHandler:
    (void (^)(NSArray *restorableObjects))restorationHandler {
    
    if ([[userActivity activityType]
        isEqualToString:NSUserActivityTypeBrowsingWeb]) {
        NSURL *incomingURL = [userActivity webpageURL];
        
        // call the below method to resolve deep link
        [ADJLinkResolution
        resolveLinkWithUrl:incomingURL
        resolveUrlSuffixArray:@[
        @"email.example.com", @"short.example.com"
        ]
        callback:^(NSURL* _Nullable resolvedURL) {
            // add your code below to handle deep link
            // (e.g., open deep link content)
            // resolvedURL object contains the deep link
            
            
            // call the below method to send deep link to Adjust backend
            [Adjust appWillOpenUrl:resolvedURL];
        }];
    } else {
        return NO;  
    }
    
    return YES;
}
```
:::
::::

```{rubric} Custom URL scheme
```

If your marketing team requires you to set up custom URL scheme deep links, update the `application(_:open:options:)` method in your app delegate to call the `Adjust.appWillOpen` method in the Adjust SDK. This method sends deep links to Adjust's servers to record them. You can pass both Adjust and non-Adjust deep links to this method. Adjust's servers ignore any deep links that don’t have Adjust parameters.

When a user clicks on your custom URL scheme deep link, iOS opens your app and delivers the deep link to `application(_:open:options:)`. This occurs whether the user has closed your app or has it running in the background.

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
func application(
    _ app: UIApplication,
    open incomingURL: URL,
    options: [UIApplication.OpenURLOptionsKey: Any] = [:]
    ) -> Bool {

    // add your code below to handle deep link
    // (e.g., open deep link content)
    // incomingURL object contains the deep link


    // call the below method to send deep link to Adjust backend
    Adjust.appWillOpen(incomingURL)

    return true
}
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
- (BOOL)application:(UIApplication *)app
    openURL:(NSURL *)incomingURL
    options:(NSDictionary *)options {

    // add your code below to handle deep link
    // (e.g., open deep link content)    
    // incomingURL object contains the deep link


    // call the below method to send deep link to Adjust backend
    [Adjust appWillOpenUrl:incomingURL];

    return YES;
}
```
:::
::::
:::::

:::::{dropdown} App uses scenes

If your app uses scenes, you need to update methods in your scene delegate.

```{rubric} Universal links
```

1. Update the `scene(_:willConnectTo:options:)` method in your scene delegate. When a user clicks on your universal links and the user has your app closed, iOS opens your app and delivers the deep link to this method.
2. Update the `scene(_:continue:)` method in your scene delegate. When a user clicks on your universal links, and the user has your app running in the background, iOS opens your app and delivers the deep link to this method.

The above methods call the following methods in the Adjust SDK:

* `ADJLinkResolution.resolveLink`: Call this method only if your your marketing team requires the use of Adjust's Link Resolution solution. If the deep link uses a domain that matches an element in the `resolveUrlSuffixArray`, then the method attempts to resolve the deep link, and returns the resolved link. If the deep link doesn't match an element in this array, then the method passes through the original deep link, so you can pass all deep links to this method.
* `Adjust.appWillOpen` - Call this method to send deep links to Adjust's servers to record them. You can pass both Adjust and non-Adjust deep links to this method. Adjust's servers ignore any deep links that don’t have Adjust parameters.

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
func scene(
    _ scene: UIScene,
    willConnectTo session: UISceneSession,
    options connectionOptions: UIScene.ConnectionOptions
    ) {
    
    guard let userActivity = connectionOptions.userActivities.first,
      userActivity.activityType == NSUserActivityTypeBrowsingWeb,
      let incomingURL = userActivity.webpageURL
    else { return }

    // call the below method to resolve deep link
    ADJLinkResolution.resolveLink(
      withUrl: incomingURL,
      resolveUrlSuffixArray: ["email.example.com", "short.example.com"],
      callback: { resolvedURL in
        // add your code below to handle deep link
        // (e.g., open deep link content)
        // resolvedURL object contains the deep link


        // call the below method to send deep link to Adjust backend
        Adjust.appWillOpen(resolvedURL)
      })
}

func scene(
    _ scene: UIScene,
    continue userActivity: NSUserActivity) {
    
    if userActivity.activityType == NSUserActivityTypeBrowsingWeb {
        let incomingURL = userActivity.webpageURL

        // call the below method to resolve deep link
        ADJLinkResolution.resolveLink(
        withUrl: incomingURL,
        resolveUrlSuffixArray: ["email.example.com", "short.example.com"],
        callback: { resolvedURL in
            // add your code below to handle deep link
            // (e.g., open deep link content)    
            // resolvedURL object contains the deep link
          
          
            // call the below method to send deep link to Adjust backend
            Adjust.appWillOpen(resolvedURL)
        })
    }
}
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
- (void)scene:(UIScene *)scene willConnectToSession:(UISceneSession *)session
    options:(UISceneConnectionOptions *)connectionOptions {
    
    NSUserActivity* userActivity = 
    [[[connectionOptions userActivities] allObjects] firstObject];
    
    if ([[userActivity activityType]
        isEqualToString:NSUserActivityTypeBrowsingWeb]) {
        NSURL *incomingURL = [userActivity webpageURL];
        
        // call the below method to resolve deep link
        [ADJLinkResolution
        resolveLinkWithUrl:incomingURL
        resolveUrlSuffixArray:@[
        @"email.example.com", @"short.example.com"
        ]
        callback:^(NSURL* _Nullable resolvedURL) {
            // add your code below to handle deep link
            // (e.g., open deep link content)
            // resolvedURL object contains the deep link
            
            
            // call the below method to send deep link to Adjust backend
            [Adjust appWillOpenUrl:resolvedURL];
        }];
    }
}

- (void)scene:(UIScene *)scene continueUserActivity:(NSUserActivity *)userActivity{
    if ([[userActivity activityType]
        isEqualToString:NSUserActivityTypeBrowsingWeb]) {
        NSURL *incomingURL = [userActivity webpageURL];
        
        // call the below method to resolve deep link
        [ADJLinkResolution
        resolveLinkWithUrl:incomingURL
        resolveUrlSuffixArray:@[
        @"email.example.com", @"short.example.com"
        ]
        callback:^(NSURL* _Nullable resolvedURL) {
            // add your code below to handle deep link
            // (e.g., open deep link content)
            // resolvedURL object contains the deep link
            
            
            // call the below method to send deep link to Adjust backend
            [Adjust appWillOpenUrl:resolvedURL];
        }];
    }
}
```
:::
::::

```{rubric} Custom URL scheme
```

1. Update the `scene(_:willConnectTo:options:)` method in your scene delegate. When a user clicks on your custom URL scheme deep link and the user has your app closed, iOS opens your app and delivers the deep link to this method.
2. Update the `scene(_:openURLContexts:)` method in your scene delegate. When a user clicks on your custom URL scheme deep link, and the user has your app running in the background, iOS opens your app and delivers the deep link to this method.

These methods call the `Adjust.appWillOpen` method in the Adjust SDK. This method sends deep links to Adjust's servers to recordd them. You can pass both Adjust and non-Adjust deep links to this method. Adjust's servers ignore any deep links that don’t have Adjust parameters.

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
func scene(
    _ scene: UIScene,
    openURLContexts URLContexts: Set<UIOpenURLContext>
    ) {

    guard let incomingURL = URLContexts.first?.url else {
        return
    }
    
    // add your code below to handle deep link
    // (e.g., open deep link content)
    // incomingURL object contains the deep link


    // call the below method to send deep link to Adjust backend
    Adjust.appWillOpen(incomingURL)
}
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
- (void)scene:(UIScene *)scene
    openURLContexts:(nonnull NSSet<UIOpenURLContext *> *)URLContexts {
    
    NSURL *incomingURL = [[URLContexts allObjects] firstObject].URL;
    
    if (incomingURL) {
        // add your code below to handle deep link
        // (e.g., open deep link content)
        // incomingURL object contains the deep link


        // call the below method to send deep link to Adjust backend
        [Adjust appWillOpenUrl:incomingURL];
    }
}
```
:::
::::
:::::
