"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Book from "../resources/Book";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// Book data array
const booksData = [
  {
    id: 1,
    title: "Buy Back your Time",
    author: "by Dan Martell",
    amazonLink: "https://www.amazon.com/Buy-Back-Your-Time-Regaining-Freedom/dp/0593420628"
  },
  {
    id: 2,
    title: "Buy Back your Time",
    author: "by Dan Martell",
    amazonLink: "https://www.amazon.com/Magic-Thinking-Big-David-Schwartz/dp/0671646788"
  },
  {
    id: 3,
    title: "Buy Back your Time",
    author: "by Dan Martell",
    amazonLink: "https://www.amazon.com/Ralph-Nader/dp/0062563439"
  },
  {
    id: 4,
    title: "Buy Back your Time",
    author: "by Dan Martell",
    amazonLink: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034"
  },
  {
    id: 5,
    title: "Buy Back your Time",
    author: "by Dan Martell",
    amazonLink: "https://www.amazon.com/Financial-Freedom-Step-Plan-Living/dp/0525534587"
  },
  {
    id: 6,
    title: "Buy Back your Time",
    author: "by Dan Martell",
    amazonLink: "https://www.amazon.com/Total-Money-Makeover-Classic-Financial/dp/1595555277"
  },
  {
    id: 7,
    title: "Buy Back your Time",
    author: "by Dan Martell",
    amazonLink: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/1982137274"
  }
];

const page = () => {
  // For text scroll reveal
  const paragraphRef = useRef<HTMLParagraphElement>(null);

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

  return (
    <section
      className="bg-[#151515] relative w-full min-h-screen"
      id="resources"
    >
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16 bg-black justify-start">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-8">
            Lover of Books & Writer at Heart
          </h2>

          <p
            ref={paragraphRef}
            className="text-[#ffffff]/70 max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Anish Singh Thakur is a globally respected trading educator and the
            visionary founder & CEO of Booming Bulls, one of the world's largest
            and most impactful trading education ecosystems. Trusted by over 3
            million learners globally, he has built a high-performance platform.
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-white mx-auto mb-16"></div>

        {/* All Books in Single Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {booksData.map((book) => (
            <div key={book.id} className="flex flex-col items-center">
              <Book id={book.id} />
              <div className="text-left mt-6 w-64 ml-15">
                <h3 className="text-lg font-medium text-white">
                  {book.title}
                </h3>
                <p className="text-gray-300 mb-5">{book.author}</p>
                <Link
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-gray-900 rounded-full gap-2.5 -tracking-[0.01em] font-medium leading-[0.20em] px-3 py-3 text-[#FFFFFF] hover:bg-white/10 transition-colors w-50 text-[14px]"
                >
                  Buy from Amazon
                  <img 
                    src="/arrow-up.svg" 
                    alt="arrow" 
                    className="rotate-45 ml-1 transform" 
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;