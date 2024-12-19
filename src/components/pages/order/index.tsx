import Image from "next/image";
import Footer from "@/components/commonComponents/footer/Footer";
import NavBtn from "@/components/commonComponents/navigationBtn/NavBtn";
import Reviews from "./reviews/Reviews";
import Main from "./main/Main";
import { myFont } from "../home";

const Order = () => {
  return (
    <div className={`${myFont.variable} 4k:flex 4k:justify-center`}>
      <div className={"flex flex-col max-w-[2560px]"}>
        <header className="relative flex gap-6 xl:gap-16 fullHD:gap-20 flex-col max-md:gap-0 max-md:flex-row-reverse max-md:justify-between overflow-hidden py-6 xl:py-8 fullHD:py-10 px-4 md:px-8 xl:px-12 fullHD:px-16">
          <div className="flex items-center gap-3 lg:gap-5 text-base ld:text-2xl xl:text-3xl fullHD:text-4xl font-black whitespace-nowrap text-orange-950 tracking-[4px] xl:tracking-[8.4px]">
            <Image
              src="/icons/littleHeart.svg"
              alt=""
              width="0"
              height="0"
              priority
              className="shrink-0 aspect-[1.16] fill-orange-950 w-5 lg:w-7"
              sizes="(min-width: 1024px) 28px, 20px"
            />
            <h1 className="flex-auto uppercase">RP and Partners</h1>
          </div>
          <NavBtn href={"/"} text={"BACK"} reverse />
          {/* <Image
            src="/icons/twoHearts.svg"
            alt=""
            width="0"
            height="0"
            priority
            className="absolute right-30 -bottom-7 max-w-full aspect-[1.02] w-16 sm:w-32 xl:w-40 max-md:hidden"
            sizes="(min-width: 1280px) 160px, (min-width: 640px) 128px, 64px"
          /> */}
        </header>
        <main className="px-4 md:px-8 xl:px-12 fullHD:px-16">
          {/* <main className="px-4 md:px-8 xl:px-12 fullHD:px-16 overflow-hidden"> */}
          <Main />
          <Reviews />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Order;
