# Set up push tokens

Push tokens are used for [Audience Builder](hc:audience-builder) and client callbacks. they're also required for [Uninstall and reinstall tracking](hc:uninstalls-reinstalls).

The {code}`AdjustConfig` object contains a string {code}`pushToken` property that you can use to store your push token. You can update this property at any time by calling the [`setPushToken` method](#react-native-setpushtoken-invocation) with your token as an argument.

:::{tab-set-code}

```js
Adjust.setPushToken("YourPushNotificationToken");
```

```ts
Adjust.setPushToken("YourPushNotificationToken");
```
:::

::::{dropdown} Example

This example demonstrates how to set a new push token with the value _`HrFmrcq96tj723aWFfrw`_ to track your app's retention rates. You can update this value at any time by passing a new token to the `setPushToken` method as an argument:

:::{tab-set-code}

```js
Adjust.setPushToken("HrFmrcq96tj723aWFfrw");
```

```ts
Adjust.setPushToken("HrFmrcq96tj723aWFfrw");
```
:::

::::
