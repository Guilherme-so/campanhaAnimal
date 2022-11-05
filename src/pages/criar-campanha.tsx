import React from 'react'
import { Hero } from '../components/Hero'
import CriarCampanha from '../components/criaCampanha'
import { SEO } from '../SEO'

function Criarcampanha() {

  return (
    <>
    
    <SEO
				title={'Criar Campanha'}
				description="Desenvolvida pela equipe da ONG santuário das fadas, A Plataforma campanha animal conta com o empenho de um time voluntários dedicados á causa animal que oferecem seu tempo e talento a essa iniciativa para ajudar animais de todas as espécies pelo Brasil."
			/>

    <Hero>
        <CriarCampanha />
    </Hero>
    </>
  )
}

export default Criarcampanha