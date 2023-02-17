# Disable the Adjust SDK

The Adjust SDK runs by default when your app is open. You can disable and re-enable the Adjust SDK to pause and resume recording. When you disable the Adjust SDK, it doesn't send any data to Adjust's servers.

You can disable the SDK at any time by calling the [`stop` method](web-stop-invocation).

```{include} /web/fragments/Adjust.md
:start-after: stop
:end-before: methodEnd
```

You can restart the SDK at any time by calling the [`restart` method](web-restart-invocation).

```{include} /web/fragments/Adjust.md
:start-after: restart
:end-before: methodEnd
```

## Example

This example demonstrates how to stop and restart the Adjust SDK using buttons in the UI.

```{code-block} html
<head>
  <!-- Import the Adjust SDK from a CDN -->
</head>

<body>
  <div id="actions">
    <div class="flex-box-row">
      <button type="button" onClick="Adjust.stop();" class="flex-one">Stop</button>
    </div>
    <div class="flex-box-row">
      <button type="button" onClick="Adjust.restart();" class="flex-one">Restart</button>
    </div>
  </div>
</body>
```
