"use client";
import Image from "next/image";
import { TextAnimate } from "./ui/text-animate";
import { motion } from "framer-motion";

const HeroSection = () => {
  const links = [
    "About me",
    "Personal",
    "Projects",
    "Be Your Own Boss",
    "Resources",
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        alt="Hero Section Image"
        src="/heroSection.png"
        fill
        priority
        className="object-cover absolute top-0 left-0 -z-10"
      />

      {/* Center Content */}
      <div className="flex items-center justify-center h-full w-full">
        <div className="h-[260px] w-full flex items-center justify-between px-[50px]">
          {/* Box 1 */}
          <div className="w-[500px] h-[260px] flex flex-col justify-start gap-[25px]">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.6, // ← Adjust if TextAnimate duration differs
              }}
              className="text-[#FFC3BD] text-[22px] leading-[0.9em] pl-[25px] font-nata-sans"
            >
              Investor, Educator & CEO
            </motion.p>
            <TextAnimate
              as={"div"}
              animation="blurInUp"
              className="text-[80px] tracking-[-0.08em] leading-[0.9em] text-white font-krona h-[216px]"
            >
              ANISH SINGH THAKUR
            </TextAnimate>
          </div>

          {/* Box 2 */}
          <div className="flex items-start justify-center">
            <motion.div className="flex flex-col gap-0 text-[32px] font-medium font-clash-display text-right">
              {links.map((link, index) => {
                let delay = 0;

                if (index < 3) delay = index * 0.2; // 0s, 0.2s, 0.4s
                if (index === 2) delay = 0.4; // Projects after pause
                if (index === 4) delay = 0.62; // Resources after more pause

                return (
                  <motion.a
                    key={link}
                    href="#"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay }}
                    className="text-[#ffffff]/25 hover:text-[#FFDAD6]/45 transition-colors duration-300 -tracking-[0.04em] leading-[1.3em]"
                  >
                    {link}
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
