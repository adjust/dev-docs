---
:orphan: true
:nosearch: true
---

% appTrackingAuthorizationStatus

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let authorizationStatus = Adjust.appTrackingAuthorizationStatus();
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
int authorizationStatus = [Adjust appTrackingAuthorizationStatus];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var authorizationStatus = Adjust.appTrackingAuthorizationStatus();
```
:::
::::

% methodEnd

% checkForNewAttStatus

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.checkForNewAttStatus();
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust checkForNewAttStatus];
```
:::
::::

% methodEnd

% gdprForgetMe

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.gdprForgetMe();
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust gdprForgetMe];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.gdprForgetMe();
```
:::
::::

% methodEnd

% isEnabled

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.isEnabled();
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust isEnabled];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.isEnabled();
```
::::

% methodEnd

% requestTrackingAuthorizationWithCompletionHandler

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.requestTrackingAuthorization() { status in
   switch status {
   case 0:
      // ATTrackingManagerAuthorizationStatusNotDetermined case
      break
   case 1:
      // ATTrackingManagerAuthorizationStatusRestricted case
      break
   case 2:
      // ATTrackingManagerAuthorizationStatusDenied case
      break
   case 3:
      // ATTrackingManagerAuthorizationStatusAuthorized case
      break
   default:
      break
   }
}
```

:::

:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust requestTrackingAuthorizationWithCompletionHandler:^(NSUInteger status) {
   switch (status) {
      case 0:
         // ATTrackingManagerAuthorizationStatusNotDetermined case
         break;
      case 1:
         // ATTrackingManagerAuthorizationStatusRestricted case
         break;
      case 2:
         // ATTrackingManagerAuthorizationStatusDenied case
         break;
      case 3:
         // ATTrackingManagerAuthorizationStatusAuthorized case
         break;
   }
}];
```

:::
::::

% methodEnd

% setDeviceToken

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:emphasize-lines: 2

func application(_ app: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    Adjust.deviceToken = deviceToken
}
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:emphasize-lines: 2

- (void)application:(UIApplication *)app didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    [Adjust setDeviceToken:deviceToken];
}
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} js
Adjust.setDeviceToken(deviceToken);
```
:::
::::

% methodEnd

% setEnabled

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.setEnabled(false);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust setEnabled:NO];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.setEnabled(false);
```
:::
::::

% methodEnd

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.setEnabled(false);
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust setEnabled:NO];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.setEnabled(false);
```
:::
::::

% trackThirdPartySharing true

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(true)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:@YES];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustThirdPartySharing = new AdjustThirdPartySharing(true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

% trackThirdPartySharing false

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(false)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:@NO];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustThirdPartySharing = new AdjustThirdPartySharing(false);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd

% trackThirdPartySharing addGranularOption

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(nil)
adjustThirdPartySharing.addGranularOption("PartnerA", key: "foo", value: "bar")
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:nil];
[adjustThirdPartySharing addGranularOption:@"PartnerA" key:@"foo" value:@"bar"];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
var adjustThirdPartySharing = new AdjustThirdPartySharing(null);
adjustThirdPartySharing.addGranularOption('PartnerA', 'foo', 'bar');
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::
::::

% methodEnd
