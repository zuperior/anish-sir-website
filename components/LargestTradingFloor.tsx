"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LargestTradingFloor() {
  const [viewState, setViewState] = useState<
    "default" | "leftExpanded" | "rightExpanded"
  >("default");
  const [mobileSlide, setMobileSlide] = useState(0);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  const leftImage = "/left.jpg";
  const centerImage = "/footer/2.jpg";
  const rightImage = "/right.jpg";

  const images = [leftImage, centerImage, rightImage];

  const text = `"Anish Singh Thakur is a globally respected trading educator and the visionary Founder & CEO of Booming Bulls, one of the world's largest and most impactful trading education ecosystems. Trusted by over 3 million learners globally, he has built a high-performance platform"`;

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
            toggleActions: "play play reverse reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const nextSlide = () => {
    if (!leftCardRef.current || !rightCardRef.current) return;

    if (viewState === "default") {
      setViewState("leftExpanded");

      animateCard(leftCardRef.current, "350px", "575px");
      animateCard(rightCardRef.current, "350px", "120px");
    } else if (viewState === "rightExpanded") {
      setViewState("default");

      animateCard(rightCardRef.current, "575px", "350px");
      animateCard(leftCardRef.current, "120px", "350px");
    }
  };

  const prevSlide = () => {
    if (!leftCardRef.current || !rightCardRef.current) return;

    if (viewState === "default") {
      setViewState("rightExpanded");

      animateCard(rightCardRef.current, "350px", "575px");
      animateCard(leftCardRef.current, "350px", "120px");
    } else if (viewState === "leftExpanded") {
      setViewState("default");

      animateCard(leftCardRef.current, "575px", "350px");
      animateCard(rightCardRef.current, "120px", "350px");
    }
  };

  const animateCard = (element: HTMLElement, from: string, to: string) => {
    element.style.transition = "width 0.6s cubic-bezier(0.65, 0, 0.35, 1)";
    element.style.width = to;
  };

  const nextMobileSlide = () => {
    setMobileSlide((prev) => (prev + 1) % images.length);
  };

  const prevMobileSlide = () => {
    setMobileSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="md:min-h-screen bg-[#151515] flex items-center px-2 justify-center md:p-4 overflow-hidden">
      <div className="max-w-7xl w-full my-8 md:my-2">
        <div className="text-center mb-8 lg:mb-2 px-4">
          <h1 className="text-[36px] lg:text-[52px] font-medium text-white leading-tight mb-4 ">
            Asia&apos;s Largest Trading Floor
          </h1>
          <p
            ref={paragraphRef}
            className="text-[16px] lg:text-[20px] font-medium mx-auto leading-tight px-2 text-[rgba(255,255,255,0.7)]"
          >
            {text}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Mobile & Tablet */}
          <div className="block lg:hidden w-full p-4">
            <div className="relative w-full h-[350px] overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${mobileSlide * 100}%)` }}
              >
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0 px-2 relative"
                  >
                    <Image
                      src={img}
                      alt={`Trading floor view ${index + 1}`}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 1024px) 100vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="relative h-[400px] flex items-center justify-center gap-5 overflow-hidden">
              <div
                ref={leftCardRef}
                className="w-[350px] h-[350px] shrink-0 relative group overflow-hidden"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <Image
                    src={leftImage}
                    alt="Left view"
                    fill
  className="object-cover rounded-2xl transition-all duration-300 group-hover:brightness-35 cursor-pointer"
                  />
                </div>
              </div>

              <div
                ref={centerCardRef}
                className="w-[575px] h-[350px] shrink-0 relative group"
              >
           <Image
  src={centerImage}
  alt="Center view"
  fill
  className="object-cover rounded-2xl transition-all duration-300 group-hover:brightness-35 cursor-pointer"
/>
              </div>

              <div
                ref={rightCardRef}
                className="w-[350px] h-[350px] shrink-0 relative group overflow-hidden"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <Image
                    src={rightImage}
                    alt="Right view"
                    fill
  className="object-cover rounded-2xl transition-all duration-300 group-hover:brightness-35 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="hidden lg:block">
              <Image
                src="/leftArrow.png"
                alt="Prev Slide"
                width={50}
                height={50}
                onClick={viewState === "rightExpanded" ? undefined : prevSlide}
                className={`transition-all duration-300 ${
                  viewState === "rightExpanded"
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-50 cursor-pointer"
                }`}
              />
            </div>

            <div className="block lg:hidden">
              <Image
                src="/leftArrow.png"
                alt="Prev Slide"
                width={50}
                height={50}
                onClick={prevMobileSlide}
                className="hover:opacity-70 cursor-pointer transition-all duration-300"
              />
            </div>

            <div className="hidden lg:block">
              <Image
                src="/rightArrow.png"
                alt="Next Slide"
                width={50}
                height={50}
                onClick={viewState === "leftExpanded" ? undefined : nextSlide}
                className={`transition-all duration-300 ${
                  viewState === "leftExpanded"
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-70 cursor-pointer"
                }`}
              />
            </div>

            <div className="block lg:hidden">
              <Image
                src="/rightArrow.png"
                alt="Next Slide"
                width={50}
                height={50}
                onClick={nextMobileSlide}
                className="hover:opacity-70 cursor-pointer transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
