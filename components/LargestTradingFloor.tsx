"use client";
import { useState } from "react";
import Image from "next/image";

export default function LargestTradingFloor() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ["/card1.png", "/card1.png", "/card1.png"];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getImageIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-2">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-5xl font-medium text-white my-2">
            Asia&apos;s Largest Trading Floor
          </h1>
          <p className="text-white/70 max-w-5xl text-lg font-medium mx-auto leading-tight">
            &quot;Anish Singh Thakur is a globally respected trading educator
            and the visionary Founder &amp; CEO of Booming Bulls, one of the
            world&apos;s largest and most impactful trading education
            ecosystems. Trusted by over 3 million learners globally, he has
            built a high-performance platform&quot;
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative h-[400px] flex items-center justify-center gap-4 overflow-hidden">
            <div className="w-[350px] h-[350px] shrink-0 relative transition-all duration-500 ease-in-out">
              <Image
                src={images[getImageIndex(-1)]}
                alt="Left view"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="w-[600px] h-[350px] shrink-0 relative transition-all duration-500 ease-in-out">
              <Image
                src={images[currentIndex]}
                alt="Center view"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className="w-[350px] h-[350px] shrink-0 relative transition-all duration-500 ease-in-out">
              <Image
                src={images[getImageIndex(1)]}
                alt="Right view"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border border-gray-500 
                flex items-center justify-center text-gray-300 
                hover:border-gray-300 hover:text-white 
                transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48"
                height="48"
              >
                <g
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <line x1="30" y1="24" x2="14" y2="24" />
                  <polyline points="20,18 14,24 20,30" />
                </g>
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border border-gray-500 
                flex items-center justify-center text-gray-300 
                hover:border-gray-300 hover:text-white
                transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48"
                height="48"
              >
                <g
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <line x1="14" y1="24" x2="30" y2="24" />
                  <polyline points="24,18 30,24 24,30" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
