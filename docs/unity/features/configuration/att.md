# Set up App Tracking Transparency

```{versionadded} 4.26.0
```

```{include} /fragments/feature-intros/att-framework.md
```

:::{dropdown} Authorization statuses

```{include} /fragments/data/att-auth-statuses.md
```

:::

## App-tracking authorization wrapper

```{include} /fragments/feature-intros/att-wrapper.md
```

You must specify text content for the tracking request dialog. You can add this to your project in two ways: 

1. Add your text to the {guilabel}`User Tracking Description` field in the Adjust prefab.
2. Add your text to the `NSUserTrackingUsageDescription` key in your {file}`Info.plist` file.

```{include} /fragments/callouts/att-prompt-tip.md
```

```{include} /fragments/unity/snippets/requesttrackingauthorizationwithcompletionhandler.md
```

:::::{dropdown} Example

```{include} /fragments/example-intros/requesttrackingauthorizationwithcompletionhandler.md
```

::::{tab-set}

:::{tab-item} C#

```{code-block} cs
Adjust.requestTrackingAuthorizationWithCompletionHandler((status) =>
{
    switch (status)
    {
        case 0:
            Debug.Log("The user has not responded to the access prompt yet.");
            break;
        case 1:
            Debug.Log("Access to app-related data is blocked at the device level.");
            break;
        case 2:
            Debug.Log("The user has denied access to app-related data for device tracking.");
            break;
        case 3:
            Debug.Log("The user has approved access to app-related data for device tracking.");
            break;
    }
});
```

:::

::::

:::::

## Get current authorisation status

```{include} /fragments/method-intros/getapptrackingauthorizationstatus.md
```

```{include} /fragments/unity/snippets/getapptrackingauthorizationstatus.md
```

:::::{dropdown} Example

```{include} /fragments/example-intros/getapptrackingauthorizationstatus.md
```

::::{tab-set}

:::{tab-item} C#


```{code-block} cs
string authorizationStatus = Convert.ToString(Adjust.getAppTrackingAuthorizationStatus());
Adjust.addSessionPartnerParameter("status", authorizationStatus);
```

:::

::::

:::::

## Check for authorization status changes

```{include} /fragments/method-intros/checkfornewattstatus.md
```

```{include} /fragments/unity/snippets/checkfornewattstatus.md
```
