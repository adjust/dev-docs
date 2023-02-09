---
orphan: true
nosearch: true
---

```{list-table}
:header-rows: 1

* - Status
   - Code
   - Description
* - `ATTrackingManagerAuthorizationStatusNotDetermined`
   - `0`
   - The user has not responded to the access prompt yet
* - `ATTrackingManagerAuthorizationStatusRestricted`
   - `1`
   - Access to app-related data is blocked at the device level
* - `ATTrackingManagerAuthorizationStatusDenied`
   - `2`
   - The user has denied access to app-related data for device tracking
* - `ATTrackingManagerAuthorizationStatusAuthorized`
   - `3`
   - The user has approved access to app-related data for device tracking
```

:::{note}
You might receive a status code of `-1` if the SDK is unable to retrieve the {abbr}`ATT (App Tracking Transparency)` status.
:::
