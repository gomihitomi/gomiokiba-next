"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (!entry.isIntersecting && activeSection == id) {
            setActiveSection("");
          }
          if (entry.isIntersecting) {
            setActiveSection(id);
          }  
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-1% 0% -99% 0%",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeSection, sectionIds]);

  return activeSection;
}
