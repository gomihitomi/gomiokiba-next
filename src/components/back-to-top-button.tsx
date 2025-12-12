"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      setVisible(scrolled > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setVisible(false);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-4 right-4
        p-2 rounded-full 
        transition-opacity 
        cursor-pointer
        hover:opacity-80
        bg-foreground
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        border border-background
        z-30
      `}
    >
      <Image
        src="ekakiuta.svg"
        width={40}
        height={40}
        alt="トップへ戻るボタン"
      />
    </button>
  );
}
