import { packagesData } from "@/constants/packages"
import Link from "next/link"
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://nuzhakashmir.com'),
  title: "Food-Nuzha Kashmir: Travel Guide to Gulmarg, Pahalgam & More",
  description:
    "Discover the best places to visit in Kashmir, including Gulmarg, Pahalgam, Sonamarg & Bangus. Your complete travel guide for unforgettable experiences.",
  keywords:
    "Kashmir travel blog, Gulmarg travel guide, Kashmir tourism, Sonamarg places to visit, Bangus valley Kashmir, Kashmir itinerary, best time to visit Kashmir, Kashmir travel tips, explore Kashmir, offbeat places in Kashmir, keran valley,",
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
    title: "NuzhaKashmir",
    description: "Dive deep into Kashmir with NuzhaKashmir.",
    url: "https://nuzhakashmir.com/packages",
    siteName: "NuzhaKashmir",
    images: [
      {
        url: "https://nuzhakashmir.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};


export default function PackagesPage () {
  return (
    <div className="max-w-4xl mx-auto p-4">
    <div className="flex justify-between items-center pl-4 my-4 bg-gradient-to-r from-orange-800 to-slate-900">
        <h1 className="text-xl text-slate-100   uppercase font-kalam py-2">
          Our Packages
        </h1>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {packagesData.map((pkg) => (
        <Link
          href={`/packages/${pkg.slug}`}
          key={pkg.slug}
          className="p-4 border rounded-lg hover:shadow"
        >
          <h2 className="text-xl font-semibold">{pkg.slug}</h2>
          <p>{pkg.description}</p>
        </Link>
      ))}
    </div>
  </div>
  )
}
