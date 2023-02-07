---
:orphaned:
---

The Adjust SDK communicates with SKAdNetwork by default on v4.23.0 and above. The SDK registers for SKAdNetwork attribution upon initialization.

Your config object contains a boolean `isSKAdNetworkHandlingActive` property that controls this behavior. You can disable SKAdNetwork communication by calling the `deactivateSKAdNetworkHandling` method with no argument.

:::{important}
You must call the `deactivateSKAdNetworkHandling` method *before* initializing the Adjust SDK in your app.
:::
