# Get device information

The Adjust SDK contains methods that give you access to device information. Use these methods to add details to your callbacks and improve your reporting.

## Adjust device identifier

Adjust generates a unique Adjust Device ID (ADID) for each device. Call the `getAdid` method to return this ID as a **string**.

:::{important}
You can access the ADID *only* after the Adjust server tracks an install.
:::

:::{tab-set-code}

```js
Adjust.getAdid((adid) => {
    console.log("Adid = " + adid);
});
```

:::

## iOS ID for Advertisers

The [ID for Advertisers (IDFA)](https://developer.apple.com/documentation/adsupport/asidentifiermanager/1614151-advertisingidentifier) is a device-specific identifier for Apple devices. Call the `getIdfa` method to return this ID as a **string**.

:::{tab-set-code}

```js
Adjust.getIdfa((idfa) => {
    console.log("IDFA = " + idfa);
});
```

:::

## Google Play Services Advertising ID

The [Google Play Services Advertising ID (GPS ADID)](https://support.google.com/googleplay/android-developer/answer/6048248?hl=en) is a device-specific identifier for Android devices.

Users can opt out of sharing their Google advertising ID by toggling the "Opt out of Ads Personalization" setting on their device. When a user has enabled this setting, the Adjust SDK returns a string of zeros when trying to read the Google advertising ID.

You can access this value by calling the `getGoogleAdId` method in a background thread.

To do this, call the method with a **string** action delegate:

:::{tab-set-code}

```js
Adjust.getGoogleAdId((googleAdId) => {
    console.log("Google Ad Id = " + googleAdId);
});
```

:::

## Amazon Advertiser ID

The [Amazon Advertising ID (Amazon Ad ID)](https://developer.amazon.com/docs/policy-center/advertising-id.html) is a device-specific identifier for Android devices. Call the getAmazonAdId method to return this ID as a **string**.

:::{tab-set-code}

```js
Adjust.getAmazonAdId((amazonAdId) => {
    console.log("Amazon Ad Id = " + amazonAdId);
});
```

:::
