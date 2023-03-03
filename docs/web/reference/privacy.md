# Privacy methods

Use these methods to handle user privacy in your app.

% Class method gdprForgetMe

::::{function} gdprForgetMe
:noindex:

Disables the SDK and sends an {abbr}`RTBF (Right to be Forgotten)` request to Adjust's servers

{#web-gdprforgetme-invocation}
```typescript
function gdprForgetMe(): void
```

% gdprForgetMe snippet

:::{tab-set-code}

```javascript
Adjust.gdprForgetMe();
```

:::

% Snippet end

::::

% Class method end

% Class method disableThirdPartySharing

::::{function} disableThirdPartySharing
:noindex:

Disables sharing of information with third parties for all users.

{#web-disablethirdpartysharing-invocation}
```typescript
function disableThirdPartySharing(): void
```

% disableThirdPartySharing snippet

:::{tab-set-code}

```javascript
Adjust.disableThirdPartySharing();
```

:::

% Snippet end

::::

% Class method end
