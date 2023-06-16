# Privacy methods

% Class method setUrlStrategy

:::::{function} setUrlStrategy(urlStrategy)
:noindex:

Sets the country or region of data residency. If called with a `URL_STRATEGY` parameter, sets the country/region where data will be sent preferentially.

{#android-seturlstrategy-invocation}
```java
public void setUrlStrategy(String urlStrategy)
```

:param urlStrategy: The data residency target (see available values below)
:type urlStrategy: String

% setUrlStrategy snippet

:::{tab-set-code}

{emphasize-lines="4"}
```kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setUrlStrategy(AdjustConfig.DATA_RESIDENCY_EU)
//...
Adjust.onCreate(config)
```

{emphasize-lines="4"}
```java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setUrlStrategy(AdjustConfig.DATA_RESIDENCY_EU);
//...
Adjust.onCreate(config);
```

{emphasize-lines="4"}
```javascript
var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setUrlStrategy(AdjustConfig.DATA_RESIDENCY_EU);
```

:::

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
   - Points the URL strategy to the `app.adjust.world` domain
* - `URL_STRATEGY_CN`
   - Points the URL strategy to the `app.adjust.cn` domain
* - `URL_STRATEGY_INDIA`
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

{#android-setcoppacompliantenabled-invocation}
```java
public void setCoppaCompliantEnabled(boolean coppaCompliantEnabled)
```

:param coppaCompliantEnabled: Whether the app should be COPPA compliant
:type coppaCompliantEnabled: Boolean

% setCoppaCompliantEnabled snippet

:::{tab-set-code}

{emphasize-lines="4"}
```kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setCoppaCompliantEnabled(true)
//...
Adjust.onCreate(config)
```

{emphasize-lines="4"}
```java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setCoppaCompliantEnabled(true);
//...
Adjust.onCreate(config);
```

{emphasize-lines="4"}
```javascript
var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setCoppaCompliantEnabled(true);
```

:::

% Snippet end

::::

% Class method end

% Class method setPlayStoreKidsAppEnabled

:::::{function} setPlayStoreKidsAppEnabled(playStoreKidsAppEnabled)
:noindex:

Marks your app as a Kids App and disables reading device information

{#android-setplaystorekidsappenabled-invocation}
```java
public void setPlayStoreKidsAppEnabled(boolean playStoreKidsAppEnabled)
```

:param playStoreKidsAppEnabled: Whether the app is a Kids app
:type playStoreKidsAppEnabled: boolean

% setPlayStoreKidsAppEnabled snippet

:::{tab-set-code}

{emphasize-lines="4"}
```kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX
val config = AdjustConfig(this, appToken, environment)
config.setPlayStoreKidsAppEnabled(true)
//...
Adjust.onCreate(config)
```

{emphasize-lines="4"}
```java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;
AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setPlayStoreKidsAppEnabled(true);
//...
Adjust.onCreate(config);
```

{emphasize-lines="4"}
```javascript
var yourAppToken = yourAppToken;
var environment = AdjustConfig.EnvironmentSandbox;
var adjustConfig = new AdjustConfig(yourAppToken, environment);
adjustConfig.setPlayStoreKidsAppEnabled(true);
```

:::

% Snippet end

:::::

% Class method end
