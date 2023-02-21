# Device information methods

Use these methods to retrieve device information.

% classMethod getAdid

:::{function} getAdid
:noindex:

Returns the {abbr}`ADID (Adjust Device ID)` associated with the device

```{code-block} cs
:name: unity-getAdid-invocation

public static string getAdid()
```

:returns: The device ADID
:rtype: String

```{include} /unity/fragments/Adjust.md
:start-after: getAdid
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod getIdfa

::::{function} getIdfa
:noindex:

Returns the {abbr}`IDFA (ID For Advertisers)` associated with the device

```{code-block} cs
:name: unity-getIdfa-invocation

public static string getIdfa()
```

:returns: The device IDFA
:rtype: String

```{include} /unity/fragments/Adjust.md
:start-after: getIdfa
:end-before: methodEnd
```

::::

% classMethodEnd

% classMethod getAmazonAdId

::::{function} getAmazonAdId
:noindex:

Returns the {abbr}`Amazon Ad ID (Amazon Advertising ID)` associated with the device

```{code-block} cs
:name: unity-getAmazonAdId-invocation

public static string getAmazonAdId()
```

:returns: The device Amazon Ad ID
:rtype: String

```{include} /unity/fragments/Adjust.md
:start-after: getAmazonAdId
:end-before: methodEnd
```

::::

% classMethodEnd

% classMethod getGoogleAdId

::::{function} getGoogleAdId(onDeviceIdsRead)
:noindex:

Returns the {abbr}`GPS ADID (Google Play Services Advertising ID)` associated with the device. Must be called in a background thread

```{code-block} cs
:name: unity-getGoogleAdId-invocation

public static void getGoogleAdId(Action<string> onDeviceIdsRead)
```

:param onDeviceIdsRead: The function called when the SDK receives the ID from the device
:type onDeviceIdsRead: Action\<string\>

```{include} /unity/fragments/Adjust.md
:start-after: getGoogleAdId
:end-before: methodEnd
```

::::

% classMethodEnd
