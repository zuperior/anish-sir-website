// components/resources/BookGrid.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { bookSections, Book } from "@/data/books";

const ITEMS = 4;

const BookSection = ({ title, books, sectionId }: { title: string; books: Book[]; sectionId: string }) => {
  const [index, setIndex] = useState(0);

  const isPrevDisabled = index === 0;
  const isNextDisabled = index >= books.length - ITEMS;
  const displayedBooks = books.slice(index, index + ITEMS);
console.log("sectionId" , sectionId);

  return (
    <div className="relative w-full mx-auto px-4 md:px-0">
      {/* Header */}
      <div className="flex flex-col md:px-13 sm:flex-row sm:items-center justify-between gap-4 mb-[30px] md:mb-[50px]">
        <h2 className="text-white font-medium text-[30px] lg:text-[36px] leading-[1.2] tracking-[-0.02em]  ">
          {title}
        </h2>
        
        {/* View All button - links to new page using ID */}
        <Link
            href={`/resources/${sectionId}`}
          className="self-start cursor-pointer md:mr-24 sm:self-auto px-5 py-2.5 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-full hover:bg-white/10 hover:border-gray-500 transition-all duration-200 whitespace-nowrap flex items-center gap-2 group"
        >
          <span>View All ({books.length})</span>
          <svg 
            className="w-4 h-4"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Navigation Arrows */}
      {books.length > ITEMS && (
        <>
          <Image
            src="/leftArrow.png"
            alt="Previous"
            onClick={() => !isPrevDisabled && setIndex((p) => p - 1)}
            className={`
              z-20 cursor-pointer transition-opacity duration-200
              ${isPrevDisabled ? "opacity-30 pointer-events-none" : "opacity-100 hover:opacity-80"}
              absolute -bottom-12 right-[50px]
              md:bottom-auto md:right-auto
              md:left-0 lg:left-[2px] 
              md:top-1/2 md:-translate-y-1/2
            `}
            width={40}
            height={40}
          />

          <Image
            src="/rightArrow.png"
            alt="Next"
            onClick={() => !isNextDisabled && setIndex((p) => p + 1)}
            className={`
              z-20 cursor-pointer transition-opacity duration-200
              ${isNextDisabled ? "opacity-30 pointer-events-none" : "opacity-100 hover:opacity-80"}
              absolute -bottom-12 right-[8px]
              md:bottom-auto md:left-auto
              md:right-0 lg:right-[98px]
              md:top-1/2 md:-translate-y-1/2
            `}
            width={40}
            height={40}
          />
        </>
      )}

      {/* Books Grid */}
      <div className="max-w-6xl mx-auto flex md:gap-0  lg:gap-0 gap-6 overflow-x-auto md:overflow-visible md:grid md:grid-cols-4 lg:grid-cols-4 pb-4 md:pb-0">
        {displayedBooks.map((book) => (
          <div
            key={`${book.title}-${book.id}`}
            className="flex flex-col justify-between gap-4 min-w-[150px] md:min-w-0"
          >
            <div className="space-y-4">
              <div className="relative group">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={190}
                  height={279}
                  className="w-[150px] h-[220px] md:w-[180px] md:h-[260px] lg:w-[190px] lg:h-[279px] object-cover rounded-md transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>

              <div className="text-left space-y-1 md:space-y-2">
                <h3 className="font-medium text-white text-sm lg:text-lg leading-tight line-clamp-2">
                  {book.title}
                </h3>
                <p className="text-xs lg:text-base text-white/70 line-clamp-2">
                  {book.author}
                </p>
              </div>
            </div>

            <Link
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center justify-center border border-gray-700 rounded-full px-3 md:px-9 py-2 text-white hover:bg-white/10 hover:border-gray-500 transition-all duration-200 group"
            >
              <span className="text-xs md:text-sm font-medium whitespace-nowrap">
                Buy from Amazon
              </span>
              <Image
                src="/arrow-up.svg"
                alt="arrow"
                width={10}
                height={17}
                className="rotate-45 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const BookGrid = () => {
  return (
    <div className="bg-[#151515] w-full min-h-screen px-4 py-12 md:px-[70px] lg:px-[100px] flex flex-col gap-16 md:gap-[120px] pb-20">
      {bookSections.map((section) => (
        <BookSection
          key={section.id}
          sectionId={section.id}
          title={section.title}
          books={section.books}
        />
      ))}
    </div>
  );
};

export default BookGrid;