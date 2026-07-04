"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lenisInstance: unknown;

    const initLenis = async () => {
      try {
        const Lenis = (await import("@studio-freight/lenis")).default;
        lenisInstance = new Lenis({
          lerp: 0.1,
          duration: 1.5,
          smoothWheel: true,
        });

        const raf = (time: number) => {
          (lenisInstance as { raf: (t: number) => void }).raf(time);
          requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
      } catch {
        // Lenis not available, smooth scrolling disabled
      }
    };

    initLenis();

    return () => {
      if (lenisInstance && typeof lenisInstance === "object" && "destroy" in lenisInstance) {
        (lenisInstance as { destroy: () => void }).destroy();
      }
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
