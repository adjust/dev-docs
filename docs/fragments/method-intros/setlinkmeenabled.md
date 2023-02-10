---
orphan: true
nosearch: true
---

The Adjust SDK lets you copy deep link information from the device pasteboard. When combined with Adjust’s LinkMe solution, this feature enables deferred deep linking on devices running iOS 15 and above.

:::{important}
The Adjust SDK checks the pasteboard when a user opens the app for the first time. The device displays a dialog asking if the user wants to allow the app to read the pasteboard.
:::

When a user clicks on a LinkMe URL they have the option to copy the link information to their system pasteboard. You can use the Adjust SDK to read the system pasteboard for deep link information. If deep link information is present, the SDK forwards the user to the correct page in your app.

To enable pasteboard checking in your app, pass a true value to the {code}`setLinkMeEnabled` method on your config object:
