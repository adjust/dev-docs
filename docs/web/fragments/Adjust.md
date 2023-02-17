---
orphan: true
nosearch: true
---

% start

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
