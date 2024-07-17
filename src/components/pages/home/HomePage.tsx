import Image from "next/image";

const HomePage = () => {
  return (
    <header className="flex gap-5 max-md:flex-col max-md:gap-0">
      <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full ml-16">
        <div className="flex flex-col items-start mt-12 font-extrabold text-orange-600 uppercase max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 px-5 text-3xl font-black whitespace-nowrap text-orange-950 tracking-[8.4px]">
            <Image
              src="/icons/littleHeart.svg"
              alt=""
              width={28}
              height={24}
              className="shrink-0 w-7 aspect-[1.16] fill-orange-950"
            />
            <h1 className="flex-auto">Woodandhearts</h1>
          </div>
          <Image
            src="/icons/twoHearts.svg"
            alt=""
            width={166}
            height={163}
            className="mt-28 max-w-full aspect-[1.02] w-[166px] max-md:mt-10"
          />
          <div className="flex flex-col justify-end self-stretch px-5 mt-16 text-2xl tracking-[10.4px] max-md:mt-10 max-md:max-w-full">
            <Image
              src="/icons/logo.svg"
              alt=""
              width={557}
              height={206}
              className="w-full aspect-[2.7] fill-orange-950 max-md:max-w-full"
            />
            <h2 className="mt-7 max-md:max-w-full">Schwebebalken für Kinder</h2>
          </div>
          <button className="flex gap-5 justify-center px-11 py-5 mt-24 max-w-full text-2xl whitespace-nowrap bg-orange-100 rounded-[40px] tracking-[9.6px] w-[557px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
            <span className="flex-auto my-auto">KAUFEN</span>
            <Image
              src="/icons/arrowRight.svg"
              alt=""
              width={184}
              height={28}
              className="shrink-0 max-w-full  aspect-[6.67] stroke-[4px] stroke-orange-600 w-[184px]"
            />
          </button>
        </div>
      </section>
      <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <Image
          src="/photo1.png"
          alt=""
          width={930}
          height={1034}
          className="[filter:drop-shadow(0_0_0#FFC105)_drop-shadow(0_60px_0_#FFC105)_drop-shadow(-60px_0_0_#FFC105)_drop-shadow(0_-60px_0_#FFC105)] translate-y-[1rem] translate-x-4"
        />
      </section>
    </header>
  );
};

export default HomePage;
