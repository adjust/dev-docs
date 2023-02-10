---
orphan: true
nosearch: true
---

You can pass an optional identifier to avoid measuring duplicate events. The SDK stores the last ten identifiers and skips revenue events with duplicate transaction IDs.

To set the identifier, call the {{ deduplicationMethod }} method and pass your transaction ID as a **string** argument.
