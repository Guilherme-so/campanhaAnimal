import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export function useModal() {
  const ctx = useContext(ModalContext);
  return ctx;
}
