// src/app/ui/modals/page.tsx
import React from 'react';

interface ModalProps {
  id: string;
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onCloseText?: string;
}

const Modal: React.FC<ModalProps> = ({ id, title, content, isOpen, onClose, onCloseText = "Close" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-[#181818] p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="text-gray-600 dark:text-gray-300">
            {onCloseText}
          </button>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
