---
orphan: true
nosearch: true
---

% resolveLinkWithUrl

::::{tab-set}
:::{tab-item} Swift
:sync: swift

```{code-block} swift
ADJLinkResolution.resolveLink(
    withUrl: url,
    resolveUrlSuffixArray: ["example.com"],
    callback: { resolvedLink in
        Adjust.appWillOpen(resolvedLink)
    })
```
:::
:::{tab-item} Objective-C
:sync: objc

```{code-block} objc
[ADJLinkResolution
    resolveLinkWithUrl:url
    resolveUrlSuffixArray:@[@"example.com"]
    callback:^(NSURL * _Nullable resolvedLink)
    {
        [Adjust appWillOpenUrl:resolvedLink];
    }];
```
:::
::::

% methodEnd
