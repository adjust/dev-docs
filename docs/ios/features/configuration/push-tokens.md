# Set up push tokens

Push tokens are used for [Audience Builder](hc:/audience-builder) and client callbacks. They're also required for [Uninstall and reinstall tracking](hc:/uninstalls-reinstalls).

Your config object contains a string `pushToken` property that you can use to store your push token. You can update this property at any time by calling the [`setDeviceToken` method](#ios-setdevicetoken-invocation) inside the `didRegisterForRemoveNotificationsWithDeviceToken` method and passing your token as an argument.

:::{note}
If you have access to the push token from the web view, you can call the `setDeviceToken` method in Javascript.
:::

:::{include} /ios/reference/Adjust/config.md
:start-after: setDeviceToken snippet
:end-before: Snippet end
:::
