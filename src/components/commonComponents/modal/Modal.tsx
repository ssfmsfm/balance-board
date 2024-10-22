import { FINISH_TYPE } from "@/constants/enums";
import React from "react";
import ReactDOM from "react-dom";

type PropsType = {
  onClose: () => void;
  title: string;
  children: JSX.Element;
  type?: FINISH_TYPE;
};

const Modal: React.FC<PropsType> = ({ onClose, children, title, type }) =>
  ReactDOM.createPortal(
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 z-50 modal-overlay`}
      onClick={onClose}
    >
      <div className="w-full h-full flex items-center justify-center sm:p-8">
        <div
          className={`bg-white max-h-[100svh] sm:max-h-[90svh] ${!type ? "w-full" : "max-w-[90svw]"} ${type ? "sm:w-[640px]" : "sm:w-[640px]"} ${type ? "rounded" : ""} sm:rounded md:rounded-xl xl:rounded-2xl fullHD:rounded-3xl overflow-hidden flex flex-col flex-nowrap`}
          onClick={(e) => e.stopPropagation()}
        >
          <header
            className={`sticky top-0 left-0 flex justify-between items-center sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl fullHD:text-4xl ${type === FINISH_TYPE.SUCCESSFUL ? "bg-green-300" : type == FINISH_TYPE.UNSUCCESSFUL ? "bg-orange-700 text-white" : "bg-orange-50"} py-2 px-4 xl:py-3 xl:px-5 2xl:py-4 2xl:px-6 fullHD:py-6 fullHD:px-8 font-medium`}
          >
            {title && <h1>{title}</h1>}
            <button type="button" onClick={onClose}>
              x
            </button>
          </header>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );

export default Modal;
