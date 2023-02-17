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

* The `revenue` amount (**number**)
* The `currency` code (**string**)

You must format the currency code as a 3 character string that follows the [ISO 4217 standard](https://www.iban.com/currency-codes). Adjust's servers convert the reported revenue to your chosen reporting currency. 

:::{seealso}
Check the guide to [tracking purchases in different currencies](https://help.adjust.com/en/article/currency-conversion) for more information.
:::


```{include} /web/fragments/Adjust.md
:start-after: trackEvent revenue
:end-before: methodEnd
```

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The function sets the `revenue` property of this event to _`0.25`_ and the `currency` property to _`EUR`_.

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js

function init (defaultEventConfig = {}) {
_ui.trackRevenueEventButton.addEventListener('click', _handleTrackEvent, false)
}
//...
function _handleTrackEvent () {
const eventConfig = getItem('eventConfig') || {..._defaultEventConfig}

if (_disabled) {
   return
}

_disabled = true
_ui.trackRevenueEventButton.classList.add('loading')
_ui.trackRevenueEventButton.disabled = true

clearTimeout(_timeoutId)
_timeoutId = setTimeout(() => {
   _disabled = false
   _ui.trackRevenueEventButton.classList.remove('loading')
   _ui.trackRevenueEventButton.disabled = false
   Adjust.trackEvent({
      eventToken: 'g3mfiw',
      revenue: 0.25,
      currency: 'EUR'
   })
}

```
:::
::::
:::::

## Unique events

You can pass an optional identifier to avoid measuring duplicate events. The SDK stores the last ten identifiers and skips revenue events with duplicate transaction IDs.

To configure this, set the `deduplicationId` property to your transaction ID.

```{include} /web/fragments/Adjust.md
:start-after:  trackEvent deduplicationId
:end-before: methodEnd
```

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The function sets the `deduplicationId` to {{ uniqueEventId }}.

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js

function init (defaultEventConfig = {}) {
_ui.trackUniqueEventButton.addEventListener('click', _handleTrackEvent, false)
}
//...
function _handleTrackEvent () {
const eventConfig = getItem('eventConfig') || {..._defaultEventConfig}

if (_disabled) {
   return
}

_disabled = true
_ui.trackUniqueEventButton.classList.add('loading')
_ui.trackUniqueEventButton.disabled = true

clearTimeout(_timeoutId)
_timeoutId = setTimeout(() => {
   _disabled = false
   _ui.trackUniqueEventButton.classList.remove('loading')
   _ui.trackUniqueEventButton.disabled = false
   Adjust.trackEvent({
      eventToken: 'g3mfiw',
      deduplicationId: '5e85484b-1ebc-4141-aab7-25b869e54c49'
   })
}

```
:::
::::
:::::

## Add callback parameters

If you [register a callback URL](https://help.adjust.com/en/article/set-up-callbacks) in the Adjust dashboard, the SDK sends a GET request to your callback URL when it records an event.

You can configure callback parameters to send to your servers. Once you configure parameters on an event, the SDK appends them to your [callback URL](https://help.adjust.com/en/article/raw-data-exports). You can use this information to analyze your users' in-app behavior with your BI system.

Add callback parameters to your event by creating a `callbackParams` array containing `GlobalParam` objects.

```{include} /web/reference/Adjust/recording.md
:start-after: interface GlobalParams
:end-before: interfaceEnd
```

You can append several parameters by adding multiple `GlobalParam` objects to the `callbackParams` array.

```{include} /web/fragments/Adjust.md
:start-after: trackEvent callbackParams
:end-before: methodEnd
```

The Adjust SDK measures the event and sends a request to your URL with the callback parameters. For example, if you register the URL `https://www.mydomain.com/callback`, your callback looks like this:

```
https://www.mydomain.com/callback?key=value&foo=bar
```

:::{note}
Adjust doesn't store your custom callback parameters. Custom parameters are only appended to your callback URL.
:::

If you're using CSV uploads, make sure to add the parameters to your CSV definition.

Adjust supports many placeholders which you can use to pass information from the SDK to your URL. The `{publisher_parameter}` placeholder presents all callback parameters in a single string.

:::{seealso}
You can read more about using URL callbacks, including a full list of available values, in the [callbacks guide](https://help.adjust.com/en/article/callbacks).
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The following callback parameters are added:

* The `event_token`
* The `revenue_amount` generated by the event

The resulting callback URL looks like this:

```
http://www.mydomain.com/callback?event_token=g3mfiw&revenue_amount=0.05
```

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js

function init (defaultEventConfig = {}) {
_ui.trackCallbackEventButton.addEventListener('click', _handleTrackEvent, false)
}
//...
function _handleTrackEvent () {
const eventConfig = getItem('eventConfig') || {..._defaultEventConfig}

if (_disabled) {
   return
}

_disabled = true
_ui.trackCallbackEventButton.classList.add('loading')
_ui.trackCallbackEventButton.disabled = true

clearTimeout(_timeoutId)
_timeoutId = setTimeout(() => {
   _disabled = false
   _ui.trackCallbackEventButton.classList.remove('loading')
   _ui.trackCallbackEventButton.disabled = false
   Adjust.trackEvent({
      eventToken: 'g3mfiw',
      callbackParams: [
         {key: 'eventToken', value: 'g3mfiw'},
         {key: 'revenue_amount', value: '0.05'}
      ]
   })
}

```
:::
::::
:::::

## Add partner parameters

You can send extra information to your network partners by adding [partner parameters](https://help.adjust.com/en/article/advanced-event-setup#receive-custom-data-with-partner-parameters).

Adjust sends partner parameters to [external partners](https://help.adjust.com/en/article/integrated-partners) you have set up. This information is useful for more granular analysis and retargeting purposes. Adjust's servers forward these parameters once you have set them up and enabled them for a partner.

:::{note}
Partner parameters don't appear in raw data by default. You can add the `{partner_parameters}` placeholder to receive them as a single string.
:::

Add callback parameters to your event by creating a `partnerParams` array containing `GlobalParam` objects.

```{include} /web/reference/Adjust/recording.md
:start-after: interface GlobalParams
:end-before: interfaceEnd
```

You can append several parameters by adding multiple `GlobalParam` objects to the `partnerParams` array.

```{include} /web/fragments/Adjust.md
:start-after: trackEvent partnerParams
:end-before: methodEnd
```

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The following partner parameters are added:

* The `product_id` of the associated product
* The `user_id` of the user who triggered the event

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js

function init (defaultEventConfig = {}) {
_ui.trackPartnerEventButton.addEventListener('click', _handleTrackEvent, false)
}
//...
function _handleTrackEvent () {
const eventConfig = getItem('eventConfig') || {..._defaultEventConfig}

if (_disabled) {
   return
}

_disabled = true
_ui.trackPartnerEventButton.classList.add('loading')
_ui.trackPartnerEventButton.disabled = true

clearTimeout(_timeoutId)
_timeoutId = setTimeout(() => {
   _disabled = false
   _ui.trackPartnerEventButton.classList.remove('loading')
   _ui.trackPartnerEventButton.disabled = false
   Adjust.trackEvent({
      eventToken: 'g3mfiw',
      partnerParams: [
         {key: 'product_id', value: '29'},
         {key: 'user_id', value: '835'}
      ]
   })
}

```
:::
::::
:::::

## Record event and redirect to an external page

You can record redirects to external pages as events with the Adjust SDK. To ensure the SDK records the event before the redirect happens, the [`trackEvent` method](web-trackEvent-invocation) returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). This `Promise` is fulfilled after the SDK receives a response from Adjust's servers. If an internal error response is returned, the `Promise` is rejected.

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
