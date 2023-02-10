# Recording methods

(web-sdk-trackevent)=

:::{function} trackEvent (eventToken, revenue, currency, deuplicationId, callbackParams, partnerParams)

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
