import Image from "next/image";
import React from "react";
import featureImage from '/public/images/forest_sunlight.jpg'
import { Button } from "../ui/button";
import {client, getPosts} from '@/lib/client';


async function getData(){
  const query = 
  `
  *[_type == 'post']{
    _id,
        title,
      slug,
      'image':featureImage.asset->url,
        publishedAt,
      'body': pt::text(body),
      'author' : *[_type == 'author' && _id== ^.author._ref][0]{
      _id,
        name,
        'slug' : slug.current,
      },
    categories[]->{
      _id,
      name
    },
        'content' : body
      
  }
  `
  const data = await client.fetch(query);
  return data;
}

const FeatureStories = async () => {
  const posts = await getData();
  console.log(posts);
  return (
    <section className="flex flex-col max-w-6xl mx-auto mt-4">
      <div className="">
        <div className="feature-card flex shadow-lg">
          <Image
            src={featureImage}
            alt="forest with sunlight"
            width={600}
            height={400}
          />

          <div className="flex flex-col px-6 py-4">
            <h2 className="text-3xl font-semibold text-gray-600">
              Exploring Kupwara: Spectacular Destinations Unveiled.{" "}
            </h2>
            <p className="text-sm text-gray-400 py-2">Qashif Peer</p>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Incidunt, quisquam. Voluptatum natus non minus necessitatibus hic
              mollitia maxime, aliquid error commodi, esse porro libero soluta
              vel amet magni molestiae vitae!
            </p>
          </div>
        </div>
        <div className="flex gap-4 justify-evenly">
          {/* card 1 */}
          <div className="feature-card flex flex-col shadow-lg w-[33%] mt-6 hover:scale-105 transition-transform duration-200 ease-out overflow-hidden rounded">
            <div className="relative">
              <Image
                src={featureImage}
                alt="forest with sunlight"
                width={400}
                height={300}
              />
              <span className="absolute top-4 right-4 bg-gray-600/60 uppercase text-sm leading-3 text-white px-4 py-1 rounded-full">
                explore
              </span>
            </div>
            <div className="flex flex-col px-6 py-4">
              <h2 className="text-3xl font-semibold text-gray-600">
                Exploring Kupwara: Spectacular Destinations Unveiled.{" "}
              </h2>
              <p className="text-sm text-gray-400 py-2">Qashif Peer</p>
              <p className="text-lg text-gray-500 line-clamp-4">
                Having been established in 1979, District Kupwara is the
                northern frontier district of Kashmir, spanning 2379 square
                kilometres and boasting over 240 kilometres of land area. There
                is so much natural beauty in the district. There are many
                stunning locations that one can explore. Here’s a list of a few
                places that everyone should go. Table of Contents Lolab:
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="feature-card flex flex-col shadow-lg w-[33%] mt-6 hover:scale-105 transition-transform duration-200 ease-out overflow-hidden rounded">
            <div className="relative">
              <Image
                src={featureImage}
                alt="forest with sunlight"
                width={400}
                height={300}
                
              />
              <span className="absolute top-4 right-4 bg-gray-600/60 uppercase text-sm leading-3 text-white px-4 py-1 rounded-full">
                explore
              </span>
            </div>

            <div className="flex flex-col px-6 py-4">
              <h2 className="text-3xl font-semibold text-gray-600">
                Exploring Kupwara: Spectacular Destinations Unveiled.{" "}
              </h2>
              <p className="text-sm text-gray-400 py-2">Qashif Peer</p>
              <p className="text-lg text-gray-500 line-clamp-4">
                Having been established in 1979, District Kupwara is the
                northern frontier district of Kashmir, spanning 23719 square
                kilometres and boasting over 240 kilometres of land area. There
                is so much natural beauty in the district. There are many
                stunning locations that one can explore. Here’s a list of a few
                places that everyone should go. Table of Contents Lolab:
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="feature-card flex flex-col shadow-lg w-[33%] mt-6 hover:scale-105 transition-transform duration-200 ease-out overflow-hidden rounded">
            <div className="relative">
              <Image
                src={featureImage}
                alt="forest with sunlight"
                width={400}
                height={300}
                
              />
              <span className="absolute top-4 right-4 bg-gray-600/60 uppercase text-sm leading-3 text-white px-4 py-1 rounded-full">
                explore
              </span>
            </div>

            <div className="flex flex-col px-6 py-4">
              <h2 className="text-3xl font-semibold text-gray-600">
                Exploring Kupwara: Spectacular Destinations Unveiled.{" "}
              </h2>
              <p className="text-sm text-gray-400 py-2">Qashif Peer</p>
              <p className="text-lg text-gray-500 line-clamp-4">
                Having been established in 1979, District Kupwara is the
                northern frontier district of Kashmir, spanning 2379 square
                kilometres and boasting over 240 kilometres of land area. There
                is so much natural beauty in the district. There are many
                stunning locations that one can explore. Here’s a list of a few
                places that everyone should go. Table of Contents Lolab:
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">

        <Button className="mt-4 rounded-none px-10 text-lg">See All Stories</Button>
        </div>

      </div>
      <div></div>
    </section>
  );
};

export default FeatureStories;
