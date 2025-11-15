import { Link } from "@/components/link";
import { Paragraph } from "@/components/paragraph";
import { Section } from "@/components/section";
import { navigationItems } from "@/constants/navigation";

const sectionItem = {
  id: navigationItems.GUIDELINE.id,
  title: navigationItems.GUIDELINE.label,
};

export const Guideline = () => {
  return (
    <Section {...sectionItem}>
      <div>
        <Paragraph isFirst>
          吾味人美は基本的に楽しんで欲しいというスタンスで活動をしています。
          その為、下記ガイドラインを守って頂ければ好きなように二次創作・二次使用をして頂いて構いません。
        </Paragraph>
        <Paragraph>
          もしも、悩む様なケースがありましたら、別途お問い合わせ頂けますと幸いです。
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
          <div>
            <span className="font-bold text-xl">◯ OK</span>
            <ul>
              <li>
                <span className="font-bold">吾味人美の二次創作をすること</span>
              </li>
              <ol className="list-disc list-outside pl-5">
                <li>
                  Twitter（現:X）に投稿する場合は
                  <Link href="https://twitter.com/hashtag/%E3%81%94%E3%81%BF%E3%81%82%E3%83%BC%E3%81%A8">
                    #ごみあーと
                  </Link>
                  を付けてくれると助かります。
                </li>
              </ol>
              <li>
                <b>吾味人美のコンテンツを二次使用すること</b>
              </li>
              <ol className="list-disc list-outside pl-5">
                <li>吾味人美の創作物すべてが対象となります。</li>
                <li>
                  吾味人美以外の創作物であるファンアートなどは対象となりません。
                </li>
              </ol>
            </ul>
          </div>
          <div>
            <span className="font-bold text-xl">✖ NG</span>
            <ul>
              <li>
                <b>下記の用途で利用すること</b>
              </li>
              <ol className="list-disc list-outside pl-5">
                <li>営利目的（商用）での利用</li>
                <li>なりすまし、著作者を偽るような内容</li>
                <li>第三者に不快感を与えるような内容</li>
                <li>第三者の権利、利益を侵害するような内容</li>
                <li>特定の思想、団体を支援するような内容</li>
                <li>その他、吾味人美が不適切と判断する内容</li>
              </ol>
            </ul>
          </div>
        </div>
        <div className="text-sm font-bold text-primary">
          ※当ガイドラインは予告なく変更する場合がありますので、予めご了承ください。
        </div>
      </div>
    </Section>
  );
};
