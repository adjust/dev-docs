# Filters data endpoint

The Filters data endpoint enables you to retrieve a list of valid metrics. You can use these metrics to filter calls to other endpoints in the Report Service API suite.

:::{seealso}
A full list of metrics is available in the [Datascape metrics glossary](https://help.adjust.com/en/article/datascape-metrics-glossary).
:::

## Endpoint

```text
https://dash.adjust.com/control-center/reports-service/filters_data
```

## GET request

Return a list of filter items. These correspond to the KPIs you can access in Automate. Use the `id` field of the returned objects to filter other API calls.

### Parameters

:::{list-table} Parameters
:header-rows: 1
:name: rs-params

* - Parameter
   - Data type
   - In
   - Description
* - `required_filters`*
   -  String
   -  Query
   -  A comma separated list of filters. See the [Required filters table](rs-filters) below for a list of values.
* -  `section`
   - Enum<String>
   - Query
   - The section you want to filter items by. See the [Section table](rs-section) below for a list of values.
* - `[required_filters]__contains`
   - String
   - Query
   - Enter a search term to look for a full or partial match in the object's `id` and `name` fields.
:::

::::{dropdown} Required filters

:::{list-table} Required filters
:header-rows: 1
:name: rs-filters

* - Filter
   - Description
* - `apps`
   -  Returns a list of your apps.
* - `apps_network`	
   - Returns a list of your apps and their associated store IDs.
* - `overview_metrics`
   - Returns a list of overview metrics.
* - `skad_metrics`
   - Returns a list of metrics relating to SKAdNetwork.
* - `cohort_maturity`
   - Returns a list of metrics relating to the maturity of a cohort. Examples: `mature`, `immature`.
* - `cohort_metrics`
   - Returns a list of metrics relating to your cohorts.
* - `event_metrics`
   - Returns a list of metrics relating to your events. All metrics are duplicated per event.
* - `cost_metrics`
   - Returns a list of metrics relating to cost.
* - `etl_metrics`
   - Returns a list of metrics relating to ETL (extract, transform, load) between Adjust and another system.
* - `dimensions`
   - Returns a list of dimensions.
* - `countries`
   - Returns a list of countries.
* - `currencies`
   - Returns a list of currencies.
* - `os_names`
   - Returns a list of operating system names.
* - `networks`
   - Returns a list of networks.
* - `partners`
   - Returns a list of partners.
* - `ad_revenue_sources`
   - Returns a list of ad revenue sources.
* - `ad_revenue_mode`
   - Returns a list of ad revenue modes.
* - `attribution_type`
   - Returns a list of attribution types. Examples: `all`, `click`, `impression`.
* - `attribution_source`
   - Returns a list of attribution sources.
* - `attribution_status`
   - Returns a list of attribution statuses.
* - `cost_mode`
   - Returns a list of cost modes. Examples: `attribution`, `network`, `mixed`.
* - `ad_spend_mode`
   - Returns a list of ad spend modes. Examples: `attribution`, `network`, `mixed`.
* - `timezone`
   - Returns a list of timezones.
* - `attributes`
   - Returns a list of attributes.
* - `statuses`
   - Returns a list of statuses relating to changes made to attributes. Examples: `success`, `pending`, `permission_failure`.
* - `index`
   - Returns a list of key metrics that relate to all apps.
* - `period_over_period`
   - Returns a list of time periods used for data comparison.
* - `cohort_metric_names`
   - Returns a list of readable names for cohort metrics.
* - `full_cohort_periods`
   - Returns a list of time periods related to cohorts.
* - `store_type`
   - Returns a list of app stores.
* - `skad_time_adjustment`
   - Returns a list of valid SKAdNetwork activity windows.
:::
::::

::::{dropdown} Section

:::{list-table} Section
:header-rows: 1
:name: rs-section

* - Section
   - Description
* - `conversion`
   - Metrics relating to click and impression conversions.
* - `fraud`
   - Metrics relating to fraud prevention.
* - `cost`
   - Metrics relating to cost.
* - `revenue`
   - Metrics relating to app revenue.
* - `retention`
   - Metrics relating to cohort-based user retention.
* - `events`
   - Metrics relating to events.
* - `conversion_events`
   - Metrics relating to SKAdNetwork conversion events.
* - `installs`
   - Metrics relating to app installs and reinstalls.
* - `conversion_values`
   - Metrics relating to SKAdNetwork conversion values.
:::
::::

### Responses

This endpoint returns the following responses:

% rs-api response codes

:::{list-table} Response codes
:header-rows: 1

* - Response
   - Description
   - Notes
* - `200`
   - Success
   - Returns report information
* - `204`
   - No content
   - Returned if the response object is empty
* - `400`
   - Bad request
   - Returned if your request is malformed or contains unsupported parameters
* - `401`
   - Unauthorized
   - Returned if your credentials are incorrect or absent
* - `403`
   - Forbidden
   - Returned if you try to access information you don't have permission to view
* - `429`
   - Too many requests
   - Returned if you exceed 50 simultaneous requests
* - `503`
   - Service unavailable
   - Returned if the server can't be reached
* - `504`
   - Gateway timeout
   - Returned if the query takes too long to return a response
:::

% Snippet end

```{code-block} json
:caption: Success response

{
   "required_filters_1": [
      {
         "id": "string",
         "name": "string",
         "short_name": "string",
         "section": "string",
         "formatting": "string"
      }
   ],
   "required_filters_2": [
      {
         "id": "string",
         "name": "string",
         "short_name": "string",
         "section": "string",
         "formatting": "string"
      },
      {
         "id": "string",
         "name": "string",
         "short_name": "string",
         "section": "string",
         "formatting": "string"
      }
   ]
}
```

## Example

::::{tab-set}
:::{tab-item} curl

```console
$ curl --header 'Authorization: Bearer {API_TOKEN}' \
'https://dash.adjust.com/control-center/reports-service/filters_data?required_filters=overview_metrics,cost_metrics&section=cost&overview_metrics__contains=ecpi&cost_metrics__contains=Ad spend'
```

:::
::::

```json
{
    "overview_metrics": [
        {
            "id": "ecpi_all",
            "name": "eCPI (All Installs)",
            "short_name": "eCPI (All)",
            "section": "Cost",
            "formatting": "money"
        },
        {
            "id": "ecpi",
            "name": "eCPI (Paid Installs)",
            "short_name": "eCPI (Paid)",
            "section": "Cost",
            "formatting": "money"
        }
    ],
    "cost_metrics": [
        {
            "id": "network_cost",
            "name": "Ad Spend (Network)",
            "short_name": "",
            "section": "Cost",
            "formatting": "decimal"
        },
        {
            "id": "network_cost_diff",
            "name": "Ad Spend Diff (Network)",
            "short_name": "",
            "section": "Cost",
            "formatting": "decimal"
        }
    ]
}
```
