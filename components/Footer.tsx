import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#151515] w-full h-[3800px] relative">
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center gap-2.5">
        {/* Grid for 10 boxes */}
        <div className="grid grid-cols-5 gap-x-2.5 gap-y-2.5 w-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="w-full aspect-square bg-gray-800 flex items-center justify-center"
            >
              Box {i + 1}
            </div>
          ))}
        </div>

        {/* Centered text over the boxes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[15px]">
          <h1 className="text-[52px] font-medium text-white -tracking-[0.01em] leading-[1.2em]">
            Anish Singh Thakur
          </h1>

          <Link
            className="py-[15px] px-[25px] rounded-full bg-white font-clash-grotesk font-medium text-black text-xl tracking-tight leading-[0.9em]"
            href={"https://instagram.com/anishsinghthakur"}
            target="_blank"
          >
            Connect with Anish
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
