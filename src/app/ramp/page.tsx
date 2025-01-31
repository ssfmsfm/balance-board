import Order from "@/components/pages/order";
import { IProductData } from "@/constants/interfaces";

const productData: IProductData = {
  preHeader: "Rampe Birke für Kinder",
  header: "Kletterdreieck und Kletterbogen",
  description: (
    <>
      Ermöglichen Sie Ihrem Kind eine spielerische und gesunde Entwicklung mit
      der Rampe Birke von RP and Partners! Sie bietet vielseitige Möglichkeiten
      für Bewegung und Sinneswahrnehmung.
      {/* Überraschen Sie Ihr Baby mit einer neuen Erfahrung mit dem geraden
      Balancer von Woodandhearts! Es wird Ihrem Kind helfen,{" "}
      <span className="font-bold text-orange-600">Korrdination</span> und{" "}
      <span className="font-bold text-orange-600">Gleichgewichtssinn</span> zu
      entwickeln. */}
    </>
  ),
  descriptionOptions: [
    "✔️ Für Kinder ab 6 Monaten: Geeignet für die Kleinsten, um frühzeitig motorische Fähigkeiten zu fördern.",
    "✔️ Vielfältige Konstruktionen: Die Rampe kann in verschiedenen Formen aufgebaut werden – jede Variante bietet eine einzigartige Erfahrung.",
    "✔️ Fußmassage inklusive: Die unterschiedlichen Formen und Härten der Rutsche massieren sanft die Füße Ihres Kindes.",
    "✔️ Fördert Aktivität: Unterstützt die motorische Entwicklung und regt zu kreativen Bewegungen an.",
  ],
  price: 118,
  finalPrice: 65,
  stripeLink: process.env.NEXT_PUBLIC_RAMP_STRIPE_LINK || "",
  gtmBuyBtnId: process.env.NEXT_PUBLIC_GTM_BUY_RAMP_BTN_ID || "",
  imagesSrc: [
    "/slider/ramp/1.webp",
    "/slider/ramp/2.webp",
    "/slider/ramp/3.webp",
    "/slider/ramp/4.webp",
  ],
};

export default function Ramp() {
  return <Order productData={productData} />;
}
