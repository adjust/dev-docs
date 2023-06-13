# Record events

You can associate your [Adjust event tokens](https://help.adjust.com/en/article/basic-event-setup#create-an-event-token) to actions in your app to record them. To record an event:

-  Create a new Adjust event instance and pass your event token as a string argument.
-  Call the [`TrackEvent` method](#windows-trackevent-invocation) with your event instance as an argument.

:::{include} /windows/reference/Adjust/recording.md
:start-after: TrackEvent snippet
:end-before: Snippet end
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button.

::::{tab-set}
:::{tab-item} C#
:sync: tabcode-csharp

```c#
using AdjustSdk;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

namespace AdjustWSExample
{
   public sealed partial class MainPage : Page
   {
      public MainPage()
      {
         this.InitializeComponent();
      }

      private void btnSimpleEvent_Click(object sender, RoutedEventArgs e)
      {
         var simpleEvent = new AdjustEvent("g3mfiw");
         Adjust.TrackEvent(simpleEvent);
      }
   }
}
```

```xml
<Page
   x:Class="AdjustWSExample.MainPage"
   xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
   xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
   xmlns:local="using:AdjustWSExample"
   xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
   xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
   mc:Ignorable="d">

   <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
      <Button x:Name="btnSimpleEvent" Content="Record simple event" HorizontalAlignment="Left" Margin="10,0,0,0" VerticalAlignment="Top" Click="btnSimpleEvent_Click"/>
   </Grid>
</Page>
```

:::
::::
:::::

## Record event revenue

You can record revenue associated with an event by setting the revenue and currency properties on your event instance. Use this feature to record revenue-generating actions in your app.

To set these properties, call the [`SetRevenue` method](#windows-adjustevent-setrevenue-invocation) and pass the following arguments:

-  The `revenue` amount (**number**)
-  The `currency` code (**string**)

You must format the currency code as a 3 character string that follows the [ISO 4217 standard](https://www.iban.com/currency-codes). Adjust's servers convert the reported revenue to your chosen reporting currency.

:::{seealso}
Check the guide to [tracking purchases in different currencies](https://help.adjust.com/en/article/currency-conversion) for more information.
:::

:::{include} /windows/reference/AdjustEvent.md
:start-after: SetRevenue snippet
:end-before: Snippet end
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The function sets the `revenue` property of this event to _`0.25`_ and the `currency` property to _`EUR`_.

::::{tab-set}
:::{tab-item} C#
:sync: tabcode-csharp

```c#
using AdjustSdk;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

namespace AdjustWSExample
{
   public sealed partial class MainPage : Page
   {
      public MainPage()
      {
         this.InitializeComponent();
      }

      private void btnRevenueEvent_Click(object sender, RoutedEventArgs e)
      {
         var revenueEvent = new AdjustEvent("g3mfiw");
         revenueEvent.SetRevenue(0.25, "EUR")
         Adjust.TrackEvent(revenueEvent);
      }
   }
}
```

```xml
<Page
   x:Class="AdjustWSExample.MainPage"
   xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
   xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
   xmlns:local="using:AdjustWSExample"
   xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
   xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
   mc:Ignorable="d">

   <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
      <Button x:Name="btnRevenueEvent" Content="Record revenue event" HorizontalAlignment="Left" Margin="10,0,0,0" VerticalAlignment="Top" Click="btnRevenueEvent_Click"/>
   </Grid>
</Page>
```

:::
::::
:::::

## Unique events

You can pass an optional identifier to avoid recording duplicate events. The SDK stores the last ten identifiers and skips revenue events with duplicate transaction IDs.

To set the identifier, call the [`PurchaseId` method](#windows-purchaseid-invocation) and pass your transaction ID as a **string** argument.

:::{include} /windows/reference/AdjustEvent.md
:start-after: PurchaseId snippet
:end-before: Snippet end
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The function sets the `uniqueId` to {{ uniqueEventId }} using the [`PurchaseId` method](#windows-purchaseid-invocation).

::::{tab-set}
:::{tab-item} C#
:sync: tabcode-csharp

```c#
using AdjustSdk;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

namespace AdjustWSExample
{
   public sealed partial class MainPage : Page
   {
      public MainPage()
      {
         this.InitializeComponent();
      }

      private void btnUniqueEvent_Click(object sender, RoutedEventArgs e)
      {
         var uniqueEvent = new AdjustEvent("g3mfiw");
         var uniqueId = "5e85484b-1ebc-4141-aab7-25b869e54c49"
         uniqueEvent.PurchaseId = uniqueId
         Adjust.TrackEvent(uniqueEvent);
      }
   }
}
```

```xml
<Page
   x:Class="AdjustWSExample.MainPage"
   xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
   xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
   xmlns:local="using:AdjustWSExample"
   xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
   xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
   mc:Ignorable="d">

   <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
      <Button x:Name="btnUniqueEvent" Content="Record unique event" HorizontalAlignment="Left" Margin="10,0,0,0" VerticalAlignment="Top" Click="btnUniqueEvent_Click"/>
   </Grid>
</Page>
```

:::
::::
:::::

## Add callback parameters

If you [register a callback URL](https://help.adjust.com/en/article/set-up-callbacks) in the Adjust dashboard, the SDK sends a GET request to your callback URL when it records an event.

You can configure callback parameters to send to your servers. Once you configure parameters on an event, the SDK appends them to your [callback URL](https://help.adjust.com/en/article/raw-data-exports). You can use this information to analyze your users' in-app behavior with your BI system.

Add callback parameters to your event by calling the [`AddCallbackParameter` method](#windows-adjustevent-addcallbackparameter-invocation) with **string** key-value arguments. You can add multiple parameters by calling this method multiple times.

:::{include} /windows/reference/AdjustEvent.md
:start-after: AddCallbackParameter snippet
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
You can read more about using URL callbacks, including a full list of available values, in the [callbacks guide](https://help.adjust.com/en/article/callbacks).
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The following callback parameters are added:

-  The `event_token`
-  The `revenue_amount` generated by the event

The resulting callback URL looks like this:

```
http://www.mydomain.com/callback?event_token=g3mfiw&revenue_amount=0.05
```

::::{tab-set}
:::{tab-item} C#
:sync: tabcode-csharp

```c#
using AdjustSdk;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

namespace AdjustWSExample
{
   public sealed partial class MainPage : Page
   {
      public MainPage()
      {
         this.InitializeComponent();
      }

      private void btnCallbackEvent_Click(object sender, RoutedEventArgs e)
      {
         var callbackEvent = new AdjustEvent("g3mfiw");
         callbackEvent.AddCallbackParameter("event_token", "g3mfiw")
         callbackEvent.AddCallbackParameter("revenue_amount", "0.05")
         Adjust.TrackEvent(callbackEvent);
      }
   }
}
```

```xml
<Page
   x:Class="AdjustWSExample.MainPage"
   xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
   xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
   xmlns:local="using:AdjustWSExample"
   xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
   xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
   mc:Ignorable="d">

   <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
      <Button x:Name="btnCallbackEvent" Content="Record callback event" HorizontalAlignment="Left" Margin="10,0,0,0" VerticalAlignment="Top" Click="btnCallbackEvent_Click"/>
   </Grid>
</Page>
```

:::
::::
:::::

## Add partner parameters

You can send extra information to your network partners by adding [partner parameters](https://help.adjust.com/en/article/advanced-event-setup#receive-custom-data-with-partner-parameters).

Adjust sends partner parameters to [external partners](https://help.adjust.com/en/article/integrated-partners) you have set up. This information is useful for more granular analysis and retargeting purposes. Adjust's servers forward these parameters once you have set them up and enabled them for a partner.

:::{note}
Partner parameters don't appear in raw data by default. You can add the `{partner_parameters}` placeholder to receive them as a single string.
:::

Add partner parameters to your event by calling the [`AddPartnerParameter` method](#windows-adjustevent-addpartnerparameter-invocation) with **string** key-value arguments. You can add multiple parameters by calling this method multiple times.

:::{include} /windows/reference/AdjustEvent.md
:start-after: AddPartnerParameter snippet
:end-before: Snippet end
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. The following partner parameters are added:

-  The `product_id` of the associated product
-  The `user_id` of the user who triggered the event

::::{tab-set}
:::{tab-item} C#
:sync: tabcode-csharp

```c#
using AdjustSdk;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

namespace AdjustWSExample
{
   public sealed partial class MainPage : Page
   {
      public MainPage()
      {
         this.InitializeComponent();
      }

      private void btnPartnerEvent_Click(object sender, RoutedEventArgs e)
      {
         var partnerEvent = new AdjustEvent("g3mfiw");
         partnerEvent.AddPartnerParameter("product_id", "29")
         partnerEvent.AddPartnerParameter("user_id", "835")
         Adjust.TrackEvent(partnerEvent);
      }
   }
}
```

```xml
<Page
   x:Class="AdjustWSExample.MainPage"
   xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
   xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
   xmlns:local="using:AdjustWSExample"
   xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
   xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
   mc:Ignorable="d">

   <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
      <Button x:Name="btnPartnerEvent" Content="Record partner event" HorizontalAlignment="Left" Margin="10,0,0,0" VerticalAlignment="Top" Click="btnPartnerEvent_Click"/>
   </Grid>
</Page>
```

:::
::::
:::::

## Add a callback identifier

You can add a custom string identifier to each event you want to measure. Adjust's servers can report on this identifier in event callbacks. This enables you to keep track of which events have been successfully measured.

Set up this identifier by calling the [`CallbackId` method](#windows-callbackid-invocation) with your ID as a **string** argument.

:::{include} /windows/reference/AdjustEvent.md
:start-after: CallbackId snippet
:end-before: Snippet end
:::

:::::{dropdown} Example

This example demonstrates how to record an event with the token {{ eventToken }} whenever a user interacts with a button. In this example, the `callbackId` is set to {{ callbackId }}.

::::{tab-set}
:::{tab-item} C#
:sync: tabcode-csharp

```c#
using AdjustSdk;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;

namespace AdjustWSExample
{
   public sealed partial class MainPage : Page
   {
      public MainPage()
      {
         this.InitializeComponent();
      }

      private void btnCustomEvent_Click(object sender, RoutedEventArgs e)
      {
         var customEvent = new AdjustEvent("g3mfiw");
         customEvent.CallbackId = "f2e728d8-271b-49ab-80ea-27830a215147"
         Adjust.TrackEvent(customEvent);
      }
   }
}
```

```xml
<Page
   x:Class="AdjustWSExample.MainPage"
   xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
   xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
   xmlns:local="using:AdjustWSExample"
   xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
   xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
   mc:Ignorable="d">

   <Grid Background="{ThemeResource ApplicationPageBackgroundThemeBrush}">
      <Button x:Name="btnCustomEvent" Content="Record custom event" HorizontalAlignment="Left" Margin="10,0,0,0" VerticalAlignment="Top" Click="btnCustomEvent_Click"/>
   </Grid>
</Page>
```

:::
::::
:::::
