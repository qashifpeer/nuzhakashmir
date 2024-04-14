import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center">
     
      <div className="relative w-full h-[90vh]">
        <Image
          src="/images/hero.jpg"
          alt="hero image"
          width={1280}
          height={853}
          className="w-full h-full bg-scroll"
        />

        <div className="absolute p-4  top-0 left-0 right-0 w-full h-full flex flex-col items-center justify-center bg-emerald-800/20 backdrop-brightness-75">
          <h1 className="font-satisfy text-slate-100 font-bold text-5xl md:text-8xl text-center">
            Escape , Explore : Borderless
          </h1>
          <p className="text-slate-100 text-center text-xl md:text-3xl font-kalam leading-10 py-2">Explore the most enchanting places with us without Breaking the Bank</p>
          <button className="text-slate-100 montserrat-normal my-6 outline-none uppercase text-3xl border border-primary px-4 py-2 rounded-full bg-primary/20 transition-all duration-300 hover:bg-primary/75 hover:translate-y-2 ">Explore Now</button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
