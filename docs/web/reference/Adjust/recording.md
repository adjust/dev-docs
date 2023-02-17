# Recording methods

% classMethod trackEvent

:::{function} trackEvent (eventToken, revenue, currency, deuplicationId, callbackParams, partnerParams)
:noindex:

Record an event object with an [Adjust event token](https://help.adjust.com/en/article/basic-event-setup#create-an-event-token) and additional parameters.

```js
function trackEvent (params: EventParamsT): Promise<void> {
  return _internalTrackEvent(params)
}
```

:param eventToken: Your Adjust event token
:type eventToken: String
:param revenue: The amount of money associated with the event
:type revenue: Number, optional
:param currency: The ISO code of the currency used for the transaction
:type currency: String, optional
:param deduplicationId: An optional identifier to avoid measuring duplicate events
:type deduplicationId: String, optional
:param callbackParams: A list of key-value pairs to append to your callback URL
:type callbackParams: {key: String, value: String}[], optional
:param partnerParams: A list of key-value pairs to send to your external partners
:type partnerParams: {key: String, value: String}[], optional
:return: Promise

:::

% classMethod end

% classMethod addGlobalCallbackParameters

:::{function} addGlobalCallbackParameters(key, value)
:noindex:

Adds callback parameters to send with each session and event recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

```{code-block} ts
:name: web-addGlobalCallbackParameters-invocation

function addGlobalCallbackParameters(params: Array<GlobalParams>): void
```

:param key: The data key
:type key: String
:param value: The data value
:type value: String

```{include} /web/fragments/Adjust.md
:start-after: addGlobalCallbackParameters
:end-before: methodEnd
```

:::

% classMethod end

% classMethod removeGlobalCallbackParameter

:::{function} removeGlobalCallbackParameter(key, value)
:noindex:

Removes a global callback parameter

```{code-block} ts
:name: web-removeGlobalCallbackParameter-invocation

function removeGlobalCallbackParameter(key: string): void
```

:param key: The data key
:type key: String

```{include} /web/fragments/Adjust.md
:start-after: removeGlobalCallbackParameter
:end-before: methodEnd
```

:::

% classMethod end

% classMethod clearGlobalCallbackParameters

:::{function} clearGlobalCallbackParameters
:noindex:

Removes all global callback parameters

```{code-block} ts
:name: web-clearGlobalCallbackParameters-invocation

function clearGlobalCallbackParameters(): void
```

```{include} /web/fragments/Adjust.md
:start-after: clearGlobalCallbackParameters
:end-before: methodEnd
```

:::

% classMethod end

% classMethod addGlobalPartnerParameters

:::{function} addGlobalPartnerParameters(key, value)
:noindex:

Adds partner parameters to send with each session and event recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

```{code-block} ts
:name: web-addGlobalPartnerParameters-invocation

function addGlobalPartnerParameters(params: Array<GlobalParams>): void
```

:param key: The data key
:type key: String
:param value: The data value
:type value: String

```{include} /web/fragments/Adjust.md
:start-after: addGlobalPartnerParameters
:end-before: methodEnd
```

:::

% classMethod end

% classMethod removeGlobalPartnerParameter

:::{function} removeGlobalPartnerParameter(key, value)
:noindex:

Removes a global partner parameter

```{code-block} ts
:name: web-removeGlobalPartnerParameter-invocation

function removeGlobalPartnerParameter(key: string): void
```

:param key: The data key
:type key: String

```{include} /web/fragments/Adjust.md
:start-after: removeGlobalPartnerParameter
:end-before: methodEnd
```

:::

% classMethod end

% classMethod clearGlobalPartnerParameters

:::{function} clearGlobalPartnerParameters
:noindex:

Removes all global partner parameters

```{code-block} ts
:name: web-clearGlobalPartnerParameters-invocation

function clearGlobalPartnerParameters(): void
```

```{include} /web/fragments/Adjust.md
:start-after: clearGlobalPartnerParameters
:end-before: methodEnd
```

:::

% classMethod end

