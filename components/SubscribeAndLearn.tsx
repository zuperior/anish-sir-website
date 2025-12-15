"use client";
import { useRef, useState, useEffect, forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const videos = [
  { id: "8Dz5x-okyCo" },
  { id: "d6x6dwtJvFQ" },
  { id: "k8q8Wx_RHZM" },
  { id: "ksR_h7I9FwM" },
  { id: "7J5obIuhhYc" },
];

const SubscribeAndLearn = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current || !cardRef.current) return;

    const cardWidth =
      cardRef.current.getBoundingClientRect().width + 15; // gap

    sliderRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateButtons();
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    return () => {
      slider.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  return (
    <section className="md:h-screen lg:min-h-[800px] min-h-screen text-white w-full flex flex-col gap-12.5 relative items-center justify-center bg-[#151515] md:px-12.5 px-[15px] py-10 overflow-hidden">
      {/* header */}
      <div className="flex-center flex-col gap-[15px]">
        <div className="flex-center md:gap-5 gap-3">
          <div className="h-px md:w-[60px] w-10 bg-white/40" />
          <h1 className="md:text-xl text-base -tracking-[0.01em] leading-[0.8em]">
            Podcasts
          </h1>
          <div className="h-px md:w-[60px] w-10 bg-white/40" />
        </div>
        <h2 className="lg:text-[52px] md:text-[40px] text-[32px] -tracking-[0.01em] leading-[1.2em] font-medium">
          Subscribe & Learn
        </h2>
      </div>

      {/* video slider */}
      <div className="w-full flex flex-col gap-12.5 overflow-visible">
        <div
          ref={sliderRef}
          className="flex md:gap-5 gap-[15px] overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {videos.map((v, i) => (
            <VideoThumbnail
              key={v.id}
              id={v.id}
              ref={i === 0 ? cardRef : null}
            />
          ))}
        </div>

        {/* navigation and subscribe */}
        <div className="flex items-center justify-between">
          <Link
            href="https://www.youtube.com/@BoomingBulls/"
            className="flex-center md:gap-2.5 gap-1.5 md:text-base text-sm -tracking-[0.03em] leading-[0.9em]"
          >
            Subscribe Youtube
            <ArrowUpRight size={14} color="#BB2215" />
          </Link>

          <div className="flex-center gap-2.5">
            <Image
              src="/leftArrow.png"
              alt="Prev Slide"
              height={50}
              width={50}
              onClick={() => canScrollLeft && scroll("left")}
              className={`md:w-[50px] md:h-[50px] w-9 h-9 cursor-pointer transition-opacity ${
                canScrollLeft ? "opacity-100" : "opacity-30 pointer-events-none"
              }`}
            />
            <Image
              src="/rightArrow.png"
              alt="Next Slide"
              height={50}
              width={50}
              onClick={() => canScrollRight && scroll("right")}
              className={`md:w-[50px] md:h-[50px] w-9 h-9 cursor-pointer transition-opacity ${
                canScrollRight ? "opacity-100" : "opacity-30 pointer-events-none"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PlayCutout = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="none"
    overflow="visible"
  >
    <path
      d="M25 50C11.193 50 0 38.807 0 25S11.193 0 25 0s25 11.193 25 25-11.193 25-25 25ZM23.609 16.15c-.959-.64-2.192-.7-3.208-.156-1.017.544-1.651 1.603-1.651 2.756v12.5c0 1.153.634 2.212 1.651 2.756 1.016.544 2.249.484 3.208-.156l9.375-6.25c.87-.58 1.392-1.555 1.392-2.6s-.522-2.02-1.392-2.6l-9.375-6.25Z"
      fill="rgb(187,34,21)"
    />
  </svg>
);

const VideoThumbnail = forwardRef<
  HTMLAnchorElement,
  { id: string }
>(({ id }, ref) => (
  <Link
    ref={ref}
    href={`https://www.youtube.com/watch?v=${id}`}
    target="_blank"
    rel="noopener noreferrer"
    className="w-4/5 md:w-[420px] lg:w-[525px] aspect-525/325 shrink-0 rounded-[15px] overflow-hidden group relative block snap-start"
  >
    <Image
      src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
      alt="Video thumbnail"
      fill
      className="object-cover group-hover:brightness-35 transition-all duration-300"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
        <PlayCutout />
      </div>
    </div>
  </Link>
));

VideoThumbnail.displayName = "VideoThumbnail";

export default SubscribeAndLearn;
