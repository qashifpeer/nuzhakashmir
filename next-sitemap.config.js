/** @type {import('next-sitemap').IConfig} */
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-04-12',
});

const noindexRoutes = [
  '/gallery',
  '/food',
  '/terms',
  '/privacy-policy',
  '/login',
  '/register',
  '/blog',
  '/packages',
  '/places',
  '/resolution',
  '/admin',

  // Add other noindex pages here
];

const sitemapConfig = {
  siteUrl: 'https://www.nuzhakashmir.com',
  generateRobotsTxt: true,

    exclude: noindexRoutes, // Exclude from default paths
    
  // Add blog posts from Sanity
  async additionalPaths(config) {
    const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current, publishedAt }`);
    return posts.map((post) => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.publishedAt,
    }));
  },
};

export default sitemapConfig;
