import { client, getData } from "@/lib/client";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";


async function getSinglePost(slug: string){
    const query = 
    `
    *[_type=='post' && slug.current == '${slug}']{
        'slug' : slug.current,
          title,
          content,
          'image':featureImage.asset->url,
          author,
          'body': pt::text(body),
          'content' : body,
          'author' : *[_type == 'author' && _id== ^.author._ref][0]{
              _id,
                name,
                'slug' : slug.current,
              },
         categories[]->{
              _id,
              name
            }, 
      }[0]
    `
    const data:fetchedData = await client.fetch(query)
    return data;
  }





const BlogPost = async ({ params }: { params: { _slug: string } }) => {
    const data = await getSinglePost(params._slug);
//   const postTitle = params._slug;
//   const allPosts = await getData();
//   const singlePost = allPosts.find((post) => postTitle === post.slug);
    // console.log("newdata",data)
  return (
    <div className="max-w-3xl mx-auto">
        <p>{data.author.name}</p>
        <h1>{data.title}</h1>
        <Image src={data.image} priority alt="feature Image" width={800} height={800} />
        <div className="mt-16 prose prose-lg prose-li:marker:text-primary">
        <PortableText value ={data.content} />
      </div>


      {/* <h1>{singlePost.title}</h1>
      <div className="mt-16 prose prose-xl">
        <PortableText value={singlePost.content} />
      </div> */}
    </div>
  );
};

export default BlogPost;
