# Recording methods

% classMethod trackEvent

:::{function} trackEvent (event)
:noindex:

Record event information using an `ADJEvent` object and an [Adjust event token](https://help.adjust.com/en/article/basic-event-setup#create-an-event-token).

```{code-block} objc
:name: ios-trackEvent-invocation

+ (void) trackEvent: (nullable ADJEvent *) event
```

:param event: An event object containing information you want to record
:type event: [*ADJEvent*](/ios/reference/ADJEvent.md)

```{include} /ios/fragments/Adjust.md
:start-after: trackEvent
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addSessionCallbackParameter

:::{function} addSessionCallbackParameter (key, value)
:noindex:

Adds callback parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

```{code-block} objc
:name: ios-addSessionCallbackParameter-invocation

+ (void) addSessionCallbackParameter: (nonnull NSString *) key
                               value: (nonnull NSString *) value
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

```{include} /ios/fragments/Adjust.md
:start-after: addSessionCallbackParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod removeSessionCallbackParameter

:::{function} removeSessionCallbackParameter (key)
:noindex:

Removes a callback parameter

```{code-block} objc
:name: ios-removeSessionCallbackParameter-invocation

+ (void) removeSessionCallbackParameter: (nonnull NSString *) key
```

:param key: The data key
:type key: NSString

```{include} /ios/fragments/Adjust.md
:start-after: removeSessionCallbackParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod resetSessionCallbackParameters

:::{function} resetSessionCallbackParameters
:noindex:

Removes all callback parameters

```{code-block} objc
:name: ios-resetSessionCallbackParameters-invocation

+ (void) resetSessionCallbackParameters
```

```{include} /ios/fragments/Adjust.md
:start-after: resetSessionCallbackParameters
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addSessionPartnerParameter

:::{function} addSessionPartnerParameter (key, value)
:noindex:

Adds partner parameters to send with each session recorded by the Adjust SDK. You can add extra parameters by calling on this method multiple times.

```{code-block} objc
:name: ios-addSessionPartnerParameter-invocation

+ (void) addSessionPartnerParameter: (nonnull NSString *) key
                               value: (nonnull NSString *) value
```

:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

```{include} /ios/fragments/Adjust.md
:start-after: addSessionPartnerParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod removeSessionPartnerParameter

:::{function} removeSessionPartnerParameter (key)
:noindex:

Removes a partner parameter

```{code-block} objc
:name: ios-removeSessionPartnerParameter-invocation

+ (void) removeSessionPartnerParameter: (nonnull NSString *) key
```

:param key: The data key
:type key: NSString

```{include} /ios/fragments/Adjust.md
:start-after: removeSessionPartnerParameter
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod resetSessionPartnerParameters

:::{function} resetSessionPartnerParameters
:noindex:

Resets all partner parameters

```{code-block} objc
:name: ios-resetSessionPartnerParameters-invocation

+ (void) resetSessionPartnerParameters
```

```{include} /ios/fragments/Adjust.md
:start-after: resetSessionPartnerParameters
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod appWillOpenUrl

:::{function} appWillOpenUrl (url)
:noindex:

Instructs the Adjust SDK to search for attribution information in a URL. If the SDK finds valid information, it sends this information to Adjust's servers.

```{code-block} objc
:name: ios-appwillopenurl-invocation

+ (void) appWillOpenUrl: (nonnull NSURL *) url
```

:param url: A URL containing deep link information
:type url: NSURL

```{include} /ios/fragments/Adjust.md
:start-after: appWillOpenUrl
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod attribution

:::{function} attribution
:noindex:

Fetches attribution data from the device

```{code-block} objc
:name: ios-attribution-invocation

+ (ADJAttribution *) attribution
```

:returns: An attribution object containing attribution data associated with the device
:rtype: [`ADJAttribution` object](/ios/reference/ADJAttribution.md)

```{include} /ios/fragments/Adjust.md
:start-after: attribution
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod trackSubscription

:::{function} trackSubscription(subscription)
:noindex:

Record the details of an ADJSubscription object

```{code-block} objc
:name: ios-trackSubscription-invocation

+ (void)trackSubscription:(nonnull ADJSubscription *)subscription;
```

:param subscription: The subscription object containing the purchase details
:type subscription: [ADJSubscription object](/ios/reference/ADJSubscription.md)

```{include} /ios/fragments/Adjust.md
:start-after: trackSubscription
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod trackAdRevenue

:::{function} trackAdRevenue(adRevenue)
:noindex:

Record the details of an ADJAdRevenue object

```{code-block} objc
:name: ios-trackAdRevenue-invocation

+ (void)trackAdRevenue:(nonnull ADJAdRevenue *)adRevenue;
```

:param adRevenue: The ad revenue object containing the revenue details
:type adRevenue: [ADJAdRevenue object](/ios/reference/ADJAdRevenue.md)

```{include} /ios/fragments/Adjust.md
:start-after: trackAdRevenue
:end-before: methodEnd
```

:::

% classMethodEnd
