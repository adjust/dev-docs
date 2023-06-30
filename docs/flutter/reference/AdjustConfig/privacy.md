# Privacy methods

% Class method setUrlStrategy

:::::{function} urlStrategy
:noindex:

Sets the country or region of [data residency](hc:data-residency). 

{#flutter-seturlstrategy-invocation}
```dart
String? urlStrategy;
```

% setUrlStrategy snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.urlStrategy = 'AdjustDataResidencyEU';
//...
Adjust.start(adjustConfig);
```

:::

::::{dropdown} Available URL strategies
:::{list-table}
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

:::
::::

% Snippet end

:::::

% Class method end

% Class method setCoppaCompliantEnabled

::::{function} coppaCompliantEnabled()
:noindex:

:::{versionadded} v4.30.0
Enable [{abbr}`COPPA (Children's Online Privacy Protection Act)` compliance](hc:apps-for-children) in your app.
:::

{#flutter-coppacompliantenabled-invocation}
```dart
bool? coppaCompliantEnabled
```

% coppaCompliantEnabled snippet

:::{tab-set-code}

{emphasize-lines="3"}
```dart
AdjustConfig adjustConfig = new AdjustConfig('{YourAppToken}', AdjustEnvironment.Sandbox);
//...
adjustConfig.coppaCompliantEnabled = true;
//...
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end
