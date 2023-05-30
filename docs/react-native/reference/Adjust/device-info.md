# Device information methods

Use these methods to retrieve device information.

% Class method getAdid

::::{function} getAdid
:noindex:

Returns the {abbr}`ADID (Adjust Device ID)` associated with the device.

:::{important}
You can access the ADID only after the Adjust server tracks an install.
:::

{#react-native-getadid-invocation}

```ts
getAdid: (callback: (adid: string) => void) => void
```

:returns: The device ADID
:rtype: String

% getAdid snippet

:::{tab-set-code}

```js
Adjust.getAdid((adid) => {
   console.log("Adid = " + adid);
});
```

:::

% Snippet end

::::

% Class method end

% Class method getIdfa

::::{function} getIdfa
:noindex:

Returns the {abbr}`IDFA (ID For Advertisers)` associated with the device.

{#react-native-getidfa-invocation}

```ts
getIdfa: (callback: (idfa: string) => void) => void
```

:returns: The device IDFA
:rtype: String

% getIdfa snippet

:::{tab-set-code}

```js
Adjust.getIdfa((idfa) => {
   console.log("IDFA = " + idfa);
});
```

:::

% Snippet end

::::

% Class method end

% Class method getGoogleAdId

::::{function} getGoogleAdId(onDeviceIdsRead)
:noindex:

Returns the {abbr}`GPS ADID (Google Play Services Advertising ID)` associated with the device. Must be called in a background thread.

{#react-native-getgoogleadid-invocation}

```ts
getGoogleAdId: (callback: (adid: string) => void) => void
```

:param onDeviceIdsRead: The function called when the SDK receives the ID from the device
:type onDeviceIdsRead: Action\<string\>

% getGoogleAdId snippet

:::{tab-set-code}

```js
Adjust.getGoogleAdId((googleAdId) => {
   console.log("Google Ad Id = " + googleAdId);
});
```

:::

% Snippet end

::::

% Class method end

% Class method getAmazonAdId

::::{function} getAmazonAdId
:noindex:

Returns the {abbr}`Amazon Ad ID (Amazon Advertising ID)` associated with the device.

{#react-native-getamazonadid-invocation}

```ts
getAmazonAdId: (callback: (adid: string) => void) => void
```

:returns: The device Amazon Ad ID
:rtype: String

% getAmazonAdId snippet

:::{tab-set-code}

```js
Adjust.getAmazonAdId((amazonAdId) => {
   console.log("Amazon Ad Id = " + amazonAdId);
});
```

:::

% Snippet end

::::

% Class method end

% Class method sdkVersion

::::{function} sdkVersion
:noindex:

Returns the version number of the Adjust SDK.

{#react-native-sdkversion-invocation}

```ts
getSdkVersion: (callback: (sdkVersion: string) => void) => void
```

:returns: The Adjust SDK version
:rtype: String

% sdkVersion snippet

:::{tab-set-code}

```js
Adjust.getSdkVersion(function (sdkVersion) {
   console.log("Adjust SDK version: " + sdkVersion);
});
```

:::

% Snippet end
