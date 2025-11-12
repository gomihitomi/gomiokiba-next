import { Link } from "@/components/link";
import { Paragraph } from "@/components/paragraph";
import { Section } from "@/components/section";
import { navigationItems } from "@/constants/navigation";
import Image from "next/image";

const faqItems = [
  {
    question: "性的・暴力表現を含むファンアートを描いても大丈夫ですか？",
    answer: (
      <>
        好きに描いてください。R18の場合は
        <Link href="https://twitter.com/hashtag/%E3%81%94%E3%81%BF%E3%81%88%E3%81%A1%E3%81%82%E3%83%BC%E3%81%A8?f=tweets&vertical=default&src=hash">
          #ごみえちあーと
        </Link>
        を使ってください。R18絵を投稿して貰っても、いいねしかしないけれど許してネ。
      </>
    ),
  },
  {
    question: "エゴサーチがエグすぎる・呟きたいけれど反応はされたくないです",
    answer: (
      <>
        ツイートに反応しないで欲しい旨が記述してあったり、gmhtmなどの検索避けがされていた場合は見つけても反応しませんので、お手数おかけしますがご利用ください。
        <br />
        ファンアートの場合は無条件で反応することがありますので、予めご了承ください。
      </>
    ),
  },
  {
    question: "吾味人美(人妻)とか吾味人見とか吾味人巳って何ですか？",
    answer: (
      <>
        <Image
          className="photo"
          src="/img/gomihitomi/diagram.png"
          width={720}
          height={300}
          alt="吾味人美の相関図"
          priority
        />
      </>
    ),
  },
  {
    question: "上記以外でたまに出てくるキャラクター達の設定はあるんですか？",
    answer: (
      <>
        同じ世界線を生きるバーチャルインターネットラクガキマンです。
        <Link href="https://gomihitomi.github.io/vwiki/">
          バーチャルインターネットラクガキマンwiki
        </Link>
        を見ればちょっとだけ情報が載っているかも知れません。
      </>
    ),
  },
  {
    question: "白黒なのはモノクロ画像だからですか？",
    answer: (
      <>
        いいえ、生まれつき髪の毛と肌が白いからです。血は普通に赤なので、紅潮したり口内は赤かったりします。
        <br />
        まぁ、あんまり気にしないで大丈夫な奴です。
      </>
    ),
  },
  {
    question: "ファンネームとかファンアイコンはあるんですか？",
    answer: (
      <>
        特にありません。三人称として「全人類」という言葉を使いますが、ファンネームという意味では使っていません。
        <br />
        活動当初は🗑️を付ければファンアイコン感もありましたが、多分もう被っていると思うでオススメしません。
      </>
    ),
  },
  {
    question: "女性ですか？",
    answer: <>失礼すぎるだろ。</>,
  },
  {
    question: "バーチャルインターネットラクガキマンということは男性なのでは？",
    answer: (
      <>
        バーチャルインターネットラクガキマンは吾味人美を指す言葉ではなく、吾味人美を含むオリジナルキャラクターすべてを指す総称となっています。
        <br />
        分かりづらすぎる、謝罪しろ。許してくれ全人類。
      </>
    ),
  },
  {
    question: "吾味人美（偽物）というアカウントは成りすましですか？",
    answer: (
      <>
        それは、
        <Link href="https://x.com/gomihitomi_fake">吾味人美の裏アカウント</Link>
        です。どうでも良い話や、趣味の話をする時に使っています。もっと動かしてない
        <Link href="https://bsky.app/profile/gomihitomi.bsky.social">
          Bluesky
        </Link>
        もあります。何でこんな名前にしたのかは自分も分かっていません。
      </>
    ),
  },
  {
    question: "Skebって開くことあるんですか？",
    answer: (
      <>
        まぁ……その……気が向いたら……ですかね……。ほとんど開いてることはないので、あんまり期待しないでください。
        <Link href="https://skeb.jp/@gomihitomi">Skeb</Link>
        にて、たま～～に極稀～～に、リクエストを受けていると思います、すみません。
      </>
    ),
  },
  {
    question: "昔、ラジオやってませんでした？",
    answer: (
      <>
        一時期、
        <Link href="https://gomihitomi.github.io/yoidore/">
          吾味人美の酔いどれラジオ
        </Link>
        という酩酊状態で喋るラジオをやっていました。
        <br />
        気が向いたらこういうコンテンツもまたやりたいです。
      </>
    ),
  },
  {
    question: "ダイエットしていたと聞いたのですが？",
    answer: (
      <>
        怠惰な自分に腹が立ち食事制限ダイエットをしていました。その軌跡の一部は
        <Link href="https://gomihitomi.github.io/yasero/">#痩せろ吾味人美</Link>
        にて、確認することが出来ます。無理なダイエットは、やめよう。
      </>
    ),
  },
  {
    question: "たまに炎を吐いてませんか？",
    answer: <>吾味人美は炎を吐けるので、たまに吐いています。</>,
  },
  {
    question: "何かアクションゲームに出ていませんでしたか？",
    answer: (
      <>
        はい、
        <Link href="https://lunetuki.booth.pm/items/5048752">
          るねキャラｖｓカワイコチャンズ
        </Link>
        というゲームに何故か参戦しています。
        <br />
        お酒を飲んで炎を吐け！
      </>
    ),
  },
];

const sectionItem = {
  id: navigationItems.FAQ.id,
  title: navigationItems.FAQ.label,
};

export const Faq = () => {
  return (
    <Section {...sectionItem}>
      <div className="flex flex-col gap-4">
        {faqItems.map((item) => (
          <div key={item.question}>
            <h3 className="font-bold">{item.question}</h3>
            <Paragraph isFirst>{item.answer}</Paragraph>
          </div>
        ))}
      </div>
    </Section>
  );
};
