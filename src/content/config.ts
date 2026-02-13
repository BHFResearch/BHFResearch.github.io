import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    image: z.string().optional()
  }),
});

export const collections = {
  articles,
};

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://research.betterhealthfacts.com',
  integrations: [sitemap()],
});
