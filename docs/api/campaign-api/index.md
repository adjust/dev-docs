# Campaign API

Use the Campaign API to get tracker, subtracker, and partner information. Create new trackers and update existing trackers with new partner information.

## How it works

1. Authenticate your calls
   
   To use the Campaign API endpoints, you first need to get your Adjust API token. Follow the instructions in the [Authentication article](authentication.md) to find out how to use this token with the API.

2. Fetch a list of network trackers associated with your app
   
   Use the trackers endpoint to fetch details about any trackers associated with your app. You can fetch a list of [top-level trackers](get-trackers.md) or a list of [subtrackers](get-subtrackers.md).

3. Create new network trackers
   
   You can add new trackers to your app by sending a [POST request to the trackers endpoint](create-tracker.md). This endpoint supports creating top-level trackers and subtrackers.

4. Fetch a list of partners
  
   Use the [partners endpoint](get-partners.md) to fetch a list of partners. You can use these when updating your trackers.

5. Update your tracker with new partners
   
   Send a [PATCH request to the trackers endpoint](update-tracker.md) to update existing trackers with new partners and cost data information.
