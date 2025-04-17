// app/contact/page.tsx or wherever your contact page lives

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { ContactForm } from "@/components";

const ContactPage = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-12">
      {/* Address Section */}
      <div className="space-y-8 bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-primary mb-4">Contact Information</h2>
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
