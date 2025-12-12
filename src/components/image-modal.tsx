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
    e.stopPropagation();
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
