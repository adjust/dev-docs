---
orphan: true
nosearch: true
---

% Record an event

```{code-block} js

function init (defaultEventConfig = {}) {
_ui.trackEventButton.addEventListener('click', _handleTrackEvent, false)
}
//...
function _handleTrackEvent () {
const eventConfig = getItem('eventConfig') || {..._defaultEventConfig}

if (_disabled) {
   return
}

_disabled = true
_ui.trackEventButton.classList.add('loading')
_ui.trackEventButton.disabled = true

clearTimeout(_timeoutId)
_timeoutId = setTimeout(() => {
   _disabled = false
   _ui.trackEventButton.classList.remove('loading')
   _ui.trackEventButton.disabled = false
   Adjust.trackEvent({
      eventToken: 'g3mfiw'
   })
}

```

% end

% Track event and redirect

```{code-block} js
Promise
  .race([
    Adjust.trackEvent({
      eventToken: 'YOUR_EVENT_TOKEN',
      // ... other event parameters
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => reject('Timed out'), 2000)
    })
  ])
  .catch(error => {
    // ... 
  })
  .then(() => {
    // ... perform redirect, for example 
    window.location.href = "https://www.example.org/"
  });
```

% end
