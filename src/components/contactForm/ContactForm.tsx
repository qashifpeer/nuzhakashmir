"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 You can add form validation or send it to your server here
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Optional: Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Reset the success message after a delay
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-medium mb-1 hover:cursor-pointer">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-medium mb-1 hover:cursor-pointer">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block font-medium mb-1 hover:cursor-pointer">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium mb-1">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        <FaPaperPlane /> Connect with Us
      </button>

      {submitted && (
        <p className="text-green-600 font-semibold mt-4">Thanks! Your message has been sent.</p>
      )}
    </form>
  );
};

export default ContactForm;
