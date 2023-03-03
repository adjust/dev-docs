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

:::{include} /android/reference/AdjustConfig/setup.md
:start-after: setOnSessionTrackingSucceededListener snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to created a callback function `sessionSuccess` and register it as a **success** callback. The function logs the timestamp at which the SDK recorded the session.

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)

config.setOnSessionTrackingSucceededListener(new OnSessionTrackingSucceededListener() {
    override fun sessionSuccess(sessionSuccessResponseData: AdjustSessionSuccess) {
      Log.v("Session recorded at " + sessionSuccessResponseData.Timestamp)
    }
})

Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);

config.setOnSessionTrackingSucceededListener(new OnSessionTrackingSucceededListener() {
    @Override
    public void sessionSuccess(AdjustSessionSuccess sessionSuccessResponseData) {
      Log.v("Session recorded at " + sessionSuccessResponseData.Timestamp)
    }
});

Adjust.onCreate(config)
```

```javascript
function sessionSuccess(sessionSuccessResponseData) {
   console.log('Session recorded at ' + sessionSuccessResponseData.Timestamp)
}

let adjustConfig = new AdjustConfig(appToken, environment);
adjustConfig.setSessionSuccessCallback(sessionSuccess);

Adjust.onCreate(adjustConfig);
```

:::
::::

### Failure callbacks

Set up failure callbacks to trigger functions when the SDK fails to record a session.

:::{include} /android/reference/AdjustConfig/setup.md
:start-after: setOnSessionTrackingFailedListener snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to created a callback function `sessionFailure` and register it as a **failure** callback. The function logs the session failure message.

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)

config.setOnSessionTrackingFailedListener(new OnSessionTrackingFailedListener() {
    override fun sessionFailure(sessionFailureResponseData: AdjustSessionFailure) {
      Log.v("Session recording failed. Response: " + sessionFailureResponseData.Message)
    }
})

Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);

config.setOnSessionTrackingFailedListener(new OnSessionTrackingFailedListener() {
    @Override
    public void sessionFailure(AdjustSessionFailure sessionFailureResponseData) {
      Log.v("Session recording failed. Response: " + sessionFailureResponseData.Message)
    }
});

Adjust.onCreate(config)
```

```javascript
function sessionFailure(sessionFailureResponseData) {
   console.log('Session recording failed. Response: ' + sessionFailureResponseData.Message)
}

let adjustConfig = new AdjustConfig(appToken, environment);
adjustConfig.setSessionFailureCallback(sessionFailure);

Adjust.onCreate(adjustConfig);
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

:::{include} /android/reference/AdjustConfig/setup.md
:start-after: setOnEventTrackingSucceededListener snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to created a callback function `eventSuccess` and register it as a **success** callback. The function logs the timestamp at which the SDK recorded the event.

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)

config.setOnEventTrackingSucceededListener(new OnEventTrackingSucceededListener() {
    override fun eventSuccess(eventSuccessResponseData: AdjustEventSuccess) {
      Log.v("Event recorded at " + eventSuccessResponseData.Timestamp)
    }
})

Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);

config.setOnEventTrackingSucceededListener(new OnEventTrackingSucceededListener() {
    @Override
    public void eventSuccess(AdjustEventSuccess eventSuccessResponseData) {
      Log.v("Event recorded at " + eventSuccessResponseData.Timestamp)
    }
});

Adjust.onCreate(config)
```

```javascript
function eventSuccess(eventSuccessResponseData) {
   console.log('Event recorded at ' + eventSuccessResponseData.Timestamp)
}

let adjustConfig = new AdjustConfig(appToken, environment);
adjustConfig.setEventSuccessCallback(eventSuccess);

Adjust.onCreate(adjustConfig);
```

:::
::::

### Failure callbacks

Set up failure callbacks to trigger functions when the SDK fails to record an event.

:::{include} /android/reference/AdjustConfig/setup.md
:start-after: setOnEventTrackingFailedListener snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to created a callback function `eventFailure` and register it as a **failure** callback. The function logs the event failure message.

:::{tab-set-code}

```kotlin
val config = AdjustConfig(this, appToken, environment)

config.setOnEventTrackingFailedListener(new OnEventTrackingFailedListener() {
    override fun eventFailure(eventFailureResponseData: AdjustEventFailure) {
      Log.v("Event recording failed. Response: " + eventFailureResponseData.Message)
    }
})

Adjust.onCreate(config)
```

```java
AdjustConfig config = new AdjustConfig(this, appToken, environment);

config.setOnEventTrackingFailedListener(new OnEventTrackingFailedListener() {
    @Override
    public void eventFailure(AdjustEventFailure eventFailureResponseData) {
      Log.v("Event recording failed. Response: " + eventFailureResponseData.Message)
    }
});

Adjust.onCreate(config)
```

```javascript
function eventFailure(eventFailureResponseData) {
   console.log('Event recording failed. Response: ' + eventFailureResponseData.Message)
}

let adjustConfig = new AdjustConfig(appToken, environment);
adjustConfig.setEventFailureCallback(sessionFailure);

Adjust.onCreate(adjustConfig);
```

:::
::::
