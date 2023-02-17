# Set log level

The Adjust SDK provides configurable log levels to return different amounts of information. The following log levels are available:

```{list-table}
:header-rows: 1

* - Value
   - Description
* - `verbose`
   - Enable full logging
* - `info`
   - Return information, warnings, and error logs
* - `warning`
   - Return warnings and error logs
* - `error`
   - Return only error logs
* - `none`
   - Disable all logging
```

You can set an external device ID by specifying an `logLevel` property in the [`initSdk` method](web-initSdk-invocation). The SDK defaults to `error` if no value is passed.

```{include} /web/fragments/Adjust.md
:start-after: logLevel
:end-before: methodEnd
```

## Set log output

You can delegate a log output location in your web app to show logs directly on the screen. To do this, specify an HTML selector in the `logOutput` property in the [`initSdk` method](web-initSdk-invocation). The SDK logs will print to this container.

```{include} /web/fragments/Adjust.md
:start-after: logOutput
:end-before: methodEnd
```
