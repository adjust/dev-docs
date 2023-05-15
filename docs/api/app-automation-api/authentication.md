---
myst:
   substitutions:
      token_format: "`AdjustAuthorization: Token {API_TOKEN}`"
      api_name: "App Automation API"
---

# App Automation API authentication

You need a [bearer token](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) to use the App Automation API. You can get this token in the Adjust dashboard by following the steps in this article.

## Before you begin

:::{include} /api/rs-api/authentication.md
:start-after: Before you begin
:::

If you use Adjust signature authentication, include your signature in the `SignatureAuthorization` header.

```console
$ curl --location --request GET 'https://dash.adjust.com/control-center/adjust-app-automation/api/app' \
--header 'AdjustAuthorization: Token {API_TOKEN}' \
--header 'SignatureAuthorization: Token {SIGNATURE_TOKEN}'
```
