export const getQueryParameter = (name: string): string | null => {
   if (!name) return null; // Handle empty string or null/undefined parameter name

   const urlParams = new URLSearchParams(window.location.search);
   return urlParams.get(name);
};

export const updateQueryParameter = (name: string, value: string): void => {
   if (!name || value == null) return; // Handle null/undefined parameter name or value

   const url = new URL(window.location.href);
   url.searchParams.set(name, value);
   window.history.replaceState(null, "", url.toString());

   // Notify the browser when the URL value has changed
   window.dispatchEvent(new CustomEvent("urlChange", { detail: { name, value } }));
};
