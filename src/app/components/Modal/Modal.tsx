import { Dialog, Transition } from "@headlessui/react";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  setOpen: () => void;
  setClose: () => void;
  onDelete: () => void;
  title?: string;
  description?: string;
}

export default function Modal({
  isOpen,
  setOpen,
  setClose,
  onDelete,
  title,
  description,
}: ModalProps) {
  return (
    <Transition appear show={isOpen}>
      <Dialog as="div" className="relative z-10 " onClose={setClose}>
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-card-primary opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-card-primary p-6 text-left align-middle shadow-xl transition-all border-primary border">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-primary"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-white">{description}</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onDelete}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-2"
                    onClick={setClose}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
