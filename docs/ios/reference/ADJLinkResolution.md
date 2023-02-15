# ADJLinkResolution class

A helper class that assists with resolution of links which wrap Adjust deep links.

```{code-block} objc
@interface ADJLinkResolution : NSObject
```

% classMethod resolveLinkWithUrl

:::{function} resolveLinkWithUrl (url)
:noindex:

```{versionadded} v4.29.2
Enables the Adjust SDK to follow redirects to resolve email campaign links. This method follows up to 10 redirects and returns either the final domain or the 10th domain returned depending on which comes first.
```

```{code-block} objc
:name: ios-resolveLinkWithUrl-invocation

+ (void)resolveLinkWithUrl:(nonnull NSURL *)url
     resolveUrlSuffixArray:(nullable NSArray<NSString *> *)resolveUrlSuffixArray
                  callback:(nonnull void (^)(NSURL *_Nullable resolvedLink))callback;
```

:param url: A URL containing deep link information
:type url: NSURL
:param resolveUrlSuffixArray: The custom domains of the configured campaigns that need to be resolved.
:type resolveUrlSuffixArray: NSArray<NSString>
:param callback: The callback that will contain the final URL.
:type callback: Void

```{include} /ios/fragments/ADJLinkResolution.md
:start-after: resolveLinkWithUrl
:end-before: methodEnd
```

:::

% classMethodEnd
