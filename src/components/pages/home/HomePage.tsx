import Image from "next/image";

const HomePage = () => {
  return (
    <div className={"flex flex-col gap-10"}>
      <header className="flex gap-5 flex-col md:flex-row max-md:gap-0 overflow-hidden">
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
        <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full items-end">
          <div
            className={
              "relative flex items-center justify-center md:translate-x-10 md:translate-y-[-45px]"
            }
          >
            <Image
              src="/photo6.png"
              alt=""
              width={931}
              height={1034}
              priority
              className={
                "absolute z-20 [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] 2xl:p-9 p-5"
              }
            />
            <Image
              src="/photo5.svg"
              alt=""
              width={1042}
              height={1250}
              priority
              className={"z-10"}
            />
          </div>
        </section>
      </header>

      <div>
        <div className="grid auto-rows-auto 2xl:grid-cols-2 2xl:grid-rows-2 gap-5 2xl:pr-16">
          <div className="flex items-center w-[90%] lg:w-[60%] 2xl:w-full max-2xl:justify-self-end order-1 2xl:row-start-1 px-8 py-10 sm:px-16 sm:py-20 bg-orange-100 rounded-[60px] max-2xl:rounded-r-none 2xl:rounded-l-none text-xs sm:text-2xl tracking-wider sm:leading-10">
            <div>
              Überraschen Sie Ihr Baby mit einer neuen Erfahrung mit dem geraden
              Balancer von Woodandhearts! Es wird Ihrem Kind helfen,{" "}
              <span className="font-bold text-orange-600">Korrdination</span>{" "}
              und{" "}
              <span className="font-bold text-orange-600">
                Gleichgewichtssinn
              </span>{" "}
              zu entwickeln.
            </div>
          </div>
          <div className="flex items-center order-3 w-[90%] lg:w-[60%] 2xl:w-full 2xl:row-start-2 px-8 py-10 sm:px-16 sm:py-20 bg-orange-100 rounded-[60px] rounded-l-none max-md:max-w-full text-xs sm:text-2xl tracking-wider sm:leading-10">
            <div>
              Hergestellt nach{" "}
              <span className="font-bold text-orange-600">
                Montessori-Technologie
              </span>
              , ist der Schwebebalken sehr stark und haltbar, mit einem solchen
              Spielzeug wird es sehr einfach sein, Ihr Baby für aktive Spiele
              und Übungen einzustellen!
            </div>
          </div>

          <div className="justify-self-auto lg:justify-self-center order-2 2xl:order-4 row-span-2 px-5">
            <Image
              src={"/photo2.png"}
              alt={""}
              sizes={"(max-width: 384px) 16rem, (max-width: 640px) 24rem"}
              width="0"
              height="0"
              className="rounded-3xl w-full 2xl:w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="z-10 self-end max-w-full w-[1107px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <Image
                src={"/icons/handiwork.svg"}
                alt={"Handgemach mit ECO-Materialien Icon"}
                className="w-full aspect-[0.74] max-md:mt-10 max-md:max-w-full"
                width={290}
                height={260}
              />
            </div>
            <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
              <div className="justify-center py-9 pr-28 pl-20 w-full text-2xl tracking-wider leading-10 text-orange-600 bg-orange-100 rounded-[60px] max-md:px-8 max-md:mt-10 max-md:max-w-full">
                Hergestellt aus hochwertigem polierten{" "}
                <span className="font-bold text-orange-600">
                  Birkensperrholz
                </span>
                .{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&"
                className="w-full aspect-[0.74] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&"
                className="self-stretch my-auto w-full aspect-[0.74] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl tracking-wider leading-10 text-black max-md:mt-10 max-md:max-w-full">
                <div className="justify-center self-end px-14 py-9 max-w-full bg-orange-100 rounded-[60px] w-[592px] max-md:px-5 max-md:max-w-full">
                  <span className="font-bold text-orange-600">
                    Maximale Belastung
                  </span>{" "}
                  für die Verwendung beträgt jedoch{" "}
                  <span className="font-bold text-orange-600">60 kg</span>
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&"
                  className="mt-80 max-w-full aspect-[0.74] w-[569px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {/*<img*/}
        {/*  loading="lazy"*/}
        {/*  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0eb7b91d9af835030446a4e29a1e74334d75e1c671071a100bc0303af4ab361?apiKey=4503341e42e942deab3a0c84e55dc7f4&"*/}
        {/*  className="ml-10 max-w-full aspect-[3.23] fill-sky-700 w-[407px] max-md:ml-2.5"*/}
        {/*/>*/}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/34ade5495d91fa1d18f4a175374dec8ab29e7925d635df519b7c471e880646cd?apiKey=4503341e42e942deab3a0c84e55dc7f4&"
          className="mt-6 w-full aspect-[4] max-md:max-w-full"
        />
      </div>

      <div className="flex flex-col justify-center items-start py-20 text-2xl tracking-wider leading-10 text-orange-600 max-md:pr-5">
        <div className="flex flex-col mt-32 max-w-full w-[771px] max-md:mt-10">
          <div className="justify-center px-12 py-9 bg-orange-100 rounded-[40px] max-md:px-5 max-md:max-w-full">
            Alle Ecken sind abgerundet und sorgfältig{" "}
            <span className="font-bold text-orange-600">
              von Hand glatt geschliffen
            </span>
          </div>
          <div className="justify-center items-start px-12 py-8 mt-9 bg-orange-100 rounded-[30px] max-md:px-5 max-md:max-w-full">
            Allergische Reaktionen sind
            <span className="font-bold text-orange-600"> nicht möglich</span>
          </div>
          <div className="justify-center items-start px-12 py-10 mt-9 bg-orange-100 rounded-[40px] max-md:px-5 max-md:max-w-full">
            Wir verwenden{" "}
            <span className="font-bold text-orange-600">nur hochwertige</span>,
            nachhaltige wasserbasierte und umweltfreundliche Lacke
          </div>
        </div>
      </div>

      <div className="flex flex-col p-20 bg-orange-100 rounded-[40px] max-md:px-5 mx-16">
        <div className="mt-2.5 text-9xl uppercase text-orange-950 max-md:mr-1.5 max-md:max-w-full max-md:text-4xl">
          Balance board{" "}
        </div>
        {/*<div className="mt-7 text-base sm:text-2xl font-extrabold text-orange-600 uppercase tracking-[10.4px] max-md:mr-1.5 max-md:max-w-full">*/}
        {/*  Schwebebalken für IHRE KINDER*/}
        {/*</div>*/}
        <div className="flex gap-5 mt-24 w-full max-md:flex-wrap max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex-auto text-8xl leading-10 text-black tracking-[4px] max-md:text-4xl">
            89,00 €
          </div>
          <div className="flex gap-5 self-start font-extrabold uppercase max-md:flex-wrap">
            <div className="justify-center items-center px-7 text-4xl whitespace-nowrap bg-white rounded-3xl h-[78px] text-orange-950 tracking-[16px] w-[78px] max-md:px-5">
              1
            </div>
            {/*<div className="grow justify-center px-16 py-8 text-base sm:text-2xll text-orange-100 bg-orange-600 rounded-[40px] tracking-[9.6px] w-fit max-md:pr-7 max-md:pl-6 max-md:max-w-full">*/}
            {/*  IN DEN WARENKORB*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="flex gap-5 mt-10 text-2xl tracking-widest leading-10 text-black max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
          <div className="shrink basis-auto grow-0">✔️ 2 Jahre Garantie</div>
          <div className="flex-auto max-md:max-w-full">
            ✔️ Rückgabe oder Umtausch der Bestellung innerhalb von 30 Tagen nach
            Erhalt
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full fill-yellow-400 min-h-[447px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/81491aed540e6f3f7d3866c022a0d2627bed390aadd37238d9bf8f3d21ebfb02?apiKey=4503341e42e942deab3a0c84e55dc7f4&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative mt-40 w-full max-w-[1717px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow justify-center text-black max-md:mt-10 max-md:max-w-full">
                  <div className="text-3xl font-bold tracking-wider leading-10 max-md:max-w-full">
                    Kundenbetreuung:
                  </div>
                  <div className="mt-9 text-2xl tracking-wider leading-10 max-md:max-w-full">
                    Mo-Fr von 9:00 bis 21:00 Uhr
                    <br />
                    E-mail: support@holzspielzeug.com
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col justify-center text-black max-md:mt-10">
                  <div className="text-3xl font-bold tracking-wider leading-10">
                    Standort
                  </div>
                  <div className="mt-11 text-2xl tracking-wider leading-10 max-md:mt-10">
                    Prinzenstraße 33, 10244, Berlin Deutschland
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col justify-center text-black max-md:mt-10 max-md:max-w-full">
                  <div className="text-3xl font-bold tracking-wider leading-10 max-md:max-w-full">
                    Shop
                  </div>
                  <div className="mt-9 text-2xl tracking-wider leading-10 max-md:max-w-full">
                    Registriert in Deutschland. Alle Rechte vorbehalten
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
