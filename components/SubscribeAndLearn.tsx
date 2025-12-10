"use client";
import { useRef } from "react";
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
  const scroll = (dir: "left" | "right") =>
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -540 : 540,
      behavior: "smooth",
    });

  return (
    <section className="h-screen min-h-[800px] text-white w-full flex flex-col gap-12.5 relative items-center justify-center bg-[#151515] px-12.5">
      {/* header */}
      <div className="flex-center flex-col gap-[15px]">
        <div className="flex-center gap-5">
          <div className="h-px w-[60px] bg-white/40" />
          <h1 className="text-xl -tracking-[0.01em] leading-[0.8em]">
            Podcasts
          </h1>
          <div className="h-px w-[60px] bg-white/40" />
        </div>
        <h2 className="text-[52px] -tracking-[0.01em] leading-[1.2em] font-medium">
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
            className="flex-center gap-2.5 text-base -tracking-[0.03em] leading-[0.9em]"
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
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" overflow="visible"><path d="M 25 50 C 11.193 50 0 38.807 0 25 C 0 11.193 11.193 0 25 0 C 38.807 0 50 11.193 50 25 C 50 38.807 38.807 50 25 50 Z M 23.609 16.15 C 22.65 15.51 21.417 15.45 20.401 15.994 C 19.384 16.538 18.75 17.597 18.75 18.75 L 18.75 31.25 C 18.75 32.403 19.384 33.462 20.401 34.006 C 21.417 34.55 22.65 34.49 23.609 33.85 L 32.984 27.6 C 33.854 27.02 34.376 26.045 34.376 25 C 34.376 23.955 33.854 22.98 32.984 22.4 Z" fill="rgb(187, 34, 21)"></path></svg>
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
      className="object-cover group-hover:brightness-35 transition-all duration-300"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
        <PlayCutout />
      </div>
    </div>
  </Link>
);

export default SubscribeAndLearn;
