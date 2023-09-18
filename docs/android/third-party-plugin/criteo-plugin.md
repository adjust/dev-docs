# Criteo

You can integrate the Adjust Android SDK with Criteo events by using the Adjust Criteo plugin.

## Set up your environment

### Maven

If you are using Maven, add the following dependency to your {file}`build.gradle` file:

```
dependencies {
   implementation 'com.adjust.sdk:adjust-android:4.28.2'
   implementation 'com.adjust.sdk:adjust-android-criteo:4.28.2'
}
```

### Add as JAR

You can also add the plugin as a JAR file from the [releases page](https://github.com/adjust/android_sdk/releases).

## Work with Criteo events

Once you have set up your environment, you can start recording Criteo events with the Adjust SDK.

### View listing

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{viewListingEventToken}"];

NSArray *productIds = @[@"productId1", @"productId2", @"product3"];

[ADJCriteo injectViewListingIntoEvent:event productIds:productIds];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: "{viewListingEventToken}")

let productIds = ["productId1", "productId2", "product3"]

ADJCriteo.injectViewListing(into: event, productIds: productIds)

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustEvent event = new AdjustEvent("{viewListingEventToken}");
List<String> productIds = Arrays.asList("productId1", "productId2", "productId3");
AdjustCriteo.injectViewListingIntoEvent(event, productIds);
Adjust.trackEvent(event);
```

:::

### View product

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{viewProductEventToken}"];

[ADJCriteo injectViewProductIntoEvent:event productId:@"productId1"];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: "{viewProductEventToken}")

ADJCriteo.injectViewProduct(into: event, productId: "productId1")

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustEvent event = new AdjustEvent("{viewProductEventToken}");
AdjustCriteo.injectViewProductIntoEvent(event, "productId1");
Adjust.trackEvent(event);
```

:::

### Cart

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{cartEventToken}"];

ADJCriteoProduct *product1 = [ADJCriteoProduct productWithId:@"productId1" price:100.0 quantity:1];
ADJCriteoProduct *product2 = [ADJCriteoProduct productWithId:@"productId2" price:77.7 quantity:3];
ADJCriteoProduct *product3 = [ADJCriteoProduct productWithId:@"productId3" price:50 quantity:2];
NSArray *products = @[product1, product2, product3];

[ADJCriteo injectCartIntoEvent:event products:products];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: "{cartEventToken}")

let product1 = ADJCriteoProduct(id: "productId1", price: 100.0, quantity: 1)
let product2 = ADJCriteoProduct(id: "productId2", price: 77.7, quantity: 3)
let product3 = ADJCriteoProduct(id: "productId3", price: 50, quantity: 2)
let products = [product1, product2, product3]

ADJCriteo.injectCart(into: event, products: products)

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustEvent event = new AdjustEvent("{cartEventToken}");
CriteoProduct product1 = new CriteoProduct(100, 1, "productId1");
CriteoProduct product2 = new CriteoProduct(77.7f, 3, "productId2");
CriteoProduct product3 = new CriteoProduct(50, 2, "productId3");

List<CriteoProduct> products = Arrays.asList(product1, product2, product3);
AdjustCriteo.injectCartIntoEvent(event, products);
Adjust.trackEvent(event);
```

:::

### Transaction confirmed

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{transactionConfirmedEventToken}"];

ADJCriteoProduct *product1 = [ADJCriteoProduct productWithId:@"productId1" price:100.0 quantity:1];
ADJCriteoProduct *product2 = [ADJCriteoProduct productWithId:@"productId2" price:77.7 quantity:3];
ADJCriteoProduct *product3 = [ADJCriteoProduct productWithId:@"productId3" price:50 quantity:2];
NSArray *products = @[product1, product2, product3];

[ADJCriteo injectTransactionConfirmedIntoEvent:event products:products 
  transactionId:@"transactionId1" newCustomer:@"newCustomerId"];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: "{transactionConfirmedEventToken}")

let product1 = ADJCriteoProduct(id: "productId1", price: 100.0, quantity: 1)
let product2 = ADJCriteoProduct(id: "productId2", price: 77.7, quantity: 3)
let product3 = ADJCriteoProduct(id: "productId3", price: 50, quantity: 2)
let products = [product1, product2, product3]

ADJCriteo.injectTransactionConfirmed(into: event, products: products)

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustEvent event = new AdjustEvent("{transactionConfirmedEventToken}");
CriteoProduct product1 = new CriteoProduct(100, 1, "productId1");
CriteoProduct product2 = new CriteoProduct(77.7f, 3, "productId2");
CriteoProduct product3 = new CriteoProduct(50, 2, "productId3");

List<CriteoProduct> products = Arrays.asList(product1, product2, product3);
AdjustCriteo.injectTransactionConfirmedIntoEvent(event, products, "transactionId", "newCustomerId");
Adjust.trackEvent(event);
```

:::

### User level

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{userLevelEventToken}"];

[ADJCriteo injectUserLevelIntoEvent:event uiLevel:1];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: "{userLevelEventToken}")

ADJCriteo.injectUserLevel(into: event, uiLevel: 1)

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustEvent event = new AdjustEvent("{userLevelEventToken}");
AdjustCriteo.injectUserLevelIntoEvent(event, 1);
Adjust.trackEvent(event);
```

:::

### User status

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{userStatusEventToken}"];

[ADJCriteo injectUserStatusIntoEvent:event uiStatus:@"uiStatusValue"];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: "{userStatusEventToken}")

ADJCriteo.injectUserStatus(into: event, uiStatus: "uiStatusValue")

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustEvent event = new AdjustEvent("{userStatusEventToken}");
AdjustCriteo.injectUserStatusIntoEvent(event, "uiStatusValue");
Adjust.trackEvent(event);
```

:::

### Achievement unlocked

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{achievementUnlockedEventToken}"];

[ADJCriteo injectAchievementUnlockedIntoEvent:event uiAchievement:@"uiAchievementValue"];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent.eventToken("{achievementUnlockedEventToken}")

ADJCriteo.injectAchievementUnlocked(into: event, uiAchievement: "uiAchievementValue")

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustEvent event = new AdjustEvent("{achievementUnlockedEventToken}");
AdjustCriteo.injectAchievementUnlockedIntoEvent(event, "AchievementUnlocked");
Adjust.trackEvent(event);
```

:::

### Custom event

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{customEventEventToken}"];

[ADJCriteo injectCustomEventIntoEvent:event uiData:@"uiDataValue"];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent.eventToken("{customEventEventToken}")

ADJCriteo.injectCustomEvent(into: event, uiData: "uiDataValue")

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustEvent event = new AdjustEvent("{customEventEventToken}");
AdjustCriteo.injectCustomEventIntoEvent(event, "uiDataValue");
Adjust.trackEvent(event);
```

:::

### Custom event 2

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{customEvent2EventToken}"];

[ADJCriteo injectCustomEvent2IntoEvent:event uiData2:@"uiDataValue2" uiData3:3];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: "{customEvent2EventToken}"

ADJCriteo.injectCustomEvent2(into: event, uiData2: "uiDataValue2", uiData3: 3)

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustEvent event = new AdjustEvent("{customEvent2EventToken}");
AdjustCriteo.injectCustomEvent2IntoEvent(event, "uiData2Value", 3);
Adjust.trackEvent(event);
```

:::

### Hashed email

You can attach a hashed email to every Criteo event. To do this, call the `injectHashedEmailIntoCriteoEvents` method. The SDK will send a hashed email with every Criteo event throughout the app lifecycle. This means it will need to be set again when the app is re-launched. You can remove the hashed email by setting the `injectHashedEmailIntoCriteoEvents` value to `nil`.

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

[ADJCriteo injectHashedEmailIntoCriteoEvents:@"8455938a1db5c475a87d76edacb6284e"];
```

```Swift
ADJCriteo.injectHashedEmail(intoCriteoEvents: "8455938a1db5c475a87d76edacb6284e")
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustCriteo.injectHashedEmailIntoCriteoEvents("8455938a1db5c475a87d76edacb6284e");
```

:::

### Search dates

You can attach a check-in and check-out date to every Criteo event. To do this, call the `injectViewSearchDatesIntoCriteoEvent` method. The SDK will send the dates with every Criteo event throughout the app lifecycle. This means you will need to set them again when the app is re-launched.

You can remove the search dates by setting the `injectViewSearchDatesIntoCriteoEvent` values to `nil`.

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

[ADJCriteo injectViewSearchDatesIntoCriteoEvents:@"2015-01-01" checkOutDate:@"2015-01-07"];
```

```Swift
ADJCriteo.injectViewSearchDates(intoCriteoEvents: "2015-01-01", checkoutDate: "2015-01-07")
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustCriteo.injectViewSearchDatesIntoCriteoEvents("2015-01-01", "2015-01-07");
```

:::

### Partner ID

You can attach a partner ID to every Criteo event. To do this, call the `injectPartnerIdIntoCriteoEvents` method. The SDK will send the partner ID with every Criteo throughout the app lifecycle. This means you will need to set it again when the app is re-launched.

You can remove the partner ID by setting the `injectPartnerIdIntoCriteoEvents` value to null.

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

[ADJCriteo injectPartnerIdIntoCriteoEvents:@"{criteoPartnerId}"];
```

```Swift
ADJCriteo.injectPartnerId(intoCriteoEvents: "{criteoPartnerId}"
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustCriteo.injectPartnerIdIntoCriteoEvents("{CriteoPartnerId}");
```

:::

### Send deep link

You can add deep link information to Criteo events. To do this, call the `injectDeeplinkIntoEvent` method with the event and URL.

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

- (BOOL)  application:(UIApplication *)application openURL:(NSURL *)url
    sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
    ADJEvent *event = [ADJEvent eventWithEventToken:@"{deeplinkEventToken}"];
    
    [ADJCriteo injectDeeplinkIntoEvent:event url:url];
    
    [Adjust trackEvent:event];

    //...
}
```

```Swift
func application(
    _ application: UIApplication?,
    open url: URL?,
    sourceApplication: String?,
    annotation: Any?
) -> Bool {
    let event = ADJEvent(eventToken: "{deeplinkEventToken}")

    ADJCriteo.injectDeeplink(into: event, url: url)

    Adjust.trackEvent(event)

    //...
}
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    Intent intent = getIntent();
    Uri data = intent.getData();

    AdjustEvent event = new AdjustEvent("{deeplinkEventToken}");
    AdjustCriteo.injectDeeplinkIntoEvent(event, data);
    Adjust.trackEvent(event);
}
```

:::

### Customer ID

You can attach a customer ID to every Criteo event. To do this, call the `injectCustomerIdIntoCriteoEvents` method. The SDK will send the customer ID with every Criteo event throughout the app lifecycle. This means you will need to set them again when the app is re-launched.

You can remove the customer ID by setting the `injectCustomerIdIntoCriteoEvents` value to nil.

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

[ADJCriteo injectCustomerIdIntoCriteoEvents:@"{CriteoCustomerId}"];
```

```Swift
ADJCriteo.injectCustomerId(intoCriteoEvents: "{CriteoCustomerId}")
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustCriteo.injectCustomerIdIntoCriteoEvents("{CriteoCustomerId}");
```

:::

### User segment 

You can attach the user segment to every Criteo event. To do this, call the `injectUserSegmentIntoCriteoEvents` method. The SDK will send the user segment with every Criteo event throughout the app lifecycle. This means you will need to set it again when the app is re-launched.

You can remove the user segment by setting the `injectUserSegmentIntoCriteoEvents` value to nil.

:::{tab-set-code}

```Objective-C
#import "ADJCriteo.h"

[ADJCriteo injectUserSegmentIntoCriteoEvents:@"{CriteoUserSegment}"];
```

```Swift
ADJCriteo.injectUserSegment(intoCriteoEvents: "{CriteoUserSegment}")
```

```Java
import com.adjust.sdk.plugin.AdjustCriteo;

AdjustCriteo.injectUserSegmentIntoCriteoEvents("{CriteoUserSegment}");
```

:::

