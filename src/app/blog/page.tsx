import { client, getData } from '@/lib/client';
import { BlogCard } from '@/components';

export const revalidate = 60; // ISR: revalidate data every 60 seconds

export default async function BlogPage () {
  const posts: PostType[] = await getData();
  return (
    <section className="max-w-7xl mx-auto mt-10 p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
        {posts?.length > 0 &&
          posts.map((post, idx) => <BlogCard key={idx} postData={post} />)}
      
      
    </div>
  </section>
  )
}

