# Setup methods

% Class method setLogLevel

:::::{function} setLogLevel (logLevel)
:noindex:

Set the verbosity of logs you want to receive from the Adjust SDK

```{code-block} cs
:name: unity-setLogLevel-invocation

public void setLogLevel(AdjustLogLevel logLevel)
```

:param logLevel: The verbosity of the logging
:type logLevel: ADJLogLevel

% setLogLevel snippet

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

::::{dropdown} Available log levels
:::{list-table}
:header-rows: 1

* - Log level
   - Description
* - `AdjustLogLevel.Verbose`
   - Enable all logging
* - `AdjustLogLevel.Debug`
   - Enable debug logging
* - `AdjustLogLevel.Info`
   - Only show info level logs (default option)
* - `AdjustLogLevel.Warn`
   - Disable info logging
* - `AdjustLogLevel.Error`
   - Disable warning level logging and below
* - `AdjustLogLevel.Assert`
   - Disable error level logging and below
* - `AdjustLogLevel.Suppress`
   - Suppress all logging

:::
::::

% Snippet end

:::::

% Class method end

% Class method setLogDelegate

:::::{function} setLogDelegate (logDelegate)
:noindex:

Sets a delegate function ro program to handle log output

```{code-block} cs
:name: unity-setLogDelegate-invocation

public void setLogDelegate(Action<String> logDelegate)
```

:param logDelegate: The delegate function or program that handles log output
:type logDelegate: String

% setLogDelegate snippet

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

% Snippet end

:::::

% Class method end

% Class method setDefaultTracker

:::::{function} setDefaultTracker (defaultTracker)
:noindex:

Sets a default tracker token to record installs against

```{code-block} cs
:name: unity-setDefaultTracker-invocation

public void setDefaultTracker(string defaultTracker)
```

:param defaultTracker: The tracker token to which all preinstalled sessions are attributed
:type defaultTracker: String

% setDefaultTracker snippet

::::{tab-set}
:::{tab-item} C#

```{code-block} cs

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
//...
adjustConfig.setDefaultTracker("{TrackerToken}");
//...
Adjust.start(adjustConfig);
```

:::
::::

% Snippet end

:::::

% Class method end

% Class method setSendInBackground

:::::{function} setSendInBackground (sendInBackground)
:noindex:

Sets whether the SDK should send data while the app is running in the background

```{code-block} cs
:name: unity-setSendInBackground-invocation

public void setSendInBackground(bool sendInBackground)
```

:param sendInBackground: Whether the SDK should send information when the app is running in the background
:type sendInBackground: Boolean

% setSendInBackground snippet

::::{tab-set}
:::{tab-item} C#

```{code-block} cs

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
//...
adjustConfig.setSendInBackground(true);
//...
Adjust.start(adjustConfig);
```

:::
::::

% Snippet end

:::::

% Class method end

% Class method setSessionSuccessDelegate

:::::{function} setSessionSuccessDelegate (sessionSuccessDelegate)
:noindex:

Sets up a success callback to trigger a function when the SDK records a session.

```{code-block} cs
:name: unity-setSessionSuccessDelegate-invocation

public void setSessionSuccessDelegate(Action<AdjustSessionSuccess> sessionSuccessDelegate, string sceneName = "Adjust")
```

:param sessionSuccessDelegate: The function to launch when the SDK successfully records a session
:type sessionSuccessDelegate: Action

% setSessionSuccessDelegate snippet

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

% Snippet end

:::::

% Class method end

% Class method setSessionFailureDelegate

:::::{function} setSessionFailureDelegate (sessionSuccessDelegate)
:noindex:

Sets up a success callback to trigger a function when the SDK records a session.

```{code-block} cs
:name: unity-setSessionFailureDelegate-invocation

public void setSessionFailureDelegate(Action<AdjustSessionFailure> sessionFailureDelegate, string sceneName = "Adjust")
```

:param sessionFailureDelegate: The function to launch when the SDK fails to record a session
:type sessionFailureDelegate: Action

% setSessionFailureDelegate snippet

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

% Snippet end

:::::

% Class method end

% Class method setEventSuccessDelegate

:::::{function} eventSuccessDelegate (eventSuccessDelegate)
:noindex:

Sets up a success callback to trigger a function when the SDK records an event.

```{code-block} cs
:name: unity-setEventSuccessDelegate-invocation

public void setEventSuccessDelegate(Action<AdjustEventSuccess> eventSuccessDelegate, string sceneName = "Adjust")
```

:param eventSuccessDelegate: The function to launch when the SDK successfully records an event
:type eventSuccessDelegate: Action

% setEventSuccessDelegate snippet

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

% Snippet end

:::::

% Class method end

% Class method setEventFailureDelegate

:::::{function} setEventFailureDelegate (eventFailureDelegate)
:noindex:

Sets up a success callback to trigger a function when the SDK records an event.

```{code-block} cs
:name: unity-setEventFailureDelegate-invocation

public void setEventFailureDelegate(Action<AdjustEventFailure> eventFailureDelegate, string sceneName = "Adjust")
```

:param eventFailureDelegate: The function to launch when the SDK fails to record an event
:type eventFailureDelegate: Action

% setEventFailureDelegate snippet

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

% Snippet end

:::::

% Class method end

% Class method setDelayStart

:::::{function} setDelayStart (delayStart)
:noindex:

Sets a delay before the SDK starts to allow data to load before session information is sent to Adjust's servers. Maximum delay: 10 seconds

```{code-block} cs
:name: unity-setDelayStart-invocation

public void setDelayStart(double delayStart)
```

:param delayStart: The time (in seconds) to delay the start of the SDK by
:type delayStart: double

% setDelayStart snippet

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

% Snippet end

:::::

% Class method end

% Class method setExternalDeviceId

:::::{function} setExternalDeviceId (externalDeviceId)
:noindex:

Sets an external device identifier for reporting purposes

```{code-block} cs
:name: unity-setExternalDeviceId-invocation

public void setExternalDeviceId(string externalDeviceId)
```

:param externalDeviceId: The external device ID associated with the device
:type externalDeviceId: String

% setExternalDeviceId snippet

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

% Snippet end

:::::

% Class method end

% Class method setEventBufferingEnabled

:::::{function} setEventBufferingEnabled (eventBufferingEnabled)
:noindex:

Sets event buffering. If enabled, the SDK stores events on the device and sends all requests once per minute.

```{code-block} cs
:name: unity-setEventBufferingEnabled-invocation

public void setEventBufferingEnabled(bool eventBufferingEnabled)
```

:param eventBufferingEnabled: Whether event buffering is enabled or not
:type eventBufferingEnabled: Boolean

% setEventBufferingEnabled snippet

::::{tab-set}
:::{tab-item} C#

```{code-block} cs

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
//...
adjustConfig.setEventBufferingEnabled(true);
//...
Adjust.start(adjustConfig);
```

:::
::::

% Snippet end

:::::

% Class method end

% Class method setNeedsCost

:::::{function} setNeedsCost (needsCost)
:noindex:

:::{versionadded} v4.24.0
Sets whether the SDK should gather cost data. This is accessible in the user's attribution information.
:::

```{code-block} cs
:name: unity-setNeedsCost-invocation

public void setNeedsCost(bool needsCost)
```

:param needsCost: Whether the SDK should gather cost data
:type needsCost: bool

% setNeedsCost snippet

::::{tab-set}
:::{tab-item} C#

```{code-block} cs

AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setNeedsCost(true);
```

:::
::::

% Snippet end

:::::

% Class method end

% Class method setAttributionChangedDelegate

:::::{function} setAttributionChangedDelegate (attributionChangedDelegate)
:noindex:

Sets a delegate function that fires when a user's attribution information updates

```{code-block} cs
:name: unity-setAttributionChangedDelegate-invocation

public void setAttributionChangedDelegate(Action<AdjustAttribution> attributionChangedDelegate, string sceneName = "Adjust")
```

:param attributionChangedDelegate: The delegate function that the SDK calls when a the user's attribution information changes
:type attributionChangedDelegate: Action

% setAttributionChangedDelegate snippet

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

% Snippet end

:::::

% Class method end

% Class method setPreinstallTrackingEnabled

:::::{function} setPreinstallTrackingEnabled (preinstallTrackingEnabled)
:noindex:

Enables or disables preinstall tracking

```{code-block} cs
:name: unity-setPreinstallTrackingEnabled-invocation

public void setPreinstallTrackingEnabled(bool preinstallTrackingEnabled)
```

:param preinstallTrackingEnabled: Whether preinstall tracking is enabled
:type preinstallTrackingEnabled: Boolean

% setPreinstallTrackingEnabled snippet

::::{tab-set}
:::{tab-item} C#

```{code-block} cs

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setPreinstallTrackingEnabled(true);
//...
Adjust.start(adjustConfig);
```

:::
::::

% Snippet end

:::::

% Class method end

% Class method setPreinstallFilePath

:::::{function} setPreinstallFilePath (preinstallFilePath)
:noindex:

Defines a relative path where preinstall information is available. This directory must be world-readable

```{code-block} cs
:name: unity-setPreinstallFilePath-invocation

public void setPreinstallFilePath(string preinstallFilePath)
```

:param preinstallFilePath: The path where the preinstall information is written
:type preinstallFilePath: String

% setPreinstallFilePath snippet

::::{tab-set}
:::{tab-item} C#

```{code-block} cs

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setPreinstallFilePath("../EngagementFile.xml");
//...
Adjust.start(adjustConfig);
```

:::
::::

% Snippet end

:::::

% Class method end

% Class method deactivateSKAdNetworkHandling

:::::{function} deactivateSKAdNetworkHandling
:noindex:

Turns off communication with SKAdNetwork. Communication is *enabled* by default

```{code-block} cs
:name: unity-deactivateSKAdNetworkHandling-invocation

public void deactivateSKAdNetworkHandling()
```

% deactivateSKAdNetworkHandling snippet

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

% Snippet end

:::::

% Class method end

% Class method setLaunchDeferredDeeplink

:::::{function} setLaunchDeferredDeeplink (launchDeferredDeeplink)
:noindex:

Enables or disables launching deferred deep links with the SDK. If **enabled**, the SDK launches deep links the user interacts with

```{code-block} cs
:name: unity-setLaunchDeferredDeeplink-invocation

public void setLaunchDeferredDeeplink(bool launchDeferredDeeplink)
```

:param launchDeferredDeeplink: Whether to enable launching deferred deep links
:type launchDeferredDeeplink: Boolean

% setLaunchDeferredDeeplink snippet

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

% Snippet end

:::::

% Class method end

% Class method setLinkMeEnabled

:::::{function} setLinkMeEnabled (linkMeEnabled)
:noindex:

Toggle support for Adjust's [LinkMe solution](https://help.adjust.com/en/article/linkme) for deep linking

```{code-block} cs
:name: unity-setLinkMeEnabled-invocation

public void setLinkMeEnabled(bool linkMeEnabled)
```

:param linkMeEnabled: Whether LinkMe should be enabled
:type linkMeEnabled: Boolean

% setLinkMeEnabled snippet

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

% Snippet end

:::::

% Class method end

% Class method setConversionValueUpdatedCallbackDelegate

:::::{function} setConversionValueUpdatedCallbackDelegate(conversionValueUpdatedDelegate)
:noindex:

Sets a delegate function to call when the user's conversion value updates.

```{code-block} cs
:name: unity-setConversionValueUpdatedCallbackDelegate-invocation

public void setConversionValueUpdatedDelegate(Action<int> conversionValueUpdatedDelegate, string sceneName = "Adjust")
```

:param conversionValueUpdatedDelegate: The delegate function the SDK launches when the conversion value updates
:type conversionValueUpdatedDelegate: Action

% setConversionValueUpdatedDelegate snippet

::::{tab-set}
:::{tab-item} C#

```{code-block} cs

AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setConversionValueUpdatedDelegate(ConversionValueUpdatedCallback);
//...
Adjust.start(adjustConfig);
```

:::
::::

% Snippet end

:::::

% Class method end
