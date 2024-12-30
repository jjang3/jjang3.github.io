import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string().nonempty(), // Title is required and must be a non-empty string
    publishedAt: z.date(), // PublishedAt must be a valid date
  }),
});

export const collections = { blog };
