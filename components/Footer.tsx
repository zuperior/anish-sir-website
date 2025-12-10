'use client'

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { footerImageConfig } from "@/utils/footerConfig";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    boxesRef.current.forEach((box, i) => {
      if (!box) return;

      const { initial, trigger } = footerImageConfig[i];

      gsap.fromTo(
        box,
        { ...initial, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#151515] w-full h-[320vh] relative">
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center gap-2.5 z-0">
        
        {/* Grid for 10 boxes */}
        <div className="grid grid-cols-5 gap-x-5 gap-y-5 w-full overflow-hidden opacity-75">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              ref={(el: HTMLDivElement | null) => {
                boxesRef.current[i] = el;
              }}
              className="w-full aspect-square bg-gray-800 relative overflow-hidden"
            >
              <Image 
                src={`/footer/${i + 1}.jpg`}
                alt={`footer-img-${i + 1}`}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
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

      <div className="relative w-px" id="triggers">
        <div className="h-screen" id="trigger1" />
        <div className="h-screen absolute top-[350px]" id="trigger2" />
        <div className="h-screen absolute top-[580px]" id="trigger3" />
        <div className="h-screen absolute bottom-40" id="trigger4" />
      </div>
    </section>
  );
};

export default Footer;
