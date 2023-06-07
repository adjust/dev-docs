# Record preinstalled app activity

You can use the Adjust SDK to record activity from apps that came preinstalled on a user's device. This enables you to record information from users who didn't download your app from a campaign.

## Default campaign token

:::{versionadded} v4.23.0
Configuring a default campaign enables you to attribute all preinstalls to a predefined campaign token. Adjust records all information against this token until the attribution source changes. You can set up your default tracker in the SDK by passing it to the `setDefaultTracker` method.
:::

:::{tab-set-code}

{emphasize-lines="3"}

```js
const adjustConfig = new AdjustConfig(
   "{YourAppToken}",
   AdjustConfig.EnvironmentSandbox
);
//...
adjustConfig.setDefaultTracker("{TrackerToken}");
//...
Adjust.start(adjustConfig);
```

:::

To set up a default campaign token:

1. Create a new campaign in your Adjust dashboard to use as the default. Record the six digit token at the end of the URL.
2. Call the `setDefaultTracker` method on your config object and pass your token as an argument.
3. Build and run your app. If you have logging enabled, the SDK outputs your default campaign token.

```js
Default tracker: 'abc123'
```
