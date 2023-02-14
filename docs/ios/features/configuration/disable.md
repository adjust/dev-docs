# Disable the Adjust SDK

The Adjust SDK runs when your app is open by default. You can disable and re-enable the Adjust SDK to pause and resume recording. When you disable the Adjust SDK, it doesn't send any data to Adjust's servers.

You can enable or disable the SDK at any time by calling the `setEnabled` method with a boolean argument.

:::{important}
You can only call this method after the first session. This setting persists between sessions.
:::

```{include} /ios/fragments/Adjust.md
:start-after: setEnabled
:end-before: methodEnd
```

## Check enabled status

You can check if the Adjust SDK is enabled at any time by calling the `isEnabled` method. This method returns a boolean value.

```{include} /ios/fragments/Adjust.md
:start-after: isEnabled
:end-before: methodEnd
```

## Example

This example demonstrates how to create buttons to enable or disable the SDK. A third button logs the current status of the SDK.

::::{tab-set}
:::{tab-item} Swift
:sync: swift
```{code-block} swift
:caption: ViewControllerSwift.swift

import Adjust
import UIKit

class ViewControllerSwift: UIViewController {
    @IBOutlet weak var btnEnableSDK: UIButton?
    @IBOutlet weak var btnDisableSDK: UIButton?

    @IBAction func btnEnableSDKTapped(_sender: UIButton) {
        Adjust.setEnabled(true);
    }
    
    @IBAction func btnDisableSDKTapped(_sender: UIButton) {
        Adjust.setEnabled(false);
    }
    
    @IBAction func btnIsSDKEnabledTapped(_sender: UIButton) {
        let isSDKEnabled = Adjust.isEnabled();
        if (isSDKEnabled) {
            NSLog("SDK is enabled!");
        } else {
            NSLog("SDK is disabled");
        }
    }
}
```
:::
:::{tab-item} Objective-C
:sync: objc
```{code-block} objc
:caption: ViewControllerObjC.m

#import "Adjust.h"
#import "Constants.h"
#import "ViewControllerObjC.h"

@interface ViewControllerObjC ()

@property (weak, nonatomic) IBOutlet UIButton *btnEnableSdk;
@property (weak, nonatomic) IBOutlet UIButton *btnDisableSdk;
@property (weak, nonatomic) IBOutlet UIButton *btnIsSdkEnabled;

@end

@implementation ViewControllerObjC

- (IBAction)clickEnableSdk:(id)sender {
    [Adjust setEnabled:YES];
}

- (IBAction)clickDisableSdk:(id)sender {
    [Adjust setEnabled:NO];
}

- (IBAction)clickIsSdkEnabled:(id)sender {
    NSString *message;
    if ([Adjust isEnabled]) {
        message = @"SDK is ENABLED!";
    } else {
        message = @"SDK is DISABLED!";
    }

    UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"Is SDK Enabled?"
                                                                   message:message
                                                            preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *defaultAction = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault
                                                          handler:^(UIAlertAction *action) {}];
    [alert addAction:defaultAction];
    [self presentViewController:alert animated:YES completion:nil];
}

@end
```
:::
:::{tab-item} Javascript
:sync: js
```{code-block} html
:caption: WebView.html

<html>
   <body>
      <script>
         setupWebViewJavascriptBridge(function(bridge) {
            let adjustConfig = new AdjustConfig('2fm9gkqubvpc', AdjustConfig.EnvironmentSandbox);
            adjustConfig.setLogLevel(AdjustConfig.LogLevelVerbose);

            Adjust.appDidLaunch(adjustConfig);

            var btnEnableSdk = document.getElementById('btnEnableSdk')
            btnEnableSdk.onclick = function(e) {
               e.preventDefault()
               Adjust.setEnabled(true)
            }

            var btnDisableSdk = document.getElementById('btnDisableSdk')
            btnDisableSdk.onclick = function(e) {
               e.preventDefault()
               Adjust.setEnabled(false)
            }

            var btnIsSdkEnabled = document.getElementById('btnIsSdkEnabled')
            btnIsSdkEnabled.onclick = function(e) {
               e.preventDefault()
               Adjust.isEnabled(function(isEnabled) {
                  alert('Is SDK enabled? ' + isEnabled)
               })
            }
         }
      </script>
      <div id='buttons'>
        <div style="width:300px;height:35px;text-align:center;">
            <button id='btnEnableSdk'>Enable SDK</button>
        </div>
        <div style="width:300px;height:35px;text-align:center;">
            <button id='btnDisableSdk'>Disable SDK</button>
        </div>
        <div style="width:300px;height:35px;text-align:center;">
            <button id='btnIsSdkEnabled'>Is SDK Enabled?</button>
        </div>
      </div>
   </body>
</html>
::::
