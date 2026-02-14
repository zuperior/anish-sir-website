// app/resources/[category]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bookSections } from "@/data/books";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  // Await the params Promise
  const { category } = await params;
  

  // Find section by ID
  const section = bookSections.find(s => s.id === category);

  // If section not found, show 404
  if (!section) {
    notFound();
  }


  return (
    <div className="bg-[#151515] min-h-screen ">
      {/* Back to Resources Link */}
      <div className="lg:ml-40"> 
      <div className="px-4 py-6 md:px-[70px] lg:px-[100px] lg:pt-20 ">
        <Link 
          href="/resources"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <svg 
            className="w-5 h-5 rotate-180" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>Back to Resources</span>
        </Link>
      </div>

      {/* Header */}
      <div className="px-4 md:px-[70px] lg:px-[100px] mb-8">
        <h1 className="text-white font-medium text-[36px] lg:text-[48px] leading-[1.2] tracking-[-0.02em]">
          {section.title}
        </h1>
        <p className="text-white/50 text-lg mt-2">
          Showing all {section.books.length} books
        </p>
      </div>
</div>
      {/* Books Grid - All Books */}
      <div className="px-4 md:px-[70px] lg:px-[100px] pb-20 max-w-6xl mx-auto">
        {section.books.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
            {section.books.map((book) => (
              <div
                key={`${book.title}-${book.id}`}
                className="flex flex-col justify-between gap-4"
              >
                <div className="space-y-4">
                  {/* Book Image */}
                  <div className="relative group">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={190}
                      height={279}
                      className="w-[150px] h-[220px] md:w-[180px] md:h-[260px] lg:w-[190px] lg:h-[279px] object-cover rounded-md transition-transform duration-200 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Title + Author */}
                  <div className="text-left space-y-1 md:space-y-2">
                    <h3 className="font-medium text-white text-sm lg:text-lg leading-tight line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-xs lg:text-base text-white/70 line-clamp-2">
                      {book.author}
                    </p>
                  </div>
                </div>

                {/* Amazon Button */}
                <Link
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border border-gray-700 rounded-full px-3 md:px-4 py-2 text-white hover:bg-white/10 hover:border-gray-500 transition-all duration-200 group"
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
        ) : (
          <div className="text-center py-20">
            <p className="text-white/50 text-lg">No books found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  return bookSections.map((section) => ({
    category: section.id,
  }));
}