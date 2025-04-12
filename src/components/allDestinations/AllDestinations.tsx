import Image from "next/image";
import React from "react";
import featureImage from "/public/images/forest_sunlight.jpg";
import { Button } from "../ui/button";
import { client, getDestinationsData } from "@/lib/client";
import DestinationsCard from "./DestinationsCard";
import Link from "next/link";

const AllDestinations = async () => {
  const posts: PostType[] = await getDestinationsData();
  // console.log("posts_here",posts);
  return (
    <section className="flex flex-col max-w-6xl mx-auto mt-4 p-4">
      <div className="">
               <div className="flex gap-4 justify-evenly">
          {posts?.length > 0 &&
            posts.map((post, idx) => <DestinationsCard key={idx} postData={post} />)}
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

export default AllDestinations;

