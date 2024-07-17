import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <header className="flex gap-5 flex-col md:flex-row max-md:gap-0">
        <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full ml-16">
          <div className="flex flex-col items-start mt-12 font-extrabold text-orange-600 uppercase max-md:mt-10 max-md:max-w-full">
            <div className="flex items-center gap-5 px-5 text-xs sm:text-3xl font-black whitespace-nowrap text-orange-950 tracking-[8.4px]">
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
            <div className="flex flex-col justify-end self-stretch px-5 mt-16 text-base sm:text-2xl tracking-[10.4px] max-md:mt-10 max-md:max-w-full">
              <Image
                src="/icons/logo.svg"
                alt=""
                width={557}
                height={206}
                className="w-full aspect-[2.7] fill-orange-950 max-md:max-w-full"
              />
              <h2 className="mt-7 max-md:max-w-full">
                Schwebebalken für Kinder
              </h2>
            </div>
            <button className="flex gap-5 justify-center px-11 py-5 mt-24 max-w-full text-base sm:text-2xl whitespace-nowrap bg-orange-100 rounded-[40px] tracking-[9.6px] w-[557px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
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
            className="[filter:drop-shadow(0_0_0#FFC105)_drop-shadow(0_20px_0_#FFC105)_drop-shadow(-20px_0_0_#FFC105)_drop-shadow(0_-20px_0_#FFC105)]
             lg:[filter:drop-shadow(0_0_0#FFC105)_drop-shadow(0_40px_0_#FFC105)_drop-shadow(-40px_0_0_#FFC105)_drop-shadow(0_-40px_0_#FFC105)]
             xl:[filter:drop-shadow(0_0_0#FFC105)_drop-shadow(0_60px_0_#FFC105)_drop-shadow(-60px_0_0_#FFC105)_drop-shadow(0_-60px_0_#FFC105)]
             translate-y-[1rem] md:translate-x-4"
          />
        </section>
      </header>

      <div className={"pr-16"}>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-2xl tracking-wider leading-10 text-orange-600 max-md:mt-10 max-md:max-w-full">
              <div className="justify-center items-start px-16 py-20 bg-orange-100 rounded-[60px] rounded-l-none max-md:px-5 max-md:max-w-full">
                Überraschen Sie Ihr Baby mit einer neuen Erfahrung mit dem
                geraden Balancer von Woodandhearts! Es wird Ihrem Kind helfen,{" "}
                <span className="font-bold text-orange-600">Korrdination</span>{" "}
                und{" "}
                <span className="font-bold text-orange-600">
                  Gleichgewichtssinn
                </span>{" "}
                zu entwickeln.
              </div>
              <div className="justify-center px-16 py-20 mt-8 bg-orange-100 rounded-[60px] rounded-l-none max-md:pr-8 max-md:pl-5 max-md:max-w-full">
                Hergestellt nach{" "}
                <span className="font-bold text-orange-600">
                  Montessori-Technologie
                </span>
                , ist der Schwebebalken sehr stark und haltbar, mit einem
                solchen Spielzeug wird es sehr einfach sein, Ihr Baby für aktive
                Spiele und Übungen einzustellen!
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full relative">
            <Image src={"/photo2.png"} alt={""} fill className="rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
