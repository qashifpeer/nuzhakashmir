import { client, getPlacesData } from "@/lib/client";
import { PlacesCard } from "@/components";
import React from "react";
import Link from "next/link";

export const revalidate = 60; // ISR: revalidate data every 60 seconds

export default async function PlacesPage() {
  const posts: PostType[] = await getPlacesData();

  return (
    <section className="max-w-7xl mx-auto mt-10 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.length > 0 &&
          posts.map((post, idx) => (
            <PlacesCard key={idx} postData={post} />
          ))}
      </div>
    </section>
  );
}
