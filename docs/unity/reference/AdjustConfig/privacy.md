# Privacy methods

% Class method setUrlStrategy

:::::{function} setUrlStrategy(urlStrategy)
:noindex:

Sets the country or region of data residency. If called with a `UrlStrategy` parameter, sets the country/region where data will be sent preferentially.

{#unity-seturlstrategy-invocation}
```c#
public void setUrlStrategy(String urlStrategy)
```

:param urlStrategy: The data residency target (see available values below)
:type urlStrategy: String

% setUrlStrategy snippet

:::{tab-set-code}

```c#
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
adjustConfig.setUrlStrategy(AdjustConfig.AdjustDataResidencyEU);
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
   - Points the URL strategy to the `app.adjust.world` domain
* - `AdjustUrlStrategyCn`
   - Points the URL strategy to the `app.adjust.cn` domain
* - `AdjustUrlStrategyIndia`
   - Points the URL strategy to the `app.adjust.net.in` domain

:::
::::

% Snippet end

:::::

% Class method end

% Class method setCoppaCompliantEnabled

::::{function} setCoppaCompliantEnabled(coppaCompliantEnabled)
:noindex:

:::{versionadded} v4.30.0
Enable {abbr}`COPPA (Children's Online Privacy Protection Act)` compliance in your app.
:::

{#unity-setcoppacompliantenabled-invocation}
```c#
public void setCoppaCompliantEnabled(bool coppaCompliantEnabled)
```

:param coppaCompliantEnabled: Whether the app should be COPPA compliant
:type coppaCompliantEnabled: Boolean

% setCoppaCompliantEnabled snippet

:::{tab-set-code}

```c#
AdjustConfig adjustConfig = new AdjustConfig("{YourAppToken}", AdjustEnvironment.Sandbox);
adjustConfig.setCoppaCompliantEnabled(true);
Adjust.start(adjustConfig);
```

:::

% Snippet end

::::

% Class method end
