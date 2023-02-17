---
myst:
   substitutions:
      GlobalParams: "[GlobalParams](web-interface-GlobalParams)"
      EventParams: "[EventParams](web-interface-EventParams)"
      Attribution: "[Attribution](web-interface-Attribution)"
---

# Recording methods

% classMethod trackEvent

:::{function} trackEvent (EventParamsT)
:noindex:

Record an event object with an [Adjust event token](https://help.adjust.com/en/article/basic-event-setup#create-an-event-token) and additional parameters.

```{code-block} js
:name: web-trackEvent-invocation

function trackEvent (params: EventParamsT): Promise<void> {
  return _internalTrackEvent(params)
}
```

:param EventParamsT: Your Adjust event parameters
:type EventParamsT: *{{ EventParams }}*

:::

% classMethod end

% classMethod addGlobalCallbackParameters

:::{function} addGlobalCallbackParameters(Array<GlobalParams>)
:noindex:

Adds callback parameters to send with each session and event recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

```{code-block} ts
:name: web-addGlobalCallbackParameters-invocation

function addGlobalCallbackParameters(params: Array<GlobalParams>): void
```

:param GlobalParams: An array of key-value pairs
:type GlobalParams: *Array\<{{ GlobalParams }}\>*

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

:::{function} addGlobalPartnerParameters(Array<GlobalParams>)
:noindex:

Adds partner parameters to send with each session and event recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

```{code-block} ts
:name: web-addGlobalPartnerParameters-invocation

function addGlobalPartnerParameters(params: Array<GlobalParams>): void
```

:param GlobalParams: An array of key-value pairs
:type GlobalParams: *Array\<{{ GlobalParams }}\>*

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

% classMethod getAttribution

:::{function} getAttribution
:noindex:

Returns the user's attribution information

```{code-block} ts
:name: web-getAttribution-invocation

function getAttribution(): Attribution | undefined
```

:returns: The user's attribution information
:rtype: {{ Attribution }}

```{include} /web/fragments/Adjust.md
:start-after: getAttribution
:end-before: methodEnd
```

:::

% classMethod end

## Interfaces

(web-interface-EventParams)=
% interface EventParams

:::{js:class} EventParams (eventToken, revenue?, currency?, deuplicationId?, callbackParams?, partnerParams?)
:noindex:

:param eventToken: Your Adjust event token
:type eventToken: *String*
:param revenue: The amount of money associated with the event
:type revenue: *Number*
:param currency: The ISO code of the currency used for the transaction
:type currency: *String*
:param deduplicationId: An optional identifier to avoid measuring duplicate events
:type deduplicationId: *String*
:param callbackParams: A list of key-value pairs to append to your callback URL
:type callbackParams: *Array\<{{ GlobalParams }}\>*
:param partnerParams: A list of key-value pairs to send to your external partners
:type partnerParams: *Array\<{{ GlobalParams }}\>*

:::
% interfaceEnd


(web-interface-GlobalParams)=
% interface GlobalParams

:::{js:class} GlobalParams (key, value)
:noindex:

:param key: A unique key for the parameter
:type key: *String*
:param value: The parameter value
:type value: *String*
:::

% interfaceEnd

(web-interface-Attribution)=
% interface Attribution

:::{js:class} Attribution (adid, tracker_token, tracker_name, network?, campaign?, adgroup?, creative?, click_label?, state?)
:noindex:

:param adid: The device's unique Adjust identifier
:type adid: *String*
:param tracker_token: The campaign token associated with the attribution
:type tracker_token: *String*
:param tracker_name: The name of the campaign link
:type tracker_name: *String*
:param network: The network associate with the campaign
:type network: *String*
:param campaign: The name of the campaign associated with the attribution
:type campaign: *String*
:param adgroup: The adgroup associated with the attribution
:type adgroup: *String*
:param creative: The creative associated with the attribution
:type creative: *String*
:param click_label: The [click label](https://help.adjust.com/en/article/user-rewards) associated with the attribution
:type click_label: *String*
:param state: The current state of the attribution. Either `installed` or `reattributed`
:type state: *String*
:::

% interfaceEnd
