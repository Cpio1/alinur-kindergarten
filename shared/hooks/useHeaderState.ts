"use client";

import { useEffect, useState } from "react";
import { SECTION_IDS, type SectionId } from "@/shared/content/site";

export function useScrolled(threshold = 16) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);
  return scrolled;
}

/** Определяет секцию, которая сейчас находится под шапкой. */
export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}
