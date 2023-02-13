# Deep linking

Deep links are {abbr}`URIs (Uniform Resource Identifiers)` that direct users to a specific page in your app without any additional navigation. You can use them throughout your marketing funnel to improve user acquisition, engagement, and retention.

The Adjust SDK uses different logic depending on whether the user already has your app installed on their device:

Direct deep linking
   : Occurs if the user already has your app installed. The link takes the user to the page specified in the link

Deferred deep linking
   : Occurs if the user doesn't have your app installed. The link takes the user to a storefront to install your app first. After the user installs the app, it opens to the page specified in the link.

To get started, follow these steps.

```{toctree}
:maxdepth: 1

1. Retrieve data points <data-points>
2. Set up deep links in the Adjust dashboard <deep-link>
3. Set up direct deep linking <direct>
4. Set up deferred deep linking <deferred>
5. Link resolution <resolution>
6. Test deep linking <testing>
```
