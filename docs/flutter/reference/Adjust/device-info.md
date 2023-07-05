# Device information methods

Use these methods to retrieve device information.

% Class method getAdid

::::{function} getAdid
:noindex:

Returns the {abbr}`ADID (Adjust Device ID)` associated with the device

{#flutter-getadid-invocation}
```dart
static Future<String?> getAdid() async
```

:returns: The device ADID
:rtype: String

% getAdid snippet

:::{tab-set-code}

```dart
Adjust.getAdid().then((adid) {
  // Use adid string value.
});
```

:::

% Snippet end

::::

% Class method end

% Class method getIdfa

::::{function} getIdfa
:noindex:

Returns the {abbr}`IDFA (ID for Advertisers)` associated with the device

{#flutter-getidfa-invocation}
```dart
static Future<String?> getIdfa() async
```

:returns: The device IDFA
:rtype: String

% getIdfa snippet

:::{tab-set-code}

```dart
Adjust.getIdfa().then((idfa) {
  // Use idfa string value.
});
```

:::

% Snippet end

::::

% Class method end

% Class method getAmazonAdId

::::{function} getAmazonAdId
:noindex:

Returns the {abbr}`Amazon Ad ID (Amazon Advertising ID)` associated with the device

{#flutter-getamazonadid-invocation}
```dart
static Future<String?> getAmazonAdId() async
```

:returns: The device Amazon Ad ID
:rtype: String

% getAmazonAdId snippet

:::{tab-set-code}

```dart
Adjust.getAmazonAdId().then((amazonAdId) {
  // Use amazonAdId string value.
});
```

:::

% Snippet end

::::

% Class method end

% Class method getGoogleAdId

::::{function} getGoogleAdId(onDeviceIdsRead)
:noindex:

Returns the {abbr}`GPS ADID (Google Play Services Advertising ID)` associated with the device. Must be called in a background thread

{#flutter-getgoogleadid-invocation}
```dart
static Future<String?> getGoogleAdId() async
```

% getGoogleAdId snippet

:::{tab-set-code}

```dart
Adjust.getGoogleAdId().then((googleAdId) {
  // Use googleAdId string value.
});
```

:::

% Snippet end

::::

% Class method end
