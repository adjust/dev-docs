# Ad spend cost endpoint

Adjust's Ad Spend API provides accurate, transparent, and granular ad spend data. Adjust maps the cost information using a campaign's `cost_id` allowing Report Services to report the ad spend data back to the partner.

## Before you begin

To integrate with the Adjust ad spend API you must set up your servers to send a set of mandatory parameters to Adjust through an HTTP POST request to the designated endpoint.

:::{note}
Adjust accepts ad spend data for an engagement up to seven days after it happens. You can send data at any time during this window.
:::

## Endpoint

```html
https://app.adjust.com/cost
```

### POST request

The POST method sends the cost information of a campaign using the `cost_id`.

:::{important}
The Ad Spend API can't process capital letters. Make sure to input all parameters in lowercase.
:::

:::{list-table} Parameters
:header-rows: 1

* - Parameter
   - Data type
   - In
   - Description
* - `cost_type`*
   - String
   - Query
   - Price model. Available cost types:
      * `cpc`
      * `cpi`
      * `cpe`
      * `cpm`
* - `cost_currency`*
   - String
   - Query
   - [ISO 4217](https://www.iban.com/currency-codes) currency code. See the [full list of supported currencies](https://help.adjust.com/resources/lists/supported-currencies).
* - `cost_amount`*
   - Float
   - Query
   - Float value for the cost  
   Maximum: 5 decimal places
* - `cost_id`*
   - String
   - Query
   - A unique value for matching cost information to an engagement  
   Minimum: 12 characters  
   Maximum: 256 characters
* - `tag`*
   - String
   - Query
   - A label used for logging and debugging  
   Maximum: 128 characters
:::

## Example

:::{tip}
Not sure how to format your request? Contact the integrations team at <wizards@adjust.com>.
:::

```console
$ curl -X POST https://app.adjust.com/cost \
-d "cost_type=cpi&cost_currency=usd&cost_amount=2&cost_id=abc123_company_name_test_1&tag=company_name_test"
```

## Responses

Here is a list of possible server responses:

:::{list-table} Response costs
:header-rows: 1

* - Code
   - Response
* - 200
   - Successful response
* - 400
   - Bad request
* - 401
   - Unauthorized
* - 403
   - Forbidden
:::
