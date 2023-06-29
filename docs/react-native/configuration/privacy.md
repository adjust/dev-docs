# Set up privacy features

## GDPR right to be forgotten

[Article 17](https://gdpr-info.eu/art-17-gdpr/) of the EU's General Data Protection Regulation (GDPR) grants users the right to be forgotten (RTBF). When the Adjust server receives a RTBF, Adjust erases the user's data. The SDK also stops measuring the user and doesn't send requests from the device in future.

You can send the user's RTBF to the server by calling the `gdprForgetMe` method

:::{tab-set-code}

```js
Adjust.gdprForgetMe();
```

:::

## Third-party sharing for specific users

You can use the Adjust SDK to record when a user changes their third-party sharing settings.

### Disable third-party sharing for specific users

Some users may want to opt-out of sharing their data with third-parties. To communicate this to Adjust, call the `trackThirdPartySharing` method with a false `AdjustThirdPartySharing` instance. When the Adjust server receives this information it stops sharing the user's data with third-parties. The Adjust SDK continues to work as expected.

:::{tab-set-code}

{emphasize-lines="1"}

```js
var adjustThirdPartySharing = new AdjustThirdPartySharing(false);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

### Enable or re-enable third-party sharing for specific users

If a user enables or re-enables sharing with third-parties, you need to relay this to the server. To communicate this to Adjust, call the `trackThirdPartySharing` method with a true `AdjustThirdPartySharing` instance. When the Adjust server receives this information it starts sharing the user's data with third-parties, and update the user's settings. The Adjust SDK continues to work as expected.

:::{tab-set-code}

{emphasize-lines="1"}

```js
var adjustThirdPartySharing = new AdjustThirdPartySharing(true);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

### Send granular information to the Adjust server

You can attach granular information when a user updates their third-party sharing preferences. Use this information to communicate more detail about a user's decision.

:::{tab-set-code}

{emphasize-lines="3"}

```js
var adjustThirdPartySharing = new AdjustThirdPartySharing(null);
//...
adjustThirdPartySharing.addGranularOption("PartnerA", "key", "value");
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

### Set third-party sharing for specific partners

You can give users the option to customize their third-party sharing settings on a per-partner basis. There are three levels of user consent: **Yes**, **Analytics**, and **No**. See Partner-specific settings for more information.

To communicate the user’s consent level to Adjust, call the `addPartnerSharingSetting` method. Pass the following arguments:

:::{list-table}
:header-rows: 1

-  -  Argument
   -  Data type
   -  Description
-  -  `partnerName`
   -  String
   -  The name of the partner. See the list of available partners.
-  -  `key`
   -  String
   -  The metric to share with the partner
-  -  `value`
   -  Boolean
   -  The user's decision

:::

::::{dropdown} Yes

:::{tab-set-code}

{emphasize-lines="2,3,4"}

```js
var adjustThirdPartySharing = new AdjustThirdPartySharing(null);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "install", true);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "events", true);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "sessions", true);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

::::

::::{dropdown} Analytics

:::{tab-set-code}

{emphasize-lines="2,3,4"}

```js
var adjustThirdPartySharing = new AdjustThirdPartySharing(null);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "install", true);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "events", false);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "sessions", false);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

::::

::::{dropdown} No

:::{tab-set-code}

{emphasize-lines="2,3,4"}

```js
var adjustThirdPartySharing = new AdjustThirdPartySharing(null);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "install", false);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "events", false);
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", "sessions", false);
//...
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```

:::

::::

### Available partners

:::{list-table}
:header-rows: 1

-  -  Partner name
   -  String value
-  -  AppleAds
   -  `apple_ads`
-  -  Facebook
   -  `facebook`
-  -  GoogleAds
   -  `adwords`
-  -  GoogleMarketingPlatform
   -  `google_marketing_platform`
-  -  Snapchat
   -  `snapchat`
-  -  Tencent
   -  `tencent`
-  -  TikTokSan
   -  `tiktok_san`
-  -  Twitter
   -  `twitter`
-  -  YahooGemini
   -  `yahoo_gemini`
-  -  YahooJapanSearch
   -  `yahoo_japan_search`

:::

## Data residency

The data residency feature allows you to choose the country in which Adjust stores your data. This is useful if you are operating in a country with strict privacy requirements. When you set up data residency, Adjust stores your data in a data center located in the region your have chosen.

To set your country of data residency, call the `urlStrategy` method on your config instance with one of the following constants:

-  `DataResidencyEU` - For EU data residency region
-  `DataResidencyTR` - For Turkey data residency region
-  `DataResidencyUS` - For US data residency region

:::{tab-set-code}

{emphasize-lines="3"}

```js
const adjustConfig = new AdjustConfig(
   "{YourAppToken}",
   AdjustConfig.EnvironmentSandbox
);
//...
adjustConfig.setUrlStrategy(AdjustConfig.DataResidencyEU); // for EU data residency region
//...
Adjust.create(adjustConfig);
```

:::

## Consent measurement for specific users

If you are using [Data Privacy](https://help.adjust.com/en/article/manage-data-collection-and-retention) settings in your Adjust dashboard, you need to set up the Adjust SDK to work with them. This includes settings such as consent expiry period and user data retention period. To toggle this feature, call the `trackMeasurementConsent` method. When enabled, the SDK communicates the data privacy settings to the server. The Adjust server then applies your data privacy rules to the user. The Adjust SDK continues to work as expected.

:::{tab-set-code}

```js
Adjust.trackMeasurementConsent(true);
```

:::

## COPPA compliance

If you need your app to be COPPA compliant, call the `setCoppaCompliantEnabled` method. This method performs the following actions:

1. Disables third-party sharing **before** the user launches their first {term}`session`.
2. Prevents the SDK from reading device and advertising IDs (For example: `gps_adid` and `android_id`).

:::{tab-set-code}

{emphasize-lines="3"}

```js
const adjustConfig = new AdjustConfig(
   "{YourAppToken}",
   AdjustConfig.EnvironmentSandbox
);
//...
adjustConfig.setCoppaCompliantEnabled(true);
//...
Adjust.create(adjustConfig);
```

:::

You can disable this method by calling it with a `false` parameter.

:::{important}
Disabling the `setCoppaCompliantEnabled` method _doesn't_ re-enable third-party sharing. You need to re-enable third-party sharing for the user.
:::

## Play Store Kids Apps (Android only)

If your app targets users under the age of 13, and the install region **isn't** the USA, you need to mark it as a Kids App. This prevents the SDK from reading device and advertising IDs, that's, `gps_adid` and `android_id`. To do this, call the `setPlayStoreKidsAppEnabled` method with a `true` parameter.

:::{tab-set-code}

{emphasize-lines="3"}

```js
const adjustConfig = new AdjustConfig(
   "{YourAppToken}",
   AdjustConfig.EnvironmentSandbox
);
//...
adjustConfig.setPlayStoreKidsAppEnabled(true);
//...
Adjust.create(adjustConfig);
```

:::
