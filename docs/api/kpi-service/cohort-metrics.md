# Cohort metrics endpoints

Use these endpoints to retrieve cohort metrics for your app.

:::{tip}
These endpoints return JSON by default. You can return CSV by adding the following header to your call:

```text
Accept: text/csv
```
:::

## Cohort overview endpoint

```text
https://api.adjust.com/kpis/v1/{app_token}/cohorts
```

### GET request

Returns cohort metrics associated with an app. Metrics are returned in a `kpi_values` array in the same order as the metrics in your request.

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
   - Comma-separated list of metrics. Available options are:
      * App metrics
      * Fraud metrics (requires the Fraud Prevention Suite)
      * Ad spend metrics
* - `sandbox`
   - Boolean
   - Query
   - Whether results come from sandbox or production data. Defaults to production (`false`).
* - `attribution_type`
   - String
   - Query
   - The type of attribution to include in the results. Available options:
      * `click`
      * `impression`
      * `all`
* - `period`
   - String
   - Query
   - The cohort period you want results for. Available options:
      * `day`
      * `week`
      * `month`
* - `reattributed`
   - String
   - Query
   - Filter metrics by:
      * installed users (`false`)
      * reattributed users (`true`)
      * all users (`default`)
* - `events`
   - String
   - Query
   - Comma-separated list of event tokens.
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
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3/cohorts?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions&countries=de,gb' \
--header 'Authorization: Token token={your_api_token}'
```

```json
{
    "result_parameters": {
        "kpis": [
            "sessions"
        ],
        "start_date": "2022-07-01",
        "end_date": "2022-07-28",
        "sandbox": false,
        "countries": [
            "de",
            "gb"
        ],
        "events": [
            {
                "name": "General Revenue Event",
                "token": "0"
            }
        ],
        "trackers": [
            {
                "token": "12djsk",
                "name": "Network 1",
                "has_subtrackers": false
            }
        ],
        "grouping": [
            "trackers",
            "weeks",
            "events",
            "periods"
        ],
        "period": "week",
        "attribution_type": "click",
        "utc_offset": "00:00",
        "day_def": "24h",
        "attribution_source": "dynamic"
    },
    "result_set": {
        "token": "2eb2na2w54c3",
        "name": "First tracker",
        "currency": "EUR",
        "trackers": [
            {
                "token": "12djsk",
                "dates": [
                    {
                        "date": "2022-04-27",
                        "events": [
                            {
                                "token": "0",
                                "periods": [
                                    {
                                        "period": "0",
                                        "kpi_values": [
                                            4295
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2022-05-04",
                        "events": [
                            {
                                "token": "0",
                                "periods": [
                                    {
                                        "period": "0",
                                        "kpi_values": [
                                            10073
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2022-05-11",
                        "events": [
                            {
                                "token": "0",
                                "periods": [
                                    {
                                        "period": "0",
                                        "kpi_values": [
                                            10080
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2022-05-18",
                        "events": [
                            {
                                "token": "0",
                                "periods": [
                                    {
                                        "period": "0",
                                        "kpi_values": [
                                            10080
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2022-05-25",
                        "events": [
                            {
                                "token": "0",
                                "periods": [
                                    {
                                        "period": "0",
                                        "kpi_values": [
                                            5213
                                        ]
                                    }
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
:::

:::{tab-item} CSV
:sync: tabcode-csv

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3/cohorts?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions,installs&grouping=trackers,weeks,events&countries=de,gb' \
--header 'Authorization: Token token={your_api_token}' \
--header 'Accept: text/csv'
```

```csv
tracker_token,tracker_name,date,event_token,event_name,period,sessions
12djsk,Network 1,2022-04-27,0,General Revenue Event,0,4295
12djsk,Network 1,2022-05-04,0,General Revenue Event,0,10073
12djsk,Network 1,2022-05-11,0,General Revenue Event,0,10080
12djsk,Network 1,2022-05-18,0,General Revenue Event,0,10080
12djsk,Network 1,2022-05-25,0,General Revenue Event,0,5212
```

:::

::::

## Multiple apps cohort endpoint

```text
https://api.adjust.com/kpis/v1/{app_tokens}/cohorts
```

### GET request

Returns cohort metrics associated with multiple apps. Metrics are returned in a `kpi_values` array in the same order as the metrics in your request.

::::{dropdown} Parameters

:::{list-table}
:header-rows: 1

* - Parameter
   - Format
   - In
   - Description
* - `app_tokens`
   - String
   - Query
   - A comma-separated list of app tokens.
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
   - Comma-separated list of metrics. Available options are:
      * App metrics
      * Fraud metrics (requires the Fraud Prevention Suite)
      * Ad spend metrics
* - `sandbox`
   - Boolean
   - Query
   - Whether results come from sandbox or production data. Defaults to production (`false`).
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
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3,3fdwnag4ecf2/cohorts?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions&countries=de,gb&human_readable_kpis=true' \
--header 'Authorization: Token token={your_app_token}' \
```

```json
{
    "result_parameters": {
        "kpis": [
            "Sessions"
        ],
        "start_date": "2022-05-01",
        "end_date": "2022-05-31",
        "sandbox": false,
        "countries": [
            "de",
            "gb"
        ],
        "grouping": [
            "apps",
            "periods"
        ],
        "period": "day",
        "attribution_type": "click",
        "utc_offset": "00:00",
        "day_def": "24h",
        "attribution_source": "dynamic"
    },
    "result_set": {
        "apps": [
            {
                "token": "2eb2na2w54c3",
                "name": "app name",
                "currency": "EUR",
                "periods": [
                    {
                        "period": "0",
                        "kpi_values": [
                            3
                        ]
                    }
                ]
            },
            {
                "token": "3fdwnag4ecf2",
                "name": "test app",
                "currency": "EUR",
                "periods": [
                    {
                        "period": "0",
                        "kpi_values": [
                            40158
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
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3,3fdwnag4ecf2/cohorts?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions&countries=de,gb&human_readable_kpis=true' \
--header 'Authorization: Token token={your_app_token}' \
--header 'Accept: text/csv'
```

```csv
App Token,App Name,Days after Install,Sessions
2eb2na2w54c3,app name,0,3
3fdwnag4ecf2,test app,0,40162
```

:::

::::

## Tracker cohort endpoint

```text
https://api.adjust.com/kpis/v1/{app_token}/trackers/{tracker_token}/cohorts
```

### GET request

Returns cohort metrics associated with a specific tracker. Metrics are returned in a `kpi_values` array in the same position the KPIs in your request.

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
* - `tracker_token`
   - String
   - Path
   - Your tracker's 6 character identifier.
* - `start_date`
   - Date
   - Query
   - The start date of the selected period. YYYY-MM-DD format.
* - `end_date`
   - Date
   - Query
   - The end date of the selected period. YYYY-MM-DD format.
* - `utc_offset`
   - Time
   - Query
   - UTC offset for timezones. [+-]HH:MM format.
* - `kpis`
   - String
   - Query
   - Comma-separated list of metrics. Available options are:
      * App metrics
      * Fraud metrics (requires the Fraud Prevention Suite)
      * Ad spend metrics
* - `sandbox`
   - Boolean
   - Query
   - Whether results come from sandbox or production data. Defaults to production (false).
* - `attribution_type`
   - String
   - Query
   - The type of attribution to include in the results. Available options:
      * `click`
      * `impression`
      * `all`
* - `period`
   - String
   - Query
   - The cohort period you want results for. Available options:
      * `day`
      * `week`
      * `month`
* - `reattributed`
   - String
   - Query
   - Filter metrics by:
      * installed users (`false`)
      * reattributed users (`true`)
      * all users (`default`)
* - `events`
   - String
   - Query
   - Comma-separated list of event tokens.
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
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3/trackers/12djsk/cohorts?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions&countries=de,gb' \
--header 'Authorization: Token token={your_api_token}'
```

```json
{
    "result_parameters": {
        "kpis": [
            "sessions"
        ],
        "start_date": "2022-07-01",
        "end_date": "2022-07-28",
        "sandbox": false,
        "countries": [
            "de",
            "gb"
        ],
        "events": [
            {
                "name": "General Revenue Event",
                "token": "0"
            }
        ],
        "trackers": [
            {
                "token": "12djsk",
                "name": "Network 1",
                "has_subtrackers": false
            }
        ],
        "grouping": [
            "trackers",
            "weeks",
            "events",
            "periods"
        ],
        "period": "week",
        "attribution_type": "click",
        "utc_offset": "00:00",
        "day_def": "24h",
        "attribution_source": "dynamic"
    },
    "result_set": {
        "token": "2eb2na2w54c3",
        "name": "First tracker",
        "currency": "EUR",
        "trackers": [
            {
                "token": "12djsk",
                "dates": [
                    {
                        "date": "2022-04-27",
                        "events": [
                            {
                                "token": "0",
                                "periods": [
                                    {
                                        "period": "0",
                                        "kpi_values": [
                                            4295
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2022-05-04",
                        "events": [
                            {
                                "token": "0",
                                "periods": [
                                    {
                                        "period": "0",
                                        "kpi_values": [
                                            10073
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2022-05-11",
                        "events": [
                            {
                                "token": "0",
                                "periods": [
                                    {
                                        "period": "0",
                                        "kpi_values": [
                                            10080
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2022-05-18",
                        "events": [
                            {
                                "token": "0",
                                "periods": [
                                    {
                                        "period": "0",
                                        "kpi_values": [
                                            10080
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "date": "2022-05-25",
                        "events": [
                            {
                                "token": "0",
                                "periods": [
                                    {
                                        "period": "0",
                                        "kpi_values": [
                                            5213
                                        ]
                                    }
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

:::

:::{tab-item} CSV
:sync: tabcode-csv

```console
$ curl --location --request GET 'http://api.adjust.com/kpis/v1/2eb2na2w54c3/trackers/12djsk/cohorts?start_date=2022-05-01&end_date=2022-05-31&kpis=sessions,installs&grouping=trackers,weeks,events&countries=de,gb' \
--header 'Authorization: Token token={your_api_token}' \
--header 'Accept: text/csv'
```

```csv
tracker_token,tracker_name,date,event_token,event_name,period,sessions
12djsk,Network 1,2022-04-27,0,General Revenue Event,0,4295
12djsk,Network 1,2022-05-04,0,General Revenue Event,0,10073
12djsk,Network 1,2022-05-11,0,General Revenue Event,0,10080
12djsk,Network 1,2022-05-18,0,General Revenue Event,0,10080
12djsk,Network 1,2022-05-25,0,General Revenue Event,0,5212
```

:::

::::

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
                "has_subtrackers": false
            }
        ],
        "grouping": [
            "string"
        ],
        "period": "string",
        "attribution_type": "string",
        "utc_offset": "00:00",
        "day_def": "string",
        "attribution_source": "string"
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
                "periods": [
                    {
                        "period": "0",
                        "kpi_values": [
                            3
                        ]
                    }
                ]
            }
        ],
        "trackers": [
            {
                "token": "string",
                "dates": [
                    {
                        "date": "2022-06-27",
                        "events": [
                            {
                                "token": "string",
                                "periods": [
                                    {
                                        "period": "string",
                                        "kpi_values": [
                                            1
                                        ]
                                    }
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
tracker_token,tracker_name,date,event_token,event_name,period,{kpi}
string,string,2022-06-27,0,string,0,1
```

:::

## Default parameters

:::{list-table}
:header-rows: 1

* - Parameter
   - Default values
* - `kpis`
   - 
      * `retention_rate`
:::

## Parameter values

:::{include} /api/kpi-service/overview-metrics.md
:start-after: Parameter values
:::
