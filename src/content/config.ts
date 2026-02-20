import { defineCollection, z } from 'astro:content';

const perfumes = defineCollection({
    schema: z.object({
        name: z.string(),
        brand: z.string(),
        price: z.number(),
        image: z.string(),
        description: z.string().optional(),
        available: z.boolean().default(true),
        stock: z.number().default(0),
    }),
});

const decants = defineCollection({
    schema: z.object({
        name: z.string(),
        brand: z.string(),
        price: z.number(),
        image: z.string(),
        description: z.string().optional(),
        available: z.boolean().default(true),
        stock: z.number().default(0),
    }),
});

export const collections = { perfumes, decants };

