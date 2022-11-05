import { createContext, useState } from "react";
import { IDefaultProps } from "../interfaces/DefaultChildrenProps";

interface IApadrinheProps {
  apadrinheAnimalId: any
  setApadrinheAnimalId: any
  pix: boolean;
  setPix: any;
  boleto: boolean
  setBoleto: any
}

export const ApadrinheContext = createContext({} as IApadrinheProps)


export function ApadrinheProvider({ children }: IDefaultProps) {
    const [apadrinheAnimalId, setApadrinheAnimalId] = useState()
    const [pix, setPix] = useState(false)
    const [boleto, setBoleto] = useState(false)


    return (
      <ApadrinheContext.Provider value={{apadrinheAnimalId, setApadrinheAnimalId,pix, setPix,boleto, setBoleto }}>
        {children}
      </ApadrinheContext.Provider>
    );
  }