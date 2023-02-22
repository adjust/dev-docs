# SKAdNetwork and ATT methods

Use these methods to manage your [SKAdNetwork](https://help.adjust.com/en/article/skadnetwork) and [App Tracking Transparency](https://help.adjust.com/en/article/app-tracking-transparency-att-framework) logic.

% Class method requestTrackingAuthorizationWithCompletionHandler

:::::{function} requestTrackingAuthorizationWithCompletionHandler (completion)
:noindex:

Receives the user's authorization status from the ATT prompt and passes it to a completion function

```{code-block} cs
:name: unity-requestTrackingAuthorizationWithCompletionHandler-invocation

public static void requestTrackingAuthorizationWithCompletionHandler(Action<int> statusCallback, string sceneName = "Adjust")
```

:param completion: Completion handler to which the status is delivered
:type completion: Action

% requestTrackingAuthorizationWithCompletionHandler snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
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
::::

% Snippet end

:::::

% Class method end

% Class method getAppTrackingAuthorizationStatus

:::::{function} getAppTrackingAuthorizationStatus
:noindex:

Retrieves the user's current authorization status

```{code-block} cs
:name: unity-getAppTrackingAuthorizationStatus-invocation

public static int getAppTrackingAuthorizationStatus()
```

:returns: The user's authorization status
:rtype: Integer

% getAppTrackingAuthorizationStatus snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.getAppTrackingAuthorizationStatus();
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method checkForNewAttStatus

:::::{function} checkForNewAttStatus
:noindex:

Prompts the SDK to check the current state of `att_status`

```{code-block} cs
:name: unity-checkForNewAttStatus-invocation

public static void checkForNewAttStatus()
```

% checkForNewAttStatus snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.checkForNewAttStatus();
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method updateConversionValue

:::::{function} updateConversionValue(conversionValue)
:noindex:

Updates the [conversion value](https://help.adjust.com/en/new/article/conversion-hub)

```{code-block} cs
:name: unity-updateConversionValue-invocation

public static void updateConversionValue(int conversionValue)
```

:param conversionValue: The new conversion value
:type conversionValue: Integer

% updateConversionValue snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.updateConversionValue(6);
```
:::
::::

% Snippet end

:::::

% Class method end
