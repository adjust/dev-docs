---
myst:
   substitutions:
      recordMethod: "`trackEvent`"
      callbackMethodName: "`callbackParams`"
---

# Record events

```{include} ../../../fragments/feature-intros/measure-events.md
```

```{include} ../../../fragments/web/snippets/trackevent.md
```

:::::{dropdown} Example

```{include} ../../../fragments/example-intros/trackevent.md
```

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js

function init (defaultEventConfig = {}) {
  _ui.trackEventButton.addEventListener('click', _handleTrackEvent, false)
}
//...
function _handleTrackEvent () {
  const eventConfig = getItem('eventConfig') || {..._defaultEventConfig}

  if (_disabled) {
    return
  }

  _disabled = true
  _ui.trackEventButton.classList.add('loading')
  _ui.trackEventButton.disabled = true

  clearTimeout(_timeoutId)
  _timeoutId = setTimeout(() => {
    _disabled = false
    _ui.trackEventButton.classList.remove('loading')
    _ui.trackEventButton.disabled = false
    Adjust.trackEvent({
      eventToken: 'g3mfiw'
    })
}

```
:::
::::
:::::

## Record event revenue

```{include} ../../../fragments/method-intros/setrevenue.md
```

```{include} ../../../fragments/web/snippets/setrevenue.md
```

## Add callback parameters

You can register a [callback URL] in the Adjust dashboard to receive additional event information. The Adjust SDK sends a GET request to your callback URL when it records an event.

Callback parameters are **string** key-value pairs that you can to events to send additional information. The Adjust SDK appends these parameters to your callback URL so that you can access it in your [raw data exports]. You can use this information to analyse your users' in-app behavior with your BI system.

Add callback parameters to your event by creating a {{ callbackMethodName }} array containing the following information:

```{list-table}
:header-rows: 1

* - Parameter
   - Data type
   - Description
* - `key`
   - String
   - The unique key of your callback parameter
* - `value`
   - String
   - The value of your callback parameter

```

```{tip}
You can append several parameters by adding multiple key-value pairs to the {{ callbackMethodName }} array.
```

[callback URL]: https://help.adjust.com/en/article/best-practices-callbacks

[raw data exports]: https://help.adjust.com/en/article/raw-data-exports

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
