# Vivo referrer plugin

The Vivo referrer plugin enables the Adjust SDK to read Vivo app store install referrer values on a device. The SDK then sends this information to the Adjust servers as part of the install payload.

The Vivo install referrer is available on all devices with Vivo app store version 5.3.0.0 or above.

Follow the Android get started guide to integrate the Adjust SDK in your app.

## Install the Vivo referrer plugin

There are two ways to install the Vivo referrer plugin:

### Maven

Add the following dependency to your {file}`build.gradle` file under your Adjust SDK declaration.

```
implementation 'com.adjust.sdk:adjust-android:4.33.1'

implementation 'com.adjust.sdk:adjust-android-vivo-referrer:4.33.1'
```

### JAR

The Vivo referrer plugin is available on the GitHub [releases page](https://github.com/adjust/android_sdk/releases/tag/v4.33.4).

## Use the plugin

The Vivo referrer plugin is __enabled__ by default. You can toggle reading Vivo install referrer information on and off using the `AdjustVivoReferrer` class methods.

To __disable__ reading the install referrer, call `AdjustVivoReferrer.doNotReadVivoReferrer()` __before__ you initialize the SDK.

:::{tab-set-code}

```Java
AdjustVivoReferrer.doNotReadVivoReferrer();
//...
Adjust.onCreate(config);
```

```Kotlin
AdjustVivoReferrer.doNotReadVivoReferrer()
//...
Adjust.onCreate(config)
```
:::

To __reenable__ reading the install referrer, call `AdjustVivoReferrer.readVivoReferrer(applicationContext)` __before__ you initialize the SDK.

:::{tab-set-code}
```Java
AdjustVivoReferrer.readVivoReferrer(applicationContext);
//...
Adjust.onCreate(config);
```

```Kotlin
AdjustVivoReferrer.readVivoReferrer(applicationContext)
//...
Adjust.onCreate(config)
```
:::