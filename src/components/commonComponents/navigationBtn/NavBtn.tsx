import Image from "next/image";
import Link from "next/link";

const NavBtn = ({
  href,
  text,
  reverse,
}: {
  href: string;
  text: string;
  reverse?: boolean;
}) => {
  return (
    <Link href={href}>
      <button
        className={`flex gap-5 justify-center items-center font-extrabold text-orange-600 uppercase px-11 max-md:px-5 py-5 max-w-full text-base xl:text-2xl fullHD:text-4xl whitespace-nowrap ${reverse ? "bg-orange-50" : "bg-orange-100"} rounded-[40px] tracking-[5px] xl:tracking-[9.6px] max-md:flex-wrap ${reverse ? "flex-row-reverse" : "flex-row"}`}
      >
        <span className={`flex-auto my-auto ${reverse ? "max-sm:hidden" : ""}`}>
          {text}
        </span>
        <Image
          src={reverse ? "/icons/arrowLeft.svg" : "/icons/arrowRight.svg"}
          // src={"/icons/arrowRight.svg"}
          alt=""
          width="0"
          height="0"
          priority
          className={`shrink-0 max-w-full ${reverse ? "aspect-[2.65] w-11 lg:w-16" : "aspect-[6.67] w-28 lg:w-44"} stroke-[4px] stroke-orange-600`}
          sizes={`(min-width: 1024px) ${reverse ? "176px, 112px" : "66px, 42px"}`}
        />
      </button>
    </Link>
  );
};

export default NavBtn;
