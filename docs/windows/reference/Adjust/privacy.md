# Privacy methods

Use these methods to handle user privacy in your app.

% Class method GdprForgetMe

::::{function} GdprForgetMe
:noindex:

Send an {abbr}`RTBF (Right To Be Forgotten)` request to Adjust's servers. This erases all information about the user for the source app. The SDK stops sending requests for the user.

{#windows-gdprforgetme-invocation}

```c#
public static void GdprForgetMe()
```

% GdprForgetMe snippet

:::{tab-set-code}

```c#
Adjust.GdprForgetMe();
```

:::

% Snippet end

::::

% Class method end
