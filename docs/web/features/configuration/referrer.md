# Set a referrer

You can set a referrer to trigger an SDK click manually. This enables you to create a preset click ID that you can reuse for attribution purposes.

:::{important}
Call this method as close to initializing the SDK as possible to ensure your referrer is used for attribution.
:::

To set you referrer, call the [`setReferrer` method](web-setReferrer-invocation) and pass your referrer as a URL-encoded **string** argument.

:::{include} /web/reference/config.md
:start-after: setReferrer snippet
:end-before: Snippet end
:::
