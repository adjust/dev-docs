---
orphan: true
nosearch: true
---

% checkForNewAttStatus

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.checkForNewAttStatus();
```
:::
::::

% end

% getAppTrackingAuthorizationStatus

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.getAppTrackingAuthorizationStatus();
```
:::
::::

% end

% requestTrackingAuthorizationWithCompletionHandler

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

% end
