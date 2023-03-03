# Set up privacy features

The Adjust SDK contains features that you can use to handle user privacy in your app.

## GDPR right to be forgotten

Article 17 of the European Union's {abbr}`GDPR (General Data Protection Regulation)` grants users the right to be forgotten. When Adjust's servers receive an {abbr}`RTBF (Right to be Forgotten)` request, Adjust erases the user's data. The SDK also stops sending requests from the device for the app in question.

You can send the user's RTBF request to Adjust by calling the [`gdprForgetMe` method](#web-gdprforgetme-invocation).

:::{include} /web/reference/privacy.md
:start-after: gdprForgetMe snippet
:end-before: Snippet end
:::

## Disable third-party sharing

Some users may want to opt-out of sharing their data with third-parties. To communicate this to Adjust, call the [`disableThirdPartySharing` method](#web-disablethirdpartysharing-invocation). When Adjust's servers receive this information, Adjust stops sharing the user's data with third-parties. The Adjust SDK continues to work as expected.

:::{include} /web/reference/privacy.md
:start-after: disableThirdPartySharing snippet
:end-before: Snippet end
:::

## Data residency

The data residency feature allows you to choose the country in which Adjust stores your data. This is useful if you're operating in a country with strict privacy requirements. When you set up data residency, Adjust stores your data in a data center located in the region your have chosen.

To set your country of data residency, pass the region code of your preferred country code in the `dataResidency` property of the [`initSdk` method](#web-initsdk-invocation).

:::{tab-set-code}

{emphasize-lines="5"}
```javascript
Adjust.initSdk({
  "appToken": "YOUR_APP_TOKEN",
  "environment": "production",
  "logLevel": "verbose",
  "dataResidency": "EU"
})
```

:::

:::{list-table} Available regions
:header-rows: 1

* - Region
   - Code
* - European Union
   - `EU`
* - Turkey
   - `TR`
* - United States of America
   - `US`
:::

## URL strategy

You can set a URL strategy to prioritize regional endpoints for sending data from the Adjust SDK. To do this, pass the region of your preferred country code in the `urlStrategy` property of the [`initSdk` method](#web-initsdk-invocation).

:::{tab-set-code}

{emphasize-lines="5"}
```javascript
Adjust.initSdk({
  "appToken": "YOUR_APP_TOKEN",
  "environment": "production",
  "logLevel": "verbose",
  "urlStrategy": "china"
})
```

:::

:::{list-table} Available regions
:header-rows: 1

* - Region
   - Code
* - China
   - `china`
* - India
   - `india`
:::

## Set custom endpoint

By default, the Adjust SDK sends all data to Adjust's endpoints. If you want to specify a custom endpoint, pass your endpoint in the `customUrl` property of the [`initSdk` method](#web-initsdk-invocation).

:::{tab-set-code}

{emphasize-lines="4"}
```javascript
Adjust.initSdk({
  appToken: 'YOUR_APP_TOKEN',
  environment: 'sandbox',
  customUrl: 'https://my-custom-url.com/'
});
```
:::
