import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { StyledHeader } from "./style";
import style from "./header.module.scss"

export default function Loader() {
    const router: any = useRouter()?.query?.parte 
    const [selected, setSelected] = useState(1)

    const { push } = useRouter();

    useEffect(() => {
        if(router !== undefined){
            setSelected(router)
        }        
    }, [router])


    return (
        // className={style.styledHeader}
        <div className={style.progressBar}>
           {Array.from({length: 3}).map((_, index) =>(
            <div key={`laod${index}`} className={`${selected == index+1 && "selected"}`}>
                <button>{index+1}</button>
            </div>

           ))}
        </div>
    )
}


{/* <button  key={`nav${index}`}
className={`${selected == index+1 && "selected"}`}
onClick={() => buttonPrev(index+1)}
>Parte {index+1}</button> */}