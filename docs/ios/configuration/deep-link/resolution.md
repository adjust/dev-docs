# Link resolution

You need to set up link resolution for deep linking via email, SMS, QR codes, and platforms that shorten links. If you don't set up link resolution for such cases, a  redirect from a universal link sends all users to the App Store, even if they have your app installed. With link resolution, the redirect to the universal link occurs within your app, and existing users aren't sent to the App Store.

:::{note}
Check with your marketing team to see if link resolution is needed for the app. You can then set up link resolution domains for different use cases.
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

This is how link resolution works:

1. When an existing user clicks a redirect link, iOS opens your app.
2. Your app passes the redirect URL to the [`resolveLinkWithUrl` link resolution method](#ios-resolvelinkwithurl-invocation) in the Adjust SDK.
3. The link resolution method in the Adjust SDK compares the domain in the redirect URL against the link resolution domain that the developer has set in the Adjust SDK, and one of the following happens:
   * Domains don't match - The method forwards the deep link URL as is.
   * Domains match - The method resolves the link and returns the resulting deep link.
   
   The Adjust SDK will follow up to ten redirects when attempting to resolve a URL. If there are more than ten redirects, the SDK will return the tenth redirect URL.

4. Your app receives the returned URL and opens deep link content and displays it to the user. Your app also calls the [`appWillOpenUrl` method](#ios-appwillopenurl-invocation) in the Adjust SDK with the returned URL. This sends the resolved URL to Adjust's servers to be recorded.

:::{note}
If a user who doesn't have your app installed clicks on the redirect URL, iOS handles this as a normal web URL and redirects the user to the App Store. In this case, link resolution isn't applicable.
:::

## Use cases

Link resolution is applicable for the following cases:

* [Email marketing](#email-marketing)
* [Platforms that shorten URLs](#url-shorteners)

### Email marketing

When email marketers run campaigns, the email marketing platform typically wraps all links in the emails with its own click tracking redirect URL. This lets email marketers view click-through statistics in the email marketing platform. However, if the emails contain universal links, the redirect URL causes iOS to not resolve the universal links. 

Email marketing platform
   : The software that email marketers use to build their campaigns. This includes functionality such as email templates and audience targeting. 

      __Examples:__ Braze, Iterable, SendGrid

Email service provider (ESP)
   : The underlying infrastructure that sends emails, and manages deliverability to {abbr}`ISP (Internet service provider` emails servers. 
   
      __Examples:__ SendGrid, SparkPost.

Email partner
   : A general term that refers to either an email marketing platform or an email service provider (ESP). 
An email partner can be an email marketing platform or an ESP, or both. 

      __Example:__ SendGrid is an email marketing platform and an ESP.

      An email marketing may use another partner as an ESP. 

      __Example:__ Braze and Iterable both use SendGrid and SparkPost as their ESPs.

#### Setup

1. Create a domain or a subdomain on your domain dedicated to email tracking. If you already have a domain or subdomain for email tracking, you should create a new one so that you can complete this implementation without disrupting existing campaigns. After you complete and test this implementation, you can switch this implementation to your existing email redirect domain.

   __Example:__ `email.example.com`

2. Add the email redirect domain to your {guilabel}`Associated Domains` configuration in {program}`Xcode`.

   __Example:__ `applinks:email.example.com`

3. Set up your universal links.
4. Ensure that you've added your email redirect domain to `resolveUrlSuffixArray` of the [`resolveLinkWithUrl` link resolution method](#ios-resolvelinkwithurl-invocation).
5. Configure your email redirect domain as a custom tracking domain with your email marketing platform / ESP.
6. Set up a content delivery network (CDN), such as Amazon CloudFront, CloudFlare, or Fastly, to handle incoming requests to your email redirect domain. On the CDN, you need to set up the following:
   1. **SSL certificate**: iOS requires that universal links use only HTTPS. So, an SSL certificate is required for your email redirect domain.
   2. **AASA (Apple-App-Site-Association) file**: Depending on your email partner, you need to either host your own AASA file or upload the AASA file to the email partner system. For information on hosting an AASA file, refer to your email partner's documentation.

   You can download the AASA file for your universal link hosted on this path - `https://example.go.link/.well-known/apple-app-site-association`. Replace the domain with your universal link domain. You can copy the Adjust Universal Link AASA file and use it for your email redirect domain AASA file. If your email partner requires you to host your own AASA file, your CDN needs to serve it from the corresponding path on your email redirect domain - `https://email.example.com/.well-known/apple-app-site-association`

   3. Point all requests to the email redirect domain (except for the AASA file, if applicable) to the email partner’s redirect server.

   __Example:__ `redirect.example.net`

7. Configure the DNS for your email redirect domain to point to your CDN.

:::{seealso}
For partner-specific instructions that correspond to the above instructions, refer to the [ESP integrations section](https://help.adjust.com/en/marketer/esp-integrations) in the Help Center.
:::

##### Support for email partners

To use link resolution, your email partner needs to let you to set up the redirection domain (or subdomain) as a universal link domain. If this is the case, you can point their redirection service to your own custom domain.

__Examples:__

* Braze: Depending on which ESP Braze has assigned, set up your redirect domain with SendGrid or SparkPost, and point your own custom domain to it. You can then configure your custom domain as a universal link domain.
* Iterable: Iterable provides the URL redirection service that supports custom domains.
* Mailchimp: Link resolution isn't available because Mailchimp doesn't allow you to configure their redirect domain as a universal link.

:::{dropdown} Example
1. The email marketer builds their email using a template. This template contains a link or an image with a universal link.

   __Example:__ `https://example.go.link/summer-clothes?promo=beach&adj_t=abc123`

2. The email marketer sends the email to the recipients. Before the email is sent, the email marketing platform wraps the universal link with its own redirect URL.

   __Example:__ `https://email.example.com/2wuTnQvU`

3. A user, who has your app installed, clicks on the redirect URL in the email.
4. iOS opens your app and passes the redirect URL to your app.
5. Your app passes the redirect URL to the link resolution method in the Adjust SDK.
6. The Adjust SDK resolves the redirect URL from within your app.

   So, `https://email.example.com/2wuTnQvU` redirects to `https://example.go.link/summer-clothes?promo=beach&adj_t=abc123`.

7. The link resolution method returns the resolved URL.
8. Your app handles the returned URL. In this case, your app would display the `summer-clothes` page in your app with a `beach promo` modal to the user.
9. Your app calls the [`appWillOpenUrl` method](#ios-appwillopenurl-invocation) in the Adjust SDK with the returned URL.
:::

### URL shorteners

When marketers run certain types of campaigns, sometimes a short URL is required. For example, SMS has a 160 character limit. Sometimes, customers want to shorten a link and share it on team communication platforms, such as Slack. However, if the short URL redirects to a universal link, iOS doesn't resolve the universal link.

#### Setup

1. Create a domain or subdomain on your domain dedicated as a URL shortener.
   If you already have a domain or subdomain as a URL shortener, you should create a new one so that you can complete this implementation without disrupting existing campaigns. After you complete and test this implementation, you can switch this implementation to your existing URL shortener domain.

2. Add the URL shortener domain to your {guilabel}`Associated Domains` configuration in {program}`Xcode`.

   __Example:__ `applinks:short.example.com`

3. Set up your universal links.
4. Ensure that you have added your email redirect domain to `resolveUrlSuffixArray` of the [`resolveLinkWithUrl` link resolution method](#ios-resolvelinkwithurl-invocation).
5. Set up a URL shortener service that supports universal links. Adjust doesn't provide any URL shortening services.

   __Example:__ [`short.io`](http://short.io)

6. Configure your URL shortener domain as a custom domain on the URL shortener service. You need to configure the DNS for your URL shortener domain to point to the URL shortener service’s servers. ([Reference documentation to add a custom domain in short.io](https://help.short.io/en/articles/4065811-how-can-i-add-a-domain)).
7. Configure universal links on the URL shortener service. ([Reference documentation to configure universal links in short.io](https://help.short.io/en/articles/4065870-how-to-set-up-deep-links-for-ios)).

:::{dropdown} Example

1. The marketer creates a universal link.

   __Example:__ `https://example.go.link/summer-clothes?promo=beach&adj_t=abc123`

2. The marketer uses a URL shortener service to generate a shortened link.

   __Example:__ `https://short.example.com/2wuTnQvU`

3. The marketer uses the shortened link in his campaigns, such as an SMS campaign.
4. A user, who has your app installed, clicks on the short URL in the SMS message.
5. iOS opens your app and passes the short URL to your app.
6. Your app passes the short URL to the link resolution method in the Adjust SDK.
7. The Adjust SDK resolves the short URL from within your app.

   So, `https://short.example.com/2wuTnQvU` redirects to `https://example.go.link/summer-clothes?promo=beach&adj_t=abc123`.

8. The link resolution method returns the resolved URL.
9. Your app handles the returned URL. In this case, your app would display the `summer-clothes` page in your app with a `beach promo` modal to the user.
10. Your app calls the [`appWillOpenUrl` method](#ios-appwillopenurl-invocation) in the Adjust SDK with the returned URL.
:::
