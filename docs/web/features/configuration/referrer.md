# Set a referrer

You can set a referrer to trigger an SDK click with a custom click ID when the SDK starts. The SDK sends your custom click ID to Adjust's servers for attrtibution purposes.

:::{important}
Call this method as close to initializing the SDK as possible to ensure your referrer is used for attribution.
:::

To set your referrer, call the [`setReferrer` method](web-setReferrer-invocation) and pass your referrer as a URL-encoded **string** argument.

:::{include} /web/reference/config.md
:start-after: setReferrer snippet
:end-before: Snippet end
:::
