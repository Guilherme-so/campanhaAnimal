import { useRouter } from 'next/router'
import React, { useState,useContext } from 'react'
import { newCampanhaContext } from '../../../../context/NewCampanhaContext'

import style from "./sucesso.module.scss"

function CriadoComSucesso() {
  const router = useRouter()
  const {newCampanha} = useContext(newCampanhaContext)

  const [shareLink, setSharelink] = useState(newCampanha.nomeCampanha)

  let link = `https://${shareLink.replace(/\s/g, "-")}`



  return (

    <div className={style.container}>

      <p>Campartilhe essa campanha</p>
      
      <div className={style.clipboard}>
        <input type="text" value={`https://${shareLink.replace(/\s/g, "-")}`}/>
        <button onClick={() => navigator.clipboard.writeText(link)}>Copiar</button>
      </div>

      <button onClick={() => router.push('/') } className={style.VoltarBtn}>Voltar para  a página Inicial</button>
    </div>
  )
}

export default CriadoComSucesso