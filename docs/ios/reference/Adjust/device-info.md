# Device information methods

Use these methods to retrieve device information.

% Class method adid

:::::{function} adid
:noindex:

Returns the {abbr}`ADID (Adjust Device ID)` associated with the device

```{code-block} objc
:name: ios-adid-invocation

+ (NSString *) adid
```

:returns: The device ADID
:rtype: NSString

% adid snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adid = Adjust.adid()
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
NSString *adid = [Adjust adid];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adid = Adjust.getAdid();
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method idfa

:::::{function} idfa
:noindex:

Returns the {abbr}`IDFA (ID For Advertisers)` associated with the device

:::{note}
The [`allowIdfaReading` property](ios-setAllowIdfaReading-invocation) must be `true` for the Adjust SDK to have access to the device IDFA
:::

```{code-block} objc
:name: ios-idfa-invocation

+ (NSString *) idfa
```

:returns: The device IDFA
:rtype: NSString

% idfa snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let idfa = Adjust.idfa()
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
NSString *idfa = [Adjust idfa];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.getIdfa(function(idfa) {
   // …
});
```
:::
::::

% Snippet end

:::::

% Class method end
