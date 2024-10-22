import Modal from "@/components/commonComponents/modal/Modal";
import { FINISH_TYPE } from "@/constants/enums";
import { useMemo } from "react";

type PropsType = {
  onClose: () => void;
  finishType: FINISH_TYPE;
};

const FinishPaymentModal: React.FC<PropsType> = ({ onClose, finishType }) => {
  const { title, text } = useMemo(
    () =>
      finishType === FINISH_TYPE.SUCCESSFUL
        ? {
            title: "Payment Complete!",
            text: (
              <>
                Thanks for your order.
                <br />
                We send all information, please, check your email.
              </>
            ),
          }
        : {
            title: "Payment Reject!",
            text: (
              <>
                Transaction failed.
                <br />
                Please check payment data and try again.
              </>
            ),
          },
    [finishType]
  );

  return (
    <Modal onClose={onClose} title={title} type={finishType}>
      <div className="relative w-full overflow-auto flex flex-col gap-2 xl:gap-3 2xl:gap-4 fullHD:gap-6 p-4 xl:p-5 2xl:p-6 fullHD:p-8">
        <p
          className={
            "text-base xl:text-lg 2xl:text-xl fullHD:text-2xl font-medium"
          }
        >
          {text}
        </p>
      </div>
    </Modal>
  );
};

export default FinishPaymentModal;
