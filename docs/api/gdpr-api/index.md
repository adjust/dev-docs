# GDPR API

Adjust offers an API endpoint to facilitate {abbr}`RTBF (Right to be Forgotten)` requests. This endpoint performs the following actions for a given device:

* Permanently deletes all the user’s personal data from Adjust for the specified app.
* Stops receiving the user’s information from the Adjust SDK for the specified app.
* Removes all references to the user's data in the Adjust dashboard for the specified app.
* Configure your server to send requests to this API endpoint when users send {abbr}`RTBF (Right to be Forgotten)` requests. See Adjust's [GDPR article](https://help.adjust.com/en/article/gdpr) for more information about {abbr}`RTBF (Right to be Forgotten)` requests.

:::{important}
This action is permanent. Adjust can't reinstate data previously associated with a device or receive future requests from the device once a {abbr}`RTBF (Right to be Forgotten)` request is sent.
:::

## Endpoint

```text
https://gdpr.adjust.com/gdpr_forget_device
```

### POST request

Send a POST request including your app token and device ID to remove all data associated with the device.

:::{note}
{abbr}`RTBF (Right to be Forgotten)` requests only apply to the app you specify in your call. Device data for other apps aren't affected.
:::

:::{list-table} Parameters
:header-rows: 1

* - Parameter
   - Data type
   - In
   - Description
* - `app_token`*
   - String
   - Query
   - The Adjust app token from the dashboard
* - `s2s`*
   - Boolean
   - Query
   - Whether the call is a Server-to-Server (S2S) call. Value must be `1` (true)
* - `device_token`*
   - String
   - Query
   - ID of the device you want Adjust to forget. See [the table below](device-ids) for a list of accepted values
:::

::::{dropdown} Device identifiers

You must include a device identifier in your request. Below is a list of accepted identifiers.

:::{list-table}
:header-rows: 1
:name: device-ids

* -  Parameter
   -  Description
   -  Example
* -  `idfa`
   - iOS ID for advertisers
   - `8C6CBCOD-5F43-4765-A6E6-84DFF3D24707`
* - `idfv`
   - iOS ID for vendors
   - `CCB300A0-DE1B-4D48-BC7E-599E453B8DD4`
* - `gps_adid`
   - Google Play Store advertising ID
   - `38400000-8cf0-11bd-b23e-10b96e40000d`
* - `fire_adid`
   - Fire OS advertising ID
   - `63c5519b-7e66-7ee6-aa5d-3b290743811f`
* - `win_adid`
   - Windows advertising ID
   - `107e8ea14329d4a2194ebbb6dc0c0fd7`
* - `adid`
   - Adjust device ID
   - `18546f6171f67e29d1cb983322ad1329`
:::

::::

## Example

```console
$ curl -X POST "https://gdpr.adjust.com/gdpr_forget_device?s2s=1&app_token=kwrqhymtnsr2&idfa=9C5CBC1D-4F42-4764-A5E6-84DAF3D24707"
```

:::{list-table} Response codes
:header-rows: 1

* - Status code
   - Meaning
   - Description
* - 200
   - OK
   - Request was received and processed
* - 400
   - Bad request
   - Invalid formatting or token. Check you have included the necessary parameters. Contact your account manager or <support@adjust.com> if you need help.
* - 429
   - Too many requests
   - The endpoint is rate limited to 10 requests per minute and stops responding to requests beyond this threshold to prevent abuse. Try resending the request later.
* - 451
   - Unavailable for legal reasons
   - 
:::
