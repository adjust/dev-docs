# Get device information

The Adjust SDK contains helper methods that return device information. Use these methods to add details to your callbacks and improve your reporting.

## Web ID

To identify web users in Adjust, Web SDK generates a unique `web_uuid` when it tracks the first session. The ID is created per subdomain and per browser. The identifier follows the {abbr}`UUID (Universally Unique Identifier)` format.

Call the [`getWebUUID` method](web-getWebUUID-invocation) to return this information as a **string**.

:::{include} /web/reference/device-info.md
:start-after: getWebUUID snippet
:end-before: Snippet end
:::

