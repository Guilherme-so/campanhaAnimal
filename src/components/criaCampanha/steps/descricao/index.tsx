import React, { FormEvent, useContext, useState } from 'react'
import { newCampanhaContext } from '../../../../context/NewCampanhaContext'
import style from "./descricao.module.scss"

function Descricao({setPage }) {
  const {newCampanha,setNewCampanha} = useContext(newCampanhaContext)
  const [descricao,setDescricao] = useState('')
  
  console.log(newCampanha)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setPage(prev => prev +1 )
    setNewCampanha({...newCampanha, descricao})
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}  className={style.form}>

      <div className={style.controllersDetail}>
        <label htmlFor="detalhes">Detalhes</label>
        <textarea name="" id="detalhes" cols={100} rows={15} value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </div>

      <button type='submit' className={style.descNextBtn}>Próximo</button>
    </form>
    </>
  )
}

export default Descricao