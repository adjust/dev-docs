---
orphan: true
nosearch: true
---

% addCallbackParameter

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let event = ADJEvent(eventToken: "abc123")
event?.addCallbackParameter("key", value: "value")
event?.addCallbackParameter("foo", value: "bar")
Adjust.trackEvent(event)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJEvent *event = [ADJEvent eventWithEventToken:@"abc123"];
[event addCallbackParameter:@"key" value:@"value"];
[event addCallbackParameter:@"foo" value:@"bar"];
[Adjust trackEvent:event];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustEvent = new AdjustEvent(eventToken);
adjustEvent.addCallbackParameter('key', 'value');
adjustEvent.addCallbackParameter('foo', 'bar');
Adjust.trackEvent(adjustEvent);
```
:::
::::

% methodEnd

% addPartnerParameter

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let event = ADJEvent(eventToken: "abc123")
event?.addPartnerParameter("key", value: "value")
event?.addPartnerParameter("foo", value: "bar")
Adjust.trackEvent(event)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJEvent *event = [ADJEvent eventWithEventToken:@"abc123"];
[event addPartnerParameter:@"key" value:@"value"];
[event addPartnerParameter:@"foo" value:@"bar"];
[Adjust trackEvent:event];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustEvent = new AdjustEvent(eventToken);
adjustEvent.addPartnerParameter('key', 'value');
adjustEvent.addPartnerParameter('foo', 'bar');
Adjust.trackEvent(adjustEvent);
```
:::
::::

% methodEnd

% setCallbackId

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let event = ADJEvent(eventToken: "abc123")
event?.setCallbackId("Your-Custom-ID")
Adjust.trackEvent(event)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJEvent *event = [ADJEvent eventWithEventToken:@"abc123"];
[event setCallbackId:@"Your-Custom-ID"];
[Adjust trackEvent:event];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustEvent = new AdjustEvent('abc123')
adjustEvent.setCallbackId('Your-Custom-ID')
Adjust.trackEvent(adjustEvent)
```
:::
::::

% methodEnd

% setRevenue

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let event = ADJEvent(eventToken: "abc123")
event?.setRevenue(0.01, currency: "EUR")
Adjust.trackEvent(event)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJEvent *event = [ADJEvent eventWithEventToken:@"abc123"];
[event setRevenue:0.01 currency:@"EUR"];
[Adjust trackEvent:event];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustEvent = new AdjustEvent(eventToken);
adjustEvent.setRevenue(0.01, 'EUR');
Adjust.trackEvent(adjustEvent);
```
:::
::::

% methodEnd

% setTransactionId

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let event = ADJEvent(eventToken: "abc123")
event?.setTransactionId(eventIdentifier)
Adjust.trackEvent(event)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJEvent *event = [ADJEvent eventWithEventToken:@"abc123"];
[event setTransactionId:eventIdentifier];
[Adjust trackEvent:event];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustEvent = new AdjustEvent(eventToken);
adjustEvent.setTransactionId(eventIdentifier);
Adjust.trackEvent(adjustEvent);
```
:::
::::

% methodEnd
