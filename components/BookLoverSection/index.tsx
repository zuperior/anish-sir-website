"use client";
import React, { useRef, useState, useEffect } from "react";
import BookLoverSection from "./BookLoverSection";
import AmazonButton from "../ui/AmazonButton";

const Index = () => {
  // For text scroll reveal
  const textRef = useRef<HTMLParagraphElement>(null);
  const [revealProgress, setRevealProgress] = useState(0);

  // Text for the reveal
  const text = `"Anish Singh Thakur is a globally respected trading educator and the visionary Founder & CEO of Booming Bulls, one of the world’s largest and most impactful trading education ecosystems. Trusted by over 3 million learners globally, he has built a high-performance platform"`;

  const revealedChars = Math.floor(revealProgress * text.length);

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

  // Carousel images


  return (
    <>
    <div className="bg-[#151515] flex flex-col items-center py-6">
      <div className="max-w-[1200px] w-full flex flex-col items-center">
        <h2 className="-tracking-[0.01em] leading-[1.2em] font-medium text-[52px] text-white text-center">
         Lover of Books & Writer at Heart

        </h2>

        <p
          ref={textRef}
          className="text-[#ffffff] w-full max-w-[1050px] text-center mt-1 text-lg md:text-xl opacity-80 font-medium leading-tight"
        >
          {text.split("").map((char, index) => (
            <span
              key={index}
              style={{
                color:
                  index < revealedChars
                    ? "rgba(255, 255, 255, 0.8)"
                    : "rgba(128, 128, 128, 0.5)",
                transition: "color 0.1s ease",
              }}
            >
              {char}
            </span>
          ))}
        </p>

      </div>
      <BookLoverSection/>
<AmazonButton/>
    </div>

      </>
  );
};

export default Index;
