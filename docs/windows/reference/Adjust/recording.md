# Recording methods

% Class method TrackEvent

::::{function} TrackEvent (event)
:noindex:

Record event information using an `AdjustEvent` object and an [Adjust event token](hc:basic-event-setup#create-an-event-token).

{#windows-trackevent-invocation}
```objective-c
+ (void) trackEvent: (nullable ADJEvent *) event
```

:param event: An event object containing information you want to record
:type event: [*AdjustEvent*](/windows/reference/AdjustEvent.md)

% TrackEvent snippet

:::{tab-set-code}

```c#
var adjustEvent = new AdjustEvent("abc123");
Adjust.TrackEvent(adjustEvent);
```

:::

% Snippet end

::::

% Class method end
