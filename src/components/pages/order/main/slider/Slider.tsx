"use client";

import Image from "next/image";
import React, { useCallback, useMemo, useRef, useState } from "react";
import ImageGalleryLib from "react-image-gallery";
// import NavIcon from '../../../../../assets/icons/pagination-btn.svg?react';
// import MainNavIcon from '../../../../../assets/icons/arrow-right.svg?react';

const imagesList: Array<{ src: string }> = [
  {
    src: "/slider/slide-1.webp",
  },
  {
    src: "/slider/slide-2.webp",
  },
  {
    src: "/slider/slide-3.webp",
  },
  {
    src: "/slider/slide-4.webp",
  },
  {
    src: "/slider/slide-5.webp",
  },
  {
    src: "/slider/slide-6.webp",
  },
];

const Slider = () => {
  // images
  const images = useMemo(
    () =>
      imagesList.map((el) => ({
        original: el.src,
        thumbnail: el.src,
        renderItem: ({ thumbnail }: any) => (
          <div className="relative w-full aspect-[0.876] rounded-2xl xl:rounded-3xl fullHD:rounded-13 overflow-hidden">
            <img
              alt=""
              className="max-w-auto w-full h-full object-cover"
              src={thumbnail}
            />
          </div>
        ),
      })),
    []
  );

  return (
    <ImageGalleryLib
      items={images}
      useBrowserFullscreen
      showThumbnails
      showFullscreenButton={false}
      disableThumbnailScroll={false}
      showPlayButton={false}
      showNav
      thumbnailPosition="bottom"
      infinite
      renderLeftNav={(onClick) => (
        <button
          onClick={onClick}
          className="absolute w-8 xl:w-12 2xl:w-16 fullHD:w-20 aspect-square left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center rounded-full bg-orange-50"
        >
          <Image
            width={34}
            height={23}
            src={"/icons/sliderArrow.svg"}
            alt=""
            className="w-3 xl:w-5 2xl:w-6 fullHD:w-8 h-auto"
          />
        </button>
      )}
      renderRightNav={(onClick) => (
        <button
          onClick={onClick}
          className="absolute w-8 xl:w-12 2xl:w-16 fullHD:w-20 aspect-square right-4 top-1/2 -translate-y-1/2 rotate-180 z-20 flex items-center justify-center rounded-full bg-orange-50"
        >
          <Image
            width={34}
            height={23}
            src={"/icons/sliderArrow.svg"}
            alt=""
            className="w-3 xl:w-5 2xl:w-6 fullHD:w-8 h-auto"
          />
        </button>
      )}
    />
  );
};

export default Slider;
