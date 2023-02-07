---
:orphaned:
---

::::{tab-set}

:::{tab-item} C#

```{code-block} cs
:emphasize-lines: 3

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setLinkMeEnabled(true);
//...
Adjust.start(adjustConfig);
```

:::

::::
