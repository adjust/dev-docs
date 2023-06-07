# KPI service

Use the Adjust KPI service to fetch aggregated data for your apps.

:::{note}
Adjust customers should switch to [Datascape](https://help.adjust.com/en/article/datascape) and [Automate](https://help.adjust.com/en/article/automate) for reporting. See the [Report Service API](/api/rs-api/index.md) article for information on how to programmatically interact with Datascape.
:::

## How it works

The KPI service enables you to return metrics about your app. Adjust supplies different endpoints for the different kinds of metrics associated with each app. For a full list of metrics, check out the [KPI glossary](https://help.adjust.com/en/article/kpi-glossary).

1. Authenticate your calls

   To use the KPI service, you first need to get your Adjust API token. Follow the instructions in the [Authentication article](authentication.md) to find out how to use this token with the API.

2. Fetch your app metrics

   :::{important}
   Many of the KPI Service KPIs for ad spend [are deprecated](https://help.adjust.com/en/article/cost-aggregation-deprecation) are deprecated and return a value of `0`. To report on data from the new Ad Spend pipeline, use the [Report Service API](/api/rs-api/index.md).
   :::

   Call the KPI service to return metrics associated with your app. Choose from the following endpoints:

   - [Overview metrics](https://help.adjust.com/en/article/overview-metrics-endpoints)
   - [Event metrics](https://help.adjust.com/en/article/event-metrics-endpoints)
   - [Cohort metrics](https://help.adjust.com/en/article/cohort-metrics-endpoints)

   You can specify how the service groups your data by passing [grouping options](https://help.adjust.com/en/article/result-grouping).
