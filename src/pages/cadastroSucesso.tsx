import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '../components/Button'

import style from "../pages/style/cadastroSucesso.module.scss"

function cadastroSucesso() {
    const router = useRouter()

  return (
    <section className={style.hero}>

        <div className={style.container}>
            <h1>Cadastro concluído com sucesso</h1>

            <p>Agora você já pode ajudar o mundo a se tornar um lugar melhor colocando animais para adoção e adotando animais. Se você se cadastrou como ONG, aguarde o recebimento do e-mail de confirmação.</p>

            <Button onClick={() => router.push("/")}>
                Voltar ao início
            </Button>
        </div>
    </section>
  )
}

export default cadastroSucesso