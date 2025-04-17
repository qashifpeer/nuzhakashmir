/** @type {import('next-sitemap').IConfig} */
import {createClient} from 'next-sanity';

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset : process.env.SANITY_DATASET || 'production',
    // useCdn: process.env.NODE_ENV === 'production' ? true : false,
    useCdn: false,
    apiVersion : '2024-04-12',
});


module.exports = {
  siteUrl: 'https://nuzhakashmir.com',
  generateRobotsTxt: true,
  async additionalPaths(config) {
    const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current, publishedAt }`);
    console.log("posts:", posts)
    return posts.map((post) => ({
      loc: `/blog/${post.slug}`,
      lastmod: post.publishedAt,
    }));
  },
};