# Disable the SDK

The Adjust SDK runs when your app is open by default. You can disable and re-enable the Adjust SDK to pause and resume recording. When you disable the Adjust SDK, it doesn't send any data to Adjust's servers.

You can enable or disable the SDK at any time by calling the `setEnabled` method with a **boolean** argument.

:::{important}
You can only call this method after the first {term}`session`. This setting persists between sessions.
:::

:::{tab-set-code}

```js
Adjust.setEnabled(false);
```

:::

## Example

This example demonstrates how to generate a button to enable or disable the Adjust SDK. The button displays the correct action based on the value of the `txtSetEnabled` variable.

-  When `txtSetEnabled` =` "Disable SDK"`, the button disables the SDK and sets `txtSetEnabled` to `"Enable SDK"`.
-  When `txtSetEnabled` = `"Enable SDK"`, the button enables the SDK and sets `txtSetEnabled` to `"Disable SDK"`.

:::{tab-set-code}

{emphasize-lines="6,10,15"}

```js
const App: () => React$Node = () => {
   Adjust.getSdkVersion(function (sdkVersion) {
      console.log("Adjust SDK version: " + sdkVersion);
   });

   var txtSetEnabled = "Disable SDK";

   function _onPress_enableSdk() {
      Adjust.setEnabled(true);
      txtSetEnabled = "Disable SDK";
   }

   function _onPress_disableSdk() {
      Adjust.setEnabled(false);
      txtSetEnabled = "Enable SDK";
   }
};

export default App;
```

:::

## Check enabled status

You can check if the Adjust SDK is enabled at any time by calling the `isEnabled` method. This method returns a **boolean** value.

:::{tab-set-code}

```js
Adjust.isEnabled();
```

:::
