# Disable the Adjust SDK

The Adjust SDK runs by default when your app is open. You can disable and re-enable the Adjust SDK to pause and resume recording. When you disable the Adjust SDK, it doesn't send any data to Adjust's servers.

You can enable or disable the SDK at any time by calling the [`setEnabled` method](#android-setenabled-invocation) with a boolean argument.

:::{important}
You can only call this method after the first session. This setting persists between sessions.
:::

:::{include} /android/reference/Adjust/config.md
:start-after: setEnabled snippet
:end-before: Snippet end
:::

## Check enabled status

You can check if the Adjust SDK is enabled at any time by calling the [`isEnabled` method](#android-isenabled-invocation). This method returns a boolean value.

:::{include} /android/reference/Adjust/config.md
:start-after: isEnabled snippet
:end-before: Snippet end
:::
