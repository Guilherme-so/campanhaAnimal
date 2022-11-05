import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { Hero } from "../components/Hero";
import { SEO } from "../SEO";

import style from "./style/contato.module.scss";

function contato() {
  const router = useRouter();
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMensagemEnviada(true);
  }

  return (
    <>
      <SEO
				title='Contato'
				description="Criada por uma equipe 100% voluntária
				para ajudar animais de todas as espécies
				pelo Brasil"
			/>

      <Hero>
        <div className={style.box}>
          {mensagemEnviada ? (
            <div className={style.mensagemEnviada}>
              <h3 className={style.title}>Mensagem enviada com sucesso!</h3>
              <p className={style.contatoParagraph}>Sua mensagem foi enviada, agora aguarde o nosso contato, trabalhamos para responder você o mais rápido possível</p>

              <button onClick={() => router.push("/")}>Voltar para a página Inicial</button>
            </div>
          ) : (
            <>
              <h3 className={style.title}>Entre em contato conosco</h3>
              <p className={style.contatoParagraph}>
                Envie sua mensagem que iremos entrar em contato com você
              </p>
              <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.inputControllers}>
                  <div className={style.meta}>
                    <label htmlFor="meta">Nome</label>
                    <input type="text" id="meta" required />
                  </div>
                  <div className={style.ong}>
                    <label htmlFor="ong">contato</label>
                    <input type="text" id="ong" required />
                  </div>
                </div>

                <div className={style.controllersDetail}>
                  <label htmlFor="detalhes">Mensagem</label>
                  <textarea name="" id="detalhes" cols={100} rows={12} />
                </div>

                <button type="submit" className={style.dadosBasicosNext}>
                  Enviar
                </button>
              </form>
            </>
          )}
        </div>
      </Hero>
    </>
  );
}

export default contato;
