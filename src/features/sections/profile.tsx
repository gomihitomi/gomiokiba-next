"use client";

import Bubble from "@/components/bubble";
import { Section } from "@/components/section";
import { navigationItems } from "@/constants/navigation";
import { useEffect, useRef, useState } from "react";

const profiles = [
  {
    tip: "まぁまぁ誤字されています。",
    label: "名前",
    body: (
      <ruby>
        吾味人美
        <rp>(</rp>
        <rt>ごみひとみ</rt>
        <rp>)</rp>
      </ruby>
    ),
  },
  {
    tip: "芹沢●さひさんと完全に一緒です。",
    label: "身長／体重",
    body: "153cm／47kg",
  },
  {
    tip: "5年毎に更新予定です。",
    label: "年齢",
    body: "20代後半",
  },
  {
    tip: "一時期、存在が消えていました。",
    label: "誕生日",
    body: "5月3日",
  },
  {
    tip: "YouTubeへの初投稿日です。",
    label: "活動開始日",
    body: "2018年10月18日",
  },
  {
    tip: "常に移り変わるという意味です。",
    label: "座右の銘",
    body: "星の流れ、月の位置",
  },
  {
    tip: "何もしないことをしています。",
    label: "職業",
    body: "無職",
  },
  {
    tip: "これを支えに生きています。",
    label: "好き",
    body: "お酒",
  },
  {
    tip: "ジャンプスケアを許すな。",
    label: "苦手",
    body: "ホラー（ビックリ系）",
  },
  {
    tip: "何もしないことを望んでいます。",
    label: "将来の夢",
    body: "不労所得",
  },
  {
    tip: "suum●推しです。",
    label: "趣味",
    body: "賃貸サイト閲覧",
  },
  {
    tip: "呼吸の次にやっています。",
    label: "特技",
    body: "エゴサーチ",
  },
];

const sectionItem = {
  id: navigationItems.PROFILE.id,
  title: navigationItems.PROFILE.label,
};

export const Profile = () => {
  const [openLabel, setOpenLabel] = useState("");
  const containerRef = useRef<HTMLUListElement>(null);

  const toggleBubble = (label: string) => {
    setOpenLabel(openLabel === label ? "" : label);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (openLabel === "") return;

      if (!containerRef.current.contains(e.target as Node)) {
        setOpenLabel("");
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [openLabel]);

  return (
    <Section {...sectionItem}>
      <ul
        ref={containerRef}
        className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4"
      >
        {profiles.map(({ tip, label, body }) => (
          <li
            key={label}
            className="relative cursor-pointer"
            onClick={() => toggleBubble(label)}
          >
            {openLabel === label && (
              <div className="text-sm absolute w-full -top-2">
                <Bubble position="bottom" className="mx-auto">
                  {tip}
                </Bubble>
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tighter bg-foreground text-background py-1 px-2 w-fit">
                {label}
              </span>
            </div>
            <div className="flex justify-center items-center h-12 border border-foreground">
              <span>{body}</span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
