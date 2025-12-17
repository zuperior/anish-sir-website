"use client";
import React, { useRef, useEffect, useState } from "react";
// import BookLoverSection from "./BookLoverSection";
import AmazonButton from "./AmazonButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Book from "./Book";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  // For text scroll reveal
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const bookContainerRef = useRef<HTMLDivElement>(null);
  const trigger1Ref = useRef<HTMLDivElement>(null);
  const trigger2Ref = useRef<HTMLDivElement>(null);
  const trigger3Ref = useRef<HTMLDivElement>(null);

  const [openBook, setOpenBook] = useState(1);

  useEffect(() => {
    if (paragraphRef.current) {
      // Split text into words
      const text = paragraphRef.current.textContent || "";
      const words = text.split(" ");

      // Clear original text and wrap each word in a span
      paragraphRef.current.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      // Animate each word
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
            start: "top 70%",
            end: "bottom 50%",
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

  const trigger4Ref = useRef<HTMLDivElement>(null);
  const trigger5Ref = useRef<HTMLDivElement>(null);
  const trigger6Ref = useRef<HTMLDivElement>(null);

  // Book animation on scroll
  useEffect(() => {
    if (
      trigger1Ref.current &&
      trigger2Ref.current &&
      trigger3Ref.current &&
      trigger4Ref.current &&
      trigger5Ref.current &&
      trigger6Ref.current &&
      bookContainerRef.current
    ) {
      // Scroll trigger for book 1 to book 2 transition
      ScrollTrigger.create({
        trigger: trigger1Ref.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setOpenBook(2),
        onEnterBack: () => setOpenBook(1),
      });

      // Scroll trigger for book 2 to book 3 transition
      ScrollTrigger.create({
        trigger: trigger2Ref.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setOpenBook(3),
        onEnterBack: () => setOpenBook(2),
      });

      // Scroll trigger for book 3 to book 4 transition
      ScrollTrigger.create({
        trigger: trigger3Ref.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setOpenBook(4),
        onEnterBack: () => setOpenBook(3),
      });

      // Scroll trigger for book 4 to book 5 transition
      ScrollTrigger.create({
        trigger: trigger4Ref.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setOpenBook(5),
        onEnterBack: () => setOpenBook(4),
      });

      // Scroll trigger for book 5 to book 6 transition
      ScrollTrigger.create({
        trigger: trigger5Ref.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setOpenBook(6),
        onEnterBack: () => setOpenBook(5),
      });

      // Scroll trigger for book 6 to book 7 transition
      ScrollTrigger.create({
        trigger: trigger6Ref.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => setOpenBook(7),
        onEnterBack: () => setOpenBook(6),
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);;

  return (
    <section className="bg-[#151515] relative w-full" id="resources">
      {/* Sticky Div */}
      <div className="w-full sticky top-0 flex-center flex-col gap-[70px] py-10">
        <div className="w-full flex flex-col items-center gap-2.5">
          <h2 className="-tracking-[0.01em] leading-[1.2em] md:w-full w-[180px] lg:w-full font-medium md:text-[47px] text-[20px] lg:text-[52px] text-white text-center">
            Lover of Books & Writer at Heart
          </h2>

          <p
            ref={paragraphRef}
            className="text-[#ffffff]/70 w-full max-w-[1050px] text-center md:text-xl text-xs lg:text-xl font-medium leading-[1.1em] tracking-[-0.02em]"
          >
            &quot;Anish Singh Thakur is a globally respected trading educator
            and the visionary Founder & CEO of Booming Bulls, one of the
            world&apos;s largest and most impactful trading education
            ecosystems. Trusted by over 3 million learners globally, he has
            built a high-performance platform&quot;
          </p>
        </div>
        {/* Book Container */}
        <div ref={bookContainerRef} className="flex-center md:gap-4 gap-2 lg:gap-5 relative">
          <Book id={1} open={openBook === 1} />
          <Book id={2} open={openBook === 2} />
          <Book id={3} open={openBook === 3} />
          <Book id={4} open={openBook === 4} />
          <Book id={5} open={openBook === 5} />
          <Book id={6} open={openBook === 6} />
          <Book id={7} open={openBook === 7} />
        </div>
        <AmazonButton />
      </div>

      {/* Trigger Sections */}
      <div ref={trigger1Ref} className="h-[80vh]" id="bookTrigger1" />
      <div ref={trigger2Ref} className="h-[80vh]" id="bookTrigger2" />
      <div ref={trigger3Ref} className="h-[80vh]" id="bookTrigger3" />
      <div ref={trigger4Ref} className="h-[80vh]" id="bookTrigger4" />
      <div ref={trigger5Ref} className="h-[80vh]" id="bookTrigger5" />
      <div ref={trigger6Ref} className="h-[80vh]" id="bookTrigger6" />
    </section>
  );
};

export default Index;
