"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface BookProps {
  id: number;
  open?: boolean;
}

const Book: React.FC<BookProps> = ({ id, open = false }) => {
  const spineRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getBookImage = (id: number, type: string) =>
    `/books/${id}-Book-${type}.png`;

  useEffect(() => {
    // Animation from closed to open state or vice versa
    if (spineRef.current && frontRef.current && containerRef.current) {
      if (open) {
        // Animate to open state
        gsap.timeline().to(containerRef.current, {
          width: "235px",
          duration: 0.8,
          ease: "power2.inOut",
        }, 0)
          .to(spineRef.current, {
            rotationY: -40,
            duration: 0.8,
            ease: "power2.inOut",
          }, 0)
          .to(frontRef.current, {
            rotationY: 30,
            left: "22px",
            duration: 0.8,
            ease: "power2.inOut",
          }, 0);
      } else {
        // Animate to closed state
        gsap.timeline().to(containerRef.current, {
          width: "44px",
          duration: 0.8,
          ease: "power2.inOut",
        }, 0)
          .to(spineRef.current, {
            rotationY: 0,
            duration: 0.8,
            ease: "power2.inOut",
          }, 0)
          .to(frontRef.current, {
            rotationY: 90,
            left: "4px",
            duration: 0.8,
            ease: "power2.inOut",
          }, 0);
      }
    }
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative h-[267px]"
      style={{
        perspective: "1400px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* SPINE */}
      <div
        ref={spineRef}
        className="absolute top-0 left-0 h-full w-11 z-10"
        style={{
          transformOrigin: "right center",
          transformStyle: "preserve-3d",
        }}
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
        ref={frontRef}
        className="absolute top-0 h-full w-[235px]"
        style={{
          transformOrigin: "left center",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
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
