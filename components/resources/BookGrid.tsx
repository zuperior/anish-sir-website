import Image from "next/image";
import Link from "next/link";
import React from "react";

const books = [
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

const BookGrid = () => {
  return (
    <div className="bg-[#151515] w-full min-h-screen p-[100px]">
      <div className="grid  md:grid-cols-4 grid-cols-1 lg:grid-cols-4 justify-items-center gap-16 w-fit mx-auto">
        {books.map((book) => (
          <div
            key={book.title}
            className="flex flex-col items-start justify-between gap-4 w-[190px]"
          >
            <div className="space-y-4">
              {/* Book Image */}
              <Image
                src={`/resources/books/book-${book.id}.png`}
                alt={book.title}
                width={190}
                height={279}
              />

              {/* Title + Author */}
              <div className="text-left space-y-1">
                <h3 className="font-medium text-white text-lg leading-tight">
                  {book.title}
                </h3>
                <p className="font-clash-grotesk text-base text-white/70">
                  {book.author}
                </p>
              </div>
            </div>

            {/* Amazon Button */}
            <Link
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border border-gray-700 rounded-full px-4 py-2 text-white hover:bg-white/10 transition tracking-tight font-clash-grotesk font-medium text-[15px] w-full justify-center"
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

export default BookGrid;
