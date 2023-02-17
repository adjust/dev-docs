---
orphan: true
nosearch: true
---

% addGlobalCallbackParameters

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.addGlobalCallbackParameters([
  {key: 'key1', value: 'value1'},
  {key: 'key2', value: 'value2'}
]);
```
:::
::::

% methodEnd

% removeGlobalCallbackParameter

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.removeGlobalCallbackParameter('key1');
```
:::
::::

% methodEnd

% clearGlobalCallbackParameters

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.clearGlobalCallbackParameters();
```
:::
::::

% methodEnd

% addGlobalPartnerParameters

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.addGlobalPartnerParameters([
  {key: 'key1', value: 'value1'},
  {key: 'key2', value: 'value2'}
]);
```
:::
::::

% methodEnd

% removeGlobalPartnerParameter

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.removeGlobalPartnerParameter('key1');
```
:::
::::

% methodEnd

% clearGlobalPartnerParameters

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.clearGlobalPartnerParameters();
```
:::
::::

% methodEnd

% stop

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.stop();
```
:::
::::

% methodEnd

% restart

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.restart();
```
:::
::::

% methodEnd

% switchToOfflineMode

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.switchToOfflineMode();
```
:::
::::

% methodEnd

% switchBackToOnlineMode

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.switchBackToOnlineMode();
```
:::
::::

% methodEnd

% trackEvent

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
:emphasize-lines: 2

Adjust.trackEvent({
  eventToken: '{YourEventToken}'
})
```
:::
::::

% methodEnd

% trackEvent callbackParams

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
:emphasize-lines: 3-6

Adjust.trackEvent({
  // ... other params go here, including mandatory ones
  callbackParams: [
    {key: 'key', value: 'value'}, 
    {key: 'foo', value: 'bar'}
  ]
})
```
:::
::::

% methodEnd

% trackEvent partnerParams

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
:emphasize-lines: 3-6

Adjust.trackEvent({
  // ... other params go here, including mandatory ones
  partnerParams: [
    {key: 'key', value: 'value'}, 
    {key: 'foo', value: 'bar'}
  ]
})
```
:::
::::

% methodEnd

% trackEvent revenue

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
:emphasize-lines: 3-4

Adjust.trackEvent({
  // ... other params go here, including mandatory ones
  revenue: 110,
  currency: 'EUR'
})
```
:::
::::

% methodEnd

% trackEvent deduplicationId

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
:emphasize-lines: 3

Adjust.trackEvent({
  // ... other params go here, including mandatory ones
   deduplicationId: '{YourDeduplicationId}'
})
```
:::
::::

% methodEnd
