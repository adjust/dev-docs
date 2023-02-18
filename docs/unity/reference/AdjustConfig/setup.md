# Setup methods

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
