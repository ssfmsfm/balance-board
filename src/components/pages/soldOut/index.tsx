import Link from "next/link";

const SoldOut = () => {
  return (
    <main
      className={
        "flex flex-col justify-center items-center px-2 h-svh box-border"
      }
    >
      <div className={"font-black text-2xl  xl:text-3xl fullHD:text-5xl"}>
        Artikel ausverkauft
      </div>
      <div
        className={
          "text-center max-w-2xl text-base xl:text-2xl fullHD:text-4xl"
        }
      >
        Wir bedauern, Ihnen mitteilen zu müssen, dass dieser Artikel derzeit
        ausverkauft ist. Wir schätzen Ihr Interesse und entschuldigen uns für
        etwaige Unannehmlichkeiten. Bitte schauen Sie später noch einmal vorbei,
        um mögliche Verfügbarkeiten zu überprüfen.
      </div>
      <div className={"mt-2 text-base xl:text-2xl fullHD:text-4xl"}>
        <Link href={"/"}>
          <button
            className={
              "flex gap-5 justify-center items-center font-extrabold text-orange-600 uppercase px-11 max-md:px-5 py-5 mt-3 xl:mt-5 max-w-full text-base xl:text-2xl fullHD:text-4xl whitespace-nowrap bg-orange-100 rounded-[40px] tracking-[5px] xl:tracking-[9.6px]  max-md:flex-wrap"
            }
          >
            GO BACK
          </button>
        </Link>
      </div>
    </main>
  );
};

export default SoldOut;
