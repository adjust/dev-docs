# Set up cost ID

## What's a Cost ID?

**Cost ID** is a unique cost engagement identifier value between 12 and 256 characters in length. Adjust uses the `cost_id` parameter to match the received cost data with a click or impression.

Here are some points to consider when using `cost_id` with the Ad spend API:

* To avoid matching a value from one of Adjust's other network partners, the `cost_id` value must be unique. Adjust recommends using a {abbr}`UUID (Universally Unique Identifier)` or prefixing your ID with your company’s name. For example: `network_name_848dsf4939fgwjn028erg4`.
* You can use your pre-existing `click_id` or `impression_id`. If you don't generate your own click or impression IDs, then you can combine two or more placeholders to form it. For example for CPI, you could combine the user’s {abbr}`IDFA (ID For Advertisers)` and the app ID.

## Tracking CPM with Adjust

To send {abbr}`CPM (Cost Per Mille)` data to Adjust, send `cost_id` through the impression tracker URL and refer to it in the ad spend API call. Ensure that you send the CPM with each impression.
