import { createContext, useCallback, useState } from "react";
import { IDefaultProps } from "../interfaces/DefaultChildrenProps";

interface IModalProps {
  isOpen: boolean;
  setModalOpen(): void;
}

export const ModalContext = createContext({} as IModalProps);

export function ModalProvider({ children }: IDefaultProps) {
  const [isOpen, setIsOpen] = useState(false);

  const setModalOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, setModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
