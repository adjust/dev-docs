# Get device information

The Adjust SDK contains helper methods that return device information. Use these methods to add details to your callbacks and improve your reporting.

## ID For Advertisers

The {abbr}`IDFA (ID for Advertisers)` is a device-specific identifier for Apple devices. Call the [`getIdfa` method]() to return this ID as a **string**.

```{include} /ios/fragments/Adjust.md
:start-after: idfa
:end-before: methodEnd
```

## Adjust device identifier

Adjust generates a unique {abbr}`ADID (Adjust Device ID)` for each device. Call the [`getAdid` method]() to return this ID as a **string**.

```{include} /ios/fragments/Adjust.md
:start-after: adid
:end-before: methodEnd
```
