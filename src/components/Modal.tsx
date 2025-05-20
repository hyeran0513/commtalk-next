import React from "react";
import { BiX } from "react-icons/bi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-gray-500/50">
      <div className="relative bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <button
          onClick={onClose}
          className="absolute top-5 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          <BiX className="text-2xl" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
