---
:orphan: true
:nosearch: true
---

% appTrackingAuthorizationStatus

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
let authorizationStatus = Adjust.appTrackingAuthorizationStatus()
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

% end

% checkForNewAttStatus

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
Adjust.checkForNewAttStatus()
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[Adjust checkForNewAttStatus];
```
:::
::::

% end

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

% end
