"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);  // Add loading state
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when request starts

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, message }),
      });

      if (response.ok) {
        setStatus('Quote Received Successfully, We will be in touch with you very soon!');
        setSubmitted(true);
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send feedback. Please try again.');
      }
    } catch (error) {
      setStatus('Error sending feedback.');
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}  // Disable button when loading is true
        className={`border-2 border-orange-800 w-60 rounded-3xl p-2 shadow-sm uppercase ubuntu-bold transition-all delay-75 duration-200 ${
          loading ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'text-orange-800 hover:bg-orange-700 hover:text-white'
        }`}
      >
        {loading ? 'Sending...' : 'Submit'}
      </button>

      {submitted && (
        <p className="text-green-600 font-semibold mt-4">Thanks! We will be in touch very soon.</p>
      )}
    </form>
  );
};

export default ContactForm;
