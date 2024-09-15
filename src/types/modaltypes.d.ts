// types/modalTypes.ts
import React from "react";

export type ModalProps = {
  id: string;
  title: string;
  content: React.ReactNode;
  onCloseText: string;
  isOpen: boolean;
  onClose: () => void;
};
