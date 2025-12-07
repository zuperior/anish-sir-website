"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const RootedInValues = () => {
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = paraRef.current;
    if (!element) return;

    const text = element.innerText;
    const words = text.split(" ");

    element.innerHTML = words
      .map(
        (word) =>
          `<span class="word opacity-[0.97] whitespace-normal">${word} </span>`
      )
      .join("");

    const wordSpans = element.querySelectorAll(".word");

    gsap.fromTo(
      wordSpans,
      { color: "rgba(0,0,0,0.2)" },
      {
        color: "rgba(0,0,0,0.7)",
        stagger: 0.07,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative w-full h-[933px] py-[100px] flex flex-col gap-[50px]  overflow-hidden">
      {/* 🔽 Image overlays ON TOP of white bg */}
      <Image
        src="/noiseBG.png"
        alt="bg"
        fill
        className="object-cover absolute inset-0 opacity-[0.45] mix-blend-normal"
      />
      {/* Overlay white */}
      <div className="absolute inset-0 bg-[#f5f3f0e6] z-0" />

      <div className="flex flex-col gap-[15px] ">
        {/* 🔼 Text stays above image */}
        <h2 className="font-clash-display w-full max-w-[1000px] mx-auto text-[52px] font-medium text-center relative z-10">
          Rooted in Values, guided by Role Models
        </h2>

        <p
          ref={paraRef}
          className="w-full font-medium max-w-[1050px] mx-auto text-[20px] font-clash-grotesk tracking-[-0.02em] leading-[1.1em] text-center relative z-10 whitespace-nowrap"
        >
          Anish draws inspiration from Anthony Robbins and Sadhguru, two figures
          who shaped his thinking around human potential, inner mastery, and
          conscious living. Their teachings influence his leadership style,
          communication, and his mission to empower individuals to transform
          their lives through knowledge and discipline.
        </p>
      </div>

      <div className="w-full max-w-[984px] h-[500px] mx-auto grid grid-cols-3 gap-[10px] relative z-10 ">
        <div className="w-full h-full">
          <motion.div
            className="w-full h-full relative"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/manWithMic.png"
              alt=""
              height={213}
              width={322}
              className="bottom-0 absolute"
            />
          </motion.div>
        </div>
        <div className="relative w-[375px] h-[500px] group perspective">
          <div className="absolute inset-0 preserve-3d">
            {/* Front Image */}
            <div className="absolute inset-0 backface-hidden transition-all duration-700 origin-bottom group-hover:rotate-x-180">
              <Image
                src="/airplane.png"
                alt="front"
                width={375}
                height={500}
                className="rounded-lg"
              />
            </div>

            {/* Back Image */}
            <div className="absolute inset-0 rotate-x-180 backface-hidden transition-all duration-700 origin-bottom group-hover:rotate-x-0">
              <Image
                src="/royalRoyce.png"
                alt="back"
                width={375}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <motion.div
          className="w-full h-full flex items-start relative"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/satguru.png"
            alt=""
            height={295}
            width={267}
            className="top-0 right-0 absolute"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default RootedInValues;
