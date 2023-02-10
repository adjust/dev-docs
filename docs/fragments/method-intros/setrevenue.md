---
orphan: true
nosearch: true
---

You can record revenue associated with an event by setting the `revenue` and `currency` properties on your event instance. Use this feature to record revenue-generating actions in your app.

To set these properties, call the {{ recordMethod }} method and pass the following arguments: 

```{list-table}
:header-rows: 1

* - Argument
   - Data type
   - Description
* - `revenue`
   - Number
   - The amount of money associated with the event
* - `currency`
   - String
   - The ISO code of the currency used for the transaction
```

:::{important}
You must format the currency code as a 3 character string that follows the [ISO 4217 standard](https://www.iban.com/currency-codes). The Adjust server converts the reported revenue to your chosen reporting currency. Check [Adjust's guide to tracking purchases in different currencies](https://help.adjust.com/en/article/currency-conversion) for more information.
:::
