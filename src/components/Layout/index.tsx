import React from 'react'
import Loadbar  from "../Register/LoadBar/index"
import styleRegister from '../../pages/style/register.module.scss';
import styleLogin from '../../pages/style/login.module.scss';


function LoadWrapper({children}: any) {
  return (
    <div className={styleLogin.box} id={styleRegister.fullBoxContent}>
      <h1>Cadastro</h1>
        <Loadbar />
        {children}
    </div>
  )
}

export default LoadWrapper
