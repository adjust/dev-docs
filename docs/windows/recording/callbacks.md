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

-  -  Property
   -  Data type
   -  Description
-  -  `Message`
   -  String
   -  The message from the server or the error logged by the SDK.
-  -  `Timestamp`
   -  String
   -  The timestamp from Adjust's servers.
-  -  `Adid`
   -  String
   -  A unique device identifier provided by Adjust.
-  -  `JsonResponse`
   -  Dictionary <string, object>
   -  The JSON object with the response from the server.
-  -  `WillRetry`
   -  Boolean
   -  Indicates whether there will be an attempt to resend a failed package.

:::

### Success callbacks

Set up success callbacks to trigger functions when the SDK records a session.

:::{include} /windows/reference/AdjustConfig/setup.md
:start-after: SessionTrackingSucceeded snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to log the timestamp at which the SDK recorded the session.

:::{tab-set-code}

```c#
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);
config.SessionTrackingSucceeded = adjustSessionSuccess =>
{
   System.Diagnostics.Debug.WriteLine(adjustSessionSuccess.Timestamp)
};
Adjust.ApplicationLaunching(config);
```

:::
::::

### Failure callbacks

Set up failure callbacks to trigger functions when the SDK fails to record a session.

:::{include} /windows/reference/AdjustConfig/setup.md
:start-after: SessionTrackingFailed snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to log the session failure message.

:::{tab-set-code}

```c#
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);
config.SessionTrackingFailed = adjustSessionFailure =>
{
   System.Diagnostics.Debug.WriteLine(adjustSessionFailure.Message)
};
Adjust.ApplicationLaunching(config);
```

:::
::::

## Event callbacks

Set up event callbacks to trigger functions when the SDK sends event information. You can create **success** callbacks and **failure** callbacks. **Success** callbacks trigger when the SDK sends information to Adjust's servers. **Failure** callbacks trigger when the SDK encounters a problem while sending the information.

Event callbacks have access to a response data object. You can use its properties in your callback function.

:::{list-table} Event data object
:header-rows: 1

-  -  Property
   -  Data type
   -  Description
-  -  `Message`
   -  String
   -  The message from the server or the error logged by the SDK.
-  -  `Timestamp`
   -  String
   -  The timestamp from Adjust's servers.
-  -  `Adid`
   -  String
   -  A unique device identifier provided by Adjust.
-  -  `JsonResponse`
   -  Dictionary <string, object>
   -  The JSON object with the response from the server.
-  -  `EventToken`
   -  String
   -  The event token
-  -  `CallbackId`
   -  String
   -  The custom callback ID set on the event object
-  -  `WillRetry`
   -  Boolean
   -  Indicates whether there will be an attempt to resend a failed package.

:::

### Success callbacks

Set up success callbacks to trigger functions when the SDK records an event.

:::{include} /windows/reference/AdjustConfig/setup.md
:start-after: EventTrackingSucceeded snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to log the timestamp at which the SDK recorded an event.

:::{tab-set-code}

```c#
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);
config.EventTrackingSucceeded = adjustEventSuccess =>
{
   System.Diagnostics.Debug.WriteLine(adjustEventSuccess.Timestamp)
};
Adjust.ApplicationLaunching(config);
```

:::
::::

### Failure callbacks

Set up failure callbacks to trigger functions when the SDK fails to record an event.

:::{include} /windows/reference/AdjustConfig/setup.md
:start-after: EventTrackingFailed snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to logs an event failure message.

:::{tab-set-code}

```c#
var config = new AdjustConfig(appToken, environment,
   msg => System.Diagnostics.Debug.WriteLine(msg), LogLevel.Verbose);
config.EventTrackingFailed = adjustEventFailure =>
{
   System.Diagnostics.Debug.WriteLine(adjustEventFailure.Message)
};
Adjust.ApplicationLaunching(config);
```

:::
::::
