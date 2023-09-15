# Batch.com SDK integration

You can integrate the Adjust SDK with Batch.com events by following one of the methods below.

## Before you begin

To use this feature, you first need to download and set up the Adjust Android SDK. 

To integrate Adjust with the Batch.com SDK, you need to send attribution to the Batch.com SDK. You should send this information after receiving a response from the Adjust servers. To do this, follow the steps in the [attribution callback guide](https://help.adjust.com/en/article/attribution-callbacks-android-sdk).

## Examples

You can set the callback method like this:

:::{tab-set-code}

```Java
AdjustConfig config = new AdjustConfig(this, appToken, environment);

config.setOnAttributionChangedListener(new OnAttributionChangedListener() {
    @Override
    public void onAttributionChanged(AdjustAttribution attribution) {
        // Initiate Batch user editor to set new attributes.
        BatchUserDataEditor editor = Batch.User.editor();

        if (attribution.network != null) {
            editor.setAttribute("adjust_network", attribution.network);
        }
        if (attribution.campaign != null) {
            editor.setAttribute("adjust_campaign", attribution.campaign);
        }
        if (attribution.adgroup != null) {
            editor.setAttribute("adjust_adgroup", attribution.adgroup);
        }
        if (attribution.creative != null) {
            editor.setAttribute("adjust_creative", attribution.creative);
        }

        // Send new attributes to Batch servers.
        editor.save();
    }
});

Adjust.onCreate(config);
```

```Swift
func adjustAttributionChanged(_ attribution: ADJAttribution?) {
     // initiate Batch user editor to set new attributes
     let editor = BatchUser.editor()
     
     if attribution?.network != nil {
         editor?.setAttribute(attribution?.network, forKey: "adjust_network")
     }
     if attribution?.campaign != nil {
         editor?.setAttribute(attribution?.campaign, forKey: "adjust_campaign")
     }
     if attribution?.adgroup != nil {
         editor?.setAttribute(attribution?.campaign, forKey: "adjust_adgroup")
     }
     if attribution?.creative != nil {
         editor?.setAttribute(attribution?.creative, forKey: "adjust_creative")
     }
     
     // send new attribute to Batch servers
     editor.save()
}
```
:::