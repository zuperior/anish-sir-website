"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    "/books/buy-from-amazon-btn1.svg",
    "/books/buy-from-amazon-btn2.svg",
  ];

  const hoverImages = [
    "/books/buy-from-amazon-btn1-hover.svg",
    "/books/buy-from-amazon-btn2-hover.svg",
  ];

  return (
    <Link
      className="relative w-[191px] h-[62px] cursor-pointer select-none flex items-center justify-center"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      href={"#"} // To Do: Add Amazon link
    >
      {!isHover && (
        <Image
          width={191}
          height={62}
          src={normalImages[index]}
          className="absolute inset-0 object-contain"
          alt=""
        />
      )}

      {isHover && (
        <Image
          width={191}
          height={62}
          src={hoverImages[index]}
          className="absolute inset-0 object-contain"
          alt=""
        />
      )}

      <button
        className={`absolute inset-0 flex items-center justify-center text-xl pointer-events-none transition-colors duration-150
          ${isHover ? "text-black" : "text-white"} font-delicious`}
      >
        Buy From Amazon
      </button>
    </Link>
  );
};

export default AmazonButton;
