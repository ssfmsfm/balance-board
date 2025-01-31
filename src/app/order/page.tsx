import Order from "@/components/pages/order";
import { IProductData } from "@/constants/interfaces";

const productData: IProductData = {
  preHeader: "mit Rutsche für Kinder",
  header: "Kletterdreieck und Kletterbogen",
  description: (
    <>
      Überraschen Sie Ihr Baby mit einer neuen Erfahrung mit dem geraden
      Balancer von Woodandhearts! Es wird Ihrem Kind helfen,{" "}
      <span className="font-bold text-orange-600">Korrdination</span> und{" "}
      <span className="font-bold text-orange-600">Gleichgewichtssinn</span> zu
      entwickeln.
    </>
  ),
  descriptionOptions: [
    "✔️ Klare Montageanleitung. Mit unserer detaillierten Anleitung können Sie es selbst tun.",
    "✔️ 2 Jahre Garantie.",
    "✔️ Rückgabe oder Umtausch der Bestellung innerhalb von 30 Tagen nach Erhalt.",
  ],
  price: 159,
  finalPrice: 89,
  stripeLink: process.env.NEXT_PUBLIC_BALANCE_BOARD_STRIPE_LINK || "",
  gtmBuyBtnId: process.env.NEXT_PUBLIC_GTM_BUY_BTN_ID || "",
  imagesSrc: [
    "/slider/balance-board/1.webp",
    "/slider/balance-board/2.webp",
    "/slider/balance-board/3.webp",
    "/slider/balance-board/4.webp",
    "/slider/balance-board/5.webp",
    "/slider/balance-board/6.webp",
  ],
};

export default function BalanceBoard() {
  return <Order productData={productData} />;
}
