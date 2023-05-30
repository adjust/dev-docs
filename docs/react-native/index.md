# Get started

The Adjust React Native SDK enables you to track attribution, events, and much more in your React Native app. Follow the steps in this guide to set up your app to work with the Adjust SDK. You can also check out our example apps on [GitHub](https://github.com/adjust/react_native_sdk/tree/master/example).

:::{important}
The Adjust SDK supports iOS 9 or later and Android API level 9 (Gingerbread) or later.
:::

## 1. Add the SDK to your project

To use the Adjust SDK in your React Native app, you need to add it to your project. Follow these steps to add it:
1. Download the React Native library using one of the following options.

:::{dropdown} Github releases page
You can download the latest version of the SDK from Adjust's React Native SDK [GitHub releases page](https://github.com/adjust/react_native_sdk/releases).

:::

:::{dropdown} NPM
Run the following command on your terminal:

```console
$ npm install react-native-adjust --save
```
:::

2. Install the CocoaPods dependencies for your iOS app by running the following command on your terminal:

```console
$ cd ios && pod install
```
## 2. Integrate the SDK

To integrate the SDK with your project, you must import Adjust's SDK configuration to your main app Javascript file.

Add the following line at the beginning of your app's {file}`.js` file:

```js
import { Adjust, AdjustEvent, AdjustConfig } from 'react-native-adjust';
```
## 3. Initialize the Adjust SDK

Make sure you initialize the Adjust SDK as soon as possible in your React Native app. To do this, initialize your config object with your app token and the environment you want to run your application in. Add the following lines of code to your app's {file}`.js` file:

```js
constructor(props) {
    super(props);
    const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
    Adjust.create(adjustConfig);
}

componentWillUnmount() {
  Adjust.componentWillUnmount();
}
```
Pass the {code}`AdjustConfig` arguments:

- Replace {code}`{YourAppToken}` with your token. See [App settings](https://help.adjust.com/en/article/app-settings#view-your-app-token) for instructions on how to find your token.
- Choose your Environment:
   - Use {code}`AdjustConfig.EnvironmentSandbox` if you are testing your app and want to send test data. You need to enable [sandbox mode](https://help.adjust.com/en/article/filter-data#sandbox) in the dashboard to see test data.
   - Use {code}`AdjustConfig.EnvironmentProduction` when you have finished testing and are ready to release your app.

:::{important}
When running tests you should ensure that your environment is set to {code}`AdjustEnvironment.sandbox`. Change this to {code}`AdjustEnvironment.production` before you submit your application to the app store.
:::

## 4. Set up Android devices

### Add permissions

The Adjust SDK requires the following permissions. Add them to your {file}`AndroidManifest.xml` file if they're not already present:

```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```


:::{note}
The Adjust SDK doesn't require the {code}`ACCESS_WIFI_STATE` permission if you are targeting the __Google Play Store__ and using __Google Play Services__. If you don't need it anywhere else in your app, you can remove it.
:::

The Adjust SDK includes the {code}`com.google.android.gms.AD_ID` permission by default in version 4.32.0 and above. You can remove it by adding a {code}`remove` directive if need to make your app COPPA-compliant or if you don't target the Google Play Store.

```xml
<uses-permission android:name="com.google.android.gms.permission.AD_ID"/>
```

:::{seealso}

:::{seealso}
See Google's [`AdvertisingIdClient.Info`](https://developers.google.com/android/reference/com/google/android/gms/ads/identifier/AdvertisingIdClient.Info#public-string-getid) documentation for more information about this permission.
:::
:::

### Add Google Play Services

Apps that target the Google Play Store must use the [Google Advertising ID](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) ({abbr}`gps_adid`) to identify devices. To do this, Add the following dependency to the {code}`dependencies` section of your {file}`build.gradle` file.

```
implementation 'com.google.android.gms:play-services-ads-identifier:18.0.1'
```


:::{note}
The Adjust SDK isn't tied to any version of the {code}`play-services-ads-identifier` dependency. You can use the any version of the Google Play Services library.
:::

### Set up Proguard

If you are using Proguard, add the following rules to your Proguard file.

```java
-keep class com.adjust.sdk.** { *; }
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

The install referrer is an attribution mechanism you can use to attribute an app install to a source. It consists of two parts:

- [x] A set of APIs from these app stores that allow developers to retrieve referral content in their apps.
- [x] A {code}`referrer` parameter that app stores, such as Google Play and Huawei App Gallery, accept in their app page URLs on their store websites. Here is how the referrer parameter is populated:
   - When a user clicks on an Adjust Tracker, the Adjust server passes a unique identifier called {code}`reftag`. This identifier is assigned to the click and into the referrer parameter. To know more about reftag, visit [Reftag](https://help.adjust.com/en/article/reftag).
   - When you run [Google Ads](https://support.google.com/google-ads/answer/6357635?hl=en) campaigns, Google passes a unique identifier called {code}`gclid` into the referrer parameter. You must have {guilabel}`Auto-tagging` turned on in your Google Ads account.

:::{note}
Although install referrer isn't required, it's highly recommended to improve attribution precision.
:::

::::{dropdown} Google Play Referrer API

:::{note}
This feature is supported in Adjust SDK v4.12.0 and later.
:::

To support the [Google Play Referrer API](https://developer.android.com/google/play/installreferrer):
1. Add the following line in the __dependencies block__ of your top-level {file}`build.gradle` file:

```groovy
dependencies {
//...
implementation 'com.android.installreferrer:installreferrer:2.2'
//...
}
```

2. The {code}`installreferrer` library is part of __Google Maven__ repository. You need to add Google Maven repository to your app's top-level {file}`build.gradle` file to build your app:

```groovy
allprojects {
    repositories {
        maven {
            url "https://maven.google.com"
        }
    }
}

```
3. If you are using Proguard, make sure you have added the following setting in your Proguard file:

```java
-keep public class com.android.installreferrer.** { *; }
```

::::

:::{dropdown} Huawei Referrer API
As of v4.22.0, the Adjust SDK supports install tracking on Huawei devices using Huawei App Gallery v10.4 and later. You don't need to make any changes to start using the Huawei Referrer API.
:::

## 5. Add iOS frameworks

The Adjust SDK is able to get extra information when you include certain iOS frameworks in your app. These frameworks enable certain SDK features, but they're not mandatory for the SDK to work normally. You can add the frameworks and then mark them as optional in {menuselection}`Project Settings --> Build Phases --> Link Binary With Libraries`.

:::{list-table}
:header-rows: 1

* - Framework
   - Description
   - Notes
* - {guilabel}`AdSupport.framework`
   - This framework is needed so that the SDK can access the IDFA value and, before iOS 14, LAT information.
   - If your app is targeting the "Kids" category, you shouldn't implement this framework.
* - {guilabel}`AdServices.framework`
   - This framework is needed to handle Apple Search Ads attribution.
   - 
* - {guilabel}`StoreKit.framework`
   - This framework is needed to access the SKAdNetwork framework and for the Adjust SDK to handle communication with it automatically in iOS 14 or later.
   - 
* - {guilabel}`AppTrackingTransparency.framework`
   - This framework is needed in iOS 14 and later for the SDK to be able to wrap the user tracking consent dialog and access the user’s consent response.
   - If your app is targeting the "Kids" category, you shouldn't implement this framework.
:::

## 6. Add the Adjust SDK signature

You can use the Adjust SDK signature to sign all communications sent by the Adjust SDK. This enables Adjust’s servers to detect and reject any install activity that isn't legitimate.

To get started with the Adjust SDK signature, contact your Technical Account Manager or <support@adjust.com>.

## 7. Test your integration

The Adjust SDK provides tools for testing and troubleshooting issues with your integration. To test your setup:

- Set your environment to __Sandbox__.
- Add a [sandbox filter](https://help.adjust.com/en/article/filter-data#sandbox) to your Adjust dashboard results.
- Set your log level to __verbose__.

:::{tip}
If you encounter any issues, email <support@adjust.com> with all details and logs.
:::

:::{dropdown} Test Google Play Services integration
To test that the Adjust SDK can receive a device's Google Advertising ID, set the log level to __verbose__ and the environment to __Sandbox__. Start your app and record a session or an event. The SDK logs the `gps_adid` parameter if it has read the advertising ID.

If you're having issues retrieving the Google Advertising ID, open an issue on the SDK [GitHub repository](https://github.com/adjust/react_native_sdk) or contact <support@adjust.com>.
:::
