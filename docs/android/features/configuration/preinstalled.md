# Record preinstalled app activity

You can use the Adjust SDK to record activity from apps that came preinstalled on a user's device. This enables you to record information from users who didn't download your app from a campaign.

Your config object contains a **boolean** `preinstallTrackingEnabled` property that controls this feature. To enable preinstall measurement, call the [`setPreinstallTrackingEnabled` method](android-setPreinstallTrackingEnabled-invocation) with a `true` argument.

:::{include} /android/reference/AdjustConfig/setup.md
:start-after: setPreinstallTrackingEnabled snippet
:end-before: Snippet end
:::

The Adjust SDK provides 5 methods for measuring preinstalled apps:
- [System properties](#system-properties)
- [Content provider](#content-provider)
- [System installer receiver](#system-installer-receiver)
- [World-readable directory](#world-readable-directory)
- [Default campaign token](#default-campaign-token)

## System properties

:::{versionadded} v4.23.0
{abbr}`OEM (Original Equipment Manufacturer)` partners can leverage Android system properties to attribute preinstalled apps. The OEM writes attribution information to a file and adds its path to the system properties. The Adjust SDK reads this file on initialization to attribute the install.
:::

## Content provider

:::{versionadded} v4.23.0
The content provider method makes use of a read-only content provider. The SDK uses a content resolver to gather preinstall information from the request.
:::

To set the permissions, add the following to your {file}`AndroidManifest.xml` file.

```{code-block} xml
:caption: AndroidManifest.xml

<uses-permission android:name="com.adjust.preinstall.READ_PERMISSION"/>
```

## System installer receiver

:::{versionadded} v4.27.0
The system installer method uses a broadcast receiver. The system installer broadcasts preinstall information. The Adjust SDK reads this information using the system preinstall referrer receiver.
:::

To set up the receiver, add the following to your {file}`AndroidManifest.xml` file.

```{code-block} xml
:caption: AndroidManifest.xml

<receiver android:name="com.adjust.sdk.AdjustPreinstallReferrerReceiver"> 
   <intent-filter> 
      <action android:name="com.attribution.SYSTEM_INSTALLER_REFERRER" /> 
   </intent-filter> 
</receiver>
```

## World-readable directory

:::{versionadded} v4.23.0
Save attribution information for your preinstalled app in a world-readable directory. The SDK reads the information from this file at install to attribute the user. The system encryption protocol protects app data.
:::

Pass the file path at which your preinstall information can be found to the [`setPreinstallFilePath` method](android-setPreinstallFilePath-invocation) to give the Adjust SDK access to the information.

:::{include} /android/reference/AdjustConfig/setup.md
:start-after: setPreinstallFilePath snippet
:end-before: Snippet end
:::

## Default campaign token

:::{versionadded} v4.23.0
Configuring a default campaign enables you to attribute all preinstalls to a predefined campaign token. Adjust records all information against this token until the attribution source changes. To set this up:
:::

1. Create a new campaign link in Datascape.
   
   ```
   https://app.adjust.com/{token}
   ```

2. Copy this token and pass it to the [`setDefaultTracker` method](android-setDefaultTracker-invocation).

   :::{include} /android/reference/AdjustConfig/setup.md
   :start-after: setDefaultTracker snippet
   :end-before: Snippet end
   :::

3. Build and run your app. If you have logging enabled, you should see a message in your log

   ```
   Default tracker: 'abc123'.
   ```
