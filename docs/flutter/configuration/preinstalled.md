# Record preinstalled app activity

:::{versionadded} v4.23.0
You can use the Adjust SDK to record activity from apps that came preinstalled on a user's device. This enables you to record information from users who didn't download your app from a campaign.
:::

## Default campaign token

Configuring a default campaign enables you to attribute all preinstalls to a predefined campaign token. Adjust records all information against this token until the attribution source changes. To set this up:

1. Create a new campaign link in Adjust Suite.
   
   ```
   https://app.adjust.com/{token}
   ```

2. Copy this token and pass it to the [`defaultTracker` method](#flutter-defaulttracker-invocation) in your app delegate file.

   :::{include} /flutter/reference/AdjustConfig/setup.md
   :start-after: defaultTracker snippet
   :end-before: Snippet end
   :::

3. Build and run your app. If you have logging enabled, you should see a message in your log

   ```
   Default tracker: 'abc123'
   ```
