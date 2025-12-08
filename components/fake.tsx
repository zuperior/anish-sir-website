/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect, useRef } from "react";

const BookLoverSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isScrollLocked, setIsScrollLocked] = useState(true);

  // ⭐ INITIAL BOOK STATE
  const initialBooks = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    frontRotate: 96,
    sideRotate: 0,
    isOpen: false,
  }));

  const [books, setBooks] = useState(initialBooks);

  const progressRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const scrollThreshold = useRef(0);

  //-------------------------------------------
  // ⭐ GLOBAL BOOK FLIPPING LOGIC
  //-------------------------------------------
  const handleGlobalScroll = (deltaY: any) => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    requestAnimationFrame(() => {
      const direction = deltaY > 0 ? 1 : -1;

      scrollThreshold.current += Math.abs(deltaY);

      if (scrollThreshold.current > 50) {
        progressRef.current += direction;
        scrollThreshold.current = 0;
      }

      if (progressRef.current < 0) progressRef.current = 0;
      if (progressRef.current > 6) progressRef.current = 6;

      const index = Math.floor(progressRef.current);

      const front = 0;
      const side = -90;

      setBooks((prev) =>
        prev.map((b, i) =>
          i === index
            ? { ...b, frontRotate: front, sideRotate: side, isOpen: true }
            : { ...b, frontRotate: 96, sideRotate: 0, isOpen: false }
        )
      );

      setActiveIndex(index);
      isAnimatingRef.current = false;
    });
  };

  //-------------------------------------------
  // ⭐ FORCE-FREEZE ON SECTION ENTRY
  //-------------------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsScrollLocked(true);
        }
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  //-------------------------------------------
  // ⭐ SCROLL & TOUCH HANDLERS (WINDOW)
  //-------------------------------------------
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!isScrollLocked) return;

      // Unfreeze at edges
      if ((activeIndex === 6 && e.deltaY > 0) || (activeIndex === 0 && e.deltaY < 0)) {
        setIsScrollLocked(false);
        return;
      }

      e.preventDefault();
      handleGlobalScroll(e.deltaY);
    };

    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (!isScrollLocked) return;

      if ((activeIndex === 6 && deltaY > 0) || (activeIndex === 0 && deltaY < 0)) {
        setIsScrollLocked(false);
        return;
      }

      e.preventDefault();
      handleGlobalScroll(deltaY * 3);

      touchStartY = touchY;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [isScrollLocked, activeIndex, books]);

  //-------------------------------------------
  // IMAGE HELPERS
  //-------------------------------------------
  const getBookImage = (id: number, type: string) =>
    `/Books images/${id}-book-${type}.png`;

  const getBookSpacing = (bookId: number) => {
    const bookIndex = bookId - 1;

    if (activeIndex === null) return bookIndex === 0 ? "0px" : "-2px";

    if (bookIndex === activeIndex) return "0px";
    if (bookIndex === activeIndex - 1) return "0px";
    if (bookIndex === activeIndex + 1) return "60px";

    return "-2px";
  };

  const getBookWidth = (bookIndex: number) => {
    const book = books[bookIndex];
    return book.isOpen ? "279px" : "44px";
  };

  const getContainerTransform = () => {
    const bookWidth = 44;
    const openBookWidth = 279;
    const activeBookWidth = books[activeIndex].isOpen
      ? openBookWidth
      : bookWidth;
    const offset = activeIndex * (bookWidth - 2);

    return `translateX(calc(50vw - ${offset + activeBookWidth / 2}px))`;
  };

  //-------------------------------------------
  // UI SECTION
  //-------------------------------------------
  return (
    <div className="bg-[#151515]  w-full flex justify-center items-center  px-4">
      <div
        ref={containerRef}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          position: "relative",
          userSelect: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            position: "relative",
            transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transform: getContainerTransform(),
            willChange: "transform",
            padding: "0 50px",
            gap: "20px",
          }}
        >
          {books.map((book, index) => (
            <div
              key={book.id}
              style={{
                position: "relative",
                height: "380px",
                width: getBookWidth(index),
                marginLeft: getBookSpacing(book.id),
                perspective: "1400px",
                zIndex: book.isOpen ? 1000 : books.length - index,
                transition: "width 0.4s ease, margin 0.4s ease",
                willChange: "width, margin, z-index",
              }}
            >
              {/* SIDE */}
              <div
                style={{
                  position: "absolute",
                  top: "56px",
                  width: "54px",
                  height: "307px",
                  transformOrigin: "right center",
                  transform: `rotateY(${book.sideRotate}deg)`,
                  transition:
                    "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  backfaceVisibility: "hidden",
                  overflow: "hidden",
                  zIndex: 2,
                }}
              >
                <img
                  src={getBookImage(book.id, "side")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* FRONT */}
              <div
                style={{
                  position: "absolute",
                  left: "28px",
                  top: "56px",
                  width: "305px",
                  height: "307px",
                  transformOrigin: "left center",
                  transform: `rotateY(${book.frontRotate}deg)`,
                  backfaceVisibility: "hidden",
                  overflow: "hidden",
                  zIndex: 1,
                  transition: book.isOpen
                    ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s ease"
                    : "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                <img
                  src={getBookImage(book.id, "front")}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookLoverSection;
