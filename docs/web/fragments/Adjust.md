---
orphan: true
nosearch: true
---

% Record an event

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

% Add callback params

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

% Add partner params

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

% Set revenue

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

% Add deduplication ID

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
