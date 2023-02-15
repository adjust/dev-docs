# Recording methods

% classMethod appWillOpenUrl

:::{function} appWillOpenUrl (url)
:noindex:

Instructs the Adjust SDK to search for attribution information in a URL. If the SDK finds valid information, it sends this information to Adjust's servers.

```{code-block} objc
:name: ios-appwillopenurl-invocation

+ (void) appWillOpenUrl: (nonnull NSURL *) url
```

:param url: A URL containing deep link information
:type url: NSURL

```{include} /ios/fragments/Adjust.md
:start-after: appWillOpenUrl
:end-before: methodEnd
```

:::

% classMethodEnd

% classMethod setLinkMeEnabled

:::{function} setLinkMeEnabled (boolean)
:noindex:

```{versionadded} v4.31.0
Toggle support for Adjust's [LinkMe solution](https://help.adjust.com/preview/en/article/linkme) for deep linking.
```

```{code-block} objc
:name: ios-setLinkMeEnabled-invocation

@property (nonatomic, assign) BOOL linkMeEnabled;
```

:param url: A URL containing deep link information
:type url: NSURL

```{include} /ios/fragments/ADJConfig.md
:start-after: setLinkMeEnabled
:end-before: methodEnd
```

:::

% classMethodEnd
