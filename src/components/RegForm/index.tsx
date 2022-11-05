import React, { useState } from "react";
import { Step1 } from "../Register/Step1";
import styleLogin from "../../pages/style/login.module.scss";
import styleRegister from "../../pages/style/register.module.scss";
import { Step2 } from "../Register/Step2";
import { Step3 } from "../Register/Step3";

import style from "./form.module.scss"



const Form = () => {
  const [page, setPage] = useState(0);


  const formsTitles = ["dados pessoais", "endereço", "senha"];


  const PageDisplay = () => {
    if (page === 0) {
      return <Step1 page={page} setPage={setPage}/>;
    } else if (page === 1) {
        return <Step2 page={page} setPage={setPage}/>;        
    } else{
        return <Step3 page={page} setPage={setPage}/>;        
    }
  };

  return (
    <div className="form">
      <div className={styleLogin.box} id={styleRegister.fullBoxContent}>
        
        <div className={style.header}>
          <h1>Cadastro</h1>
          <h3>{formsTitles[page]}</h3>
        </div>

        <div className={style.progressbar}> 
        <div style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}></div>
        </div>

        <div className="body">{PageDisplay()}</div>
      
      </div>
    </div>
  );
}

export default Form;
