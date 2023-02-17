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
