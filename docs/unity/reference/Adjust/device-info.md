# Device information methods

Use these methods to retrieve device information.

% Class method getAdid

:::::{function} getAdid
:noindex:

Returns the {abbr}`ADID (Adjust Device ID)` associated with the device

```{code-block} cs
:name: unity-getAdid-invocation

public static string getAdid()
```

:returns: The device ADID
:rtype: String

% getAdid snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
string adid = Adjust.getAdid();
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method getIdfa

:::::{function} getIdfa
:noindex:

Returns the {abbr}`IDFA (ID For Advertisers)` associated with the device

```{code-block} cs
:name: unity-getIdfa-invocation

public static string getIdfa()
```

:returns: The device IDFA
:rtype: String

% getIdfa snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
string idfa = Adjust.getIdfa();
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method getAmazonAdId

:::::{function} getAmazonAdId
:noindex:

Returns the {abbr}`Amazon Ad ID (Amazon Advertising ID)` associated with the device

```{code-block} cs
:name: unity-getAmazonAdId-invocation

public static string getAmazonAdId()
```

:returns: The device Amazon Ad ID
:rtype: String

% getAmazonAdId snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
string amazonAdId = Adjust.getAmazonAdId();
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method getGoogleAdId

:::::{function} getGoogleAdId(onDeviceIdsRead)
:noindex:

Returns the {abbr}`GPS ADID (Google Play Services Advertising ID)` associated with the device. Must be called in a background thread

```{code-block} cs
:name: unity-getGoogleAdId-invocation

public static void getGoogleAdId(Action<string> onDeviceIdsRead)
```

:param onDeviceIdsRead: The function called when the SDK receives the ID from the device
:type onDeviceIdsRead: Action\<string\>

% getGoogleAdId snippet

::::{tab-set}
:::{tab-item} C#
```{code-block} cs
Adjust.getGoogleAdId((string googleAdId) => {
   //...
}};
```
:::
::::

% Snippet end

:::::

% Class method end
