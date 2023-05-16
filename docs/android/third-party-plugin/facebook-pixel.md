# Facebook pixel integration

A [Facebook pixel](https://www.facebook.com/business/help/952192354843755?id=1205376682832142) is a web-only analytics tool from Facebook. As of v4.34 of the Facebook SDK, you can track pixel events in an app's webview. You can also convert Facebook Pixel events into Facebook App events. To do this, use Hybrid Mobile App Events.

It's also now possible to use a Facebook pixel with the Adjust SDK, without integrating the Facebook SDK.

## Example app

- [Android example app](https://github.com/adjust/android_sdk/tree/master/Adjust/example-app-fbpixel)

## Facebook integration

### Facebook App ID

To start working with Facebook pixels, follow the steps below:

As described in Facebook's [Android SDK guide](https://developers.facebook.com/docs/android/) you will need to add your Facebook App ID to the app by doing the following:

1. Open your {file}`strings.xml` file. Example path: `/app/src/main/res/values/strings.xml`.
2. Add a new string with the name `facebook_app_id`. Add your Facebook App ID as the value.
3. Open {file}`AndroidManifest.xml`.
4. Add a uses-permission element to the manifest:

```
<uses-permission android:name="android.permission.INTERNET"/>
```

5. Add a meta-data element to the application element:

```
<application android:label="@string/app_name" ...>
  ...
  <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
  ...
</application>
```

### Facebook pixel configuration

Follow Facebook's guide on how to integrate the Facebook pixel. The Javascript code should look something like this:

```
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
    ...
  fbq('init', <YOUR_PIXEL_ID>);
  fbq('track', 'PageView');
</script>
...
<!-- End Facebook Pixel Code -->
```

Next, update your Facebook pixel code. You can find the instructions in the [Hybrid Mobile App Events guide](https://developers.facebook.com/docs/app-events/hybrid-app-events) under __Update Your Pixel__.

```
fbq('init', <YOUR_PIXEL_ID>);
fbq('set', 'mobileBridge', <YOUR_PIXEL_ID>, <YOUR_FB_APP_ID>);
```

:::{important}
You need to call `init` and then set immediately afterward. The snippet provided by Facebook contains a `track` method. You can use this method to track a page view event right after you call the `init` method. To track the view event, you need to call `set` between `init` and `track`.
:::

## Adjust SDK integration

### Augment the web view

Follow the integration guide for Android web view apps. There is a step where you register and get the Adjust bridge default instance. The code looks like this:

```
AdjustBridge.registerAndGetInstance(getApplication(), webview);
```

When you reach this step, save the returned instance as something like `adjustBridgeInstance`. You can then use this to register the Facebook interface like so:

```
adjustBridgeInstance.registerFacebookSDKJSInterface();
```

### Event name registration

The Adjust web bridge SDK translates Facebook pixel events into Adjust events.

To use this feature, you need to map Facebook pixels to specific Adjust events. You can also configure a default Adjust event token. To use a default token, you need to add the token before starting the Adjust SDK and tracking any pixel event. This includes the copy-pasted `fbq('track', 'PageView');` event from the Facebook pixel configuration.

To map events, call the `addFbPixelMapping` method on your config instance. Use the Facebook event name and Adjust event token as parameters. You need to call this before you initialize the Adjust SDK.

```
adjustConfig.addFbPixelMapping('fb_mobile_search', adjustEventTokenForSearch);
adjustConfig.addFbPixelMapping('fb_mobile_purchase', adjustEventTokenForPurchase);
```

:::{note}
The above example would match when tracking `fbq('track', 'Search')` and `fbq('track', 'Purchase')`. Adjust doesn't have access to the full map between Facebook SDK and Javascript events.
:::

:::{dropdown} Known pixel events
| Pixel event name     | Facebook app event name          |
|----------------------|----------------------------------|
| ViewContent          | fb_mobile_content_view           |
| Search               | fb_mobile_search                 |
| AddToCart            | fb_mobile_add_to_cart            |
| AddToWishlist        | fb_mobile_add_to_wishlistt       |
| InitiateCheckout     | fb_mobile_initiated_checkout     |
| AddPaymentInfo       | fb_mobile_add_payment_info       |
| Purchase             | fb_mobile_purchase               |
| CompleteRegistration | fb_mobile_complete_registration  |

:::

The Adjust SDK will log warnings if it can't find a default event token for certain events.

```
There is not a default event token configured or a mapping found for event named: 'fb_mobile_search'. It won't be tracked as an adjust event.
```

You can also set a default Adjust event if you don't have mapping configured. To do this, call `adjustConfig.setFbPixelDefaultEventToken(defaultEventToken);` before initializing the Adjust SDK.