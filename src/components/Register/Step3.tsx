import { useRouter } from "next/router";
import { FormEvent } from "react";
import styleLogin from "../../pages/style/login.module.scss";
import { Button } from "../Button";


export function Step3({page, setPage}) {
 const router = useRouter()


  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    router.push("/cadastroSucesso")
  };

  return (
    <>
      <form
        className={styleLogin.boxContent}
        onSubmit={onSubmit}
        autoComplete="off"
      >
        <div className={styleLogin.inputContent}>
          <label
            htmlFor="password"
          >
            Senha 
          </label>
          <input
            type="password"
            id="password"
          />
        </div>
        <div className={styleLogin.inputContent}>
          <label
            htmlFor="passwordRepeat"
          >
            Confirmar senha
          </label>
          <input
            type="password"
            id="passwordRepeat"

          />
        </div>

        {/* <div className={styleLogin.inputContent}>
          <div className="checkboxArea">
            <input
              id="acceptTerms"
              type="checkbox"
              {...register("termsCheckbox")}
            />
            <label>
              Ao se cadastrar, você concorda com nossos Termos, Política de
              Dados e Política de Cookies...
              <a href="#" onClick={() => setModalOpen()}>
                <b>Ler tudo</b>
              </a>
            </label>
          </div>
          {errors?.termsCheckbox && (
            <span className="error">{errors.termsCheckbox.message}</span>
          )}
        </div> */}

        <Button type="submit">
        Confirmar
        </Button>
      </form>
    </>
  );
}
