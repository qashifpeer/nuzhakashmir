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
          'imageUrl':featureImage.asset->url,
          'altFtImg': featureImage.alt,
          author,
          'body': pt::text(body),
          'content' : body,
          'author' : *[_type == 'author' && _id== ^.author._ref][0]{
              _id,
                name,
                'slug' : slug.current,
                'authorImgUrl': image.asset->url,
                'altAuthorImg' : image.alt,
              },
         categories[]->{
              _id,
              name,
              slug
            }, 
      }[0]
    `
    const data:FetchedData = await client.fetch(query)
    return data;
  }





const BlogPost = async ({ params }: { params: { _slug: string } }) => {
    const data = await getSinglePost(params._slug);
    
   
  return (
    <div className="max-w-3xl mx-auto">
        <header> <h1 className="text-3xl font-extrabold mb-4">{data?.title}</h1></header>
       
        <p>{data?.author.name}</p>
        <Image src={data?.imageUrl} priority alt={data.altFtImg} width={800} height={800} />
        <div className="mt-16 prose prose-lg prose-li:marker:text-primary">
        <PortableText value ={data.content} />
        
      </div>

    </div>
  );
};

export default BlogPost;
