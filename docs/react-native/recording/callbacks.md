# Set up callbacks

Set up callbacks to trigger functions when the SDK sends information to Adjust. You can set up callbacks for **sessions** and **events**.

:::{important}
You must register your callbacks *before* initializing the SDK.
:::

## Session callbacks

Set up session callbacks to trigger functions when the SDK sends session information. You can create **success** callbacks and **failure** callbacks. **Success** callbacks trigger when the SDK sends information to the Adjust server. **Failure** callbacks trigger when the SDK encounters a problem while sending the information.

Session callbacks have access to a response data object. You can use its properties in your callback function.

:::{list-table} Session data object
:header-rows: 1

* - Property
   - Data type
   - Description
* - `Message`
   - String
   - The message from the server or the error logged by the SDK.
* - `Timestamp`
   - String
   - The timestamp from Adjust's servers.
* - `Adid`
   - String
   - A unique device identifier provided by Adjust.
* - `JsonResponse`
   - Dictionary <string, object>
   - The JSON object with the response from the server.
* - `WillRetry`
   - Boolean
   - Indicates whether there will be an attempt to resend a failed package.
:::

### Success callbacks

Set up success callbacks to trigger functions when the SDK records a session.

:::{tab-set-code}

```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setSessionTrackingSucceededCallbackListener(function(sessionSuccess) {
    // Printing all session success properties.
    console.log("Session tracking succeeded!");
    console.log(sessionSuccess.message);
    console.log(sessionSuccess.timestamp);
    console.log(sessionSuccess.adid);
    console.log(sessionSuccess.jsonResponse);
});
//...
Adjust.create(adjustConfig);
```

:::

::::{dropdown} Example

This example demonstrates how to created a callback function `sessionSuccess` and register it as a **success** callback. The function logs the timestamp at which the SDK recorded the session.

:::{tab-set-code}

{emphasize-lines="3,4"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setSessionTrackingSucceededCallbackListener(function(sessionSuccess) {
    console.log(sessionSuccess.timestamp);
});
//...
Adjust.create(adjustConfig);
```

:::

::::

### Failure callbacks

Set up failure callbacks to trigger functions when the SDK fails to record a session.

:::{tab-set-code}

```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setSessionTrackingFailedCallbackListener(function(sessionFailure) {
    // Printing all session failure properties.
    console.log("Session tracking failed!");
    console.log(sessionFailure.message);
    console.log(sessionFailure.timestamp);
    console.log(sessionFailure.adid);
    console.log(sessionFailure.willRetry);
    console.log(sessionFailure.jsonResponse);
});
//...
Adjust.create(adjustConfig);
```

:::

::::{dropdown} Example

This example demonstrates how to created a callback function `sessionFailure` and register it as a **failure** callback. The function logs the session failure message.

:::{tab-set-code}

{emphasize-lines="3,4"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setSessionTrackingFailedCallbackListener(function(sessionFailure) {
    console.log(sessionFailure.message);
});
//...
Adjust.create(adjustConfig);
```

:::

::::

## Event callbacks

Set up event callbacks to trigger functions when the SDK sends event information. You can create **success** callbacks and **failure** callbacks. **Success** callbacks trigger when the SDK sends information to the Adjust server. **Failure** callbacks trigger when the SDK encounters a problem while sending the information.

Event callbacks have access to a response data object. You can use its properties in your callback function.

:::{list-table} Event data object
:header-rows: 1

* - Property
   - Data type
   - Description
* - `Message`
   - String
   - The message from the server or the error logged by the SDK
* - `Timestamp`
   - String
   - The timestamp from Adjust's servers.
* - `Adid`
   - String
   - A unique device identifier provided by Adjust
* - `JsonResponse`
   - Dictionary <string, object>
   - The JSON object with the response from the server
* - `EventToken`
   - String
   - The event token
* - `CallbackId`
   - String
   - The custom callback ID set on the event object
* - `WillRetry`
   - Boolean
   - Indicates whether there will be an attempt to resend a failed package
:::

### Success callbacks

Set up success callbacks to trigger functions when the SDK records an event.

:::{tab-set-code}

```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setEventTrackingSucceededCallbackListener(function(eventSuccess) {
    // Printing all event success properties.
    console.log("Event tracking succeeded!");
    console.log(eventSuccess.message);
    console.log(eventSuccess.timestamp);
    console.log(eventSuccess.eventToken);
    console.log(eventSuccess.callbackId);
    console.log(eventSuccess.adid);
    console.log(eventSuccess.jsonResponse);
});
//...
Adjust.create(adjustConfig);
```

:::

::::{dropdown} Example

This example demonstrates how to created a callback function `eventSuccess` and register it as a **success** callback. The function logs the timestamp at which the SDK recorded the event.

:::{tab-set-code}

{emphasize-lines="3,4"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setEventTrackingSucceededCallbackListener(function(eventSuccess) {
    console.log(eventSuccess.timestamp);
});
//...
Adjust.create(adjustConfig);
```

:::

::::

### Failure callbacks

Set up failure callbacks to trigger functions when the SDK fails to record an event.

:::{tab-set-code}

```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setEventTrackingFailedCallbackListener(function(eventFailure) {
    // Printing all event failure properties.
    console.log("Event tracking failed!");
    console.log(eventFailure.message);
    console.log(eventFailure.timestamp);
    console.log(eventFailure.eventToken);
    console.log(eventFailure.callbackId);
    console.log(eventFailure.adid);
    console.log(eventFailure.willRetry);
    console.log(eventFailure.jsonResponse);
});
//...
Adjust.create(adjustConfig);
```

:::

::::{dropdown} Example

This example demonstrates how to created a callback function `eventFailure` and register it as a **failure** callback. The function logs the event failure message.

:::{tab-set-code}

{emphasize-lines="3,4"}
```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
adjustConfig.setEventTrackingFailedCallbackListener(function(eventFailure) {
    console.log(eventFailure.message);
});
//...
Adjust.create(adjustConfig);
```

:::

::::
