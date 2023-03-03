# Recording methods

% Class method trackEvent

::::{function} trackEvent (event)
:noindex:

Record event information using an `AdjustEvent` object and an [Adjust event token](https://help.adjust.com/en/article/basic-event-setup#create-an-event-token).

{#unity-trackevent-invocation}
```c#
public static void trackEvent(AdjustEvent adjustEvent)
```

:param event: An event object containing information you want to record
:type event: [*AdjustEvent*](/unity/reference/AdjustEvent.md)

% trackEvent snippet

:::{tab-set-code}

```c#
AdjustEvent adjustEvent = new AdjustEvent("abc123");
//...
Adjust.trackEvent(adjustEvent);
```

:::

% Snippet end

::::

% Class method end

% Class method addSessionCallbackParameter

::::{function} addSessionCallbackParameter (key, value)
:noindex:

Adds callback parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

{#unity-addsessioncallbackparameter-invocation}
```c#
public static void addSessionCallbackParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addSessionCallbackParameter snippet

:::{tab-set-code}

```c#
Adjust.addSessionCallbackParameter("key", "value");
```

:::

% Snippet end

::::

% Class method end

% Class method removeSessionCallbackParameter

::::{function} removeSessionCallbackParameter (key)
:noindex:

Removes a callback parameter

{#unity-removesessioncallbackparameter-invocation}
```c#
public static void removeSessionCallbackParameter(string key)
```

:param key: The data key
:type key: NSString

% removeSessionCallbackParameter snippet

:::{tab-set-code}

```c#
Adjust.removeSessionCallbackParameter("key");
```

:::

% Snippet end

::::

% Class method end

% Class method resetSessionCallbackParameters

::::{function} resetSessionCallbackParameters
:noindex:

Removes all callback parameters

{#unity-resetsessioncallbackparameters-invocation}
```c#
public static void resetSessionCallbackParameters()
```

% resetSessionCallbackParameters snippet

:::{tab-set-code}

```c#
Adjust.resetSessionCallbackParameters();
```

:::

% Snippet end

::::

% Class method end

% Class method addSessionPartnerParameter

::::{function} addSessionPartnerParameter (key, value)
:noindex:

Adds partner parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

{#unity-addsessionpartnerparameter-invocation}
```c#
public static void addSessionPartnerParameter(string key, string value)
```

:param key: The data key
:type key: string
:param value: The data value
:type value: string

% addSessionPartnerParameter snippet

:::{tab-set-code}

```c#
Adjust.addSessionPartnerParameter("key", "value");
```

:::

% Snippet end

::::

% Class method end

% Class method removeSessionPartnerParameter

::::{function} removeSessionPartnerParameter (key)
:noindex:

Removes a partner parameter

{#unity-removesessionpartnerparameter-invocation}
```c#
public static void removeSessionPartnerParameter(string key)
```

:param key: The data key
:type key: string

% removeSessionPartnerParameter snippet

{tab-set-code}

```c#
Adjust.removeSessionPartnerParameter("key");
```

:::

% Snippet end

::::

% Class method end

% Class method resetSessionPartnerParameters

::::{function} resetSessionPartnerParameters
:noindex:

Resets all partner parameters

{#unity-resetsessionpartnerparameters-invocation}
```c#
public static void resetSessionPartnerParameters()
```

% resetSessionPartnerParameters snippet

:::{tab-set-code}

```c#
Adjust.resetSessionPartnerParameters();
```

:::

% Snippet end

::::

% Class method end

% Class method trackAdRevenue

::::{function} trackAdRevenue(adRevenue)
:noindex:

Record the details of an AdjustAdRevenue object

{#unity-trackadrevenue-invocation}
```c#
public static void trackAdRevenue(AdjustAdRevenue adRevenue)
```

:param adRevenue: The ad revenue object containing the revenue details
:type adRevenue: [AdjustAdRevenue object](/unity/reference/AdjustAdRevenue.md)

% trackAdRevenue snippet

:::{tab-set-code}

```c#
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue("source");
//...
Adjust.trackAdRevenue(adjustAdRevenue);
```
:::

% Snippet end

::::

% Class method end

% Class method trackAppStoreSubscription

::::{function} trackAppStoreSubscription(subscription)
:noindex:

Record an App Store subscription object

{#unity-trackappstoresubscription-invocation}
```c#
public static void trackAppStoreSubscription(AdjustAppStoreSubscription subscription)
```

:param subscription: The ad revenue object containing the revenue details
:type subscription: [AdjustAppStoreSubscription object](/unity/reference/AdjustAppStoreSubscription.md)

% trackAppStoreSubscription snippet

:::{tab-set-code}

```c#
AdjustAppStoreSubscription subscription = new AdjustAppStoreSubscription(
    price,
    currency,
    transactionId,
    receipt);
subscription.setTransactionDate(transactionDate);
subscription.setSalesRegion(salesRegion);
subscription.addCallbackParameter("key1", "value1");
subscription.addCallbackParameter("key2", "value2");
subscription.addPartnerParameter("key1", "value1");
subscription.addPartnerParameter("key2", "value2");

Adjust.trackAppStoreSubscription(subscription);
```

:::

% Snippet end

::::

% Class method end

% Class method trackPlayStoreSubscription

::::{function} trackPlayStoreSubscription(subscription)
:noindex:

Record an Play Store subscription object

{#unity-trackplaystoresubscription-invocation}
```c#
public static void trackPlayStoreSubscription(AdjustPlayStoreSubscription subscription)
```

:param subscription: The ad revenue object containing the revenue details
:type subscription: [trackPlayStoreSubscription object](/unity/reference/AdjustPlayStoreSubscription.md)

% trackPlayStoreSubscription snippet

:::{tab-set-code}

```c#
AdjustPlayStoreSubscription subscription = new AdjustPlayStoreSubscription(
    price,
    currency,
    sku,
    orderId,
    signature,
    purchaseToken);
subscription.setPurchaseTime(purchaseTime);
subscription.addCallbackParameter("key1", "value1");
subscription.addCallbackParameter("key2", "value2");
subscription.addPartnerParameter("key1", "value1");
subscription.addPartnerParameter("key2", "value2");

Adjust.trackPlayStoreSubscription(subscription);
```

:::

% Snippet end

::::

% Class method getAttribution

::::{function} getAttribution
:noindex:

Fetches attribution data from the device

{#unity-getattribution-invocation}
```c#
public static AdjustAttribution getAttribution()
```

:returns: An attribution object containing attribution data associated with the device
:rtype: [`AdjustAttribution` object](/unity/reference/AdjustAttribution.md)

% getAttribution snippet

:::{tab-set-code}

```c#
var attribution = Adjust.getAttribution();
```

:::

% Snippet end

::::
