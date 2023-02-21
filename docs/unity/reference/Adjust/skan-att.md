# SKAdNetwork and ATT methods

Use these methods to manage your [SKAdNetwork](https://help.adjust.com/en/article/skadnetwork) and [App Tracking Transparency](https://help.adjust.com/en/article/app-tracking-transparency-att-framework) logic.

% classMethod requestTrackingAuthorizationWithCompletionHandler

:::{function} requestTrackingAuthorizationWithCompletionHandler (completion)
:noindex:

Receives the user's authorization status from the ATT prompt and passes it to a completion function

```{code-block} cs
:name: unity-requestTrackingAuthorizationWithCompletionHandler-invocation

public static void requestTrackingAuthorizationWithCompletionHandler(Action<int> statusCallback, string sceneName = "Adjust")
```

:param completion: Completion handler to which the status is delivered
:type completion: Action

```{include} /unity/fragments/Adjust.md
:start-after: requestTrackingAuthorizationWithCompletionHandler
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod getAppTrackingAuthorizationStatus

:::{function} getAppTrackingAuthorizationStatus
:noindex:

Retrieves the user's current authorization status

```{code-block} cs
:name: unity-getAppTrackingAuthorizationStatus-invocation

public static int getAppTrackingAuthorizationStatus()
```

:returns: The user's authorization status
:rtype: Integer

```{include} /unity/fragments/Adjust.md
:start-after: getAppTrackingAuthorizationStatus
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod checkForNewAttStatus

:::{function} checkForNewAttStatus
:noindex:

Prompts the SDK to check the current state of `att_status`

```{code-block} cs
:name: unity-checkForNewAttStatus-invocation

public static void checkForNewAttStatus()
```

```{include} /unity/fragments/Adjust.md
:start-after: checkForNewAttStatus
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod updateConversionValue

:::{function} updateConversionValue(conversionValue)
:noindex:

Updates the [conversion value](https://help.adjust.com/en/new/article/conversion-hub)

```{code-block} cs
:name: unity-updateConversionValue-invocation

public static void updateConversionValue(int conversionValue)
```

:param conversionValue: The new conversion value
:type conversionValue: Integer

```{include} /unity/fragments/Adjust.md
:start-after: updateConversionValue
:end-before: methodEnd
```

:::

% classMethodEnd
