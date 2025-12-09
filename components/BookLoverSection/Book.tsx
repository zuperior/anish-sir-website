"use client";
import React from "react";
import Image from "next/image";

interface BookProps {
  id: number;
  open?: boolean;
}

const Book: React.FC<BookProps> = ({ id, open = false }) => {
  const getBookImage = (id: number, type: string) =>
    `/books/${id}-book-${type}.png`;

  return (
    <div className={`relative h-[267px] ${open ? "w-[235px]" : "w-11"} perspective-[1400px]`}>
      {/* SPINE */}
      <div
        className={`
          absolute top-0 left-0 h-full w-11 
          origin-right
          transition-transform duration-500 z-10
          ${open ? "transform-[rotateY(-40deg)]" : ""}
        `}
      >
        <Image
          src={getBookImage(id, "side")}
          alt="Book side"
          width={44}
          height={267}
          className="h-full w-full object-cover"
        />
      </div>

      {/* FRONT */}
      <div
        className={`
          absolute top-0
          h-full w-[235px]
          origin-left
          transition-transform duration-500
          transform-3d
          backface-hidden
          ${open ? "transform-[rotateY(30deg)] left-5" : "transform-[rotateY(90deg)] left-1"}
        `}
      >
        <Image
          src={getBookImage(id, "front")}
          alt="Book front"
          width={235}
          height={267}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Book;
