# Record events

You can associate your [Adjust event tokens](https://help.adjust.com/en/article/basic-event-setup#create-an-event-token) to actions in your app to measure them. To measure an event:

1. Create a new Adjust event instance and pass your event token as a **string** argument.
2. Call the {code}`trackEvent` method with your event instance as an argument.

:::{tab-set-code}

```js
var adjustEvent = new AdjustEvent("abc123");
Adjust.trackEvent(adjustEvent);
```

:::

::::{dropdown} Example
In this example, we measure an event with the token {code}`g3mfiw` whenever a user interacts with a button.

:::{tab-set-code}

```js
 function _onPress_trackSimpleEvent() {
   var adjustEvent = new AdjustEvent("g3mfiw");
   Adjust.trackEvent(adjustEvent);
}
//...
<>
   <View style={styles.container}>
      <TouchableHighlight
         style={styles.button}
         onPress={_onPress_trackSimpleEvent}>
         <Text>Track Simple Event</Text>
   </View>
</>
```

:::

::::

## Record event revenue

You can measure revenue associated with an event by setting the `revenue` and `currency` properties on your event instance. Use this feature to measure revenue-generating actions in your app.

To set these properties, call the {code}`setRevenue` method and pass the following arguments:

- The revenue amount (**number**)
- The currency code (**string**)

You must format the currency code as a 3 character string that follows the [ISO 4217 standard](https://www.iban.com/currency-codes). The Adjust server converts the reported revenue to your chosen reporting currency. Check [our guide to tracking purchases in different currencies](https://help.adjust.com/en/article/currency-conversion) for more information.

:::{tab-set-code}

{emphasize-lines="3"}
```js
var adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.setRevenue(0.01, "EUR");
//...
Adjust.trackEvent(adjustEvent);
```

:::

:::{tip}
If you are measuring in-app purchases, call trackEvent only **after** the purchase is complete.
:::


::::{dropdown} Example

In this example, we measure an event with the token {code}`g3mfiw` whenever a user interacts with a button. We set the `revenue` property of this event to `0.25` and the `currency` property to `EUR`.

:::{tab-set-code}

{emphasize-lines="2,3"}
```js
function _onPress_trackRevenueEvent() {
    var adjustEvent = new AdjustEvent("g3mfiw");
    adjustEvent.setRevenue(0.25, "EUR");
    Adjust.trackEvent(adjustEvent);
}
//...
<>
   <View style={styles.container}>
      <TouchableHighlight
         style={styles.button}
         onPress={_onPress_trackRevenueEvent}>
         <Text>Track Revenue Event</Text>
      </TouchableHighlight>
   </View>
</>
```

:::

::::

## Deduplicate events

You can pass an optional identifier to avoid measuring duplicate events. The SDK stores the last ten identifiers and skips revenue events with duplicate transaction IDs.

To set the identifier, call the {code}`setTransactionId` method and pass your transaction ID as a **string** argument.

:::{tab-set-code}

{emphasize-lines="3"}
```js
var adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.setTransactionId("{transactionId}");
//...
Adjust.trackEvent(adjustEvent);
```

:::

::::{dropdown} Example

In this example, we measure an event with the token {code}`g3mfiw` whenever a user interacts with a button. We create a string variable called code`uniqueId` with the value `5e85484b-1ebc-4141-aab7-25b869e54c49`. We then pass this value to the {code}`setTransactionId` method to set the {code}`transactionId` property.

:::{tab-set-code}

{emphasize-lines="2,3,4"}
```js
function _onPress_trackRevenueEvent() {
    var adjustEvent = new AdjustEvent("g3mfiw");
    var uniqueId = "5e85484b-1ebc-4141-aab7-25b869e54c49"
    adjustEvent.setTransactionId(uniqueId);
    Adjust.trackEvent(adjustEvent);
}
//...
<>
   <View style={styles.container}>
      <TouchableHighlight
         style={styles.button}
         onPress={_onPress_trackRevenueEvent}>
         <Text>Track Revenue Event</Text>
      </TouchableHighlight>
   </View>
</>
```

:::

::::

## Add callback parameters

If you [register a callback URL](https://help.adjust.com/en/article/best-practices-callbacks) for your events in the Adjust dashboard, Adjust sends a GET request to your callback URL when the SDK measures an event.

You can configure callback parameters to your servers. Once you configure parameters on an event, the SDK appends them to your [callback URL](https://help.adjust.com/en/article/raw-data-exports). You can use this information to analyze your users' in-app behavior with your BI system.

Add callback parameters to your event by calling the {code}`addCallbackParameter` method with **string** key-value arguments. You can add multiple parameters by calling this method multiple times.

:::{tab-set-code}

{emphasize-lines="3"}
```js
var adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.addCallbackParameter("key", "value");
//...
Adjust.trackEvent(adjustEvent);
```

:::

The Adjust SDK measures the event and sends a request to your URL with the callback parameters. For example, if you register the URL `http://www.mydomain.com/callback`, your callback looks like this:

```uri
http://www.mydomain.com/callback?key=value&foo=bar
```

If you are using CSV uploads, make sure to [add the parameters to your CSV definition](https://help.adjust.com/en/article/csv-uploads#format-your-csv-definition).

Adjust supports many placeholders which you can use to pass information from the SDK to your URL. For example, the {code}`{idfa}` placeholder for iOS and the {code}`{gps_adid}` placeholder for Android. The {code}`{publisher_parameter}` placeholder presents all callback parameters in a single string.

You can read more about using URL callbacks, including a full list of available values, in our [callbacks guide](https://help.adjust.com/en/article/callbacks).

:::{note}
Adjust doesn't store your custom callback parameters. Custom parameters are only appended to your callback URL.
:::

::::{dropdown} Example

In this example, we measure an event with the token {code}`g3mfiw` whenever a user interacts with a button. We add the following callback parameters:

- The {code}`event_token`
- The {code}`revenue_amount` generated by the event

The resulting callback URL looks like this:

```uri
http://www.mydomain.com/callback?event_token=g3mfiw&revenue_amount=0.05
```
:::{tab-set-code}

{emphasize-lines="2,3,4"}
```js
function _onPress_trackCallbackEvent() {
   var adjustEvent = new AdjustEvent("g3mfiw");
   adjustEvent.addCallbackParameter("event_token", "g3mfiw");
   adjustEvent.addCallbackParameter("revenue_amount", "0.05");
   Adjust.trackEvent(adjustEvent);
}
//...
<>
   <View style={styles.container}>
      <TouchableHighlight
         style={styles.button}
         onPress={_onPress_trackCallbackEvent}>
         <Text>Track Callback Event</Text>
      </TouchableHighlight>
   </View>
</>
```

:::

::::

## Add partner parameters

You can send extra information to your network partners by adding [partner parameters](https://help.adjust.com/en/article/advanced-event-setup#receive-custom-data-with-partner-parameters).

Adjust sends partner parameters to [external partners](https://help.adjust.com/en/article/integrated-partners) you have set up. This information is useful for more granular analysis and retargeting purposes. The server forwards these parameters once you have set them up and enabled them for a partner.

:::{note}
Partner parameters don't appear in raw data by default. You can add the {code}`{partner_parameters}` placeholder to receive them as a single string.
:::

Add partner parameters to your event by calling the {code}`addPartnerParameter` method with **string** key-value arguments. You can add multiple parameters by calling this method multiple times.

:::{tab-set-code}

{emphasize-lines="3"}
```js
var adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.addPartnerParameter("key", "value");
//...
Adjust.trackEvent(adjustEvent);
```

:::

::::{dropdown} Example

In this example, we measure an event with the token {code}`g3mfiw` whenever a user interacts with a button. We add the following information as partner parameters:

- The {code}`product_id` of the associated product
- The {code}`user_id` of the user who triggered the event

:::{tab-set-code}

{emphasize-lines="2,3,4"}
```js
function _onPress_trackPartnerEvent() {
   var adjustEvent = new AdjustEvent("g3mfiw");
   adjustEvent.addPartnerParameter("product_id", "29");
   adjustEvent.addPartnerParameter("user_id", "835");
   Adjust.trackEvent(adjustEvent);
}
//...
<>
   <View style={styles.container}>
      <TouchableHighlight
         style={styles.button}
         onPress={_onPress_trackPartnerEvent}>
         <Text>Track Partner Event</Text>
      </TouchableHighlight>
   </View>
</>
```

:::

::::

## Add a callback identifier

You can add a custom string identifier to each event you want to measure. The Adjust server can report on this identifier in event callbacks. This enables you to keep track of which events have been successfully measured.

Set up this identifier by calling the {code}`setCallbackId` method with your ID as a **string** argument.

:::{tab-set-code}

{emphasize-lines="3"}
```js
var adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.setCallbackId("your_callback_id");
//...
Adjust.trackEvent(adjustEvent);
```

:::

::::{dropdown} Example

In this example, we measure an event with the token {code}`g3mfiw` whenever a user interacts with a button. We create a string variable called {code}`callbackId` with the value `f2e728d8-271b-49ab-80ea-27830a215147`. We then pass this value to the {code}`setCallbackId` method to set the {code}`callbackId` property.

:::{tab-set-code}

{emphasize-lines="2,3,5"}
```js
function _onPress_trackUniqueCallbackEvent() {
   var adjustEvent = new AdjustEvent("g3mfiw");
   var callbackId = "f2e728d8-271b-49ab-80ea-27830a215147"
   //...
   adjustEvent.setCallbackId(callbackId);
   //...
   Adjust.trackEvent(adjustEvent);
}
<>
   <View style={styles.container}>
      <TouchableHighlight
         style={styles.button}
         onPress={_onPress_trackUniqueCallbackEvent}>
         <Text>Track Unique Callback Event</Text>
      </TouchableHighlight>
   </View>
</>
```

:::

::::
