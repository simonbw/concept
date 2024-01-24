import { Transition } from "@headlessui/react";
import React, { PropsWithChildren } from "react";

export const ModalBackground: React.FC<
  PropsWithChildren<{ onClose: () => void }>
> = ({ children, onClose }) => {
  return (
    <Transition
      appear
      show
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      as={React.Fragment}
    >
      <div
        className="fixed inset-0 w-full h-full bg-slate-900/20 z-50 backdrop-blur-[2px] flex items-center justify-center"
        onClick={() => onClose()}
      >
        {children}
      </div>
    </Transition>
  );
};
