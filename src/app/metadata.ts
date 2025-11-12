import type { Metadata } from 'next';

const title = "ごみおきば";
const description =
  "バーチャルインターネットラクガキマン吾味人美と、吾味人志のサイト。300％フィクションです。";
const url = "https://gomiokiba.com/";
const ogImageUrl = `${url}/img/ogp.png`;

export const defaultMetadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: [ogImageUrl],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    title,
    card: "summary_large_image",
    images: [ogImageUrl],
  },
};