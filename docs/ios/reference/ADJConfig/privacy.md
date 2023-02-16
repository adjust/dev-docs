# Privacy methods

% classMethod setUrlStrategy

::::{function} setUrlStrategy(urlStrategy)
:noindex:

```{versionadded} v4.23.0
Sets whether the Adjust SDK can read the device {abbr}`IDFA (ID for Advertisers)`
```

```{code-block} objc
:name: ios-setUrlStrategy-invocation

@property (nonatomic, copy, readwrite, nullable) NSString *urlStrategy;
```

:param urlStrategy: The data residency target (see available values below)
:type urlStrategy: NSString

```{include} /ios/fragments/ADJConfig.md
:start-after: setUrlStrategy
:end-before: methodEnd
```

:::{dropdown} Available URL strategies
```{list-table}
:header-rows: 1

* - Value
   - Description
* - `AdjustDataResidencyEU`
   - Sets the area of data residency to the EU
* - `AdjustDataResidencyTR`
   - Sets the area of data residency to Turkey
* - `AdjustDataResidencyUS`
   - Sets the area of data residency to the USA
* - `AdjustUrlStrategyChina`
   - Sets the area of data residency to China
* - `AdjustUrlStrategyIndia`
   - Sets the area of data residency to India

```
:::
::::

% classMethodEnd

% classMethod setCoppaCompliantEnabled

:::{function} setCoppaCompliantEnabled(coppaCompliantEnabled)
:noindex:

```{versionadded} v4.30.0
Enable {abbr}`COPPA (Children's Online Privacy Protection Act)` compliance in your app.
```

```{code-block} objc
:name: ios-setCoppaCompliantEnabled-invocation

@property (nonatomic, assign) BOOL coppaCompliantEnabled;
```

:param coppaCompliantEnabled: Whether the app should be COPPA compliant
:type coppaCompliantEnabled: BOOL

```{include} /ios/fragments/ADJConfig.md
:start-after: setCoppaCompliantEnabled
:end-before: methodEnd
```
:::

% classMethodEnd
