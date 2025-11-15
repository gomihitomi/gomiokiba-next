"use client";

import { navigationItems } from "@/constants/navigation";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  navigationItems.ABOUT,
  navigationItems.PROFILE,
  navigationItems.GOODS,
  navigationItems.GUIDELINE,
  navigationItems.FAQ,
  navigationItems.LINK,
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* PC用メニュー */}
      <nav className="hidden md:block">
        <ul className="flex justify-around gap-px">
          {navigation.map((item) => (
            <li key={item.id} className="flex-1">
              <Link
                className="text-sm py-2 w-full h-full flex justify-center items-center text-background bg-foreground hover:text-foreground hover:bg-background"
                href={`#${item.id}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* モバイル用メニューボタン */}
      <div className="md:hidden absolute top-0 right-0">
        <button
          onClick={toggleMenu}
          className="z-100 cursor-pointer bg-foreground text-background px-6 py-4"
          aria-label="メニューを開く"
        >
          {isMenuOpen ? "閉じる" : "メニュー"}
        </button>
      </div>

      {/* モバイル用オーバーレイメニュー */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center"
          onClick={toggleMenu}
        >
          <nav className="w-full">
            <ul className="flex flex-col items-center">
              {navigation.map((item) => (
                <li key={item.id} className="w-full flex">
                  <Link
                    className="text-center w-full text-2xl py-4 text-foreground hover:opacity-75"
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
