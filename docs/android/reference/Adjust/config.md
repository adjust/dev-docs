# Configuration methods

Use these methods to update the Adjust SDK's configuration.

% Class method setEnabled

::::{function} setEnabled (enabled)
:noindex:

Enable or disable the Adjust SDK. The SDK doesn't send any information while disabled.

{#android-setenabled-invocation}
```java
public static void setEnabled(boolean enabled)
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: BOOL

% setEnabled snippet

:::{tab-set-code}

```kotlin
Adjust.setEnabled(false)
```

```java
Adjust.setEnabled(false);
```

```javascript
Adjust.setEnabled(false);
```

:::

% Snippet end

::::

% Class method end

% Class method isEnabled

::::{function} isEnabled ()
:noindex:

Call this method to check whether the Adjust SDK is enabled.

{#android-isenabled-invocation}
```java
public static boolean isEnabled()
```

:returns: Whether the SDK is currently enabled
:rtype: boolean

% isEnabled snippet

:::{tab-set-code}

```kotlin
Adjust.isEnabled()
```

```java
Adjust.isEnabled();
```

```javascript
Adjust.isEnabled();
```

:::

% Snippet end

::::

% Class method end

% Class method setOfflineMode

::::{function} setOfflineMode (isOffline)
:noindex:

Controls whether the SDK is in offline mode. When in offline mode, the SDK queues all events in a file until offline mode is disabled. When offline mode is disabled, the SDK sends all queued events.

{#android-setofflinemode-invocation}
```java
public static void setOfflineMode(boolean enabled)
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: boolean

% setOfflineMode snippet

:::{tab-set-code}

```kotlin
Adjust.setOfflineMode(true)
```

```java
Adjust.setOfflineMode(true);
```

```javascript
Adjust.setOfflineMode(true);
```

:::

% Snippet end

::::

% Class method end

% Class method setPushToken

::::{function} setPushToken (pushToken, context)
:noindex:

Set your [push token](hc:/push-notifications) to record [uninstalls and reattributions](hc:/uninstalls-reinstalls). You can update this value at any time.

{#android-setpushtoken-invocation}
```java
public static void setPushToken(final String token, final Context context)
```

:param pushToken: Your push token
:type pushToken: String
:param context: The [context](https://developer.android.com/reference/android/content/Context) the method is being called in.
:type context: Context

% setPushToken snippet

:::{tab-set-code}

```kotlin
Adjust.setPushToken("{YourPushToken}", getApplicationContext())
```

```java
Adjust.setPushToken("{YourPushToken}", getApplicationContext());
```

```javascript
Adjust.setPushToken('{YourPushToken}');
```

:::

% Snippet end

::::

% Class method end

% Class method sendFirstPackages

::::{function} sendFirstPackages ()
:noindex:

:::{note}
This method has an effect only if you delay the start of the Adjust SDK.
:::

The Adjust SDK sends information to Adjust's servers as soon as it starts. If you delay the start of the SDK, you can use this method to send packages before the delay ends.

{#android-sendfirstpackages-invocation}
```java
public static void sendFirstPackages()
```

% sendFirstPackages snippet

:::{tab-set-code}

```kotlin
Adjust.sendFirstPackages()
```

```java
Adjust.sendFirstPackages();
```

```javascript
Adjust.sendFirstPackages();
```

:::

% Snippet end

::::

% Class method end

% Class method appWillOpenUrl

::::{function} appWillOpenUrl(url, context)
:noindex:

Processes URLs to extract deep link information.

:::{versionchanged} v4.14.0
You need to pass your app context to this method to use it.
:::

{#android-appwillopenurl-invocation}
```java
public static void appWillOpenUrl(Uri url, Context context)
```

% appWillOpenUrl snippet

:::{tab-set-code}

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
   super.onCreate(savedInstanceState)
   setContentView(R.layout.activity_main)

   val intent = intent
   val data = intent.data
   Adjust.appWillOpenUrl(data, getApplicationContext())
}
```

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    Intent intent = getIntent();
    Uri data = intent.getData();
    Adjust.appWillOpenUrl(data, getApplicationContext());
}
```

```javascript
Adjust.appWillOpenUrl(deeplinkUrl);
```

:::

% Snippet end

::::

% Class method end
