# Privacy methods

Use these methods to handle user privacy in your app.

% classMethod gdprForgetMe

:::{function} gdprForgetMe
:noindex:

Disables the SDK and sends an {abbr}`RTBF (Right to be Forgotten)` request to Adjust's servers

```{code-block} ts
:name: web-gdprForgetMe-invocation

function gdprForgetMe(): void
```

```{include} /web/fragments/Adjust.md
:start-after: gdprForgetMe
:end-before: methodEnd
```

:::

% classMethod end

% classMethod disableThirdPartySharing

:::{function} disableThirdPartySharing
:noindex:

Disables sharing of information with third parties for all users.

```{code-block} ts
:name: web-disableThirdPartySharing-invocation

function disableThirdPartySharing(): void
```

```{include} /web/fragments/Adjust.md
:start-after: disableThirdPartySharing
:end-before: methodEnd
```

:::

% classMethod end
