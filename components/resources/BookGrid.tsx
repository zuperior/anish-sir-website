"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  link: string;
  image: string;
};

const ITEMS = 4;

const bookSections = [
  {
    title: "Productivity & Time Mastery",
    books: [
      {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        link: "https://amzn.to/4sedWrp",
        image: "/resources/books/book-1.jpg",
      },
      {
        id: 2,
        title: "The 12 Week Year ",
        author: "Brian P. Moran & Michael Lennington",
        link: "https://amzn.to/4b2ZlsG",
        image: "/resources/books/book-2.jpg",
      },
      {
        id: 3,
        title: "The ONE Thing",
        author: "Gary Keller & Jay Papasan",
        link: "https://amzn.to/4q0M74E",
        image: "/resources/books/book-3.jpg",
      },
      {
        id: 4,
        title: "Buy Back Your Time",
        author: "Dan Martell",
        link: "https://amzn.to/496wIIC",
        image: "/resources/books/book-4.jpg",
      },
      {
        id: 5,
        title: "High Performance Habits",
        author: " Brendon Burchard",
        link: "https://amzn.to/4p6ojL5",
        image: "/resources/books/book-5.jpg",
      },
      {
        id: 6,
        title: "Eat That Frog!",
        author: " Brian Tracy",
        link: "https://amzn.to/4q2Uo7Z",
        image: "/resources/books/book-6.jpg",
      },
      {
        id: 7,
        title: "The Miracle Morning",
        author: "Hal Elrod",
        link: "https://amzn.to/4je6hp8",
        image: "/resources/books/book-7.jpg",
      },
      {
        id: 8,
        title: "The 5 AM Club",
        author: "Robin Sharma",
        link: "https://amzn.to/49qe8fU",
        image: "/resources/books/book-8.jpg",
      },
      {
        id: 9,
        title: "The 4-Hour Workweek",
        author: "Tim Ferriss",
        link: "https://www.amazon.com/4-Hour-Work-Week-Escape-Anywhere/dp/0091929113/ref=sr_1_1?crid=3RRDB8GDGWL88&dib=eyJ2IjoiMSJ9.aXxk2_cL47DMMzPJGOX2LA.WylsNEhWm_FDjD7bv66Id4PGtY9xd6oHay_XOQqpWww&dib_tag=se&keywords=The+4-Hour+Workweek+%E2%80%93+Tim+Ferriss&qid=1766571693&s=books&sprefix=the+4-hour+workweek+tim+ferriss%2Cstripbooks-intl-ship%2C434&sr=1-1",
        image: "/resources/books/book-9.jpg",
      },
    ],
  },

  {
    title: "Psychology, Mindset & Human Behaviour",
    books: [
      {
        id: 1,
        title: "The Daily Stoic",
        author: "Ryan Holiday",
        link: "https://amzn.to/49dvwTP",
        image: "/resources/books/book-10.jpg",
      },
      {
        id: 2,
        title: "Emotional Intelligence",
        author: "Daniel Goleman",
        link: "https://amzn.to/4pUrM0I",
        image: "/resources/books/book-11.jpg",
      },
      {
        id: 3,
        title: "Mindset",
        author: "Carol S. Dweck",
        link: "https://amzn.to/3L0vIxM",
        image: "/resources/books/book-12.jpg",
      },
      {
        id: 4,
        title: "The Courage to Be Disliked ",
        author: "Ichiro Kishimi & Fumitake Koga",
        link: "https://amzn.to/4aw3g0Z",
        image: "/resources/books/book-13.jpg",
      },

      {
        id: 5,
        title: "Psychocybernetics",
        author: "Maxwell Maltz",
        link: "https://amzn.to/4pTfSnT",
        image: "/resources/books/book-14.jpg",
      },

      {
        id: 6,
        title: "Influence: The Psychology of Persuasion",
        author: "Robert Cialdini",
        link: "https://amzn.to/44EDQuy",
        image: "/resources/books/book-15.jpg",
      },

      {
        id: 7,
        title: "The Body Keeps the Score",
        author: "Bessel van der Kolk",
        link: "https://amzn.to/4b0GJtq",
        image: "/resources/books/book-16.jpg",
      },

      {
        id: 8,
        title: "The Power of Now",
        author: " Eckhart Tolle",
        link: "https://amzn.to/3YIkZLv",
        image: "/resources/books/book-17.jpg",
      },

      
      {
        id: 9,
        title: "Drive: The Surprising Truth About What Motivates Us",
        author: "Daniel H. Pink",
        link: "https://amzn.to/3MRbTJW",
        image: "/resources/books/book-18.jpg",
      },

      
      {
        id: 10,
        title: "The Art of Thinking Clearly",
        author: "Rolf Dobelli",
        link: "https://amzn.to/4b2WNL5",
        image: "/resources/books/book-19.jpg",
      },

      {
        id: 11,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        link: "https://amzn.to/3NgyMGz",
        image: "/resources/books/book-20.jpg",
      },

    ],
  },

  {
    title: "Business, Leadership & Entrepreneurship",
    books: [
      {
        id: 1,
        title: "The Lean Startup",
        author: "Eric Ries",
        link: "https://amzn.to/4p6beS3",
        image: "/resources/books/book-21.jpg",
      },
      {
        id: 2,
        title: "Zero to One",
        author: "Peter Thiel",
        link: "https://amzn.to/4qpcSPS",
        image: "/resources/books/book-22.jpg",
      },
      {
        id: 3,
        title: "The Hard Thing About Hard Things ",
        author: "Ben Horowitz",
        link: "https://amzn.to/4aw3p4x",
        image: "/resources/books/book-23.jpg",
      },
      {
        id: 4,
        title: "Built to Sell",
        author: "John Warrillow",
        link: "https://amzn.to/4jfHTUb",
        image: "/resources/books/book-24.jpg",
      },
      {
        id: 5,
        title: "Start With Why",
        author: "Simon Sinek",
        link: "https://amzn.to/3Yb0Ays",
        image: "/resources/books/book-25.jpg",
      },
      {
        id: 6,
        title: "Dare to Lead",
        author: " Brené Brown",
        link: "https://amzn.to/3MQH6Nc",
        image: "/resources/books/book-26.jpg",
      },
      {
        id: 7,
        title: "What You Do Is Who You Are",
        author: "Ben Horowitz",
        link: "https://amzn.to/49q2JfY",
        image: "/resources/books/book-27.jpg",
      },
      {
        id: 8,
        title: "The Founder’s Dilemmas",
        author: "Noam Wasserman",
        link: "https://amzn.to/3La5HvP",
        image: "/resources/books/book-28.jpg",
      },
      {
        id: 9,
        title: "The Diary of a CEO",
        author: "Steven Bartlett",
        link: "https://amzn.to/3Y7rKX5",
        image: "/resources/books/book-29.jpg",
      },
      {
        id: 10,
        title: "The 48 Laws of Power",
        author: "Robert Greene",
        link: "https://amzn.to/4qthhBu",
        image: "/resources/books/book-30.jpg",
      },
    ],
  },

  {
    title: "Investing, Trading & Wealth Creation",
    books: [
      {
        id: 1,
        title: "Market Wizards",
        author: "Jack D.Schwager",
        link: "https://amzn.to/45pIahj",
        image: "/resources/books/book-31.jpg",
      },
      {
        id: 2,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        link: "https://amzn.to/4p9DR0Q",
        image: "/resources/books/book-32.jpg",
      },
      {
        id: 3,
        title: "Understanding Price Action",
        author: "Al Brooks",
        link: "https://amzn.to/3YuOErH",
        image: "/resources/books/book-33.jpg",
      },
      {
        id: 4,
        title: "Technical Analysis",
        author: "Charles D. Kirkpatrick & Julie Dahlquist",
        link: "https://amzn.to/4p6oTsf",
        image: "/resources/books/book-34.jpg",
      },
      {
        id: 5,
        title: "Technical Analysis Explained",
        author: "Martin J. Pring",
        link: "https://amzn.to/3MK7j01",
        image: "/resources/books/book-35.jpg",
      },
      {
        id: 6,
        title: "The Little Book That Beats the Market",
        author: "Joel Greenblatt",
        link: "https://amzn.to/49qeyTw",
        image: "/resources/books/book-36.jpg",
      },
      {
        id: 7,
        title: "The Little Book of Valuation",
        author: "Aswath Damodaran",
        link: "https://amzn.to/4aC0OGt",
        image: "/resources/books/book-37.jpg",
      },
      {
        id: 8,
        title: "The Little Book That Builds Wealth",
        author: "Pat Dorsey",
        link: "https://amzn.to/3YaNqBz",
        image: "/resources/books/book-38.jpg",
      },
      {
        id: 8,
        title: "Cashflow Quadrant",
        author: "Ralph Nader",
        link: "https://amzn.to/45pIahj",
        image: "/resources/books/book-40.jpg",
      },
    ],
  },

  {
    title: "Personal Development & Success",
    books: [
      {
        id: 1,
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen Covey",
        link: "https://amzn.to/3Lh2Zoo",
        image: "/resources/books/book-41.jpg",
      },
      {
        id:2,
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        link: "https://amzn.to/4pe9QNb",
        image: "/resources/books/book-42.jpg",
      },
      {
        id: 3,
        title: "The Magic of Thinking Big",
        author: "David J. Schwartz",
        link: "https://amzn.to/4b1SvDN",
        image: "/resources/books/book-43.jpg",
      },
      {
        id: 4,
        title: "How to Win Friends & Influence People",
        author: "Dale Carnegie",
        link: "https://amzn.to/3Y6S4R8",
        image: "/resources/books/book-44.jpg",
      },
      {
        id: 5,
        title: "The Power of Habit",
        author: "Charles Duhigg",
        link: "https://amzn.to/49heh4e",
        image: "/resources/books/book-45.jpg",
      },
      {
        id: 6,
        title: "Attitude Is Everything",
        author: "Jeff Keller",
        link: "https://amzn.to/49nfic1",
        image: "/resources/books/book-46.jpg",
      },
      {
        id: 7,
        title: "You Can Win",
        author: "Shiv Khera",
        link: "https://amzn.to/4axs4WC",
        image: "/resources/books/book-47.jpg",
      },
      {
        id: 8,
        title: "Success Through a Positive Mental Attitude",
        author: "Napoleon Hill & W. Clement Stone",
        link: "https://amzn.to/4aC0ZS9",
        image: "/resources/books/book-48.jpg",
      },
      {
        id: 9,
        title: "Never Split The Difference",
        author: "Chris Voss",
        link: "https://amzn.to/4as0LwL",
        image: "/resources/books/book-49.jpg",
      },
      {
        id: 10,
        title: "The Alchemist",
        author: "Paulo Coelho",
        link: "https://amzn.to/49sv0mc",
        image: "/resources/books/book-50.jpg",
      },
    ],
  },

  {
    title: "Wealth Mindset, Money & Economics",
    books: [
      {
        id: 1,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        link: "https://amzn.to/3YaNqBz",
        image: "/resources/books/book-51.jpg",
      },
      {
        id: 2,
        title: "Cashflow Quadrant",
        author: "Robert Kiyosaki",
        link: "https://amzn.to/49rNJhC",
        image: "/resources/books/book-52.jpg",
      },
      {
        id: 3,
        title: "The Little Book of Economics",
        author: "Greg Ip",
        link: "https://amzn.to/4pcVKMm",
        image: "/resources/books/book-53.jpg",
      },
      {
        id: 4,
        title: "The Intelligent Investor",
        author: "Benjamin Graham",
        link: "https://amzn.to/44GWUrW",
        image: "/resources/books/book-54.jpg",
      },
      {
        id: 5,
        title: "More Money Than God",
        author: "Sebastian Mallaby",
        link: "https://amzn.to/3YIsB0t",
        image: "/resources/books/book-55.jpg",
      },
      {
        id: 6,
        title: "The Richest Man in Babylon",
        author: "George S. Clason",
        link: "https://amzn.to/4p8ujmw",
        image: "/resources/books/book-56.jpg",
      },
      {
        id: 7,
        title: "Numbers Don’t Lie",
        author: "Vaclav Smil",
        link: "https://amzn.to/4pc0TnN",
        image: "/resources/books/book-57.jpg",
      },
      {
        id: 8,
        title: "Think and Grow Rich (Modern Edition)",
        author: "Napoleon Hill",
        link: "https://amzn.to/48SuvSh",
        image: "/resources/books/book-58.jpg",
      },
      {
        id: 9,
        title: "The Book of Answers",
        author: "Carol Bolt",
        link: "https://amzn.to/4qj2KrM",
        image: "/resources/books/book-59.jpg",
      },
    ],
  },  

  {
    title: "Spirituality, Philosophy & Ancient Wisdom",
    books: [
      {
        id: 1,
        title: "Meditations",
        author: "Marcus Aurelius",
        link: "https://amzn.to/4sdW3ZK",
        image: "/resources/books/book-61.jpg",
      },
      {
        id: 2,
        title: "The Art of War",
        author: "Sun Tzu",
        link: "https://amzn.to/4scxfBn",
        image: "/resources/books/book-62.jpg",
      },
      {
        id: 3,
        title: "The Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        link: "https://amzn.to/3YaDlVi",
        image: "/resources/books/book-63.jpg",
      },
      {
        id: 4,
        title: "Ikigai",
        author: "García & Miralles",
        link: "https://amzn.to/4pPsvQD",
        image: "/resources/books/ikigai.jpg",
      },
      {
        id: 5,
        title: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy",
        link: "https://amzn.to/45it7Gf",
        image: "/resources/books/book-64.jpg",
      },
      {
        id: 6,
        title: "Life After Death",
        author: "Deepak Chopra",
        link: "https://amzn.to/4b6nJK3",
        image: "/resources/books/book-65.jpg",
      },
      {
        id: 7,
        title: "The Power",
        author: "Rhonda Byrne",
        link: "https://amzn.to/4jcuvji",
        image: "/resources/books/book-67.jpg",
      },
      {
        id: 8,
        title: "Becoming Supernatural",
        author: "Dr. Joe Dispenza",
        link: "https://amzn.to/3MNy0AV",
        image: "/resources/books/book-68.jpg",
      },
      {
        id: 9,
        title: "The Artist’s Way",
        author: "Julia Cameron",
        link: "https://amzn.to/4avPlbp",
        image: "/resources/books/book-69.jpg",
      },
    ],
  },

  {
    title: "Sales , Communication",
    books: [
      {
        id: 1,
        title: "Spin Selling",
        author: "Neil Reckham",
        link: "https://amzn.to/4sdWgfu",
        image: "/resources/books/book-70.jpg",
      },
      {
        id: 2,
        title: "Rapport",
        author: "Emily Alison & Laurence Alison",
        link: "https://amzn.to/4jcNASt",
        image: "/resources/books/book-71.jpg",
      },
      {
        id: 3,
        title: "Game of Sales",
        author: "David Perry",
        link: "https://amzn.to/4sdlvPc",
        image: "/resources/books/book-72.jpg",
      },
      {
        id: 4,
        title: "Win every Argument",
        author: "Mehdi Hasan",
        link: "https://amzn.to/493JPKE",
        image: "/resources/books/book-73.jpg",
      },
      {
        id: 5,
        title: "Think Faster Talk Smarter",
        author: "Matt Abrahams",
        link: "https://amzn.to/49acDkA",
        image: "/resources/books/book-74.jpg",
      },
      {
        id: 6,
        title: "Surrounded by PsychoPaths",
        author: "Thomas Erikson",
        link: "https://amzn.to/4s9MLOq",
        image: "/resources/books/book-75.jpg",
      },
      {
        id: 7,
        title: "The Effective Communication Method",
        author: "Brian Basterfield",
        link: "https://amzn.to/4b6nJK3",
        image: "/resources/books/book-76.jpg",
      },
      {
        id: 8,
        title: "The Art of Arguing",
        author: " Nary Roden",
        link: "https://amzn.to/4jcJWIx",
        image: "/resources/books/book-77.jpg",
      },
      {
        id: 9,
        title: "How to Listen-Discover the Hidden Key to better communication",
        author: "Trimboli ",
        link: "https://amzn.to/3YJNl86",
        image: "/resources/books/book-78.jpg",
      },
      {
        id: 10,
        title: "The communication Book",
        author: "Mikafi Krogerus & Roman Ischappfier",
        link: "https://amzn.to/3YeEueu",
        image: "/resources/books/book-79.jpg",
      },

      {
        id: 10,
        title: "Never Split the Difference - Negotiation As if your life Depended on it",
        author: "Chris Voss with Tahl Raz",
        link: "https://amzn.to/3L1aW12",
        image: "/resources/books/book-80.jpg",
      },
    ],
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
    ${
      isNextDisabled ? "opacity-30 pointer-events-none" : "opacity-100"
    } absolute -bottom-15 right-[8px] md:bottom-auto md:left-auto md:right-[-50px] md:top-1/2 md:-translate-y-1/2`}
        width={40}
        height={40}
      />

      <div className="  flex md:grid  gap-6  overflow-x-auto md:overflow-visible  w-full md:w-fit md:grid-cols-2 lg:grid-cols-4">
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
                src={book.image}
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
    <div className="bg-[#151515] w-full min-h-screen md:p-[70px] p-[50px] lg:p-[100px] flex flex-col gap-[120px] pb-20">
      {bookSections.map((section) => (
        <BookSection
          key={section.title}
          title={section.title}
          books={section.books}
        />
      ))}
    </div>
  );
};

export default BookGrid;
