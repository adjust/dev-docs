---
:orphaned:
---

:::{important}
This feature is only available on devices running iOS 14 and above.
:::

SKAdNetwork  is Apple's attribution framework for app install and reinstall attribution. The SKAdNetwork workflow goes like this:

1. Apple gathers attribution information and notifies the relevant ad network.
2. The network sends a postback with this information to Adjust.
3. Adjust displays SKAdNetwork data in Datascape and Data Canvas.
