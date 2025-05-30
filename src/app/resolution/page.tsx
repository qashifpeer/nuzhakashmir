import { Metadata } from "next";

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
    url: "https://www.nuzhakashmir.com/resolution",
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


const ResolutionPage = () => {
  return (
    <section>
      <div className="flex justify-between items-center pl-4 my-4 bg-gradient-to-r from-orange-800 to-slate-900">
        <h1 className="text-xl text-slate-100   uppercase font-kalam py-2">
          Resolution
        </h1>
      </div>
    </section>
  )
}

export default ResolutionPage