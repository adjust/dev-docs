# Set up push tokens

Push tokens are used for [Audience Builder](https://help.adjust.com/en/article/audience-builder) and client callbacks. They're also required for [Uninstall and reinstall tracking](https://help.adjust.com/en/article/uninstalls-reinstalls).

Your config object contains a string `PushToken` property that you can use to store your push token. You can update this property at any time by calling the [`SetPushToken` method](#windows-setpushtoken-invocation) and passing your token as an argument.

:::{include} /windows/reference/Adjust/config.md
:start-after: SetPushToken snippet
:end-before: Snippet end
:::

## Example

This example demonstrates how to set a new push token with the value _`HrFmrcq96tj723aWFfrw`_ to track your app's retention rates. You can update this value at any time by passing a new token to the `SetPushToken` method as an argument:

```c#
Adjust.SetPushToken("HrFmrcq96tj723aWFfrw");
```
