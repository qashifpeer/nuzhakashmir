// app/contact/page.tsx or where
import { Metadata } from "next";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ContactForm } from "@/components";

export const metadata: Metadata = {
  metadataBase: new URL('https://nuzhakashmir.com'),
  title: "Contacts-Nuzha Kashmir: Travel Guide to Gulmarg, Pahalgam & More",
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



const ContactPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-12">
      
      {/* Address Section */}
      <div className="space-y-8 bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-primary mb-4">Contact Information</h1>
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
          <div>
            <h4 className="font-semibold">Address</h4>
            <p>Srinagar, Kashmir J&amp;K - 190001</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaPhoneAlt className="text-green-600 text-xl mt-1" />
          <div>
            <h4 className="font-semibold">Phone</h4>
            <p>+91 7006615905</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <FaEnvelope className="text-green-600 text-xl mt-1" />
          <div>
            <h4 className="font-semibold">Email</h4>
            <p>info@nuzhakashmir.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-4">Connect with Us</h2>
        <p className="mb-6 text-gray-600">We’d love to hear from you! Please fill out the form below.</p>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
