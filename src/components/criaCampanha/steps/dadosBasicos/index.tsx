import React, { useContext, useState } from "react";
import { newCampanhaContext } from "../../../../context/NewCampanhaContext";
import style from "./dadosBasicos.module.scss";

function DadosBasicos({ setPage }) {
  const { newCampanha, setNewCampanha } = useContext(newCampanhaContext);

  const [nomeCampanha, setNomeCampanha] = useState("");
  const [meta, setMeta] = useState("");
  const [ong, setOng] = useState("");

  const basicData = {
    nomeCampanha,
    meta,
    ong
  }

  function handleSubmit() {
    setPage((prev) => prev + 1);
    setNewCampanha(basicData)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.nomeDaCampanha}>
          <label className={style.nomeCampanhaLabel} htmlFor="nomeDaCampanha">
            Nome da campanha
          </label>
          <input
            type="text"
            id="nomeDaCampanha"
            required
            value={nomeCampanha}
            onChange={(e) => setNomeCampanha(e.target.value)}
          />
        </div>

        <div className={style.inputControllers}>
          <div className={style.meta}>
            <label htmlFor="meta">Meta</label>
            <input
              type="text"
              id="meta"
              required
              value={meta}
              onChange={(e) => setMeta(e.target.value)}
            />
          </div>
          <div className={style.ong}>
            <label htmlFor="ong">Ong</label>
            <input
              type="text"
              id="ong"
              required
              value={ong}
              onChange={(e) => setOng(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className={style.dadosBasicosNext}>
          Próximo
        </button>
      </form>
    </div>
  );
}

export default DadosBasicos;
