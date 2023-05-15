# Unblocklist tracker

:::{include} /api/blocklist-api/index.md
:start-after: Blocklist admonition
:end-before: End admonition
:::

Unblocklist a tracker to re-enable engagement measurement, attribution and callbacks to it and any related subtrackers.

## Endpoint

```text
https://api.adjust.com/dashboard/api/trackers/{tracker}/unblacklist
```

### POST request

Unblocklist the specified tracker.

:::{list-table} Parameters
:header-rows: 1

* - Parameter
   - Definition
* - `{tracker}`*
   - Alphanumeric Adjust tracker token
:::

```{code-block} json
:caption: Success response

{
  "label": "string",
   "token": "string",
   "name": "string",
   "url": "string",
   "path": "string",
   "has_subtrackers": true,
   "archived": true,
   "visible": true,
   "attribution_partner": true,
   "creative_token": "string",
   "adgroup_token": "string",
   "campaign_token": "string",
   "network_token": "string",
   "click_url": "string",
   "impression_url": "string",
   "allow_partner_linking": true,
   "settings": {
       "partner_id": "string",
       "partner_display_name": "string",
       "tracking_parameters": "string",
       "cost_data_parameters": "string",
       "cost_data": true,
       "partner_cost_data_parameters": "string",
       "campaign_structure": "string",
       "additional_parameters": "string",
       "attribution_settings": "string",
       "blacklisted": true
  },
   "urls": {
       "descendants": "string",
       "ancestors": "string",
       "update": "string",
       "show": "string",
       "archive": "string",
       "unarchive": "string"
   }
}
```

## Example

```console
$ curl --location --request POST "https://api.adjust.com/dashboard/api/trackers/abc123/unblacklist" \
--header "Authorization: Token token={api_token}"
```

```json
{
  "label": "Twitter installs",
  "token": "abc123",
  "name": "Twitter installs",
  "url": "https://app.adjust.com/abc123",
  "path": "",
  "has_subtrackers": true,
  "archived": false,
  "visible": true,
  "attribution_partner": false,
  "creative_token": null,
  "adgroup_token": null,
  "campaign_token": null,
  "network_token": "abc123",
  "click_url": "https://app.adjust.com/abc123",
  "impression_url": "https://view.adjust.com/impression/abc123",
  "allow_partner_linking": true,
  "settings": {
    "partner_id": null,
    "partner_display_name": null,
    "tracking_parameters": null,
    "cost_data_parameters": null,
    "cost_data": false,
    "partner_cost_data_parameters": null,
    "campaign_structure": null,
    "additional_parameters": null,
    "attribution_settings": null,
    "blacklisted": false
  },
  "urls": {
    "descendants": "/api/trackers/abc123/descendants.json",
    "ancestors": "/api/trackers/abc123/ancestors.json",
    "update": "/api/trackers/abc123.json",
    "show": "/api/trackers/abc123.json",
    "archive": "/api/trackers/abc123/archive.json",
    "unarchive": "/api/trackers/abc123/unarchive.json"
  }
}
```
