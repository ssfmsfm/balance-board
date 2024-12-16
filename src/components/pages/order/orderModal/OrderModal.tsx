import FormTextField from "@/components/commonComponents/formTextField/FormTextField";
import Modal from "@/components/commonComponents/modal/Modal";
import { useCallback, useMemo, useState } from "react";
import { formatNumber } from "@/utils/formatPrice";
import { FormState } from "@/app/api/paysera-link/route";

type PropsType = {
  onClose: () => void;
  quantity: number;
};

const OrderModal: React.FC<PropsType> = ({ onClose }) => {
  const [showPaypalData, setShowPaypalData] = useState(false);

  const handlePayByCard = useCallback(
    () => (window.location.href = process.env.NEXT_PUBLIC_STRIPE_LINK || ""),
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
// import FormTextField from "@/components/commonComponents/formTextField/FormTextField";
// import Modal from "@/components/commonComponents/modal/Modal";
// import { useCallback, useMemo, useState } from "react";
// import { formatNumber } from "@/utils/formatPrice";
// import { FormState } from "@/app/api/paysera-link/route";

// type PropsType = {
//   onClose: () => void;
//   quantity: number;
// };

// const OrderModal: React.FC<PropsType> = ({ onClose, quantity }) => {
//   const [state, setState] = useState<FormState>({
//     goodQuantity: quantity,
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     city: "",
//     zip: "",
//     street: "",
//   });
//   const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const validate = useCallback(
//     (currentState?: FormState) => {
//       const newErrors: any = {};
//       const stateForCheck = currentState || state;

//       for (const key in stateForCheck) {
//         const value = stateForCheck[key as keyof FormState];

//         if (key === "goodQuantity") {
//           if (+value > 0 && Number.isInteger(+value)) continue;
//         } else if (value !== "") continue;

//         newErrors[key] = true;
//       }

//       return newErrors;
//     },
//     [state]
//   );

//   const handleUpdateState = useCallback(
//     (name: string, value: any) => {
//       setState((prev) => {
//         const currentState = {
//           ...prev,
//           [name]: value,
//         };

//         if (formSubmitted) {
//           const validationErrors = validate(currentState);
//           if (Object.keys(validationErrors).length > 0) {
//             setErrors(validationErrors);
//           } else {
//             setErrors({});
//           }
//         }

//         return currentState;
//       });
//     },
//     [setState, formSubmitted, validate]
//   );

//   const handleNavigateToPayment = useCallback(async () => {
//     setFormSubmitted(true);
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       // Submit the form or perform the desired action
// const response = await fetch("/api/paysera-link", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ state, origin: window.location.origin }),
// });

//       const data = await response.json();
//       if (data.link) {
//         window.location.href = data.link;
//       } else {
//         console.error("Error generating link:", data);
//       }
//     }
//   }, [state, validate]);

//   const totalPrice = useMemo(
//     () => formatNumber(119 * state.goodQuantity),
//     [state.goodQuantity]
//   );

//   return (
//     <Modal onClose={onClose} title={"Create Order"}>
//       <>
//         <div className="relative w-full overflow-auto flex flex-col gap-2 xl:gap-3 2xl:gap-4 fullHD:gap-6 p-4 xl:p-5 2xl:p-6 fullHD:p-8">
//           <h3
//             className={
//               "text-base xl:text-lg 2xl:text-xl fullHD:text-2xl font-bold"
//             }
//           >
//             Client Information
//           </h3>
//           <div className="flex flex-col sm:flex-row flex-nowrap items-center gap-2 xl:gap-3 2xl:gap-4 fullHD:gap-6">
//             <FormTextField
//               label="First Name"
//               name="firstName"
//               value={state.firstName}
//               onChange={handleUpdateState}
//               error={errors.firstName}
//             />
//             <FormTextField
//               label="Last Name"
//               name="lastName"
//               value={state.lastName}
//               onChange={handleUpdateState}
//               error={errors.lastName}
//             />
//           </div>
//           <FormTextField
//             label="Email"
//             name="email"
//             value={state.email}
//             onChange={handleUpdateState}
//             type={"email"}
//             error={errors.email}
//           />
//           <h3
//             className={
//               "text-base xl:text-lg 2xl:text-xl fullHD:text-2xl font-bold "
//             }
//           >
//             Delivery Information
//           </h3>
//           <div className="flex flex-col sm:flex-row flex-nowrap items-center gap-2 xl:gap-3 2xl:gap-4 fullHD:gap-6">
//             <FormTextField
//               label="Country"
//               name="country"
//               value={state.country}
//               onChange={handleUpdateState}
//               error={errors.country}
//             />
//             <FormTextField
//               label="Postal code (ZIP)"
//               name="zip"
//               value={state.zip}
//               onChange={handleUpdateState}
//               error={errors.zip}
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row flex-nowrap items-center gap-2 xl:gap-3 2xl:gap-4 fullHD:gap-6">
//             <FormTextField
//               label="City"
//               name="city"
//               value={state.city}
//               onChange={handleUpdateState}
//               error={errors.city}
//             />
//             <FormTextField
//               label="Street"
//               name="street"
//               value={state.street}
//               onChange={handleUpdateState}
//               error={errors.street}
//             />
//           </div>
//           <div className="flex flex-col sm:flex-row flex-nowrap items-center gap-2 xl:gap-3 2xl:gap-4 fullHD:gap-6">
//             <FormTextField
//               label="Quantity"
//               name="goodQuantity"
//               value={state.goodQuantity}
//               onChange={handleUpdateState}
//               type="number"
//               error={errors.goodQuantity}
//             />
//             <FormTextField
//               label="Total (EUR)"
//               name="total"
//               value={totalPrice}
//               disabled
//             />
//           </div>
//         </div>
//         <footer className="sticky bottom-0 left-0 flex w-full bg-orange-50 p-4 xl:p-5 2xl:p-6 fullHD:p-8">
//           <button
//             className="w-full font-bold max-sm:self-center max-sm:w-full px-4 xl:px-8 fullHD:px-12 py-2 xl:py-3 fullHD::py-4 text-xs md:text-sm xl:text-base fullHD:text-2xl text-orange-100 bg-orange-600 rounded-lg xl:rounded-xl fullHD:rounded-2xl tracking-[4px] xl:tracking-[4px] fullHD:tracking-[6px] w-fit"
//             onClick={handleNavigateToPayment}
//           >
//             GO TO PAYMENT
//           </button>
//         </footer>
//       </>
//     </Modal>
//   );
// };

// export default OrderModal;
