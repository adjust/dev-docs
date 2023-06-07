# Status endpoint

Use the `/status` endpoint to check the status of your new app. This endpoint returns the status of the process that copies settings from your `_Template` app to your new app.

## Endpoint

```text
https://settings.adjust.com/api/status/{ticket_token}
```

### GET request

Use this endpoint to return the status of a settings copy process. You receive your `ticket_token` when you create your app using the [`/app` endpoint](app-endpoint.md).

:::{list-table} Parameters
:header-rows: 1

* - Name
   - Data type
   - In
   - Description
* - `ticket_token`*
   - String
   - Path
   - The token of the ticket you want to check. The `/app` endpoint returns this when you create your app.
:::


```{code-block} json
:caption: Success response

{
   "status": "String"
}
```

:::{dropdown} Statuses
* `NEW` - the ticket was created, but the migration job hasn't started.
* `OPENED` - the job for this ticket has started.
* `FAILED` - the job failed.
* `COMPLETED` - the job was completed successfully.
:::

## Example

```console
$ curl \
--header "AdjustAuthorization: Token <adjust api token>" \
--header "SignatureAuthorization: Token <adjust signature token>" \
-X GET https://settings.adjust.com/api/status/<ticket_token>
```

```json
{
    "status": "OPENED",
    "events": {
        "successes": [
        ],
        "failures": [
        ],
    },
    "partners": {
        "section": "partners",
        "detail": "Could not be start, because {events} sections has failed"
    }
}
```
