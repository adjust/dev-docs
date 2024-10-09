export const onRequest = async (context, next) => {
   const response = await next();
   if (response.status === 404) {
      return context.rewrite(`/en/404`);
   }
   return response;
}
