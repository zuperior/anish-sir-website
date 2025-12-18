"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import BlurText from "./ui/shadcn-io/blur-text";
import Image from "next/image";

const bgGif =
  "https://framerusercontent.com/images/AVsssNQRylEZc5orEWvz8Q1wQT4.gif";
const overlayColor = "rgba(242,239,233,0.9)";
const darkOverlay = "rgba(0,0,0,0.1)";

const statsData = [
  { target: 75, suffix: "k+", label: "Students Mentored" },
  { target: 336, suffix: "M+", label: "Youtube Views" },
  { target: 100, suffix: "+", label: "Youtube Videos" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 2000;
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
      transition={{ type: "spring", stiffness: 150, damping: 50 }}
    >
      {count}
      {suffix}
    </motion.div>
  );
};

const Divider = () => (
  <div className="flex items-center">
    <Image
      src="/divider.svg"
      width={2}
      height={29}
      alt="divider"
      className="shrink-0"
    />
  </div>
);

const StatItem = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="flex items-center gap-4">
      <div className="text-3xl md:text-4xl font-bold font-raleway leading-[1em] tracking-[-2.4px]">
        <Counter target={target} suffix={suffix} />
      </div>
      <span className="text-black/70 text-[22px] leading-[1.2em] tracking-[-0.05em]">
        {label}
      </span>
    </div>
  </div>
);

const StatItemDesktop = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => (
  <div className="flex items-center gap-3">
    <div className="text-4xl lg:text-5xl font-bold font-raleway leading-[1em] tracking-[-2.4px]">
      <Counter target={target} suffix={suffix} />
    </div>
    <span className="text-black/70 text-[22px] leading-[1.2em] tracking-[-0.05em] min-w-max">
      {label}
    </span>
  </div>
);

const HeroStats: React.FC = () => {
  return (
    <section
      aria-label="Hero with stats"
      id="about"
      className="relative overflow-hidden min-h-[735px] flex items-center justify-center py-12 md:py-24 px-1 lg:px-8"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gif-static"
        style={{
          backgroundImage: `url(${bgGif})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "left top",
          backgroundSize: "250px auto",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: overlayColor }} />
        <div className="absolute inset-0" style={{ backgroundColor: darkOverlay }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl text-center text-black px-8 py-12">
        <BlurText
          stepDuration={0.25}
          delay={50}
          easing={(t) => t}
          preserveSegments={["Booming Bulls"]}
          className="mx-auto text-[23px] sm:text-2xl md:text-3xl lg:text-4xl leading-[1.2em] tracking-[-0.04em] font-medium mb-7 font-clash-display min-w-[1090px] text-center"
        >
          Anish Singh Thakur is a globally respected trading educator and the
          visionary Founder & CEO of{" "}
          <LinkPreview
            url="https://www.youtube.com/@BoomingBulls"
            isStatic={true}
            imageSrc="/Anish-Singh-Thakur-youtube.png"
            className="text-[#BB2215] no-underline! font-normal px-4 text-[20px] md:text-[32px] leading-[1.3em] tracking-[-0.08em] font-krona cursor-pointer decoration-transparent hover:decoration-[#BB2215] transition"
          >
            Booming Bulls
          </LinkPreview>
          one of the world&apos;s largest and most impactful trading education
          ecosystems. Trusted by over 3Million learners globally, he has built
          a high-performance platform
        </BlurText>

        {/* Mobile + Tablet */}
        <div className="flex flex-col items-center gap-4 px-4 py-13 font-clash-display lg:hidden">
          {statsData.map((stat, index) => (
            <React.Fragment key={index}>
              <StatItem target={stat.target} suffix={stat.suffix} label={stat.label} />
              {index < statsData.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-center gap-12 px-4 py-13 font-clash-display">
          {statsData.map((stat, index) => (
            <React.Fragment key={index}>
              <StatItemDesktop target={stat.target} suffix={stat.suffix} label={stat.label} />
              {index < statsData.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroStats;