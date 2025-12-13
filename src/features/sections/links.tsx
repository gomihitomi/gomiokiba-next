import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { navigationItems } from "@/constants/navigation";

const sectionItem = {
  id: navigationItems.LINK.id,
  title: navigationItems.LINK.label,
};

export const Links = () => {
  return (
    <Section {...sectionItem}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
        <div>
          <span className="font-bold text-xl">吾味人志</span>
          <ul className="pl-5 list-disc list-outside">
            <li>
              <Link href="https://twitter.com/gomihitosi">Twitter（現:X）</Link>
            </li>
            <li>
              <Link href="https://pixiv.me/gomihitosi">pixiv</Link>
            </li>
            <li>
              <Link href="https://github.com/gomihitosi">GitHub</Link>
            </li>
            <li>
              <Link href="https://gomihitosi.hatenablog.com/">ブログ</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="font-bold text-xl">吾味人美</span>
          <ul className="pl-5 list-disc list-outside">
            <li>
              <Link href="https://twitter.com/gomihitomi">Twitter（現:X）</Link>
            </li>
            <li>
              <Link href="https://pixiv.me/gomihitomi">pixiv</Link>
            </li>
            <li>
              <Link href="https://github.com/gomihitomi">GitHub</Link>
            </li>
            <li>
              <Link href="https://www.youtube.com/@gomihitomi">YouTube</Link>
            </li>
            <li>
              <Link href="https://www.twitch.tv/gomihitomi">Twitch</Link>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};
