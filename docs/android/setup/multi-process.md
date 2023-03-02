# Multi-process apps

:::{important}
Calling the SDK in multiple processes without setting the process name initializes multiple instances of the SDK. This is because processes in Android don't share memory space. Ensure that you always set your main process name **or** use the Adjust SDK in only one process.
:::

Android apps can consist of one or more processes. To run services or activities in a process other than the main one, you need to add a process name to your activity or service. To do this, add an `android:process` property to your `activity` or `service` node in your {file}`AndroidManifest.xml` file.

```{code-block} xml
<activity
    android:name=".YourActivity"
    android:process=":YourProcessName">
</activity>
```

```{code-block} xml
<service
    android:name=".YourService"
    android:process=":YourProcessName">
</service>
```

Defining a process name forces the activity or service to run in a process other than the main process.

By default, your main process name is the same as your app package name. For example, if your app package name is `com.example.myapp`, your main process is also named `com.example.myapp`. The above examples run in a process underneath this main process called `com.example.myapp:YourProcessName`.

The Adjust SDK doesn't currently support tracking for more than one process in an app. If your app uses multiple processes, set the main process name in your [`AdjustConfig` object](/android/reference/AdjustConfig/index.md).

:::{tab-set-code}

```{code-block} kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX

val config = AdjustConfig(this, appToken, environment)
config.setProcessName("com.example.myapp")

Adjust.onCreate(config)
```

```{code-block} java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;

AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setProcessName("com.example.myapp");

Adjust.onCreate(config);
```

```{code-block} javascript
let appToken = "{YourAppToken}";
let environment = AdjustConfig.EnvironmentSandbox;
let adjustConfig = new AdjustConfig(appToken, environment);
adjustConfig.setProcessName("com.example.myapp");

Adjust.onCreate(adjustConfig)
```

:::

To change the name of your main process, modify the `android:process` property of the `application` node in your {file}`AndroidManifest.xml` file.

```{code-block} xml
<application
  android:name=".YourApp"
  android:icon="@drawable/ic_launcher"
  android:label="@string/app_name"
  android:theme="@style/AppTheme"
  android:process=":YourMainProcessName">
</application>
```

Then set your process name in your `AdjustConfig` object.

:::{tab-set-code}

```{code-block} kotlin
val appToken = "{YourAppToken}"
val environment = AdjustConfig.ENVIRONMENT_SANDBOX

val config = AdjustConfig(this, appToken, environment)
config.setProcessName("com.example.myapp:YourMainProcessName")

Adjust.onCreate(config)
```

```{code-block} java
String appToken = "{YourAppToken}";
String environment = AdjustConfig.ENVIRONMENT_SANDBOX;

AdjustConfig config = new AdjustConfig(this, appToken, environment);
config.setProcessName("com.example.myapp:YourMainProcessName");

Adjust.onCreate(config);
```

```{code-block} javascript
let appToken = "{YourAppToken}";
let environment = AdjustConfig.EnvironmentSandbox;
let adjustConfig = new AdjustConfig(appToken, environment);
adjustConfig.setProcessName("com.example.myapp:YourMainProcessName");

Adjust.onCreate(adjustConfig)
```

:::

This informs the Adjust SDK of the main process name. The SDK only initializes in the **main** process. If you try to use the SDK in another process you'll see the following in the output logs:

```{code-block} text
05-06 17:15:06.885    8743-8743/com.example.myapp:YourProcessName I/Adjust﹕ Skipping initialization in background process (com.example.myapp:YourProcessName)
```
