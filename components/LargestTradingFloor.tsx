"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LargestTradingFloor() {
  const [viewState, setViewState] = useState<
    "default" | "leftExpanded" | "rightExpanded"
  >("default");
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  const leftImage = "/left.jpg";
  const centerImage = "/center.png";
  const rightImage = "/right.jpg";

  const text = `"Anish Singh Thakur is a globally respected trading educator and the visionary Founder & CEO of Booming Bulls, one of the world's largest and most impactful trading education ecosystems. Trusted by over 3 million learners globally, he has built a high-performance platform"`;

  useEffect(() => {
    if (paragraphRef.current) {
      const text = paragraphRef.current.textContent || "";
      const words = text.split(" ");

      paragraphRef.current.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

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
            start: "top 80%",
            end: "bottom 60%",
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

  const nextSlide = () => {
    if (!leftCardRef.current || !rightCardRef.current) return;

    if (viewState === "default") {
      setViewState("leftExpanded");

      gsap.fromTo(
        leftCardRef.current,
        { width: "350px" },
        { width: "575px", duration: 0.6, ease: "power2.inOut" }
      );

      gsap.fromTo(
        rightCardRef.current,
        { width: "350px" },
        { width: "120px", duration: 0.6, ease: "power2.inOut" }
      );

      // Animate right image border radius
      if (rightImageRef.current) {
        gsap.to(rightImageRef.current, {
          borderTopRightRadius: "0px",
          borderBottomRightRadius: "0px",
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
    } else if (viewState === "rightExpanded") {
      setViewState("default");

      gsap.fromTo(
        rightCardRef.current,
        { width: "575px" },
        { width: "350px", duration: 0.6, ease: "power2.inOut" }
      );

      gsap.fromTo(
        leftCardRef.current,
        { width: "120px" },
        { width: "350px", duration: 0.6, ease: "power2.inOut" }
      );

      // Restore left image border radius
      if (leftImageRef.current) {
        gsap.to(leftImageRef.current, {
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          duration: 0.6,
          ease: "power2.inOut",
        });
      }

      // Restore right image border radius
      if (rightImageRef.current) {
        gsap.to(rightImageRef.current, {
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
    }
  };

  const prevSlide = () => {
    if (!leftCardRef.current || !rightCardRef.current) return;

    if (viewState === "default") {
      setViewState("rightExpanded");

      gsap.fromTo(
        rightCardRef.current,
        { width: "350px" },
        { width: "575px", duration: 0.6, ease: "power2.inOut" }
      );

      gsap.fromTo(
        leftCardRef.current,
        { width: "350px" },
        { width: "120px", duration: 0.6, ease: "power2.inOut" }
      );

      // Animate left image border radius
      if (leftImageRef.current) {
        gsap.to(leftImageRef.current, {
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
    } else if (viewState === "leftExpanded") {
      setViewState("default");

      gsap.fromTo(
        leftCardRef.current,
        { width: "575px" },
        { width: "350px", duration: 0.6, ease: "power2.inOut" }
      );

      gsap.fromTo(
        rightCardRef.current,
        { width: "120px" },
        { width: "350px", duration: 0.6, ease: "power2.inOut" }
      );

      // Restore left image border radius
      if (leftImageRef.current) {
        gsap.to(leftImageRef.current, {
          borderTopLeftRadius: "16px",
          borderBottomLeftRadius: "16px",
          duration: 0.6,
          ease: "power2.inOut",
        });
      }

      // Restore right image border radius
      if (rightImageRef.current) {
        gsap.to(rightImageRef.current, {
          borderTopRightRadius: "16px",
          borderBottomRightRadius: "16px",
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#151515] flex items-center justify-center p-4 md:p-4">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-6 md:mb-2 px-2">
          <h1 className="text-2xl sm:text-3xl md:text-[52px] font-medium text-white my-2 px-2">
            Asia&apos;s Largest Trading Floor
          </h1>
          <p
            ref={paragraphRef}
            className="max-w-5xl text-sm md:text-[20px] font-medium mx-auto leading-tight px-2 text-[rgba(255,255,255,0.7)]"
          >
            {text}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Mobile: Single card view */}
          <div className="block sm:hidden w-full px-4">
            <div className="relative w-full h-[300px]">
              <Image
                src={centerImage}
                alt="Trading floor view"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Tablet: Two cards */}
          <div className="hidden sm:block lg:hidden">
            <div className="flex items-center justify-center gap-3">
              <div className="w-[200px] h-[250px] shrink-0 relative transition-all duration-500 ease-in-out">
                <Image
                  src={leftImage}
                  alt="Left view"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              <div className="w-[300px] h-[250px] shrink-0 relative transition-all duration-500 ease-in-out">
                <Image
                  src={centerImage}
                  alt="Center view"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              <div className="w-[200px] h-[250px] shrink-0 relative transition-all duration-500 ease-in-out">
                <Image
                  src={rightImage}
                  alt="Right view"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Desktop: Three cards with GSAP animations */}
          <div className="hidden lg:block">
            <div className="relative h-[400px] flex items-center justify-center gap-5 overflow-hidden">
              <div
                ref={leftCardRef}
                className="w-[350px] h-[350px] shrink-0 relative group overflow-hidden"
              >
                <div
                  ref={leftImageRef}
                  className="w-full h-full rounded-2xl overflow-hidden relative"
                >
                  <Image
                    src={leftImage}
                    alt="Left view"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              </div>

              <div
                ref={centerCardRef}
                className="w-[575px] h-[350px] shrink-0 relative group"
              >
                <Image
                  src={centerImage}
                  alt="Center view"
                  fill
                  className="object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              </div>

              <div
                ref={rightCardRef}
                className="w-[350px] h-[350px] shrink-0 relative group overflow-hidden"
              >
                <div
                  ref={rightImageRef}
                  className="w-full h-full rounded-2xl overflow-hidden relative"
                >
                  <Image
                    src={rightImage}
                    alt="Right view"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
          {/* nav buttons */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {/* LEFT BUTTON */}
            <Image
              src="/leftArrow.png"
              alt="Prev Slide"
              width={50}
              height={50}
              onClick={viewState === "rightExpanded" ? undefined : prevSlide}
              className={`
    w-12 h-12 sm:w-14 sm:h-14 object-contain
    transition-all duration-300
    ${
      viewState === "rightExpanded"
        ? "opacity-50 cursor-not-allowed"
        : "hover:opacity-50 cursor-pointer"
    }
  `}
            />

            {/* RIGHT BUTTON */}
            <Image
              src="/rightArrow.png"
              alt="Next Slide"
              width={50}
              height={50}
              onClick={viewState === "leftExpanded" ? undefined : nextSlide}
              className={`
      w-12 h-12 sm:w-14 sm:h-14 rounded-full border  
      flex items-center justify-center 
      transition-all duration-300
      ${
        viewState === "leftExpanded"
          ? "opacity-50 cursor-not-allowed"
          : "hover:opacity-70 cursor-pointer"
      }
  `}
              style={{
                pointerEvents: viewState === "leftExpanded" ? "none" : "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
