"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { galleryData } from "@/constants/gallery";
import Link from "next/link";


interface GalleryItemProps {
  src: string;
  alt: string;
}

const images: GalleryItemProps[] = [
  { src: "/images/image1.jpg", alt: "Image 1" },
  { src: "/images/image2.jpg", alt: "Image 2" },
  { src: "/images/image3.jpg", alt: "Image 3" },
  // Add more images here
];

const ImageCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div className="relative w-full h-full">
        {galleryData.map((img, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-1000 ease-in-out"
              priority
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
      <Link href={"/gallery"}>  <button className="px-6 py-3 text-white bg-orange-600 rounded-full hover:bg-orange-700">
          View Gallery
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ImageCarousel;
