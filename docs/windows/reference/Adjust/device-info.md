# Device information methods

Use these methods to retrieve device information.

% Class method GetAdid

::::{function} GetAdid
:noindex:

Returns the {abbr}`ADID (Adjust Device ID)` associated with the device

{#windows-getadid-invocation}

```c#
public static string GetAdid()
```

:returns: The device ADID
:rtype: String

% GetAdid snippet

:::{tab-set-code}

```c#
string adid = Adjust.GetAdid();
```

:::

% Snippet end

::::

% Class method end

% Class method GetWindowsAdId

::::{function} GetWindowsAdId
:noindex:

Returns the Windows {abbr}`ADID (Advertising ID)` associated with the device

{#windows-getwindowsadid-invocation}

```c#
public static string GetWindowsAdId()
```

:returns: The device Windows ADID
:rtype: String

% GetWindowsAdId snippet

:::{tab-set-code}

```c#
var windowsAdid = Adjust.GetWindowsAdId();
```

:::

% Snippet end

::::

% Class method end
