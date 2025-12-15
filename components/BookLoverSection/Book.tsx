"use client";
import React, { useRef, useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  const getBookImage = (id: number, type: string) =>
    `/books/${id}-Book-${type}.png`;

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Set responsive dimensions based on screen size
    const containerWidth = isMobile ? "30px" : "44px";
    const openContainerWidth = isMobile ? "160px" : "235px";
    
    const spineRotation = isMobile ? -35 : -40;
    const frontRotation = isMobile ? 25 : 30;
    const frontLeftOpen = isMobile ? "18px" : "22px";
    const frontLeftClosed = isMobile ? "3px" : "4px";
    const frontRotationClosed = 90;

    // Animation from closed to open state or vice versa
    if (spineRef.current && frontRef.current && containerRef.current) {
      if (open) {
        // Animate to open state
        gsap.timeline()
          .to(containerRef.current, {
            width: openContainerWidth,
            duration: 0.8,
            ease: "power2.inOut",
          }, 0)
          .to(spineRef.current, {
            rotationY: spineRotation,
            duration: 0.8,
            ease: "power2.inOut",
          }, 0)
          .to(frontRef.current, {
            rotationY: frontRotation,
            left: frontLeftOpen,
            duration: 0.8,
            ease: "power2.inOut",
          }, 0);
      } else {
        // Animate to closed state
        gsap.timeline()
          .to(containerRef.current, {
            width: containerWidth,
            duration: 0.8,
            ease: "power2.inOut",
          }, 0)
          .to(spineRef.current, {
            rotationY: 0,
            duration: 0.8,
            ease: "power2.inOut",
          }, 0)
          .to(frontRef.current, {
            rotationY: frontRotationClosed,
            left: frontLeftClosed,
            duration: 0.8,
            ease: "power2.inOut",
          }, 0);
      }
    }
  }, [open, isMobile]);

  // Responsive dimensions
  const containerHeight = isMobile ? "180px" : "267px";
  const spineWidth = isMobile ? "30px" : "44px";
  const frontWidth = isMobile ? "150px" : "235px";
  
  // Image dimensions - maintain aspect ratio
  const spineImageWidth = isMobile ? 30 : 44;
  const spineImageHeight = isMobile ? 180 : 267;
  const frontImageWidth = isMobile ? 160 : 235;
  const frontImageHeight = isMobile ? 180 : 267;

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        height: containerHeight,
        width: isMobile ? "10px" : "44px",
        perspective: "1400px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* SPINE */}
      <div
        ref={spineRef}
        className="absolute top-0 left-0 h-full z-10"
        style={{
          width: spineWidth,
          transformOrigin: "right center",
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={getBookImage(id, "side")}
          alt="Book side"
          width={spineImageWidth}
          height={spineImageHeight}
          className="h-full w-full object-cover"
          priority={id <= 3} // Priority load first few books
        />
      </div>

      {/* FRONT */}
      <div
        ref={frontRef}
        className="absolute top-0 h-full"
        style={{
          width: frontWidth,
          left: isMobile ? "10px" : "4px",
          transformOrigin: "left center",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <Image
          src={getBookImage(id, "front")}
          alt="Book front"
          width={frontImageWidth}
          height={frontImageHeight}
          className="h-full w-full object-cover"
          priority={id <= 3} // Priority load first few books
        />
      </div>
    </div>
  );
};

export default Book;