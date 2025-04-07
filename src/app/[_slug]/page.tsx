// import { client } from "@/lib/client";
// import { PortableText } from "@portabletext/react";
// import Image from "next/image";
// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import Head from "next/head";


// // Fetch single blog post data
// async function getSinglePost(slug: string) {
//   const query = `
//     *[_type=='post' && slug.current == '${slug}']{
//       'slug': slug.current,
//       title,
//       content,
//       'imageUrl': featureImage.asset->url,
//       'altFtImg': featureImage.alt,
//       author,
//       'body': pt::text(body),
//       'content': body,
//       'author': *[_type == 'author' && _id == ^.author._ref][0]{
//         _id,
//         name,
//         'slug': slug.current,
//         'authorImgUrl': image.asset->url,
//         'altAuthorImg': image.alt
//       },
//       categories[]->{
//         _id,
//         name,
//         slug
//       }, 
//     }[0]`;

//   const data = await client.fetch(query);
//   return data;
// }

// // Dynamic Metadata for SEO
// export async function generateMetadata({ params }: { params: { _slug: string } }): Promise<Metadata> {
//   const data = await getSinglePost(params._slug);

//   if (!data) {
//     return notFound();
//   }

//   return {
//     title: `${data.title} - My Blog`, // Optimize title
//     description: data.body?.slice(0, 160) || "Read this amazing blog post!", // Short description
//     metadataBase: new URL("https://nuzhakashmir.com"),
//     openGraph: {
//       title: data.title,
//       description: data.body?.slice(0, 160),
//       url: `https://nuzhakashmir.com/blog/${data.slug}`,
//       images: [{ url: data.imageUrl, width: 800, height: 600 }],
//       type: "article",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: data.title,
//       description: data.body?.slice(0, 160),
//       images: [data.imageUrl],
//     },
//   };
// }

// // Blog Post Component
// const BlogPost = async ({ params }: { params: { _slug: string } }) => {
//   const data = await getSinglePost(params._slug);

//   if (!data) {
//     return notFound();
//   }

//   return (
//     <div className="max-w-3xl mx-auto">
//       {/* Head Tags for SEO */}
//       <Head>
//         <title>{data.title} - My Blog</title>
//         <meta name="description" content={data.body?.slice(0, 160)} />
//         <meta property="og:title" content={data.title} />
//         <meta property="og:description" content={data.body?.slice(0, 160)} />
//         <meta property="og:image" content={data.imageUrl} />
//         <meta property="og:url" content={`https://nuzhakashmir.com/blog/${data.slug}`} />
//         <meta name="twitter:title" content={data.title} />
//         <meta name="twitter:description" content={data.body?.slice(0, 160)} />
//         <meta name="twitter:image" content={data.imageUrl} />
//       </Head>

//       {/* Blog Post Content */}
//       <header>
//         <h1 className="text-3xl font-extrabold mb-4">{data?.title}</h1>
//       </header>
//       <p className="text-sm text-gray-600">By {data?.author.name}</p>

//       {/* Blog Post Image */}
//       <Image src={data?.imageUrl} priority alt={data.altFtImg} width={800} height={800} className="rounded-lg my-4" />

//       {/* Blog Post Content */}
//       <div className="mt-16 prose prose-lg prose-li:marker:text-primary">
//         <PortableText value={data.content} />
//       </div>

//       {/* Internal Links (Categories) */}
//       {data.categories?.length > 0 && (
//         <div className="mt-8">
//           <h3 className="font-bold text-lg">Categories:</h3>
//           <ul className="flex gap-2 flex-wrap">
//             {data.categories.map((category: { _id: string; name: string; slug: string }) => (
//               <li key={category._id}>
//                 <a href={`/category/${category.slug}`} className="text-blue-600 hover:underline">
//                   {category.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* JSON-LD Structured Data for Rich Snippets */}
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "BlogPosting",
//           "headline": data.title,
//           "image": [data.imageUrl],
//           "author": {
//             "@type": "Person",
//             "name": data.author.name
//           },
//           "publisher": {
//             "@type": "Organization",
//             "name": "My Blog",
//             "logo": { "@type": "ImageObject", "url": "https://yourblog.com/logo.png" }
//           },
//           "datePublished": "2024-01-01",
//           "dateModified": "2024-01-01",
//           "mainEntityOfPage": {
//             "@type": "WebPage",
//             "@id": `https://yourblog.com/blog/${data.slug}`
//           }
//         }) 
//       }} />
//     </div>
//   );
// };

// export default BlogPost;
