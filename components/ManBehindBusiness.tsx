"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import tower1 from "../public/tower1.png";
import tower2 from "../public/tower2.png";
import person from "../public/anish-singh.png";
// import circle from "../public/circleBooming.png";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ManBehindBusiness = () => {
  const [activeItem, setActiveItem] = useState<null | {
    src: string;
    description: string;
    link: string;
  }>(null);

  // const [isHovered, setIsHovered] = useState(false);
  // const [currentRotation, setCurrentRotation] = useState(0);

  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const rotationRef = useRef(rotation);

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  useEffect(() => {
    let animationFrame: number;

    const rotate = () => {
      if (!isHovered) {
        setRotation((prev) => (prev + 0.5) % 360); // adjust speed here
      }
      animationFrame = requestAnimationFrame(rotate);
    };

    rotate();

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  useEffect(() => {
    let animationFrame: number;
    const rotate = () => {
      setRotation((prev) => (prev + 0.2) % 360); // adjust speed here
      animationFrame = requestAnimationFrame(rotate);
    };
    rotate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const containerRef = useRef(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!paragraphRef.current) return;

    const paragraph = paragraphRef.current;

    // Wrap words only if not already wrapped
    if (!paragraph.querySelector(".word")) {
      const words = paragraph.textContent?.split(" ") || [];
      paragraph.innerHTML = words
        .map((word) => `<span class="word">${word} </span>`)
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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const imageData = [
    {
      src: "/icons/booming-bulls-logo.png",
      description: "asasasasascs .",
      link: "https://boomingbulls.com",
    },
    {
      src: "/icons/market-genius.png",
      description:
        "With hundreds of thousands of traders learning together every day, the Booming Bulls Telegram community represents one of the strongest educational movements in India's trading landscape.",
      link: "https://boomingbulls.com",
    },
    {
      src: "/icons/booming-realm.png",
      description:
        "With hundreds of thousands of traders learning together every day, the Booming Bulls Telegram community represents one of the strongest educational movements in India's trading landscape.",
      link: "https://boomingbulls.com",
    },
    {
      src: "/icons/BB-finserv.png",
      description:
        "With hundreds of thousands of traders learning together every day, the Booming Bulls Telegram community represents one of the strongest educational movements in India's trading landscape.",
      link: "https://boomingbulls.com",
    },
    {
      src: "/icons/traders-cafe.png",
      description:
        "With hundreds of thousands of traders learning together every day, the Booming Bulls Telegram community represents one of the strongest educational movements in India's trading landscape.",
      link: "https://boomingbulls.com",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#1A1A1A] overflow-hidden"
      id="projects"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  z-0"
        style={{
          backgroundImage: "url('/Wall-texture.png')",
          opacity: 0.3,
        }}
      />
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="absolute -bottom-10  left-1/2 -translate-x-72 md:-left-20 md:translate-x-0 z-10 w-[527px] h-[446px]  lg:w-[427px] lg:h-[346px] xl:w-[527px] xl:h-[446px]"
      >
        <Image src={person} alt="The Man" width={527} height={446} />
      </motion.div>

      {/* <div className="absolute bottom-[-98px] lg:bottom-[-206px] right-0 lg:right-50">
        <div className="relative w-[201px] h-[201px] lg:w-[350px] lg:h-[350px] xl:w-[410px] xl:h-[426px] rounded-full overflow-hidden">
          {imageData.map((item, i) => (
            <div key={i} className=" w-[522px] h-[524px] ">
              <Image
                src="/circleBooming.jpg"
                alt=""
                fill
                className="object-cover "
              />
            </div>
          ))}
        </div>
      </div> */}

      {/* SINGLE MAIN DIV */}
      <div className="absolute bottom-[-98px] lg:bottom-[-206px] right-0 md:right-20 lg:right-30 xl:right-50 w-[522px] h-[680px]">
        {/* TEXT + ARROW */}
        <div className="  hidden md:flex absolute lg:top-[200px] xl:top-[130px] md:top-[380px] left-1/2 translate-x-25 lg:left-[68%] lg:-translate-x-1/2 xl:left-1/2 xl:-translate-x-8 z-20 flex-col items-center  pointer-events-none">
          <p className="text-white text-[16px] xl:text-[20px] leading-[1.2em] tracking-[-0.03em] uppercase">
            Click to Expand
          </p>

          <Image
            src="/expandArrow.png"
            alt=""
            height={40}
            width={170}
            className="object-cover h-5 w-[100px] lg:h-[30] lg:w-[140px] mt-[25px]"
          />
        </div>

        {/* CIRCLE IMAGE (UNCHANGED LOGIC) */}
        <div className="hidden md:flex absolute bottom-0 right-0 ">
          <Image
            src="/Polygon.svg"
            alt=""
            height={48}
            width={61}
            className="absolute top-[-20px] left-1/2 -translate-x-1/2 z-[999]"
          />
          <div className="relative w-[201px] h-[201px] lg:w-[350px] lg:h-[350px] xl:w-[410px] xl:h-[426px] rounded-full overflow-hidden">
            {/* Circle */}
            <div className=" w-[522px] h-[524px] ">
              <Image
                src="/circleBooming.jpg"
                alt=""
                fill
                className="object-cover z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* {activeItem && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center px-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-[520px] w-full p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
              <Image
                src={activeItem.src}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[15px] leading-relaxed text-gray-700">
              {activeItem.description}
            </p>
            <a
              href={activeItem.link}
              target="_blank"
              className="inline-block text-red-600 font-medium hover:underline"
            >
              Visit Website →
            </a>
          </div>
        </div>
      )} */}

      <Image
        src={tower1}
        alt="Tower Left"
        className="absolute bottom-0 -left-20 opacity-[0.70] w-[215px] h-[450px] xl:w-[299px] xl:h-[719px] "
      />
      <Image
        src={tower2}
        alt="Tower Right"
        className="absolute bottom-0  -right-[62px]  lg:-right-[60px] xl:-right-[107px] opacity-[0.70] w-[191px] h-[367px]  xl:w-[367px] xl:h-[704px]"
      />
      <div className=" w-full   h-[259px] lg:h-[183px] text-center flex flex-col items-center gap-[15px] z-10  relative">
        <h2
          className=" text-[32px] lg:text-[52px]  leading-[1.2]  tracking-[-0.01em]
       font-clash-display font-medium text-white pt-[100px] px-[15px] lg:px-0"
        >
          The Man behind the Business
        </h2>
        <p
          ref={paragraphRef}
          className="text-[16px]  lg:text-[20px] text-[#FFFFFF]/70 w-full  -mt-2 lg:w-[1000px] min-h-[106px] font-clash-grotesk opacity-100 leading-[1.1] tracking-[-0.02em] font-medium  lg:p-0 p-4"
        >
          Anish lives by a powerful belief: “The size of the fish doesn’t
          matter; the pond it swims in matters the most.” This is why he chooses
          to live in fast-paced, high-growth cities; environments that challenge
          him, push him, and align with his ambition to build something global.
        </p>
      </div>
    </div>
  );
};

export default ManBehindBusiness;
