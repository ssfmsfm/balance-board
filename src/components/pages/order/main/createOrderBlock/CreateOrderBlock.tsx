"use client";

import { useCallback, useState } from "react";
import QuantityChanger from "./quantityChanger/QuantityChanger";
import { formatNumber } from "@/utils/formatPrice";
import { IProductData } from "@/constants/interfaces";

const GTM_BUY_BTN_ID = process.env.NEXT_PUBLIC_GTM_BUY_BTN_ID || "";

type Props = {
  productData: Omit<IProductData, "imagesSrc">;
};

const CreateOrderBlock: React.FC<Props> = ({
  productData: {
    preHeader,
    header,
    description,
    descriptionOptions,
    price,
    finalPrice,
    stripeLink,
  },
}) => {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = useCallback(
    (value: number) => {
      setQuantity((prev) => prev + value);
    },
    [, setQuantity]
  );

  const handleOrder = useCallback(
    () => (window.location.href = stripeLink),
    [stripeLink]
  );

  return (
    <>
      <div className="relative md:grow max-md:w-full flex flex-col flex-nowrap">
        <div className="relative grow rounded-2xl xl:rounded-3xl fullHD:rounded-15 bg-orange-50 px-5 xl:px-8 2xl:px-10 fullHD:px-12 pt-8 xl:pt-12 2xl:pt-14 fullHD:pt-20 pb-5 xl:pb-8 2xl:pb-10 fullHD:pb-12 flex flex-col flex-nowrap">
          <p className="font-extrabold text-base md:text-xl xl:text-3xl fullHD:text-4xl uppercase">
            {preHeader}
          </p>
          <h1
            className={`font-allenoire text-3xl md:text-4xl xl:text-6xl fullHD:text-7xl mt-2 xl:mt-4 2xl:mt-5 fullHD:mt-7 uppercase font-normal tracking-wider`}
          >
            {header}
          </h1>
          <p className="text-base xl:text-2xl fullHD:text-4xl tracking-wider mt-5 xl:mt-7 2xl:mt-9 fullHD:mt-11">
            {description}
          </p>
          <ul className="text-base xl:text-2xl fullHD:text-4xl tracking-wider flex flex-col gap-6 fullHD:gap-10 w-full mt-8 md:mt-10 xl:mt-12 2xl:mt-16 fullHD:mt-20">
            {descriptionOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <div className="flex flex-row flex-nowrap items-center gap-4 xl:gap-6 2xl:gap-7 fullHD:gap-9 mt-8 md:mt-12 xl:mt-16 2xl:mt-20 fullHD:mt-28">
            <div className="flex flex-row flex-wrap items-center gap-4 xl:gap-6 2xl:gap-7 fullHD:gap-9 mr-auto">
              <div className="flex flex-col gap-2 xl:gap-3 fullHD:gap-5">
                <h4 className="font-extrabold text-2xl xl:text-3xl fullHD:text-4xl">
                  Größe
                </h4>
                <div className="font-extrabold bg-orange-600 text-gray-100 px-6 xl:px-7 2xl:px-8 fullHD:px-10 py-2 xl:py-3 2xl:py-4 fullHD:py-5 rounded-lg xl:rounded-xl 2xl:rounded-2xl fullHD:rounded-2.5xl text-sm xl:text-base 2xl:text-lg fullHD:text-xl">
                  3,5 M
                </div>
              </div>
              <div className="flex flex-col gap-2 xl:gap-3 fullHD:gap-5">
                <h4 className="font-extrabold text-2xl xl:text-3xl fullHD:text-4xl">
                  Rutsche
                </h4>
                <div className="font-extrabold bg-amber-400 text-gray-100 px-6 xl:px-7 2xl:px-8 fullHD:px-10 py-2 xl:py-3 2xl:py-4 fullHD:py-5 rounded-lg xl:rounded-xl 2xl:rounded-2xl fullHD:rounded-2.5xl text-sm xl:text-base 2xl:text-lg fullHD:text-xl">
                  KLETTERGRIFFE
                </div>
              </div>
            </div>
            <QuantityChanger
              quantity={quantity}
              changeQuantity={changeQuantity}
            />
          </div>
        </div>
        <div className="relative grow flex max-sm:flex-col gap-2 justify-between items-stretch flex-wrap mt-6 xl:mt-8 2xl:mt-10 fullHD:mt-14 rounded-2xl xl:rounded-3xl fullHD:rounded-15 bg-orange-50 px-5 xl:px-8 2xl:px-10 fullHD:px-12 pt-2 xl:pt-3 2xl:pt-4 fullHD:pt-5 pb-3 xl:pb-5 2xl:pb-6 fullHD:pb-8">
          <div className="relative flex flex-row max-sm:w-fit flex-nowrap max-sm:flex-wrap gap-2 fullHD:gap-3">
            <h3 className="whitespace-nowrap font-allenoire flex-auto text-4xl xl:text-5xl fullHD:text-6xl leading-10 text-black tracking-[4px] self-end">
              {`€${formatNumber(finalPrice * quantity)}`}
            </h3>
            <div className="relative flex flex-col self-start items-end py-2 xl:py-3 fullHD:py-4">
              <p className="font-extrabold text-xl xl:text-2xl fullHD:text-3xl tracking-wider leading-x-tight text-orange-600 line-through">
                &nbsp;€{formatNumber(price * quantity)}&nbsp;
              </p>
              <p className="font-extrabold text-base xl:text-xl fullHD:text-2xl tracking-wider leading-tight xl:leading-x-tight fullHD:leading-x-tight text-orange-600">
                SAVE 45%
              </p>
            </div>
          </div>
          <button
            id={GTM_BUY_BTN_ID}
            className="font-extrabold max-sm:self-center max-sm:w-full px-8 xl:px-12 fullHD:px-16 py-2 xl:py-4 fullHD::py-6 text-xs md:text-base xl:text-2xl fullHD:text-4xl text-orange-100 bg-orange-600 rounded-2xl xl:rounded-3xl fullHD:rounded-10 tracking-[4px] xl:tracking-[6px] fullHD:tracking-[9.6px] w-fit mt-2"
            onClick={handleOrder}
          >
            KAUFEN
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateOrderBlock;
