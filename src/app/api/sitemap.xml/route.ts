import { NextResponse } from "next/server";
import { client } from "@/lib/client"; // Import your Sanity client

const SITE_URL = "https://nuzhakashmir.com"; // Replace with your actual domain

async function getBlogPosts() {
  const query = `
    *[_type == "post"]{
      "slug": slug.current,
      _updatedAt
    }
  `;
  return await client.fetch(query);
}

export async function GET() {
  const posts = await getBlogPosts();

  // Generate XML content
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${SITE_URL}</loc>
      <priority>1.0</priority>
      <changefreq>daily</changefreq>
    </url>
    ${posts
      .map(
        (post: { slug: string; _updatedAt: string }) => `
      <url>
        <loc>${SITE_URL}/blog/${post.slug}</loc>
        <lastmod>${new Date(post._updatedAt).toISOString()}</lastmod>
        <priority>0.8</priority>
        <changefreq>weekly</changefreq>
      </url>`
      )
      .join("")}
  </urlset>`;

  // Return response with XML content type
  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
