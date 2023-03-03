# Record events

You can associate your [Adjust event tokens](hc:/basic-event-setup#create-an-event-token) to actions in your app to record them. To record an event:

* Create a new Adjust event instance and pass your event token as a string argument.
* Call the [`trackEvent` method](#unity-trackevent-invocation) with your event instance as an argument.

:::{include} /unity/reference/Adjust/recording.md
:start-after: trackEvent snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button.

:::{tab-set-code}

```c#
if (GUI.Button(new Rect(0, Screen.height * 1 / numberOfButtons, Screen.width, Screen.height / numberOfButtons), "Track Simple Event")) {
  AdjustEvent adjustEvent = new AdjustEvent("g3mfiw");
  Adjust.trackEvent(adjustEvent);
}
```

:::
::::

## Record event revenue

You can record revenue associated with an event by setting the revenue and currency properties on your event instance. Use this feature to record revenue-generating actions in your app.

To set these properties, call the [`setRevenue` method](#unity-adjustevent-setrevenue-invocation) and pass the following arguments:

* The `revenue` amount (**number**)
* The `currency` code (**string**)

You must format the currency code as a 3 character string that follows the [ISO 4217 standard](https://www.iban.com/currency-codes). Adjust's servers convert the reported revenue to your chosen reporting currency. 

:::{seealso}
Check the guide to [tracking purchases in different currencies](hc:/currency-conversion) for more information.
:::

:::{include} /unity/reference/AdjustEvent.md
:start-after: setRevenue snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The function sets the `revenue` property of this event to _`0.25`_ and the `currency` property to _`EUR`_.

:::{tab-set-code}

```c#
if (GUI.Button(new Rect(0, Screen.height * 2 / numberOfButtons, Screen.width, Screen.height / numberOfButtons), "Track Revenue Event")) {
  AdjustEvent adjustEvent = new AdjustEvent("g3mfiw");
  adjustEvent.setRevenue(0.25, "EUR");
  Adjust.trackEvent(adjustEvent);
}
```

:::
::::


## Unique events

You can pass an optional identifier to avoid recording duplicate events. The SDK stores the last ten identifiers and skips revenue events with duplicate transaction IDs.

To set the identifier, call the [`setTransactionId` method](#unity-settransactionid-invocation) and pass your transaction ID as a **string** argument.

:::{include} /unity/reference/AdjustEvent.md
:start-after: setTransactionId snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The function sets the `uniqueId` to {{ uniqueEventId }} using the [`setTransactionId` method](#unity-settransactionid-invocation).

:::{tab-set-code}

```c#
if (GUI.Button(new Rect(0, Screen.height * 2 / numberOfButtons, Screen.width, Screen.height / numberOfButtons), "Track Unique Event")) {
  AdjustEvent adjustEvent = new AdjustEvent("g3mfiw");
  string uniqueId = "5e85484b-1ebc-4141-aab7-25b869e54c49"
  adjustEvent.setTransactionId(uniqueId);
  Adjust.trackEvent(adjustEvent);
}
```

:::
::::

## Add callback parameters

If you [register a callback URL](hc:/set-up-callbacks) in the Adjust dashboard, the SDK sends a GET request to your callback URL when it records an event.

You can configure callback parameters to send to your servers. Once you configure parameters on an event, the SDK appends them to your [callback URL](hc:/raw-data-exports). You can use this information to analyze your users' in-app behavior with your BI system.

Add callback parameters to your event by calling the [`addCallbackParameter` method](#unity-adjustevent-addcallbackparameter-invocation) with **string** key-value arguments. You can add multiple parameters by calling this method multiple times.

:::{include} /unity/reference/AdjustEvent.md
:start-after: addCallbackParameter snippet
:end-before: Snippet end
:::

The Adjust SDK measures the event and sends a request to your URL with the callback parameters. For example, if you register the URL `https://www.mydomain.com/callback`, your callback looks like this:

```
https://www.mydomain.com/callback?key=value&foo=bar
```

:::{note}
Adjust doesn't store your custom callback parameters. Custom parameters are only appended to your callback URL.
:::

If you're using CSV uploads, make sure to add the parameters to your CSV definition.

Adjust supports many placeholders which you can use to pass information from the SDK to your URL. For example, the `{idfa}` placeholder for iOS and the `{gps_adid}` placeholder for Android. The `{publisher_parameter}` placeholder presents all callback parameters in a single string.

:::{seealso}
You can read more about using URL callbacks, including a full list of available values, in the [callbacks guide](hc:/callbacks).
:::

::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The following callback parameters are added:

* The `event_token`
* The `revenue_amount` generated by the event

The resulting callback URL looks like this:

```
http://www.mydomain.com/callback?event_token=g3mfiw&revenue_amount=0.05
```

:::{tab-set-code}

```c#
if (GUI.Button(new Rect(0, Screen.height * 2 / numberOfButtons, Screen.width, Screen.height / numberOfButtons), "Track Callback Event")) {
  AdjustEvent adjustEvent = new AdjustEvent("g3mfiw");
  adjustEvent.addCallbackParameter("event_token", "g3mfiw");
  adjustEvent.addCallbackParameter("revenue_amount", "0.05");
  Adjust.trackEvent(adjustEvent);
}
```

:::
::::

## Add partner parameters

You can send extra information to your network partners by adding [partner parameters](hc:/advanced-event-setup#receive-custom-data-with-partner-parameters).

Adjust sends partner parameters to [external partners](hc:/integrated-partners) you have set up. This information is useful for more granular analysis and retargeting purposes. Adjust's servers forward these parameters once you have set them up and enabled them for a partner.

:::{note}
Partner parameters don't appear in raw data by default. You can add the `{partner_parameters}` placeholder to receive them as a single string.
:::

Add partner parameters to your event by calling the [`addPartnerParameter` method](#unity-adjustevent-addpartnerparameter-invocation) with **string** key-value arguments. You can add multiple parameters by calling this method multiple times.

:::{include} /unity/reference/AdjustEvent.md
:start-after: addPartnerParameter snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The following partner parameters are added:

* The `product_id` of the associated product
* The `user_id` of the user who triggered the event

:::{tab-set-code}

```c#
if (GUI.Button(new Rect(0, Screen.height * 2 / numberOfButtons, Screen.width, Screen.height / numberOfButtons), "Track Partner Event")) {
  AdjustEvent adjustEvent = new AdjustEvent("g3mfiw");
  adjustEvent.addPartnerParameter("product_id", "29");
  adjustEvent.addPartnerParameter("user_id", "835");
  Adjust.trackEvent(adjustEvent);
}
```

:::
::::

## Add a callback identifier

You can add a custom string identifier to each event you want to measure. Adjust's servers can report on this identifier in event callbacks. This enables you to keep track of which events have been successfully measured.

Set up this identifier by calling the [`setCallbackId` method](#unity-setcallbackid-invocation) with your ID as a **string** argument.

:::{include} /unity/reference/AdjustEvent.md
:start-after: setCallbackId snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. In this example, the `callbackId` is set to {{ callbackId }}. 

:::{tab-set-code}

```c#
if (GUI.Button(new Rect(0, Screen.height * 2 / numberOfButtons, Screen.width, Screen.height / numberOfButtons), "Track Unique Callback Event")) {
  AdjustEvent adjustEvent = new AdjustEvent("g3mfiw");
  string callbackId = "f2e728d8-271b-49ab-80ea-27830a215147"
  adjustEvent.setCallbackId(callbackId);
  Adjust.trackEvent(adjustEvent);
}
```

:::
::::
