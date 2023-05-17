# SKAdNetwork metrics endpoint

Use this endpoint to retrieve [SKAdNetwork](hc:skadnetwork) metrics for your app.

:::{tip}
This endpoint returns JSON by default. You can return CSV by adding the following header to your call:

```text
Accept: text/csv
```
:::

## Endpoint

```text
https://api.adjust.com/kpis/v1/{app_token}/skadnetwork
```

### GET request

Returns SKAdNetwork metrics associated with an app. Metrics are returned in a `kpi_values` array in the same order as the metrics in your request.

::::{dropdown} Parameters

:::{list-table}
:header-rows: 1

* - Parameter
   - Format
   - In
   - Description
* - `app_token`
   - String
   - Path
   - Your app's 10 character identifier.
* - `start_date`
   - Date
   - Query
   - The start date of the selected period. `YYYY-MM-DD` format.
* - `end_date`
   - Date
   - Query
   - The end date of the selected period. `YYYY-MM-DD` format.
* - `utc_offset`
   - Time
   - Query
   - UTC offset for timezones. `[+-]HH:MM` format.
* - `kpis`
   - String
   - Query
   - Comma-separated list of SKAdNetwork metrics. Available options are:
      * SKAdNetwork app metrics
      * SKAdNetwork event metrics
* - `sandbox`
   - Boolean
   - Query
   - Whether results come from sandbox or production data. Defaults to production (`false`).
* - `attribution_type`
   - String
   - Query
   - The type of attribution to include in the results. Available options:
      * click
      * impression
      * all
* - `attribution_source`
   - String
   - Query
   - Determines whether in-app activity is assigned to the user’s install source (`first`) or divided among the install source and subsequent sources of reattribution (`dynamic`). The default setting is `dynamic`.
* - `countries`
   - String
   - Query
   - Comma-separated list of ISO 3166 alpha-2 country names.
* - `device_types`
   - String
   - Query
   - Comma-separated list of device types.
* - `regions`
   - String
   - Query
   - Comma-separated list of standard or account-specific business regions. Add `+` or `-` before the region name to include (default) or exclude it.
* - `grouping`
   - String
   - Query
   - Grouping parameters. [See Result grouping](/api/kpi-service/grouping.md) for more information.
* - `human_readable_kpis`
   - Boolean
   - Query
   - Replace metrics with human readable alternatives (for example "Lifetime Value" instead of `lifetime_value`).
:::

::::


### Example

::::{tab-set}

:::{tab-item} JSON
:sync: tabcode-json

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3/skadnetwork?start_date=2022-05-01&end_date=2022-05-31&kpis=valid_conversions,impression_conversion_rate,conversion_6&countries=de,gb&human_readable_kpis=true' \
--header 'Authorization: Token token={your_api_token}'
```

```json
{
  "result_parameters": {
    "kpis": ["valid_conversions","impression_conversion_rate","conversion_6"],
    "start_date": "2022-05-01",
    "end_date": "2022-05-31",
    "sandbox": false,
    "countries": ["de", "gb"],
    "trackers": [
      {
        "token": "12djsk",
        "name": "Network 1",
        "has_subtrackers": true
      },
      {
        "token": "15jvui",
        "name": "Network 2",
        "has_subtrackers": true
      }
    ],
    "grouping": ["trackers"]
  },
  "result_set": {
    "token": "2eb2na2w54c3",
    "name": "app name",
    "currency": "USD",
    "trackers": [
      {
        "token": "12djsk",
        "kpi_values": [1, 500, 31]
      },
      {
        "token": "15jvui",
        "kpi_values": [557, 880, 21]
      }
    ]
  }
}
```

:::
:::{tab-item} CSV
:sync: tabcode-csv

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3/skadnetwork?start_date=2022-05-01&end_date=2022-05-31&kpis=valid_conversions,impression_conversion_rate,conversion_6&countries=de,gb&human_readable_kpis=true' \
--header 'Authorization: Token token={your_api_token}' \
--header 'Accept: text/csv'
```

```csv
tracker_token,tracker_name,valid_conversions,impression_conversion_rate,conversion_6
12djsk,Network 1,1,500,31
15jvui,Network 1,557,880,21
```

:::
::::

## Response format

:::{tab-set-code}

```json
{
    "result_parameters": {
        "kpis": [
            "string",
            "string"
        ],
        "start_date": "2022-01-01",
        "end_date": "2022-01-31",
        "sandbox": false,
        "countries": [
            "string"
        ],
        "trackers": [
            {
                "token": "string",
                "name": "string",
                "has_subtrackers": true
            },
            {
                "token": "string",
                "name": "string",
                "has_subtrackers": true
            }
        ],
        "grouping": [
            "string"
        ]
    },
    "result_set": {
        "token": "string",
        "name": "string",
        "currency": "string",
        "apps": [
            {
                "token": "string",
                "name": "string",
                "currency": "string",
                "kpi_values": [
                    3
                ]
            }
        ],
        "trackers": [
            {
                "token": "string",
                "kpi_values": [
                    100,
                    130.24
                ]
            },
            {
                "token": "string",
                "kpi_values": [
                    557,
                    0.802
                ]
            }
        ]
    }
}
```

```csv
tracker_token,tracker_name,kpi1,kpi2
string,string,39623,39623
```

:::

## Parameter values

:::{include} /api/kpi-service/overview-metrics.md
:start-after: Parameter values
:::
