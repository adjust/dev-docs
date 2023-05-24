# Set external device identifiers

:::{note}
This feature is available in Adjust SDK v4.21.0 and later. Contact your Adjust representative to get started with external device IDs.
:::

An external device identifier is a custom value that you can assign to a device or user. They help you recognize users across sessions and platforms. They can also help you deduplicate installs by user so that a user isn't counted as duplicate new installs.

You can use an external device ID as a custom identifier for a device. This helps you keep continuity with your other systems.

Take a look at the [External device identifiers](https://help.adjust.com/en/article/external-device-identifiers) article for more information.

## Set external device ID

:::{important}
You must set your external device ID __before__ initializing the Adjust SDK.
:::

Your config object contains a __string__ {code}`externalDeviceId` property that you can use to store your external device ID. You can set property calling the {code}`setExternalDeviceId` method with your ID as an argument.

The external device ID is case-sensitive. If you have imported external device IDs, make sure the value you pass matches the imported value.

:::{tab-set-code}

{emphasize-lines="3"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setExternalDeviceId("{Your-External-Device-Id}");
//...
Adjust.create(adjustConfig);
```

:::

If you want to use the external device ID in your business analytics, you can pass it as a session callback parameter. See Session parameters for more information.

You can import existing external device IDs into Adjust. This ensures that the Adjust's servers match future data to your existing device records. Contact your Adjust representative for more information.
