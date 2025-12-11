import BackToTopButton from "@/components/back-to-top-button";
import { Header } from "@/components/header";
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
      <div className="pt-16 md:py-8">
        <Header />
      </div>
      <Navigation />
      <div className="w-full max-w-main-content mx-auto px-4 md:px-8">
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
      <footer className="mt-8 bg-foreground text-background w-full text-center text-sm py-8">
        © 2018-2025 ごみおきば
      </footer>
      <BackToTopButton />
    </div>
  );
}
