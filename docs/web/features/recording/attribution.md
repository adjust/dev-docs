# Get attribution information

When a user interacts with a campaign link, their attribution information updates. This can happen if the user interacts with a [deep link](https://help.adjust.com/en/article/deep-links). The SDK can listen for attribution changes and call a function when it detects an update.

You can set an attribution callback method by specifying an `attributionCallback` function in the [`initSdk` method](web-initSdk-invocation).

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

Within your function, you have access to the user's attribution information.

:::{include} /web/reference/recording.md
:start-after: interface Attribution
:end-before: interfaceEnd
:::

## Get current attribution information

When a user installs your app, Adjust attributes the install to a campaign. The Adjust SDK gives you access to campaign attribution details for your install. To return this information, call the [`getAttribution` method](web-getAttribution-invocation).

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
