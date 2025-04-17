import { AboutUs } from "@/components";
import { client } from "@/lib/client";

export default async function AboutPage() {
  const recentPosts = await client.fetch(`
    *[_type=='post'] | order(publishedAt desc)[0...5] {
      title,
      'slug': slug.current
    }
  `);

  return <AboutUs recentPosts={recentPosts} />;
}