# Recording methods

% Class method trackEvent

::::{function} trackEvent (event)
:noindex:

Record event information using an `AdjustEvent` object and an [Adjust event token](hc:/basic-event-setup#create-an-event-token).

{#android-trackevent-invocation}
```java
public static void trackEvent(AdjustEvent event)
```

:param event: An event object containing information you want to record
:type event: [*AdjustEvent*](/android/reference/AdjustEvent.md)

% trackEvent snippet

:::{tab-set-code}

```kotlin
val adjustEvent = AdjustEvent("abc123")
Adjust.trackEvent(adjustEvent)
```

```java
AdjustEvent adjustEvent = new AdjustEvent("abc123");
Adjust.trackEvent(adjustEvent);
```

```javascript
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

{#android-addsessioncallbackparameter-invocation}
```java
public static void addSessionCallbackParameter(String key, String value)
```

:param key: The data key
:type key: String
:param value: The data value
:type value: String

% addSessionCallbackParameter snippet

:::{tab-set-code}

```kotlin
Adjust.addSessionCallbackParameter("foo", "bar")
```

```java
Adjust.addSessionCallbackParameter("foo", "bar");
```

```javascript
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

{#android-removesessioncallbackparameter-invocation}
```java
public static void removeSessionCallbackParameter(String key)
```

:param key: The data key
:type key: String

% removeSessionCallbackParameter snippet

:::{tab-set-code}

```kotlin
Adjust.removeSessionCallbackParameter("foo")
```

```java
Adjust.removeSessionCallbackParameter("foo");
```

```javascript
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

{#android-resetsessioncallbackparameters-invocation}
```java
public static void resetSessionCallbackParameters()
```

% resetSessionCallbackParameters snippet

:::{tab-set-code}

```kotlin
Adjust.resetSessionCallbackParameters()
```

```java
Adjust.resetSessionCallbackParameters();
```

```javascript
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

{#android-addsessionpartnerparameter-invocation}
```java
public static void addSessionPartnerParameter(String key, String value)
```

:param key: The data key
:type key: String
:param value: The data value
:type value: String

% addSessionPartnerParameter snippet

:::{tab-set-code}

```kotlin
Adjust.addSessionPartnerParameter("foo", "bar")
```

```java
Adjust.addSessionPartnerParameter("foo", "bar");
```

```javascript
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

{#android-removesessionpartnerparameter-invocation}
```java
public static void removeSessionPartnerParameter(String key)
```

:param key: The data key
:type key: String

% removeSessionPartnerParameter snippet

:::{tab-set-code}

```kotlin
Adjust.removeSessionPartnerParameter("foo")
```

```java
Adjust.removeSessionPartnerParameter("foo");
```

```javascript
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

{#android-resetsessionpartnerparameters-invocation}
```java
public static void resetSessionPartnerParameters()
```

% resetSessionPartnerParameters snippet

:::{tab-set-code}

```kotlin
Adjust.resetSessionPartnerParameters()
```

```java
Adjust.resetSessionPartnerParameters();
```

```javascript
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

{#android-trackadrevenue-invocation}
```java
public static void trackAdRevenue(AdjustAdRevenue adRevenue)
```

:param adRevenue: The ad revenue object containing the revenue details
:type adRevenue: [AdjustAdRevenue object](/android/reference/AdjustAdRevenue.md)

% trackAdRevenue snippet

:::{tab-set-code}

```kotlin
val adjustAdRevenue = AdjustAdRevenue(AdjustConfig.AD_REVENUE_APPLOVIN_MAX)
Adjust.trackAdRevenue(adjustAdRevenue)
```

```java
AdjustAdRevenue adjustAdRevenue = new AdjustAdRevenue(AdjustConfig.AD_REVENUE_APPLOVIN_MAX);
Adjust.trackAdRevenue(adjustAdRevenue)
```

```javascript
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

{#android-trackplaystoresubscription-invocation}
```java
public static void trackPlayStoreSubscription(final AdjustPlayStoreSubscription subscription)
```

:param subscription: The ad revenue object containing the revenue details
:type subscription: [trackPlayStoreSubscription object](/android/reference/AdjustPlayStoreSubscription.md)

% trackPlayStoreSubscription snippet

:::{tab-set-code}

```kotlin
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

```java
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

{#android-getattribution-invocation}
```java
public static AdjustAttribution getAttribution()
```

:returns: An attribution object containing attribution data associated with the device
:rtype: [`AdjustAttribution` object](/android/reference/AdjustAttribution.md)

% getAttribution snippet

:::{tab-set-code}

```kotlin
val attribution = Adjust.getAttribution()
```

```java
AdjustAttribution attribution = Adjust.getAttribution();
```

```javascript
let attribution = Adjust.getAttribution();
```

:::

% Snippet end

::::
