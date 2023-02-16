# ADJThirdPartySharing class

Use this class to communicate a user's third party sharing preferences. Send this information to Adjust's servers using the [`trackThirdPartySharing` method](ios-trackThirdPartySharing-invocation).

% classMethod initWithIsEnabledNumberBool

:::{function} initWithIsEnabledNumberBool (isEnabledNumberBool)
:noindex:

Creates a third party sharing object initialized with a **nullable boolean** value

```{code-block} objc
:name: ios-initWithIsEnabledNumberBool-invocation

- (nullable id)initWithIsEnabledNumberBool:(nullable NSNumber *)isEnabledNumberBool;
```

:param isEnabledNumberBool: A nullable boolean value. Use `true`, `false`, or `nil`
:type isEnabledNumberBool: NSNumber

```{include} /ios/fragments/ADJThirdPartySharing.md
:start-after: initWithIsEnabledNumberBool true
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addGranularOption

:::{function} addGranularOption (partnerName, key, value)
:noindex:

Adds additional key-value pairs of information to share with third parties. You can add multiple parameters by calling this method multiple times.

```{code-block} objc
:name: ios-addGranularOption-invocation

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

```{include} /ios/fragments/ADJThirdPartySharing.md
:start-after: addGranularOption
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod addPartnerSharingSetting

:::{function} addPartnerSharingSetting (partnerName, key, value)
:noindex:

```{versionadded} v4.32.0
Adds additional key-value pairs of settings to share with third parties. You can add multiple settings by calling this method multiple times.
```

```{code-block} objc
:name: ios-addPartnerSharingSetting-invocation

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

```{include} /ios/fragments/ADJThirdPartySharing.md
:start-after: addPartnerSharingSetting
:end-before: methodEnd
```

:::

% classMethodEnd
