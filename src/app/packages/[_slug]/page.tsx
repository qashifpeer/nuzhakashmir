import { notFound } from 'next/navigation';
import { packagesData } from '@/constants/packages';

import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://nuzhakashmir.com'),
  title: "Packages-Nuzha Kashmir: Travel Guide to Gulmarg, Pahalgam & More",
  description:
    "Discover the best places to visit in Kashmir, including Gulmarg, Pahalgam, Sonamarg & Bangus. Your complete travel guide for unforgettable experiences.",
  keywords:
    "Kashmir travel blog, Gulmarg travel guide, Kashmir tourism, Sonamarg places to visit, Bangus valley Kashmir, Kashmir itinerary, best time to visit Kashmir, Kashmir travel tips, explore Kashmir, offbeat places in Kashmir, keran valley,",
  openGraph: {
    title: "NuzhaKashmir",
    description: "Dive deep into Kashmir with NuzhaKashmir.",
    url: "https://nuzhakashmir.com/food",
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


export async function generateStaticParams() {
    return packagesData.map((pkg) => ({
      slug: pkg.slug,
    }));
  }

export default async function PackageDetailPage({ params }: { params: { _slug: string } }) {
  const pkg = packagesData.find((p) => p.slug === params._slug);

  if (!pkg) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{pkg.title}</h1>
      <p className="text-gray-600 mb-4">{pkg.description}</p>
      <div className="whitespace-pre-line">{pkg.price}</div>
    </div>
  );
}
