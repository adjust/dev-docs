# Recording methods

% classMethod trackEvent

:::{function} trackEvent (event)
:noindex:

Record event information using an `ADJEvent` object and an [Adjust event token](https://help.adjust.com/en/article/basic-event-setup#create-an-event-token).

```{code-block} cs
:name: unity-trackEvent-invocation

public static void trackEvent(AdjustEvent adjustEvent)
```

:param event: An event object containing information you want to record
:type event: [*AdjustEvent*](/unity/reference/AdjustEvent.md)

```{include} /unity/fragments/Adjust.md
:start-after: trackEvent
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addSessionCallbackParameter

:::{function} addSessionCallbackParameter (key, value)
:noindex:

Adds callback parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

```{code-block} cs
:name: unity-addSessionCallbackParameter-invocation

public static void addSessionCallbackParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

```{include} /unity/fragments/Adjust.md
:start-after: addSessionCallbackParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod removeSessionCallbackParameter

:::{function} removeSessionCallbackParameter (key)
:noindex:

Removes a callback parameter

```{code-block} cs
:name: unity-removeSessionCallbackParameter-invocation

public static void removeSessionCallbackParameter(string key)
```

:param key: The data key
:type key: NSString

```{include} /unity/fragments/Adjust.md
:start-after: removeSessionCallbackParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod resetSessionCallbackParameters

:::{function} resetSessionCallbackParameters
:noindex:

Removes all callback parameters

```{code-block} cs
:name: unity-resetSessionCallbackParameters-invocation

public static void resetSessionCallbackParameters()
```

```{include} /unity/fragments/Adjust.md
:start-after: resetSessionCallbackParameters
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addSessionPartnerParameter

:::{function} addSessionPartnerParameter (key, value)
:noindex:

Adds partner parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

```{code-block} cs
:name: unity-addSessionPartnerParameter-invocation

public static void addSessionPartnerParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

```{include} /unity/fragments/Adjust.md
:start-after: addSessionPartnerParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod removeSessionPartnerParameter

:::{function} removeSessionPartnerParameter (key)
:noindex:

Removes a partner parameter

```{code-block} cs
:name: unity-removeSessionPartnerParameter-invocation

public static void removeSessionPartnerParameter(string key)
```

:param key: The data key
:type key: string

```{include} /unity/fragments/Adjust.md
:start-after: removeSessionPartnerParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod resetSessionPartnerParameters

:::{function} resetSessionPartnerParameters
:noindex:

Resets all partner parameters

```{code-block} cs
:name: unity-resetSessionPartnerParameters-invocation

public static void resetSessionPartnerParameters()
```

```{include} /unity/fragments/Adjust.md
:start-after: resetSessionPartnerParameters
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod trackAdRevenue

:::{function} trackAdRevenue(adRevenue)
:noindex:

Record the details of an AdjustAdRevenue object

```{code-block} cs
:name: unity-trackAdRevenue-invocation

public static void trackAdRevenue(AdjustAdRevenue adRevenue)
```

:param adRevenue: The ad revenue object containing the revenue details
:type adRevenue: [AdjustAdRevenue object](/unity/reference/AdjustAdRevenue.md)

```{include} /unity/fragments/Adjust.md
:start-after: trackAdRevenue
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod trackAppStoreSubscription

:::{function} trackAppStoreSubscription(subscription)
:noindex:

Record an App Store subscription object

```{code-block} cs
:name: unity-trackAppStoreSubscription-invocation

public static void trackAppStoreSubscription(AdjustAppStoreSubscription subscription)
```

:param subscription: The ad revenue object containing the revenue details
:type subscription: [AdjustAppStoreSubscription object](/unity/reference/AdjustAppStoreSubscription.md)

```{include} /unity/fragments/Adjust.md
:start-after: trackAppStoreSubscription
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod trackPlayStoreSubscription

:::{function} trackPlayStoreSubscription(subscription)
:noindex:

Record an Play Store subscription object

```{code-block} cs
:name: unity-trackPlayStoreSubscription-invocation

public static void trackPlayStoreSubscription(AdjustPlayStoreSubscription subscription)
```

:param subscription: The ad revenue object containing the revenue details
:type subscription: [trackPlayStoreSubscription object](/unity/reference/AdjustPlayStoreSubscription.md)

```{include} /unity/fragments/Adjust.md
:start-after: trackPlayStoreSubscription
:end-before: methodEnd
```

:::

% classMethod getAttribution

:::{function} getAttribution
:noindex:

Fetches attribution data from the device

```{code-block} cs
:name: unity-getAttribution-invocation

public static AdjustAttribution getAttribution()
```

:returns: An attribution object containing attribution data associated with the device
:rtype: [`AdjustAttribution` object](/unity/reference/AdjustAttribution.md)

```{include} /unity/fragments/Adjust.md
:start-after: getAttribution
:end-before: methodEnd
```

:::
