# Set a custom storage namespace

The Adjust SDK creates a storage namespace to store data in by default. You can override this an specify a custom namespace if you want to control where the data ends up.

Any data that the SDK has stored in the default namespace will be moved the custom namespace when it's set.

:::{warning}
If you set a custom namespace this value shouldn't be changed. If you change to another custom namespace, the data won't be moved.
:::

You can set an custom namespace by specifying a `namespace` property in the [`initSdk` method](web-initSdk-invocation).

```{include} /web/fragments/Adjust.md
:start-after: namespace
:end-before: methodEnd
```
