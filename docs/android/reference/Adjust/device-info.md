# Device information methods

Use these methods to retrieve device information.

% Class method getAdid

::::{function} getAdid
:noindex:

Returns the {abbr}`ADID (Adjust Device ID)` associated with the device

```{code-block} java
:name: android-getAdid-invocation

public static String getAdid()
```

:returns: The device ADID
:rtype: String

% getAdid snippet

:::{tab-set-code}

```{code-block} kotlin
val adid = Adjust.getAdid()
```

```{code-block} java
String adid = Adjust.getAdid();
```

```{code-block} javascript
let adid = Adjust.getAdid();
```

:::

% Snippet end

::::

% Class method end

% Class method getAmazonAdId

::::{function} getAmazonAdId (context)
:noindex:

Returns the {abbr}`Amazon Ad ID (Amazon Advertising ID)` associated with the device

```{code-block} java
:name: android-getAmazonAdId-invocation

public static String getAmazonAdId(final Context context)
```

:param context: The [context](https://developer.android.com/reference/android/content/Context) the method is being called in.
:type context: Context
:returns: The device Amazon Ad ID
:rtype: String

% getAmazonAdId snippet

:::{tab-set-code}

```{code-block} kotlin
val amazonAdId = Adjust.getAmazonAdId(getApplicationContext())
```

```{code-block} java
String amazonAdId = Adjust.getAmazonAdId(getApplicationContext());
```

```{code-block} javascript
let amazonAdId = Adjust.getAmazonAdId();
```

:::

% Snippet end

::::

% Class method end

% Class method getGoogleAdId

::::{function} getGoogleAdId(context, onDeviceIdsRead)
:noindex:

Returns the {abbr}`GPS ADID (Google Play Services Advertising ID)` associated with the device. Must be called in a background thread

```{code-block} java
:name: android-getGoogleAdId-invocation

public static void getGoogleAdId(Context context, OnDeviceIdsRead onDeviceIdRead)
```

:param context: The [context](https://developer.android.com/reference/android/content/Context) the method is being called in.
:type context: Context
:param onDeviceIdsRead: The function called when the SDK receives the ID from the device
:type onDeviceIdsRead: OnDeviceIdsRead

% getGoogleAdId snippet

:::{tab-set-code}

```{code-block} kotlin
Adjust.getGoogleAdId(this, object : OnDeviceIdsRead {
   override fun onGoogleAdIdRead(googleAdId: String) {}
})
```

```{code-block} java
Adjust.getGoogleAdId(this, new OnDeviceIdsRead() {
    @Override
    public void onGoogleAdIdRead(String googleAdId) {}
});
```

```{code-block} javascript
Adjust.getGoogleAdId(function(googleAdId) {
    // ...
});
```

:::

% Snippet end

::::

% Class method end
