# Glossary of terms

```{glossary}
Branded Link domain
   The domain to which deep link information is added.

   Example: `example.go.link`

App ID prefix
   Your team ID, contained at the beginning of your Apple app ID

   Example: `ABC12345`

Release Bundle ID
   Your app's unique identifier. 

   Example: `com.example.app`

Debug Bundle ID
   The bundle ID of your debug app. Only required if this is different from your release bundle ID and you need to test deep linking before release.

Release Custom URL Scheme
   A custom URL that opens resources in your app. This is required for linking from other applications on the device, such as Telegram, Twitter, and YouTube, or from push notifications.

   Example: `exampleApp://`

Debug Custom URL Scheme
   Required if your debug Custom URL scheme is different from your release Custom URL scheme and you need to test deep linking before release.

Link resolution domain(s)
   Required for deep linking via email, SMS, QR codes, and platforms that shorten links
   
   Example: `email.example.com`.
```
