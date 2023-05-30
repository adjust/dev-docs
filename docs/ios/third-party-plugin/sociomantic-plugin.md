# Sociomantic plugin integration
You can integrate the Adjust SDK with Sociomantic events.

## Set up your environment

### CocoaPods

If you're using Cocoapods, add the following line to your {file}`podfile` to integrate the Adjust Sociomantic plugin:

```
pod 'Adjust/Sociomantic'
```

### Carthage

If you're using Carthage, add the following line to your {file}`Cartfile` to integrate the Adjust Sociomantic plugin:

```
github "adjust/ios_sdk" "sociomantic"
```

### Install from source

You can add the Adjust Sociomantic plugin to your project manually by doing the following:

1. Locate the `plugin/Sociomantic` folder inside the archive you downloaded from the [release page](https://github.com/adjust/ios_sdk/releases).
2. Drag the {file}`ADJSociomantic.h` and {file}`ADJSociomantic.m` files into the Adjust folder inside your project.
3. When the __Choose options for adding these files__ dialog appears, check the __Copy items if needed__ checkbox and select the radio button to __Create groups__.

## Sociomantic events

Once you have installed the Sociomantic plugin, you will have access to the Sociomantic events methods as well as the following constants. You should use these as the property names of your dictionaries.

* `NSString *const SCMCategory;`
* `NSString *const SCMProductName;`
* `NSString *const SCMSalePrice;`
* `NSString *const SCMProductURL;`
* `NSString *const SCMProductImageURL;`
* `NSString *const SCMBrand;`
* `NSString *const SCMDescription;`
* `NSString *const SCMTimestamp;`
* `NSString *const SCMValidityTimestamp;`
* `NSString *const SCMQuantity;`
* `NSString *const SCMScore;`
* `NSString *const SCMProductID;`
* `NSString *const SCMAmount;`
* `NSString *const SCMCurrency;`
* `NSString *const SCMActionConfirmed;`
* `NSString *const SCMActionConfirmed;`
* `NSString *const SCMCustomerAgeGroup;`
* `NSString *const SCMCustomerEducation;`
* `NSString *const SCMCustomerGender;`
* `NSString *const SCMCustomerID;`
* `NSString *const SCMCustomerMHash;`
* `NSString *const SCMCustomerSegment;`
* `NSString *const SCMCustomerTargeting;`

Before sending any Sociomantic events, you should set a partner ID as shown below:

:::{tab-set-code}
```Objective-C
#import "ADJSociomantic.h"

[ADJSociomantic injectPartnerIdIntoSociomanticEvents:@"{sociomanticPartnerId}"];
```

```Swift
ADJSociomantic.injectPartnerId(intoSociomanticEvents: "{sociomanticPartnerId}")
```

```Java
import com.adjust.sdk.plugin.AdjustSociomantic;

AdjustSociomantic.injectPartnerIdInSociomanticEvents("{sociomanticPartnerId}");
```
:::

Once you have set your partner ID, you can integrate the different Sociomantic events.

## Examples

### Customer event

:::{tab-set-code}

```Objective-C
#import "ADJSociomantic.h"

ADJEvent *event = [ADJEvent eventWithEventToken:ANY_TOKEN];
NSDictionary *customerData = @{
    SCMCustomerID: @"123456"
};

[ADJSociomantic injectCustomerDataIntoEvent:event withData:customerData];
[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: ANY_TOKEN)
let customerData = [
    SCMCustomerID: "123456"
]

ADJSociomantic.injectCustomerData(into: event, withData: customerData)
Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustSociomantic;

AdjustEvent event = new AdjustEvent(HOMEPAGE_TOKEN);
Map<String, String> customerData = new HashMap<>();
customerData.put(AdjustSociomantic.SCMCustomerAgeGroup, "0");

AdjustSociomantic.injectCustomerDataIntoEvent(event, customerData);
Adjust.trackEvent(event);
```
:::

### View home page

:::{tab-set-code}

```Objective-C
#import "ADJSociomantic.h"

ADJEvent *event = [ADJEvent eventWithEventToken:HOMEPAGE_TOKEN];

[ADJSociomantic injectHomePageIntoEvent:event];
[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: HOMEPAGE_TOKEN)

ADJSociomatic.injectHomePage(into: event)
Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustSociomantic;

AdjustEvent event = new AdjustEvent(HOMEPAGE_TOKEN);
Adjust.trackEvent(event);
```
:::

### View listing

:::{tab-set-code}

```Objective-C
#import "ADJSociomantic.h"

ADJEvent *event = [ADJEvent eventWithEventToken:LISTING_TOKEN];
NSArray *categories = @[@"category_1", @"category_2", @"category_3"];
NSString *date = @"1427792434";

[ADJSociomantic injectViewListingIntoEvent:event withCategories:categories];
// You also can provide a date like this
[ADJSociomantic injectViewListingIntoEvent:event withCategories:categories withDate:date];
[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: LISTING_TOKEN)
let categories = ["category_1", "category_2", "category_3"]
let date = "1427792434"

ADJSociomantic.injectViewListing(into: event, withCategories: categories)
// You also can provide a date like this
ADJSociomantic.injectViewListing(into: event, withCategories: categories, withDate: date)
Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustSociomantic;

AdjustEvent event = new AdjustEvent(LISTING_TOKEN);
List<String> categories = Arrays.asList("cat1", "cat2", "cat3");
String date = "1427792434"

AdjustSociomantic.injectViewListingIntoEvent(event, categories);
Adjust.trackEvent(event);

// You also can provide a date like this.
AdjustSociomantic.injectViewListingIntoEvent(event, categories, date);
Adjust.trackEvent(event);
```
:::

### View product

:::{note}
If you're not sure what setup you should use, please contact your technical account manager at Sociomantic.
:::

:::{tab-set-code}

```Objective-C
#import "ADJSociomantic.h"

ADJEvent *event      = [ADJEvent eventWithEventToken:PRODUCT_VIEW_TOKEN];
NSDictionary *params = @{
    SCMCategory     : @[@"cat1", @"cat2"],
    SCMProductName  : @"stuff",
    SCMDescription  : @"pure awesomeness"
};

[ADJSociomantic injectViewProductIntoEvent:event productId:@"productId_4" withParameters:params];
[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: PRODUCT_VIEW_TOKEN)
let params = [
    SCMCategory: ["cat1", "cat2"],
    SCMProductName: "stuff",
    SCMDescription: "pure awesomeness"
]

ADJSociomantic.injectViewProduct(into: event, productId: "productId_4", withParameters: params)
Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustSociomantic;

AdjustEvent event = new AdjustEvent(PRODUCT_VIEW_TOKEN);
Map<String, Object> product = new HashMap<>();
List<String> categories = Arrays.asList("cat1", "cat2", "cat3");
product.put(AdjustSociomantic.SCMCategory, categories);

AdjustSociomantic.injectProductIntoEvent(event, "123456");
Adjust.trackEvent(event);

// You can also provide product information.
AdjustSociomantic.injectProductIntoEvent(event, "123456", product);
Adjust.trackEvent(event);
```
:::

:::{dropdown} Available product parameters

| Parameter name | Requirement | Description | Note |
|---|---|---|---|
|`SCMCategory` | Required | Product category (entire category path) | Category information provided in the tracking code on category or listing pages should match the category information provided in the feed or in the tracking code of product pages.|
|`SCMProductName` | Required | Product name	| Special characters shouldn't be encoded but provided in proper UTF-8. Don't use any HTML markup.|
|`SCMSalePrice`	| Required | Sale price as decimal value (For example: 2.99) | Please use a dot as a decimal separator and don't use any thousand separators.|
|`SCMAmount` |	Required | Regular price as decimal value (For example: 3.99) |	Please use a dot as a decimal separator and don't use any thousand separators.|
|`SCMCurrency` | Required |	Currency code in ISO 4217 format (For example: EUR) | Fixed currency code. Should have been provided to you in the tracking code examples.|
| `SCMProductURL` | Required |	Product URL (deeplink) | Please provide a working deeplink ideally without any click tracking parameter (Google Analytics, HURRA, Eulerian, etc.), Please always use deeplinks with http:// |
| `SCMProductImageURL` | Required |	Product image URL |	Please provide images in a reasonable size. For an optimal appearance in the ads the images should be at least 200x200px and should have the same aspect ratio.|
| `SCMBrand` | Required | Product brand | Special characters shouldn't be encoded but provided in proper UTF-8 (Same as SCMProductName above). Don't use any HTML markup.|
| `SCMDescription` | Optional |	Short product description |	Special characters shouldn't be encoded but provided in proper UTF-8 (Same as SCMProductName above). Don't use any HTML markup.|
| `SCMTimestamp` | Optional | Timestamp until when the product is available (please use GMT time) | Please provide the date a visitor has searched for. It should be an NSTimeInterval wrapped in NSNumber (see example).|
| `SCMValidityTimestamp` | Optional | Timestamp until when the product is available (please use GMT time) | Please provide the unix timestamp until when the product is available. Please use 0 for products that are always available. It should be an NSTimeInterval wrapped in NSNumber (Same as SCMTimestamp above).|
| `SCMQuantity`	| Optional | Number of products in stock | Please integrate this field only after discussion with your personal Sociomantic contact|
| `SCMScore` | Optional |	Priority score of the product (value range is between 0 to 10.0) |	Please integrate this field only after discussion with your personal Sociomantic contact|

:::

### Cart

:::{tab-set-code}

```Objective-C
#import "ADJSociomantic.h"

ADJEvent *event = [ADJEvent eventWithEventToken:CART_TOKEN];
NSDictionary *product5 = @{
    SCMAmount    : @100,
    SCMCurrency  : @"EUR",
    SCMQuantity  : @1,
    SCMProductID : @"productId_5",
};
NSString *product6 = @"productId_6";
NSDictionary *product7 = @{
    SCMProductID : @"productId_7"
};


NSArray * productList = @[product5, product6, product7];

[ADJSociomantic injectCartIntoEvent:event cart:productList];
[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: CART_TOKEN)
let product5 = [
    SCMAmount: NSNumber(value: 100),
    SCMCurrency: "EUR",
    SCMQuantity: NSNumber(value: 1),
    SCMProductID: "productId_5"
]
let product6 = "productId_6"
let product7 = [
    SCMProductID: "productId_7"
]


let productList = [product5, product6, product7]

ADJSociomantic.injectCart(into: event, cart: productList)
Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustSociomantic;

AdjustEvent event = new AdjustEvent(BASKET_TOKEN);
Map<String, Object> product1 = new HashMap<>();
product1.put(AdjustSociomantic.SCMProductID, "1");
product1.put(AdjustSociomantic.SCMAmount, 42);
product1.put(AdjustSociomantic.SCMCurrency, "EUR");
product1.put(AdjustSociomantic.SCMQuantity, 1);

Map<String, Object> product2 = new HashMap<>();
product2.put(AdjustSociomantic.SCMProductID, "2");

String product3 = "3";

List<Object> products = Arrays.asList(product1, product2, product3);
AdjustSociomantic.injectCartIntoEvent(event, products);
Adjust.trackEvent(event);
```
:::

:::{dropdown} Available cart parameters

|Parameter name | Requirement |	Description | Note |
|---|---|---|---|
| `SCMProductID` | Required | Product ID | Please provide the product ID without any subIDs for any color or size variations.|
| `SCMAmount` | Optional | Product price as decimal value (For example: 2.99) | Please use a dot as a decimal separator and don't use any thousand separators. Please only provide price per product, even if quantity has a value larger than 1.|
| `SCMCurrency` | Optional | Currency code in ISO 4217 format (For example: EUR) | Fixed currency code. Should have been provided to you in the tracking code examples.|
| `SCMQuantity` | Optional | Quantity of the product selected | Please use an integer value.|
:::

### Unconfirmed transaction

:::{tab-set-code}

```Objective-C
#import "ADJSociomantic.h"

ADJEvent *event = [ADJEvent eventWithEventToken:TRANSACTION_TOKEN];
NSString *product5 =  @"productId_5";
NSDictionary *product6 = @{
    SCMQuantity  : @3,
    SCMProductID : @"productId_6"
};
NSArray * productList = @[product5, product6];

[ADJSociomantic injectTransactionIntoEvent:event transactionId:@"123456" withProducts:productList];
[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: TRANSACTION_TOKEN)
let product5 = "productId_5"
let product6 = [
    SCMQuantity: NSNumber(value: 3),
    SCMProductID: "productId_6"
]
let productList = [product5, product6]

ADJSociomantic.injectTransaction(into: event, transactionId: "123456", withProducts: productList)
Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustSociomantic;

AdjustEvent event = new AdjustEvent(SALE_TOKEN);
Map<String, Object> product1 = new HashMap<>();
product1.put(AdjustSociomantic.SCMProductID, "1");
product1.put(AdjustSociomantic.SCMAmount, 42);
product1.put(AdjustSociomantic.SCMQuantity, 1);

Map<String, Object> product2 = new HashMap<>();
product2.put(AdjustSociomantic.SCMProductID, "2");

String product3 = "3";

List<Object> products = Arrays.asList(product1, product2, product3);
AdjustSociomantic.injectTransactionIntoEvent(event, "123456", products);
Adjust.trackEvent(event);
```
:::

Or with parameters:

:::{tab-set-code}

```Objective-C
#import "ADJSociomantic.h"

ADJEvent *event = [ADJEvent eventWithEventToken:TRANSACTION_TOKEN];
NSString *product5 =  @"productId_5";
NSDictionary *product6 = @{
    SCMQuantity  : @3,
    SCMProductID : @"productId_6"
};
NSArray *productList = @[product5, product6];
NSDictionary *parameters = @{
    SCMQuantity: @4  // 3 times product6 and 1 product5
};

[ADJSociomantic injectTransactionIntoEvent:event transactionId:@"123456" withProducts:productList withParameters:parameters];
[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: TRANSACTION_TOKEN)
let product5 = "productId_5"
let product6 = [
    SCMQuantity: NSNumber(value: 3),
    SCMProductID: "productId_6"
]
let productList = [product5, product6]
let parameters = [
    SCMQuantity: NSNumber(value: 4 /* 3 times product6 and 1 product5 */)
]

ADJSociomantic.injectTransaction(into: event, transactionId: "123456", withProducts: productList, withParameters: parameters)
Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustSociomantic;

AdjustEvent event = new AdjustEvent(SALE_TOKEN);
Map<String, Object> product1 = new HashMap<>();
product1.put(AdjustSociomantic.SCMProductID, "1");
product1.put(AdjustSociomantic.SCMAmount, 42);
product1.put(AdjustSociomantic.SCMQuantity, 1);

Map<String, Object> product2 = new HashMap<>();
product2.put(AdjustSociomantic.SCMProductID, "2");

String product3 = "3";

List<Object> products = Arrays.asList(product1, product2, product3);
Map<String, Object> parameters = new HashMap<>();
parameters.put(AdjustSociomantic.SCMCurrency, "EUR");
parameters.put(AdjustSociomantic.SCMAmount, 42);

AdjustSociomantic.injectTransactionIntoEvent(event, "123456", products, parameters);

Adjust.trackEvent(event);
```
:::

### Confirmed transactions

:::{tab-set-code}

```Objective-C
#import "ADJSociomantic.h"

ADJEvent *event = [ADJEvent eventWithEventToken:TRANSACTION_TOKEN];
NSString *product5 =  @"productId_5";
NSDictionary *product6 = @{
    SCMQuantity  : @3,
    SCMProductID : @"productId_6"
};
NSArray * productList = @[product5, product6];

[ADJSociomantic injectConfirmedTransactionIntoEvent:event transactionId:@"123456" withProducts:productList];
[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: TRANSACTION_TOKEN)
let product5 = "productId_5"
let product6 = [
    SCMQuantity: NSNumber(value: 3),
    SCMProductID: "productId_6"
]
let productList = [product5, product6]

ADJSociomantic.injectConfirmedTransaction(into: event, transactionId: "123456", withProducts: productList)
Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustSociomantic;

AdjustEvent event = new AdjustEvent(SALE_TOKEN);
Map<String, Object> product1 = new HashMap<>();
product1.put(AdjustSociomantic.SCMProductID, "1");
product1.put(AdjustSociomantic.SCMAmount, 42);
product1.put(AdjustSociomantic.SCMQuantity, 1);

Map<String, Object> product2 = new HashMap<>();
product2.put(AdjustSociomantic.SCMProductID, "2");

String product3 = "3";

List<Object> products = Arrays.asList(product1, product2, product3);
AdjustSociomantic.injectConfirmedTransactionIntoEvent(event, "123456", products);
Adjust.trackEvent(event);
```
:::

Or with parameters:

:::{tab-set-code}

```Objective-C
#import "ADJSociomantic.h"

ADJEvent *event = [ADJEvent eventWithEventToken:TRANSACTION_TOKEN];
NSString *product5 =  @"productId_5";
NSDictionary *product6 = @{
    SCMQuantity  : @3,
    SCMProductID : @"productId_6"
};
NSArray *productList = @[product5, product6];
NSDictionary *parameters = @{
    SCMQuantity: @4  // 3 times product6 and 1 product5
};

[ADJSociomantic injectConfirmedTransactionIntoEvent:event transactionId:@"123456" withProducts:productList withParameters:parameters];
[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: TRANSACTION_TOKEN)
let product5 = "productId_5"
let product6 = [
    SCMQuantity: NSNumber(value: 3),
    SCMProductID: "productId_6"
]
let productList = [product5, product6]
let parameters = [
    SCMQuantity: NSNumber(value: 4 /* 3 times product6 and 1 product5 */)
]

ADJSociomantic.injectConfirmedTransaction(into: event, transactionId: "123456", withProducts: productList, withParameters: parameters)
Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustSociomantic;

AdjustEvent event = new AdjustEvent(SALE_TOKEN);
Map<String, Object> product1 = new HashMap<>();
product1.put(AdjustSociomantic.SCMProductID, "1");
product1.put(AdjustSociomantic.SCMAmount, 42);
product1.put(AdjustSociomantic.SCMQuantity, 1);

Map<String, Object> product2 = new HashMap<>();
product2.put(AdjustSociomantic.SCMProductID, "2");

String product3 = "3";

List<Object> products = Arrays.asList(product1, product2, product3);
Map<String, Object> parameters = new HashMap<>();
parameters.put(AdjustSociomantic.SCMCurrency, "EUR");
parameters.put(AdjustSociomantic.SCMAmount, 42);

AdjustSociomantic.injectConfirmedTransactionIntoEvent(event, "123456", products, parameters);
Adjust.trackEvent(event);
```
:::

:::{dropdown} Available cart parameters

| Parameter name | Requirement | Description | Note |
|---|---|---|---|
| `SCMAmount` | Optional | Product price as decimal value (For example: 2.99) | Please use a dot as a decimal separator and don't use any thousand separators. Please only provide price per product, even if quantity has a value larger than 1.|
| `SCMCurrency` | Optional | Currency code in ISO 4217 format (For example: EUR) | Fixed currency code. Should have been provided to you in the tracking code examples.|
| `SCMQuantity | Optional | Quantity of the product selected | Please use an integer value.|
:::

### Lead event

:::{tab-set-code}

```Objective-C
#import "ADJSociomantic.h"

ADJEvent *event = [ADJEvent eventWithEventToken:LEAD_TOKEN];

[ADJSociomantic injectLeadIntoEvent:event leadID:@"123456789"];
[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: LEAD_TOKEN)

ADJSociomantic.injectLead(into: event, leadID: "123456789")
Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustSociomantic;

AdjustEvent event = new AdjustEvent(LEAD_TOKEN);
AdjustSociomantic.injectLeadIntoEvent(event, "123456");
Adjust.trackEvent(event);
```
:::

Or confirmed lead:

:::{tab-set-code}

```Objective-C
#import "ADJSociomantic.h"

ADJEvent *event = [ADJEvent eventWithEventToken:LEAD_TOKEN];

[ADJSociomantic injectLeadIntoEvent:event leadID:@"123456789" andConfirmed:YES];
[Adjust trackEvent:event];
```

```Swift
let event = ADJEvent(eventToken: LEAD_TOKEN)

ADJSociomantic.injectLead(into: event, leadID: "123456789", andConfirmed: true)
Adjust.trackEvent(event)
```

```Java
import com.adjust.sdk.plugin.AdjustSociomantic;

AdjustEvent event = new AdjustEvent(LEAD_TOKEN);
AdjustSociomantic.injectLeadIntoEvent(event, "123456", Boolean.TRUE);
Adjust.trackEvent(event);
```
:::