# Get network trackers

Use this endpoint to get the network-level trackers for your specified app.

## Endpoint

```text
https://api.adjust.com/public/v1/apps/{app_token}/trackers
```

### GET request

Return a list of network-level trackers associated with your app.

:::{list-table} Parameters
:header-rows: 1

* - Parameter
   - Data type
   - In
   - Description
* - `app_token`*
   - String
   - Path
   - Your app's 12 digit identifier.
* - `after`
   - String
   - Query
   - Cursor to get elements from the next page.
* - `before`
   - String
   - Query
   - Cursor to get elements from the previous page.
* - `limit`
   - Integer
   - Query
   - The maximum number of elements included in the response. Must be a positive integer value.
:::

% Pagination description

:::{dropdown} Pagination

Results from this endpoint are paginated using a cursor. Each page returns the location of the previous and next pages. You can include these in your calls to return specific pages. You can also limit the number of items included on a page. The default limit is `50`.

Each results page contains a "paging" object containing the cursor positions. You can use these cursor positions to programatically move between pages. For example, the first page might contain results like this:


```json
"paging": {
   "page_size": "50",
      "collection_size": "49",
      "total": "199"
      "cursors": {
         "after": "g2wAAAACYhW1_gxkAANuaWxq",
        "before": null
      },
      "next": "https://api.adjust.com/public/v1/apps/yxs12pfewq/trackers?after=g2wAAAACYhW1_gxkAANuaWxq&limit=50",
      "previous": null
    }
```

To go to the second page, add the after value to the next request in the after parameter. For example:

```console
$ curl "https://api.adjust.com/public/v1/apps/yxs12pfewq/trackers?after=g2wAAAACYhW1_gxkAANuaWxq"
```

:::

% Description end

```{code-block} json
:caption: Success response

{
  "name": "String",
  "token": "String",
  "label": "String",
  "level": 1,
  "archived": false,
  "has_subtrackers": false,
  "partner_id": 3,
  "cost_data_enabled": false,
  "url": "String",
  "click_url": "String",
  "impression_url": "String",
}
```

:::{list-table} Response parameters
:header-rows: 1

* - Field
   - Data type
   - Description
   - Example
* - `name`
   - String
   - The tracker's name.
   - `Adroll`
* - `label`
   - String
   - The last level part of the name of the tracker.
   - `Adroll`
* - `level`
   - Integer
   - The level of the tracker.
      * Network = `1`
      * Campaign = `2`
      * Adgroup = `3`
      * Creative = `4`
   - `1`
* - `archived`
   - Boolean
   - Whether the tracker is archived.
   - `true`
* - `has_subtrackers`
   - Boolean
   - Whether the tracker has subtrackers.
   - `true`
* - `partner_id`
   - Integer
   - The ID of the partner attached to the tracker.
   - `3`
* - `cost_data_enabled`
   - Boolean
   - Whether the tracker has cost_data enabled.
   - `false`
* - `impression_url`
   - String
   - URL of the tracker for impression tracking.
   - `https://view.adjust.com/impression/abc123`
* - `url`
   - String
   - URL of the tracker for tracking.
   - `https://app.adjust.com/abc123`
* - `click_url`
   - String
   - URL of the tracker for click tracking.
   - `https://app.adjust.com/abc123`
:::

## Example

```console
$ curl --location --request GET 'https://api.adjust.com/public/v1/apps/gwzpeepw8uf8/trackers?limit=1' \
--header 'Authorization: Token token={API_TOKEN}'
```

```json
{
  "data": {
    "api_version": "1",
    "request_id": "FcK55-tdJUDOWQIAABsB",
    "timestamp": "2019-09-09T09:07:06Z",
    "paging": {
      "page_size": "1",
      "collection_size": "1",
      "total": "199",
      "next": "https://api.adjust.com/public/v1/apps/gwzpeepw8uf8/trackers?after=g2wAAAACYhW1_gxkAANuaWxq&limit=1",
      "previous": null,
      "cursors": {
        "after": "g2wAAAACYhW1_gxkAANuaWxq",
        "before": null
      }
    },
    "items": [
      {
        "archived": false,
        "has_subtrackers": false,
        "partner_id": 3,
        "cost_data_enabled": false,
        "label": "Adroll",
        "level": 1,
        "name": "Adroll",
        "token": "abc123",
        "url": "https://app.adjust.com/abc123",
        "click_url": "https://app.adjust.com/abc123?campaign={campaign_name}&idfa={idfa}&deeplink=http%3A%2F%2Fa.b%2Fc%3Fd%3D1%26e%3D%%MACROS%%",
        "impression_url": "https://s2s.adjust.com/impression/abc123?campaign={campaign_name}&idfa={idfa}&s2s=1",
        }
      ]
  }
}
```
