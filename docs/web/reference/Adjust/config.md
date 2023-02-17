# Configuration methods

Use these methods to update the Adjust SDK's configuration.

% classMethod stop

:::{function} stop
:noindex:

Disables the Adjust SDK. The SDK doesn't send any information while disabled.

```{code-block} ts
:name: web-stop-invocation

function stop(): void
```

```{include} /web/fragments/Adjust.md
:start-after: stop
:end-before: methodEnd
```

:::

% classMethod end

% classMethod restart

:::{function} restart
:noindex:

Restarts the Adjust SDK

```{code-block} ts
:name: web-restart-invocation

function restart(): void
```

```{include} /web/fragments/Adjust.md
:start-after: restart
:end-before: methodEnd
```

:::

% classMethod end
