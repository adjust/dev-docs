# Glossary of terms

```{glossary}
App ID Prefix
   A 10 character identifier found at the beginning of your App ID. You can find your App ID prefix in the [Apple developer portal](https://developer.apple.com/account/ios/identifier/bundle).

   Example: `ABC1234567`

Release Bundle ID
   Your app's unique identifier. 

   Example: `com.example.app`

Debug Bundle ID
   The bundle ID of your debug build. Only required if this is different from your release bundle ID and you need to test deep linking before release.

Release Custom URL Scheme
   A custom URL that opens resources in your app. This is required for linking from certain applications on the device, such as Telegram, Twitter, and YouTube, or from push notifications.

   Example: `exampleApp://`

Debug Custom URL Scheme
   Required if your debug Custom URL scheme is different from your release Custom URL scheme and you need to test deep linking before release.

Link resolution domain(s)
   Required for deep linking via email, SMS, QR codes, and platforms that shorten links.
   
   Example: `email.example.com`.
```
