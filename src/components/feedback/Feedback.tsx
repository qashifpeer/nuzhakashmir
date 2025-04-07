"use client"
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { feedbackData } from "@/constants/feedback";



const Feedback: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Autoplay function
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // Navigation Handlers
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative container mx-auto px-4 py-8">
      <h2 className="text-2xl text-center mb-6 uppercase font-kalam text-slate-200"><span className="text-orange-800 text-4xl">&quot;</span>What Our Travelers Say <span className="text-orange-800 text-4xl">&quot;</span></h2>
      
      {/* Arrow Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <FaChevronRight size={20} />
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-6">
          {feedbackData.map((feedback, index) => (
            <div key={index} className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src={feedback.image}
                    alt={feedback.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black">{feedback.name}</h3>
                <p className="text-gray-500 text-sm">{feedback.address}</p>
                <p className="text-gray-700 mt-4">{feedback.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
