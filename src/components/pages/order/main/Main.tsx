import CreateOrderBlock from "./createOrderBlock/CreateOrderBlock";
import Slider from "./slider/Slider";

const Main = () => {
  return (
    <div className="relative w-full flex flex-nowrap items-start justify-between max-md:flex-col gap-6 xl:gap-8 2xl:gap-10 fullHD:gap-14">
      <div className="w-full md:min-w-[44%]">
        <Slider />
      </div>
      <CreateOrderBlock />
    </div>
  );
};

export default Main;
