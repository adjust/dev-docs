# Trademob plugin integration

:::{note}
For questions regarding this plugin, please reach out to eugenio.warglien@trademob.com
:::

To use this feature, you first need to download and set up the Adjust SDK for your platform.

## Set up your environment

### CocoaPods

If you're using Cocoapods, add the following line to your {file}`podfile` to integrate the Adjust Trademob plugin:

```
pod 'Adjust/Trademob'
```

### Carthage

If you're using Carthage, add the following line to your {file}`Cartfile` to integrate the Adjust Trademob plugin:

```
github "adjust/ios_sdk" "trademob"
```

### Install from source

You can add the Adjust Trademob plugin to your project manually by doing the following:

1. Locate the `plugin/Trademob` folder inside the archive you downloaded from the [release page](https://github.com/adjust/ios_sdk/releases).
2. Drag the {file}`ADJTrademob.h` and {file]`ADJTrademob.m` files into the Adjust folder inside your project.
3. When the __Choose options for adding these files__ dialog appears, check the __Copy items if needed__ checkbox and select the radio button to __Create groups__.

## Trademob events

### View listing

:::{tab-set-code}

```Objective-C
#import "ADJTrademob.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{viewListingEventToken}"];

NSArray *itemIds = @[@"itemId1", @"itemId2", @"itemId3"];

NSDictionary *metadata = @{@"info1":@"value1", @"info2":@"value2"};

[ADJTrademob injectViewListingIntoEvent:event itemIds:itemIds metadata:metadata];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: "{viewListingEventToken}")

let itemIds = ["itemId1", "itemId2", "itemId3"]

let metadata = [
    "info1": "value1",
    "info2": "value2"
]

ADJTrademob.injectViewListing(into: event, itemIds: itemIds, metadata: metadata)

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustTrademob;

AdjustEvent event = new AdjustEvent("{viewListingEventToken}");
List<String> items = Arrays.asList("itemId1", "itemId2", "itemId3");
Map<String, String> metadata = new HashMap<>();
metadata.put("info1", "value1");
metadata.put("info2", "value2");

AdjustTrademob.injectViewListingIntoEvent(event, items, metadata);
Adjust.trackEvent(event);
```
:::

### View item

:::{tab-set-code}

```Objective-C
#import "ADJTrademob.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{viewItemEventToken}"];

NSDictionary *metadata = @{@"info1":@"value1", @"info2":@"value2"};

[ADJTrademob injectViewItemIntoEvent:event itemId:@"itemId" metadata:metadata];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: "{viewItemEventToken}")

let metadata = [
    "info1": "value1",
    "info2": "value2"
]

ADJTrademob.injectViewItem(into: event, itemId: "itemId", metadata: metadata)

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustTrademob;

AdjustEvent event = new AdjustEvent("{viewItemEventToken}");
Map<String, String> metadata = new HashMap<>();
metadata.put("info1", "value1");
metadata.put("info2", "value2");

AdjustTrademob.injectViewItemIntoEvent(event, "itemId1", metadata);
Adjust.trackEvent(event);
```
:::

### Add to basket

:::{tab-set-code}

```Objective-C
#import "ADJTrademob.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{addToBasketEventToken}"];

ADJTrademobItem *item1 = [[ADJTrademobItem alloc] initWithId:@"itemId1" price:120.4 quantity:1];
ADJTrademobItem *item2 = [[ADJTrademobItem alloc] initWithId:@"itemId2" price:20.1 quantity:4];

NSArray *items = @[item1, item2];

[ADJTrademob injectAddToBasketIntoEvent:event items:items metadata:nil];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: "{addToBasketEventToken}")

let item1 = ADJTrademobItem(id: "itemId1", price: 120.4, quantity: 1)
let item2 = ADJTrademobItem(id: "itemId2", price: 20.1, quantity: 4)

let items = [item1, item2]

ADJTrademob.injectAddToBasket(into: event, items: items, metadata: nil)

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustTrademob;
import com.adjust.sdk.plugin.TrademobItem;

AdjustEvent event = new AdjustEvent("{basketEventToken}");
TrademobItem itemId1 = new TrademobItem("itemId1", 2, 54f);
TrademobItem itemId2 = new TrademobItem("itemId2", 1, 3f);
TrademobItem itemId3 = new TrademobItem("itemId3", 4, 25f);
List<TrademobItem> items = Arrays.asList(itemId1, itemId2, itemId3);

AdjustTrademob.injectAddToBasketIntoEvent(event, items, null);
Adjust.trackEvent(event);
```
:::

### Checkout

:::{tab-set-code}

```Objective-C
#import "ADJTrademob.h"

ADJEvent *event = [ADJEvent eventWithEventToken:@"{checkoutEventToken}"];

ADJTrademobItem *item1 = [[ADJTrademobItem alloc] initWithId:@"itemId1" price:120.4 quantity:1];
ADJTrademobItem *item2 = [[ADJTrademobItem alloc] initWithId:@"itemId2" price:20.1 quantity:4];

NSArray *items = @[item1, item2];

NSDictionary *metadata = @{@"info1":@"value1", @"info2":@"value2"};

[ADJTrademob injectCheckoutIntoEvent:event items:items metadata:metadata];

[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: "{checkoutEventToken}")

let item1 = ADJTrademobItem(id: "itemId1", price: 120.4, quantity: 1)
let item2 = ADJTrademobItem(id: "itemId2", price: 20.1, quantity: 4)

let items = [item1, item2]

let metadata = [
    "info1": "value1",
    "info2": "value2"
]

ADJTrademob.injectCheckout(into: event, items: items, metadata: metadata)

Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustTrademob;
import com.adjust.sdk.plugin.TrademobItem;

AdjustEvent event = new AdjustEvent("{checkoutEventToken}");
TrademobItem itemId1 = new TrademobItem("itemId1", 2, 54f);
TrademobItem itemId2 = new TrademobItem("itemId2", 1, 3f);
TrademobItem itemId3 = new TrademobItem("itemId3", 4, 25f);
List<TrademobItem> items = Arrays.asList(itemId1, itemId2, itemId3);

Map<String, String> metadata = new HashMap<>();
metadata.put("info1", "value1");
metadata.put("info2", "value2");

AdjustTrademob.injectCheckoutIntoEvent(event, items, metadata);
Adjust.trackEvent(event);
```
:::