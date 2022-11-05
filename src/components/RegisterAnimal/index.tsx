import { useState } from "react";

import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step5 } from "./Step5";

import styleLogin from "../../pages/style/login.module.scss";
import styleRegister from "../../pages/style/register.module.scss";
import style from "../RegForm/form.module.scss";

const RegisterAnimal = () => {
  const [page, setPage] = useState(0);

  const descriptionSubTitle = ["Dados básicos", "Saúde", "Outros", "Fotos", "Termos"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Step1 page={page} setPage={setPage}/>;
    } else if (page === 1) {
      return <Step2 page={page} setPage={setPage} />;
    } else if (page === 2) {
      return <Step3 page={page} setPage={setPage} />;
    } else if (page === 3) {
      return <Step4 page={page} setPage={setPage} />;
    } else {
      return <Step5  />;
    }
  };

  return (
    <div className="form">
      <div className={styleLogin.box} id={styleRegister.fullBoxContent}>
        <div className="header">
          <h1>Cadastro</h1>
          <h3>{descriptionSubTitle[page]}</h3>
        </div>

        <div className={style.progressbar}>
          <div
            style={{
              width:
                page === 0
                  ? "20%"
                  : page == 1
                  ? "40%"
                  : page == 2
                  ? "60%"
                  : page == 3
                  ? "80%"
                  : "100%",
            }}
          />

        </div>

        <div className="body">{PageDisplay()}</div>
      </div>
    </div>
  );
};

export default RegisterAnimal;
