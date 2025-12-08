"use client";
import React, { useEffect, useState } from "react";
import { Delicious_Handrawn } from "next/font/google";
import Link from "next/link";
const delicious = Delicious_Handrawn({
  weight: "400",
  subsets: ["latin"],
});

const AmazonButton = () => {
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (isHover) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 300);

    return () => clearInterval(interval);
  }, [isHover]);

  const normalImages = [
    "/Books images/buy-from-amazon-btn1.svg",
    "/Books images/buy-from-amazon-btn2.svg",
  ];

  const hoverImages = [
    "/Books images/buy-from-amazon-btn1-hover.svg",
    "/Books images/buy-from-amazon-btn2-hover.svg",
  ];

  return (
    <div
      className="relative w-[191px] h-[62px] cursor-pointer select-none flex items-center justify-center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {!isHover && (
        <img
          src={normalImages[index]}
          className="absolute inset-0 w-[191px] h-[62px] object-contain"
        />
      )}

      {isHover && (
        <img
          src={hoverImages[index]}
          className="absolute inset-0 w-[191px] h-[62px] object-contain"
        />
      )}

      <button
        className={`absolute inset-0 flex items-center justify-center text-xl pointer-events-none transition-colors duration-150
          ${isHover ? "text-black" : "text-white"} ${delicious.className}`}
      >
        Buy From Amazon
      </button>
    </div>
  );
};

export default AmazonButton;
