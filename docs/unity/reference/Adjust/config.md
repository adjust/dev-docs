# Config methods

% classMethod sendFirstPackages

::::{function} sendFirstPackages ()
:noindex:

:::{note}
This method has an effect only if you delay the start of the Adjust SDK.
:::

The Adjust SDK sends information to Adjust's servers as soon as it starts. If you delay the start of the SDK, you can use this method to send packages before the delay ends.

```{code-block} cs
:name: unity-sendFirstPackages-invocation

public static void sendFirstPackages()
```

```{include} /unity/fragments/Adjust.md
:start-after: sendFirstPackages
:end-before: methodEnd
```

::::

% classMethodEnd
