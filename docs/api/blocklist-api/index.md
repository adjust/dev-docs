#  Blocklist API

% Blocklist admonition
:::{important}
"Blacklist" and "whitelist" have been renamed to "blocklist" and "allowlist" respectively. Currently this change applies to the UI and documentation. While Adjust works towards updating the codebase, you'll still see the term "blacklist" in the API endpoints.
:::
% End admonition

Use the Adjust Blocklist API to block traffic from fraudulent or outdated tracker URLs. Blocklisted trackers display a {guilabel}`BLOCKLISTED` label in the dashboard.

You can blocklist tracker URLs for Dynamic and Module partners. You can't blocklist SAN partner tracker URLs. If you want to block traffic from a SAN partner URL, you need to delete the SAN partner. See Self-attributing networks for a list of SAN partners.

## 1. Authenticate your calls

To use the Adjust Blocklist API, you first need to get your Adjust API token. Follow the instructions in the Authentication article to find out how to use this token with the API.

## 2. Blocklist a tracker

[Blocklist a tracker](./blocklist.md) to block the following information:

* Engagements
   * Clicks
   * Impressions
* Callbacks to partners and networks
   * Module callbacks
   * Dynamic callbacks

Any existing attributions associated with the tracker remain associated. Data from attributed users associates to the tracker until the user is reattributed to a different tracker.

## 3. Unblocklist a tracker

If you want to reactivate a tracker URL, you can [unblocklist it](./unblocklist.md). Once you unblocklist the tracker, Adjust resumes tracking engagement and callbacks.

:::{note}
Unblocklisting a tracker enables it immediately. Attribution data associated to the tracker while it was blocklisted isn't considered. Only engagements received when the tracker is enabled are considered in your attribution funnel.
:::

## 4. View tracker status

You can check which trackers are blocklisted in the Adjust dashboard. To do this:

1. Find your app and select your app options caret ({octicon}`chevron-up`).
2. Select {guilabel}`Tracker URLs`.
3. Select {guilabel}`Settings` ({octicon}`gear`) next to your tracker.

Trackers on the blocklist display as {guilabel}`BLOCKLISTED`.

You can't {guilabel}`EDIT` blocklisted trackers. The only option you have is to hide the tracker. When you hide a tracker, you hide it from your list of active tracker URLs. You can hide or unhide a blocklisted tracker at any time. For more on hiding trackers, see Tracker maintenance.
