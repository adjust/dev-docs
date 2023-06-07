# Campaign endpoint
Use the Campaign endpoint to create tracker URLs for your application.

## Endpoint

```text
https://settings.adjust.com/api/campaign
```

### POST request

Use this endpoint to create new tracker URLs for your app. If you are working with partners that require setup, you need to include this information.

:::{list-table} Parameters
:header-rows: 1

* - Name
   - Data type
   - In
   - Description
* - `store_id`* 
   - String
   - Body	
   - 
      * Bundle ID for Android.
      * Store ID for iOS.
* - `platform`*
   - String
   - Body
   - `android` or `ios`.
* - `channel`*
   - String
   - Body
   - See [Ad Networks](#ad-networks) below.
* - `campaign_name`
   - String
   - Body
   - Deprecated. Left in for compatibility with existing APIs.
* - `channel_setup`
   - Object
   - Body
   - Partner-specific parameters. See the [Channel setup article](channel-setup.md) for more information.
* - `android_signature_hash`
   - String
   - Body
   - SHA1 hash, generated from the keystore file to build the SDK signature.
:::

::::{dropdown} Ad networks
:name: ad-networks

:::{hlist}
* `apple_search_ads`
* `applovin`
* `chartboost`
* `crossinstall`
* `crosspromotion`
* `digitalturbine`
* `facebook`
* `gameanalytics`
* `google`
* `ironsource`
* `snapchat`
* `tapjoy`
* `unityads`
* `vungle`
* `inmobi`
:::

::::

```{code-block} json
:caption: Success response

{
   "click_url": "String",
   "impression_url": "String"
}
```

:::{list-table} Response parameters
:header-rows: 1

* - Name
   - Data type
   - Description
* - `click_url`*
   - String
   - App-specific and channel-specific URL to be used as Click URL of the new Campaign.
* - `impression_url`*
   - String
   - App-specific and channel-specific URL to be used as Impression URL of the new Campaign.
:::

## Example

```console
$ curl \
--header "AdjustAuthorization: Token <adjust api token>" \
--header "Content-Type: application/json" \
--data '{"store_id": "test.bundle.app", "platform": "ios", "channel": "unityads"}' \
-X POST https://settings.adjust.com/api/campaign
```

```json
{
   "click_url": "https://app.adjust.com/1lwd85",
   "impression_url": "https://view.adjust.com/impression/1lwd85"
}
```
