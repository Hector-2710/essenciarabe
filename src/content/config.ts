import { defineCollection, z } from 'astro:content';

const perfumes = defineCollection({
    schema: z.object({
        name: z.string(),
        brand: z.string(),
        price: z.number(),
        image: z.string(),
        description: z.string(),
        category: z.string().optional(),
        featured: z.boolean().default(false),
    }),
});

export const collections = {perfumes};
