# Setup methods


% classMethod setLogLevel

::::{function} setLogLevel (logLevel)
:noindex:

Set the verbosity of logs you want to receive from the Adjust SDK

```{code-block} objc
:name: ios-setLogLevel-invocation

@property (nonatomic, assign) ADJLogLevel logLevel;
```

:param logLevel: The verbosity of the logging
:type logLevel: ADJLogLevel

```{include} /ios/fragments/ADJConfig.md
:start-after: setLogLevel
:end-before: methodEnd
```

:::{dropdown} Available log levels
```{list-table}
:header-rows: 1

* - ADJLogLevel
   - Description
* - `ADJLogLevelVerbose`
   - Enable all logging
* - `ADJLogLevelDebug`
   - Enable debug logging
* - `ADJLogLevelInfo`
   - Only show info level logs (default option)
* - `ADJLogLevelWarn`
   - Disable info logging
* - `ADJLogLevelError`
   - Disable warning level logging and below
* - `ADJLogLevelAssert`
   - Disable error level logging and below
* - `ADJLogLevelSuppress`
   - Suppress all logging

```
:::
::::

% classMethodEnd

% classMethod setDefaultTracker

:::{function} setDefaultTracker (defaultTracker)
:noindex:

```{versionadded} v4.2.2
Sets a default tracker token to record installs against
```

```{code-block} objc
:name: ios-setDefaultTracker-invocation

@property (nonatomic, copy, nullable) NSString *defaultTracker;
```

:param defaultTracker: The tracker token to which all preinstalled sessions are attributed
:type defaultTracker: NSString

```{include} /ios/fragments/ADJConfig.md
:start-after: setDefaultTracker
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setDelayStart

:::{function} setDelayStart (delayStart)
:noindex:

Sets a delay before the SDK starts to allow data to load before session information is sent to Adjust's servers. Maximum delay: 10 seconds

```{code-block} objc
:name: ios-setDelayStart-invocation

@property (nonatomic, assign) double delayStart;
```

:param delayStart: The time (in seconds) to delay the start of the SDK by
:type delayStart: double

```{include} /ios/fragments/ADJConfig.md
:start-after: setDelayStart
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setExternalDeviceId

:::{function} setExternalDeviceId (externalDeviceId)
:noindex:

```{versionadded} v4.20.0
Sets an external device identifier for reporting purposes
```

```{code-block} objc
:name: ios-setExternalDeviceId-invocation

@property (nonatomic, copy, nullable) NSString *externalDeviceId;
```

:param externalDeviceId: The external device ID associated with the device
:type externalDeviceId: NSString

```{include} /ios/fragments/ADJConfig.md
:start-after: externalDeviceId
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setEventBufferingEnabled

:::{function} setEventBufferingEnabled (eventBufferingEnabled)
:noindex:

Sets event buffering. If enabled, the SDK stores events on the device and sends all requests once per minute.

```{code-block} objc
:name: ios-setEventBufferingEnabled-invocation

@property (nonatomic, assign) BOOL eventBufferingEnabled;
```

:param eventBufferingEnabled: Whether event buffering is enabled or not
:type eventBufferingEnabled: BOOL

```{include} /ios/fragments/ADJConfig.md
:start-after: setEventBufferingEnabled
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setSendInBackground

:::{function} setSendInBackground (sendInBackground)
:noindex:

Sets whether the SDK should send data while the app is running in the background

```{code-block} objc
:name: ios-setSendInBackground-invocation

@property (nonatomic, assign) BOOL sendInBackground;
```

:param sendInBackground: Whether the SDK should send information when the app is running in the background
:type sendInBackground: BOOL

```{include} /ios/fragments/ADJConfig.md
:start-after: setSendInBackground
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setNeedsCost

:::{function} setNeedsCost (needsCost)
:noindex:

```{versionadded} v4.24.0
Sets whether the SDK should gather cost data. This is accessible in the user's attribution information.
```

```{code-block} objc
:name: ios-setNeedsCost-invocation

@property (nonatomic, assign) BOOL needsCost;
```

:param needsCost: Whether the SDK should gather cost data
:type needsCost: BOOL

```{include} /ios/fragments/ADJConfig.md
:start-after: setNeedsCost
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setLinkMeEnabled

:::{function} setLinkMeEnabled (boolean)
:noindex:

```{versionadded} v4.31.0
Toggle support for Adjust's [LinkMe solution](https://help.adjust.com/preview/en/article/linkme) for deep linking
```

```{code-block} objc
:name: ios-setLinkMeEnabled-invocation

@property (nonatomic, assign) BOOL linkMeEnabled;
```

:param linkMeEnabled: Whether LinkMe should be enabled
:type linkMeEnabled: BOOL

```{include} /ios/fragments/ADJConfig.md
:start-after: setLinkMeEnabled
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod deactivateSKAdNetworkHandling

:::{function} deactivateSKAdNetworkHandling
:noindex:

```{versionadded} v4.23.0
Turns off communication with SKAdNetwork. Communication is *enabled* by default.
```

```{code-block} objc
:name: ios-deactivateSKAdNetworkHandling-invocation

- (void)deactivateSKAdNetworkHandling;
```

```{include} /ios/fragments/ADJConfig.md
:start-after: deactivateSKAdNetworkHandling
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setAllowIdfaReading

:::{function} setAllowIdfaReading(allowIdfaReading)
:noindex:

Sets whether the Adjust SDK can read the device {abbr}`IDFA (ID for Advertisers)`

```{code-block} objc
:name: ios-setAllowIdfaReading-invocation

@property (nonatomic, assign) BOOL allowIdfaReading;
```

:param allowIdfaReading: Whether the Adjust SDK can read the device IDFA
:type allowIdfaReading: BOOL

```{include} /ios/fragments/ADJConfig.md
:start-after: setAllowIdfaReading
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setAllowAdServicesInfoReading

:::{function} setAllowAdServicesInfoReading(allowAdServicesInfoReading)
:noindex:

Sets whether the Adjust SDK can read AdServices framework data.

```{code-block} objc
:name: ios-setAllowAdServicesInfoReading-invocation

@property (nonatomic, assign) BOOL allowAdServicesInfoReading;
```

:param allowAdServicesInfoReading: Whether AdServices framework data is read by the Adjust SDK
:type allowAdServicesInfoReading: BOOL

```{include} /ios/fragments/ADJConfig.md
:start-after: setAllowAdServicesInfoReading
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setAllowiAdInfoReading

:::{function} setAllowiAdInfoReading(allowiAdInfoReading)
:noindex:

```{deprecated} v4.33.4
Sets whether the Adjust SDK can read iAd framework data.
```

```{code-block} objc
:name: ios-setAllowiAdInfoReading-invocation

@property (nonatomic, assign) BOOL allowiAdInfoReading;
```

:param allowiAdInfoReading: Whether iAd framework data is read by the Adjust SDK
:type allowiAdInfoReading: BOOL

```{include} /ios/fragments/ADJConfig.md
:start-after: setAllowiAdInfoReading
:end-before: methodEnd
```

:::

% classMethodEnd
