"use client";

import { navigationItems } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useState } from "react";

const navigation = [
  navigationItems.ABOUT,
  navigationItems.PROFILE,
  navigationItems.GOODS,
  navigationItems.GUIDELINE,
  navigationItems.FAQ,
  navigationItems.CONTACT,
  navigationItems.LINK,
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeSection = useActiveSection(navigation.map(({ id }) => id));

  return (
    <>
      {/* PC用メニュー */}
      <nav className="hidden sticky z-50 top-0 md:block">
        <ul className="flex max-w-main-content mx-auto -top-px border-b z-1">
          {navigation.map(({ id, label }) => (
            <li key={id} className="flex-1">
              {activeSection === id ? (
                <span className="text-sm py-2 flex justify-center items-center text-background bg-foreground pointer-events-none">
                  {label}
                </span>
              ) : (
                <a
                  className="text-sm py-2 flex justify-center items-center text-foreground bg-background hover:text-background hover:bg-foreground"
                  href={`#${id}`}
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* モバイル用メニューボタン */}
      <div className="md:hidden fixed top-0 right-0 z-25">
        <button
          onClick={toggleMenu}
          className="z-100 cursor-pointer bg-foreground text-background px-6 py-3"
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
                  <a
                    className="text-center w-full text-2xl py-4 text-foreground hover:opacity-75"
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
