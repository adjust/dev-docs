# Set up callbacks

Set up callbacks to trigger functions when the SDK sends information to Adjust. You can set up callbacks for **sessions** and **events**.

:::{important}
You must register your callbacks **before** initializing the SDK.
:::


## Session callbacks

Set up session callbacks to trigger functions when the SDK sends session information. You can create **success** callbacks and **failure** callbacks. **Success** callbacks trigger when the SDK sends information to Adjust's servers. **Failure** callbacks trigger when the SDK encounters a problem while sending the information.

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

:::{include} /flutter/reference/AdjustConfig/setup.md
:start-after: sessionSuccessCallback snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example registers a `sessionSuccessCallback` that prints the timestamp at which the SDK recorded the session.

:::{tab-set-code}

```dart
AdjustConfig myConfig = new AdjustConfig('{Your App Token}', AdjustEnvironment.sandbox);
//...
myConfig.sessionSuccessCallback = (AdjustSessionSuccess sessionSuccessData) {
   print('Session measured at ' + sessionSuccessData.timestamp);
}
//...
Adjust.start(myConfig);
```

:::
::::

### Failure callbacks

Set up failure callbacks to trigger functions when the SDK fails to record a session.

:::{include} /flutter/reference/AdjustConfig/setup.md
:start-after: sessionFailureCallback snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to create a callback function `sessionFailure` and register it as a **failure** callback. The function logs the session failure message.

:::{tab-set-code}

```dart
AdjustConfig myConfig = new AdjustConfig('{Your App Token}', AdjustEnvironment.sandbox);
//...
myConfig.sessionFailureCallback = (AdjustSessionFailure sessionFailureData) {
   print('Session failure due to ' + sessionFailureData.message);
}
//...
Adjust.start(myConfig);
```

:::
::::

## Event callbacks

Set up event callbacks to trigger functions when the SDK sends event information. You can create **success** callbacks and **failure** callbacks. **Success** callbacks trigger when the SDK sends information to Adjust's servers. **Failure** callbacks trigger when the SDK encounters a problem while sending the information.

Event callbacks have access to a response data object. You can use its properties in your callback function.

:::{list-table} Event data object
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
* - `EventToken`
   - String
   - The event token
* - `CallbackId`
   - String
   - The custom callback ID set on the event object
* - `WillRetry`
   - Boolean
   - Indicates whether there will be an attempt to resend a failed package.
:::

### Success callbacks

Set up success callbacks to trigger functions when the SDK records an event.

:::{include} /flutter/reference/AdjustConfig/setup.md
:start-after: eventSuccessCallback snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example registers an `eventSuccessCallback` that prints the timestamp at which the SDK recorded the event.

:::{tab-set-code}

```dart
AdjustConfig myConfig = new AdjustConfig('{Your App Token}', AdjustEnvironment.sandbox);
//...
myConfig.eventSuccessCallback = (AdjustEventSuccess eventSuccessData) {
   print('Session measured at ' + eventSuccessData.timestamp);
}
//...
Adjust.start(myConfig);
```

:::
::::

### Failure callbacks

Set up failure callbacks to trigger functions when the SDK fails to record an event.

:::{include} /flutter/reference/AdjustConfig/setup.md
:start-after: eventFailureCallback snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to create a callback function `eventFailure` and register it as a **failure** callback. The function logs the event failure message.

:::{tab-set-code}

```dart
AdjustConfig myConfig = new AdjustConfig('{Your App Token}', AdjustEnvironment.sandbox);
//...
myConfig.eventFailureCallback = (AdjustEventFailure eventFailureData) {
   print('Session failure due to ' + eventFailureData.message);
}
//...
Adjust.start(myConfig);
```

:::
::::
