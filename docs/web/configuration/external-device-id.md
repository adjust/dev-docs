# Set external device identifiers

:::{versionadded} v5.1.0
An external device identifier is a custom value that you can assign to a device or user. They help you recognize users across sessions and platforms. They can also help you deduplicate installs by user so that a user isn't counted as duplicate new installs. Contact your Adjust representative to get started with external device IDs.
:::

You can use an external device ID as a custom identifier for a device. This helps you keep continuity with your other systems.

:::{seealso}
See the [External device identifiers article](hc:external-device-identifiers) in the Adjust help center for more information.
:::

You can set an external device ID by specifying an `externalDeviceId` argument in the [`initSdk` method](#web-initsdk-invocation). The external device ID is case-sensitive. If you have imported external device IDs, make sure the value you pass matches the imported value.

:::{tab-set-code}

```javascript
Adjust.initSdk({
  appToken: 'YOUR_APP_TOKEN',
  environment: 'sandbox',
  externalDeviceId: 'YOUR_EXTERNAL_DEVICE_ID'
});
```

:::

You can import existing external device IDs into Adjust. This ensures that the Adjust servers match future data to your existing device records. Contact your Adjust representative for more information.
