import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const myFont = localFont({
  src: "../../../fonts/allenoire.woff2",
  variable: "--font-allenoire",
});

const HomePage = () => {
  return (
    <div className={`${myFont.variable} 4k:flex 4k:justify-center`}>
      <div className={"flex flex-col max-w-[2560px]"}>
        <header className="flex gap-5 flex-col md:flex-row max-md:gap-0 overflow-hidden">
          <section className="flex flex-col w-6/12 max-md:w-full max-xl:px-8 xl:ml-16">
            <div className="flex flex-col items-start mt-12 font-extrabold text-orange-600 uppercase max-md:mt-10 max-md:max-w-full">
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
                <h1 className="flex-auto">Woodandhearts</h1>
              </div>
              <Image
                src="/icons/twoHearts.svg"
                alt=""
                width="0"
                height="0"
                priority
                className="mt-10 xl:mt-28 max-w-full aspect-[1.02] w-16 sm:w-32 xl:w-40"
                sizes="(min-width: 1280px) 160px, (min-width: 640px) 128px, 64px"
              />
              <div className="flex flex-col justify-end self-stretch mt-16 text-base xl:text-2xl fullHD:text-4xl tracking-[6px] xl:tracking-[10.4px] max-md:mt-10 max-md:max-w-full">
                <Image
                  src="/icons/logo.svg"
                  alt="Balance board Logo"
                  width={557}
                  height={206}
                  priority
                  className="w-full aspect-[2.7] fill-orange-950 max-md:max-w-full"
                  sizes="(max-width: 768px) 100vw, 557px"
                />
                <h2 className="mt-7">Schwebebalken für Kinder</h2>
              </div>
              <div className={"flex max-md:justify-center w-full"}>
                <Link href={"/sold-out"}>
                  <button className="flex gap-5 justify-center items-center px-11 max-md:px-5 py-5 mt-10 xl:mt-24 max-w-full text-base xl:text-2xl fullHD:text-4xl whitespace-nowrap bg-orange-100 rounded-[40px] tracking-[5px] xl:tracking-[9.6px]  max-md:flex-wrap">
                    <span className="flex-auto my-auto">KAUFEN</span>
                    <Image
                      src="/icons/arrowRight.svg"
                      alt=""
                      width="0"
                      height="0"
                      priority
                      className="shrink-0 max-w-full  aspect-[6.67] stroke-[4px] stroke-orange-600  w-28 lg:w-44"
                      sizes="(min-width: 1024px) 176px, 112px"
                    />
                  </button>
                </Link>
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
                alt="Der Junge sitzt auf dem Balance board"
                width={931}
                height={1034}
                priority
                className={
                  "absolute z-20 [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] p-7 2xl:p-9 min-[2020px]:p-0"
                }
                sizes="(min-width: 2020px) 931px, (min-width: 1536px) calc(100vw - 2rem), (min-width: 0px) calc(100vw - 3.5rem)"
              />
              <Image
                src="/photo5.svg"
                alt=""
                width={1042}
                height={1250}
                priority
                className={"z-10"}
                sizes="100vw"
              />
            </div>
          </section>
        </header>

        <main>
          <section className={"mt-11"}>
            <div className="flex  max-2xl:flex-col gap-5 2xl:pr-16">
              <div className={"flex flex-[1] justify-center flex-col gap-5"}>
                <div className="flex flex-[1] items-center order-3 w-[90%] 2xl:w-full 2xl:row-start-2 px-8 py-10 xl:px-16 xl:py-20 bg-orange-100 rounded-[60px] rounded-l-none min-[2561px]:rounded-[60px] max-md:max-w-full text-base xl:text-2xl fullHD:text-4xl tracking-wider">
                  <div>
                    Überraschen Sie Ihr Baby mit einer neuen Erfahrung mit dem
                    geraden Balancer von Woodandhearts! Es wird Ihrem Kind
                    helfen,{" "}
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
                <div className="flex flex-[1] items-center order-3 w-[90%] 2xl:w-full 2xl:row-start-2 px-8 py-10 xl:px-16 xl:py-20 bg-orange-100 rounded-[60px] rounded-l-none min-[2561px]:rounded-[60px] max-md:max-w-full text-base xl:text-2xl fullHD:text-4xl tracking-wider">
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

              <div className="flex-[1] self-center justify-self-center 2xl:justify-self-auto order-2 2xl:order-4 row-span-2 px-8 w-full max-2xl:max-w-screen-md">
                <Image
                  src={"/photo2.png"}
                  alt={"Der Junge geht zum Balance board"}
                  width="0"
                  height="0"
                  className="rounded-3xl w-full"
                  sizes="(max-width: 1536px) 100vw, (min-width: 1536px) 100vw"
                />
              </div>
            </div>
          </section>

          <section className="flex flex-col translate-y-[1rem] 2xl:translate-y-[5rem]">
            <div className="z-10 self-end w-full">
              <div className="grid grid-cols-3 gap-5 max-md:flex-col max-md:gap-0 w-full">
                <div className="md:col-start-2 flex items-center justify-center w-full">
                  <Image
                    src={"/icons/handiwork.svg"}
                    alt={"Handgemach mit ECO-Materialien Icon"}
                    width="0"
                    height="0"
                    className="aspect-[0.74] w-72 fullHD:w-80"
                    sizes="(min-width: 1920px) 320px, (min-width: 768px) 288px, 288px"
                  />
                </div>
                <div className="col-start-2 col-end-4 md:col-start-3 flex flex-col items-end justify-center w-full text-base xl:text-2xl fullHD:text-4xl tracking-wider gap-4 xl:gap-8">
                  <div className="justify-center self-end px-14 py-9 bg-orange-100 rounded-[60px] rounded-r-none min-[2561px]:rounded-[60px] max-md:px-5 max-md:max-w-full max-w-[470px] fullHD:max-w-[650px]">
                    Hergestellt aus hochwertigem polierten{" "}
                    <span className="font-bold text-orange-600">
                      Birkensperrholz
                    </span>
                    .{" "}
                  </div>
                  <div className="justify-center self-end px-14 py-9 bg-orange-100 rounded-[60px] rounded-r-none min-[2561px]:rounded-[60px] max-md:px-5 max-md:max-w-full max-w-[470px] fullHD:max-w-[650px]">
                    <span className="font-bold text-orange-600">
                      Maximale Belastung
                    </span>{" "}
                    für die Verwendung beträgt jedoch{" "}
                    <span className="font-bold text-orange-600">60 kg</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8 xl:px-16 w-full max-md:max-w-full 2xl:translate-y-[-65px]">
              <div className="grid grid-cols-[repeat(3,_1fr)] grid-rows-[repeat(2,_0.5fr)] gap-2 md:gap-10 xl:gap-11">
                <div className="[grid-area:1_/_1_/_2_/_2]">
                  <Image
                    src={"/photo1.png"}
                    alt={
                      "Kind krabbelt auf dem Balance Board und trainiert seine Koordination."
                    }
                    width={568}
                    height={766}
                    className="fullHD:w-full"
                    sizes="(min-width: 1920px) 100vw, 568px"
                  />
                </div>
                <div className="self-center [grid-area:1_/_2_/_3_/_3]">
                  <Image
                    src={"/photo7.png"}
                    alt={
                      "Kind hockt auf dem Balance Board und balanciert mit den Händen."
                    }
                    width={568}
                    height={766}
                    className="fullHD:w-full"
                    sizes="(min-width: 1920px) 100vw, 568px"
                  />
                </div>
                <div className="self-end [grid-area:1_/_3_/_3_/_4]">
                  <Image
                    src={"/photo3.png"}
                    alt={
                      "Kind geht über das Balance Board und verbessert sein Gleichgewicht."
                    }
                    width={568}
                    height={766}
                    className="fullHD:w-full"
                    sizes="(min-width: 1920px) 100vw, 568px"
                  />
                </div>
              </div>
            </div>
          </section>

          <div className="flex flex-col translate-y-[-25%] ml-8 xl:ml-16 pr-1 lg:pr-[15%]">
            <div className="flex flex-col">
              <Image
                src={"/threeTriangles.svg"}
                alt={""}
                width={407}
                height={126}
                className="w-[20%] ml-[1%] mb-[5%]"
                sizes="20vw"
              />
              <Image
                src={"/safeForChildren.svg"}
                alt={"ABSOLUT SICHERFÜR KINDER image"}
                width={1546}
                height={373}
                className="-mt-1 aspect-[4]"
              />
            </div>
          </div>

          <section className="flex flex-col justify-around lg:flex-row items-center justify-between text-base xl:text-2xl fullHD:text-4xl tracking-wider overflow-hidden">
            <div className="flex flex-col justify-center max-w-full w-[771px] max-xl:px-8 xl:ml-20 gap-4 xl:gap-8">
              <div className="justify-center px-6 py-4 lg:px-12 lg:py-9 bg-orange-100 rounded-[40px]">
                Alle Ecken sind abgerundet und sorgfältig{" "}
                <span className="font-bold text-orange-600">
                  von Hand glatt geschliffen
                </span>
              </div>
              <div className="justify-center items-start px-6 py-4 lg:px-12 lg:py-8 bg-orange-100 rounded-[30px] lg:w-[110%]">
                Allergische Reaktionen sind
                <span className="font-bold text-orange-600">
                  {" "}
                  nicht möglich
                </span>
              </div>
              <div className="justify-center items-start px-6 py-5 lg:px-12 lg:py-10 bg-orange-100 rounded-[40px] lg:w-[120%]">
                Wir verwenden{" "}
                <span className="font-bold text-orange-600">
                  nur hochwertige
                </span>
                , nachhaltige wasserbasierte und umweltfreundliche Lacke
              </div>
            </div>
            <div className={"flex justify-center"}>
              <Image
                src={"/balanceBoard.png"}
                alt={
                  "Balance Board mit den Maßen: Länge 226 cm, Breite 10 cm und Höhe 12 cm, auf einem hellen Hintergrund."
                }
                width={1354}
                height={761}
                className={"mix-blend-multiply -rotate-[6.142deg]"}
              />
            </div>
          </section>

          <section className="flex flex-col p-5 xl:p-20 bg-orange-100 rounded-[40px] mt-7 mb-4 mx-4 md:mx-8 xl:mx-16">
            <div className="font-allenoire mt-2.5 text-5xl min-[340px]:text-6xl xl:text-[140px] fullHD:text-[200px] uppercase text-orange-950">
              Balance board{" "}
            </div>
            <div className="text-xs md:text-base xl:text-2xl fullHD:text-4xl font-extrabold text-orange-600 uppercase tracking-[10.4px] max-md:mr-1.5 max-md:max-w-full">
              Schwebebalken für IHRE KINDER
            </div>
            <div className="flex items-center gap-5 mt-10 xl:mt-24 w-full max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
              <div className="whitespace-nowrap font-allenoire flex-auto text-5xl xl:text-8xl fullHD:text-9xl leading-10 text-black tracking-[4px]">
                89,00 €
              </div>
              <div className="flex items-center gap-4 lg:gap-9 font-extrabold uppercase max-[340px]:flex-wrap">
                <div className="flex items-center justify-center w-[50px] xl:w-[80px] h-[50px] xl:h-[80px] text-2xl sm:text-3xl xl:text-4xl fullHD:text-5xl bg-white rounded-[25%] text-orange-950 flex-shrink-0">
                  1
                </div>
                <Link href={"/sold-out"}>
                  <button className="grow justify-center px-8 xl:px-16 py-4 xl:py-6 text-xs md:text-base xl:text-2xl fullHD:text-4xl text-orange-100 bg-orange-600 rounded-[40px] tracking-[9.6px] w-fit max-md:pr-7 max-md:pl-6 max-md:max-w-full">
                    IN DEN WARENKORB
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex gap-2 lg:gap-5 mt-10 text-base xl:text-2xl fullHD:text-4xl tracking-widest text-black max-md:flex-wrap max-md:mr-1.5 max-md:max-w-full">
              <div className="shrink basis-auto grow-0">
                ✔️ 2 Jahre Garantie
              </div>
              <div className="flex-auto max-md:max-w-full">
                ✔️ Rückgabe oder Umtausch der Bestellung innerhalb von 30 Tagen
                nach Erhalt
              </div>
            </div>
          </section>
        </main>

        <footer className="flex flex-col justify-center">
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-8 lg:px-16 py-10 lg:py-20 w-full fill-yellow-400 max-md:max-w-full">
            <Image
              src={"/footerBackground.svg"}
              alt={""}
              width={0}
              height={0}
              className="max-2xl:object-cover absolute inset-0 size-full"
              sizes="(max-width: 2560px) 100vw, 3840px"
            />
            <div className="relative mt-40 w-full max-w-[2017px] max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col grow justify-center text-black max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl xl:text-3xl fullHD:text-5xl font-bold tracking-wider max-md:max-w-full">
                      Kundenbetreuung:
                    </div>
                    <div className="mt-4 xl:mt-9 text-base xl:text-2xl fullHD:text-4xl tracking-wider leading-10 max-md:max-w-full">
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
                    <div className="mt-4 xl:mt-9 text-base xl:text-2xl fullHD:text-4xl tracking-wider">
                      Prinzenstraße 33, 10244, Berlin Deutschland
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex relative flex-col justify-center text-black max-md:mt-10 max-md:max-w-full">
                    <div className="text-2xl xl:text-3xl fullHD:text-5xl font-bold tracking-wider leading-10 max-md:max-w-full">
                      Shop
                    </div>
                    <div className="mt-4 xl:mt-9 text-base xl:text-2xl fullHD:text-4xl tracking-wider max-md:max-w-full">
                      Registriert in Deutschland. Alle Rechte vorbehalten
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
