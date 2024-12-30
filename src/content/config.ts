import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(), // Validates that `publishedAt` is a Date object
  }),
});

export const collections = { blog };
