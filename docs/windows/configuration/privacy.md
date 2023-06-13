# Set up privacy features

The Adjust SDK contains features that you can use to handle user privacy in your app.

## GDPR right to be forgotten

Article 17 of the European Union's {abbr}`GDPR (General Data Protection Regulation)` grants users the right to be forgotten. When Adjust's servers receive an {abbr}`RTBF (Right to be Forgotten)` request, Adjust erases the user's data. The SDK also stops sending requests from the device for the app in question.

You can send the user's RTBF request to Adjust by calling the [`GdprForgetMe` method](#windows-gdprforgetme-invocation).

:::{include} /windows/reference/Adjust/privacy.md
:start-after: GdprForgetMe snippet
:end-before: Snippet end
:::
