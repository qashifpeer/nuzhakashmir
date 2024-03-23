import Image from "next/image";
import React from "react";
import featureimage from "../../../public/images/forest_sunlight.jpg";

const FeatureStories = () => {
  return (
    <section className="max flex flex-col max-w-6xl mx-auto mt-4">
      <div>
        <div className="feature-card flex shadow-lg">
          
          <Image
            src={featureimage}
            alt="forest with sunlight"
            width={600}
            height={400}
          />
          

          <div className="flex flex-col px-6 py-4">
            <h2 className="text-3xl font-semibold text-gray-600">
              Exploring Kupwara: Spectacular Destinations Unveiled.{" "}
            </h2>
            <p className="text-sm text-gray-400 py-2">Qashif Peer</p>
            <p className="text-lg text-gray-500">
              Having been established in 1979, District Kupwara is the northern
              frontier district of Kashmir, spanning 2379 square kilometres and
              boasting over 240 kilometres of land area. There is so much
              natural beauty in the district. There are many stunning locations
              that one can explore. Here’s a list of a few places that everyone
              should go. Table of Contents Lolab:
            </p>
          </div>
        </div>
        <div className="flex gap-6 justify-center">
          
          {/* card 1 */}
          <div className="feature-card flex flex-col shadow-lg w-[30%] mt-6 hover:scale-105 transition-transform duration-200 ease-out overflow-hidden rounded">
           <div className="relative">
            <Image
              src={featureimage}
              alt="forest with sunlight"
              width={400}
              height={300}
            />
            <span className="absolute top-4 right-4 bg-gray-600/60 uppercase text-sm leading-3 text-white px-4 py-1 rounded-full">explore</span>
            </div>

            <div className="flex flex-col px-6 py-4">
              <h2 className="text-3xl font-semibold text-gray-600">
                Exploring Kupwara: Spectacular Destinations Unveiled.{" "}
              </h2>
              <p className="text-sm text-gray-400 py-2">Qashif Peer</p>
              <p className="text-lg text-gray-500 line-clamp-4">
                Having been established in 1979, District Kupwara is the
                northern frontier district of Kashmir, spanning 2379 square
                kilometres and boasting over 240 kilometres of land area. There
                is so much natural beauty in the district. There are many
                stunning locations that one can explore. Here’s a list of a few
                places that everyone should go. Table of Contents Lolab:
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="feature-card flex flex-col shadow-lg w-[30%] mt-6 hover:scale-105 transition-transform duration-200 ease-out overflow-hidden rounded">
          <div className="relative">
            <Image
              src={featureimage}
              alt="forest with sunlight"
              width={400}
              height={300}
            />
            <span className="absolute top-4 right-4 bg-gray-600/60 uppercase text-sm leading-3 text-white px-4 py-1 rounded-full">explore</span>
            </div>

            <div className="flex flex-col px-6 py-4">
              <h2 className="text-3xl font-semibold text-gray-600">
                Exploring Kupwara: Spectacular Destinations Unveiled.{" "}
              </h2>
              <p className="text-sm text-gray-400 py-2">Qashif Peer</p>
              <p className="text-lg text-gray-500 line-clamp-4">
                Having been established in 1979, District Kupwara is the
                northern frontier district of Kashmir, spanning 2379 square
                kilometres and boasting over 240 kilometres of land area. There
                is so much natural beauty in the district. There are many
                stunning locations that one can explore. Here’s a list of a few
                places that everyone should go. Table of Contents Lolab:
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="feature-card flex flex-col shadow-lg w-[30%] mt-6 hover:scale-105 transition-transform duration-200 ease-out overflow-hidden rounded">
          <div className="relative">
            <Image
              src={featureimage}
              alt="forest with sunlight"
              width={400}
              height={300}
            />
            <span className="absolute top-4 right-4 bg-gray-600/60 uppercase text-sm leading-3 text-white px-4 py-1 rounded-full">explore</span>
            </div>

            <div className="flex flex-col px-6 py-4">
              <h2 className="text-3xl font-semibold text-gray-600">
                Exploring Kupwara: Spectacular Destinations Unveiled.{" "}
              </h2>
              <p className="text-sm text-gray-400 py-2">Qashif Peer</p>
              <p className="text-lg text-gray-500 line-clamp-4">
                Having been established in 1979, District Kupwara is the
                northern frontier district of Kashmir, spanning 2379 square
                kilometres and boasting over 240 kilometres of land area. There
                is so much natural beauty in the district. There are many
                stunning locations that one can explore. Here’s a list of a few
                places that everyone should go. Table of Contents Lolab:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default FeatureStories;
