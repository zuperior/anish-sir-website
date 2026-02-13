"use client";
import { useState } from "react";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function HobbiesSection() {
  const [active, setActive] = useState(0);
  const desktopSliderRef = useRef<HTMLDivElement>(null);
  const mobileSliderRef = useRef<HTMLDivElement>(null);

  const getActiveSlider = () =>
    window.innerWidth >= 768
      ? desktopSliderRef.current
      : mobileSliderRef.current;

  const scrollLeft = () => {
    getActiveSlider()?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    getActiveSlider()?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  const slides = [
    {
      image: "/fitnes.jpg",
      title: "FITNESS, DISCIPLINE& DAILY RITUALS",
      content: [
        " 1. Pointer 1",
        " 2. Pointer 2",
        " 3.Pointer 3",
        " 4.Pointer 4",
      ],
      pdf: "/sample.pdf",
    },
    {
      image: "/mindset.jpg",
      title: "A MINDSET BUILT FOR GROWTH",
      content:
        "Anish is led by a belief that fuels his purpose: He often says: “Money doesn’t change you; it amplifies who you already are.” This philosophy guides his vision of wealth as a tool for evolution, contribution, and expansion.",
      pdf: "/sample.pdf",
    },

    {
      image: "/legacy.jpg",
      title: "A MAN WITH A LEGACY, NOT JUST A GOAL",
      content:
        "Anish is building something much larger than a business, he is building a movement. Help people become the best version of themselves mentally, emotionally, financially, and spiritually And everything he builds carries this purpose.  A movement that stands for:  • courage  • discipline  • mindset  • self-belief  • financial literacy  • personal transformation  ",
      mobileContent:
        "Anish is building something much larger than a business, he is building a movement.  Help people become the best version of themselves mentally, emotionally, financially, and spiritually And everything he builds carries this purpose.",
      pdf: "/sample.pdf",
    },


    {
      image: "/leader.jpg",
      title: "A LEADER WHO BUILDS LEADERS",
      content:
        "For Anish, success is not personal, it is collective. He believes deeply in training, upgrading, and empowering his team to stay aligned with global standards. He invests his time into mentoring his people, ensuring they grow in knowledge, mindset, and discipline, just like his students.",
      pdf: "/sample.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-[#151515] flex items-center justify-center py-5 px-4">
      <div className="w-full max-w-7xl">
        {/* Desktop/Tablet View - Horizontal Cards */}
        <div ref={desktopSliderRef}
          className="hidden md:flex gap-3 items-center  overflow-x-auto no-scrollbar">
          {slides.map((s, i) => {
            const isActive = i === active;
            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-400 flex-shrink-0`}
                style={{
                  width: isActive ? "500px" : "260px",
                  height: "550px",
                }}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className={`object-cover transition-all duration-400`}
                />

                <div
                  className={`absolute bottom-0 left-0 right-0 text-white font-clash-grotesk transition-all duration-400 ${isActive
                    ? "opacity-100 translate-y-0 pointer-events-none bg-gradient-to-t from-black to-transparent px-12 pb-10"
                    : "opacity-0 translate-y-6"
                    }`}
                >
                  <h2 className="text-[36px] font-medium leading-tight uppercase mb-3">
                    {s.title}
                  </h2>
                  <p className="text-white/70 font-medium text-base leading-5">
                    {s.content}
                  </p>
                  <a
                    href={s.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white text-sm font-medium underline underline-offset-4 hover:opacity-80"
                  >
                    <span className="mr-0.5">Download PDF</span>
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View - Vertical Stacked Cards */}
        <div className="md:hidden relative">
          {/* LEFT ARROW */}

          {/* SLIDER */}
          <div ref={mobileSliderRef} className="overflow-x-auto no-scrollbar">
            <div className="flex gap-4 px-4">
              {slides.map((s, i) => (
                <div
                  key={i}
                  className="group relative flex-shrink-0 w-[85%] rounded-3xl overflow-hidden h-[550px]"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />

                  {/* REVEAL CONTENT */}
                  <div
                    className="absolute bottom-0 left-0 right-0 text-white font-clash-grotesk leading-tight  bg-gradient-to-t from-black via-black/80 to-transparent px-6 pb-8 pt-16"
                  >
                    <h2 className="text-[22px] font-medium uppercase mb-3">
                      {s.title}
                    </h2>
                    <p className="text-white/80 font-medium text-[16px]">
                      {s.mobileContent ?? s.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>

        <div className="flex justify-center gap-2.5 pt-10">
          <button onClick={scrollLeft}>
            <Image src="/leftArrow.png" alt="left" width={50} height={50} />
          </button>

          <button onClick={scrollRight}>
            <Image src="/rightArrow.png" alt="right" width={50} height={50} />
          </button>
        </div>
      </div>
    </div>
  );
}
