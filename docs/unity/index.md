# Get started

The Adjust Unity SDK enables you to measure attribution, events, and more in your Unity app. Follow the steps in this guide to set up your app to work with the Adjust SDK.

:::{important}
The Adjust SDK supports iOS 9 or later and Android API level 9 (Gingerbread) or later.
:::

## 1. Get the Adjust SDK

To use the Adjust SDK in your Unity app, you need to add it to your project. You can download the latest version from the [GitHub releases page](https://github.com/adjust/adjust_unity_sdk/releases).

To import the Adjust SDK to your Unity project:

1. Open the Unity Editor.
2. Select {menuselection}`Assets --> Import Package --> Custom Package`.
3. Select the downloaded SDK package.

## 2. Integrate the SDK

The Adjust SDK contains a Unity [prefab](https://docs.unity3d.com/Manual/Prefabs.html) that includes a template game object and an Adjust script. You can use this script to configure the SDK. To open the prefab in the Unity editor:

1. Add the prefab from {file}`Assets/Adjust/Adjust.prefab` to your first scene.
2. Open the prefab Inspector Menu.
3. The prefab menu contains editable fields that control the behavior of the Adjust SDK.

```{image} https://images.ctfassets.net/5s247im0esyq/4sh9TsPWBDWrQSMz3HFWu7/69607cff5c78059a6fac9eed2ad2aa31/unity.png
:alt: A screenshot of the Adjust SDK prefab configuration script in the Unity editor.
:title: A screenshot of the Adjust SDK prefab configuration script in the Unity editor.
```

To set up the Adjust SDK, enter the following information:

1. Your **App Token**. See App settings for instructions on how to find your token.
2. Your **Environment**:
   * Choose **Sandbox** if you are testing your app and want to send test data. You need to enable sandbox mode in the dashboard to see test data.
   * Choose **Production** when you have finished testing and are ready to release your app.
3. Your **Log Level**. This controls what logs you receive. See Set log level for more information.

The Adjust SDK starts when the app's Awake event triggers by default. To override this behavior, check the {guilabel}`START SDK MANUALLY` option. This enables you to initialize the Adjust SDK by calling {code}`Adjust.start()` with your config instance as an argument.

::::{tab-set}

:::{tab-item} C#

```{code-block} csharp
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
// ...
Adjust.start(adjustConfig);
```

:::

::::

## 3. Set up Android devices

### Add Google Play Services

Apps that target the Google Play Store must use the {abbr}`gps_adid (Google Advertising ID)` to identify devices. You need to add the play-services-ads-identifier AAR to your project to access the `gps_adid`.

:::{dropdown} Google External Dependency Manager
If you are using the [Google External Dependency Manager plugin](https://developers.google.com/unity/archive#external_dependency_manager_for_unity), add the following to your {file}`Dependencies.xml` file:

```{code-block} xml
<androidPackages>
    <androidPackage spec="com.google.android.gms:play-services-ads-identifier:18.0.1" />
</androidPackages>
```
:::

:::{dropdown} Manual installation

To install the {abbr}`ARR (Android Archive)` manually, [download it from Maven](https://maven.google.com/web/index.html#com.google.android.gms:play-services-ads-identifier:18.0.1 "A link to the AAR artifact on Maven.") and add it to the {file}`Assets/Plugins/Android` directory.

:::

### Set up Proguard

If you are using Proguard, add the following rules to your [custom Proguard file](https://docs.unity3d.com/Manual/class-PlayerSettingsAndroid.html#build).

```{code-block} groovy
-keep public class com.adjust.sdk.** { *; }
-keep class com.google.android.gms.common.ConnectionResult {
    int SUCCESS;
}
-keep class com.google.android.gms.ads.identifier.AdvertisingIdClient {
    com.google.android.gms.ads.identifier.AdvertisingIdClient$Info getAdvertisingIdInfo(android.content.Context);
}
-keep class com.google.android.gms.ads.identifier.AdvertisingIdClient$Info {
    java.lang.String getId();
    boolean isLimitAdTrackingEnabled();
}
-keep public class com.android.installreferrer.** { *; }
```

### Set up install referrer

The install referrer is a unique identifier which you can use to attribute an app install to a source. The Adjust SDK requires this information to perform attribution. There are two methods you can use to gather this information depending on which stores you target:

- Use the [Google Play Referrer API](https://developer.android.com/google/play/installreferrer).
- Use the Huawei Referrer API.

:::{dropdown} Google Play Referrer API

There are 2 ways to add support for the Google Play Referrer API:

1. Add the install referrer library as a dependency in a [custom `build.gradle` file](https://docs.unity3d.com/2023.1/Documentation/Manual/android-gradle-overview.html)

```{code-block} groovy
dependencies {
   implementation 'com.android.installreferrer:installreferrer:2.2'
}
```

2. Download the install referrer library from [Maven](https://maven.google.com/web/index.html?q=install#com.android.installreferrer:installreferrer) and put the {abbr}`ARR (Android Archive)` file in your {file}`Plugins/Android` folder.

:::

:::{dropdown} Huawei Referrer API

As of v4.21.1, the Adjust SDK supports install tracking on Huawei devices using Huawei App Gallery v10.4 and later. You don't need to make any changes to start using the Huawei Referrer API.

:::

## 4. Build your app

To complete the app build process, the Adjust Unity package performs custom post-build actions to ensure the Adjust SDK works in your app.

This process is performed by the {code}`OnPostprocessBuild` method in {file}`AdjustEditor.cs`. Output logs show up in the Unity IDE console output window.

```{image} https://images.ctfassets.net/5s247im0esyq/5yFmvFN4y3LJSieJQcF4qE/bad5913682af34cfe61224daca312373/post-build-unity.png
:alt:  A screenshot of the Adjust SDK post-build configuration script in the Unity editor. 
```

::::{dropdown} iOS

:::{important}
To run the iOS post-build process, make sure that you have {guilabel}`iOS build support` installed in the Unity Editor.
:::

The iOS post-build process makes the following changes to your generated Xcode project:

* Adds the other linker flag `-ObjC`: required to recognize Adjust Objective-C categories at build time.
* Enables Objective-C exceptions.

```{rubric} Frameworks
```

You can enable the following frameworks to access iOS features:

* {guilabel}`AdServices.framework`: required for Apple Search Ads tracking
* {guilabel}`AdSupport.framework`: required to read the device IDFA
* {guilabel}`AppTrackingTransparency.framework`: required to ask for user's consent to be tracked and obtain consent status 
* {guilabel}`StoreKit.framework`: required to communicate with the SKAdNetwork framework.
* {guilabel}`iAd.framework` {bdg-warning}`Deprecated` - use AdServices.framework

```{rubric} App Tracking Transparency consent dialog
```

If you are using the {abbr}`ATT (App Tracking Transparency)` wrapper, enter a **User Tracking Description** message. This displays when you present the tracking consent dialog to your user.

```{rubric} Deep linking
```

To enable deep linking, add the following information:

* {guilabel}`iOS Universal Links Domain`: the associated domain used for universal links.
* {guilabel}`iOS URL Identifier`: your app's bundle ID.
* {guilabel}`iOS URL Schemes`: the URL scheme associated with your app.

::::

::::{dropdown} Android

The Android post-build process checks for an {file}`AndroidManifest.xml` file in {file}`Assets/Plugins/Android/`. If this file isn't present, it creates a copy from [{file}`AdjustAndroidManifest.xml`](https://github.com/adjust/unity_sdk/blob/master/Assets/Adjust/Android/AdjustAndroidManifest.xml "A link to the AdjustAndroidManifest file on GitHub").

```{rubric} Permissions
```

You can enable the following permissions to access Android features:

* {guilabel}`android.permission.INTERNET`: required to connect to the internet.
* {guilabel}`android.permission.ACCESS_NETWORK_STATE`: required to read the type of network the device is connected to.
* {guilabel}`com.android.finsky.permission.BIND_GET_INSTALL_REFERRER_SERVICE` {bdg-warning}`Deprecated`: required to fetch install referrer information via Google Play Store intent.
* {guilabel}`com.google.android.gms.permission.AD_ID`: required to read the device advertising ID on Android 12 (API level 31) and above. See [Google's `AdvertisingIdClient.info` documentation](https://developers.google.com/android/reference/com/google/android/gms/ads/identifier/AdvertisingIdClient.Info#public-string-getid) for more information.

```{rubric} Deep linking
```

To enable deep linking, add the following information:

* {guilabel}`Android URI Schemes`: the destination of your deep link.

::::

## 5. Add the Adjust SDK signature

You can use the Adjust SDK signature to sign all communications sent by the Adjust SDK. This enables Adjust’s servers to detect and reject any install activity that's not legitimate.

To get started with the Adjust SDK signature, contact your Technical Account Manager or <support@adjust.com>.

## 6. Test your integration

The Adjust SDK provides tools for testing and troubleshooting issues with your integration. To test your setup:

* Set your environment to **Sandbox**.
* Add a sandbox filter to your Adjust dashboard results.
* Set your log level to **verbose**.

:::{tip}
If you encounter any issues, email <support@adjust.com> with all details and logs.
:::

:::{dropdown} Test Google Play Services integration

To test that the Adjust SDK can receive a device's Google Advertising ID, set the [log level](#set-your-log-level) to **verbose** and the environment to **Sandbox**. Start your app and measure a session or an event. The SDK logs the {abbr}`gps_adid (Google Play Services Advertiser ID)` parameter if it has read the advertising ID.

If you are having issues retrieving the Google Advertising ID, open an issue in the [GitHub repository](https://github.com/adjust/unity_sdk) or contact <support@adjust.com>.

:::
