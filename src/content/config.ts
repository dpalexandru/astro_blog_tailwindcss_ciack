import { z, defineCollection } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    category: z.string(), // 

  }),
});

export const collections = {
  articles, // ⚠️ QUESTO NOME è quello che va usato in getCollection('articles')
};
