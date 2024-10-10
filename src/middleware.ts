import { defineMiddleware } from "astro/middleware";

const languages = ["en", "ja", "ko", "zh"]

export const onRequest = defineMiddleware(async (context, next) => {
   const response = await next();
   const pathLang = context.url.pathname.split("/")[1]
   if (response.status === 404) {
      const lang = languages.includes(pathLang) ? pathLang : "en";
      return context.rewrite(`/${lang}/404`);
   }
   return response;
})
