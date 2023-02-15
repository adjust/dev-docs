# Set up session parameters

If you [register a callback URL](https://help.adjust.com/en/article/best-practices-callbacks) in the Adjust dashboard, Adjust sends a GET request to your callback URL when the SDK measures a session.

You can configure callback parameters to your servers. Once you configure parameters on an event, the SDK appends them to your callback URL. You can use this information to analyze your users' in-app behavior with your BI system.

:::{note}
The Adjust SDK merges session callback parameters with event callback parameters. Event callback parameters take priority over session callback parameters. This means that if you add a parameter key to both an event and a session, the SDK sends the event parameter.
:::

Add callback parameters to your event by calling the [`addSessionCallbackParameter` method](ios-addSessionCallbackParameter-invocation) with **string** key-value arguments. You can add multiple parameters by calling this method multiple times.

```{include} /ios/fragments/Adjust.md
:start-after: addSessionCallbackParameter
:end-before: methodEnd
```

You can remove specific session callback parameters if they're no longer required. To do this, pass the parameter key to the [`removeSessionCallbackParameter` method](ios-removeSessionCallbackParameter-invocation).

```{include} /ios/fragments/Adjust.md
:start-after: removeSessionCallbackParameter
:end-before: methodEnd
```

You can remove all session parameters if they're no longer required. To do this, call the [`resetSessionCallbackParameters` method](ios-resetSessionCallbackParameters-invocation).

```{include} /ios/fragments/Adjust.md
:start-after: resetSessionCallbackParameters
:end-before: methodEnd
```

## Session partner parameters

You can send extra information to your network partners by adding [partner parameters](https://help.adjust.com/en/article/advanced-event-setup#receive-custom-data-with-partner-parameters).

Adjust sends partner parameters to [external partners](https://help.adjust.com/en/article/integrated-partners) you've set up. This information is useful for more granular analysis and retargeting purposes. Adjust's servers forward these parameters once you've set them up and enabled them for a partner.

:::{note}
Partner parameters don't appear in raw data by default. You can add the `{partner_parameters}` placeholder to receive them as a single string.
:::

Add partner parameters to your event by calling the [`addSessionPartnerParameter` method](ios-addSessionPartnerParameter-invocation) with **string** key-value arguments. You can add multiple parameters by calling this method multiple times.

```{include} /ios/fragments/Adjust.md
:start-after: addSessionPartnerParameter
:end-before: methodEnd
```

You can remove specific session partner parameters if they're no longer required. To do this, pass the parameter key to the [`removeSessionPartnerParameter` method](ios-removeSessionPartnerParameter-invocation).

```{include} /ios/fragments/Adjust.md
:start-after: removeSessionPartnerParameter
:end-before: methodEnd
```

You can remove all session partner parameters if they're no longer required. To do this, call the [`resetSessionPartnerParameters` method](ios-resetSessionPartnerParameters-invocation).

```{include} /ios/fragments/Adjust.md
:start-after: resetSessionPartnerParameters
:end-before: methodEnd
```

## Delay start

:::{note}
You can delay the startup of the SDK by up to **10 seconds**.
:::

The Adjust SDK starts as soon as your app opens. If you want to send data that's not available at launch in session parameters, you can delay the start of the SDK. To do this, pass the delay time in seconds to the [`setDelayStart` method](ios-setDelayStart-invocation) on your config object.

```{include} /ios/fragments/ADJConfig.md
:start-after: setDelayStart
:end-before: methodEnd
```

After this time has elapsed, the SDK sends the information to Adjust's servers. You can send the information before the timeout by calling the [`sendFirstPackages` method](ios-sendFirstPackages-invocation).

```{include} /ios/fragments/Adjust.md
:start-after: sendFirstPackages
:end-before: methodEnd
```
