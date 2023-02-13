# Link resolution

You need to set up link resolution for deep linking via email, SMS, QR codes, and platforms that shorten links. If you don't set up link resolution for such cases, a redirect from a universal link sends all users to the App Store, even if they had your app installed. With link resolution, the redirect to the universal link occurs within your app, and existing users aren't sent to the App Store.

:::{note}
Check with your marketing team to see if link resolution is needed for the app. Your marketing team is responsible for setting up the link resolution domains for different use cases.
:::

## How it works

Link resolution is only applicable when users that have your app installed click on a redirect URL. You need to configure the domain in the redirect URL as a universal link domain in your app.

:::{mermaid}
:caption: The link resolution flow

flowchart TD
   click("fa:fa-envelope User clicks on custom domain link\n(<code>https://email.example.com</code>)") --> installed{"App installed?"}
   installed -->|Yes| universal("iOS opens app with custom domain as Universal Link")
   universal --> branded("Link Resolution redirects to Adjust Branded Link\n(<code>https://example.go.link</code>)")
   branded --> deeplink1("App sends user to deep link")
   branded --> sendlink("App calls <code>appWillOpenUrl</code> in SDK\n to send deep link to Adjust's servers")
   installed -->|No| redirect("Redirect to Adjust Branded Link\n(<code>https://example.go.link</code>)")
   redirect --> appstore("fab:fa-app-store-ios Redirect to App Store")
   appstore --> open("User installs and opens the app")
   open --> passlink("Adjust's servers pass deferred Branded Link\n (<code>https://example.go.link</code>) to SDK")
   passlink --> deeplink2("App sends user to deep link")
:::
