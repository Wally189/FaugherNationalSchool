import { defineCollection, z } from "astro:content";
import { newsCategories } from "../site.config";

const news = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(3),
      date: z.coerce.date(),
      category: z.enum(newsCategories as [string, ...string[]]),
      excerpt: z.string().min(10),
      featuredImage: image().optional(),
      featuredImageAlt: z.string().optional(),
      draft: z.boolean().default(false)
    })
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(3),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    location: z.string().min(2),
    description: z.string().min(10),
    attachment: z.string().optional(),
    attachmentLabel: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

const settings = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().default("Site Alert"),
    enabled: z.boolean().default(false),
    message: z.string().default(""),
    link: z.string().optional(),
    linkLabel: z.string().optional()
  })
});

export const collections = {
  news,
  events,
  settings
};
