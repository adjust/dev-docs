# Set a default campaign

Configuring a default campaign enables you to attribute all preinstalls to a predefined campaign token. Adjust records all information against this token until the attribution source changes. To set this up:

1. Create a new campaign link in the Adjust Suite.
   
   ```
   https://app.adjust.com/{token}
   ```

2. Pass your campaign token to the [`initSdk` method](web-initSdk-invocation) in the `defaultTracker` argument.

   ::::{tab-set}
   :::{tab-item} Javascript
   ```{code-block} js
   Adjust.initSdk({
   appToken: 'YOUR_APP_TOKEN',
   environment: 'sandbox',
   defaultTracker: '{token}'
   });
   ```
   :::
   ::::
