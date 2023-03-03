# ADJThirdPartySharing class

Use this class to communicate a user's third party sharing preferences. Send this information to Adjust's servers using the [`trackThirdPartySharing` method](#ios-trackthirdpartysharing-invocation).

% Class method initWithIsEnabledNumberBool

::::{function} initWithIsEnabledNumberBool (isEnabledNumberBool)
:noindex:

Creates a third party sharing object initialized with a **nullable boolean** value

{#ios-initwithisenablednumberbool-invocation}
```objective-c
- (nullable id)initWithIsEnabledNumberBool:(nullable NSNumber *)isEnabledNumberBool;
```

:param isEnabledNumberBool: A nullable boolean value. Use `true`, `false`, or `nil`
:type isEnabledNumberBool: NSNumber

% initWithIsEnabledNumberBool true snippet

:::{tab-set-code}

```swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(true)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```

```objective-c
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:@YES];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```

```javascript
var adjustThirdPartySharing = new AdjustThirdPartySharing(true);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::

% Snippet end

% initWithIsEnabledNumberBool false snippet

:::{tab-set-code}

```swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(false)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```

```objective-c
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:@NO];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```

```javascript
var adjustThirdPartySharing = new AdjustThirdPartySharing(false);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::

% Snippet end

::::

% Class method end

% Class method addGranularOption

:::::{function} addGranularOption (partnerName, key, value)
:noindex:

Adds additional key-value pairs of information to share with third parties. You can add multiple parameters by calling this method multiple times.

{#ios-addgranularoption-invocation}
```objective-c
- (void)addGranularOption:(nonnull NSString *)partnerName
                     key:(nonnull NSString *)key
                     value:(nonnull NSString *)value;
```

:param partnerName: The name of the partner you want to share information with
:type partnerName: NSString
:param key: The data key
:type key: NSString
:param value: The data value
:type value: NSString

% addGranularOption snippet

:::{tab-set-code}

```swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(nil)
adjustThirdPartySharing.addGranularOption("PartnerA", key: "foo", value: "bar")
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```

```objective-c
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:nil];
[adjustThirdPartySharing addGranularOption:@"PartnerA" key:@"foo" value:@"bar"];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```

```javascript
var adjustThirdPartySharing = new AdjustThirdPartySharing(null);
adjustThirdPartySharing.addGranularOption('PartnerA', 'foo', 'bar');
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::

% Snippet end

You can use this method to toggle Facebook data processing options.

% addGranularOption Facebook snippet

:::{tab-set-code}

```swift
let tps = ADJThirdPartySharing.initWithIsEnabledNumberBool(nil)
tps.addGranularOption("facebook", key: "data_processing_options_country", value: "1")
tps.addGranularOption("facebook", key: "data_processing_options_state", value: "1000")
Adjust.trackThirdPartySharing(tps)
```

```objective-c
ADJThirdPartySharing *tps = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:@YES];
[tps addGranularOption:@"facebook" key:@"data_processing_options_country" value:@"1"];
[tps addGranularOption:@"facebook" key:@"data_processing_options_state" value:@"1000"];
[Adjust trackThirdPartySharing:tps];
```

```javascript
var tps = new AdjustThirdPartySharing(null);
tps.addGranularOption('facebook', 'data_processing_options_country', '1');
tps.addGranularOption('facebook', 'data_processing_options_state', '1000');
Adjust.trackThirdPartySharing(tps);
```
:::

::::{dropdown} Options
:::{list-table}
:header-rows: 1

* - Parameter	
   - Description
* - `partner_name`
   - Use `facebook` to toggle LDU.
* - `data_processing_options_country`
   - The user is located in.
      * `0`: Request that Facebook use geolocation.
      * `1`: United States of America.
* - `data_processing_options_state`
   - Notifies Facebook which state the user is located in.
      * `0`: Request that Facebook use geolocation.
      * `1000`: California.

:::
::::

% Snippet end

:::::

% Class method end

% Class method addPartnerSharingSetting

:::::{function} addPartnerSharingSetting (partnerName, key, value)
:noindex:

:::{versionadded} v4.32.0
Adds additional key-value pairs of settings to share with third parties. You can add multiple settings by calling this method multiple times.
:::

{#ios-addpartnersharingsetting-invocation}
```objective-c
- (void)addPartnerSharingSetting:(nonnull NSString *)partnerName
                           key:(nonnull NSString *)key
                           value:(BOOL)value;
```

:param partnerName: The name of the partner whose settings you want to update
:type partnerName: NSString
:param key: The setting you want to update
:type key: NSString
:param value: Whether the setting is enabled
:type value: BOOL

% addPartnerSharingSetting snippet

:::{tab-set-code}

```swift
let adjustThirdPartySharing = ADJThirdPartySharing.initWithIsEnabledNumberBool(nil)
adjustThirdPartySharing.addPartnerSharingSetting("PartnerA", key: "foo", value: false)
Adjust.trackThirdPartySharing(adjustThirdPartySharing)
```

```objective-c
ADJThirdPartySharing *adjustThirdPartySharing = [[ADJThirdPartySharing alloc] initWithIsEnabledNumberBool:nil];
[adjustThirdPartySharing addPartnerSharingSetting:@"PartnerA" key:@"foo" value:@NO];
[Adjust trackThirdPartySharing:adjustThirdPartySharing];
```

```javascript
var adjustThirdPartySharing = new AdjustThirdPartySharing(null);
adjustThirdPartySharing.addPartnerSharingSetting('PartnerA', 'foo', false);
Adjust.trackThirdPartySharing(adjustThirdPartySharing);
```
:::

::::{dropdown} Available partners
:::{list-table}
:header-rows: 1

* - Partner name
   - String value
* - AppleAds
   - `apple_ads`
* - Facebook
   - `facebook`
* - GoogleAds
   - `adwords`
* - GoogleMarketingPlatform
   - `google_marketing_platform`
* - Snapchat
   - `snapchat`
* - Tencent
   - `tencent`
* - TikTokSan
   - `tiktok_san`
* - Twitter
   - `twitter`
* - YahooGemini
   - `yahoo_gemini`
* - YahooJapanSearch
   - `yahoo_japan_search`
:::
::::

% Snippet end

:::::

% Class method end
