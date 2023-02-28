# Privacy methods

% Class method setUrlStrategy

:::::{function} setUrlStrategy(urlStrategy)
:noindex:

Sets the country or region of data residency. If called with a `URL_STRATEGY` parameter, sets the country/region where data will be sent preferentially.

```{code-block} cs
:name: android-setUrlStrategy-invocation

public void setUrlStrategy(String urlStrategy)
```

:param urlStrategy: The data residency target (see available values below)
:type urlStrategy: String

% setUrlStrategy snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin

```{code-block} kotlin
:emphasize-lines: 4

val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setUrlStrategy(AdjustConfig.DATA_RESIDENCY_EU)
//...
Adjust.onCreate(config)
```

:::
:::{tab-item} Java
:sync: java

```{code-block} java
:emphasize-lines: 4

String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setUrlStrategy(AdjustConfig.DATA_RESIDENCY_EU);
//...
Adjust.onCreate(config);
```

:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
:emphasize-lines: 4

var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setUrlStrategy(AdjustConfig.DATA_RESIDENCY_EU);
```

:::
::::

::::{dropdown} Available URL strategies
:::{list-table}
:header-rows: 1

* - Value
   - Description
* - `AdjustConfig.DATA_RESIDENCY_EU`
   - Sets the area of data residency to the EU
* - `AdjustConfig.DATA_RESIDENCY_TR`
   - Sets the area of data residency to Turkey
* - `AdjustConfig.DATA_RESIDENCY_US`
   - Sets the area of data residency to the USA
* - `URL_STRATEGY_CHINA`
   - Sets the URL strategy to China
* - `URL_STRATEGY_INDIA`
   - Sets the URL strategy to India

:::
::::

% Snippet end

:::::

% Class method end

% Class method setCoppaCompliantEnabled

:::::{function} setCoppaCompliantEnabled(coppaCompliantEnabled)
:noindex:

:::{versionadded} v4.30.0
Enable {abbr}`COPPA (Children's Online Privacy Protection Act)` compliance in your app.
:::

```{code-block} java
:name: android-setCoppaCompliantEnabled-invocation

public void setCoppaCompliantEnabled(boolean coppaCompliantEnabled)
```

:param coppaCompliantEnabled: Whether the app should be COPPA compliant
:type coppaCompliantEnabled: Boolean

% setCoppaCompliantEnabled snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin

```{code-block} kotlin
:emphasize-lines: 4

val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setCoppaCompliantEnabled(true)
//...
Adjust.onCreate(config)
```

:::
:::{tab-item} Java
:sync: java

```{code-block} java
:emphasize-lines: 4

String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setCoppaCompliantEnabled(true);
//...
Adjust.onCreate(config);
```

:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
:emphasize-lines: 4

var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setCoppaCompliantEnabled(true);
```

:::
::::

% Snippet end

:::::

% Class method end
