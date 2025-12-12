"use client";

import Image from "next/image";
import React from "react";

export type ImageModalType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ImageModalProps = {
  image?: ImageModalType;
  isOpen: boolean;
  onClose: () => void;
};

const ImageModal = ({ image, isOpen, onClose }: ImageModalProps) => {
  if (!isOpen || !image) {
    return null;
  }
  const { src, alt, width, height } = image;

  const handleBackgroundClick = () => {
    onClose();
  };

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    // 画像の描画領域を計算
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();
    const clickX = e.nativeEvent.offsetX;
    const clickY = e.nativeEvent.offsetY;

    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    if (!naturalWidth || !naturalHeight) {
      e.stopPropagation();
      return;
    }

    // object‑contain が適用されたときのスケールと余白を計算
    const scale = Math.min(
      rect.width / naturalWidth,
      rect.height / naturalHeight
    );
    const renderedWidth = naturalWidth * scale;
    const renderedHeight = naturalHeight * scale;
    const offsetX = (rect.width - renderedWidth) / 2;
    const offsetY = (rect.height - renderedHeight) / 2;

    // クリックが画像内部か判定し、画像内部の場合は閉じない
    if (
      clickX >= offsetX &&
      clickX <= offsetX + renderedWidth &&
      clickY >= offsetY &&
      clickY <= offsetY + renderedHeight
    ) {
      e.stopPropagation();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-full h-full flex justify-center items-center">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-contain max-w-full max-h-full"
          onClick={handleImageClick}
        />
        <button
          onClick={onClose}
          className="absolute cursor-pointer w-12 h-12 top-4 flex justify-center items-center right-4 text-2xl font-black rounded-full bg-foreground text-background border border-foreground hover:text-foreground hover:bg-background"
          aria-label="閉じる"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
