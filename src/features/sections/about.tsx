"use client";

import Bubble from "@/components/bubble";
import ImageModal from "@/components/image-modal";
import { Link } from "@/components/link";
import { Paragraph } from "@/components/paragraph";
import { Section } from "@/components/section";
import { navigationItems } from "@/constants/navigation";
import Image from "next/image";
import { useState } from "react";

const sectionItem = {
  id: navigationItems.ABOUT.id,
  title: navigationItems.ABOUT.label,
};

type ModalState = {
  isOpen: boolean;
  imageUrl: string;
};

export const About = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    imageUrl: "",
  });
  const openModal = (imageUrl: string) => {
    setModalState({ isOpen: true, imageUrl });
  };
  const closeModal = () => {
    setModalState({ isOpen: false, imageUrl: "" });
  };

  return (
    <Section {...sectionItem}>
      <Paragraph isFirst>
        頑張らない程度に頑張るがモットーのVtuberことバーチャルインターネットラクガキマンです。
        「（制作コストが）安い、（見終わるのが）早い、（ぼちぼち）面白い」を第一にTwitter（現:X）などで活動しています。
      </Paragraph>
      <Paragraph>
        楽しいことが好きなので、楽しいことを一杯やっていけたら良いなぁと思っています。
      </Paragraph>
      <div className="content centering">
        <iframe
          width="100%"
          height="240"
          src="https://www.youtube.com/embed/XYEUOaZPpGY?playsinline=1"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-4 mt-4">
        <div className="flex flex-col items-center">
          <Bubble position="bottom" className="text-sm">
            <span>吾味人美の設定画です。</span>
          </Bubble>
          <div
            className="w-[200px] cursor-pointer grid items-center border border-foreground rounded-full aspect-square bg-white overflow-hidden hover:opacity-70"
            onClick={() => openModal("/img/gomihitomi/design.jpg")}
          >
            <Image
              src="/img/gomihitomi/design.jpg"
              alt="吾味人美の設定画"
              width={215}
              height={300}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Bubble position="bottom" className="text-sm">
            <span>
              <Link href="https://x.com/gomihitomi/status/1489221949993926656">
                新衣装企画
              </Link>
              にて否羽ゆきさんに考えて頂きました。
            </span>
          </Bubble>
          <div
            className="w-[200px] cursor-pointer grid items-center border border-foreground rounded-full aspect-square bg-white overflow-hidden hover:opacity-70"
            onClick={() => openModal("/img/gomihitomi/design2.jpg")}
          >
            <Image
              src="/img/gomihitomi/design2.jpg"
              alt="吾味人美の新衣装の設定画"
              width={357}
              height={300}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Bubble position="bottom" className="text-sm">
            <span>
              3Dモデルは
              <Link href="https://sushi-tabetai.wixsite.com/sushiwotaberuhibi">
                すしぽもる
              </Link>
              さんに作って頂きました。
            </span>
          </Bubble>
          <div className="w-[200px] grid items-center border border-foreground rounded-full aspect-square bg-white overflow-hidden">
            <Image
              src="/img/gomihitomi/model.png"
              alt="3Dの吾味人美と2Dの吾味人美"
              width={295}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={modalState.isOpen}
        imageUrl={modalState.imageUrl}
        onClose={closeModal}
      />
    </Section>
  );
};
