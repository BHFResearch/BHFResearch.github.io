import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = await getCollection('articles');

  const sorted = articles.sort(
    (a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate)
  );

  return rss({
    title: 'Better Health Research',
    description: 'Scientific health research articles and analysis.',
    site: context.site, // IMPORTANT
    items: sorted.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/articles/${article.slug}/`,
    })),
  });
}

