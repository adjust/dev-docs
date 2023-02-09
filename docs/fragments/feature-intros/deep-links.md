---
:orphaned:
---

You can create deep links to take users to specific pages in your app. The Adjust SDK uses different logic depending on if the user already has your app installed on their device:

- **Direct deep linking** occurs if the user already has your app installed. The link takes the user to the page specified in the link.
- **Deferred deep linking** occurs if the user does not have your app installed. The link takes the user to a storefront to install your app first. After the user installs the app, it opens to the page specified in the link.

The SDK can read deep link data after a user opens your app from a tracker URL.
