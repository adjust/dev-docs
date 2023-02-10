# Set up SKAdNetwork and conversion values

```{include} /fragments/feature-intros/skad.md
```

## Disable SKAdNetwork communication

<fragment id="SDK disable SKAdNetwork intro" />

<fragment id="Unity SDK deactivateSKAdNetworkHandling snippet" />

## Update conversion values

<fragment id="SDK update conversion value intro" />

<fragment id="Unity SDK updateConversionValue snippet" />

:::::{dropdown} Example

<fragment id="SDK updateConversionValue example intro" />

::::{tab-set}

:::{tab-item} C#

```{code-block} cs
:emphasize-lines: 2

public void OnButtonClick() {
   Adjust.updateConversionValue(10);
}
```

:::

::::

:::::

## Listen for changes to conversion values

<fragment id="SDK setConversionValueUpdatedCallbackDelegate intro" />

:::::{dropdown} Example

<fragment id="SDK setConversionValueUpdatedCallbackDelegate example intro" />

::::{tab-set}

:::{tab-item} C#

```{code-block} cs
:emphasize-lines: 8, 14-17

using com.adjust.sdk;

public class ExampleGUI : MonoBehaviour {
    void OnGUI() {
        if (GUI.Button(new Rect(0, 0, Screen.width, Screen.height), "callback")) {
            AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
            adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
            adjustConfig.setConversionValueUpdatedDelegate(ConversionValueUpdatedCallback);

            Adjust.start(adjustConfig);
        }
    }

    private void ConversionValueUpdatedCallback(int conversionValue) {
        Debug.Log("Conversion value updated. Callback received");
        Debug.Log("Conversion value: " + conversionValue);
    }
}
```

:::

::::

:::::
