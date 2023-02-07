---
:orphaned:
---

::::{tab-set}

:::{tab-item} C#

```{code-block} cs
:emphasize-lines: 3

AdjustConfig config = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
config.setLogLevel(AdjustLogLevel.Error);
//...
Adjust.start(config);
```

:::

::::
