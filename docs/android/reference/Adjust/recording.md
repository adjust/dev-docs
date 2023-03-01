# Recording methods

% Class method trackEvent

::::{function} trackEvent (event)
:noindex:

Record event information using an `AdjustEvent` object and an [Adjust event token](https://help.adjust.com/en/article/basic-event-setup#create-an-event-token).

```{code-block} java
:name: android-trackEvent-invocation

public static void trackEvent(AdjustEvent event)
```

:param event: An event object containing information you want to record
:type event: [*AdjustEvent*](/android/reference/AdjustEvent.md)

% trackEvent snippet

:::{tab-set-code}

```{code-block} kotlin
val adjustEvent = AdjustEvent("abc123")
Adjust.trackEvent(adjustEvent)
```

```{code-block} java
AdjustEvent adjustEvent = new AdjustEvent("abc123");
Adjust.trackEvent(adjustEvent);
```

```{code-block} javascript
let adjustEvent = new AdjustEvent('abc123');
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

```{code-block} java
:name: android-addSessionCallbackParameter-invocation

public static void addSessionCallbackParameter(String key, String value)
```

:param key: The data key
:type key: String
:param value: The data value
:type value: String

% addSessionCallbackParameter snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.addSessionCallbackParameter("foo", "bar")
```

```{code-block} java
Adjust.addSessionCallbackParameter("foo", "bar");
```

```{code-block} javascript
Adjust.addSessionCallbackParameter('foo', 'bar');
```

:::

% Snippet end

::::

% Class method end

% Class method removeSessionCallbackParameter

::::{function} removeSessionCallbackParameter (key)
:noindex:

Removes a callback parameter

```{code-block} java
:name: android-removeSessionCallbackParameter-invocation

public static void removeSessionCallbackParameter(String key)
```

:param key: The data key
:type key: String

% removeSessionCallbackParameter snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.removeSessionCallbackParameter("foo")
```

```{code-block} java
Adjust.removeSessionCallbackParameter("foo");
```

```{code-block} javascript
Adjust.removeSessionCallbackParameter('foo');
```

:::

% Snippet end

::::

% Class method end

% Class method resetSessionCallbackParameters

::::{function} resetSessionCallbackParameters
:noindex:

Removes all callback parameters

```{code-block} java
:name: android-resetSessionCallbackParameters-invocation

public static void resetSessionCallbackParameters()
```

% resetSessionCallbackParameters snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.resetSessionCallbackParameters()
```

```{code-block} java
Adjust.resetSessionCallbackParameters();
```

```{code-block} javascript
Adjust.resetSessionCallbackParameters());
```

:::

% Snippet end

::::

% Class method end

% Class method addSessionPartnerParameter

:::::{function} addSessionPartnerParameter (key, value)
:noindex:

Adds partner parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

```{code-block} java
:name: android-addSessionPartnerParameter-invocation

public static void addSessionPartnerParameter(String key, String value)
```

:param key: The data key
:type key: String
:param value: The data value
:type value: String

% addSessionPartnerParameter snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.addSessionPartnerParameter("foo", "bar")
```

```{code-block} java
Adjust.addSessionPartnerParameter("foo", "bar");
```

```{code-block} javascript
Adjust.addSessionPartnerParameter('foo', 'bar');
```

:::

% Snippet end

:::::

% Class method end

% Class method removeSessionPartnerParameter

:::::{function} removeSessionPartnerParameter (key)
:noindex:

Removes a partner parameter

```{code-block} java
:name: android-removeSessionPartnerParameter-invocation

public static void removeSessionPartnerParameter(String key)
```

:param key: The data key
:type key: String

% removeSessionPartnerParameter snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.removeSessionPartnerParameter("foo")
```

```{code-block} java
Adjust.removeSessionPartnerParameter("foo");
```

```{code-block} javascript
Adjust.removeSessionPartnerParameter('foo');
```

:::

% Snippet end

:::::

% Class method end

% Class method resetSessionPartnerParameters

:::::{function} resetSessionPartnerParameters
:noindex:

Resets all partner parameters

```{code-block} java
:name: android-resetSessionPartnerParameters-invocation

public static void resetSessionPartnerParameters()
```

% resetSessionPartnerParameters snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.resetSessionPartnerParameters()
```

```{code-block} java
Adjust.resetSessionPartnerParameters();
```

```{code-block} javascript
Adjust.resetSessionPartnerParameters());
```

:::

% Snippet end

:::::

% Class method end

% Class method trackAdRevenue

::::{function} trackAdRevenue(adRevenue)
:noindex:

Record the details of an AdjustAdRevenue object

```{code-block} java
:name: android-trackAdRevenue-invocation

public static void trackAdRevenue(AdjustAdRevenue adRevenue)
```

:param adRevenue: The ad revenue object containing the revenue details
:type adRevenue: [AdjustAdRevenue object](/android/reference/AdjustAdRevenue.md)

% trackAdRevenue snippet

:::{tab-set-code}

```{code-block} kotlin
val adjustAdRevenue = AdjustAdRevenue(AdjustConfig.AD_REVENUE_APPLOVIN_MAX)
Adjust.trackAdRevenue(adjustAdRevenue)
```

```{code-block} java
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue(AdjustConfig.AD_REVENUE_APPLOVIN_MAX);
Adjust.trackAdRevenue(adjustAdRevenue)
```

```{code-block} javascript
let adjustAdRevenue = new AdjustAdRevenue(AdjustConfig.AD_REVENUE_APPLOVIN_MAX)
Adjust.trackAdRevenue(adjustAdRevenue);
```

:::

% Snippet end

::::

% Class method end

% Class method trackPlayStoreSubscription

::::{function} trackPlayStoreSubscription(subscription)
:noindex:

Record an Play Store subscription object

```{code-block} java
:name: android-trackPlayStoreSubscription-invocation

public static void trackPlayStoreSubscription(final AdjustPlayStoreSubscription subscription)
```

:param subscription: The ad revenue object containing the revenue details
:type subscription: [trackPlayStoreSubscription object](/android/reference/AdjustPlayStoreSubscription.md)

% trackPlayStoreSubscription snippet

:::{tab-set-code}

```{code-block} kotlin
val subscription = AdjustPlayStoreSubscription(
   price,
   currency,
   sku,
   orderId,
   signature,
   purchaseToken)
subscription.setPurchaseTime(purchaseTime)

Adjust.trackPlayStoreSubscription(subscription)
```

```{code-block} java
AdjustPlayStoreSubscription subscription = new AdjustPlayStoreSubscription(
   price,
   currency,
   sku,
   orderId,
   signature,
   purchaseToken);
subscription.setPurchaseTime(purchaseTime);

Adjust.trackPlayStoreSubscription(subscription);
```

:::

% Snippet end

::::

% Class method getAttribution

::::{function} getAttribution
:noindex:

Fetches attribution data from the device

```{code-block} java
:name: android-getAttribution-invocation

public static AdjustAttribution getAttribution()
```

:returns: An attribution object containing attribution data associated with the device
:rtype: [`AdjustAttribution` object](/android/reference/AdjustAttribution.md)

% getAttribution snippet

:::{tab-set-code}

```{code-block} kotlin
val attribution = Adjust.getAttribution()
```

```{code-block} java
AdjustAttribution attribution = Adjust.getAttribution();
```

```{code-block} javascript
let attribution = Adjust.getAttribution();
```

:::

% Snippet end

::::
