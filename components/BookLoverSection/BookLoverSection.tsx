"use client";
import React, { useState, useEffect, useRef } from "react";

const BookLoverSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const [isUserAtEdge, setIsUserAtEdge] = useState(false);

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
  const lastDirectionRef = useRef<number>(0); // Track last scroll direction

  //-------------------------------------------
  // ⭐ IMPROVED: GLOBAL BOOK FLIPPING LOGIC
  //-------------------------------------------
  const handleGlobalScroll = (deltaY: number) => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    lastDirectionRef.current = deltaY > 0 ? 1 : -1;

    requestAnimationFrame(() => {
      const direction = deltaY > 0 ? 1 : -1;
      const currentIndex = Math.floor(progressRef.current);

      scrollThreshold.current += Math.abs(deltaY);

      if (scrollThreshold.current > 50) {
        progressRef.current += direction;
        scrollThreshold.current = 0;
      }

      // Clamp progress between 0 and 6
      progressRef.current = Math.max(0, Math.min(6, progressRef.current));

      const newIndex = Math.floor(progressRef.current);

      // ⭐ CRITICAL FIX: Check if we're at edge with book already open
      const isFirstBookAtEdge = currentIndex === 0 && newIndex === 0;
      const isLastBookAtEdge = currentIndex === 6 && newIndex === 6;
      
      // If book is already open at edge and user tries to move beyond
      const currentBookIsOpen = books[currentIndex]?.isOpen;
      
      if ((isFirstBookAtEdge && direction === -1 && currentBookIsOpen) || 
          (isLastBookAtEdge && direction === 1 && currentBookIsOpen)) {
        // Book is already open and user is trying to go beyond
        // Unlock scroll immediately
        setIsScrollLocked(false);
        setIsUserAtEdge(true);
        isAnimatingRef.current = false;
        return;
      }

      // Normal book flipping logic
      if (newIndex >= 0 && newIndex <= 6) {
        const front = 0;
        const side = -90;

        setBooks((prev) =>
          prev.map((b, i) =>
            i === newIndex
              ? { ...b, frontRotate: front, sideRotate: side, isOpen: true }
              : { ...b, frontRotate: 96, sideRotate: 0, isOpen: false }
          )
        );

        setActiveIndex(newIndex);
        
        // Handle scroll lock logic
        if (newIndex === 0 || newIndex === 6) {
          // At edge books
          setIsUserAtEdge(true);
          
          // Check if we should unlock after book opens
          const shouldUnlock = (newIndex === 0 && direction === -1) || 
                              (newIndex === 6 && direction === 1);
          
          if (shouldUnlock) {
            // Unlock after book animation completes
            setTimeout(() => {
              setIsScrollLocked(false);
            }, 300);
          } else {
            // Keep locked to allow flipping
            setIsScrollLocked(true);
          }
        } else {
          // Middle books - always locked
          setIsScrollLocked(true);
          setIsUserAtEdge(false);
        }
      }

      isAnimatingRef.current = false;
    });
  };

  //-------------------------------------------
  // ⭐ IMPROVED: RESET SCROLL LOCK WHEN USER COMES BACK
  //-------------------------------------------
  useEffect(() => {
    const checkIfUserCameBack = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const isSectionVisible = 
        sectionRect.top < window.innerHeight * 0.8 && 
        sectionRect.bottom > window.innerHeight * 0.2;

      if (isSectionVisible && isUserAtEdge) {
        // Check if we should re-lock scroll
        const currentIndex = Math.floor(progressRef.current);
        const currentBook = books[currentIndex];
        
        // If we're at edge but book isn't fully open yet, or if user is scrolling back in
        if (currentIndex > 0 && currentIndex < 6) {
          // Back to middle books - lock scroll
          setIsScrollLocked(true);
          setIsUserAtEdge(false);
        } else if ((currentIndex === 0 && lastDirectionRef.current >= 0) || 
                   (currentIndex === 6 && lastDirectionRef.current <= 0)) {
          // At edge but scrolling back toward middle - lock scroll
          setIsScrollLocked(true);
          setIsUserAtEdge(false);
        }
      }
    };

    window.addEventListener("scroll", checkIfUserCameBack);
    return () => window.removeEventListener("scroll", checkIfUserCameBack);
  }, [isUserAtEdge, books]);

  //-------------------------------------------
  // ⭐ IMPROVED: SECTION VISIBILITY DETECTION
  //-------------------------------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isSectionVisible = entry.isIntersecting;
        
        if (isSectionVisible) {
          const currentIndex = Math.floor(progressRef.current);
          const currentBook = books[currentIndex];
          
          if (currentIndex > 0 && currentIndex < 6) {
            // Middle books - lock scroll
            setIsScrollLocked(true);
            setIsUserAtEdge(false);
          } else if (currentIndex === 0 || currentIndex === 6) {
            // Edge books
            if (currentBook?.isOpen) {
              // Book is open - check if user was trying to go beyond
              const wasTryingToGoBeyond = 
                (currentIndex === 0 && lastDirectionRef.current === -1) ||
                (currentIndex === 6 && lastDirectionRef.current === 1);
              
              if (wasTryingToGoBeyond) {
                setIsScrollLocked(false);
                setIsUserAtEdge(true);
              } else {
                setIsScrollLocked(true);
                setIsUserAtEdge(false);
              }
            } else {
              // Book not open yet - lock to allow flipping
              setIsScrollLocked(true);
              setIsUserAtEdge(false);
            }
          }
        }
      },
      { 
        threshold: 0.4,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [books]);

  //-------------------------------------------
  // ⭐ IMPROVED: SCROLL & TOUCH HANDLERS
  //-------------------------------------------
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const currentIndex = Math.floor(progressRef.current);
      const currentBook = books[currentIndex];
      const direction = e.deltaY > 0 ? 1 : -1;
      
      // Update last direction
      lastDirectionRef.current = direction;

      // If scroll is locked, handle book flipping
      if (isScrollLocked) {
        e.preventDefault();
        handleGlobalScroll(e.deltaY);
        return;
      }

      // If scroll is unlocked, check conditions
      if (currentIndex === 0) {
        // At first book
        if (direction === -1) {
          // Up scroll - allow normal scroll
          return;
        } else if (direction === 1) {
          // Down scroll - if book is open, lock and handle
          if (currentBook?.isOpen) {
            e.preventDefault();
            setIsScrollLocked(true);
            handleGlobalScroll(e.deltaY);
          }
        }
      } else if (currentIndex === 6) {
        // At last book
        if (direction === 1) {
          // Down scroll - allow normal scroll
          return;
        } else if (direction === -1) {
          // Up scroll - if book is open, lock and handle
          if (currentBook?.isOpen) {
            e.preventDefault();
            setIsScrollLocked(true);
            handleGlobalScroll(e.deltaY);
          }
        }
      } else {
        // Middle books but scroll is unlocked (shouldn't happen, but just in case)
        e.preventDefault();
        setIsScrollLocked(true);
        handleGlobalScroll(e.deltaY);
      }
    };

    let touchStartY = 0;
    let isTouchActive = false;
    let touchDirection = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      isTouchActive = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isTouchActive) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      const currentIndex = Math.floor(progressRef.current);
      const currentBook = books[currentIndex];
      const direction = deltaY > 0 ? 1 : -1;
      
      touchDirection = direction;

      // If scroll is locked, handle book flipping
      if (isScrollLocked) {
        e.preventDefault();
        handleGlobalScroll(deltaY * 3);
        touchStartY = touchY;
        return;
      }

      // If scroll is unlocked, check conditions
      if (currentIndex === 0) {
        // At first book
        if (direction === -1) {
          // Up scroll - allow normal scroll
          return;
        } else if (direction === 1) {
          // Down scroll - if book is open, lock and handle
          if (currentBook?.isOpen) {
            e.preventDefault();
            setIsScrollLocked(true);
            handleGlobalScroll(deltaY * 3);
          }
        }
      } else if (currentIndex === 6) {
        // At last book
        if (direction === 1) {
          // Down scroll - allow normal scroll
          return;
        } else if (direction === -1) {
          // Up scroll - if book is open, lock and handle
          if (currentBook?.isOpen) {
            e.preventDefault();
            setIsScrollLocked(true);
            handleGlobalScroll(deltaY * 3);
          }
        }
      }
      
      touchStartY = touchY;
    };

    const onTouchEnd = () => {
      lastDirectionRef.current = touchDirection;
      isTouchActive = false;
    };

    // Add event listeners with better options
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isScrollLocked, books]); // Add books dependency

  //-------------------------------------------
  // IMAGE HELPERS (Unchanged)
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
    const activeBookWidth = books[activeIndex]?.isOpen
      ? openBookWidth
      : bookWidth;
    const offset = activeIndex * (bookWidth - 2);

    return `translateX(calc(50vw - ${offset + activeBookWidth / 2}px))`;
  };

  //-------------------------------------------
  // UI SECTION (Unchanged)
  //-------------------------------------------
  return (
    <div 
      ref={sectionRef}
      className="bg-[#151515] w-full flex justify-center items-center px-4"
      style={{
        position: "relative",
        minHeight: "500px"
      }}
    >
  

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
                  alt={`Book ${book.id} side`}
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
                  alt={`Book ${book.id} front`}
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