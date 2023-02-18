# Setup methods

% classMethod setSessionSuccessDelegate

:::{function} setSessionSuccessDelegate (sessionSuccessDelegate)
:noindex:

Sets up a success callback to trigger a function when the SDK records a session.

```{code-block} cs
:name: unity-setSessionSuccessDelegate-invocation

public void setSessionSuccessDelegate(Action<AdjustSessionSuccess> sessionSuccessDelegate, string sceneName = "Adjust")
```

:param sessionSuccessDelegate: The function to launch when the SDK successfully records a session
:type sessionSuccessDelegate: Action

```{include} /unity/fragments/AdjustConfig.md
:start-after: setSessionSuccessDelegate
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setSessionFailureDelegate

:::{function} setSessionFailureDelegate (sessionSuccessDelegate)
:noindex:

Sets up a success callback to trigger a function when the SDK records a session.

```{code-block} cs
:name: unity-setSessionFailureDelegate-invocation

public void setSessionFailureDelegate(Action<AdjustSessionFailure> sessionFailureDelegate, string sceneName = "Adjust")
```

:param sessionFailureDelegate: The function to launch when the SDK fails to record a session
:type sessionFailureDelegate: Action

```{include} /unity/fragments/AdjustConfig.md
:start-after: setSessionFailureDelegate
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setEventSuccessDelegate

:::{function} eventSuccessDelegate (eventSuccessDelegate)
:noindex:

Sets up a success callback to trigger a function when the SDK records an event.

```{code-block} cs
:name: unity-setEventSuccessDelegate-invocation

public void setEventSuccessDelegate(Action<AdjustEventSuccess> eventSuccessDelegate, string sceneName = "Adjust")
```

:param eventSuccessDelegate: The function to launch when the SDK successfully records an event
:type eventSuccessDelegate: Action

```{include} /unity/fragments/AdjustConfig.md
:start-after: setEventSuccessDelegate
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setEventFailureDelegate

:::{function} setEventFailureDelegate (eventFailureDelegate)
:noindex:

Sets up a success callback to trigger a function when the SDK records an event.

```{code-block} cs
:name: unity-setEventFailureDelegate-invocation

public void setEventFailureDelegate(Action<AdjustEventFailure> eventFailureDelegate, string sceneName = "Adjust")
```

:param eventFailureDelegate: The function to launch when the SDK fails to record an event
:type eventFailureDelegate: Action

```{include} /unity/fragments/AdjustConfig.md
:start-after: setEventFailureDelegate
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setDelayStart

:::{function} setDelayStart (delayStart)
:noindex:

Sets a delay before the SDK starts to allow data to load before session information is sent to Adjust's servers. Maximum delay: 10 seconds

```{code-block} cs
:name: unity-setDelayStart-invocation

public void setDelayStart(double delayStart)
```

:param delayStart: The time (in seconds) to delay the start of the SDK by
:type delayStart: double

```{include} /unity/fragments/AdjustConfig.md
:start-after: setDelayStart
:end-before: methodEnd
```

:::

% classMethodEnd
