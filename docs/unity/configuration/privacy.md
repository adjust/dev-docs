# Set up privacy features

The Adjust SDK contains features that you can use to handle user privacy in your app.

## GDPR right to be forgotten

Article 17 of the European Union's {abbr}`GDPR (General Data Protection Regulation)` grants users the right to be forgotten. When Adjust's servers receive an {abbr}`RTBF (Right to be Forgotten)` request, Adjust erases the user's data. The SDK also stops sending requests from the device for the app in question.

You can send the user's RTBF request to Adjust by calling the [`gdprForgetMe` method](#unity-gdprforgetme-invocation).

:::{include} /unity/reference/Adjust/privacy.md
:start-after: gdprForgetMe snippet
:end-before: Snippet end
:::

## Third-party sharing for specific users

You can use the Adjust SDK to record when a user changes their third-party sharing settings.

### Disable third-party sharing

Some users may want to opt-out of sharing their data with third-parties. To communicate this to Adjust, call the [`trackThirdPartySharing` method](#unity-trackthirdpartysharing-invocation) with an [`AdjustThirdPartySharing` object](/unity/reference/AdjustThirdPartySharing) initialized with a `false` value. When Adjust's servers receive this information, Adjust stops sharing the user's data with third-parties. The Adjust SDK continues to work as expected.

:::{include} /unity/reference/AdjustThirdPartySharing.md
:start-after: AdjustThirdPartySharing false snippet
:end-before: Snippet end
:::

### Enable third-party sharing

If a user opts into sharing with third-parties, call the [`trackThirdPartySharing` method](#unity-trackthirdpartysharing-invocation) with an [`AdjustThirdPartySharing` object](/unity/reference/AdjustThirdPartySharing) initialized with a `true` value. This updates the user's preferences.

:::{include} /unity/reference/AdjustThirdPartySharing.md
:start-after: AdjustThirdPartySharing true snippet
:end-before: Snippet end
:::

### Send granular information

You can attach granular information when a user updates their third-party sharing preferences. Use this information to communicate more detail about a user's decision. To do this, call the [`addGranularOption` method](#unity-addgranularoption-invocation) with your partner name and your options.

:::{include} /unity/reference/AdjustThirdPartySharing.md
:start-after: addGranularOption snippet
:end-before: Snippet end
:::

### Update partner settings

:::{versionadded} 4.32.0
You can use the Adjust SDK to update your third party sharing settings on a per-partner basis. To do this, call the [`addPartnerSharingSetting` method](#unity-addpartnersharingsetting-invocation) with your partner name and your options.
:::

:::{include} /unity/reference/AdjustThirdPartySharing.md
:start-after: addPartnerSharingSetting snippet
:end-before: Snippet end
:::

:::{list-table} Available partners
:header-rows: 1

* - Partner name
   - String value
* - AppleAds
   - `apple_ads`
* - Facebook
   - `facebook`
* - GoogleAds
   - `adwords`
* - GoogleMarketingPlatform
   - `google_marketing_platform`
* - Snapchat
   - `snapchat`
* - Tencent
   - `tencent`
* - TikTokSan
   - `tiktok_san`
* - Twitter
   - `twitter`
* - YahooGemini
   - `yahoo_gemini`
* - YahooJapanSearch
   - `yahoo_japan_search`
:::

### Manage Facebook Limited Data Use

:::{important}
The Adjust SDK sends information to Facebook as soon as the app is installed. You need to make sure you call this method **before** initializing the SDK.
:::

Facebook provides a feature called Limited Data Use (LDU) to comply with the {abbr}`CCPA (California Consumer Privacy Act)`. This feature enables you to notify Facebook when a California-based user is opted out of the sale of data. You can also use it if you want to opt all users out by default.

You can update the Facebook LDU status by passing arguments to the [`addGranularOption` method](#unity-addgranularoption-invocation).

:::{include} /unity/reference/AdjustThirdPartySharing.md
:start-after: addGranularOption Facebook snippet
:end-before: Snippet end
:::

:::{list-table} Parameters
:header-rows: 1

* - Parameter	
   - Description
* - `partner_name`
   - Use `facebook` to toggle LDU.
* - `data_processing_options_country`
   - The user is located in.
      * `0`: Request that Facebook use geolocation.
      * `1`: United States of America.
* - `data_processing_options_state`
   - Notifies Facebook which state the user is located in.
      * `0`: Request that Facebook use geolocation.
      * `1000`: California.

:::

:::{note}
If you call this method with a `0` value for **either** `data_processing_options_country` or `data_processing_options_state`, the Adjust SDK passes **both** fields back as `0`.
:::

## Disable third-party sharing

To disable third-party sharing for all users, call the [`disableThirdPartySharing` method](#unity-disablethirdpartysharing-invocation). When Adjust's servers receive this information, Adjust stops sharing the user's data with third-parties. The Adjust SDK continues to work as expected.

:::{include} /unity/reference/Adjust/privacy.md
:start-after: disableThirdPartySharing snippet
:end-before: Snippet end
:::

## Data residency

The data residency feature allows you to choose the country in which Adjust stores your data. This is useful if you're operating in a country with strict privacy requirements. When you set up data residency, Adjust stores your data in a data center located in the region your have chosen.

To set your country of data residency, call the [`setUrlStrategy` method](#unity-seturlstrategy-invocation) on your `AdjustConfig` instance.

:::{include} /unity/reference/AdjustConfig/privacy.md
:start-after: setUrlStrategy snippet
:end-before: Snippet end
:::

## Consent measurement for specific users

If you are using [Data Privacy settings](hc:manage-data-collection-and-retention) in your Adjust dashboard, you need to set up the Adjust SDK to work with them. This includes settings such as consent expiry period and user data retention period. To toggle this feature, call the [`trackMeasurementConsent` method](#unity-trackmeasurementconsent-invocation). When enabled, the SDK communicates the data privacy settings to Adjust's servers. Adjust's servers then applies your data privacy rules to the user. The Adjust SDK continues to work as expected.

:::{include} /unity/reference/Adjust/privacy.md
:start-after: trackMeasurementConsent snippet
:end-before: Snippet end
:::
