# Get partners

Use this endpoint to fetch a list of partners and associated data.

## Endpoint

```text
https://api.adjust.com/public/v1/partners
```

### GET request

Fetch a list of partners and associated data. Data are returned in an array of partner objects.

Parameters
Parameter	Data type	In	Description
after	String	Query	Cursor to get elements from the next page.
before	String	Query	Cursor to get elements from the previous page.
limit	Integer	Query	The maximum number of elements included in the response. Needs to be a positive integer value.

:::{include} /api/campaign-api/get-trackers.md
:start-after: Pagination description
:end-before: Description end
:::

```{code-block} json
:caption: Success response

{
  "id": 1,
  "display_name": "String",
  "supports_cost_data": true
}
```

:::{list-table} Response parameters
:header-rows: 1

* - Field
   - Data type
   - Description
   - Example
* - `id`
   - Integer
   - The partner's ID.
   - `174`
* - `display_name`
   - String
   - The partner's name.
   - `Adcolony`
* - `support_cost_data`
   - Boolean
   - Whether the partner supports cost data.
   - `true`
:::

## Example

```console
$ curl --location --request GET 'https://api.adjust.com/public/v1/partners?limit=1' \
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
      "next": "https://api.adjust.com/public/v1/partners?after=g2wAAAACYhW1_gxkAANuaWxq&limit=1",
      "previous": null,
      "cursors": {
        "after": "g2wAAAACYhW1_gxkAANuaWxq",
        "before": null
      }
    },
    "items": [
      {
        "id": 174,
        "display_name": "Adcolony",
        "supports_cost_data": true
      }
    ]
  }
}
```
