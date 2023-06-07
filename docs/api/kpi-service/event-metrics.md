# Event metrics endpoints

Use these endpoints to retrieve event metrics for your app.

:::{tip}
These endpoints return JSON by default. You can return CSV by adding the following header to your call:

```text
Accept: text/csv
```
:::


## Event overview endpoint

```text
https://api.adjust.com/kpis/v1/{app_token}/events
```

### GET request

Returns event metrics associated with an app. Metrics are returned in a `kpi_values` array in the same order as the metrics in your request.

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
   - Comma-separated list of Event metrics. Prepend your event token to each metric. Example: `token1_revenue`
* - `sandbox`
   - Boolean
   - Query
   - Whether results come from sandbox or production data. Defaults to production (`false`).
* - `events`
   - String
   - Query
   - Comma-separated list of event tokens.
* - `attribution_type`
   - String
   - Query
   - The type of attribution to include in the results. Available options:
      * `click`
      * `impression`
      * `all`
* - `attribution_source`
   - String
   - Query
   - Determines whether in-app activity is assigned to the user’s install source (`first`) or divided among the install source and subsequent sources of reattribution (`dynamic`). The default setting is `dynamic`.
* - `countries`
   - String
   - Query
   - Comma-separated list of ISO 3166 alpha-2 country names.
* - `os_names`
   - String
   - Query
   - Comma-separated list of OS names.
* - `device_types`
   - String
   - Query
   - Comma-separated list of device types.
* - `grouping`
   - String
   - Query
   - Grouping parameters. [See Result grouping](/api/kpi-service/grouping.md) for more information.
* - `tracker_filter`
   - String
   - Query
   - The tracker tokens of any trackers you want to include in your results. Only metrics relating to these trackers are returned.
* - `partner_ids`
   - String
   - Query
   - Comma-separated list of partner IDs. Only metrics from the partners in this list are returned.
* - `human_readable_kpis`
   - Boolean
   - Query
   - Replace metrics with human readable alternatives (for example: "Lifetime Value" instead of `lifetime_value`).
:::

::::

### Example

::::{tab-set}

:::{tab-item} JSON
:sync: tabcode-json

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3/events?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions,installs&countries=de,gb' \
--header 'Authorization: Token token={your_api_token}'
```

```json
{
  "result_parameters": {
    "kpis": ["revenue", "events", "revenue_per_event"],
    "start_date": "2022-05-01",
    "end_date": "2022-05-31",
    "sandbox": false,
    "countries": ["de", "gb"],
    "events": [{"token": "abcdef","name": "Login"}, {"token": "badcfe","name": "Level Up"}],
    "grouping": ["trackers", "weeks", "events"],
    "trackers": [
      {
        "token": "12djsk",
        "name": "Network 1",
        "has_subtrackers": true
      }
    ]
  },
  "result_set": {
    "token": "2eb2na2w54c3",
    "name": "app name",
    "currency": "USD",
    "trackers": [
      {
        "token": "12djsk",
        "dates": [
          {
            "date": "2022-05-02",
            "events": [
              {
                "token": "abcdef",
                "kpi_values": [4, 5, 0.8]
              },
              {
                "token": "badcfe",
                "kpi_values": [3, 5, 7.2]
              }
            ]
          },
          {
            "date": "2022-05-09",
            "events": [
              {
                "token": "badcfe",
                "kpi_values": [4, 5, 0.8]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

:::
:::{tab-item} CSV
:sync: tabcode-csv

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3/events?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions,installs&countries=de,gb' \
--header 'Authorization: Token token={your_api_token}' \
--header 'Accept: text/csv'
```

```csv
tracker_token,tracker_name,date,event_token,revenue,events,revenue_per_event
12djsk,Network 1,2022-05-02,abcdef,4,5,0.8
12djsk,Network 1,2022-05-02,badcfe,3,5,7.2
12djsk,Network 1,2022-05-09,badcfe,4,5,0.8
```

:::
::::

## Tracker event endpoint

```text
https://api.adjust.com/kpis/v1/{app_token}/trackers/{tracker_token}/events
```

### GET request

Returns event metrics associated with a specific tracker. Metrics are returned in a `kpi_values` array in the same position the KPIs in your request.

::::{dropdown} Parameters

:::{list-table}
:header-rows: 1

* - Parameter
   - Format
   - In
   - Description
* - `app_token`
   -  String
   - Path
   - Your app's 10 character identifier.
* - `tracker_token`
   - 	String
   - Path
   - Your tracker's 6 character identifier.
* - `start_date`
   - 	Date
   - Query
   - The start date of the selected period. `YYYY-MM-DD` format.
* - `end_date`
   - 	Date
   - Query
   - The end date of the selected period. `YYYY-MM-DD` format.
* - `utc_offset`
   - 	Time
   - Query
   - UTC offset for timezones. `[+-]HH:MM` format.
* - `kpis`
   - 	String
   - Query
   - Comma-separated list of Event metrics. Prepend your event token to each metric. Example: `token1_revenue`
* - `sandbox`
   - 	Boolean
   - Query
   - Whether results come from sandbox or production data. Defaults to production (`false`).
* - `events`
   - 	String
   - Query
   - Comma-separated list of event tokens.
* - `attribution_type`
   - 	String
   - Query
   - The type of attribution to include in the results. Available options:
      * `click`
      * `impression`
      * `all`
* - `attribution_source`
   - String
   - Query
   - Determines whether in-app activity is assigned to the user’s install source (`first`) or divided among the install source and subsequent sources of reattribution (`dynamic`). The default setting is `dynamic`.
* - `countries`
   - String
   - Query
   - Comma-separated list of ISO 3166 alpha-2 country names.
* - `os_names`
   - String
   - Query
   - Comma-separated list of OS names.
* - `device_types`
   - String
   - Query
   - Comma-separated list of device types.
* - `grouping`
   - String
   - Query
   - Grouping parameters. [See Result grouping](/api/kpi-service/grouping.md) for more information.
* - `tracker_filter`
   - String
   - Query
   - The tracker tokens of any trackers you want to include in your results. Only metrics relating to these trackers are returned.
* - `partner_ids`
   - String
   - Query
   - Comma-separated list of partner IDs. Only metrics from the partners in this list are returned.
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
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3/trackers/12djsk/events?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions,installs&countries=de,gb' \
--header 'Authorization: Token token={your_api_token}'
```

```json
{
  "result_parameters": {
    "kpis": ["revenue", "events", "revenue_per_event"],
    "start_date": "2022-05-01",
    "end_date": "2022-05-31",
    "sandbox": false,
    "countries": ["de", "gb"],
    "events": [{"token": "abcdef","name": "Login"}, {"token": "badcfe","name": "Level Up"}],
    "grouping": ["trackers", "weeks", "events"],
    "trackers": [
      {
        "token": "12djsk",
        "name": "Network 1",
        "has_subtrackers": true
      }
    ]
  },
  "result_set": {
    "token": "2eb2na2w54c3",
    "name": "app name",
    "currency": "USD",
    "trackers": [
      {
        "token": "12djsk",
        "dates": [
          {
            "date": "2022-05-02",
            "events": [
              {
                "token": "abcdef",
                "kpi_values": [4, 5, 0.8]
              },
              {
                "token": "badcfe",
                "kpi_values": [3, 5, 7.2]
              }
            ]
          },
          {
            "date": "2022-05-09",
            "events": [
              {
                "token": "badcfe",
                "kpi_values": [4, 5, 0.8]
              }
            ]
          }
        ]
      }
    ]
  }
}
```

:::

:::{tab-item} CSV
:sync: tabcode-csv

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3/trackers/12djsk/events?start_date=2022-05-01&end_date=2022-05-31&kpis=revenue,events,revenue_per_event&grouping=trackers,weeks,events&countries=de,gb' \
--header 'Authorization: Token token={your_api_token}' \
--header 'Accept: text/csv'
```

```csv
tracker_token,tracker_name,date,event_token,revenue,events,revenue_per_event
12djsk,Network 1,2022-05-02,abcdef,4,5,0.8
12djsk,Network 1,2022-05-02,badcfe,3,5,7.2
12djsk,Network 1,2022-05-09,badcfe,4,5,0.8
```

:::

::::

++++<

+++<

## Response format

:::{tab-set-code}

```json
{
    "result_parameters": {
        "kpis": [
            "string"
        ],
        "start_date": "2022-07-01",
        "end_date": "2022-07-28",
        "sandbox": false,
        "countries": [
            "string"
        ],
        "events": [
            {
                "name": "string",
                "token": "string"
            }
        ],
        "trackers": [
            {
                "token": "string",
                "name": "string",
                "has_subtrackers": true
            }
        ],
        "grouping": [
            "string"
        ],
        "attribution_type": "string",
        "utc_offset": "00:00",
        "attribution_source": "string"
    },
    "result_set": {
        "token": "string",
        "name": "string",
        "currency": "string",
        "trackers": [
            {
                "token": "string",
                "dates": [
                    {
                        "date": "2022-06-27",
                        "events": [
                            {
                                "token": "string",
                                "kpi_values": [
                                    12887
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "token": "string",
                "dates": [
                    {
                        "date": "2022-06-27",
                        "events": [
                            {
                                "token": "string",
                                "kpi_values": [
                                    2
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```

```csv
tracker_token,tracker_name,date,event_token,event_name,metric
string,string,2022-06-27,string,string,12887
string,string,2022-06-27,string,string,2
```

:::

## Default parameters

:::{list-table}
:header-rows: 1

* - Parameter
   - Default values
* - `kpis`
   - 
      * `revenue_events`
      * `revenue`
:::

## Parameter values

:::{include} /api/kpi-service/overview-metrics.md
:start-after: Parameter values
:::
