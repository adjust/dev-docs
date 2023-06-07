# Privacy methods

% Class method setUrlStrategy

:::::{function} setUrlStrategy(urlStrategy)
:noindex:

Sets the country or region of data residency. If called with a `UrlStrategy` parameter, sets the country/region where data will be sent preferentially.

{#react-native-seturlstrategy-invocation}

```ts
public setUrlStrategy(urlStrategy: UrlStrategy): void
```

:param urlStrategy: The data residency target (see available values below)
:type urlStrategy: String

% setUrlStrategy snippet

:::{tab-set-code}

{emphasize-lines="3"}

```js
const adjustConfig = new AdjustConfig(
   "{YourAppToken}",
   AdjustConfig.EnvironmentSandbox
);
//..
adjustConfig.setUrlStrategy(AdjustConfig.DataResidencyEU); // for EU data residency region
//...
Adjust.create(adjustConfig);
```

:::

::::{dropdown} Available URL strategies
:::{list-table}
:header-rows: 1

-  -  Value
   -  Description
-  -  `AdjustDataResidencyEU`
   -  Sets the area of data residency to **the EU**
-  -  `AdjustDataResidencyTR`
   -  Sets the area of data residency to **Turkey**
-  -  `AdjustDataResidencyUS`
   -  Sets the area of data residency to **the USA**
-  -  `AdjustUrlStrategyChina`
   -  Sets the area of data residency to **China**
-  -  `AdjustUrlStrategyIndia`
   -  Sets the area of data residency to **India**

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

{#react-native-setcoppacompliantenabled-invocation}

```ts
public setCoppaCompliantEnabled(coppaCompliantEnabled: boolean): void
```

:param coppaCompliantEnabled: Whether the app should be COPPA compliant
:type coppaCompliantEnabled: Boolean

% setCoppaCompliantEnabled snippet

:::{tab-set-code}

{emphasize-lines="3"}

```js
const adjustConfig = new AdjustConfig(
   "{YourAppToken}",
   AdjustConfig.EnvironmentSandbox
);
//..
adjustConfig.setCoppaCompliantEnabled(true);
//...
Adjust.create(adjustConfig);
```

:::

% Snippet end

::::

% Class method end
