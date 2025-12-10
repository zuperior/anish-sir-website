"use client";
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

declare global {
    interface Window {
        lenis?: Lenis;
    }
}

export const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenisRef = useRef<any>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;
        window.lenis = lenis;

        let rafId: number;
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};