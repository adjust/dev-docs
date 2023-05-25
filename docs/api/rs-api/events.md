# Events endpoint

Use the Events endpoint to retrieve event slugs to use in your report service queries. The endpoint enables you to search for events using their readable names and returns useful information about each one.

## Endpoint

```text
https://dash.adjust.com/control-center/reports-service/events
```

## GET request

Return a list of event objects.

### Parameters

:::{list-table} Parameters
:header-rows: 1

* - Parameter
   - Data type
   - Required
   - Description
* - `event__contains`
   - String
   - No
   - Filters events by an exact match in the event's `key` or a partial match in its `value`.
:::

### Responses

This endpoint returns the following responses:

:::{include} /api/rs-api/filters-data.md
:start-after: rs-api response codes
:end-before: Snippet end
:::

```{code-block} json
:caption: Success response

[
  {
    "id": "string",
    "name": "string",
    "short_name": "",
    "section": "",
    "formatting": "money",
    "increase_is_negative": false,
    "description": "",
    "app_token": [
      "string"
    ],
    "tokens": [
      "string"
    ]
  }
]
```

:::{list-table} Response parameters
:header-rows: 1

* - Parameter
   - Data type
   - Description
* - `id`
   - String
   - The event slug.
* - `name`
   - String
   - The name of the event.
* - `short_name`
   - String
   - The shortened name of the event.
* - `section`
   - String
   - The event section. See the [Sections table](#rs-events-sections) for a summary of available values.
* - `formatting`
   - String
   - The format in which the event's data is stored.
* - `increase_is_negative` {bdg-warning}`Deprecated`
   - Boolean
   - Whether the most recent change was a value increase.
* - `app_token`
   - Array<String>
   - The app token with which the event is associated.
* - `tokens`
   - Array<String>
   - The event's token(s).

:::

::::{dropdown} Sections

:::{list-table} Sections
:header-rows: 1
:name: rs-events-sections

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

## Example

::::{tab-set}
:::{tab-item} cURL

```console
$ curl --header 'Authorization: Bearer {API_TOKEN}' \
'https://dash.adjust.com/control-center/reports-service/events?event__contains=purchase'
```

:::
::::

```json
[
  {
    "id": "purchase",
    "name": "Purchase event",
    "short_name": "PUR",
    "section": "Revenue",
    "formatting": "money",
    "increase_is_negative": false,
    "description": "",
    "app_token": [
      "4zb92bmajmrd"
    ],
    "tokens": [
      "abc123"
    ]
  }
]
```
