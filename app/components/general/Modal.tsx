import { Dialog, Transition } from "@headlessui/react";
import React from "react";

export function Modal({
  onClose,
  children,
  modalActivator,
}: {
  onClose: (setIsOpen: React.Dispatch<React.SetStateAction<boolean>>) => void;
  children: (
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
  modalActivator: (
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => React.ReactNode;
  withOverlay?: boolean;
}) {
  let [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {modalActivator(setIsOpen)}
      <Transition as={React.Fragment} show={isOpen}>
        <Dialog
          onClose={() => onClose(setIsOpen)}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <Transition.Child
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>
          <Transition.Child
            as={React.Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {children(setIsOpen)}
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
