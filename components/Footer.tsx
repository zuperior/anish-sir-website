'use client'

// To Do: Add images to the boxes and style them better
// To Do: Optimize GSAP animations
// To Do: Set proper inital positions for images from framer
// To Do: Figure out overflow issues with boxes

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    boxesRef.current.forEach((box) => {
      if (!box) return;

      const initial = {
        opacity: 0,
        scale: 0.3 + Math.random() * 0.5,
        rotationX: -30 + Math.random() * 60,
        rotationY: -30 + Math.random() * 60,
        rotationZ: -30 + Math.random() * 60,
        x: -200 + Math.random() * 400,
        y: -150 + Math.random() * 300,
      };

      gsap.fromTo(
        box,
        { ...initial },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: sectionRef.current,      // trigger based on section
            start: "top 50%",                 // start when section top hits 50% of viewport
            end: "bottom 80%",                // end before section bottom leaves viewport
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#151515] w-full h-[3800px] relative">
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center gap-2.5">
        {/* Grid for 10 boxes */}
        <div className="grid grid-cols-5 gap-x-2.5 gap-y-2.5 w-full overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              ref={(el: HTMLDivElement | null) => {
                boxesRef.current[i] = el;
              }}
              className="w-full aspect-square bg-gray-800 flex items-center justify-center text-white font-bold"
            >
              Box {i + 1}
            </div>
          ))}
        </div>

        {/* Centered text over the boxes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[15px]">
          <h1 className="text-[52px] font-medium text-white -tracking-[0.01em] leading-[1.2em]">
            Anish Singh Thakur
          </h1>

          <Link
            className="py-[15px] px-[25px] rounded-full bg-white font-clash-grotesk font-medium text-black text-xl tracking-tight leading-[0.9em]"
            href={"https://instagram.com/anishsinghthakur"}
            target="_blank"
          >
            Connect with Anish
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
