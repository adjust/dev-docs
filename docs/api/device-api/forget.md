# Forget device endpoint

Use the Adjust forget device endpoint to clear device history from Adjust and test multiple installs on the same device.

:::{important}
You need **Admin** or **Editor** permissions to forget devices. If you have **Custom editor** permissions, you need to have edit rights for the app you are targeting. See [User permissions](hc:users) for more information.
:::

## Endpoint

```html
https://api.adjust.com/device_service/api/v1/forget_device
```

### POST request

Clears the device's information from Adjust.

:::{list-table} Parameters
:header-rows: 1

* - Parameter
   - Data type
   - In
   - Description
* - `app_token`*
   - String
   - Data
   - Your app's 12 digit identifier
* - `adid`*
   - String
   - Data
   - The device's Adjust ID
:::

:::{list-table} Responses
:header-rows: 1

* - Response
   - Message
   - Description
* - 200
   - Forgot device
   - Success response
:::

## Example

```console
$ curl --location --request POST "https://api.adjust.com/device_service/api/v1/forget_device" \
--header "Authorization: Token token=ask43jskdp2tg2hg87" \
--data "adid=acf8534f2f052395e617a38730682ccc&app_token=gwzpeepw8uf8"
```

```log
Forgot device
```
