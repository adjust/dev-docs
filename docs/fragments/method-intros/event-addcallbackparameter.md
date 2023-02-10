---
orphan: true
nosearch: true
---

You can register a [callback URL] in the Adjust dashboard to receive additional event information. The Adjust SDK sends a GET request to your callback URL when it records an event.

Callback parameters are **string** key-value pairs that you can to events to send additional information. The Adjust SDK appends these parameters to your callback URL so that you can access it in your [raw data exports]. You can use this information to analyse your users' in-app behavior with your BI system.

Add callback parameters to your event by calling the {{ callbackMethodName }} method with the following parameters:

```{list-table}
:header-rows: 1

* - Parameter
   - Data type
   - Description
* - `key`
   - String
   - The unique key of your callback parameter
* - `value`
   - String
   - The value of your callback parameter

```

```{tip}
You can append several parameters by calling {{ callbackMethodName }} multiple times.
```

[callback URL]: https://help.adjust.com/en/article/best-practices-callbacks

[raw data exports]: https://help.adjust.com/en/article/raw-data-exports
