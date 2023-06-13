# Setup methods

% Class method setLogDelegate

::::{function} setLogDelegate (logDelegate)
:noindex:

Sets a delegate function ro program to handle log output

{#windows-setlogdelegate-invocation}

```c#
public void setLogDelegate(Action<String> logDelegate)
```

:param logDelegate: The delegate function or program that handles log output
:type logDelegate: String

% setLogDelegate snippet

:::{tab-set-code}

{emphasize-lines="3"}

```c#
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setLogDelegate(msg => Debug.Log(msg));
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method DefaultTracker

::::{function} DefaultTracker (defaultTracker)
:noindex:

Sets a default tracker token to record installs against

{#windows-setdefaulttracker-invocation}

```c#
public string DefaultTracker { get; set; }
```

:param defaultTracker: The campaign token to which all preinstalled sessions are attributed
:type defaultTracker: string

% DefaultTracker snippet

:::{tab-set-code}

{emphasize-lines="3"}

```c#
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);
config.DefaultTracker = "{TrackerToken}";
Adjust.ApplicationLaunching(config);
```

:::

% Snippet end

::::

% Class method end

% Class method SendInBackground

::::{function} SendInBackground { get; set; }
:noindex:

Sets whether the SDK should send data while the app is running in the background

{#windows-sendinbackground-invocation}

```c#
public bool SendInBackground { get; set; }
```

:param SendInBackground: Whether the SDK should send information when the app is running in the background
:type SendInBackground: Boolean

% SendInBackground snippet

:::{tab-set-code}

{emphasize-lines="4"}

```c#
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);

config.SendInBackground = true;

Adjust.ApplicationLaunching(config);
```

:::

% Snippet end

::::

% Class method end

% Class method SessionTrackingSucceeded

::::{function} SessionTrackingSucceeded { get; set; }
:noindex:

Sets up a success callback to trigger a function when the SDK records a session.

{#windows-sessiontrackingsucceeded-invocation}

```c#
public Action<AdjustSessionSuccess> SessionTrackingSucceeded { get; set; }
```

:param AdjustSessionSuccess: The function to launch when the SDK successfully records a session
:type AdjustSessionSuccess: Action

% SessionTrackingSucceeded snippet

{tab-set-code}

{emphasize-lines="3-6"}

```c#
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);
config.SessionTrackingSucceeded = adjustSessionSuccess =>
{
   //...
};
Adjust.ApplicationLaunching(config);
```

:::

% Snippet end

::::

% Class method end

% Class method SessionTrackingFailed

::::{function} SessionTrackingFailed { get; set; }
:noindex:

Sets up a callback to trigger a function when the SDK fails to record a session.

```c#
:name: windows-sessiontrackingfailed-invocation

public Action<AdjustSessionFailure> SessionTrackingFailed { get; set; }
```

:param AdjustSessionFailure: The function to launch when the SDK fails to record a session
:type AdjustSessionFailure: Action

% SessionTrackingFailed snippet

:::{tab-set-code}

{emphasize-lines="3-6"}

```c#
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);
config.SessionTrackingFailed = adjustSessionFailure =>
{
   //...
};
Adjust.ApplicationLaunching(config);
```

:::

% Snippet end

::::

% Class method end

% Class method EventTrackingSucceeded

::::{function} EventTrackingSucceeded { get; set; }
:noindex:

Sets up a success callback to trigger a function when the SDK records an event.

{#windows-eventtrackingsucceeded-invocation}

```c#
public Action<AdjustEventSuccess> EventTrackingSucceeded { get; set; }
```

:param AdjustEventSuccess: The function to launch when the SDK successfully records an event
:type AdjustEventSuccess: Action

% EventTrackingSucceeded snippet

:::{tab-set-code}

{emphasize-lines="3-6"}

```c#
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);
config.EventTrackingSucceeded = adjustEventSuccess =>
{
   //...
};
Adjust.ApplicationLaunching(config);
```

:::

% Snippet end

::::

% Class method end

% Class method EventTrackingFailed

::::{function} EventTrackingFailed { get; set; }
:noindex:

Sets up a callback to trigger a function when the SDK fails to record an event.

{#windows-eventtrackingfailed-invocation}

```c#
public Action<AdjustEventFailure> EventTrackingFailed { get; set; }
```

:param AdjustEventFailure: The function to launch when the SDK fails to record an event
:type eventFailureDelegate: Action

% EventTrackingFailed snippet

:::{tab-set-code}

{emphasize-lines="3-6"}

```c#
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);
config.EventTrackingFailed = adjustEventFailure =>
{
   //...
};
Adjust.ApplicationLaunching(config);
```

:::

% Snippet end

::::

% Class method end

% Class method setDelayStart

::::{function} DelayStart { get; set; }
:noindex:

Sets a delay before the SDK starts to allow data to load before session information is sent to Adjust's servers. Maximum delay: 10 seconds

{#windows-setdelaystart-invocation}

```c#
public TimeSpan? DelayStart { get; set; }
```

:param DelayStart: The time (in seconds) to delay the start of the SDK by
:type DelayStart: TimeSpan

% DelayStart snippet

:::{tab-set-code}

```c#
adjustConfig.DelayStart = TimeSpan.FromSeconds(5.5);
```

:::

% Snippet end

::::

% Class method end

% Class method setExternalDeviceId

::::{function} setExternalDeviceId (externalDeviceId)
:noindex:

Sets an external device identifier for reporting purposes

{#windows-setexternaldeviceid-invocation}

```c#
public void setExternalDeviceId(string externalDeviceId)
```

:param externalDeviceId: The external device ID associated with the device
:type externalDeviceId: String

% setExternalDeviceId snippet

:::{tab-set-code}

{emphasize-line="3"}

```c#
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox, true);
//...
adjustConfig.setExternalDeviceId("{Your-External-Device-Id}");
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end

% Class method EventBufferingEnabled

::::{function} EventBufferingEnabled { get; set; }
:noindex:

Sets event buffering. If enabled, the SDK stores events on the device and sends all requests once per minute.

{#windows-eventbufferingenabled-invocation}

```c#
public bool EventBufferingEnabled { get; set; }
```

:param EventBufferingEnabled: Whether event buffering is enabled or not
:type EventBufferingEnabled: bool

% EventBufferingEnabled snippet

:::{tab-set-code}

{emphasize-lines="4"}

```c#
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);

config.EventBufferingEnabled = true;

Adjust.ApplicationLaunching(config);
```

:::

% Snippet end

::::

% Class method end

% Class method AttributionChanged

::::{function} AttributionChanged { get; set; }
:noindex:

Sets a delegate function that fires when a user's attribution information updates

{#windows-attributionchanged-invocation}

```c#
public Action<AdjustAttribution> AttributionChanged { get; set; }
```

:param AdjustAttribution: The delegate function that the SDK calls when a the user's attribution information changes
:type AdjustAttribution: Action

% AttributionChanged snippet 1

:::{tab-set-code}

{emphasize-lines="3-4"}

```c#
var config = new AdjustConfig(appToken, environment);

config.AttributionChanged = (attribution) =>
   System.Diagnostics.Debug.WriteLine("attribution: " + attribution);

Adjust.ApplicationLaunching(config);
```

:::

% Snippet end

% AttributionChanged snippet 2

:::{tab-set-code}

{emphasize-lines="2, 5-8"}

```c#
var config = new AdjustConfig(appToken, environment);
config.AttributionChanged = AdjustAttributionChanged;
Adjust.ApplicationLaunching(config);

private void AdjustAttributionChanged(AdjustAttribution attribution)
{
   //...
}
```

:::

% Snippet end

::::

% Class method end

% Class method DeeplinkResponse

::::{function} DeeplinkResponse { get; set; }
:noindex:

Enables or disables launching deferred deep links with the SDK. If **enabled**, the SDK launches deep links the user interacts with

{#windows-deeplinkresponse-invocation}

```c#
public Func<Uri, bool> DeeplinkResponse { get; set; }
```

:param DeeplinkResponse: The function to call on receipt of a deferred deep link
:type DeeplinkResponse: Func

% DeeplinkResponse snippet

:::{tab-set-code}

```c#
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);

config.DeeplinkResponse = deepLinkUri =>
{
   if (ShouldAdjustSdkLaunchTheDeeplink(deepLinkUri))
   {
      return true;
   }
   else
   {
      return false;
   }
};

Adjust.ApplicationLaunching(config);
// ...
```

:::

% Snippet end

::::

% Class method end
