"use client";
import React from "react";
import { motion, } from "framer-motion";
import Link from "next/link";



const FixedHero: React.FC = () => {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/hero2.jpg')`, // Adjust this path as needed
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Centered Content */}
      <div
       className="relative z-10 text-center text-white flex flex-col items-center space-y-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Start Exploring
        </motion.h1>
        <p
          className="text-lg md:text-2xl">
          Discover the beauty of your next adventure
        </p>

        <Link href="/contact">
          {" "}
          <button className="mt-6 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-lg uppercase transition duration-300">
            Book Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FixedHero;
