# Get attribution information

When a user interacts with a campaign link, their attribution information updates. This can happen if the user interacts with a [deep link](https://help.adjust.com/en/article/deep-links). The SDK can listen for attribution changes and call a function when it detects an update.

You can set an attribution callback method by specifying an `attributionCallback` function in the [`initSdk` method](web-initSdk-invocation).

```{include} /web/fragments/Adjust.md
:start-after: attributionCallback
:end-before: methodEnd
```

Within your function, you have access to the user's attribution information.

```{include} /web/reference/recording.md
:start-after: interface Attribution
:end-before: interfaceEnd
```

## Get current attribution information

When a user installs your app, Adjust attributes the install to a campaign. The Adjust SDK gives you access to campaign attribution details for your install. To return this information, call the [`getAttribution` method](web-getAttribution-invocation).

```{include} /web/fragments/Adjust.md
:start-after: getAttribution
:end-before: methodEnd
```
