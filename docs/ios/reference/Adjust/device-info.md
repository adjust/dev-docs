# Device information methods

Use these methods to retrieve device information.

% Class method adid

::::{function} adid
:noindex:

Returns the {abbr}`ADID (Adjust Device ID)` associated with the device

{#ios-adid-invocation}
```objective-c
+ (NSString *) adid
```

:returns: The device ADID
:rtype: NSString

% adid snippet

:::{tab-set-code}

```swift
let adid = Adjust.adid()
```

```objective-c
NSString *adid = [Adjust adid];
```

```javascript
var adid = Adjust.getAdid();
```

:::

% Snippet end

::::

% Class method end

% Class method idfa

::::{function} idfa
:noindex:

Returns the {abbr}`IDFA (ID For Advertisers)` associated with the device

:::{note}
The [`allowIdfaReading` property](#ios-setallowidfareading-invocation) must be `true` for the Adjust SDK to have access to the device IDFA
:::

{#ios-idfa-invocation}
```objective-c
+ (NSString *) idfa
```

:returns: The device IDFA
:rtype: NSString

% idfa snippet

:::{tab-set-code}

```swift
let idfa = Adjust.idfa()
```

```objective-c
NSString *idfa = [Adjust idfa];
```

```javascript
Adjust.getIdfa(function(idfa) {
   // …
});
```

:::

% Snippet end

::::

% Class method end
