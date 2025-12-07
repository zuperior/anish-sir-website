"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function LargestTradingFloor() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealProgress, setRevealProgress] = useState(0);
  const textRef = useRef<HTMLParagraphElement>(null);

  const images = ["/card1.png", "/card1.png", "/card1.png"];

  const text = `"Anish Singh Thakur is a globally respected trading educator and the visionary Founder & CEO of Booming Bulls, one of the world's largest and most impactful trading education ecosystems. Trusted by over 3 million learners globally, he has built a high-performance platform"`;

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;

      const element = textRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollStart = rect.top - windowHeight;
      const scrollEnd = rect.bottom;
      const scrollRange = scrollEnd - scrollStart;
      const scrollProgress = -scrollStart / scrollRange;

      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      setRevealProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getImageIndex = (offset: number) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  const revealedChars = Math.floor(revealProgress * text.length);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 lg:p-2">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-6 sm:mb-8 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white my-2 px-2">
            Asia&apos;s Largest Trading Floor
          </h1>
          <p
            ref={textRef}
            className="max-w-5xl text-sm sm:text-base lg:text-lg font-medium mx-auto leading-tight px-2"
          >
            {text.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  color: index < revealedChars ? "rgba(255, 255, 255, 0.7)" : "rgba(128, 128, 128, 0.5)",
                  transition: "color 0.1s ease"
                }}
              >
                {char}
              </span>
            ))}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Mobile: Single card view */}
          <div className="block sm:hidden w-full px-4">
            <div className="relative w-full h-[300px]">
              <Image
                src={images[currentIndex]}
                alt="Trading floor view"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Tablet: Two cards */}
          <div className="hidden sm:block lg:hidden">
            <div className="flex items-center justify-center gap-3">
              <div className="w-[200px] h-[250px] shrink-0 relative transition-all duration-500 ease-in-out">
                <Image
                  src={images[getImageIndex(-1)]}
                  alt="Left view"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              <div className="w-[300px] h-[250px] shrink-0 relative transition-all duration-500 ease-in-out">
                <Image
                  src={images[currentIndex]}
                  alt="Center view"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              <div className="w-[200px] h-[250px] shrink-0 relative transition-all duration-500 ease-in-out">
                <Image
                  src={images[getImageIndex(1)]}
                  alt="Right view"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Desktop: Three cards */}
          <div className="hidden lg:block">
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
          </div>

          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-500 
                flex items-center justify-center text-gray-300 
                hover:border-gray-300 hover:text-white 
                transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48"
                height="48"
                className="w-8 h-8 sm:w-12 sm:h-12"
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
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-500 
                flex items-center justify-center text-gray-300 
                hover:border-gray-300 hover:text-white
                transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48"
                height="48"
                className="w-8 h-8 sm:w-12 sm:h-12"
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