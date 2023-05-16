# Xiaomi referrer plugin

The Xiaomi referrer plugin enables the Adjust SDK to read Xiaomi install referrer values on a device. The SDK then sends this information to the Adjust backend as part of the install payload.

The Xiaomi install referrer is available on all devices using the Xiaomi install referrer library.

Follow the Android get started guide to integrate the Adjust SDK in your app.

## Install the Xiaomi referrer plugin

There are two ways to install the Xiaomi referrer plugin:

### Maven

Add the following dependency to your {file}`build.gradle` file under your Adjust SDK declaration.

```
implementation 'com.adjust.sdk:adjust-android:4.33.4'

implementation 'com.adjust.sdk:adjust-android-xiaomi-referrer:4.33.4'
```

### JAR file

The Xiaomi referrer plugin is available on the GitHub [releases page](https://github.com/adjust/android_sdk/releases).

## Add the Xiaomi install referrer library

You must add the Xiaomi install referrer to your app to read the referrer value.

### Maven

Add the following dependency to your build.gradle file after the Adjust SDK.

```
implementation 'com.miui.referrer:homereferrer:1.0.0.6'
```

For more information check out the [Xiaomi install referrer library documentation](https://global.developer.mi.com/document?doc=service.getAppsReferral).

## Proguard settings

If you use Proguard, you must add rules to ensure that important classes aren't removed during build.

Add the following rule to keep all Adjust classes.

```
-keep public class com.adjust.sdk.** { *; }
```

Add the following rule to keep the Xiaomi install referrer library.

```
-keep class com.miui.referrer:homereferrer.** { *; }
```

## Use the plugin

The Xiaomi referrer plugin is active by default. You can enable or disable the reading of Xiaomi install referrer information using the `AdjustXiaomiReferrer` class methods.

To __disable__ reading the install referrer, call `AdjustXiaomiReferrer.doNotReadXiaomiReferrer()` __before__ you initialize the SDK.

:::{tab-set-code}
```Java
AdjustXiaomiReferrer.doNotReadXiaomiReferrer();
//...
Adjust.onCreate(config);
```

```Kotlin
AdjustXiaomiReferrer.doNotReadXiaomiReferrer();
//...
Adjust.onCreate(config);
```
:::

To __enable__ reading this information, call `AdjustXiaomiReferrer.readXiaomiReferrer(applicationContext)` __before__ you initialize the SDK.

:::{tab-set-code}
```Java
AdjustXiaomiReferrer.readXiaomiReferrer(applicationContext);
//...
Adjust.onCreate(config);
```

```Kotlin
AdjustXiaomiReferrer.readXiaomiReferrer(applicationContext);
//...
Adjust.onCreate(config);
```
:::

