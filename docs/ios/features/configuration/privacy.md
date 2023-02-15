# Set up privacy features

The Adjust SDK contains features that you can use to 

## GDPR right to be forgotten

Article 17 of the European Union's {abbr}`GDPR (General Data Protection Regulation)` grants users the right to be forgotten. When Adjust's servers receive a {abbr}`RTBF (Right to be Forgotten)` request, Adjust erases the user's data. The SDK also stops sending requests from the device for the app in question.

You can send the user's RTBF request to Adjust by calling the [`gdprForgetMe` method](ios-gdprForgetMe-invocation).

```{include} /ios/fragments/Adjust.md
:start-after: gdprForgetMe
:end-before: methodEnd
```

## Third-party sharing for specific users

You can use the Adjust SDK to record when a user changes their third-party sharing settings.

### Disable third-party sharing

Some users may want to opt-out of sharing their data with third-parties. To communicate this to Adjust, call the [`trackThirdPartySharing` method](ios-trackThirdPartySharing-invocation) with a `false` value. When Adjust's servers receive this information, Adjust stops sharing the user's data with third-parties. The Adjust SDK continues to work as expected.

```{include} /ios/fragments/Adjust.md
:start-after: trackThirdPartySharing false
:end-before: methodEnd
```

### Enable third-party sharing

If a user opts into sharing with third-parties, call the [`trackThirdPartySharing` method](ios-trackThirdPartySharing-invocation) with a `true` value. This updates the user's preferences.

```{include} /ios/fragments/Adjust.md
:start-after: trackThirdPartySharing true
:end-before: methodEnd
```

### Send granular information

You can attach granular information when a user updates their third-party sharing preferences. Use this information to communicate more detail about a user's decision.

```{include} /ios/fragments/Adjust.md
:start-after: trackThirdPartySharing addGranularOption
:end-before: methodEnd
```
