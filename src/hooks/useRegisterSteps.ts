import { useContext } from "react";
import { RegisterContext } from "../context/RegisterContext";

export function useRegisterSteps() {
  const ctx = useContext(RegisterContext);

  return ctx;
}
