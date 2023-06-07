# Get started

TThe Adjust Flutter SDK enables you to measure attribution, events, and much more in your Flutter app. Follow the steps in this guide to set up your app to work with the Adjust SDK. You can also check out our example apps [on GitHub](https://github.com/adjust/flutter_sdk/tree/master/example).

:::{important}
The Adjust SDK supports iOS 9 or later and Android API level 9 (Gingerbread) or later.
:::

## 1. Add the SDK to your project

To use the [Adjust Flutter SDK](https://github.com/adjust/flutter_sdk/releases) in your Flutter app, you need to add it to your project.

To import the Adjust SDK to your Flutter project, follow these steps:

1. Add the following to your `pubspec.yaml` file:

```
dependencies:
  adjust_sdk: ^4.31.0
```

2. Navigate to your project and run the following command. Visual Studio automatically runs this command after you edit the `pubspec.yaml` file. 

```dart
flutter packages get
```

## 2. Set up Android devices

### Add Google Play Services

Apps that target the Google Play Store must use the [Google Advertising ID](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) (`gps_adid`) to identify devices. To do this, Add the following dependency to the `dependencies` section of your `build.gradle` file.

```
implementation 'com.google.android.gms:play-services-ads-identifier:18.0.1'
```

:::{note} 
The Adjust SDK is not tied to any version of the `play-services-ads-identifier` dependency. You can use the any version of the Google Play Services library.
:::

### Add permissions

The Adjust SDK requires the following permissions. Add them to your `AndroidManifest.xml` file if they are not already present:

```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

The Adjust SDK includes the `com.google.android.gms.AD_ID` permission by default in version 4.32.0 and above. You can remove it by adding a `remove` directive if need to make your app COPPA-compliant or if you do not target the Google Play Store.

```xml
<uses-permission android:name="com.google.android.gms.permission.AD_ID" tools:node="remove"/>
```

See Google's [AdvertisingIdClient.Info documentation](https://developers.google.com/android/reference/com/google/android/gms/ads/identifier/AdvertisingIdClient.Info#public-string-getid) for more information about this permission.

### Set up Proguard

If you are using Proguard, add the following rules to your [custom Proguard file](https://docs.unity3d.com/Manual/class-PlayerSettingsAndroid.html#build).

```groovy
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

If you are not publishing your app in the Google Play Store, add the following rule to your Proguard file.

```
-keep public class com.adjust.sdk.** { *; }
```

### Set up install referrer

The install referrer is a unique identifier which you can use to attribute an app install to a source. The Adjust SDK requires this information to perform attribution. There are three methods you can use to gather this information:

* Use the [Google Play Referrer API](https://developer.android.com/google/play/installreferrer).
* Use the Huawei Referrer API (only for Huawei devices).

:::{important} Optional title
[Google has deprecated the `INSTALL_REFERRER` intent method](https://android-developers.googleblog.com/2019/11/still-using-installbroadcast-switch-to.html) of delivering referrer information for Google Play Services. If you are currently using this method, migrate to the Google Play Referrer API.
:::

:::{dropdown} Google Play Referrer API

:::{note} 
This feature is supported in Adjust SDK v4.12.0 and later.
:::

To support the Google Play Referrer API, add the following in your `build.gradle` file:

```text
implementation 'com.android.installreferrer:installreferrer:2.2'
```

If you are using Proguard, make sure you have added the following setting in your Proguard file:

```text
-keep public class com.android.installreferrer.** { *; }
```

:::

:::{dropdown} Huawei Referrer API

As of v4.22.0, the Adjust SDK supports install tracking on Huawei devices using Huawei App Gallery v10.4 and later. You do not need to make any changes to start using the Huawei Referrer API.

:::

## 3. Add iOS frameworks

The Adjust SDK is able to get extra information when you include certain iOS frameworks in your app. These frameworks enable certain SDK features, but they are not madatory for the SDK to work. You can add the frameworks and then mark them as optional in {menuselection}`Project Settings --> Build Phases --> Link Binary With Libraries`.

:::{list-table}
:header-rows: 1

* - Framework
   - Description
   - Notes
* - `AdSupport.framework`
   - Enables access to the device's IDFA. Also enables access to LAT information on devices running iOS 14 or earlier.
   - Don't add this framework if your app targets the "Kids" category.
* - `AdServices.framework`
   - Handles Apple Search Ads attribution.
   -
* - `StoreKit.framework`
   - Enables access to the SKAdNetwork framework.
   - Required to allow the Adjust SDK to handle communication with SKAdNetwork on devices running iOS 14 or later.
* - `AppTrackingTransparency.framework`
   - Required to allow the Adjust SDK to wrap user tracking consent dialog and access consent responses on devices running iOS 14 or later.
   - Don't add this framework if your app targets the "Kids" category.

:::

## 4. Initialize the Adjust SDK

Make sure you initialize the Adjust SDK as soon as possible in your Flutter app. To do this, initialize your config object with your app token and the environment you want to run your application in. 

:::{important}
When running tests you should ensure that your environment is set to `AdjustEnvironment.sandbox`. Change this to `AdjustEnvironment.production` before you submit your application to the app store.
:::

:::{tab-set-code}

```dart
AdjustConfig config = new AdjustConfig('{YourAppToken}', AdjustEnvironment.sandbox);
Adjust.start(config);
```

:::

## 5. Set up session tracking

You need to set up session tracking so that the SDK can pass session information to the Adjust backend.

:::{note}
Session tracking for iOS devices is supported, by default.
:::

To set up session tracking for Android devices, call the `Adjust.onResume()` method when the app is running in the foreground and make a call to the `Adjust.onPause()` method when the app is not running in the foreground. You can do this globally or per widget.

```dart
class AdjustExampleApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Adjust Flutter Example App',
      home: new MainScreen(),
    );
  }
}

class MainScreen extends StatefulWidget {
  @override
  State createState() => new MainScreenState();
}

class MainScreenState extends State<MainScreen> with WidgetsBindingObserver {
  @override
  initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    initPlatformState(); // <-- Initialise SDK in here.
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    switch (state) {
      case AppLifecycleState.inactive:
        break;
      case AppLifecycleState.resumed:
        Adjust.onResume();
        break;
      case AppLifecycleState.paused:
        Adjust.onPause();
        break;
      case AppLifecycleState.suspending:
        break;
    }
  }
}
```

## 6. Build your app

Well done! You should now be able to build and run your Flutter app. [Enable logging](/flutter/reference/AdjustConfig#log-level) to check for any issues. Check your logs to see the `Install tracked` message. 

You are ready to start attributing your users with the Adjust SDK.

## 7. Add the Adjust SDK signature

You can use the Adjust SDK signature to sign all communications sent by the Adjust SDK. This enables Adjust’s servers to detect and reject any install activity that is not legitimate.

To get started with the Adjust SDK signature, contact your Technical Account Manager or <support@adjust.com>.

## 8. Test your integration

The Adjust SDK provides tools for testing and troubleshooting issues with your integration. To test your setup:

* Set your environment to __Sandbox__.
* Add a sandbox filter to your Adjust dashboard results.
* Set your [log level](/flutter/reference/AdjustConfig#log-level) to **verbose**.

:::{tip}
If you encounter any issues, email <support@adjust.com> with all details and logs.
:::

:::{dropdown} Test Google Play Services integration
To test that the Adjust SDK can receive a device's Google Advertising ID, set the [log level](/flutter/reference/AdjustConfig#log-level) to **verbose** and the environment to **Sandbox**. Start your app and measure a session or an event. The SDK logs the {abbr}`gps_adid (Google Play Services Advertiser ID)` parameter if it has read the advertising ID.

If you are having issues retrieving the Google Advertising ID, open an issue in our [GitHub repository](https://github.com/adjust/flutter_sdk) or contact <support@adjust.com>.
:::





