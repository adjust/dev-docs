---
orphan: true
nosearch: true
---

The Adjust SDK contains a wrapper around [Apple's `requestTrackingAuthorizationWithCompletionHandler` method](https://developer.apple.com/documentation/apptrackingtransparency/attrackingmanager/3547037-requesttrackingauthorizationwith). You can use this wrapper if you don't want to customize the ATT prompt.

The callback method triggers when your user responds to the consent dialog. This method sends the user's consent status code to Adjust's servers. You can define responses to each status code within the callback function.
