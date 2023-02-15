# Device information methods

Use these methods to retrieve device information.

% classMethod adid

:::{function} adid
:noindex:

Returns the {abbr}`ADID (Adjust Device ID)` associated with the device

```{code-block} objc
:name: ios-adid-invocation

+ (NSString *) adid
```

:returns: The device ADID
:rtype: NSString

```{include} /ios/fragments/Adjust.md
:start-after: adid
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod idfa

::::{function} adid
:noindex:

Returns the {abbr}`IDFA (ID For Advertisers)` associated with the device

:::{note}
The [`allowIdfaReading` property](ios-setAllowIdfaReading-invocation) must be `true` for the Adjust SDK to have access to the device IDFA
:::

```{code-block} objc
:name: ios-idfa-invocation

+ (NSString *) idfa
```

:returns: The device IDFA
:rtype: NSString

```{include} /ios/fragments/Adjust.md
:start-after: idfa
:end-before: methodEnd
```

::::

% classMethodEnd
