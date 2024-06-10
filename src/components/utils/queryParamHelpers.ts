export const getQueryParameter = (name: string): string | null => {
   if (!name) return null; // Handle null or undefined parameter name

   const urlParams = new URLSearchParams(window.location.search);
   return urlParams.get(name);
};

export const updateQueryParameter = (name: string, value: string): void => {
   if (!name || value === undefined || value === null) return; // Handle null or undefined parameter name or value

   const url = new URL(window.location.href);
   url.searchParams.set(name, value);
   window.history.replaceState(null, "", url.toString());

   // Notify the browser when the URL value has changed
   const urlChangeEvent = new CustomEvent("urlChange", { detail: { name, value } });
   window.dispatchEvent(urlChangeEvent);
};
