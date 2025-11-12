import Bubble from "@/components/bubble";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { navigationItems } from "@/constants/navigation";
import Image from "next/image";

const sectionItem = {
  id: navigationItems.GOODS.id,
  title: navigationItems.GOODS.label,
};

export const Goods = () => {
  return (
    <Section {...sectionItem}>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-4 mt-4">
          <div className="flex flex-col items-center">
            <Bubble position="bottom" className="text-sm">
              <span>BOOTH</span>
            </Bubble>
            <Link href="https://gomihitomi.booth.pm/">
              <Image
                src="/img/goods/booth.png"
                alt="吾味人美のアクリル板"
                width={200}
                height={200}
                className="border border-foreground rounded-full aspect-square bg-white hover:opacity-70"
                priority
              />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Bubble position="bottom" className="text-sm">
              <span>SUZURI</span>
            </Bubble>
            <Link href="https://suzuri.jp/gomihitomi">
              <Image
                src="/img/goods/suzuri.png"
                alt="夏の吾味人美ロンググラス"
                width={200}
                height={200}
                className="border border-foreground rounded-full aspect-square bg-white hover:opacity-70"
                priority
              />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Bubble position="bottom" className="text-sm">
              <span>LINEスタンプ</span>
            </Bubble>
            <Link href="https://store.line.me/stickershop/product/12294605/ja">
              <Image
                src="/img/goods/line.png"
                alt="吾味人美の便利スタンプ"
                width={200}
                height={200}
                className="border border-foreground rounded-full aspect-square bg-white hover:opacity-70"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};
