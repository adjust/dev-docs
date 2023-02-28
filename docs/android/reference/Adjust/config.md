# Configuration methods

Use these methods to update the Adjust SDK's configuration.

% Class method setEnabled

:::::{function} setEnabled (enabled)
:noindex:

Enable or disable the Adjust SDK. The SDK doesn't send any information while disabled.

```{code-block} java
:name: android-setEnabled-invocation

public static void setEnabled(boolean enabled)
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: BOOL

% setEnabled snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin

```{code-block} kotlin
Adjust.setEnabled(false)
```
:::
:::{tab-item} Java
:sync: java

```{code-block} objc
Adjust.setEnabled(false);
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.setEnabled(false);
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method isEnabled

:::::{function} isEnabled ()
:noindex:

Call this method to check whether the Adjust SDK is enabled.

```{code-block} java
:name: android-isEnabled-invocation

public static boolean isEnabled()
```

:returns: Whether the SDK is currently enabled
:rtype: boolean

% isEnabled snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin

```{code-block} kotlin
Adjust.isEnabled()
```
:::
:::{tab-item} Java
:sync: java

```{code-block} java
Adjust.isEnabled();
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.isEnabled();
```
::::

% Snippet end

:::::

% Class method end

% Class method setOfflineMode

:::::{function} setOfflineMode (isOffline)
:noindex:

Controls whether the SDK is in offline mode. When in offline mode, the SDK queues all events in a file until offline mode is disabled. When offline mode is disabled, the SDK sends all queued events.

```{code-block} java
:name: android-setOfflineMode-invocation

public static void setOfflineMode(boolean enabled)
```

:param enabled: Whether the SDK should be enabled or not
:type enabled: boolean

% setOfflineMode snippet

::::{tab-set}
:::{tab-item} Kotlin
:sync: kotlin

```{code-block} kotlin
Adjust.setOfflineMode(true)
```
:::
:::{tab-item} Java
:sync: java

```{code-block} java
Adjust.setOfflineMode(true);
```
:::
:::{tab-item} Javascript
:sync: js

```{code-block} js
Adjust.setOfflineMode(true);
```
:::
::::

% Snippet end

:::::

% Class method end
