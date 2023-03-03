# Get device information

The Adjust SDK contains helper methods that return device information. Use these methods to add details to your callbacks and improve your reporting.

## Adjust device identifier

Adjust generates a unique {abbr}`ADID (Adjust Device ID)` for each device. Call the [`getAdid` method](#unity-getadid-invocation) to return this ID as a **string**.

:::{include} /unity/reference/Adjust/device-info.md
:start-after: getAdid snippet
:end-before: Snippet end
:::

## ID For Advertisers

The {abbr}`IDFA (ID for Advertisers)` is a device-specific identifier for Apple devices. Call the [`getIdfa` method](#unity-getidfa-invocation) to return this ID as a **string**.

:::{include} /unity/reference/Adjust/device-info.md
:start-after: getIdfa snippet
:end-before: Snippet end
:::

## Google Play Services Advertising ID

The {abbr}`GPS ADID (Google Play Services Advertising ID)` is a device-specific identifier for Android devices. 

Users can opt out of sharing their GPS ADID by toggling the "Opt out of Ads Personalization" setting on their device. When a user enables this setting, the Adjust SDK returns a string of zeros when trying to read the GPS ADID.

You can access this value by calling the [`getGoogleAdId` method](#unity-getgoogleadid-invocation) in a background thread. Assign a delegate function to access the GPS ADID value.

:::{include} /unity/reference/Adjust/device-info.md
:start-after: getGoogleAdId snippet
:end-before: Snippet end
:::

## Amazon Advertiser ID

The {abbr}`Amazon Ad ID (Amazon Advertising ID)` is a device-specific identifier for Android devices. Call the [`getAmazonAdId` method](#unity-getamazonadid-invocation) to return this ID as a **string**.

:::{include} /unity/reference/Adjust/device-info.md
:start-after: getAmazonAdId snippet
:end-before: Snippet end
:::
