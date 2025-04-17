// import {createClient} from 'next-sanity';

// import fs from "fs";
// import dotenv from "dotenv";
// import path from "path";

// dotenv.config({ path: ".env.local" }); // Load environment variables

// const client = createClient({
//   projectId: process.env.SANITY_PROJECT_ID,
//   dataset: process.env.SANITY_DATASET || "production",
//   useCdn: false,
//   apiVersion: "2024-04-12",
// });

// async function generateSitemap() {
//   const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current, publishedAt }`);
//   console.log(posts)

//   const baseUrl = "https://nuzhakashmir.com";
//   const urls = posts
//     .map(
//       (post) => `
//   <url>
//     <loc>${baseUrl}/blog/${post.slug}</loc>
//     <lastmod>${post.publishedAt}</lastmod>
//   </url>`
//     )
//     .join("");

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset
//   xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   ${urls}
// </urlset>`;

//   // Write sitemap.xml
//   fs.writeFileSync(path.join("public", "sitemap.xml"), sitemap);

//   console.log("✅ Sitemap generated successfully!");
// }

// generateSitemap().catch(console.error);