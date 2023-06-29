# Set up callbacks

Set up callbacks to trigger functions when the SDK sends information to Adjust. You can set up callbacks for **{term}`sessions <session>`** and **events**.

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

:::{include} /unity/reference/AdjustConfig/setup.md
:start-after: setSessionSuccessDelegate snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to created a callback function `sessionSuccess` and register it as a **success** callback. The function logs the timestamp at which the SDK recorded the session.

:::{tab-set-code}

```c#
AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setSessionSuccessDelegate(sessionSuccess);
// ...
Adjust.start(adjustConfig);
// ...
public void sessionSuccess (AdjustSessionSuccess sessionSuccessData) {
   Debug.Log("Session recorded at " + sessionSuccessData.Timestamp);
}
```

:::
::::

### Failure callbacks

Set up failure callbacks to trigger functions when the SDK fails to record a session.

:::{include} /unity/reference/AdjustConfig/setup.md
:start-after: setSessionFailureDelegate snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to created a callback function `sessionFailure` and register it as a **failure** callback. The function logs the session failure message.

:::{tab-set-code}

```c#
AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setSessionFailureDelegate(sessionFailure);
// ...
Adjust.start(adjustConfig);
// ...
public void sessionFailure (AdjustSessionFailure sessionFailureData) {
   Debug.Log("Session recording failed. Response: " + sessionFailureData.Message);
}
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

:::{include} /unity/reference/AdjustConfig/setup.md
:start-after: setEventSuccessDelegate snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to created a callback function `eventSuccess` and register it as a **success** callback. The function logs the timestamp at which the SDK recorded the event.

:::{tab-set-code}

```c#
AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setEventSuccessDelegate(eventSuccess);
// ...
Adjust.start(adjustConfig);
// ...
public void eventSuccess (AdjustEventSuccess eventSuccessData) {
   Debug.Log("Event recorded at " + eventSuccessData.Timestamp);
}
```

:::
::::

### Failure callbacks

Set up failure callbacks to trigger functions when the SDK fails to record an event.

:::{include} /unity/reference/AdjustConfig/setup.md
:start-after: setEventFailureDelegate snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to created a callback function `eventFailure` and register it as a **failure** callback. The function logs the event failure message.

:::{tab-set-code}

```c#
AdjustConfig adjustConfig = new AdjustConfig("{Your App Token}", AdjustEnvironment.Sandbox);
adjustConfig.setLogLevel(AdjustLogLevel.Verbose);
adjustConfig.setEventFailureDelegate(eventFailure);
// ...
Adjust.start(adjustConfig);
// ...
public void eventFailure (AdjustEventFailure eventFailureData) {
   Debug.Log("Event recording failed. Response: " + eventFailureData.Message);
}
```

:::
::::
