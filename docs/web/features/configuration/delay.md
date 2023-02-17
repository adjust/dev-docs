# Delay recording

## Offline mode

:::{important}
The first session always sends data to Adjust's servers even if offline mode is enabled.
:::

The Adjust SDK sends event and session data to Adjust's servers in real time. You can pause the sending of information by putting the SDK in offline mode. In offline mode, the SDK stores all data in the browser's IndexedDB, or in localStorage if IndexedDB isn't supported.

Call the [`switchToOfflineMode` method](web-switchToOfflineMode-invocation) to enable offline mode.

```{include} /web/fragments/Adjust.md
:start-after: switchToOfflineMode
:end-before: methodEnd
```

The SDK sends all saved information to Adjust's servers when you disable offline mode. To do this, call the [`switchBackToOnlineMode` method](web-switchBackToOnlineMode-invocation)

```{include} /web/fragments/Adjust.md
:start-after: switchBackToOnlineMode
:end-before: methodEnd
```
