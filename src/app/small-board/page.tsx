import Order from "@/components/pages/order";
import { IProductData } from "@/constants/interfaces";

const productData: IProductData = {
  preHeader: "Balance Board für Kinder",
  header: "Kletterdreieck und Kletterbogen",
  description: (
    <>
      Überraschen Sie Ihr Kind mit einer einzigartigen Erfahrung mit dem Balance
      Board von RP and Partners! Perfekt, um Koordination, Gleichgewicht und
      kreatives Spielen zu fördern.
      {/* Überraschen Sie Ihr Baby mit einer neuen Erfahrung mit dem geraden
      Balancer von Woodandhearts! Es wird Ihrem Kind helfen,{" "}
      <span className="font-bold text-orange-600">Korrdination</span> und{" "}
      <span className="font-bold text-orange-600">Gleichgewichtssinn</span> zu
      entwickeln. */}
    </>
  ),
  descriptionOptions: [
    "✔️ Einfache Montage: Mit unserer klaren Anleitung ist das Balance Board schnell und unkompliziert aufgebaut.",
    "✔️ Hochwertige Qualität: 2 Jahre Garantie auf unser langlebiges und nachhaltiges Produkt.",
    "✔️ Sorgenfreies Einkaufen: Rückgabe oder Umtausch innerhalb von 30 Tagen nach Lieferung möglich.",
  ],
  price: 64,
  finalPrice: 35,
  stripeLink: process.env.NEXT_PUBLIC_SMALL_BOARD_STRIPE_LINK || "",
  gtmBuyBtnId: process.env.NEXT_PUBLIC_GTM_BUY_SMALL_BOARD_BTN_ID || "",
  imagesSrc: [
    "/slider/small-board/1.webp",
    "/slider/small-board/2.webp",
    "/slider/small-board/3.webp",
    "/slider/small-board/4.webp",
  ],
};

export default function SmallBoard() {
  return <Order productData={productData} />;
}
