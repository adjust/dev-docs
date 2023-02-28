# Set up push tokens

Push tokens are used for [Audience Builder](https://help.adjust.com/en/article/audience-builder) and client callbacks. They're also required for [Uninstall and reinstall tracking](https://help.adjust.com/en/article/uninstalls-reinstalls).

Your config object contains a string `pushToken` property that you can use to store your push token. You can update this property at any time by calling the [`setPushToken` method](android-setPushToken-invocation) and passing your token as an argument.

:::{include} /android/reference/Adjust/config.md
:start-after: setPushToken snippet
:end-before: Snippet end
:::

## Example

This example demonstrates how to set a new push token with the value _`HrFmrcq96tj723aWFfrw`_ to track your app's retention rates. You can update this value at any time by passing a new token to the `setPushToken` method as an argument:

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin

```{code-block} kotlin
Adjust.setPushToken("HrFmrcq96tj723aWFfrw")
```

:::
:::{tab-item} Java
:sync: java

```{code-block} java
Adjust.setPushToken("HrFmrcq96tj723aWFfrw");
```

:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.setPushToken('HrFmrcq96tj723aWFfrw')
```

:::
::::
