import Modal from "@/components/commonComponents/modal/Modal";
import { useCallback, useState } from "react";

type PropsType = {
  onClose: () => void;
  quantity: number;
};

const OrderModal: React.FC<PropsType> = ({ onClose }) => {
  const [showPaypalData, setShowPaypalData] = useState(false);

  const handlePayByCard = useCallback(
    () =>
      (window.location.href =
        process.env.NEXT_PUBLIC_BALANCE_BOARD_STRIPE_LINK || ""),
    []
  );

  const handlePayByPaypal = useCallback(() => setShowPaypalData(true), []);

  return (
    <Modal onClose={onClose} title={"Zahlungsart"}>
      <>
        <div className="relative w-full overflow-auto flex flex-col gap-2 xl:gap-3 2xl:gap-4 fullHD:gap-6 p-4 xl:p-5 2xl:p-6 fullHD:p-8">
          {showPaypalData ? (
            <p>
              Wir richten derzeit noch unser offizielles PayPal-Konto ein. In
              der Zwischenzeit können Sie Ihre Zahlung auf unser persönliches
              PayPal-Konto überweisen. Bitte:
              <br />
              <br />
              Überweisen Sie den Betrag an{" "}
              <span style={{ fontWeight: "bold" }}>rpalapa@ukr.net</span>. Geben
              Sie Ihre E-Mail-Adresse im Verwendungszweck der Überweisung an,
              damit wir Ihren Kauf bestätigen können.
            </p>
          ) : (
            <p>Bitte wählen Sie Ihre Zahlungsmethode</p>
          )}
        </div>
        {!showPaypalData && (
          <footer className="sticky bottom-0 left-0 flex gap-4 w-full bg-orange-50 p-4 xl:p-5 2xl:p-6 fullHD:p-8">
            <button
              className="w-full font-bold max-sm:self-center max-sm:w-full px-4 xl:px-8 fullHD:px-12 py-2 xl:py-3 fullHD::py-4 text-xs md:text-sm xl:text-base fullHD:text-2xl text-orange-100 bg-orange-600 rounded-lg xl:rounded-xl fullHD:rounded-2xl tracking-[4px] xl:tracking-[4px] fullHD:tracking-[6px] w-fit"
              onClick={handlePayByPaypal}
            >
              Mit PayPal bezahlen
            </button>
            <button
              className="w-full font-bold max-sm:self-center max-sm:w-full px-4 xl:px-8 fullHD:px-12 py-2 xl:py-3 fullHD::py-4 text-xs md:text-sm xl:text-base fullHD:text-2xl text-orange-100 bg-orange-600 rounded-lg xl:rounded-xl fullHD:rounded-2xl tracking-[4px] xl:tracking-[4px] fullHD:tracking-[6px] w-fit"
              onClick={handlePayByCard}
            >
              Mit Karte bezahlen
            </button>
          </footer>
        )}
      </>
    </Modal>
  );
};

export default OrderModal;
