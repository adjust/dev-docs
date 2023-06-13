# Recording methods

% Class method TrackEvent

::::{function} TrackEvent (event)
:noindex:

Record event information using an `AdjustEvent` object and an [Adjust event token](https://help.adjust.com/en/article/basic-event-setup#create-an-event-token).

{#windows-trackevent-invocation}

```c#
public static void TrackEvent(AdjustEvent adjustEvent)
```

:param event: An event object containing information you want to record
:type event: [_AdjustEvent_](/windows/reference/AdjustEvent.md)

% TrackEvent snippet

:::{tab-set-code}

```c#
var adjustEvent = new AdjustEvent("abc123");
Adjust.TrackEvent(adjustEvent);
```

:::

% Snippet end

::::

% Class method end

% Class method AddSessionCallbackParameter

::::{function} AddSessionCallbackParameter (key, value)
:noindex:

Adds callback parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

{#windows-addsessioncallbackparameter-invocation}

```c#
public static void AddSessionCallbackParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% AddSessionCallbackParameter snippet

:::{tab-set-code}

```c#
Adjust.AddSessionCallbackParameter("key", "value");
```

:::

% Snippet end

::::

% Class method end

% Class method RemoveSessionCallbackParameter

::::{function} RemoveSessionCallbackParameter (key)
:noindex:

Removes a callback parameter

{#windows-Removesessioncallbackparameter-invocation}

```c#
public static void RemoveSessionCallbackParameter(string key)
```

:param key: The data key
:type key: string

% RemoveSessionCallbackParameter snippet

:::{tab-set-code}

```c#
Adjust.RemoveSessionCallbackParameter("key");
```

:::

% Snippet end

::::

% Class method end

% Class method ResetSessionCallbackParameters

::::{function} ResetSessionCallbackParameters
:noindex:

Removes all callback parameters

{#windows-Resetsessioncallbackparameters-invocation}

```c#
public static void ResetSessionCallbackParameters()
```

% ResetSessionCallbackParameters snippet

:::{tab-set-code}

```c#
Adjust.ResetSessionCallbackParameters();
```

:::

% Snippet end

::::

% Class method end

% Class method AddSessionPartnerParameter

::::{function} AddSessionPartnerParameter (key, value)
:noindex:

Adds partner parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

{#windows-Addsessionpartnerparameter-invocation}

```c#
public static void AddSessionPartnerParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% AddSessionPartnerParameter snippet

:::{tab-set-code}

```c#
Adjust.AddSessionPartnerParameter("key", "value");
```

:::

% Snippet end

::::

% Class method end

% Class method RemoveSessionPartnerParameter

::::{function} RemoveSessionPartnerParameter (key)
:noindex:

Removes a partner parameter

{#windows-removesessionpartnerparameter-invocation}

```c#
public static void RemoveSessionPartnerParameter(string key)
```

:param key: The data key
:type key: string

% RemoveSessionPartnerParameter snippet

{tab-set-code}

```c#
Adjust.RemoveSessionPartnerParameter("key");
```

:::

% Snippet end

::::

% Class method end

% Class method ResetSessionPartnerParameters

::::{function} ResetSessionPartnerParameters
:noindex:

Resets all partner parameters

{#windows-resetsessionpartnerparameters-invocation}

```c#
public static void ResetSessionPartnerParameters()
```

% ResetSessionPartnerParameters snippet

:::{tab-set-code}

```c#
Adjust.ResetSessionPartnerParameters();
```

:::

% Snippet end

::::

% Class method end

% Class method GetAttribution

::::{function} GetAttribution
:noindex:

Fetches attribution data from the device

{#windows-getattribution-invocation}

```c#
public static AdjustAttribution GetAttribution()
```

:returns: An attribution object containing attribution data associated with the device
:rtype: [`AdjustAttribution` object](/windows/reference/AdjustAttribution.md)

% GetAttribution snippet

:::{tab-set-code}

```c#
AdjustAttribution attribution = Adjust.GetAttribution();
```

:::

% Snippet end

::::
