import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
   if (context.url.pathname === "/404") {
      return Response.redirect(new URL("/en/404", context.url), 302);
   }
   return next();
});
