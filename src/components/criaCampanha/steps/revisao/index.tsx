import React, { FormEvent, useContext, useState } from 'react'
import { newCampanhaContext } from '../../../../context/NewCampanhaContext'

import style from "./revisao.module.scss"

function Revisao({setPage}) {
  const {newCampanha,setNewCampanha} = useContext(newCampanhaContext)

  const [nameCampanha, setNameCampanha] = useState(newCampanha.nomeCampanha)
  const [meta, setMeta] = useState(newCampanha.meta)
  const [ong, setOng] = useState(newCampanha.ong)
  const [descricao, setDescricao] = useState(newCampanha.descricao)


  function submitHandler(event: FormEvent) {
    event.preventDefault()
    setPage((prev) => (prev +1))
  }

  return (
    <div>
      <form onSubmit={submitHandler} className={style.form}>
        <p className={style.reviseTitle}>Resvise os dados da campanha</p>

        <div className={style.nomeDaCampanha}>
          <label className={style.nomeCampanhaLabel} htmlFor="nomeDaCampanha">
            Nome da campanha
          </label>
          <input
            type="text"
            id="nomeDaCampanha"
            value={nameCampanha}
            onChange={(e) => setNameCampanha(e.target.value)}
            required
          />
        </div>

        <div className={style.inputControllers}>
          <div className={style.meta}>
            <label htmlFor="meta">Meta</label>
            <input
              type="text"
              id="meta"
              value={meta}
              onChange={(e) => setMeta(e.target.value)}
              required
            />
          </div>
          <div className={style.ong}>
            <label htmlFor="ong">Ong</label>
            <input
              type="text"
              id="ong"
              value={ong}
              onChange={(e) => setOng(e.target.value)}
              required
            />
          </div>
        </div>

        <div className={style.controllersDetail}>
        <label htmlFor="detalhes">Detalhes</label>
        <textarea name="" id="detalhes" cols={100} rows={15}  
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </div>

        <button type="submit" className={style.dadosBasicosNext}>
          Próximo
        </button>
      </form>
    </div>
  )
}

export default Revisao