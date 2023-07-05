# SKAdNetwork and ATT methods

Use these methods to manage your [SKAdNetwork](https://help.adjust.com/en/article/skadnetwork) and [App Tracking Transparency](https://help.adjust.com/en/article/app-tracking-transparency-att-framework) logic.

% Class method requestTrackingAuthorizationWithCompletionHandler

::::{function} requestTrackingAuthorizationWithCompletionHandler (completion)
:noindex:

Receives the user's authorization status from the ATT prompt

{#flutter-requesttrackingauthorizationwithcompletionhandler-invocation}

```dart
static Future<num> requestTrackingAuthorizationWithCompletionHandler() async
```

% requestTrackingAuthorizationWithCompletionHandler snippet

:::{tab-set-code}

```dart
if (Platform.isIOS) {
   Adjust.requestTrackingAuthorizationWithCompletionHandler().then((status) {
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
   });
}
```

:::

% Snippet end

::::

% Class method end

% Class method getAppTrackingAuthorizationStatus

::::{function} getAppTrackingAuthorizationStatus
:noindex:

Retrieves the user's current authorization status

{#flutter-getapptrackingauthorizationstatus-invocation}

```dart
static Future<int> getAppTrackingAuthorizationStatus() async
```

:returns: The user's authorization status
:rtype: Integer

% getAppTrackingAuthorizationStatus snippet

:::{tab-set-code}

```dart
Adjust.getAppTrackingAuthorizationStatus();
```

:::

% Snippet end

::::

% Class method end

% Class method checkForNewAttStatus

::::{function} checkForNewAttStatus
:noindex:

Prompts the SDK to check the current state of `att_status`

{#flutter-checkfornewattstatus-invocation}

```dart
static void checkForNewAttStatus()
```

% checkForNewAttStatus snippet

:::{tab-set-code}

```dart
Adjust.checkForNewAttStatus();
```

:::

% Snippet end

::::

% Class method end

% Class method updateConversionValue

::::{function} updateConversionValue(conversionValue)
:noindex:

Updates the [conversion value](https://help.adjust.com/en/suite/article/conversion-hub)

{#flutter-updateconversionvalue-invocation}

```dart
static void updateConversionValue(int conversionValue)
```

:param conversionValue: The new conversion value
:type conversionValue: Integer

% updateConversionValue snippet

:::{tab-set-code}

```dart
Adjust.updateConversionValue(6);
```

:::

% Snippet end

::::

% Class method end
