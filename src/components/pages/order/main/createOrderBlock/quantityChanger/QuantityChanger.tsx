import { useMemo } from "react";

const btnClassName =
  "font-extrabold text-2xl xl:text-3xl 2xl:text-4xl fullHD:text-4.5xl transition-colors ease-in-out duration-200";

const QuantityChanger = ({
  quantity,
  changeQuantity,
}: {
  quantity: number;
  changeQuantity: (value: number) => void;
}) => {
  const decrementClassName = useMemo(
    () =>
      btnClassName +
      " " +
      (quantity > 1
        ? "text-orange-950 cursor-pointer"
        : "text-amber-200 cursor-default"),
    [, quantity]
  );

  return (
    <div className="flex flex-row flex-nowrap items-center gap-2 xl:gap-4 2xl:gap-5 fullHD:gap-6 pr-6 xl:pr-8 2xl:pr-10 fullHD:pr-14">
      <button
        type="button"
        className={decrementClassName}
        disabled={quantity === 1}
        onClick={() => changeQuantity(-1)}
      >
        -
      </button>
      <div className="p-1 xl:p-2 2xl:p-3 fullHD:p-5 min-w-10 xl:min-w-[3.25rem] 2xl:min-w-16 fullHD:min-w-20 flex items-center justify-center rounded text-2xl xl:text-3xl 2xl:text-4xl fullHD:text-4.5xl text-yellow-950 bg-white rounded-lg xl:rounded-xl 2xl:rounded-2xl fullHD:rounded-3xl select-none font-extrabold">
        {quantity}
      </div>
      <button
        type="button"
        className={btnClassName}
        onClick={() => changeQuantity(1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityChanger;
