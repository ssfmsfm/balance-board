import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="flex flex-col justify-center">
    <div className="flex overflow-hidden relative flex-col justify-center items-center px-8 lg:px-16 pt-10 pb-4 lg:pt-20 lg:pb-8 w-full fill-yellow-400 max-md:max-w-full">
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
                E-mail: thecarverssupport@proton.me
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col justify-center text-black max-md:mt-10">
              <div className="text-2xl xl:text-3xl fullHD:text-5xl font-bold tracking-wider leading-10">
                Standort
              </div>
              <div className="mt-4 xl:mt-9 text-base xl:text-2xl fullHD:text-4xl tracking-wider">
                st. SZCZĘSNA 26, Warsaw, 02-454, Polen
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col justify-center text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl xl:text-3xl fullHD:text-5xl font-bold tracking-wider leading-10 max-md:max-w-full">
                Shop
              </div>
              <div className="mt-4 xl:mt-9 text-base xl:text-2xl fullHD:text-4xl tracking-wider max-md:max-w-full">
                Registriert in Polen. Alle Rechte vorbehalten
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-10 mt-14 justify-center">
          <Link
            href="return-policy"
            className="text-base xl:text-xl fullHD:text-3xl tracking-wider font-medium capitalize"
          >
            Rückgaberecht
          </Link>
          <Link
            href="delivery"
            className="text-base xl:text-xl fullHD:text-3xl tracking-wider font-medium capitalize"
          >
            Lieferbedingungen
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
