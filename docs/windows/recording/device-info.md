# Get device information

The Adjust SDK contains helper methods that return device information. Use these methods to add details to your callbacks and improve your reporting.

## Adjust device identifier

Adjust generates a unique {abbr}`ADID (Adjust Device ID)` for each device. Call the [`GetAdid` method](#windows-getadid-invocation) to return this ID as a **string**.

:::{include} /windows/reference/Adjust/device-info.md
:start-after: GetAdid snippet
:end-before: Snippet end
:::

## Windows advertising identifier

The Windows {abbr}`ADID (Advertising ID)` is a device-specific identifier for Windows devices. Call the [`GetWindowsAdId` method](#windows-getwindowsadid-invocation) to return this ID as a **string**.

:::{include} /windows/reference/Adjust/device-info.md
:start-after: GetWindowsAdId snippet
:end-before: Snippet end
:::
