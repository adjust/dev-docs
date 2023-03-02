# Adjust Store & Pre-Install Tool

If your app is pre-installed on a device, you need to use a pre-install tracker to attribute users. The Adjust Store & Pre-Install Tool (`adjust-dtt`) enables you to insert this information into your APK. The Adjust SDK reads the information inserted by `adjust-dtt`. This enables you to attribute users of pre-installed apps to specific Adjust trackers.

## Before you begin

:::{note}
You can use this tool with any development framework that produces an APK.
:::

To get started, download the `adjust-dtt` tool from [GitHub](https://github.com/adjust/android_sdk/blob/master/tools/adjust-dtt). You need to make this file executable to use it. Run the following command to make the file executable:

```{code-block} console
chmod +x adjust-dtt
```

Before you can use `adjust-dtt`, you need to set up your machine. `adjust-dtt` requires the following tools to be installed on your device:

* `ruby`: the language tools used to run `adjust-dtt`.
* `apktool`: a tool for unpacking and re-packing APKs.
* `jarsigner`: a tool for signing APKs.

Follow these instructions to install each one.

:::{important}
All of these tools must by present in your system's `PATH` to run `adjust-dtt`.
:::

::::{dropdown} Ruby
::::{tab-set}
:::{tab-item} macOS
:sync: mac

Ruby is preinstalled on macOS devices.

:::
:::{tab-item} Linux
:sync: linux

Follow the instructions for your distribution on the [ruby-lang website](https://www.ruby-lang.org/en/documentation/installation/).

:::
::::
:::::

:::::{dropdown} Apktool
::::{tab-set}
:::{tab-item} macOS
:sync: mac

You can install Apktool using [Homebrew](https://brew.sh/).

```{code-block} console
brew install apktool
```

Alternatively, follow the instructions on [the Apktool website](https://ibotpeaches.github.io/Apktool/install/).

:::
:::{tab-item} Linux
:sync: linux

Follow the instructions for your distribution on [the Apktool website](https://ibotpeaches.github.io/Apktool/install/).

:::
::::
:::::

:::::{dropdown} Jarsigner
::::{tab-set}
:::{tab-item} macOS
:sync: mac

`jarsigner` is included as part of the {abbr}`JDK (Java Development Kit)`. It's available in both the OpenJDK and Oracle JDK implementations. You can install OpenJDK using [Homebrew](https://brew.sh). To do this, run the following command:

```{code-block} console
brew install openjdk@16
```

If you're using the Oracle JDK, follow the instructions on [Oracle's website](https://docs.oracle.com/en/java/javase/16/install/installation-jdk-macos.html#GUID-E8A251B6-D9A9-4276-ABC8-CC0DAD62EA33).

:::
:::{tab-item} Linux
:sync: linux

`jarsigner` is included as part of the Java Development Kit (JDK). It's available in both the OpenJDK and Oracle JDK implementations. OpenJDK is available in many major distributions' repositories. Search for installation instructions for your distribution to install OpenJDK. You need to install the development packages to use `jarsigner`.

If you're using the Oracle JDK, follow the instructions on [Oracle's website](https://docs.oracle.com/en/java/javase/16/install/installation-jdk-linux-platforms.html#GUID-737A84E4-2EFF-4D38-8E60-3E29D1B884B8).

:::
::::
:::::

## Add preinstall tracker information

### Step 1. Get keystore file

When you create an APK, Android Studio will sign it. This happens even if you have generated an "unsigned" version of the APK. When you do this, Android Studio signs the APK with a default debug signing keystore file. This keystore file is located at {file}`~/.android/debug.keystore` by default.

If you export a signed APK from Android Studio, you will sign the APK with your custom signing keystore file.

To use `adjust-dtt` you need to have access to either the default keystore file or your custom one. This is because `apktool` removes all signing when you use it to unpack the APK. Once you repackage the APK, signing isn't re-enabled. You need to run `jarsigner` with your signing information to re-sign the APK to deliver it to Android devices.

### Step 2. Create tracker token

Next, you need to create a campaign link in your Adjust dashboard. You will use the link token as the default campaign for your pre-installed app. This means that all users who have the app pre-installed will be attributed to this token.

### Step 3. Create a config file

Once you have your keystore file and your campaign token, you can create a configuration file. `adjust-dtt` uses an {file}`adjust-config.yaml` configuration file to read your settings. This file includes settings for the different app stores you need to set up.

:::{list-table}
:caption: Parameter

* - Parameter
   - Data type
   - Global or per-store
   - Description
* - `apk_path`
   - String
   - Both
   - The absolute path to your APK.
* - `keystore_path`
   - String
   - Both
   - The absolute path to your keystore file.
* - `keystore_path`
   - String
   - Both
   - Your keystore signing password.
* - `keystore_alias`
   - String
   - Both
   - Your keystore alias.
* - `default_tracker`
   - String
   - Per-store
   - The Adjust campaign token to attribute pre-installs to.

:::

Here's an example {file}`adjust-config.yaml` file including settings for three stores named `store_1`,  `store_2`, and `store_3`.

```{code-block} yaml
apk_path: /Users/username/Desktop/apk/example-release.apk
keystore_path: /Users/username/Desktop/apk/mykeystore.jks
keystore_pass: mykeystorepass
keystore_alias: mykeystorealias
stores:
    store_1:
        default_tracker: abc123
    store_2:
        default_tracker: abc456
    store_3:
        default_tracker: abc789
```

You can define global parameters in the root of the file if you want to use the same settings for each store. Parameters set on a store will override the global parameters for that store. For example:

```{code-block} yaml
apk_path: /Users/username/Desktop/apk/example-release.apk
keystore_path: /Users/username/Desktop/apk/mykeystore.jks
keystore_pass: mykeystorepass
keystore_alias: mykeystorealias
stores:
    store_1:
        default_tracker: abc123
        keystore_path: /Users/username/Desktop/apk/differentkeystore.jks
        keystore_pass: differentkeystorepass
        keystore_alias: differentkeystorealias
    store_2:
        default_tracker: abc456
    store_3:
        default_tracker: abc789
```

In this example, the `adjust-dtt` tool uses `differentkeystore.jks`, `differentkeystorepass` and `differentkeystorealias` when generating the APK for `store_1`. The tool generates a modified APK for each store.

### Step 4. Run the adjust-dtt tool

The `adjust-dtt` tool takes the path to the your {file}`adjust-config.yaml` file as an argument. To add your campaign information to your APK, run the tool like this:

```{code-block} console
adjust-dtt adjust-config.yaml
```

`adjust-dtt` does the following:

1. Unpacks your APK into a folder. The folder will be located in the same directory as your APK. It will have the same name as your APK.
2. Searches for an {file}`assets` folder and an {file}`adjust_config.properties` file. The {file}`adjust_config.properties` file contains default campaign information.
   1. Creates the {file}`assets` folder and {file}`adjust_config.properties` file if they do not exist. The tool writes your `default_tracker` information to the {file}`adjust_config.properties` file.
   2. Writes the `default_tracker` information to the {file}`adjust_config.properties` file if it exists. If the file already contains a default campaign value, it compares the two. If they differ, the value in your {file}`adjust-config.yaml` file overwrites the existing value.
3. Repackages the APK.
4. Signs the APK with the information specified in the {file}`adjust-config.yaml`. It uses the `keystore_path`, `keystore_pass`, and `keystore_alias` parameters.
5. Generates an APK with the same name as the original with a `_[store_name]` suffix. In the above example, the tool generates three APK files. These would be named `example-release_store_1.apk`, `example-release_store_2.apk` and `example-release_store_3.apk`. Once the tool has generated these files, you can rename them.

If you have any questions or issues with this tool, contact <support@adjust.com>.
