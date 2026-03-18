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
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const selectors = ".reveal-up, .reveal-left, .reveal-right, .reveal-scale";

    // Observe existing elements
    const observe = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        if (!el.classList.contains("visible")) {
          observer.observe(el);
        }
      });
    };

    observe();

    // MutationObserver to catch elements rendered later (e.g. inside Suspense)
    const mutationObserver = new MutationObserver(() => {
      observe();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
