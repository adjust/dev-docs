# SKAdNetwork and ATT methods

Use these methods to manage your [SKAdNetwork](hc:skadnetwork) and [App Tracking Transparency](hc:app-tracking-transparency-att-framework) logic.

% Class method requestTrackingAuthorizationWithCompletionHandler

::::{function} requestTrackingAuthorizationWithCompletionHandler (completion)
:noindex:

Receives the user's authorization status from the ATT prompt and passes it to a completion function

{#unity-requesttrackingauthorizationwithcompletionhandler-invocation}
```c#
public static void requestTrackingAuthorizationWithCompletionHandler(Action<int> statusCallback, string sceneName = "Adjust")
```

:param completion: Completion handler to which the status is delivered
:type completion: Action

% requestTrackingAuthorizationWithCompletionHandler snippet

:::{tab-set-code}

```c#
Adjust.requestTrackingAuthorizationWithCompletionHandler((status) =>
{
    switch (status)
    {
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

{#unity-getapptrackingauthorizationstatus-invocation}
```c#
public static int getAppTrackingAuthorizationStatus()
```

:returns: The user's authorization status
:rtype: Integer

% getAppTrackingAuthorizationStatus snippet

:::{tab-set-code}

```c#
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

{#unity-checkfornewattstatus-invocation}
```c#
public static void checkForNewAttStatus()
```

% checkForNewAttStatus snippet

:::{tab-set-code}

```c#
Adjust.checkForNewAttStatus();
```

:::

% Snippet end

::::

% Class method end

% Class method updateConversionValue

::::{function} updateConversionValue(conversionValue)
:noindex:

Updates the [conversion value](https://help.adjust.com/en/new/article/conversion-hub)

{#unity-updateconversionvalue-invocation}
```c#
public static void updateConversionValue(int conversionValue)
```

:param conversionValue: The new conversion value
:type conversionValue: Integer

% updateConversionValue snippet

:::{tab-set-code}

```c#
Adjust.updateConversionValue(6);
```

:::

% Snippet end

::::

% Class method end
