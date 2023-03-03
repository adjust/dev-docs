# Get started

The Adjust Unity SDK enables you to record attribution, events, and more in your Android app. Follow the steps in this guide to set up your app to work with the Adjust SDK.

:::{seealso}
You can see an example of how to integrate the Adjust SDK [on GitHub](https://github.com/adjust/android_sdk/tree/master/Adjust).
:::

## 1. Get the Adjust SDK

To use the Adjust SDK in your Unity app, you need to add it to your project. You can download the latest version from the [GitHub releases page](https://github.com/adjust/adjust_android_sdk/releases/latest).

:::{important}
The minimum supported Android API level for the Adjust SDK integration is 9 (Gingerbread).

The minimum supported Android API level for the web view extension is 17 (Jelly Bean).
:::

If you're using [Maven](https://maven.apache.org/), add the following to your {file}`build.gradle` file:

```groovy
dependencies {
   implementation 'com.adjust.sdk:adjust-android:4.33.3'
   implementation 'com.android.installreferrer:installreferrer:2.2'
   // Add the following if you're using the Adjust SDK inside web views on your app
   implementation 'com.adjust.sdk:adjust-android-webbridge:4.33.3'
}
```

## 2. Add Google Play Services

Apps that target the Google Play Store must use the {abbr}`gps_adid (Google Advertising ID)` to identify devices. You need to add the `play-services-ads-identifier` AAR to your project to access the `gps_adid`.

If you're using Maven, add the following to your {file}`build.gradle` file:

```groovy
dependencies {
   implementation 'com.google.android.gms:play-services-ads-identifier:18.0.1'
}
```

## 3. Add permissions

To give the Adjust SDK access to device information, you need to declare which permissions your app requires. To do this, add permissions to your {file}`AndroidManifest.xml` file.

Add the following permissions to get access to online features:

```xml
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

If your app doesn't target the Google Play Store, add the following permission to access the device's network state:

```xml
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
```

:::{versionchanged} v4.31.1
The Adjust SDK includes the `com.google.android.gms.AD_ID` permission by default. If you need to make your app {abbr}`COPPA (Children's Online Privacy Protection Act)` compliant or if your app doesn't target the Google Play Store, you must remove this permission using a `remove` directive.
:::

```xml
<uses-permission android:name="com.google.android.gms.permission.AD_ID" tools:node="remove"/>
```

## 4. Set up Proguard

If you're using Proguard to optimize your app, you must add rules to prevent Proguard from removing classes.

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

If you're not publishing your app in the Google Play Store, add the following rule:

```java
-keep public class com.adjust.sdk.** { *; }
```

## 5. Set up install referrer

An install referrer is a unique identifier used to attribute an install to a source. The Adjust SDK requires this information to perform attribution. Use one of the following methods to retrieve the install referrer information:

### Google Play Referrer API

:::{versionadded} v4.12.0
The Google Play Referrer API is available to apps that target the Google Play Store.
:::

To support the Google Play Referrer API, add the following to your {file}`build.gradle` file:

```groovy
dependencies {
   implementation 'com.android.installreferrer:installreferrer:2.2'
}
```

If you're using Proguard, remember to add a rule to prevent the dependency from being removed.

```java
-keep public class com.android.installreferrer.** { *; }
```

### Huawei Referrer API

:::{versionadded} v4.21.1
The Huawei Referrer API is available to apps that target Huawei devices. The Adjust SDK can record installs on Huawei devices using Huawei App Gallery v10.4 and later. You don't need to make any changes to support this API.
:::

### Xiaomi referrer plugin

:::{versionadded} v4.31.0
The Xiami referrer plugin enables you to record install referrer values for apps that target Xiaomi devices. See the plugin documentation for install information.
:::

### Samsung referrer plugin

:::{versionadded} v4.33.0
The Samsung referrer plugin enables you to record install referrer values for apps that target the Samsung Galaxy store. See the plugin documentation for install information.
:::

## 6. Integrate the Adjust SDK

The following information is required to initialize the Adjust SDK:

`appToken`
   : Your [Adjust app token](https://help.adjust.com/en/article/app-settings#view-your-app-token).

`environment`
   : The environment your app is running in. Set this to `AdjustConfig.ENVIRONMENT_SANDBOX` to test your app locally.

The recommended way to initialize the Adjust SDK is inside a global Android [Application class](http://developer.android.com/reference/android/app/Application.html). If you haven't already set this up for your app, follow these steps:

1. Create a class that extends the `Application`.
2. Open the {file}`AndroidManifest.xml` file and locate the `<application>` element.
3. Add the `android:name` attribute to the `<application>` element and set it to the name of your application class. For example, if your `Application` class is named `GlobalApplication`, you would set the following:

   ```xml
   <application android:name=".GlobalApplication">
      <!-- ... -->
   </application>
   ```

4. Find the `onCreate` method in your `Application` class or add one if it doesn't exist. Pass the following parameters to initialize the Adjust SDK:
   * Your `appToken`
   * The `environment` you want to run the app in
   * The `LogLevel` you want to record

   :::{tab-set-code}

   ```kotlin
   import com.adjust.sdk.Adjust;
   import com.adjust.sdk.AdjustConfig;

   class GlobalApplication : Application () {
      override fun onCreate() {
         super.onCreate()

         val appToken = "{YourAppToken}"
         val environment = AdjustConfig.ENVIRONMENT_SANDBOX;
         val config = AdjustConfig(this, appToken, environment)
         config.setLogLevel(LogLevel.VERBOSE)
         Adjust.onCreate(config)
      }
   }
   ```

   ```java
   import com.adjust.sdk.Adjust;
   import com.adjust.sdk.AdjustConfig;

   public class GlobalApplication extends Application {
      @Override
      public void onCreate() {
         super.onCreate();

         String appToken = "{YourAppToken}";
         String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
         AdjustConfig config = new AdjustConfig(this, appToken, environment);
         config.setLogLevel(LogLevel.VERBOSE)
         Adjust.onCreate(config);
      }
   }
   ```

   :::

### Integrate the Adjust Web View SDK

If your app uses web views, you need to use the Adjust Web View SDK to record information. You need to obtain the reference to your `WebView` object. Once you've done this, follow these steps:

1. Call `webView.getSettings().setJavaScriptEnabled(true)` to enable Javascript in the web view.
2. Start the default `AdjustBridgeInstance` by calling `AdjustBridge.registerAndGetInstance(getApplication(), webview)`. This registers the Adjust bridge as a Javascript interface in the web view.
3. Call `AdjustBridge.setWebView()` to set a new `WebView`.
4. Call `AdjustBridge.unregister()` to unregister the `AdjustBridgeInstance` and the `WebView`.
5. Here's an example of a full setup:

   :::{tab-set-code}

   ```kotlin
   class MainActivity : Activity() {
      override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.activity_main)

            val webView = findViewById<WebView>(R.id.webView)
            webView.settings.javaScriptEnabled = true
            webView.webChromeClient = WebChromeClient()
            webView.webViewClient = WebViewClient()

            AdjustBridge.registerAndGetInstance(application, webView)
            try {
               webView.loadUrl("file:///android_asset/AdjustExample-WebView.html")
            } catch (e: Exception) {
               e.printStackTrace()
            }
      }

      override fun onDestroy() {
         AdjustBridge.unregister()

         super.onDestroy()
      }
   }
   ```

   ```java
   public class MainActivity extends Activity {
      @Override
      protected void onCreate(Bundle savedInstanceState) {
         super.onCreate(savedInstanceState);
         setContentView(R.layout.activity_main);

         WebView webView = (WebView) findViewById(R.id.webView);
         webView.getSettings().setJavaScriptEnabled(true);
         webView.setWebChromeClient(new WebChromeClient());
         webView.setWebViewClient(new WebViewClient());

         AdjustBridge.registerAndGetInstance(getApplication(), webview);
         try {
               webView.loadUrl("file:///android_asset/AdjustExample-WebView.html");
         } catch (Exception e) {
               e.printStackTrace();
         }
      }

      @Override
      protected void onDestroy() {
         AdjustBridge.unregister();

         super.onDestroy();
      }
   }
   ```

   :::

6. Import the Adjust Javascript files in your HTML:

   ```html
   <script type="text/javascript" src="adjust.js"></script>
   <script type="text/javascript" src="adjust_event.js"></script>
   <script type="text/javascript" src="adjust_third_party_sharing.js"></script>
   <script type="text/javascript" src="adjust_config.js"></script>
   ```

7. You can now initialize the Adjust SDK in your web view by passing your `appToken` and `environment` to the `AdjustConfig` class:

   ```js
   let yourAppToken = '{YourAppToken}';
   let environment = AdjustConfig.EnvironmentSandbox;
   let adjustConfig = new AdjustConfig(yourAppToken, environment);
   adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);
   Adjust.onCreate(adjustConfig);
   ```

## 7. Configure session recording

To record session information, you need to call methods at different stages of your app's [activity lifecycle](https://developer.android.com/guide/components/activities/activity-lifecycle). These stages are different depending on the API level your app targets.

### API level 14 and above

To set up session recording for API level 14 and above:

1. If you have `Adjust.onResume` and `Adjust.onPause` calls in your activities, remove them.
2. Add a private class that implements the `ActivityLifecycleCallbacks` interface.
3. Edit the `onActivityResumed(Activity activity)` method and add a call to `Adjust.onResume()`.
4. Edit the `onActivityPaused(Activity activity)` method and add a call to `Adjust.onPause()`.
5. Add the `onCreate()` method to your Adjust SDK configuration step.
6. Call `registerActivityLifecycleCallbacks` with an instance of the created `ActivityLifecycleCallbacks` class:

   :::{tab-set-code}

   ```kotlin
   import com.adjust.sdk.Adjust;
   import com.adjust.sdk.AdjustConfig;

   class GlobalApplication : Application () {
      override fun onCreate() {
         super.onCreate()

         val appToken = "{YourAppToken}"
         val environment = AdjustConfig.ENVIRONMENT_SANDBOX;
         val config = AdjustConfig(this, appToken, environment)
         config.setLogLevel(LogLevel.VERBOSE)
         Adjust.onCreate(config)

         registerActivityLifecycleCallbacks(AdjustLifecycleCallbacks())
      }

      private class AdjustLifecycleCallbacks : Application.ActivityLifecycleCallbacks {
         override fun onActivityResumed(activity: Activity) {
            Adjust.onResume()
         }

         override fun onActivityPaused(activity: Activity) {
            Adjust.onPause()
         }
      }
   }
   ```

   ```java
   import com.adjust.sdk.Adjust;
   import com.adjust.sdk.AdjustConfig;

   public class GlobalApplication extends Application {
      @Override
      public void onCreate() {
         super.onCreate();

         String appToken = "{YourAppToken}";
         String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
         AdjustConfig config = new AdjustConfig(this, appToken, environment);
         config.setLogLevel(LogLevel.VERBOSE)
         Adjust.onCreate(config);

         registerActivityLifecycleCallbacks(new AdjustLifecycleCallbacks());
      }

      private static final class AdjustLifecycleCallbacks implements ActivityLifecycleCallbacks {
         @Override
         public void onActivityResumed(Activity activity) {
            Adjust.onResume();
         }

         @Override
         public void onActivityPaused(Activity activity) {
            Adjust.onPause();
         }
      }
   }
   ```

   :::

### API level 9 to 13

:::{tip}
If the `minSdkVersion` in your {file}`build.gradle` file is between 9 and 13, consider changing it to 14 or above. Check the [Android dashboard](http://developer.android.com/about/dashboards/index.html) for information about the market share of major versions.
:::

To set up session recording in apps targeting API level 13 and below, follow these steps:

1. Add a call to `Adjust.onResume()` in your activity's `onResume` method.
2. Add a call to `Adjust.onPause()` in your activity's `onPause` method.
3. Repeat these steps for each activity in your app. Depending on your coding style, you might want to add this in a common superclass of all your activities.

:::{tab-set-code}

```kotlin
import com.adjust.sdk.Adjust;

class YourActivity : Activity () {
   override fun onResume() {
      super.onResume()
      Adjust.onResume()
   }
   override fun onPause() {
      super.onPause()
      Adjust.onPause()
   }
}
```

```java
import com.adjust.sdk.Adjust;

public class YourActivity extends Activity {
    protected void onResume() {
        super.onResume();
        Adjust.onResume();
    }
    protected void onPause() {
        super.onPause();
        Adjust.onPause();
    }
}
```

:::

## 8. Build your app for production

Once you've finished your testing, you can build your app for production. To do this, you need to update your config object.

1. Adjust your log level to return only what you need.
2. Set your `environment` to `AdjustConfig.ENVIRONMENT_PRODUCTION`.

:::{tab-set-code}

```kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_PRODUCTION;
val config = AdjustConfig(this, appToken, environment)
config.setLogLevel(LogLevel.WARN)
Adjust.onCreate(config)
```

```java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_PRODUCTION;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setLogLevel(LogLevel.WARN)
Adjust.onCreate(config);
```

:::
