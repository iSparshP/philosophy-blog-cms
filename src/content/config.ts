import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        author: z.string(),
        tags: z.array(z.string()),
        publishDate: z.date(),
        image: z.string().optional(),
    }),
});

export const collections = { blog };
