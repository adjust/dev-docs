# Measure preinstalled apps

You can use the Adjust SDK to measure apps that came preinstalled on a user's device. This enables you to record information from users who didn't download your app from a campaign.

## Default tracker

:::{note}
This method is available in Adjust SDK v4.23.0 and later.
:::

The default tracker method attributes all preinstalls to a predefined default tracker. Adjust records all information against this tracker until the attribution source changes. You can set up your default tracker in the SDK by passing it to the {code}`setDefaultTracker` method.

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setDefaultTracker("{TrackerToken}");
//...
Adjust.start(adjustConfig);
```

:::

To set up a default tracker:

1. Create a new tracker in your Adjust dashboard to use as the default. Record the six digit tracker token at the end of the tracker URL.
2. Call the {code}`setDefaultTracker` method on your config object and pass your token as an argument.
3. Build and run your app. If you have logging enabled, the SDK outputs your default tracker token.


```js
Default tracker: 'abc123'
```
