import {createContext, useState} from 'react'
import { IDefaultProps } from "../interfaces/DefaultChildrenProps";

interface INewCampanha {
    nomeCampanha: string,
    meta: string,
    ong: string,
    descricao: string
}

export const newCampanhaContext = createContext({
    newCampanha: {} as INewCampanha | undefined | null,
    setNewCampanha: (parm:any) => undefined,
})


export const NewCampanhaProvider = ({children}: IDefaultProps) => {
    const [newCampanha, setNewCampanha] = useState<INewCampanha | null>()

    return (
    <newCampanhaContext.Provider value={{newCampanha, setNewCampanha}}>
        {children}
    </newCampanhaContext.Provider>
    )
} 