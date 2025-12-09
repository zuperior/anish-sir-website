"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Tooltip } from "@/components/ui/tooltip-card";
import { BoomingBullsTooltip } from "./ui/boomingbulls-tootltip";
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
      className="relative overflow-hidden min-h-[735px] flex items-center justify-center py-24 px-8"
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
        <BlurText stepDuration={0.25} delay={50} easing={(t) => t} className="mx-auto text-[1.9rem] sm:text-2xl md:text-3xl lg:text-4xl 
             leading-[1.2em] tracking-[-0.04em] font-medium mb-7 
             font-clash-display min-w-[1090px] text-center"
        >
          Anish Singh Thakur is a globally respected trading educator and the visionary Founder & CEO of{" "}
          <Tooltip
            content={<BoomingBullsTooltip />}
            containerClassName="text-[#BB2215] font-normal px-3 text-[32px] leading-[1.5em] tracking-[-0.08em] font-krona cursor-pointer"
          >
            <span>Booming Bulls</span>
          </Tooltip>
          one of the world’s largest and most impactful trading education ecosystems. Trusted by over 3 Million learners globally, he has built a high-performance platform
        </BlurText>

        <div className="flex items-center justify-between gap-8 px-4 py-13 font-clash-display">
          <div className="flex-1 min-w-0 flex items-center gap-4">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway leading-[1em] tracking-[-2.4px]">
              <Counter target={75} suffix="k+" />
            </div>
            <span className="text-gray-700 font-clash-display text-[22px] leading-[1.2em] tracking-[-0.05em] min-w-max">
              Students Mentored
            </span>
          </div>

          <div
            className="w-0.5 h-[29px] bg-linear-to-b from-[#545454] to-black mx-4 z-20"
            style={{ mixBlendMode: "normal" }}
            aria-hidden
          />

          <div className="flex-1 min-w-0 flex items-center gap-4">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway leading-[1em] tracking-[-2.4px]">
              <Counter target={336} suffix="M+" />
            </div>
            <div className="text-gray-700 font-clash-display text-[22px] leading-[1.2em] tracking-[-0.05em] min-w-max">
              Youtube Views
            </div>
          </div>

          <div
            className="w-0.5 h-[29px] bg-linear-to-b from-[#545454] to-black mx-4 z-20"
            style={{ mixBlendMode: "normal" }}
            aria-hidden
          />

          <div className="flex-1 min-w-0 flex items-center gap-4">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway leading-[1em] tracking-[-2.4px]">
              <Counter target={100} suffix="+" />
            </div>
            <div className="text-gray-700 font-clash-display text-[22px] leading-[1.2em] tracking-[-0.05em] min-w-max">
              Youtube Videos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStats;
