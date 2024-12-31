import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.string()
  }),
});

export const collections = {
  blog: blogCollection,
};
