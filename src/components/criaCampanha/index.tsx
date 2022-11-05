import React, { useState } from 'react'

import styleLogin from "../../pages/style/login.module.scss";
import styleRegister from "../../pages/style/register.module.scss";

import CriadoComSucesso from './steps/criadoComSucesso';
import DadosBasicos from './steps/dadosBasicos';
import Descricao from './steps/descricao';
import Revisao from './steps/revisao';

import style from "./criarCampanha.module.scss"

function CriarCampanha() {
    const [page, setPage] = useState(0);

    const formsTitles = ["Criar Campanha", "Criar Campanha", "Criar Campanha","Campanha criada com sucesso!"];
    const subtitles = ["Dados básicos", "Descrição", "Revisão", "Agora você pode compartilhar clicando no link á baixo"]
  
    const PageDisplay = () => {
      if (page === 0) {
        return  <DadosBasicos setPage={setPage}  />

      } else if (page === 1) {
          return <Descricao setPage={setPage}  />

      } else if (page === 2) {
        return <Revisao setPage={setPage} />
      }else{
        return <CriadoComSucesso />
    }
    };
  
    return (
      <div className={style.form}>
        <div className={styleLogin.box} id={styleRegister.fullBoxContent}>
          
          <div className="header">
            <h1 className={style.title}>{formsTitles[page]}</h1>
            <h4 className={style.subtitle} >{subtitles[page]}</h4>
          </div>
  
          <div className={style.progressbar}> 
          <div style={{ width: page === 0 ? "25%" : page == 1 ? "50%" : page == 2 ? "75%" : "100%" }}></div>
          </div>
  
          <div className="body">{PageDisplay()}</div>
        
        </div>
      </div>
    )
  }
  
export default CriarCampanha