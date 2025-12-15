"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import BlurText from "./ui/shadcn-io/blur-text";

const bgGif =
  "https://framerusercontent.com/images/AVsssNQRylEZc5orEWvz8Q1wQT4.gif";
const overlayColor = "rgba(242,239,233,0.9)";
const darkOverlay = "rgba(0,0,0,0.1)";

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000; // 2 seconds
    const incrementTime = duration / end;

    const interval = setInterval(() => {
      start += 1;
      if (start <= end) {
        setCount(start);
      } else {
        clearInterval(interval);
      }
    }, incrementTime);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 50,
      }}
    >
      {count}
      {suffix}
    </motion.div>
  );
};

const HeroStats: React.FC = () => {
  return (
    <section
      aria-label="Hero with stats"
      id="about"
      className="relative overflow-hidden min-h-[735px] flex items-center justify-center py-12 md:py-24 px-1 lg:px-8"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gif-static"
        style={{
          backgroundImage: `url(${bgGif})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "left top",
          backgroundSize: "250px auto",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: darkOverlay }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl text-center text-black px-8 py-12">
        <BlurText
          stepDuration={0.25}
          delay={50}
          easing={(t) => t}
          preserveSegments={["Booming Bulls"]}
          className="mx-auto text-[23px] sm:text-2xl md:text-3xl lg:text-4xl 
             leading-[1.2em] tracking-[-0.04em] font-medium mb-7 
             font-clash-display min-w-[1090px] text-center"
        >
          Anish Singh Thakur is a globally respected trading educator and the
          visionary Founder & CEO of{" "}
          <LinkPreview
            url="https://www.youtube.com/@BoomingBulls"
            isStatic={true}
            imageSrc="/Anish-Singh-Thakur-youtube.png"
            className="text-[#BB2215] no-underline! font-normal px-2 text-[20px] md:text-[32px] leading-[1.5em] tracking-[-0.08em] font-krona cursor-pointer decoration-transparent hover:decoration-[#BB2215] transition"
          >
            Booming Bulls
          </LinkPreview>
          one of the world’s largest and most impactful trading education
          ecosystems. Trusted by over 3 Million learners globally, he has built
          a high-performance platform
        </BlurText>

        {/* Mobile + Tablet (0 - <lg): stacked with dividers */}
        <div className="flex flex-col items-center gap-4 px-4 py-13 font-clash-display lg:hidden">
          {/* Students */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              {/* number bigger on md (tablet) */}
              <div className="text-3xl md:text-4xl font-bold font-raleway leading-[1em] tracking-[-2.4px]">
                <Counter target={75} suffix="k+" />
              </div>
              {/* label bigger on md */}
              <span className="text-black/70 text-[22px] md:text-[22px] leading-[1.2em] tracking-[-0.05em]">
                Students Mentored
              </span>
            </div>
            <div className="flex justify-center w-full">
              <div className="w-px h-6 bg-linear-to-b from-[#545454] to-black" />
            </div>
          </div>

          {/* Views */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <div className="text-3xl md:text-4xl font-bold font-raleway leading-[1em] tracking-[-2.4px]">
                <Counter target={336} suffix="M+" />
              </div>
              <span className="text-black/70 text-[22px] md:text-[22px] leading-[1.2em] tracking-[-0.05em]">
                Youtube Views
              </span>
            </div>
            <div className="flex justify-center w-full">
              <div className="w-px h-6 bg-linear-to-b from-[#545454] to-black" />
            </div>
          </div>

          {/* Videos */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <div className="text-3xl md:text-4xl font-bold font-raleway leading-[1em] tracking-[-2.4px]">
                <Counter target={100} suffix="+" />
              </div>
              <span className="text-black/70 text-[22px] md:text-[22px] leading-[1.2em] tracking-[-0.05em]">
                Youtube Videos
              </span>
            </div>
          </div>
        </div>


        {/* Desktop (>= lg): row with vertical dividers */}
        <div className="hidden lg:flex items-center justify-center gap-12 px-4 py-13 font-clash-display">
          {/* Students */}
          <div className="flex items-center gap-4">
            <div className="text-4xl lg:text-5xl font-bold font-raleway leading-[1em] tracking-[-2.4px]">
              <Counter target={75} suffix="k+" />
            </div>
            <span className="text-gray-700 text-[22px] leading-[1.2em] tracking-[-0.05em] min-w-max">
              Students Mentored
            </span>
          </div>

          {/* Divider */}
          <div className="flex items-center">
            <div
              className="w-0.5 h-[29px] bg-linear-to-b from-[#545454] to-black"
              style={{ mixBlendMode: "normal" }}
              aria-hidden
            />
          </div>

          {/* Views */}
          <div className="flex items-center gap-4">
            <div className="text-4xl lg:text-5xl font-bold font-raleway leading-[1em] tracking-[-2.4px]">
              <Counter target={336} suffix="M+" />
            </div>
            <span className="text-gray-700 text-[22px] leading-[1.2em] tracking-[-0.05em] min-w-max">
              Youtube Views
            </span>
          </div>

          {/* Divider */}
          <div className="flex items-center">
            <div
              className="w-0.5 h-[29px] bg-linear-to-b from-[#545454] to-black"
              style={{ mixBlendMode: "normal" }}
              aria-hidden
            />
          </div>

          {/* Videos */}
          <div className="flex items-center gap-4">
            <div className="text-4xl lg:text-5xl font-bold font-raleway leading-[1em] tracking-[-2.4px]">
              <Counter target={100} suffix="+" />
            </div>
            <span className="text-gray-700 text-[22px] leading-[1.2em] tracking-[-0.05em] min-w-max">
              Youtube Videos
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroStats;
