import Image from "next/image";

const HomePage = () => {
  return (
    <div className={"4k:flex 4k:justify-center"}>
      <div className={"flex flex-col max-w-[2560px]"}>
        <header className="flex gap-5 flex-col md:flex-row max-md:gap-0 overflow-hidden">
          <section className="flex flex-col w-6/12 max-md:w-full px-8 xl:ml-16">
            <div className="flex flex-col items-start mt-12 font-extrabold text-orange-600 uppercase max-md:mt-10 max-md:max-w-full">
              <div className="flex items-center gap-3 lg:gap-5 text-base ld:text-2xl xl:text-3xl fullHD:text-4xl font-black whitespace-nowrap text-orange-950 tracking-[4px] xl:tracking-[8.4px]">
                <Image
                  src="/icons/littleHeart.svg"
                  alt=""
                  width="0"
                  height="0"
                  className="shrink-0 aspect-[1.16] fill-orange-950 w-5 lg:w-7"
                />
                <h1 className="flex-auto">Woodandhearts</h1>
              </div>
              <Image
                src="/icons/twoHearts.svg"
                alt=""
                width="0"
                height="0"
                className="mt-10 xl:mt-28 max-w-full aspect-[1.02] w-16 sm:w-32 xl:w-40"
              />
              <div className="flex flex-col justify-end self-stretch mt-16 text-base xl:text-2xl fullHD:text-4xl tracking-[6px] xl:tracking-[10.4px] max-md:mt-10 max-md:max-w-full">
                <Image
                  src="/icons/logo.svg"
                  alt=""
                  width={557}
                  height={206}
                  className="w-full aspect-[2.7] fill-orange-950 max-md:max-w-full"
                />
                <h2 className="mt-7">Schwebebalken für Kinder</h2>
              </div>
              <div className={"flex max-md:justify-center w-full"}>
                <button className="flex gap-5 justify-center items-center px-11 max-md:px-5 py-5 mt-10 xl:mt-24 max-w-full text-base xl:text-2xl fullHD:text-4xl whitespace-nowrap bg-orange-100 rounded-[40px] tracking-[5px] xl:tracking-[9.6px]  max-md:flex-wrap">
                  <span className="flex-auto my-auto">KAUFEN</span>
                  <Image
                    src="/icons/arrowRight.svg"
                    alt=""
                    width="0"
                    height="0"
                    className="shrink-0 max-w-full  aspect-[6.67] stroke-[4px] stroke-orange-600  w-28 lg:w-44"
                  />
                </button>
              </div>
            </div>
          </section>
          <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full items-end">
            <div
              className={
                "relative flex items-center justify-center md:translate-x-10 md:translate-y-[-45px] w-full md:w-[115%] xl:w-[105%]"
              }
            >
              <Image
                src="/photo6.png"
                alt=""
                width={931}
                height={1034}
                priority
                className={
                  "absolute z-20 [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] p-7 2xl:p-9 min-[2020px]:p-0"
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

        <div className={"mt-11"}>
          <div className="flex  max-2xl:flex-col gap-5 2xl:pr-16">
            <div className={"flex justify-center flex-col gap-5"}>
              <div className="flex items-center order-3 w-[90%] 2xl:w-full 2xl:row-start-2 px-8 py-10 xl:px-16 xl:py-20 bg-orange-100 rounded-[60px] rounded-l-none min-[2561px]:rounded-[60px] max-md:max-w-full text-base xl:text-2xl fullHD:text-4xl tracking-wider">
                <div>
                  Überraschen Sie Ihr Baby mit einer neuen Erfahrung mit dem
                  geraden Balancer von Woodandhearts! Es wird Ihrem Kind helfen,{" "}
                  <span className="font-bold text-orange-600">
                    Korrdination
                  </span>{" "}
                  und{" "}
                  <span className="font-bold text-orange-600">
                    Gleichgewichtssinn
                  </span>{" "}
                  zu entwickeln.
                </div>
              </div>
              <div className="flex items-center order-3 w-[90%] 2xl:w-full 2xl:row-start-2 px-8 py-10 xl:px-16 xl:py-20 bg-orange-100 rounded-[60px] rounded-l-none min-[2561px]:rounded-[60px] max-md:max-w-full text-base xl:text-2xl fullHD:text-4xl tracking-wider">
                <div>
                  Hergestellt nach{" "}
                  <span className="font-bold text-orange-600">
                    Montessori-Technologie
                  </span>
                  , ist der Schwebebalken sehr stark und haltbar, mit einem
                  solchen Spielzeug wird es sehr einfach sein, Ihr Baby für
                  aktive Spiele und Übungen einzustellen!
                </div>
              </div>
            </div>

            <div className="self-center justify-self-center 2xl:justify-self-auto order-2 2xl:order-4 row-span-2 px-5 w-full max-2xl:max-w-screen-md">
              <Image
                src={"/photo2.png"}
                alt={""}
                sizes={
                  "100% ,(min-width: 1024px) 60%, (min-width: 1536px) 100%"
                }
                width="0"
                height="0"
                className="rounded-3xl w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col translate-y-[1rem] 2xl:translate-y-[5rem]">
          <div className="z-10 self-end w-full">
            <div className="grid grid-cols-3 gap-5 max-md:flex-col max-md:gap-0 w-full">
              <div className="2xl:col-start-2 flex items-center justify-center w-full">
                <Image
                  src={"/icons/handiwork.svg"}
                  alt={"Handgemach mit ECO-Materialien Icon"}
                  width="0"
                  height="0"
                  className="aspect-[0.74] w-72 fullHD:w-80"
                />
              </div>
              <div className="col-start-2 col-end-5 2xl:col-start-3 flex flex-col items-end justify-center w-full text-base xl:text-2xl fullHD:text-4xl tracking-wider gap-4 xl:gap-8">
                <div className="justify-center py-9 pr-28 pl-20 w-full bg-orange-100 rounded-[60px] rounded-r-none min-[2561px]:rounded-[60px] max-md:px-8  max-md:max-w-full max-w-[470px]">
                  Hergestellt aus hochwertigem polierten{" "}
                  <span className="font-bold text-orange-600">
                    Birkensperrholz
                  </span>
                  .{" "}
                </div>
                <div className="justify-center self-end px-14 py-9 bg-orange-100 rounded-[60px] rounded-r-none min-[2561px]:rounded-[60px] max-md:px-5 max-md:max-w-full max-w-[470px]">
                  <span className="font-bold text-orange-600">
                    Maximale Belastung
                  </span>{" "}
                  für die Verwendung beträgt jedoch{" "}
                  <span className="font-bold text-orange-600">60 kg</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 w-full max-md:max-w-full 2xl:translate-y-[-65px]">
            <div className="grid grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(2,_0.5fr)] gap-1 md:gap-6 xl:gap-11">
              <div className="[grid-area:1_/_1_/_2_/_2]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1064f5fb31d07dd0ca272ec709e8d45e46302bb39e48c328b2ef8a5ab8f0ca85?apiKey=4503341e42e942deab3a0c84e55dc7f4&"
                  className="aspect-[0.74]"
                />
              </div>
              <div className="self-center [grid-area:1_/_2_/_3_/_3]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a7baf5e325abd42ba458ff4f24028820f6d5002542c78a18e3f5603d34549ec?apiKey=4503341e42e942deab3a0c84e55dc7f4&"
                />
              </div>
              <div className="self-end [grid-area:1_/_3_/_3_/_4]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5400e2e813966cf12ba2da6693bbe9130cf7017f17a912f6d491beb06d3f302f?apiKey=4503341e42e942deab3a0c84e55dc7f4&"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col translate-y-[-2rem] sm:translate-y-[-5rem] ml-8 xl:ml-20">
          <div className="flex flex-col">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0eb7b91d9af835030446a4e29a1e74334d75e1c671071a100bc0303af4ab361?apiKey=4503341e42e942deab3a0c84e55dc7f4&"
              className="ml-[26px] max-w-full aspect-[3.23] fill-sky-700 w-[407px] max-md:ml-2.5 max-md:w-[197px] max-sm:w-[137px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/34ade5495d91fa1d18f4a175374dec8ab29e7925d635df519b7c471e880646cd?apiKey=4503341e42e942deab3a0c84e55dc7f4&"
              className="-mt-1 w-full aspect-[4] max-md:mt-0 max-md:max-w-full max-sm:mt-0.5"
            />
          </div>
        </div>

        <div className="flex justify-between py-20 text-base xl:text-2xl fullHD:text-4xl tracking-wider leading-10 max-md:pr-5 overflow-hidden">
          <div className="flex flex-col justify-center max-w-full w-[771px] ml-8 xl:ml-20">
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
              <span className="font-bold text-orange-600">nur hochwertige</span>
              , nachhaltige wasserbasierte und umweltfreundliche Lacke
            </div>
          </div>
          <div>
            <div
              className={
                "bg-[url(/balanceBoard.png)_lightgray_-0.292px_0px_/_100.052%_100.3%_no-repeat] mix-blend-multiply"
              }
            ></div>
            <Image
              src={"/balanceBoard.png"}
              alt={""}
              width={1054}
              height={761}
              className={"mix-blend-multiply -rotate-[6.142deg]"}
            />
          </div>
        </div>

        <div className="flex flex-col p-20 bg-orange-100 rounded-[40px] max-md:px-5 mx-16">
          {/*<div className="mt-2.5 text-9xl uppercase text-orange-950 max-md:mr-1.5 max-md:max-w-full max-md:text-4xl">*/}
          {/*  Balance board{" "}*/}
          {/*</div>*/}
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
              ✔️ Rückgabe oder Umtausch der Bestellung innerhalb von 30 Tagen
              nach Erhalt
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-8 lg:px-16 py-10 lg:py-20 w-full fill-yellow-400 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/81491aed540e6f3f7d3866c022a0d2627bed390aadd37238d9bf8f3d21ebfb02?apiKey=4503341e42e942deab3a0c84e55dc7f4&"
              className="max-2xl:object-cover absolute inset-0 size-full"
            />
            <div className="relative mt-40 w-full max-w-[2017px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col grow justify-center text-black max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl xl:text-3xl fullHD:text-5xl font-bold tracking-wider leading-10 max-md:max-w-full">
                      Kundenbetreuung:
                    </div>
                    <div className="mt-9 text-base xl:text-2xl fullHD:text-4xl tracking-wider leading-10 max-md:max-w-full">
                      Mo-Fr von 9:00 bis 21:00 Uhr
                      <br />
                      E-mail: support@holzspielzeug.com
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col justify-center text-black max-md:mt-10">
                    <div className="text-2xl xl:text-3xl fullHD:text-5xl font-bold tracking-wider leading-10">
                      Standort
                    </div>
                    <div className="mt-11 text-base xl:text-2xl fullHD:text-4xl tracking-wider leading-10 max-md:mt-10">
                      Prinzenstraße 33, 10244, Berlin Deutschland
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col justify-center text-black max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl xl:text-3xl fullHD:text-5xl font-bold tracking-wider leading-10 max-md:max-w-full">
                      Shop
                    </div>
                    <div className="mt-9 text-base xl:text-2xl fullHD:text-4xl tracking-wider leading-10 max-md:max-w-full">
                      Registriert in Deutschland. Alle Rechte vorbehalten
                    </div>
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
