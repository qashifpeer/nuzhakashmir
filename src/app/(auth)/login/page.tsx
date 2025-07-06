import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nuzhakashmir.com"),
  title: "Login -Nuzha Kashmir: Travel Guide to Gulmarg, Pahalgam & More",
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
    url: "https://www.nuzhakashmir.com/login",
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

const LoginPage = () => {
  return <div>LoginPage</div>;
};

export default LoginPage;
