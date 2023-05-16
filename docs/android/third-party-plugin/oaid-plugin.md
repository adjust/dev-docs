# OAID plugin integration

The Open Anonymous Device Identifier (OAID) is a unique identifier for Android devices. The Mobile Security Alliance (MSA) recommends all Chinese-manufactured devices provide an OAID. You can use the OAID to attribute and track devices where Google Play Services isn't available.

The OAID plugin provides the OAID of a device. The SDK will continue to use other identifiers as well as the OAID. The OAID is readable on all devices using the MSA SDK or Huawei Mobile Service (HMS) Core SDK on Huawei devices.

## Add the OAID plugin to your app

### Maven 

If you are using Maven, add the following dependency to your {file}`build.gradle` file:

```
dependencies {
   implementation 'com.adjust.sdk:adjust-android:4.33.4'
   implementation 'com.adjust.sdk:adjust-android-oaid:4.33.4'
}
```

For Huawei OAID tracking, you must add a developer repository and additional dependencies.

:::{important}
Minimum SDK Version 4.28.2 and OAID plugin 4.33.0 are required for Huawei devices..
:::

1. Add the following to your project's {file}`build.gradle` file:

```
allprojects {
    repositories {
        maven {
            url 'https://developer.huawei.com/repo/'
        }
    mavenCentral()
    }
```

2. Add the following to your app-level {file}`build.gradle` file:

```
dependencies {
   implementation 'com.adjust.sdk:adjust-android:4.33.4'
   implementation 'com.adjust.sdk:adjust-android-oaid:4.33.4'
   implementation 'com.huawei.hms:ads-identifier:3.4.56.300'
}
```

### Install standalone binary

You can also add the plugin as a standalone binary from the [releases page](https://github.com/adjust/android_sdk/releases).

## Add the MSA SDK to your app

:::{note}
You don't need to add the MSA SDK to read the OAID value on Huawei devices. The OAID plugin can use the HMS Core SDK for this.
:::

### Requirements

| MSA SDK version  | Adjust OAID plugin version |
|------------------|----------------------------|
| v1.0.10+         | v4.19.0+                   |
| v1.0.12+         | v4.22.0+                   |
| v1.0.13+         | v4.23.0+                   |
| v1.0.23+         | v4.24.1+                   |
| v1.0.25+         | v4.27.0+                   |
| v1.0.26+         | v4.28.4+                   |
| v1.1.0+          | v4.28.9+                   |
| v2.0.0+          | v4.33.0+                   |

To enable the OAID plugin to read OAID values from the MSA SDK, you need to add it to your project. To do this:

1. Copy the MSA SDK (AAR file) to the `libs` directory of your project and set the dependency.
2. Copy the {file}`supplierconfig.json` file to the `assets` directory of your project.
3. You can find the MSA SDK and detailed instructions at the [MSA website](http://www.msa-alliance.cn/col.jsp?id=120).

## Add the HMS Core SDK to your app

You can use the HMS Core SDK to access the OAID of Huawei devices. To enable the Adjust OAID plugin to read values from the HMS Core SDK, update your {file}`build.gradle` as follows:

1. Add the Huawei maven repository.

```
repositories {
  maven {
      url "https://developer.huawei.com/repo/"
  }
}
```

2. Add the HMS Core SDK.

```
dependencies {
   implementation 'com.huawei.hms:ads-identifier:3.4.56.300'
}
```

## Proguard settings

If your app isn't targeting the Google Play Store, you don't need to add all the rules set out in the Android get started guide. You can remove rules related to Google Play Services and install referrer libraries. You only need to keep the rules that apply to the Adjust SDK.

```
-keep public class com.adjust.sdk.** { *; }
```

If you are adding the MSA SDK AAR as a dependency, add the following rules:

```
-keep class com.bun.miitmdid.core.** { *; }
```

## Use the plugin

Once you have set up the plugin, you can gather the device's OAID. To do this, call the `AdjustOaid.readOaid(applicationContext)` method before starting the Adjust SDK.

:::{tab-set-code}

```Java
AdjustOaid.readOaid(applicationContext);

// ...

Adjust.onCreate(config);
```

```C#
AdjustOaid.ReadOaid();

// ...

Adjust.start(config);
```
:::

If you want to prevent the SDK from reading the OAID, call the `AdjustOaid.doNotReadOaid()` method.

:::{tab-set-code}

```Java
AdjustOaid.doNotReadOaid();
```

```C#
AdjustOaid.DoNotReadOaid();
```
:::