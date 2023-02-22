# Privacy methods

Use these methods to handle user privacy in your app.

% Class method gdprForgetMe

:::::{function} gdprForgetMe
:noindex:

Disables the SDK and sends an {abbr}`RTBF (Right to be Forgotten)` request to Adjust's servers

```{code-block} ts
:name: web-gdprForgetMe-invocation

function gdprForgetMe(): void
```

% gdprForgetMe snippet

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.gdprForgetMe();
```
:::
::::

% Snippet end

:::::

% Class method end

% Class method disableThirdPartySharing

:::::{function} disableThirdPartySharing
:noindex:

Disables sharing of information with third parties for all users.

```{code-block} ts
:name: web-disableThirdPartySharing-invocation

function disableThirdPartySharing(): void
```

% disableThirdPartySharing snippet

::::{tab-set}
:::{tab-item} Javascript
```{code-block} js
Adjust.disableThirdPartySharing();
```
:::
::::

% Snippet end

:::::

% Class method end
