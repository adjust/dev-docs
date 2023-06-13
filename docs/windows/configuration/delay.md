# Delay recording

## Offline mode

:::{important}
The offline mode setting isn't remembered between sessions. Offline mode is disabled at the start of each new session.
:::

The Adjust SDK sends event and session data to Adjust's servers in real time. You can pause the sending of information by putting the SDK in offline mode. In offline mode the SDK stores all data in a local file on the device. The SDK sends this information to Adjust's servers when you disable offline mode.

Your config object contains a boolean `IsOffline` property that controls this behavior. You can update this property at any time by calling the [`SetOfflineMode` method](#windows-setofflinemode-invocation) with a boolean argument. The SDK sends all saved information to Adjust's servers when you deactivate offline mode.

:::{include} /windows/reference/Adjust/config.md
:start-after: SetOfflineMode snippet
:end-before: Snippet end
:::

## Event buffering

The Adjust SDK sends event information as soon as a user triggers an event in your app. You can send event information on a schedule by enabling event buffering. Event buffering stores events in a local buffer on the device and sends all requests once per minute.

Your config object contains a boolean `EventBufferingEnabled` property that controls this behavior. You can set this property by calling the [`EventBufferingEnabled` method](#windows-eventbufferingenabled-invocation) on your config object with a boolean argument.

:::{include} /windows/reference/AdjustConfig/setup.md
:start-after: EventBufferingEnabled snippet
:end-before: Snippet end
:::
