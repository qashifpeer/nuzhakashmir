import { client, getPlacesData } from "@/lib/client";
import { PlacesCard } from "@/components";
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";


export const revalidate = 60; // ISR: revalidate data every 60 seconds
// Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://www.nuzhakashmir.com'),
  title: "Places-Nuzha Kashmir: Travel Guide to Gulmarg, Pahalgam & More",
  description:
    "Discover the best places to visit in Kashmir, including Gulmarg, Pahalgam, Sonamarg & Bangus. Your complete travel guide for unforgettable experiences.",
    robots: {
      index: false,
      follow: true,
    },
    keywords:
    "Kashmir travel blog, Gulmarg travel guide, Kashmir tourism, Sonamarg places to visit, Bangus valley Kashmir, Kashmir itinerary, best time to visit Kashmir, Kashmir travel tips, explore Kashmir, offbeat places in Kashmir, keran valley,",
  openGraph: {
    title: "NuzhaKashmir",
    description: "Dive deep into Kashmir with NuzhaKashmir.",
    url: "https://www.nuzhakashmir.com/places",
    siteName: "NuzhaKashmir",
    images: [
      {
        url: "https://www.nuzhakashmir.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default async function PlacesPage() {
  const posts: PostType[] = await getPlacesData();

  return (
    <section className="max-w-7xl mx-auto mt-10 p-4">
      <div className="flex justify-between items-center pl-4 my-4 bg-gradient-to-r from-orange-800 to-slate-900">
        <h1 className="text-xl text-slate-100   uppercase font-kalam py-2">
          Places to Explore
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.length > 0 &&
          posts.map((post, idx) => (
            <PlacesCard key={idx} postData={post} />
          ))}
      </div>
    </section>
  );
}
