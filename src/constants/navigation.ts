type NavigationType = {
  id: string;
  label: string;
};

export const navigationItems = {
  ABOUT: { id: "about", label: "吾味人美とは" },
  PROFILE: { id: "profile", label: "プロフィール" },
  GOODS: { id: "goods", label: "グッズ" },
  GUIDELINE: { id: "guideline", label: "ガイドライン" },
  FAQ: { id: "faq", label: "よくある質問" },
  LINK: { id: "link", label: "リンク" },
} as const satisfies Record<string, NavigationType>;
