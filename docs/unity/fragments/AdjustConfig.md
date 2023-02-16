---
orphan: true
nosearch: true
---

% setLogLevel

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

% methodEnd

% allowSuppressLogLevel

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setLogLevel(AdjustLogLevel.Suppress);
//...
Adjust.start(adjustConfig);
```
:::
::::

% methodEnd

% deactivateSKAdNetworkHandling

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.deactivateSKAdNetworkHandling();
//...
Adjust.start(adjustConfig);
```
:::
::::

% methodEnd

% setDeferredDeeplinkDelegate

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 1-3, 6

private void DeferredDeeplinkCallback(string deeplinkURL) {
   //...
}

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
adjustConfig.setDeferredDeeplinkDelegate(DeferredDeeplinkCallback);
Adjust.start(adjustConfig);
```
:::
::::

% methodEnd

% setExternalDeviceId

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

% methodEnd

% setLaunchDeferredDeeplink

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
//...
adjustConfig.setLaunchDeferredDeeplink(true);
//...
Adjust.start(adjustConfig);
```
:::
::::

% methodEnd

% setLinkMeEnabled

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

% methodEnd

% setLogDelegate

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setLogDelegate(msg => Debug.Log(msg));
//...
Adjust.start(adjustConfig);
```
:::
::::

% methodEnd

% updateConversionValue

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.updateConversionValue(6);
```
:::
::::

% methodEnd
