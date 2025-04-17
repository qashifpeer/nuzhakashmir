import Link from "next/link";

const AboutUs = ({ recentPosts }: { recentPosts: { title: string; slug: string }[] }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="space-y-6 p-6 rounded-lg shadow z-10 relative w-full lg:w-2/3 bg-white">
          <h2 className="text-4xl font-bold text-primary">Welcome to NuzhaKashmir.com</h2>

          <p>
            At Nuzha Kashmir, we think that travel is about experiencing a place&apos;s soul rather
            than merely seeing new places. Our blog provides helpful travel advice, carefully chosen
            itineraries, and comprehensive destination recommendations to make your trip-planning
            easy—whether you are organizing a family vacation, a honeymoon, or a solo trip.
          </p>

          <p>
            Popular tourist spots like <strong>Sonamarg</strong>, the starting point for exhilarating
            treks and glaciers; <strong>Pahalgam</strong>, with its tranquil valleys and riverbank
            trails; <strong>Bangus Valley</strong>, one of Kashmir&apos;s most unusual locations that
            has not been overrun by tourists; and <strong>Gulmarg</strong>, with its snow-covered
            landscapes and world-famous ski resorts, are all featured on our blog.
          </p>

          <p>
            We are honored to have our roots in Kashmir and share with you firsthand accounts and
            perspectives from the valleys. We visit every area to give you a genuine and
            unforgettable experience—from the busy markets of Srinagar to the serene meadows of
            Lolab.
          </p>

          <p>
            Our site is your one-stop shop for everything Kashmir-related, whether you are interested
            in adventure sports, traditional Kashmiri food, cultural festivals, or spiritual
            retreats.
          </p>

          <p>
            By assisting local communities and promoting ethical travel, we hope to advance
            sustainable tourism in Kashmir. Our goal is to respect Kashmir&apos;s delicate ecosystem
            and rich legacy while encouraging tourists from all over the world to discover its charm.
          </p>
          <p>
            Follow NuzhaKashmir.com to gain access to:
            <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
              <li>The top destinations in Kashmir</li>
              <li>Undiscovered treasures and unusual spots like Bangus</li>
              <li>Local travel advice and cultural insights</li>
              <li>Seasonal guides and weather forecasts</li>
              <li>Suggestions for lodging, homestays, and local experiences</li>
            </ul>
          </p>

          <p>
            We appreciate you joining our growing community of travelers. Let&apos;s explore Kashmir
            together!
          </p>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 w-full  p-6 rounded-lg shadow   z-[9999] relative bg-yellow-100">
          <h3 className="text-2xl font-semibold text-primary mb-4">Recent Posts</h3>
          <ul className="space-y-3">
            {recentPosts?.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block text-blue-600 hover:underline"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default AboutUs;
