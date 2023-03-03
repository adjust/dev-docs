# Get device information

The Adjust SDK contains helper methods that return device information. Use these methods to add details to your callbacks and improve your reporting.

## ID For Advertisers

The {abbr}`IDFA (ID for Advertisers)` is a device-specific identifier for Apple devices. Call the [`idfa` method](#ios-idfa-invocation) to return this ID as a **string**.

:::{include} /ios/reference/Adjust/device-info.md
:start-after: idfa snippet
:end-before: Snippet end
:::

## Adjust device identifier

Adjust generates a unique {abbr}`ADID (Adjust Device ID)` for each device. Call the [`adid` method](#ios-adid-invocation) to return this ID as a **string**.

:::{include} /ios/reference/Adjust/device-info.md
:start-after: adid snippet
:end-before: Snippet end
:::
