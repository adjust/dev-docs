# Disable the Adjust SDK

The Adjust SDK runs by default when your app is open. You can disable and re-enable the Adjust SDK to pause and resume recording. When you disable the Adjust SDK, it doesn't send any data to Adjust's servers.

You can enable or disable the SDK at any time by calling the [`setEnabled` method](#unity-setenabled-invocation) with a boolean argument.

:::{important}
You can only call this method after the first {term}`session`. This setting persists between sessions.
:::

:::{include} /unity/reference/Adjust/config.md
:start-after: setEnabled snippet
:end-before: Snippet end
:::

## Check enabled status

You can check if the Adjust SDK is enabled at any time by calling the [`isEnabled` method](#unity-isenabled-invocation). This method returns a boolean value.

:::{include} /unity/reference/Adjust/config.md
:start-after: isEnabled snippet
:end-before: Snippet end
:::

## Example

This exmpale demonstrates how to generate a button to enable or disable the Adjust SDK. The button displays the correct action based on the value of the txtSetEnabled variable.

* When `txtSetEnabled` = `"Disable SDK"`, the button disables the SDK and sets `txtSetEnabled` to `"Enable SDK"`.
* When `txtSetEnabled` = `"Enable SDK"`, the button enables the SDK and sets `txtSetEnabled` to `"Disable SDK"`.

:::{tab-set-code}

```c#
private string txtSetEnabled = "Disable SDK";

if (GUI.Button(new Rect(0, Screen.height * 6 / numberOfButtons, Screen.width, Screen.height / numberOfButtons), txtSetEnabled)) {
   if (string.Equals(txtSetEnabled, "Disable SDK", StringComparison.OrdinalIgnoreCase)) {
      Adjust.setEnabled(false);
      txtSetEnabled = "Enable SDK";
   }
   else {
      Adjust.setEnabled(true);
      txtSetEnabled = "Disable SDK";
   }
}
```

:::
