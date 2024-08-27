import { defineCollection, z } from "astro:content";
import { SITE } from "../consts";

const docs = defineCollection({
  schema: z.object({
    title: z.string().default(SITE.title),
    description: z.string().default(SITE.description),
    "sidebar-label": z.string().optional(),
    "sidebar-position": z.number().optional(),
    "category-title": z.string().optional(),
    navPath: z.string().optional(),
    lang: z.literal("en-us").default(SITE.defaultLanguage),
    redirects: z.record(z.string(), z.string()).optional(),
    dir: z.union([z.literal("ltr"), z.literal("rtl")]).default("ltr"),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    ogLocale: z.string().optional(),
    type: z.enum(["category"]).optional(),
    multiVersion: z.boolean().default(false),
  }),
});

export const collections = { docs };
