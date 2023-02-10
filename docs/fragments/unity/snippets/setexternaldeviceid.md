---
orphan: true
nosearch: true
---

::::{tab-set}

:::{tab-item} C#

```{code-block} cs
:emphasize-lines: 3

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setExternalDeviceId("{Your-External-Device-Id}");
//...
Adjust.start(adjustConfig);
```

:::

::::
