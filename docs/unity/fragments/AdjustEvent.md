---
orphan: true
nosearch: true
---

% setRevenue

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustEvent adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.setRevenue(0.01, "EUR");
//...
Adjust.trackEvent(adjustEvent);
```
:::
::::

% methodEnd

% setTransactionId

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustEvent adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.setTransactionId("transactionId");
//...
Adjust.trackEvent(adjustEvent);
```
:::
::::

% methodEnd

% addCallbackParameter

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustEvent adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.addCallbackParameter("key", "value");
//...
Adjust.trackEvent(adjustEvent);
```
:::
::::

% methodEnd

% addPartnerParameter

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustEvent adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.addPartnerParameter("key", "value");
//...
Adjust.trackEvent(adjustEvent);
```
:::
::::

% methodEnd

% setCallbackId

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
:emphasize-lines: 3

AdjustEvent adjustEvent = new AdjustEvent("abc123");
//...
adjustEvent.setCallbackId("{your_callback_id}");
//...
Adjust.trackEvent(adjustEvent);
```
:::
::::

% methodEnd
