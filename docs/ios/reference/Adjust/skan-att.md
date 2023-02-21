# SKAdNetwork and ATT methods

Use these methods to manage your [SKAdNetwork](https://help.adjust.com/en/article/skadnetwork) and [App Tracking Transparency](https://help.adjust.com/en/article/app-tracking-transparency-att-framework) logic.

% Class method requestTrackingAuthorizationWithCompletionHandler

:::::{function} requestTrackingAuthorizationWithCompletionHandler (completion)
:noindex:

:::{versionadded} v4.23.0
Receives the user's authorization status from the ATT prompt and passes it to a completion function
:::

```{code-block} objc
:name: ios-requestTrackingAuthorizationWithCompletionHandler-invocation

+ (void)requestTrackingAuthorizationWithCompletionHandler:(void (^_Nullable)(NSUInteger status))completion;
```

:param completion: Completion handler to which the status is delivered
:type completion: Method

% requestTrackingAuthorizationWithCompletionHandler snippet

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

% Snippet end

:::::

% Class method end

% Class method appTrackingAuthorizationStatus

:::::{function} appTrackingAuthorizationStatus
:noindex:

:::{versionadded} v4.25.0
Retrieves the user's current authorization status
:::

```{code-block} objc
:name: ios-appTrackingAuthorizationStatus-invocation

- (int) appTrackingAuthorizationStatus
```

:returns: The user's authorization status
:rtype: NSInteger

% appTrackingAuthorizationStatus snippet

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

% Snippet end

:::::

% Class method end

% Class method checkForNewAttStatus

:::::{function} checkForNewAttStatus
:noindex:

:::{versionadded} v4.30.0
Prompts the SDK to check the current state of `att_status`
:::

```{code-block} objc
:name: ios-checkForNewAttStatus-invocation

+ (void)checkForNewAttStatus;
```

% checkForNewAttStatus snippet

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

% Snippet end

:::::

% Class method end

% Class method updateConversionValue

:::::{function} updateConversionValue(conversionValue)
:noindex:

:::{versionadded} v4.26.0
Updates the [conversion value](https://help.adjust.com/en/new/article/conversion-hub)
:::

```{code-block} objc
:name: ios-updateConversionValue-invocation

- (void)updateConversionValue:(NSInteger)conversionValue;
```

:param conversionValue: The new conversion value
:type conversionValue: NSInteger

% updateConversionValue snippet

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
Adjust.updateConversionValue(value)
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
[Adjust updateConversionValue:value];
```
:::
::::

% Snippet end

:::::

% Class method end
