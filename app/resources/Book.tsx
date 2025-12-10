"use client";
import React from "react";
import Image from "next/image";

interface BookProps {
  id: number;
}

const Book: React.FC<BookProps> = ({ id }) => {
  const getBookImage = (id: number, type: string) =>
    `/books/${id}-Book-${type}.png`;

  return (
    <div className="relative w-full max-w-[200px] mx-auto">
      <div className="relative aspect-[3/4] overflow-hidden rounded-md shadow-2xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
        <Image
          src={getBookImage(id, "front")}
          alt={`Book ${id} cover`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Book;