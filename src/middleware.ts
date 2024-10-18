import { defineMiddleware, sequence } from "astro/middleware";

const languages = ["en", "ja", "ko", "zh"]

const noLocale = defineMiddleware(async (context, next) => {
   const response = await next();
   const pathLang = context.url.pathname.split("/")[1]
   if (!languages.includes(pathLang)) {
      let newUrl = context.url.pathname.split("/");
      newUrl.splice(1, 1, "en");
      return context.redirect(newUrl.join("/"))
   }
   return response;
})

const notFound = defineMiddleware(async (context, next) => {
   const response = await next();
   const pathLang = context.url.pathname.split("/")[1]
   if (response.status === 404) {
      const lang = languages.includes(pathLang) ? pathLang : "en";
      return context.rewrite(`/${lang}/404`);
   }
   return response;
})

export const onRequest = sequence(noLocale, notFound)
