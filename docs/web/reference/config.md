---
myst:
   substitutions:
      InitOptions: "[*InitOptions*](web-interface-InitOptions)"
---

# Configuration methods

Use these methods to update the Adjust SDK's configuration.

% classMethod initSdk

:::{function} initSdk({ logLevel, logOutput, ...options }: InitOptions)
:noindex:

Initializes the Adjust with a set of customizable options

```{code-block} ts
:name: web-initSdk-invocation

function initSdk({ logLevel, logOutput, ...options }: InitOptions): void
```

:param InitOptions: A set of initialization options that configure the SDK's behavior
:type InitOptions: {{ InitOptions }}

:::

% classMethod end

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

% classMethod switchToOfflineMode

:::{function} switchToOfflineMode
:noindex:

Enables offline mode

```{code-block} ts
:name: web-switchToOfflineMode-invocation

function switchToOfflineMode(): void
```

```{include} /web/fragments/Adjust.md
:start-after: switchToOfflineMode
:end-before: methodEnd
```

:::

% classMethod end

% classMethod switchBackToOnlineMode

:::{function} switchBackToOnlineMode
:noindex:

Disables offline mode

```{code-block} ts
:name: web-switchBackToOnlineMode-invocation

function switchBackToOnlineMode(): void
```

```{include} /web/fragments/Adjust.md
:start-after: switchBackToOnlineMode
:end-before: methodEnd
```

:::

% classMethod end

% classMethod setReferrer

:::{function} setReferrer(referrer)
:noindex:

Sets a default referrer to simulate a click

```{code-block} ts
:name: web-setReferrer-invocation

function setReferrer(referrer: string): void
```

:param referrer: Your URL-encoded referrer
:type referrer: String

```{include} /web/fragments/Adjust.md
:start-after: setReferrer
:end-before: methodEnd
```

:::

% classMethod end

## Interfaces

(web-interface-InitOptions)=
% interface InitOptions

:::{js:class} InitOptions (appToken, environment, defaultTracker?, externalDeviceId?, eventDeduplicationListLimit?, customUrl?, dataResidency?, urlStrategy?, namespace?, attributionCallback?, logLevel?, logOutput?)
:noindex:

:param appToken: Your Adjust app token
:type appToken: *String*
:param environment: The environment your app is running in. `sandbox` or `production`
:type environment: *String*
:param defaultTracker: An optional campaign token to track installs against by default
:type defaultTracker: *String*
:param externalDeviceId: A custom device identifier
:type externalDeviceId: *String*
:param eventDeduplicationListLimit: The number of custom event IDs to store
:type eventDeduplicationListLimit: *Int*
:param customUrl: An optional custom endpoint to send requests to
:type customUrl: *String*
:param dataResidency: The region you want to store data in
:type dataResidency: *String*
:param urlStrategy: The region whose endpoints you want to prioritize sending data to
:type urlStrategy: *String*
:param namespace: An optional custom namespace for data storage
:type namespace: *String*
:param attributionCallback: An optional callback method called when the user's attribution information changes
:type attributionCallback: *Function*
:param logLevel: The verbosity of logging
:type logLevel: *String*
:param logOutput: An optional custom HTML selector to send log output to
:type logOutput: *String*
:::

% interfaceEnd
