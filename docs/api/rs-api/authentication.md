---
myst:
   substitutions:
      token_format: "`Authorization: Bearer {API_TOKEN}`"
---

# Report Service API authentication

You need a [bearer token](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) to use the Report Service API. You can get this token in the Adjust dashboard by following the steps in this article.

## Before you begin

Users need [Admin, Editor, Reader, or Custom permissions](hc:users#dashboard-permission-levels) to use an authorization token.

:::{note}
Your bearer token has the same permissions as your Adjust user account.
:::

## Find your Adjust API token

Before you can start making API calls, you first need to find your Adjust API token. You can find your Adjust API token in your Adjust dashboard.

:::{important}
If you've configured SSO, your API tokens aren't available in the Adjust dashboard. Reach out to your Adjust representative or <support@adjust.com> for help with API tokens.
:::

::::{tab-set}
:::{tab-item} Adjust Suite
:sync: suite

Your Adjust API token is located in your **profile**. To find it, follow these steps:

1. Select the settings icon ({octicon}`gear`) in the bottom left corner.
2. Select {guilabel}`Account settings`. Your account settings page opens
3. Select the {guilabel}`My profile` tab.
4. Your {guilabel}`API token` is shown with your {guilabel}`User details`. Select the copy icon ({octicon}`copy`) to copy the token to your system clipboard.

:::

:::{tab-item} Classic dashboard
:sync: classic

Your Adjust API token is located with your user details. If you're an **admin** user, follow these steps:

1. Log in to the Classic dashboard.
2. Select the menu icon ({octicon}`three-bars`) in the top left.
3. Select {guilabel}`My Account`.
4. In the {guilabel}`Your Data` tab, find the {guilabel}`User Details` section. Select the gear icon ({octicon}`gear`) at the bottom of this segment.
5. Select {guilabel}`API Token`.
6. Copy your API token from the {guilabel}`API Token` panel.

If you're a **non-admin** user, follow these steps:

1. Log in to the Classic dashboard.
2. Select the menu icon ({octicon}`three-bars`) in the top left.
3. Select {guilabel}`My Profile`.
4. Select {guilabel}`API Token`.
5. Copy your API token from the {guilabel}`API Token` panel.

:::
::::

## Reset your Adjust API token

You can reset your Adjust API token at any time. Resetting your token invalidates the old token. This means that any requests made using the old token won't work. If you reset your Adjust API token, you need to make sure to update it wherever it's in use.

::::{tab-set}
:::{tab-item} Adjust Suite
:sync: suite

Your Adjust API token is located in your **profile**. To find it, follow these steps:

1. Select the settings icon ({octicon}`gear`) in the bottom left corner.
2. Select {guilabel}`Account settings`. Your account settings page opens
3. Select the {guilabel}`My profile` tab.
4. Your {guilabel}`API token` is shown with your {guilabel}`User details`.
5. Select {guilabel}`Reset API token`. A popup modal appears.
6. Enter your account password in the modal and select {guilabel}`Reset` to reset your API token. The modal closes and a confirmation appears in the top right of the screen.
7. Select the copy icon ({octicon}`copy`) to copy the token to your system clipboard.

:::

:::{tab-item} Classic dashboard
:sync: classic

Your Adjust API token is located with your user details. If you're an **admin** user, follow these steps:

1. Log in to the Classic dashboard.
2. Select the menu icon ({octicon}`three-bars`) in the top left.
3. Select {guilabel}`My Account`.
4. In the {guilabel}`Your Data` tab, find the {guilabel}`User Details` section. Select the gear icon ({octicon}`gear`) at the bottom of this segment.
5. Select {guilabel}`API Token`.
6. Select {guilabel}`Reset`.

If you're a **non-admin** user, follow these steps:

1. Log in to the Classic dashboard.
2. Select the menu icon ({octicon}`three-bars`) in the top left.
3. Select {guilabel}`My Profile`.
4. Select {guilabel}`API Token`.
5. Select {guilabel}`Reset`.

:::
::::

## User your API token to authenticate calls

Once you've got your Adjust API token, you can use it to authenticate your Report Service API calls. To do this, pass the token in the `Authorization` request header with your API calls.

The `Authorization` header uses the following format: {{ token_format }}

```console
$ curl https://api.adjust.com \
--header "Authorization: Bearer {API_TOKEN}"
```
