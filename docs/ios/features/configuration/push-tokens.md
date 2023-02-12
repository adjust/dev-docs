# Set up push tokens

Push tokens are used for [Audience Builder](https://help.adjust.com/en/article/audience-builder) and client callbacks. They're also required for [Uninstall and reinstall tracking](https://help.adjust.com/en/article/uninstalls-reinstalls).

Your config object contains a string `pushToken` property that you can use to store your push token. You can update this property at any time by calling the `setDeviceToken` method inside the `didRegisterForRemoveNotificationsWithDeviceToken` method and passing your token as an argument.

:::{note}
If you have access to the push token from the web view, you can call the `setDeviceToken` method in Javascript.
:::

```{include} /ios/fragments/Adjust.md
:start-after: setDeviceToken
:end-before: methodEnd
```
