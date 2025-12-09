"use client";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const videos = [
  { id: "dQw4w9WgXcQ" },
  { id: "d6x6dwtJvFQ" },
  { id: "k8q8Wx_RHZM" },
  { id: "ksR_h7I9FwM" },
];

const SubscribeAndLearn = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") =>
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -540 : 540,
      behavior: "smooth",
    });

  return (
    <section className="h-screen w-full flex flex-col gap-12.5 relative items-center justify-center bg-[#151515] px-12.5">
      {/* header */}
      <div className="flex-center flex-col gap-[15px]">
        <div className="flex-center gap-5">
          <div className="h-px w-[60px] bg-white/40" />
          <h1 className="text-xl text-white -tracking-[0.01em] leading-[0.8em]">
            Podcasts
          </h1>
          <div className="h-px w-[60px] bg-white/40" />
        </div>
        <h2 className="text-[52px] -tracking-[0.01em] leading-[1.2em] text-white font-medium">
          Subscribe & Learn
        </h2>
      </div>

      {/* video slider */}
      <div className="w-full flex flex-col gap-12.5">
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-scroll no-scrollbar scroll-smooth"
        >
          {videos.map((v) => (
            <VideoThumbnail key={v.id} id={v.id} />
          ))}
        </div>

        {/* navigation and subscribe buttons */}
        <div className="flex items-center justify-between">
          <Link
            href="https://www.youtube.com/@BoomingBulls/"
            className="flex-center gap-2.5 text-base -tracking-[0.03em] leading-[0.9em] text-white"
          >
            Subscribe Youtube
            <ArrowUpRight size={14} color="#BB2215" />
          </Link>

          <div className="flex-center gap-2.5">
            
            <Image
              src="/leftArrow.png"
              alt="Next Slide"
              height={50}
              width={50}
              onClick={() => scroll("left")}
              className=" w-[50px] h-[50px] cursor-pointer"
            />
            <Image
              src="/rightArrow.png"
              alt="Next Slide"
              height={50}
              width={50}
              onClick={() => scroll("right")}
              className=" w-[50px] h-[50px]  cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PlayCutout = () => (
  <svg width="48" height="48" viewBox="0 0 58 58">
    <defs>
      <mask id="playCutout">
        <circle cx="29" cy="29" r="29" fill="white" />
        <path
          d="
            M23,18
            C23.8,18 24,18.8 24,19
            L40,29
            C40,29.2 39.8,30 39,30
            L24,39
            C23.8,39 23,38.2 23,38
            Z
          "
          fill="black"
        />
      </mask>
    </defs>
    <circle cx="29" cy="29" r="29" fill="#BB2215" mask="url(#playCutout)" />
  </svg>
);

const VideoThumbnail = ({ id }: { id: string }) => (
  <Link
    href={`https://www.youtube.com/watch?v=${id}`}
    target="_blank"
    rel="noopener noreferrer"
    className="w-[525px] h-[325px] shrink-0 rounded-[15px] overflow-hidden group relative block"
  >
    <Image
      src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
      alt="Video thumbnail"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
        <PlayCutout />
      </div>
    </div>
  </Link>
);

export default SubscribeAndLearn;
