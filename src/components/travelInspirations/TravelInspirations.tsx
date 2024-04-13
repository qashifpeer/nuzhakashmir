import Image from "next/image";
import React from "react";
import baskets from "/public/images/baskets.jpg";
import biryani from "/public/images/biryani.jpg";
import rural from "/public/images/rural.jpg";
import nature from "/public/images/nature.jpg";
import { Button } from "../ui/button";

const TravelInspirations = () => {
  return (
    <section className="max-w-6xl mx-auto mt-4">
      <div className="flex   gap-4">
        {/* card-1 */}
        <div className="flex flex-col bg-slate-100 cursor-pointer">
          <Image
            src={baskets}
            alt="forest with sunlight"
            width={300}
            height={300}
          />
          <h3 className="text-center text-base font-bold py-1">Culture Diversity</h3>
        </div>
        {/* card-2 */}
        <div className="flex flex-col bg-slate-100 cursor-pointer">
          <Image
            src={biryani}
            alt="forest with sunlight"
            width={300}
            height={300}
          />
          <h3 className="text-center text-base font-bold py-1">Food Fusion</h3>
        </div>

        {/* card-3 */}
        <div className="flex flex-col bg-slate-100 cursor-pointer">
          <Image
            src={rural}
            alt="forest with sunlight"
            width={300}
            height={300}
          />
          <h3 className="text-center text-base font-bold py-1">Rural Lust</h3>
        </div>
        {/* card-4 */}
        <div className="flex flex-col bg-slate-100 cursor-pointer">
          <Image
            src={nature}
            alt="forest with sunlight"
            width={300}
            height={300}
          />
          <h3 className="text-center text-base font-bold py-1">Nature Stories</h3>
        </div>
        
      </div>
      <div className="flex justify-center my-4">
          <Button className="rounded-none  px-10 text-lg">See All Inspirations</Button>
        </div>
    </section>
  );
};

export default TravelInspirations;
