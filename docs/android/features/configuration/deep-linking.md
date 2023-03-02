# Set up deep linking

You can create deep links to take users to specific pages in your app. The Adjust SDK uses different logic depending on if the user already has your app installed on their device:

Direct deep linking
   : Occurs if the user already has your app installed. The link takes the user to the page specified in the link

Deferred deep linking
   : Occurs if the user doesn't have your app installed. The link takes the user to a storefront to install your app first. After the user installs the app, it opens to the page specified in the link.

The SDK can read deep link data after a user opens your app from a link.

## Configure your scheme name

If a user has your app installed, it opens when they interact with a link containing deep link information. The Adjust SDK contains tools to parse deep link information for use throughout your app. To set up deep linking, you need to choose a unique **scheme name**.

You can launch a specific activity when a user interacts with a deep link. To do this:

1. Assign your **scheme name** to an activity in your {file}`AndroidManifest.xml` file.
2. Add an `intent-filter` node to the activity definition.
3. Add an `android:scheme` data node containing your **scheme name** inside the `intent-filter` node.

### Example

This example demonstrates how to set up an activity called `MainActivity` to open with the **scheme name** `adjustExample`.

```{code-block} xml
<activity
    android:name=".MainActivity"
    android:configChanges="orientation|keyboardHidden"
    android:label="@string/app_name"
    android:screenOrientation="portrait">

    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>

    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="adjustExample" />
    </intent-filter>
</activity>
```

If a user clicks link with a `deep_link` parameter containing your **scheme name**, this activity fires.

```
https://app.adjust.com/abc123?deep_link=adjustExample%3A%2F%2F
```

### Access deep link information

You can specify the delivery location of the `deep_link` parameter content. To do this, set the `android:launchMode` property on your activity in your {file}`AndroidManifest.xml` file.

:::{seealso}
See the [`android:launchMode` documentation](https://developer.android.com/guide/topics/manifest/activity-element.html) for more information.
:::

The Adjust SDK delivers deep link information within your activity's intent object using either the `onCreate` or `onNewIntent` method. You can access deep link content once the app is launched and one of these methods has fired. You can then access this information in other parts of your app.

Extract deep link information by calling the `getData()` method within the `onCreate` or `onNewIntent` method.

:::{tab-set-code}

```{code-block} kotlin
override fun onCreate(savedInstanceState: Bundle?) {
   super.onCreate(savedInstanceState)
   setContentView(R.layout.activity_main)

   val intent = intent
   val data = intent.data
   // data.toString() -> This is your deep_link parameter value.
}
```

```{code-block} java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    Intent intent = getIntent();
    Uri data = intent.getData();
    // data.toString() -> This is your deep_link parameter value.
}
```

:::

:::{tab-set-code}

```{code-block} kotlin
override fun onNewIntent(intent: Intent?) {
   super.onNewIntent(intent)
   val data = intent?.data
   // data.toString() -> This is your deep_link parameter value.
}
```

```{code-block} java
@Override
protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);

    Uri data = intent.getData();
    // data.toString() -> This is your deep_link parameter value.
}
```

:::

## Deferred deep linking

The Adjust SDK opens deferred deep links by default. No additional setup is required. If you want to disable this behavior, you need to set up a deferred deep link callback using the [`setOnDeeplinkResponseListener` method](android-setOnDeeplinkResponseListener-invocation).

### Set up a deferred deep link callback

You can configure the Adjust SDK to call a delegate function when it receives a deferred deep link. This delegate function receives the deep link as a **string** argument.

:::{include} /android/reference/AdjustConfig/setup.md
:start-after: setOnDeeplinkResponseListener snippet
:end-before: Snippet end
:::

::::{dropdown} Example

This example demonstrates how to prevent the SDK from launching an activity by returning a `false` value in your callback function.

:::{tab-set-code}

```{code-block} kotlin
config.setOnDeeplinkResponseListener { deeplink ->
   false
}
```

```{code-block} java
config.setOnDeeplinkResponseListener(new OnDeeplinkResponseListener() {
   @Override
   public boolean launchReceivedDeeplink(Uri deeplink) {
         return false;
   }
});
```

```{code-block} javascript
let adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setOpenDeferredDeeplink(false);

Adjust.start(adjustConfig);
```

:::
::::

## Reattribution via deep links

Adjust enables you to run re-engagement campaigns with usage of deep links. For more information, see the [guide to appending attribution data to a deep link](https://help.adjust.com/en/article/deeplink-generator#manage-your-deeplinks).

To reattribute your user, you need to call the [`appWillOpenUrl` method](android-appWillOpenUrl-invocation) when the app receives deep link content. The Adjust SDK then looks for new attribution data within the deep link. If the SDK finds new information, it forwards the information to Adjust's servers for reattribution.

:::{include} /android/reference/Adjust/config.md
:start-after: appWillOpenUrl snippet
:end-before: Snippet end
:::

## Link resolution

Some {abbr}`ESPs (Email Service Providers)` use their own custom tracking domains for marketing campaigns. If you need to track clicks through a custom domain, you need to set the SDK up to resolve the link. To do this, call the `resolveLink` method of the `AdjustLinkResolution` class. The Adjust SDK will then follow the custom link and resolve it when opening the deep link. This ensures that you record the interaction with your email tracking campaign.

The `resolveLinkWithUrl` method takes the following parameters:

* `url`: the deep link that opened the application.
* `resolveUrlSuffixArray`: the custom domains of the configured campaigns that need to be resolved.
* `adjustLinkResolutionCallback`: the callback that contains the final URL.

The method checks the deep link against the domains in the `resolveUrlSuffixArray`. If it doesn't find any matches, it forwards the deep link URL as is. If it does find a match, it attempts to resolve the link and return the resulting deep link. It then stores this in the callback parameter.

:::{note}
The Adjust SDK follows up to 10 redirects when attempting to resolve a URL. It returns the latest URL it has followed as the callback URL. If there are more than 10 redirects, the SDK returns the **tenth** redirect URL.
:::

You can use the returned deep link to reattribute your user. To do this, pass the deep link to the `Adjust.appWillOpenUrl` method.

:::{tab-set-code}

```{code-block} kotlin
AdjustLinkResolution.resolveLink(url, 
                                 arrayOf("example.com"),
                                 object : AdjustLinkResolution.AdjustLinkResolutionCallback {
                                     override fun resolvedLinkCallback(resolvedLink: Uri) {
                                         Adjust.appWillOpenUrl(resolvedLink, applicationContext)
                                     }
                                 })
```

```{code-block} java
AdjustLinkResolution.resolveLink(url, 
                                 new String[]{"example.com"},
                                 new AdjustLinkResolution.AdjustLinkResolutionCallback() {
    @Override
    public void resolvedLinkCallback(Uri resolvedLink) {
        Adjust.appWillOpenUrl(resolvedLink, getApplicationContext());
    }
});
```

:::
