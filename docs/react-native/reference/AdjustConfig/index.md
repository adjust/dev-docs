# AdjustConfig class

Use the methods in this class to set up the Adjust SDK.

:::{important}
The methods in this class must be called **before** you initialize the SDK.
:::

% Class method AdjustConfig

::::{function} final AdjustConfig adjustConfig = new AdjustConfig(getReactApplicationContext(), appToken, environment);
:noindex:

::::

:::{tab-set-code}

```js
const adjustConfig = new AdjustConfig("{YourAppToken}", AdjustConfig.EnvironmentSandbox);
//...
Adjust.create(adjustConfig);
```

:::

::::{dropdown} Properties

:::{list-table}
:header-rows: 1

* - Property
   - Data type
   - Description
   - Required
* - `apptoken`
   - String
   - The App Token of your app. This unique identifier can be found in your dashboard and should always be 12 characters long.
   - Yes
* - `environment`
   - Enum<String>
   - The environment your app is running in
   - Yes

:::

::::

::::{dropdown} AdjustEnvironment enum

:::{list-table}
:header-rows: 1

* - Value
   - Description
* - `AdjustEnvironment.Production`
   - Indicates application is being used in production. Data is treated as live.
* - `AdjustEnvironment.Sandbox`
   - Indicates application is being tested, doesn't display in the dashboard as live data.

:::

::::
