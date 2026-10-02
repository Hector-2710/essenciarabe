import { defineCollection, z } from 'astro:content';

const perfumes = defineCollection({
    schema: z.object({
        id: z.string().optional(),
        name: z.string(),
        brand: z.string(),
        price: z.number(),
        image: z.string(),
        description: z.string().optional(),
    }),
});

const decants = defineCollection({
    schema: z.object({
        id: z.string().optional(),
        name: z.string(),
        brand: z.string(),
        price: z.number(),
        image: z.string(),
        description: z.string().optional(),
    }),
});

export const collections = { perfumes, decants };

