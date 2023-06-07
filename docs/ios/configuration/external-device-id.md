# Set external device identifiers

:::{versionadded} v4.20.0
An external device identifier is a custom value that you can assign to a device or user. They help you recognize users across sessions and platforms. They can also help you deduplicate installs by user so that a user isn't counted as duplicate new installs. Contact your Adjust representative to get started with external device IDs.
:::

You can use an external device ID as a custom identifier for a device. This helps you keep continuity with your other systems.

:::{seealso}
See the [External device identifiers article](https://help.adjust.com/en/article/external-device-identifiers) in the Adjust help center for more information.
:::

Your config object contains a **string** `externalDeviceId` property that you can use to store your external device ID. You can set property calling the [`setExternalDeviceId` method](#ios-setexternaldeviceid-invocation) with your ID as an argument.

:::{important}
You must set your external device ID **before** initializing the Adjust SDK.
:::

The external device ID is case-sensitive. If you have imported external device IDs, make sure the value you pass matches the imported value.

:::{include} /ios/reference/ADJConfig/setup.md
:start-after: setExternalDeviceId snippet
:end-before: Snippet end
:::

If you want to use the external device ID in your business analytics, you can pass it as a session callback parameter. 

:::{seealso}
See [Session parameters](/ios/recording/session-parameters.md) for more information.
:::

You can import existing external device IDs into Adjust. This ensures that the Adjust servers match future data to your existing device records. Contact your Adjust representative for more information.
