# Record preinstalled app activity

You can use the Adjust SDK to record activity from apps that came preinstalled on a user's device by configuring a default campaign token. This enables you to attribute all preinstalls to a single campaign for analysis. Adjust records all information against this token until the attribution source changes. To set this up:

1. Create a new campaign link in [Campaign Lab](https://help.adjust.com/en/suite/article/custom-link-setup).

   ```
   https://app.adjust.com/{token}
   ```

2. Copy this token and pass it to the [`DefaultTracker` method](#windows-setdefaulttracker-invocation) in your app delegate file.

   :::{include} /windows/reference/AdjustConfig/setup.md
   :start-after: DefaultTracker snippet
   :end-before: Snippet end
   :::

3. Build and run your app. If you have logging enabled, you should see a message in your log:

   ```
   Default tracker: 'abc123'.
   ```
