"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  link: string;
};

const ITEMS = 4;

const books: Book[] = [
  {
    id: 1,
    title: "Buy Back Your Time",
    author: "Dan Martell",
    link: "https://www.amazon.com/s?k=Buy+Back+Your+Time+Dan+Martell",
  },
  {
    id: 2,
    title: "The Magic of Thinking Big",
    author: "David J. Schwartz",
    link: "https://www.amazon.com/s?k=The+Magic+of+Thinking+Big+David+J+Schwartz",
  },
  {
    id: 3,
    title: "The Rebellious CEO",
    author: "Ralph Nader",
    link: "https://www.amazon.com/s?k=The+Rebellious+CEO+Ralph+Nader",
  },
  {
    id: 4,
    title: "Tools of Titans",
    author: "Tim Ferriss",
    link: "https://www.amazon.com/s?k=Tools+of+Titans+Tim+Ferriss",
  },
  {
    id: 5,
    title: "The Total Money Makeover",
    author: "Dave Ramsey",
    link: "https://www.amazon.com/s?k=The+Total+Money+Makeover+Dave+Ramsey",
  },
  {
    id: 6,
    title: "The House of Morgan",
    author: "Ron Chernow",
    link: "https://www.amazon.com/s?k=The+House+of+Morgan+Ron+Chernow",
  },
  {
    id: 1,
    title: "Buy Back Your Time - 2nd Edition",
    author: "Dan Martell",
    link: "https://www.amazon.com/s?k=Buy+Back+Your+Time+Dan+Martell",
  },
  {
    id: 2,
    title: "The Magic of Thinking Big - 2nd Edition",
    author: "David J. Schwartz",
    link: "https://www.amazon.com/s?k=The+Magic+of+Thinking+Big+David+J+Schwartz+",
  },
];

const BookSection = ({ title, books }: { title: string; books: Book[] }) => {
  const [index, setIndex] = useState(0);

  const isPrevDisabled = index === 0;
  const isNextDisabled = index >= books.length - ITEMS;

  return (
    <div className="relative w-full md:w-fit mx-auto ">
      <h2 className="text-white text-center font-medium text-[30px] lg:text-[36px] leading-[1.2] tracking-[-0.02em] mb-[50px] lg:text-left lg:-ml-[80px] xl:-ml-[140px]">
        {title}
      </h2>


      {/* Prev */}
      <Image
        src="/leftArrow.png"
        alt="prev"
        onClick={() => !isPrevDisabled && setIndex((p) => p - 1)}
        className={`
    z-20
    cursor-pointer
    ${isPrevDisabled ? "opacity-30 pointer-events-none" : "opacity-100"}
    absolute
    -bottom-15 right-[50px]   
    md:bottom-auto md:right-auto
    md:left-[-50px] md:top-1/2 md:-translate-y-1/2
  `}
        width={40}
        height={40}
      />

      {/* Next */}
      <Image
        src="/rightArrow.png"
        alt="next"
        onClick={() => !isNextDisabled && setIndex((p) => p + 1)}
        className={`
    z-20 cursor-pointer
    ${isNextDisabled ? "opacity-30 pointer-events-none" : "opacity-100"} absolute -bottom-15 right-[8px] md:bottom-auto md:left-auto md:right-[-50px] md:top-1/2 md:-translate-y-1/2`}
        width={40}
        height={40}
      />

      <div
        className="  flex md:grid  gap-6  overflow-x-auto md:overflow-visible  w-full md:w-fit md:grid-cols-2 lg:grid-cols-4"
      >
        {books.slice(index, index + ITEMS).map((book) => (
          <div
            key={book.title}
            className="
            flex flex-col justify-between gap-4
            min-w-[150px]
            md:min-w-0
            md:w-[200px]
            lg:w-[190px]
            shrink-0
          "
          >
            <div className="space-y-4">
              {/* Book Image */}

              <Image
                src={`/resources/books/book-${book.id}.png`}
                alt={book.title}
                width={190}
                height={279}
                className="lg:w-[190px] lg:h-[279px] h-[220px] w-[150px]"
              />

              {/* Title + Author */}
              <div className="text-left space-y-1 md:space-y-2">
                <h3 className="font-medium text-white lg:text-lg  text-[13px] leading-tight">
                  {book.title}
                </h3>
                <p className="font-clash-grotesk lg:text-base md:text-base text-[13px] text-white/70">
                  {book.author}
                </p>
              </div>
            </div>

            {/* Amazon Button */}
            <Link
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border border-gray-700 rounded-full px-2 md:px-0 lg:px-4 py-2 text-white hover:bg-white/10 transition tracking-tight
                font-clash-grotesk font-medium text-[15px]  w-full md:max-w-[160px] lg:w-full justify-center whitespace-nowrap"
            >
              Buy from Amazon
              <Image
                src="/arrow-up.svg"
                alt="arrow"
                width={10}
                height={17}
                className="rotate-45 ml-2"
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
    <div className="bg-[#151515] w-full  min-h-screen md:p-[70px] p-[50px] lg:p-[100px] flex flex-col gap-[100px] pb-20 ">
      <BookSection title="Financial Choices" books={books} />

      {/* Next 4 books */}
      <div className="w-[1125px] mx-auto max-w-full">
        <BookSection title="Mind & Discipline" books={books} />
      </div>
    </div>
  );
};

export default BookGrid;
