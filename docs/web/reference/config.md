---
myst:
   substitutions:
      InitOptions: "[*InitOptions*](#web-interface-InitOptions)"
---

# Configuration methods

Use these methods to update the Adjust SDK's configuration.

% Class method initSdk

::::{function} initSdk({ logLevel, logOutput, ...options }: InitOptions)
:noindex:

Initializes the Adjust with a set of customizable options

{#web-initsdk-invocation}
```typescript
function initSdk({ logLevel, logOutput, ...options }: InitOptions): void
```

:param InitOptions: A set of initialization options that configure the SDK's behavior
:type InitOptions: {{ InitOptions }}

% initSdk snippet

:::{tab-set-code}

```javascript
Adjust.initSdk({
  appToken: 'YOUR_APP_TOKEN',
  environment: 'sandbox'
});
```
:::

% Snippet end

::::

% Class method end

% Class method stop

::::{function} stop
:noindex:

Disables the Adjust SDK. The SDK doesn't send any information while disabled.

{#web-stop-invocation}
```typescript
function stop(): void
```

% stop snippet

:::{tab-set-code}

```javascript
Adjust.stop();
```

:::

% Snippet end

::::

% Class method end

% Class method restart

::::{function} restart
:noindex:

Restarts the Adjust SDK

{#web-restart-invocation}
```typescript
function restart(): void
```

% restart snippet

:::{tab-set-code}

```javascript
Adjust.restart();
```

:::

% Snippet end

::::

% Class method end

% Class method switchToOfflineMode

::::{function} switchToOfflineMode
:noindex:

Enables offline mode

{#web-switchtoofflinemode-invocation}
```typescript
function switchToOfflineMode(): void
```

% switchToOfflineMode snippet

:::{tab-set-code}

```javascript
Adjust.switchToOfflineMode();
```
:::

% Snippet end

::::

% Class method end

% Class method switchBackToOnlineMode

::::{function} switchBackToOnlineMode
:noindex:

Disables offline mode

{#web-switchbacktoonlinemode-invocation}
```typescript
function switchBackToOnlineMode(): void
```

% switchBackToOnlineMode snippet

:::{tab-set-code}

```javascript
Adjust.switchBackToOnlineMode();
```

:::

% Snippet end

::::

% Class method end

% Class method setReferrer

::::{function} setReferrer(referrer)
:noindex:

Sets a default referrer to simulate a click

{#web-setreferrer-invocation}
```typescript
function setReferrer(referrer: string): void
```

:param referrer: Your URL-encoded referrer
:type referrer: String

% setReferrer snippet

:::{tab-set-code}

```javascript
Adjust.setReferrer("adjust_external_click_id%3DEXTERNAL_CLICK_ID");
```
:::

% Snippet end

::::

% Class method end

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
