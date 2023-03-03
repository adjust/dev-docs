# Device information methods

Use these methods to retrieve device information.

% Class method getAdid

::::{function} getAdid
:noindex:

Returns the {abbr}`ADID (Adjust Device ID)` associated with the device

{#unity-getadid-invocation}
```c#
public static string getAdid()
```

:returns: The device ADID
:rtype: String

% getAdid snippet

:::{tab-set-code}

```c#
string adid = Adjust.getAdid();
```

:::

% Snippet end

::::

% Class method end

% Class method getIdfa

::::{function} getIdfa
:noindex:

Returns the {abbr}`IDFA (ID For Advertisers)` associated with the device

{#unity-getidfa-invocation}
```c#
public static string getIdfa()
```

:returns: The device IDFA
:rtype: String

% getIdfa snippet

:::{tab-set-code}

```c#
string idfa = Adjust.getIdfa();
```

:::

% Snippet end

::::

% Class method end

% Class method getAmazonAdId

::::{function} getAmazonAdId
:noindex:

Returns the {abbr}`Amazon Ad ID (Amazon Advertising ID)` associated with the device

{#unity-getamazonadid-invocation}
```c#
public static string getAmazonAdId()
```

:returns: The device Amazon Ad ID
:rtype: String

% getAmazonAdId snippet

:::{tab-set-code}

```c#
string amazonAdId = Adjust.getAmazonAdId();
```

:::

% Snippet end

::::

% Class method end

% Class method getGoogleAdId

::::{function} getGoogleAdId(onDeviceIdsRead)
:noindex:

Returns the {abbr}`GPS ADID (Google Play Services Advertising ID)` associated with the device. Must be called in a background thread

{#unity-getgoogleadid-invocation}
```c#
public static void getGoogleAdId(Action<string> onDeviceIdsRead)
```

:param onDeviceIdsRead: The function called when the SDK receives the ID from the device
:type onDeviceIdsRead: Action\<string\>

% getGoogleAdId snippet

:::{tab-set-code}

```c#
Adjust.getGoogleAdId((string googleAdId) => {
   //...
}};
```

:::

% Snippet end

::::

% Class method end
