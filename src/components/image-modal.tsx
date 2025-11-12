"use client";

import Image from "next/image";
import React from "react";

type ImageModalProps = {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
};

const ImageModal = ({ imageUrl, isOpen, onClose }: ImageModalProps) => {
  if (!isOpen) {
    return null;
  }

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
      <div className="relative p-4 w-full h-full">
        <Image
          src={imageUrl}
          fill
          alt="モーダルで開いた画像"
          className="object-contain w-auto h-auto"
          onClick={handleImageClick}
        />
        <button
          onClick={onClose}
          className="absolute cursor-pointer w-12 h-12 top-4 flex justify-center items-center right-4 text-2xl font-black bg-black rounded-full text-white hover:opacity-70"
          aria-label="閉じる"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
