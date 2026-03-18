"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    const els = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right, .reveal-scale");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
