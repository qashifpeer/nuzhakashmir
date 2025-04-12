import Image from "next/image";
import React from "react";
import featureImage from "/public/images/forest_sunlight.jpg";
import { Button } from "../ui/button";
import { client, getData } from "@/lib/client";
import FeatureCard from "./FeatureCard";
import Link from "next/link";

const FeatureStories = async () => {
  const posts: PostType[] = await getData();
  // console.log("posts_here",posts);
  return (
    <section className="flex flex-col max-w-6xl mx-auto mt-4 p-4">
      <div className="">
        <Link href={`/blog/${posts[0].slug}`}>
          <div className="feature-card lg:flex shadow-lg">
            <div className="w-full lg:w-[60%]">
              <Image
                src={posts[0].imageUrl}
                alt="forest with sunlight"
                width={600}
                height={400}
                className="w-full"
              />
            </div>

            <div className="flex flex-col px-6 py-4 w-full lg:w-[40%]">
              <h2 className="text-lg lg:text-3xl font-semibold text-gray-600">
                {posts[0].title}
              </h2>
              <p className="text-sm text-gray-400 py-2">
                {" "}
                {posts[0].author.name}, {posts[0].publishedAt.substring(0, 10)}
              </p>
              <p className="text-sm md:text-lg  text-gray-500 max-lg:line-clamp-3">
                {posts[0].shortDescription}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex gap-4 justify-evenly">
          {posts?.length > 0 &&
            posts
              .slice(1)
              .map((post, idx) => <FeatureCard key={idx} postData={post} />)}
        </div>
        <div className="flex justify-center">
          <Button className="mt-4 rounded-none px-10 text-base lg:text-lg">
            See All Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureStories;

