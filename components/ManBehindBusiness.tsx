"use client";
import React, { useRef, useEffect } from 'react'
import Image from "next/image";
import tower1 from "../public/tower1.png"
import tower2 from "../public/tower2.png"
import person from "../public/anish-singh.png"
import circle from "../public/spinner.png"
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ManBehindBusiness = () => {
  const containerRef = useRef(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-30, 0]
  );
  const smoothRotate = useSpring(rotate, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (!paragraphRef.current) return;

    const paragraph = paragraphRef.current;

    // Wrap words only if not already wrapped
    if (!paragraph.querySelector(".word")) {
      const words = paragraph.textContent?.split(" ") || [];
      paragraph.innerHTML = words
        .map(word => `<span class="word">${word} </span>`)
        .join("");
    }

    // Wait for DOM to update
    requestAnimationFrame(() => {
      const wordSpans = paragraph.querySelectorAll(".word");
      gsap.fromTo(
        wordSpans,
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: paragraph,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 0.2,
            toggleActions: "play play reverse reverse", // lowercase
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#BA1D0B] overflow-hidden" id='projects'
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  z-0"
        style={{
          backgroundImage: "url('/Wall-texture.png')",
          opacity: 0.3
        }}
      />
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        className="absolute bottom-0 -left-20 z-10"
      >
        <Image
          src={person}
          alt="The Man"
          width={527}
          height={446}
        />
      </motion.div>

      <motion.div
        style={{
          rotate: smoothRotate,
          transformOrigin: "50% 50%"
        }}
        className="absolute bottom-[-130px] right-[360px]  "
      >
        <Image src={circle} alt="circle" width={426} height={426} />
      </motion.div>
      <Image
        src={tower1}
        alt="Tower Left"
        className="absolute bottom-0 -left-20 opacity-[0.70]"
        width={299}
        height={719}
      />
      <Image
        src={tower2}
        alt="Tower Right"
        className="absolute bottom-0 -right-[107px] opacity-[0.70]"
        width={367}
        height={704}
      />
      <div className="w-full h-[183px] text-center flex flex-col items-center gap-[15px] z-10 relative">
        <h2 className="text-[52px] -tracking-[0.01em] font-clash-display font-medium text-white pt-[100px]">
          The Man behind the Business
        </h2>
        <p
          ref={paragraphRef}
          className="text-[20px] text-[#FFFFFF]/70 w-[1000px] min-h-[106px] font-clash-grotesk opacity-100 leading-[1.1] tracking-[-0.02em] font-medium"
        >
          Anish lives by a powerful belief: “The size of the fish doesn’t matter; the pond it swims in matters the most.”  This is why he chooses to live in fast-paced, high-growth cities; environments that challenge him, push him, and align with his ambition to build something global.
        </p>
      </div>
    </div>
  );
}

export default ManBehindBusiness;