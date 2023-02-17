# Record events

You can associate your [Adjust event tokens](https://help.adjust.com/en/article/basic-event-setup#create-an-event-token) to actions in your app to record them. To record an event:

1. Create a new Adjust event instance and pass your event token as a **string** argument.
2. Call the [`trackEvent` method](web-trackEvent-invocation) method with your event instance as an argument.

```{include} /web/fragments/Adjust.md
:start-after: trackEvent
:end-before: methodEnd
```

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button.

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

You can record revenue associated with an event by setting the `revenue` and `currency` properties on your event instance. Use this feature to record revenue-generating actions in your app.

To set these properties, call the [`trackEvent` method](web-trackEvent-invocation) and pass the following arguments: 

```{list-table}
:header-rows: 1

* - Argument
   - Data type
   - Description
* - `revenue`
   - Number
   - The amount of money associated with the event
* - `currency`
   - String
   - The ISO code of the currency used for the transaction
```

:::{important}
You must format the currency code as a 3 character string that follows the [ISO 4217 standard](https://www.iban.com/currency-codes). The Adjust server converts the reported revenue to your chosen reporting currency. Check [Adjust's guide to tracking purchases in different currencies](https://help.adjust.com/en/article/currency-conversion) for more information.
:::

```{include} /web/fragments/Adjust.md
:start-after: trackEvent revenue
:end-before: methodEnd
```

## Deduplicate events

You can pass an optional identifier to avoid measuring duplicate events. The SDK stores the last ten identifiers and skips revenue events with duplicate transaction IDs.

To configure this, set the `deduplicationId` property to your transaction ID.

```{include} /web/fragments/Adjust.md
:start-after:  trackEvent deduplicationId
:end-before: methodEnd
```

## Add callback parameters

You can register a [callback URL](https://help.adjust.com/en/article/best-practices-callbacks) in the Adjust dashboard to receive additional event information. The Adjust SDK sends a GET request to your callback URL when it records an event.

Callback parameters are **string** key-value pairs that you can to events to send additional information. The Adjust SDK appends these parameters to your callback URL so that you can access it in your [raw data exports](https://help.adjust.com/en/article/raw-data-exports). You can use this information to analyse your users' in-app behavior with your BI system.

Add callback parameters to your event by creating a `callbackParams` array containing the following information:

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

:::{tip}
You can append several parameters by adding multiple key-value pairs to the `callbackParams` array.
:::

```{include} /web/fragments/Adjust.md
:start-after: trackEvent callbackParams
:end-before: methodEnd
```

## Add partner parameters

You can send extra information to your network partners by adding [partner parameters](https://help.adjust.com/en/article/advanced-event-setup#receive-custom-data-with-partner-parameters).

Adjust sends partner parameters to [external partners](https://help.adjust.com/en/article/integrated-partners) you have set up. This information is useful for more granular analysis and retargeting purposes. Adjust's servers forward these parameters once you have set them up and enabled them for a partner.

:::{note}
Partner parameters don't appear in raw data by default. You can add the `{partner_parameters}` placeholder to receive them as a single string.
:::

Add callback parameters to your event by creating a `partnerParams` array containing the following information:

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

:::{tip}
You can append several parameters by adding multiple key-value pairs to the `partnerParams`} array.
:::

```{include} /web/fragments/Adjust.md
:start-after: trackEvent partnerParams
:end-before: methodEnd
```

## Record event and redirect to an external page

You can record redirects to external pages as events with the Adjust SDK. To ensure the SDK records the event before the redirect happens, the {{ recordMethod }} method returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). This `Promise` is fulfilled after the SDK receives a response from Adjust's servers. If an internal error response is returned, the `Promise` is rejected.

:::{tip}
The promise can take a long time to resolve. Adding a timeout is recommended.
:::

The Adjust SDK saves events to an internal queue. This means that even if your request times out or an error occurs, the SDK preserves the event to retry later.

:::::{dropdown} Example

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Promise
  .race([
    Adjust.trackEvent({
      eventToken: 'YOUR_EVENT_TOKEN',
      // ... other event parameters
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => reject('Timed out'), 2000)
    })
  ])
  .catch(error => {
    // ... 
  })
  .then(() => {
    // ... perform redirect, for example 
    window.location.href = "https://www.example.org/"
  });
```
:::
::::
:::::
