# Set external device identifiers

:::{versionadded} 4.20.0
Contact your Adjust representative to get started with external device IDs.
:::

```{include} /fragments/feature-intros/external-device-id.md
```

## Set external device identifier

:::{important}
You must set your external device ID **before** initializing the Adjust SDK.
:::

```{include} /fragments/method-intros/setexternaldeviceid.md
```

```{include} /fragments/ios/snippets/setexternaldeviceid.md
```

If you want to use the external device ID in your business analytics, you can pass it as a session callback parameter. 

:::{seealso}
See Session parameters for more information.
:::

You can import existing external device IDs into Adjust. This ensures that the Adjust servers match future data to your existing device records. Contact your Adjust representative for more information.
