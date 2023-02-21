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

% setDelayStart

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
//...
adjustConfig.setDelayStart(5.5);
//...
Adjust.start(adjustConfig);
```
:::
::::

% methodEnd

% setSessionSuccessDelegate

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3, 7-9

AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setSessionSuccessDelegate(SessionSuccessCallback);
//...
Adjust.start(adjustConfig);
//...
public void SessionSuccessCallback (AdjustSessionSuccess sessionSuccessData) {
    //...
}
```
:::
::::

% methodEnd

% setSessionFailureDelegate

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3, 7-9

AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setSessionFailureDelegate(SessionFailureCallback);
//...
Adjust.start(adjustConfig);
//...
public void SessionFailureCallback (AdjustSessionFailure sessionFailureData) {
    //...
}
```
:::
::::

% methodEnd

% setEventSuccessDelegate

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3, 7-9

AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setEventSuccessDelegate(EventSuccessCallback);
//...
Adjust.start(adjustConfig);
//...
public void EventSuccessCallback(AdjustEventSuccess eventSuccessData) {
    //...
}
```
:::
::::

% methodEnd

% setEventFailureDelegate

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3, 7-9

AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setEventFailureDelegate(EventFailureCallback);
//...
Adjust.start(adjustConfig);
//...
public void EventFailureCallback(AdjustEventFailure eventFailureData) {
    //...
}
```
:::
::::

% methodEnd

% setAttributionChangedDelegate

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 9, 13-16

using com.adjust.sdk;

public class ExampleGUI : MonoBehaviour {
    void OnGUI() {
        if (GUI.Button(new Rect(0, 0, Screen.width, Screen.height), "callback")) {
            AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
            adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
            adjustConfig.setAttributionChangedDelegate(this.attributionChangedDelegate);
            Adjust.start(adjustConfig);
        }
    }

    public void attributionChangedDelegate(AdjustAttribution attribution) {
        Debug.Log("Attribution changed");
        // ...
    }
}
```
:::
::::

% methodEnd

% setNeedsCost

::::{tab-set}
:::{tab-item} C#
```{code-block} cs

AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setNeedsCost(true);
```
:::
::::

% methodEnd

% setUrlStrategy

::::{tab-set}
:::{tab-item} C#
```{code-block} cs

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
adjustConfig.setUrlStrategy(AdjustConfig.AdjustDataResidencyEU);
Adjust.start(adjustConfig);
```
:::
::::

% methodEnd

% setCoppaCompliantEnabled

::::{tab-set}
:::{tab-item} C#
```{code-block} cs

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
adjustConfig.setCoppaCompliantEnabled(true);
Adjust.start(adjustConfig);
```
:::
::::

% methodEnd
