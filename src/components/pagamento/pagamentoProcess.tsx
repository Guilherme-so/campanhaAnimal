import React, { useContext, useState } from 'react'
import styleLogin from "../../pages/style/login.module.scss";
import styleRegister from "../../pages/style/register.module.scss";
import AdicionarCartao from './steps/AdicionarCartao/adicionarCartao';
import DetalhesDogApadrinhe from './steps/DetailDogApadrinhe/detalhesDogApadrinhe';
import { ApadrinheContext } from '../../context/ApadrinheContext';

import style from "./pagamentoProgress.module.scss"

function PagamentoProcess() {
const {pix, boleto} = useContext(ApadrinheContext)

  const [page, setPage] = useState(0);

  const formsTitles = ["dados pessoais", "endereço", "senha"];

  const PageDisplay = () => {
    if (page === 0) {
      return  <DetalhesDogApadrinhe setpage={setPage} />
    } else if (page === 1) {
        return <AdicionarCartao />
    } else{
        return <h1>Something</h1>
    }
  };

  return (
    <div className={style.form}>
      <div className={styleLogin.box} id={styleRegister.fullBoxContent}>
        
        <div className={`${style.header} ${pix || boleto ? style.unActiveHeader : ''}` }>
          <h1>Pagamento</h1>
          <h4>Escolha a forma de pagamento</h4>
          {/* <h3>{formsTitles[page]}</h3> */}
        </div>

        <div className={`${style.progressbar} ${pix || boleto ? style.unActiveProgressbar : ""}`}> 
        <div style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}></div>
        </div>

        <div className="body">{PageDisplay()}</div>
      
      </div>
    </div>
  )
}

export default PagamentoProcess