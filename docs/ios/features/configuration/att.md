# Set up App Tracking Transparency

```{versionadded} v4.28.0
If you want to record the device's {abbr}`IDFA (ID for Advertisers)`, you must display a prompt to get your user's authorization. To do this, you need to include Apple's {abbr}` ATT (App Tracking Transparency)` framework in your app. The Adjust SDK stores the user's authorization status and sends it to Adjust's servers with each request.
```

::::{dropdown} Authorization statuses

```{list-table}
:header-rows: 1

* - Status
   - Code
   - Description
* - `ATTrackingManagerAuthorizationStatusNotDetermined`
   - `0`
   - The user hasn't responded to the access prompt yet
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

::::

## App-tracking authorization wrapper

The Adjust SDK contains a wrapper around [Apple's `requestTrackingAuthorizationWithCompletionHandler` method](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/3547037-requesttrackingauthorizationwith). You can use this wrapper if you don't want to customize the ATT prompt.

The callback method triggers when your user responds to the consent dialog. This method sends the user's consent status code to Adjust's servers. You can define responses to each status code within the callback function.

You must specify text content for the tracking request dialog. To do this, add your text to the `NSUserTrackingUsageDescription` key in your {file}`Info.plist` file.

:::{tip}
The Adjust SDK also records the consent status if you use a custom prompt. If you show your prompt before initialization, the SDK sends the status with the install event. If you show it after initialization, the SDK sends the status to Adjust's servers as soon as the user updates it.
:::

:::{include} /ios/reference/Adjust/skan-att.md
:start-after: requestTrackingAuthorizationWithCompletionHandler snippet
:end-before: Snippet end
:::

## Get current authorization status

You can retrieve a user's current authorization status at any time. Call the [`appTrackingAuthorizationStatus` method](#ios-apptrackingauthorizationstatus-invocation) to return the authorization status code as an **integer**.

:::{include} /ios/reference/Adjust/skan-att.md
:start-after: appTrackingAuthorizationStatus snippet
:end-before: Snippet end
:::

## Check for authorization status changes

If you use a custom ATT prompt, you need to inform the Adjust SDK of changes to the user's authorization status. Call the [`checkForNewAttStatus` method](#ios-checkfornewattstatus-invocation) to send the authorization status to Adjust's servers.

:::{include} /ios/reference/Adjust/skan-att.md
:start-after: checkForNewAttStatus snippet
:end-before: Snippet end
:::
