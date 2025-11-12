import { Navigation } from "@/components/navigation";
import { About } from "@/features/sections/about";
import { Faq } from "@/features/sections/faq";
import { Goods } from "@/features/sections/goods";
import { Guideline } from "@/features/sections/guideline";
import { Links } from "@/features/sections/links";
import { Profile } from "@/features/sections/profile";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-8">
        <header>
          <Link href="/">
            <Image
              className="mx-auto"
              src="/img/gomihitomi/top.png"
              alt="吾味人美のアイコン"
              width={240}
              height={240}
              priority
            />
          </Link>
          <Navigation />
        </header>
        <main>
          <About />
          <Profile />
          <Goods />
          <Guideline />
          <Faq />
          <Links />
        </main>
      </div>
      <footer className="bg-foreground text-background w-full text-center text-sm py-8">
        © 2018-2025 ごみおきば
      </footer>
    </div>
  );
}
