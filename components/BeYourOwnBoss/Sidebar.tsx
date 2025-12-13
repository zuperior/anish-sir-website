"use client";

import React, { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
    menuItems: string[];
}

export const BeYourOwnBossSidebar: React.FC<SidebarProps> = ({
    activeSection,
    setActiveSection,
    menuItems,
}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState(0);

    const startDrag = (x: number) => {
        setIsDragging(true);
        setDragStart(x);
    };

    const onDrag = (x: number) => {
        if (!isDragging || !scrollContainerRef.current) return;
        const diff = dragStart - x;
        scrollContainerRef.current.scrollLeft += diff;
        setDragStart(x);
    };

    const stopDrag = () => setIsDragging(false);

    return (
        <>
            {/* ================= DESKTOP SIDEBAR ================= */}
            <aside className="hidden lg:flex w-80 max-w-[300px] bg-[#8A1A0E] relative p-8 pt-[50px] flex-col overflow-y-auto no-scrollbar">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-screen pointer-events-none"
                    style={{ backgroundImage: "url('/Photo-wall-texture.png')" }}
                />

                <div className="relative z-10 flex flex-col grow">
                    <h1 className="text-4xl mb-10 text-white/70 font-krona tracking-[-0.08em] leading-[1.3em]">
                        Projects.
                    </h1>

                    <nav className="grow space-y-1 pt-12">
                        {menuItems.map((item, index) => {
                            const isActive = activeSection === item;
                            return (
                                <div key={item}>
                                    <div
                                        onClick={() => setActiveSection(item)}
                                        className={`group flex items-center justify-between cursor-pointer text-[18px] font-semibold transition leading-[1.4em] tracking-[-0.02em] 
                      ${isActive
                                                ? "text-white"
                                                : "text-white/45 hover:text-white/75"
                                            }`}
                                    >
                                        <span>{item}</span>
                                        <ArrowRight
                                            className={`w-4 h-4 -rotate-45 transition-all
                        ${isActive
                                                    ? "opacity-100 text-white"
                                                    : "opacity-0 group-hover:opacity-100 text-white/60"
                                                }`}
                                        />
                                    </div>

                                    {index !== menuItems.length - 1 && (
                                        <div className="w-full h-px bg-[#F2EFE9]/75 group-hover:bg-white/30 transition opacity-30 mt-1.5" />
                                    )}
                                </div>
                            );
                        })}
                    </nav>
                </div>

                {/* Bottom */}
                <div className="relative z-10 mt-8 space-y-6">
                    <div className="flex gap-6 pl-6">
                        <a
                            href="https://www.instagram.com/anishsinghthakur"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition text-white/85 hover:text-white transform hover:scale-115 ease-in"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                            >
                                <path d="M 0 8 C 0 4.229 0 2.343 1.172 1.172 C 2.344 0.001 4.229 0 8 0 L 10 0 C 13.771 0 15.657 0 16.828 1.172 C 17.999 2.344 18 4.229 18 8 L 18 10 C 18 13.771 18 15.657 16.828 16.828 C 15.656 17.999 13.771 18 10 18 L 8 18 C 4.229 18 2.343 18 1.172 16.828 C 0.001 15.656 0 13.771 0 10 Z M 15 4.5 C 15 3.672 14.328 3 13.5 3 C 12.672 3 12 3.672 12 4.5 C 12 5.328 12.672 6 13.5 6 C 14.328 6 15 5.328 15 4.5 Z M 9 12 C 7.895 12 7 11.105 7 10 C 7 8.895 7.895 8 9 8 C 10.105 8 11 8.895 11 10 C 11 11.105 10.105 12 9 12 Z M 13 10 C 13 7.791 11.209 6 9 6 C 6.791 6 5 7.791 5 10 C 5 12.209 6.791 14 9 14 C 11.209 14 13 12.209 13 10 Z" />
                            </svg>
                        </a>

                        <a
                            href="https://www.facebook.com/ianishsinghthakur"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition text-white/85 hover:text-white transform hover:scale-115 ease-in"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="20"
                                fill="currentColor"
                                overflow="visible"
                            >
                                <path d="M 7 11.5 L 9.5 11.5 L 10.5 7.5 L 7 7.5 L 7 5.5 C 7 4.47 7 3.5 9 3.5 L 10.5 3.5 L 10.5 0.14 C 10.174 0.097 8.943 0 7.643 0 C 4.928 0 3 1.657 3 4.7 L 3 7.5 L 0 7.5 L 0 11.5 L 3 11.5 L 3 20 L 7 20 Z" />
                            </svg>
                        </a>

                        <a
                            href="https://t.me/boomingbullscompany"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition text-white/85 hover:text-white transform hover:scale-115 ease-in"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="16"
                                fill="currentColor"
                                overflow="visible"
                            >
                                <path d="M 1.345 6.974 C 6.591 4.688 10.09 3.181 11.842 2.452 C 16.841 0.373 17.879 0.012 18.556 0 C 18.706 -0.003 19.038 0.034 19.254 0.21 C 19.436 0.357 19.486 0.557 19.51 0.697 C 19.534 0.837 19.564 1.156 19.54 1.405 C 19.27 4.252 18.097 11.159 17.5 14.347 C 17.248 15.695 16.752 16.147 16.27 16.192 C 15.225 16.288 14.432 15.502 13.42 14.838 C 11.835 13.799 10.94 13.152 9.402 12.139 C 7.625 10.968 8.777 10.324 9.79 9.272 C 10.055 8.997 14.66 4.808 14.75 4.428 C 14.76 4.38 14.771 4.203 14.666 4.11 C 14.561 4.016 14.406 4.048 14.293 4.074 C 14.133 4.11 11.603 5.783 6.701 9.092 C 5.981 9.585 5.331 9.826 4.749 9.813 C 4.106 9.799 2.869 9.45 1.951 9.151 C 0.823 8.784 -0.073 8.591 0.005 7.968 C 0.045 7.644 0.492 7.313 1.345 6.974" />
                            </svg>
                        </a>

                        <a
                            href="https://x.com/anishsthakur"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition text-white/85 hover:text-white transform hover:scale-115 ease-in"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="18"
                                fill="currentColor"
                                overflow="visible"
                            >
                                <path d="M 15.575 0 L 10.579 5.711 L 6.259 0 L 0 0 L 7.477 9.776 L 0.391 17.875 L 3.425 17.875 L 8.894 11.625 L 13.674 17.875 L 19.776 17.875 L 11.982 7.571 L 18.607 0 Z M 14.511 16.06 L 3.542 1.719 L 5.345 1.719 L 16.191 16.059 Z" />
                            </svg>
                        </a>

                        <a
                            href="https://www.youtube.com/@BoomingBulls"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition text-white/85 hover:text-white transform hover:scale-115 ease-in"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="16"
                                fill="currentColor"
                                overflow="visible"
                            >
                                <path d="M 8.8 11.429 L 14.509 8 L 8.8 4.571 Z M 21.516 2.48 C 21.659 3.017 21.758 3.737 21.824 4.651 C 21.901 5.566 21.934 6.354 21.934 7.04 L 22 8 C 22 10.503 21.824 12.343 21.516 13.52 C 21.241 14.549 20.603 15.211 19.613 15.497 C 19.096 15.646 18.15 15.749 16.698 15.817 C 15.268 15.897 13.959 15.931 12.749 15.931 L 11 16 C 6.391 16 3.52 15.817 2.387 15.497 C 1.397 15.211 0.759 14.549 0.484 13.52 C 0.341 12.983 0.242 12.263 0.176 11.349 C 0.099 10.434 0.066 9.646 0.066 8.96 L 0 8 C 0 5.497 0.176 3.657 0.484 2.48 C 0.759 1.451 1.397 0.789 2.387 0.503 C 2.904 0.354 3.85 0.251 5.302 0.183 C 6.732 0.103 8.041 0.069 9.251 0.069 L 11 0 C 15.609 0 18.48 0.183 19.613 0.503 C 20.603 0.789 21.241 1.451 21.516 2.48" />
                            </svg>
                        </a>
                    </div>
                    <Link href="/connect-with-me">
                        <button className="w-full bg-white text-black font-medium py-4 rounded-full hover:bg-gray-100 transition font-clash-grotesk text-[18px] leading-[0.9em] tracking-[-0.03em] cursor-pointer">
                            Connect with Anish
                        </button>
                    </Link>
                </div>
            </aside>

            {/* ================= MOBILE / TABLET BOTTOM BAR ================= */}
            <div className="lg:hidden shrink-0 bg-[#8A1A0E] relative">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-screen pointer-events-none"
                    style={{ backgroundImage: "url('/Photo-wall-texture.png')" }}
                />

                <div className="relative z-10 p-4">
                    <h1 className="text-xl text-white/70 font-krona mb-3">
                        Projects.
                    </h1>

                    <div
                        ref={scrollContainerRef}
                        onMouseDown={(e) => startDrag(e.clientX)}
                        onMouseMove={(e) => onDrag(e.clientX)}
                        onMouseUp={stopDrag}
                        onMouseLeave={stopDrag}
                        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
                        onTouchMove={(e) => onDrag(e.touches[0].clientX)}
                        onTouchEnd={stopDrag}
                        className="flex gap-3 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-2"
                    >
                        {menuItems.map((item) => {
                            const isActive = activeSection === item;
                            return (
                                <button
                                    key={item}
                                    onClick={() => setActiveSection(item)}
                                    className={`shrink-0 px-4 py-2 rounded-lg font-semibold transition
                    ${isActive
                                            ? "bg-white text-black"
                                            : "text-white/60 hover:text-white"
                                        }`}
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
