import { defineMiddleware } from "astro:middleware";

import { defaultLang } from "@i18n/locales";
import { langParamRegex } from "@i18n/utils";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  const path = context.url.pathname;

  if (response.status === 404 && !path.includes(`/${defaultLang}`)) {
    const updatedPath = path.replace(langParamRegex, `/${defaultLang}/`);

    return Response.redirect(new URL(updatedPath, context.url), 302);
  }

  return next();
});
