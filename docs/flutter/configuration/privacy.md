# Set up privacy features

The Adjust SDK contains features that you can use to handle user privacy in your app.

## GDPR right to be forgotten

[Article 17](https://gdpr-info.eu/art-17-gdpr/) of the European Union's {abbr}`GDPR (General Data Protection Regulation)` grants users the right to be forgotten. When Adjust's servers receive an {abbr}`RTBF (Right to be Forgotten)` request, Adjust erases the user's data. The SDK also stops sending requests from the device for the app in question.

You can send the user's RTBF request to Adjust by calling the [`gdprForgetMe` method](#flutter-gdprforgetme-invocation).

:::{include} /flutter/reference/Adjust/privacy.md
:start-after: gdprForgetMe snippet
:end-before: Snippet end
:::

## Third-party sharing for specific users

You can use the Adjust SDK to record when a user changes their third-party sharing settings.

### Disable third-party sharing for specific users

Some users may want to opt-out of sharing their data with third-parties. To communicate this to Adjust, call the [`trackThirdPartySharing` method](#flutter-trackthirdpartysharing-invocation) with an [`AdjustThirdPartySharing` object](/flutter/reference/AdjustThirdPartySharing.md) initialized with a `false` value. When Adjust's servers receive this information, Adjust stops sharing the user's data with third-parties. The Adjust SDK continues to work as expected.

:::{include} /flutter/reference/AdjustThirdPartySharing.md
:start-after: AdjustThirdPartySharing false snippet
:end-before: Snippet end
:::

### Enable third-party sharing for specific users

If a user opts into sharing with third-parties, call the [`trackThirdPartySharing` method](#flutter-trackthirdpartysharing-invocation) with an [`AdjustThirdPartySharing` object](/flutter/reference/AdjustThirdPartySharing.md) initialized with a `true` value. This updates the user's preferences.

:::{include} /flutter/reference/AdjustThirdPartySharing.md
:start-after: AdjustThirdPartySharing true snippet
:end-before: Snippet end
:::

### Send granular information

You can attach granular information when a user updates their third-party sharing preferences. Use this information to communicate more detail about a user's decision. To do this, call the [`addGranularOption` method](#flutter-addgranularoption-invocation) with your partner name and your options.

:::{include} /flutter/reference/AdjustThirdPartySharing.md
:start-after: addGranularOption snippet
:end-before: Snippet end
:::

## Data residency

The data residency feature allows you to choose the country in which Adjust stores your data. This is useful if you're operating in a country with strict privacy requirements. When you set up data residency, Adjust stores your data in a data center located in the region your have chosen.

To set your country of data residency, call the [`setUrlStrategy` method](#flutter-seturlstrategy-invocation) on your `AdjustConfig` instance.

:::{include} /flutter/reference/AdjustConfig/privacy.md
:start-after: setUrlStrategy snippet
:end-before: Snippet end
:::

## Consent measurement for specific users

If you are using [Data Privacy settings](https://help.adjust.com/en/article/manage-data-collection-and-retention) in your Adjust dashboard, you need to set up the Adjust SDK to work with them. This includes settings such as consent expiry period and user data retention period. To toggle this feature, call the [`trackMeasurementConsent` method](#flutter-trackmeasurementconsent-invocation). When enabled, the SDK communicates the data privacy settings to Adjust's servers. Adjust's servers then applies your data privacy rules to the user. The Adjust SDK continues to work as expected.

:::{include} /flutter/reference/Adjust/privacy.md
:start-after: trackMeasurementConsent snippet
:end-before: Snippet end
:::

## Privacy for children

The Adjust SDK includes the `com.google.android.gms.permission.AD_ID` permission by default in version 4.32.0 and above. You can remove it by adding a remove directive if need to make your app COPPA-compliant or if you don't target the Google Play Store.

```xml
<uses-permission android:name="com.google.android.gms.permission.AD_ID" tools:node="remove"/>

See Google's [`AdvertisingIdClient.Info documentation`](https://developers.google.com/android/reference/com/google/android/gms/ads/identifier/AdvertisingIdClient.Info#public-string-getid) for more information about this permission.

### COPPA compliance

If you need your app to be COPPA compliant, call the [`coppaCompliantEnabled` method](#flutter-coppacompliantenabled-invocation). This method performs the following actions:

1. Disables third-party sharing **before** the user launches their first session.
2. Prevents the SDK from reading device and advertising IDs (For example: `gps_adid` and `android_id`).

:::{include} /flutter/reference/AdjustConfig/privacy.md
:start-after: coppaCompliantEnabled snippet
:end-before: Snippet end
:::

You can disable this method by calling it with a `false` parameter.

:::{important}
Disabling the `coppaCompliantEnabled` method _doesn't_ re-enable third-party sharing. You need to re-enable third-party sharing for the user.
:::

:::{tab-set-code}

```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.coppaCompliantEnabled = false;
//...
Adjust.start(adjustConfig);
```

:::

### Play Store Kids Apps (Android only)

If your app targets users under the age of 13, and the install region **isn't** the USA, you need to mark it as a Kids App. This prevents the SDK from reading device and advertising IDs, that's, `gps_adid` and `android_id`. To do this, set the `playStoreKidsAppEnabled` property on your config instance with a `true` parameter.

:::{include} /flutter/reference/AdjustConfig/setup.md
:start-after: playStoreKidsAppEnabled snippet
:end-before: Snippet end
:::
