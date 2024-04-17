import Image from "next/image";
import React from "react";
import featureImage from "/public/images/forest_sunlight.jpg";
import { Button } from "../ui/button";
import { client, getData } from "@/lib/client";
import FeatureCard from "./FeatureCard";
import Link from "next/link";



const FeatureStories = async () => {
  const posts: postType[] = await getData();
  // console.log("posts_here",posts);
  return (
    <section className="flex flex-col max-w-6xl mx-auto mt-4">
      <div className="">
        <Link href={posts[0].slug}>
          <div className="feature-card flex shadow-lg">
            <Image
              src={posts[0].image}
              alt="forest with sunlight"
              width={600}
              height={400}
            />

            <div className="flex flex-col px-6 py-4">
              <h2 className="text-3xl font-semibold text-gray-600">
                {posts[0].title}
              </h2>
              <p className="text-sm text-gray-400 py-2">
                {" "}
                {posts[0].author.name}
              </p>
              <p className="text-lg text-gray-500">
                {posts[0].shortDescription}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex gap-4 justify-evenly">
          {posts.slice(1).map((post, idx) => (
            <FeatureCard key={idx} postData={post } />
          ))}
        </div>
        <div className="flex justify-center">
          <Button className="mt-4 rounded-none px-10 text-lg">
            See All Stories
          </Button>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default FeatureStories;
