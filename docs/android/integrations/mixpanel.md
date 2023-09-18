# Mixpanel SDK integration

Before using this integration, read through the [conditions for usage](https://github.com/adjust/sdks/blob/master/doc/attribution-data.md) of some of your data.

You can integrate the Adjust SDK with the Mixpanel SDK by following the instructions in this guide.

## Before you begin

To use this feature, you first need to download and set up the Adjust Android SDK. 

## Guide

The Mixpanel API enables you to register "super properties." These properties can be sent with all activities. See [Mixpanel's documentation](https://docs.mixpanel.com/docs/tracking/reference/ios#super-properties) for more information.

To integrate the Adjust SDK with the Mixpanel SDK, you need to register the "super properties." 

You should send this information after receiving a response from Adjust's servers. To do this, follow the steps in the attribution callback guide for Android:

- [Attribution callbacks](https://help.adjust.com/en/article/attribution-callbacks-android-sdk)

## Examples

Modify your callback method to use the Mixpanel API like this:

:::{tab-set-code}

```Java
public class YourApplicationClass extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        // Configure Adjust.
        AdjustConfig config = new AdjustConfig(this, appToken, environment);

        config.setOnAttributionChangedListener(new OnAttributionChangedListener() {
            @Override
            public void onAttributionChanged(AdjustAttribution attribution) {
                MixpanelAPI mixpanel = MixpanelAPI.getInstance(context, MIXPANEL_TOKEN);

                // The Adjust properties will be sent with all future track calls.
                JSONObject props = new JSONObject();
                insertJsonProperty(props, "[Adjust]Network", attribution.network);
                insertJsonProperty(props, "[Adjust]Campaign", attribution.campaign);
                insertJsonProperty(props, "[Adjust]Adgroup", attribution.adgroup);
                insertJsonProperty(props, "[Adjust]Creative", attribution.creative);

                if (props.length() > 0) {
                    mixpanel.registerSuperProperties(props);
                }
            }

            private void insertJsonProperty(JSONObject props, String name, String value) {
                try {
                    if (value != null) {
                        props.put(name, value);
                    }
                } catch(JSONException e) { }
            }
        });

        Adjust.onCreate(config);
    }
}
```

```Swift
func adjustAttributionChanged(_ attribution: ADJAttribution?) {
    let mixpanel = Mixpanel.sharedInstance()

    // The adjust properties will be sent
    // with all future track calls.
    if attribution?.network != nil {
        if let network = attribution?.network {
            mixpanel?.registerSuperProperties([
                "[Adjust]Network": network
            ])
        }
    }
    if attribution?.campaign != nil {
        if let campaign = attribution?.campaign {
            mixpanel?.registerSuperProperties([
                "[Adjust]Campaign": campaign
            ])
        }
    }
    if attribution?.adgroup != nil {
        if let adgroup = attribution?.adgroup {
            mixpanel?.registerSuperProperties([
                "[Adjust]Adgroup": adgroup
            ])
        }
    }
    if attribution?.creative != nil {
        if let creative = attribution?.creative {
            mixpanel?.registerSuperProperties([
                "[Adjust]Creative": creative
            ])
        }
    }
}
```
:::