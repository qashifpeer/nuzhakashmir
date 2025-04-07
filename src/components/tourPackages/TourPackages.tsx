"use client";
import React from "react";
import Link from "next/link";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { packagesData } from "@/constants/packages";
import { motion, Variants } from "framer-motion";

// Define the animation variant type for scroll animation
const fadeUpOnScroll: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TourPackages: React.FC = () => {
  // Slice the array to get the latest four packages
  const latestPackages = packagesData.slice(0, 4);

  return (
    <div className="container">
      <div className=" flex justify-between items-center pl-4 gap-2 bg-gradient-to-r from-orange-800 to-slate-900">
        <h2 className="text-xl text-slate-100   uppercase font-kalam py-2">
          Handpicked Destinations
        </h2>
        <Link href="/packages">
          <h2 className="text-lg text-slate-100   uppercase font-kalam py-2 underline cursor-pointer">
                       View All
          </h2>
        </Link>
        {/* <FaCanadianMapleLeaf className="text-xl" /> */}
      </div>
      <div className="mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {latestPackages.map((pkg, index) => (
          <Link key={index} href={`packages/${pkg.slug}`}>
            <motion.div
              className="relative w-full h-96 bg-cover bg-center rounded-lg shadow-lg cursor-pointer"
              style={{ backgroundImage: `url(${pkg.imageUrl})` }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpOnScroll}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded text-sm font-medium text-black capitalize">
                {pkg.title}
              </div>
              <div className="absolute bottom-0 w-full text-white bg-gradient-to-t from-red-800 to-slate-900 p-4 opacity-60 transition-all delay-100 hover:opacity-90">
                <div className="bg-slate-100 text-slate-800 py-2 px-4 w-full text-center ubuntu-bold rounded mt-2">
                  <h4>Package Details</h4>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
