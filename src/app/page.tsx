import BackToTopButton from "@/components/back-to-top-button";
import { Navigation } from "@/components/navigation";
import { About } from "@/features/sections/about";
import { Contact } from "@/features/sections/contact";
import { Faq } from "@/features/sections/faq";
import { Goods } from "@/features/sections/goods";
import { Guideline } from "@/features/sections/guideline";
import { Links } from "@/features/sections/links";
import { Profile } from "@/features/sections/profile";

export default function Home() {
  return (
    <div>
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-8">
        <header>
          <a href="">
            <h1 className="w-fit font-black text-8xl tracking-tighter leading-none">
              <div className="flex justify-around text-sm font-normal uppercase mb-2">
                {"gomiokiba".split("").map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </div>
              ごみおきば
            </h1>
          </a>
        </header>
        <Navigation />
        <main>
          <About />
          <Profile />
          <Goods />
          <Guideline />
          <Faq />
          <Contact />
          <Links />
        </main>
      </div>
      <footer className="bg-foreground text-background w-full text-center text-sm py-8">
        © 2018-2025 ごみおきば
      </footer>
      <BackToTopButton />
    </div>
  );
}
