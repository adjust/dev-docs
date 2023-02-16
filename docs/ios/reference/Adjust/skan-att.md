# SKAdNetwork and ATT methods

Use these methods to manage your [SKAdNetwork](https://help.adjust.com/en/article/skadnetwork) and [App Tracking Transparency](https://help.adjust.com/en/article/app-tracking-transparency-att-framework) logic.

% classMethod requestTrackingAuthorizationWithCompletionHandler

:::{function} requestTrackingAuthorizationWithCompletionHandler (completion)
:noindex:

```{versionadded} v4.23.0
Receives the user's authorization status from the ATT prompt and passes it to a completion function
```

```{code-block} objc
:name: ios-requestTrackingAuthorizationWithCompletionHandler-invocation

+ (void)requestTrackingAuthorizationWithCompletionHandler:(void (^_Nullable)(NSUInteger status))completion;
```

:param completion: Completion handler to which the status is delivered
:type completion: Method

```{include} /ios/fragments/Adjust.md
:start-after: requestTrackingAuthorizationWithCompletionHandler
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod appTrackingAuthorizationStatus

:::{function} appTrackingAuthorizationStatus
:noindex:

```{versionadded} v4.25.0
Retrieves the user's current authorization status
```

```{code-block} objc
:name: ios-appTrackingAuthorizationStatus-invocation

- (int) appTrackingAuthorizationStatus
```

:returns: The user's authorization status
:rtype: NSInteger

```{include} /ios/fragments/Adjust.md
:start-after: appTrackingAuthorizationStatus
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod checkForNewAttStatus

:::{function} checkForNewAttStatus
:noindex:

```{versionadded} v4.30.0
Prompts the SDK to check the current state of `att_status`
```

```{code-block} objc
:name: ios-checkForNewAttStatus-invocation

+ (void)checkForNewAttStatus;
```

```{include} /ios/fragments/Adjust.md
:start-after: checkForNewAttStatus
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod updateConversionValue

:::{function} updateConversionValue(conversionValue)
:noindex:

```{versionadded} v4.26.0
Updates the [conversion value](https://help.adjust.com/en/new/article/conversion-hub)
```

```{code-block} objc
:name: ios-updateConversionValue-invocation

- (void)updateConversionValue:(NSInteger)conversionValue;
```

:param conversionValue: The new conversion value
:type conversionValue: NSInteger

```{include} /ios/fragments/Adjust.md
:start-after: updateConversionValue
:end-before: methodEnd
```

:::

% classMethodEnd
