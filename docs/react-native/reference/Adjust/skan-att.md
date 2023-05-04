# SKAdNetwork and ATT methods

Use these methods to manage your [SKAdNetwork](hc:skadnetwork) and [App Tracking Transparency](hc:app-tracking-transparency-att-framework) logic.

## App Tracking Transparency methods

These methods help you manage your App Tracking Transparency (ATT) implementation. Each method handles a user's ATT authorization status as an **integer** value.

:::{list-table}
:header-rows: 1

* - Status
   - Code
   - Description
* - `ATTrackingManagerAuthorizationStatusNotDetermined`
   - `0`
   - The user hasn't responded to the access prompt yet.
* - `ATTrackingManagerAuthorizationStatusRestricted`
   - `1`
   - Access to app-related data is blocked at the device level.
* - `ATTrackingManagerAuthorizationStatusDenied`
   - `2`
   - The user has denied access to app-related data for device tracking.
* - `ATTrackingManagerAuthorizationStatusAuthorized`
   - `3`
   - The user has approved access to app-related data for device tracking.

:::

% Class method requestTrackingAuthorizationWithCompletionHandler

::::{function} requestTrackingAuthorizationWithCompletionHandler (completion)
:noindex:

Receives the user's authorization status from the ATT prompt and passes it to a completion function

{#react-native-requesttrackingauthorizationwithcompletionhandler-invocation}
```ts
requestTrackingAuthorizationWithCompletionHandler: (handler: (status: number) => void) => void
```

:param completion: Completion handler to which the status is delivered
:type completion: Action

% requestTrackingAuthorizationWithCompletionHandler snippet

:::{tab-set-code}

```js
Adjust.requestTrackingAuthorizationWithCompletionHandler(function(status) {
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
```

:::

% Snippet end

::::

% Class method end

% Class method getAppTrackingAuthorizationStatus

::::{function} getAppTrackingAuthorizationStatus
:noindex:

Retrieves the user's current authorization status

{#react-native-getapptrackingauthorizationstatus-invocation}
```ts
getAppTrackingAuthorizationStatus: (callback: (authorizationStatus: number) => void) => void
```

:returns: The user's authorization status
:rtype: Integer

% getAppTrackingAuthorizationStatus snippet

:::{tab-set-code}

```js
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

{#react-native-checkfornewattstatus-invocation}
```ts
checkForNewAttStatus: () => void
```

% checkForNewAttStatus snippet

:::{tab-set-code}

```js
Adjust.checkForNewAttStatus();
```

:::

% Snippet end

::::

% Class method end

## SKAdNetwork methods

% Class method updateConversionValue

::::{function} updateConversionValue(conversionValue)
:noindex:

Updates the [conversion value](https://help.adjust.com/en/new/article/conversion-hub). Accepts **integer** values between **0** and *63*.

{#react-native-updateconversionvalue-invocation}
```ts
updateConversionValue: (conversionValue: number) => void
```

:param conversionValue: The new conversion value
:type conversionValue: Integer

% updateConversionValue snippet

:::{tab-set-code}

```js
Adjust.updateConversionValue(6);
```

:::

% Snippet end

::::

% Class method end
