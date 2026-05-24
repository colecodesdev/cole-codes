"use client";

import { useEffect } from "react";

export const BackgroundGlow = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    if (reduce.matches || !fine.matches) {
      root.style.setProperty("--glow-x", "50%");
      root.style.setProperty("--glow-y", "40%");
      return;
    }

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        const dampedX = 15 + x * 0.15;
        const dampedY = 40 + y * 0.2;
        root.style.setProperty("--glow-x", `${dampedX}%`);
        root.style.setProperty("--glow-y", `${dampedY}%`);
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
};
