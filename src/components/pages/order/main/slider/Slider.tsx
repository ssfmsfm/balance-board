"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import ImageGalleryLib from "react-image-gallery";

type Props = {
  imagesSrc: Array<string>;
};

const Slider: React.FC<Props> = ({ imagesSrc }) => {
  // images
  const images = useMemo(
    () =>
      imagesSrc.map((src) => ({
        original: src,
        thumbnail: src,
        renderItem: ({ thumbnail }: any) => (
          <div className="relative w-full aspect-[0.876] rounded-2xl xl:rounded-3xl fullHD:rounded-13 overflow-hidden">
            <Image
              alt=""
              width={600}
              height={680}
              className="max-w-auto w-full h-full object-cover"
              src={thumbnail}
            />
          </div>
        ),
      })),
    [imagesSrc]
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
