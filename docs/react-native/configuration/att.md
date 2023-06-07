# Set up App Tracking Transparency

:::{note}
The App Tracking Transparency framework is only available on iOS devices with Adjust SDK v4.26.0 or later.
:::

If you want to record the device's ID for Advertisers (IDFA), you must display a prompt to get your user's authorization. To do this, you need to include Apple's [App Tracking Transparency (ATT) framework](https://help.adjust.com/en/article/app-tracking-transparency-att-framework) in your app. The Adjust SDK stores the user's authorization status and sends it to Adjust's servers with each request.

::::{dropdown} Authorization statuses

:::{list-table}
:header-rows: 1

-  -  Status
   -  Code
   -  Description
-  -  `ATTrackingManagerAuthorizationStatusNotDetermined`
   -  `0`
   -  The user hasn't responded to the access prompt yet.
-  -  `ATTrackingManagerAuthorizationStatusRestricted`
   -  `1`
   -  Access to app-related data is blocked at the device level.
-  -  `ATTrackingManagerAuthorizationStatusDenied`
   -  `2`
   -  The user has denied access to app-related data for device tracking.
-  -  `ATTrackingManagerAuthorizationStatusAuthorized`
   -  `3`
   -  The user has approved access to app-related data for device tracking.

:::

:::{note}
You might receive a status code of `-1` if the SDK is unable to retrieve the ATT status.
:::

::::

## App-tracking authorization wrapper

The Adjust SDK contains a wrapper around [Apple's `requestTrackingAuthorizationWithCompletionHandler` method](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/3547037-requesttrackingauthorizationwith). You can use this wrapper if you don't want to customize the ATT prompt.

The callback method triggers when your user responds to the consent dialog. This method sends the user's consent status code to the Adjust server. You can define responses to each status code within the callback function.

You must specify text content for the tracking request dialog. You can add this to your project in two ways:

1. Add your text to the **User Tracking Description** field in the Adjust prefab.
2. Add your text to the `NSUserTrackingUsageDescription` key in your {file}`Info.plist` file.

:::{tip}
The Adjust SDK also records the consent status if you use a custom prompt. If you show your prompt before initialization, the SDK sends the status with the install event. If you show it after initialization, the SDK sends the status to the server as soon as the user updates it.
:::

:::{tab-set-code}

```js
Adjust.requestTrackingAuthorizationWithCompletionHandler(function (status) {
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

::::{dropdown} Example

This example demonstrates how to log a human-readable description of the user's authorization status when they interact with the prompt.

:::{tab-set-code}

```js
Adjust.requestTrackingAuthorizationWithCompletionHandler(function (status) {
   switch (status) {
      case 0:
         console.log("The user has not responded to the access prompt yet.");
         break;
      case 1:
         console.log(
            "Access to app-related data is blocked at the device level."
         );
         break;
      case 2:
         console.log(
            "The user has denied access to app-related data for device tracking."
         );
         break;
      case 3:
         console.log(
            "The user has approved access to app-related data for device tracking."
         );
         break;
   }
});
```

:::

::::

## Get current authorization status

You can retrieve a user's current authorization status at any time. Call the `getAppTrackingAuthorizationStatus` method to return the authorization status code as an integer.

:::{tab-set-code}

```js
Adjust.getAppTrackingAuthorizationStatus();
```

:::

::::{dropdown} Example

This example demonstrates how to collect the user's authorization status and convert it to a `String`. This information is assigned to a variable called `authorizationStatus` and passed as a session partner parameter with the key `"status"`.

:::{tab-set-code}

{emphasize-lines="2"}

```js
var authorizationStatus = String(Adjust.getAppTrackingAuthorizationStatus());
Adjust.addSessionPartnerParameter("status", authorizationStatus);
```

:::

::::

## Check for authorization status changes

If you use a custom ATT prompt, you need to inform the Adjust SDK of changes to the user's authorization status. Call the `checkForNewAttStatus` method to send the authorization status to the Adjust server.

:::{tab-set-code}

```js
Adjust.checkForNewAttStatus();
```

:::
