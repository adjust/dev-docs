---
myst:
   substitutions:
      GlobalParams: "[GlobalParams](#web-interface-globalparams)"
      EventParams: "[EventParams](#web-interface-eventparams)"
      Attribution: "[Attribution](#web-interface-attribution)"
---

# Recording methods

% Class method trackEvent

::::{function} trackEvent (EventParamsT)
:noindex:

Record an event object with an [Adjust event token](hc:basic-event-setup#create-an-event-token) and additional parameters.

{#web-trackEvent-invocation}

```typescript
function trackEvent (params: EventParamsT): Promise<void> {
  return _internalTrackEvent(params)
}
```

:param EventParamsT: Your Adjust event parameters
:type EventParamsT: *{{ EventParams }}*

% trackEvent snippet

:::{tab-set-code}

{emphasize-lines="2"}

```javascript
Adjust.trackEvent({
  eventToken: '{YourEventToken}'
})
```

:::

% Snippet end

::::

% Class method end

% Class method addGlobalCallbackParameters

::::{function} addGlobalCallbackParameters(Array<GlobalParams>)
:noindex:

Adds callback parameters to send with each session and event recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

{#web-addGlobalCallbackParameters-invocation}

```typescript
function addGlobalCallbackParameters(params: Array<GlobalParams>): void
```

:param GlobalParams: An array of key-value pairs
:type GlobalParams: *Array\<{{ GlobalParams }}\>*

% addGlobalCallbackParameters snippet

:::{tab-set-code}

```javascript
Adjust.addGlobalCallbackParameters([
  {key: 'key1', value: 'value1'},
  {key: 'key2', value: 'value2'}
]);
```

:::

% Snippet end

::::

% Class method end

% Class method removeGlobalCallbackParameter

::::{function} removeGlobalCallbackParameter(key, value)
:noindex:

Removes a global callback parameter

{#web-removeGlobalCallbackParameter-invocation}

```typescript
function removeGlobalCallbackParameter(key: string): void
```

:param key: The data key
:type key: String

% removeGlobalCallbackParameter snippet

:::{tab-set-code}

```javascript
Adjust.removeGlobalCallbackParameter('key1');
```

:::

% Snippet end

::::

% Class method end

% Class method clearGlobalCallbackParameters

::::{function} clearGlobalCallbackParameters
:noindex:

Removes all global callback parameters

{#web-clearGlobalCallbackParameters-invocation}

```typescript
function clearGlobalCallbackParameters(): void
```

% clearGlobalCallbackParameters snippet

:::{tab-set-code}

```javascript
Adjust.clearGlobalCallbackParameters();
```

:::

% Snippet end

::::

% Class method end

% Class method addGlobalPartnerParameters

::::{function} addGlobalPartnerParameters(Array<GlobalParams>)
:noindex:

Adds partner parameters to send with each session and event recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

{#web-addGlobalPartnerParameters-invocation}

```typescript
function addGlobalPartnerParameters(params: Array<GlobalParams>): void
```

:param GlobalParams: An array of key-value pairs
:type GlobalParams: *Array\<{{ GlobalParams }}\>*

% addGlobalPartnerParameters snippet

:::{tab-set-code}

```javascript
Adjust.addGlobalPartnerParameters([
  {key: 'key1', value: 'value1'},
  {key: 'key2', value: 'value2'}
]);
```

:::

% Snippet end

::::

% Class method end

% Class method removeGlobalPartnerParameter

::::{function} removeGlobalPartnerParameter(key, value)
:noindex:

Removes a global partner parameter

{#web-removeGlobalPartnerParameter-invocation}

```typescript
function removeGlobalPartnerParameter(key: string): void
```

:param key: The data key
:type key: String

% removeGlobalPartnerParameter snippet

:::{tab-set-code}

```javascript
Adjust.removeGlobalPartnerParameter('key1');
```

:::

% Snippet end

::::

% Class method end

% Class method clearGlobalPartnerParameters

::::{function} clearGlobalPartnerParameters
:noindex:

Removes all global partner parameters

{#web-clearGlobalPartnerParameters-invocation}

```typescript
function clearGlobalPartnerParameters(): void
```

% clearGlobalPartnerParameters snippet

:::{tab-set-code}

```javascript
Adjust.clearGlobalPartnerParameters();
```

:::

% Snippet end

::::

% Class method end

% Class method getAttribution

::::{function} getAttribution
:noindex:

Returns the user's attribution information

{#web-getAttribution-invocation}

```typescript
function getAttribution(): Attribution | undefined
```

:returns: The user's attribution information
:rtype: {{ Attribution }}

% getAttribution snippet

:::{tab-set-code}

```javascript
const attribution = Adjust.getAttribution();
```

:::

% Snippet end

::::

% Class method end

## Interfaces

(web-interface-eventparams)=
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

(web-interface-globalparams)=
% interface GlobalParams

:::{js:class} GlobalParams (key, value)
:noindex:

:param key: A unique key for the parameter
:type key: *String*
:param value: The parameter value
:type value: *String*
:::

% interfaceEnd

(web-interface-attribution)=

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
:param click_label: The [click label](hc:user-rewards) associated with the attribution
:type click_label: *String*
:param state: The current state of the attribution. Either `installed` or `reattributed`
:type state: *String*
:::

% interfaceEnd
