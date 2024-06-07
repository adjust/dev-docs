export const getQueryParameter = (name: string) => {
   const urlParams = new URLSearchParams(window.location.search);
   return urlParams.get(name);
};

// Set query params in the URL

export const updateQueryParameter = (name: string, value: string) => {
   const url = new URL(window.location.href);
   url.searchParams.set(name, value);
   window.history.replaceState(null, "", url.toString());

   // Notify the browser when the URL value has changed
   const urlChangeEvent = new Event("urlChange");
   window.dispatchEvent(urlChangeEvent);
};
