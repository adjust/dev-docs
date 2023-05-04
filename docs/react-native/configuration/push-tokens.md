# Set up push tokens

Push tokens are used for [Audience Builder](https://help.adjust.com/en/article/audience-builder) and client callbacks. they're also required for [Uninstall and reinstall tracking](https://help.adjust.com/en/article/uninstalls-reinstalls).

The {code}`AdjustConfig` object contains a string {code}`pushToken` property that you can use to store your push token. You can update this property at any time by calling the setPushToken method with your token as an argument.

:::{tab-set-code}

```js
Adjust.setPushToken("YourPushNotificationToken");
```

```ts
Adjust.setPushToken("YourPushNotificationToken");
```
:::

**See also**: setPushToken method reference.

::::{dropdown} Example

In this example, we set a new push token with the value `HrFmrcq96tj723aWFfrw` to track our app's retention rates. We can update this token by passing it to the {code}`setPushToken` method as an argument:

:::{tab-set-code}

```js
Adjust.setPushToken("HrFmrcq96tj723aWFfrw");
```

```ts
Adjust.setPushToken("HrFmrcq96tj723aWFfrw");
```
:::

::::
