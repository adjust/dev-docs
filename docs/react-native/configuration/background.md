# Measure activity in the background

By default, the Adjust SDK pauses the sending of requests when your app is running in the background. You can configure the SDK to send requests in the background by enabling the background measurement feature.

Your config object contains a **boolean** {code}`sendInBackground` property that controls this behavior. You can set this property by calling the {code}`setSendInBackground` method on your config instance with a boolean value.

:::{important}
You must set the {code}`setSendInBackground` property _before_ you initialize the Adjust SDK in your app.
:::

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig(appToken, environment);
//...
adjustConfig.setSendInBackground(true);
//...
Adjust.create(adjustConfig);
```

{emphasize-lines="3"}
```ts
const adjustConfig = new AdjustConfig(appToken, environment);
//...
adjustConfig.setSendInBackground(true);
//...
Adjust.create(adjustConfig);
```
:::
