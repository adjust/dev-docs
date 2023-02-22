# Set up global parameters

You can send additional information from the SDK with each session and event by registering global callback and partner parameters.

## Global callback parameters

If you [register a callback URL](https://help.adjust.com/en/article/set-up-callbacks
) in the Adjust dashboard, Adjust sends a GET request to your callback URL when the SDK records a session or event.

You can configure global callback parameters to your servers. Once you configure parameters, the SDK appends them to your callback URL. You can use this information to analyze your users' in-app behavior with your BI system.

Add callback parameters to your sessions and events by calling the [`addGlobalCallbackParameters` method](web-addGlobalCallbackParameters-invocation) with an array of **string** key-value pair objects. You can add as many objects to this array as you require.

:::{include} /web/reference/recording.md
:start-after: addGlobalCallbackParameters snippet
:end-before: Snippet end
:::

For the above example, the callback URL looks like this:

```
https://www.mydomain.com/callback?key=value&foo=bar
```

You can remove global callback parameters if they're no longer required. To do this, pass the parameter key to the [`removeGlobalCallbackParameter` method](web-removeGlobalCallbackParameter-invocation).

:::{include} /web/reference/recording.md
:start-after: removeGlobalCallbackParameter snippet
:end-before: Snippet end
:::

You can remove all global callback parameters if they're no longer required. To do this, call the [`clearGlobalCallbackParameters` method](web-clearGlobalCallbackParameters-invocation).

:::{include} /web/reference/recording.md
:start-after: clearGlobalCallbackParameters snippet
:end-before: Snippet end
:::

## Global partner parameters

You can send extra information to your network partners by adding [partner parameters](https://help.adjust.com/en/article/advanced-event-setup#receive-custom-data-with-partner-parameters) to each session and event the Adjust SDK records.

Adjust sends partner parameters to [external partners](https://help.adjust.com/en/article/integrated-partners) you set up. This information is useful for more granular analysis and retargeting purposes. Adjust's servers forward these parameters once you've set them up and enabled them for a partner.

:::{note}
Partner parameters don't appear in raw data by default. You can add the `{partner_parameters}` placeholder to receive them as a single string.
:::

Add partner parameters to your sessions and events by calling the [`addGlobalPartnerParameters` method](web-addGlobalPartnerParameters-invocation) with an array of **string** key-value pair objects. You can add as many objects to this array as you require.

:::{include} /web/reference/recording.md
:start-after: addGlobalPartnerParameters snippet
:end-before: Snippet end
:::

You can remove global partner parameters if they're no longer required. To do this, pass the parameter key to the [`removeGlobalPartnerParameter` method](web-removeGlobalPartnerParameter-invocation).

:::{include} /web/reference/recording.md
:start-after: removeGlobalPartnerParameter snippet
:end-before: Snippet end
:::

You can remove all global partner parameters if they're no longer required. To do this, call the [`clearGlobalPartnerParameters` method](web-clearGlobalPartnerParameters-invocation).

:::{include} /web/reference/recording.md
:start-after: clearGlobalPartnerParameters snippet
:end-before: Snippet end
:::

