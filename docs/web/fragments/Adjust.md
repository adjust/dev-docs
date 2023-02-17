---
orphan: true
nosearch: true
---

% initSdk

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.initSdk({
  appToken: 'YOUR_APP_TOKEN',
  environment: 'sandbox'
});
```
:::
::::

% methodEnd

% customUrl

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.initSdk({
  appToken: 'YOUR_APP_TOKEN',
  environment: 'sandbox',
  customUrl: 'https://my-custom-url.com/'
});
```
:::
::::

% methodEnd

% defaultTracker

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.initSdk({
  appToken: 'YOUR_APP_TOKEN',
  environment: 'sandbox',
  defaultTracker: '{token}'
});
```
:::
::::

% methodEnd

% eventDeduplicationListLimit

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.initSdk({
  appToken: 'YOUR_APP_TOKEN',
  environment: 'sandbox',
  eventDeduplicationListLimit: 20
});
```
:::
::::

% methodEnd

% externalDeviceId

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.initSdk({
  appToken: 'YOUR_APP_TOKEN',
  environment: 'sandbox',
  externalDeviceId: 'YOUR_EXTERNAL_DEVICE_ID'
});
```
:::
::::

% methodEnd

% logLevel

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.initSdk({
  appToken: 'YOUR_APP_TOKEN',
  environment: 'sandbox',
  logLevel: 'verbose'
});
```
:::
::::

% methodEnd

% logOutput

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.initSdk({
  appToken: 'YOUR_APP_TOKEN',
  environment: 'sandbox',
  logOutput: '#logDiv'
});
```
:::
::::

% methodEnd

% namespace

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.initSdk({
  appToken: 'YOUR_APP_TOKEN',
  environment: 'sandbox',
  namespace: 'myCustomNamespace'
});
```
:::
::::

% methodEnd

% getAttribution

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
const attribution = Adjust.getAttribution();
```
:::
::::

% methodEnd

% attributionCallback

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.initSdk({
   appToken: 'YOUR_APP_TOKEN',
   environment: 'sandbox',
   attributionCallback: function (e, attribution){
      console.log('Adid: ' + attribution.adid);
      console.log('Tracker Token: ' + attribution.tracker_token);
      console.log('Tracker Name: ' + attribution.tracker_name);
      console.log('Network: ' + attribution.network);
      console.log('Campaign: ' + attribution.campaign);
      console.log('Adgroup: ' + attribution.adgroup);
      console.log('Creative: ' + attribution.creative);
      console.log('Click Label: ' + attribution.click_label);
      console.log('Atribution State: ' + attribution.state);
   }
});
```
:::
::::

% methodEnd

% addGlobalCallbackParameters

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.addGlobalCallbackParameters([
  {key: 'key1', value: 'value1'},
  {key: 'key2', value: 'value2'}
]);
```
:::
::::

% methodEnd

% removeGlobalCallbackParameter

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.removeGlobalCallbackParameter('key1');
```
:::
::::

% methodEnd

% clearGlobalCallbackParameters

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.clearGlobalCallbackParameters();
```
:::
::::

% methodEnd

% addGlobalPartnerParameters

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.addGlobalPartnerParameters([
  {key: 'key1', value: 'value1'},
  {key: 'key2', value: 'value2'}
]);
```
:::
::::

% methodEnd

% removeGlobalPartnerParameter

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.removeGlobalPartnerParameter('key1');
```
:::
::::

% methodEnd

% clearGlobalPartnerParameters

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.clearGlobalPartnerParameters();
```
:::
::::

% methodEnd

% stop

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.stop();
```
:::
::::

% methodEnd

% restart

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.restart();
```
:::
::::

% methodEnd

% switchToOfflineMode

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.switchToOfflineMode();
```
:::
::::

% methodEnd

% switchBackToOnlineMode

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.switchBackToOnlineMode();
```
:::
::::

% methodEnd

% trackEvent

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
:emphasize-lines: 2

Adjust.trackEvent({
  eventToken: '{YourEventToken}'
})
```
:::
::::

% methodEnd

% trackEvent callbackParams

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
:emphasize-lines: 3-6

Adjust.trackEvent({
  // ... other params go here, including mandatory ones
  callbackParams: [
    {key: 'key', value: 'value'}, 
    {key: 'foo', value: 'bar'}
  ]
})
```
:::
::::

% methodEnd

% trackEvent partnerParams

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
:emphasize-lines: 3-6

Adjust.trackEvent({
  // ... other params go here, including mandatory ones
  partnerParams: [
    {key: 'key', value: 'value'}, 
    {key: 'foo', value: 'bar'}
  ]
})
```
:::
::::

% methodEnd

% trackEvent revenue

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
:emphasize-lines: 3-4

Adjust.trackEvent({
  // ... other params go here, including mandatory ones
  revenue: 110,
  currency: 'EUR'
})
```
:::
::::

% methodEnd

% trackEvent deduplicationId

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
:emphasize-lines: 3

Adjust.trackEvent({
  // ... other params go here, including mandatory ones
   deduplicationId: '{YourDeduplicationId}'
})
```
:::
::::

% methodEnd

% gdprForgetMe

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.gdprForgetMe();
```
:::
::::

% methodEnd

% disableThirdPartySharing

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.disableThirdPartySharing();
```
:::
::::

% methodEnd

% dataResidency

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.initSdk({
  "appToken": "YOUR_APP_TOKEN",
  "environment": "production",
  "logLevel": "verbose",
  "dataResidency": "EU"
})
```
:::
::::

% methodEnd

% urlStrategy

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.initSdk({
  "appToken": "YOUR_APP_TOKEN",
  "environment": "production",
  "logLevel": "verbose",
  "urlStrategy": "china"
})
```
:::
::::

% methodEnd

% getWebUUID

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
const webUUID = Adjust.getWebUUID();
```
:::
::::

% methodEnd

% setReferrer

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.setReferrer("adjust_external_click_id%3DEXTERNAL_CLICK_ID");
```
:::
::::

% methodEnd
