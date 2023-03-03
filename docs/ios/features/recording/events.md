# Record events

You can associate your [Adjust event tokens](hc:/basic-event-setup#create-an-event-token) to actions in your app to record them. To record an event:

* Create a new Adjust event instance and pass your event token as a string argument.
* Call the [`trackEvent` method](#ios-trackevent-invocation) with your event instance as an argument.

:::{include} /ios/reference/Adjust/recording.md
:start-after: trackEvent snippet
:end-before: Snippet end
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button.

::::{tab-set}
:::{tab-item} SWIFT
:sync: tabcode-swift

```swift
import Adjust
import UIKit

class ViewControllerSwift: UIViewController {
   @IBOutlet weak var btnRecordEventSimple: UIButton?

   @IBAction func btnRecordEventSimple(_sender: UIButton) {
      let event = ADJEvent(eventToken: "g3mfiw");
      Adjust.trackEvent(event);
   }
}
```

:::
:::{tab-item} OBJECTIVE-C
:sync: tabcode-objective-c

```objective-c
#import "Adjust.h"
#import "Constants.h"
#import "ViewControllerObjC.h"

@interface ViewControllerObjC ()

@property (weak, nonatomic) IBOutlet UIButton *btnRecordSimpleEvent;

@end

@implementation ViewControllerObjC

- (IBAction)clickRecordSimpleEvent:(UIButton *)sender {
    ADJEvent *event = [ADJEvent eventWithEventToken:@"g3mfiw"];

    [Adjust trackEvent:event];
}

@end
```
:::
:::{tab-item} JAVASCRIPT
:sync: tabcode-javascript

```html
<html>
   <body>
      <script>
         setupWebViewJavascriptBridge(function(bridge) {
            let adjustConfig = new AdjustConfig('2fm9gkqubvpc', AdjustConfig.EnvironmentSandbox);
            adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);

            Adjust.appDidLaunch(adjustConfig);

            var btnRecordSimpleEvent = document.getElementById('btnRecordSimpleEvent')
            btnRecordSimpleEvent.onclick = function(e) {
                  e.preventDefault()
                  var adjustEvent = new AdjustEvent('g3mfiw')
                  Adjust.trackEvent(adjustEvent)
            }
         }
      </script>
      <div id='buttons'>
        <div style="width:300px;height:35px;text-align:center;">
            <button id='btnRecordSimpleEvent'>Record simple event</button>
        </div>
      </div>
   </body>
</html>
```

:::
::::
:::::

## Record event revenue

You can record revenue associated with an event by setting the revenue and currency properties on your event instance. Use this feature to record revenue-generating actions in your app.

To set these properties, call the [`setRevenue` method](#ios-adjevent-setrevenue-invocation) and pass the following arguments:

* The `revenue` amount (**number**)
* The `currency` code (**string**)

You must format the currency code as a 3 character string that follows the [ISO 4217 standard](https://www.iban.com/currency-codes). Adjust's servers convert the reported revenue to your chosen reporting currency. 

:::{seealso}
Check the guide to [tracking purchases in different currencies](hc:/currency-conversion) for more information.
:::

:::{include} /ios/reference/ADJEvent.md
:start-after: setRevenue snippet
:end-before: Snippet end
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The function sets the `revenue` property of this event to _`0.25`_ and the `currency` property to _`EUR`_.

::::{tab-set}
:::{tab-item} SWIFT
:sync: tabcode-swift

```swift
import Adjust
import UIKit

class ViewControllerSwift: UIViewController {
   @IBOutlet weak var btnRecordEventRevenue: UIButton?

   @IBAction func btnRecordEventRevenue(_sender: UIButton) {
      let event = ADJEvent(eventToken: "g3mfiw");
      event?.setRevenue(0.25, currency: "EUR");
      Adjust.trackEvent(event);
   }
}
```

:::
:::{tab-item} OBJECTIVE-C
:sync: tabcode-objective-c

```objective-c
#import "Adjust.h"
#import "Constants.h"
#import "ViewControllerObjC.h"

@interface ViewControllerObjC ()

@property (weak, nonatomic) IBOutlet UIButton *btnRecordRevenueEvent;

@end

@implementation ViewControllerObjC

- (IBAction)clickRecordRevenueEvent:(UIButton *)sender {
   ADJEvent *event = [ADJEvent eventWithEventToken:@"g3mfiw"];
   [event setRevenue:0.25 currency:@"EUR"];
   [Adjust trackEvent:event];
}

@end
```

:::
:::{tab-item} JAVASCRIPT
:sync: tabcode-javascript
```html
<html>
   <body>
      <script>
         setupWebViewJavascriptBridge(function(bridge) {
            let adjustConfig = new AdjustConfig('2fm9gkqubvpc', AdjustConfig.EnvironmentSandbox);
            adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);

            Adjust.appDidLaunch(adjustConfig);

            var btnRecordRevenueEvent = document.getElementById('btnRecordRevenueEvent')
            btnRecordRevenueEvent.onclick = function(e) {
                  e.preventDefault()
                  var adjustEvent = new AdjustEvent('g3mfiw')
                  adjustEvent.setRevenue(0.25, 'EUR')
                  Adjust.trackEvent(adjustEvent)
            }
         }
      </script>
      <div id='buttons'>
        <div style="width:300px;height:35px;text-align:center;">
            <button id='btnRecordRevenueEvent'>Record revenue event</button>
        </div>
      </div>
   </body>
</html>
```

:::
::::
:::::

## Unique events

You can pass an optional identifier to avoid recording duplicate events. The SDK stores the last ten identifiers and skips revenue events with duplicate transaction IDs.

To set the identifier, call the [`setTransactionId` method](#ios-settransactionid-invocation) and pass your transaction ID as a **string** argument.

:::{include} /ios/reference/ADJEvent.md
:start-after: setTransactionId snippet
:end-before: Snippet end
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The function sets the `uniqueId` to {{ uniqueEventId }} using the [`setTransactionId` method](#ios-settransactionid-invocation).

::::{tab-set}
:::{tab-item} SWIFT
:sync: tabcode-swift

```swift
import Adjust
import UIKit

class ViewControllerSwift: UIViewController {
   @IBOutlet weak var btnRecordEventUnique: UIButton?

   @IBAction func btnRecordEventUnique(_sender: UIButton) {
      let event = ADJEvent(eventToken: "g3mfiw");
      let uniqueId = "5e85484b-1ebc-4141-aab7-25b869e54c49";
      event?.setTransactionId(uniqueId);
      Adjust.trackEvent(event);
   }
}
```

:::
:::{tab-item} OBJECTIVE-C
:sync: tabcode-objective-c

```objective-c
#import "Adjust.h"
#import "Constants.h"
#import "ViewControllerObjC.h"

@interface ViewControllerObjC ()

@property (weak, nonatomic) IBOutlet UIButton *btnRecordUniqueEvent;

@end

@implementation ViewControllerObjC

- (IBAction)clickRecordUniqueEvent:(UIButton *)sender {
   ADJEvent *event = [ADJEvent eventWithEventToken:@"g3mfiw"];
   [event setTransactionId:@"5e85484b-1ebc-4141-aab7-25b869e54c49"];
   [Adjust trackEvent:event];
}

@end
```

:::
:::{tab-item} JAVASCRIPT
:sync: tabcode-javascript

```html
<html>
   <body>
      <script>
         setupWebViewJavascriptBridge(function(bridge) {
            let adjustConfig = new AdjustConfig('2fm9gkqubvpc', AdjustConfig.EnvironmentSandbox);
            adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);

            Adjust.appDidLaunch(adjustConfig);

            var btnRecordUniqueEvent = document.getElementById('btnRecordUniqueEvent')
            btnRecordUniqueEvent.onclick = function(e) {
                  e.preventDefault()
                  var adjustEvent = new AdjustEvent('g3mfiw');
                  let uniqueId = "5e85484b-1ebc-4141-aab7-25b869e54c49";
                  adjustEvent.setTransactionId(uniqueId);
                  Adjust.trackEvent(adjustEvent);
            }
         }
      </script>
      <div id='buttons'>
        <div style="width:300px;height:35px;text-align:center;">
            <button id='btnRecordUniqueEvent'>Record unique event</button>
        </div>
      </div>
   </body>
</html>
```

:::
::::
:::::

## Add callback parameters

If you [register a callback URL](hc:/set-up-callbacks) in the Adjust dashboard, the SDK sends a GET request to your callback URL when it records an event.

You can configure callback parameters to send to your servers. Once you configure parameters on an event, the SDK appends them to your [callback URL](hc:/raw-data-exports). You can use this information to analyze your users' in-app behavior with your BI system.

Add callback parameters to your event by calling the [`addCallbackParameter` method](#ios-adjevent-addcallbackparameter-invocation) with **string** key-value arguments. You can add multiple parameters by calling this method multiple times.

:::{include} /ios/reference/ADJEvent.md
:start-after: addCallbackParameter snippet
:end-before: Snippet end
:::

The Adjust SDK measures the event and sends a request to your URL with the callback parameters. For example, if you register the URL `https://www.mydomain.com/callback`, your callback looks like this:

```
https://www.mydomain.com/callback?key=value&foo=bar
```

:::{note}
Adjust doesn't store your custom callback parameters. Custom parameters are only appended to your callback URL.
:::

If you're using CSV uploads, make sure to add the parameters to your CSV definition.

Adjust supports many placeholders which you can use to pass information from the SDK to your URL. For example, the `{idfa}` placeholder for iOS and the `{gps_adid}` placeholder for Android. The `{publisher_parameter}` placeholder presents all callback parameters in a single string.

:::{seealso}
You can read more about using URL callbacks, including a full list of available values, in the [callbacks guide](hc:/callbacks).
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The following callback parameters are added:

* The `event_token`
* The `revenue_amount` generated by the event

The resulting callback URL looks like this:

```
http://www.mydomain.com/callback?event_token=g3mfiw&revenue_amount=0.05
```

::::{tab-set}
:::{tab-item} SWIFT
:sync: tabcode-swift

```swift
import Adjust
import UIKit

class ViewControllerSwift: UIViewController {
   @IBOutlet weak var btnRecordEventCallbacks: UIButton?

   @IBAction func btnRecordEventCallbacks(_sender: UIButton) {
      let event = ADJEvent(eventToken: "g3mfiw");
      event?.addCallbackParameter("event_token", value: "g3mfiw")
      event?.addCallbackParameter("revenue_amount", value: "0.05")
      Adjust.trackEvent(event);
   }
}
```

:::
:::{tab-item} OBJECTIVE-C
:sync: tabcode-objective-c

```objective-c
:caption: ViewControllerObjC.m

#import "Adjust.h"
#import "Constants.h"
#import "ViewControllerObjC.h"

@interface ViewControllerObjC ()

@property (weak, nonatomic) IBOutlet UIButton *btnRecordCallbackEvent;

@end

@implementation ViewControllerObjC

- (IBAction)clickRecordCallbackEvent:(UIButton *)sender {
   ADJEvent *event = [ADJEvent eventWithEventToken:@"g3mfiw"];
   [event addCallbackParameter:@"event_token" value:@"g3mfiw"];
   [event addCallbackParameter:@"revenue_amount" value:@"0.05"];
   [Adjust trackEvent:event];
}

@end
```

:::
:::{tab-item} JAVASCRIPT
:sync: tabcode-javascript

```html
<html>
   <body>
      <script>
         setupWebViewJavascriptBridge(function(bridge) {
            let adjustConfig = new AdjustConfig('2fm9gkqubvpc', AdjustConfig.EnvironmentSandbox);
            adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);

            Adjust.appDidLaunch(adjustConfig);

            var btnRecordCallbackEvent = document.getElementById('btnRecordCallbackEvent')
            btnRecordCallbackEvent.onclick = function(e) {
                  e.preventDefault()
                  var adjustEvent = new AdjustEvent('g3mfiw');
                  adjustEvent.addCallbackParameter('event_token', 'g3mfiw');
                  adjustEvent.addCallbackParameter('revenue_amount', '0.05');
                  Adjust.trackEvent(adjustEvent);
            }
         }
      </script>
      <div id='buttons'>
        <div style="width:300px;height:35px;text-align:center;">
            <button id='btnRecordCallbackEvent'>Record event with callback parameters</button>
        </div>
      </div>
   </body>
</html>
```
:::
::::
:::::

## Add partner parameters

You can send extra information to your network partners by adding [partner parameters](hc:/advanced-event-setup#receive-custom-data-with-partner-parameters).

Adjust sends partner parameters to [external partners](hc:/integrated-partners) you have set up. This information is useful for more granular analysis and retargeting purposes. Adjust's servers forward these parameters once you have set them up and enabled them for a partner.

:::{note}
Partner parameters don't appear in raw data by default. You can add the `{partner_parameters}` placeholder to receive them as a single string.
:::

Add partner parameters to your event by calling the [`addPartnerParameter` method](#ios-adjevent-addpartnerparameter-invocation) with **string** key-value arguments. You can add multiple parameters by calling this method multiple times.

:::{include} /ios/reference/ADJEvent.md
:start-after: addPartnerParameter snippet
:end-before: Snippet end
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The following partner parameters are added:

* The `product_id` of the associated product
* The `user_id` of the user who triggered the event

::::{tab-set}
:::{tab-item} SWIFT
:sync: tabcode-swift

```swift
import Adjust
import UIKit

class ViewControllerSwift: UIViewController {
   @IBOutlet weak var btnRecordEventPartnerParams: UIButton?

   @IBAction func btnRecordEventPartnerParams(_sender: UIButton) {
      let event = ADJEvent(eventToken: "g3mfiw");
      event?.addPartnerParameter("product_id", value: "29")
      event?.addPartnerParameter("user_id", value: "835")
      Adjust.trackEvent(event);
   }
}
```

:::
:::{tab-item} OBJECTIVE-C
:sync: tabcode-objective-c

```objective-c
#import "Adjust.h"
#import "Constants.h"
#import "ViewControllerObjC.h"

@interface ViewControllerObjC ()

@property (weak, nonatomic) IBOutlet UIButton *btnRecordPartnerParamsEvent;

@end

@implementation ViewControllerObjC

- (IBAction)clickRecordPartnerParamsEvent:(UIButton *)sender {
   ADJEvent *event = [ADJEvent eventWithEventToken:@"g3mfiw"];
   [event addPartnerParameter:@"product_id" value:@"29"];
   [event addPartnerParameter:@"user_id" value:@"835"];
   [Adjust trackEvent:event];
}

@end
```

:::
:::{tab-item} JAVASCRIPT
:sync: tabcode-javascript

```html
<html>
   <body>
      <script>
         setupWebViewJavascriptBridge(function(bridge) {
            let adjustConfig = new AdjustConfig('2fm9gkqubvpc', AdjustConfig.EnvironmentSandbox);
            adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);

            Adjust.appDidLaunch(adjustConfig);

            var btnRecordPartnerParamsEvent = document.getElementById('btnRecordPartnerParamsEvent')
            btnRecordPartnerParamsEvent.onclick = function(e) {
                  e.preventDefault()
                  var adjustEvent = new AdjustEvent('g3mfiw');
                  adjustEvent.addPartnerParameter('product_id', '29');
                  adjustEvent.addPartnerParameter('user_id', '835');
                  Adjust.trackEvent(adjustEvent);
            }
         }
      </script>
      <div id='buttons'>
        <div style="width:300px;height:35px;text-align:center;">
            <button id='btnRecordPartnerParamsEvent'>Record event with partner parameters</button>
        </div>
      </div>
   </body>
</html>
```
:::
::::
:::::

## Add a callback identifier

You can add a custom string identifier to each event you want to measure. Adjust's servers can report on this identifier in event callbacks. This enables you to keep track of which events have been successfully measured.

Set up this identifier by calling the [`setCallbackId` method](#ios-setcallbackid-invocation) with your ID as a **string** argument.

:::{include} /ios/reference/ADJEvent.md
:start-after: setCallbackId snippet
:end-before: Snippet end
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. In this example, the `callbackId` is set to {{ callbackId }}. 

::::{tab-set}
:::{tab-item} SWIFT
:sync: tabcode-swift

```swift
import Adjust
import UIKit

class ViewControllerSwift: UIViewController {
   @IBOutlet weak var btnRecordEventCallbackId: UIButton?

   @IBAction func btnRecordEventCallbackId(_sender: UIButton) {
      let event = ADJEvent(eventToken: "g3mfiw");
      event?.setCallbackId("f2e728d8-271b-49ab-80ea-27830a215147")
      Adjust.trackEvent(event);
   }
}
```

:::
:::{tab-item} OBJECTIVE-C
:sync: tabcode-objective-c

```objective-c
#import "Adjust.h"
#import "Constants.h"
#import "ViewControllerObjC.h"

@interface ViewControllerObjC ()

@property (weak, nonatomic) IBOutlet UIButton *btnRecordCallbackIdEvent;

@end

@implementation ViewControllerObjC

- (IBAction)clickRecordCallbackIdEvent:(UIButton *)sender {
   ADJEvent *event = [ADJEvent eventWithEventToken:@"g3mfiw"];
   [event setCallbackId:@"f2e728d8-271b-49ab-80ea-27830a215147"];
   [Adjust trackEvent:event];
}

@end
```

:::
:::{tab-item} JAVASCRIPT
:sync: tabcode-javascript

```html
<html>
   <body>
      <script>
         setupWebViewJavascriptBridge(function(bridge) {
            let adjustConfig = new AdjustConfig('2fm9gkqubvpc', AdjustConfig.EnvironmentSandbox);
            adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);

            Adjust.appDidLaunch(adjustConfig);

            var btnRecordCallbackIdEvent = document.getElementById('btnRecordCallbackIdEvent')
            btnRecordCallbackIdEvent.onclick = function(e) {
                  e.preventDefault()
                  var adjustEvent = new AdjustEvent('g3mfiw');
                  adjustEvent.setCallbackId('f2e728d8-271b-49ab-80ea-27830a215147');
                  Adjust.trackEvent(adjustEvent);
            }
         }
      </script>
      <div id='buttons'>
        <div style="width:300px;height:35px;text-align:center;">
            <button id='btnRecordCallbackIdEvent'>Record event with callback ID</button>
        </div>
      </div>
   </body>
</html>
```
:::
::::
:::::
