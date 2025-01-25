"use client";
import React from "react";
import Image from "next/image";
import heroImage from "@/../../public/images/hero.jpg";
import { motion, useInView } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full h-[100vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <Image
            src={heroImage}
            alt="hero image"
            width={1280}
            height={853}
            className="w-full h-full bg-cover"
          />
        </motion.div>

        <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}

         className="absolute md:p-4  top-0 left-0 right-0 w-full h-full flex flex-col items-center justify-center bg-emerald-800/20 backdrop-brightness-75">
          <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}

           className="font-satisfy text-slate-100 font-bold text-3xl md:text-8xl text-center">
            Escape , Explore : Borderless
          </motion.h1>
          <p className="text-slate-100 text-center text-lg md:text-3xl font-kalam leading-10 py-2">
            Explore the most enchanting places with us without Breaking the Bank
          </p>
          <button className="text-slate-100 montserrat-normal my-6 outline-none uppercase md:text-3xl text-lg border border-primary px-4 py-2 rounded-full bg-primary/20 transition-all duration-300 hover:bg-primary/75 hover:translate-y-2 ">
            Explore Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
