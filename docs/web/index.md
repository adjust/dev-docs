# Get started

The Adjust Web SDK enables you to record attribution, events, and more in your web app. This guide shows you how to integrate the Adjust SDK with your app.

## 1. Add the SDK to your project

To get started, you need to add the SDK to your web app. The Adjust SDK works in both CommonJS and {abbr}`AMD (Asynchronous Module Definition)` environments and can be accessed through a global `Adjust` namespace when loaded through a {abbr}`CDN (Content Delivery Network)`. 

### Using a CDN

When loading the SDK through a CDN, you should use a minified version in your production build. You can specify a version by adding it to the CDN target like this: `https://cdn.adjust.com/adjust-5.6.0.min.js`. You can get the latest version by targeting the `adjust-latest` package like this: `https://cdn.adjust.com/adjust-latest.min.js`. This package updates automatically so you don't need to change the target file.

:::{tip}
The SDK files are cached to enable fast service. This cache updates every 30 minutes. If you want to force an update to the latest version, target a specific version in your header.
:::

To load the SDK through a CDN, add the following snippet between your web app's `<head>` tags:

```html
<script type="application/javascript">
!function(t,e,a,r,n,s,d,l,o,i,u){t.Adjust=t.Adjust||{},t.Adjust_q=t.Adjust_q||[];for(var c=0;c<l.length;c++)o(t.Adjust,t.Adjust_q,l[c]);i=e.createElement(a),u=e.getElementsByTagName(a)[0],i.async=!0,i.src="https://cdn.adjust.com/adjust-latest.min.js",i.onload=function(){for(var e=0;e<t.Adjust_q.length;e++)t.Adjust[t.Adjust_q[e][0]].apply(t.Adjust,t.Adjust_q[e][1]);t.Adjust_q=[]},u.parentNode.insertBefore(i,u)}(window,document,"script",0,0,0,0,["initSdk","getAttribution","getWebUUID","setReferrer","trackEvent","addGlobalCallbackParameters","addGlobalPartnerParameters","removeGlobalCallbackParameter","removeGlobalPartnerParameter","clearGlobalCallbackParameters","clearGlobalPartnerParameters","switchToOfflineMode","switchBackToOnlineMode","stop","restart","gdprForgetMe","disableThirdPartySharing","initSmartBanner","showSmartBanner","hideSmartBanner"],(function(t,e,a){t[a]=function(){e.push([a,arguments])}}));
</script>
```

The Adjust SDK loads on each page and initates once per page load.

#### Subresource Integrity

If you want to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) checks to mitigate against {abbr}`XSS (Cross-Site Scripting)` attacks, you can validate the package before running it by using the following call:

```html
<script type="application/javascript">
!function(t,e,a,r,n,s,o,d,l,i,u){t.Adjust=t.Adjust||{},t.Adjust_q=t.Adjust_q||[];for(var c=0;c<d.length;c++)l(t.Adjust,t.Adjust_q,d[c]);i=e.createElement(a),u=e.getElementsByTagName(a)[0],i.async=!0,i.src="https://cdn.adjust.com/adjust-latest.min.js",i.crossOrigin="anonymous",i.integrity=s,i.onload=function(){for(var e=0;e<t.Adjust_q.length;e++)t.Adjust[t.Adjust_q[e][0]].apply(t.Adjust,t.Adjust_q[e][1]);t.Adjust_q=[]},u.parentNode.insertBefore(i,u)}(window,document,"script",0,0,"sha384-BqbTn9xyk5DPznti1ZP8ksxKiOFhKufLBFWm5eNMCnZABFSG1eqQfcu5dsiZJHu5",0,["initSdk","getAttribution","getWebUUID","setReferrer","trackEvent","addGlobalCallbackParameters","addGlobalPartnerParameters","removeGlobalCallbackParameter","removeGlobalPartnerParameter","clearGlobalCallbackParameters","clearGlobalPartnerParameters","switchToOfflineMode","switchBackToOnlineMode","stop","restart","gdprForgetMe","disableThirdPartySharing","initSmartBanner","showSmartBanner","hideSmartBanner"],(function(t,e,a){t[a]=function(){e.push([a,arguments])}}));
</script>
```

### Using npm

The Adjust SDK is also available on [npm](https://www.npmjs.com/package/@adjustcom/adjust-web-sdk). To add the package to your project, use your preferred package manager:

::::{tab-set}
:::{tab-item} npm

```console
$ npm install @adjustcom/adjust-web-sdk --save
```

:::
:::{tab-item} yarn

```console
$ yarn add @adjustcom/adjust-web-sdk
```

:::
:::{tab-item} pnpm

```console
$ pnpm add @adjustcom/adjust-web-sdk
```

:::
::::

## 2. Initialize the SDK

Once you've installed the SDK, you need to initialize it. To do this, call the [`initSdk` method](#web-initsdk-invocation). This method takes a number of arguments that customize how the SDK works in your app.

You must add the following arguments to your `initSdk` call to initialize the SDK:

`appToken`
   : Your [Adjust app token](https://help.adjust.com/en/article/app-settings#view-your-app-token).

`environment`
   : The environment your app is running in. Set this to `sandbox` to test your app locally.

:::{include} /web/reference/config.md
:start-after: initSdk snippet
:end-before: Snippet end
:::

To further customize your Adjust SDK setup, check out the guides in the [configuration features section](/web/configuration/index.md).
