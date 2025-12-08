"use client";
import React, { useRef, useEffect } from "react";
import BookLoverSection from "./BookLoverSection";
import AmazonButton from "./AmazonButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Index = () => {
  // For text scroll reveal
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (paragraphRef.current) {
      // Split text into words
      const text = paragraphRef.current.textContent || "";
      const words = text.split(" ");

      // Clear original text and wrap each word in a span
      paragraphRef.current.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      // Animate each word
      gsap.fromTo(
        paragraphRef.current.querySelectorAll(".word"),
        {
          opacity: 0.1,
        },
        {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 70%",
            end: "bottom 50%",
            scrub: 0.2,
            toggleActions: "Play Play Reverse Reverse",

          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


  return (
    <section className="bg-[#151515] flex flex-col items-center relative gap-[70px] py-20">
        <div className="w-full flex flex-col items-center gap-2.5">
          <h2 className="-tracking-[0.01em] leading-[1.2em] font-medium text-[52px] text-white text-center">
            Lover of Books & Writer at Heart
          </h2>

          <p
            ref={paragraphRef}
            className="text-[#ffffff]/70 w-full max-w-[1050px] text-center text-xl  font-medium leading-[1.1em] tracking-[-0.02em]"
          >
            &quot;Anish Singh Thakur is a globally respected trading educator and the visionary Founder & CEO of Booming Bulls, one of the world&apos;s largest and most impactful trading education ecosystems. Trusted by over 3 million learners globally, he has built a high-performance platform&quot;
          </p>
        </div>
        <BookLoverSection />
        <AmazonButton />
    </section>
  );
};

export default Index;
