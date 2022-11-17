import { useRouter } from "next/router";
import { Button } from "../components/Button";
import { SEO } from "../SEO";
import style from "./style/about.module.scss";

export default function About() {
  const router = useRouter();

  return (
    <>
      <SEO
        title={"Sobre"}
        description="Desenvolvida pela equipe da ONG santuário das fadas, A Plataforma campanha animal conta com o empenho de um time voluntários dedicados á causa animal que oferecem seu tempo e talento a essa iniciativa para ajudar animais de todas as espécies pelo Brasil."
      />

	<section className={style.hero}>
      	<div className={style.heroTitle}>
		A primeira plataforma de <br />
		 financiamento coletivo <br />
		 da causa animal!
		</div>

      <div className={style.content}>
	  <video controls>
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
            type="video/webm"
          />
        </video>

        <div className={style.aboutContainer}>
          <div className={style.aboutContent}>
            <h3>
              Uma Iniciativa da ONG para <br /> 
              protetores da causa animal.
            </h3>

            <p>
              A Plataforma
              campanha animal conta com o empenho de um time voluntários
              dedicados á causa animal que oferecem seu tempo e talento a essa
              iniciativa para ajudar animais de todas as espécies pelo Brasil.
            </p>

            <Button onClick={() => router.push("/campanhas")}>
		 	 colabore
            </Button>
          </div>

          <div className={style.separator}></div>

          <div className={style.aboutContent}>
            <h3>São muitas vantagens para você <br />
			 criar sua campanha conosco</h3>

            <div className={style.grid}>
              <div className={style.benefits}>
                <figure>
                  <img
                    src="/assets/images/check-circle.svg"
                    alt="Círculo de confirmação"
                  />
                </figure>
                <div className={style.benefitsTitle}>
                  Plataforma exclusiva <br /> 
				   da causa animal
                </div>
                <p>
                  A plataforma foi criada exclusivamente para campanhas da causa
                  animal, com objetivo de unificar os esforços dos protetores e
                  oferecer mais visibilidade ao trabalho de todos
                </p>
              </div>

              <div className={style.benefits}>
                <figure>
                  <img
                    src="/assets/images/check-circle.svg"
                    alt="Círculo de confirmação"
                  />
                </figure>
                <div className={style.benefitsTitle}>
                  Menor taxa para <br />
				  financiamento coletivo
                </div>
                <p>
                  com o apoio de nosso time de voluntários, conseguimos manter a
                  menor taxa entre as plataformas de financiamento coletivo para
                  permitir uma captação maior aos protetores.
                </p>
              </div>

              <div className={style.benefits}>
                <figure>
                  <img
                    src="/assets/images/check-circle.svg"
                    alt="Círculo de confirmação"
                  />
                </figure>
                <div className={style.benefitsTitle}>
                  Valores arrecadados <br />
				   depositados diretamente
                </div>
                <p>
                  Os valores recebidos pelas campanhas são depositados
                  diretamente na conta da juno criada pelo protetor responsável
                  pela campanha,o que diminui a burocracia e facilita o
                  recebimento.
                </p>
              </div>
              <div className={style.benefits}>
                <figure>
                  <img
                    src="/assets/images/check-circle.svg"
                    alt="Círculo de confirmação"
                  />
                </figure>
                <div className={style.benefitsTitle}>
                  Menor taxa para <br />
				   financiamento coletivo
                </div>
                <p>
                  A taxa arrecadada nas campanhas é direcionada á manutenção da
                  plataforma e uma parte dela, é destinada aos cuidados dos
                  animais que vivem na ONG Santuário das fadas.
                </p>
              </div>

              <Button onClick={() => router.push("/criar-campanha")}>
                Criar Campanha
              </Button>
            </div>
          </div>
        </div>
	  </div>
    </section>

      <div className={style.aboutContainer}>
        <div className={style.sectionsGrid}>
          <div className={style.aboutContent}>
            <div className={style.benefitsTitle}>Adoção e apadrinhamento</div>
            <img
              src="/assets/images/about-adoption.png"
              id={style.hide}
              alt="Imagem representativa de adoção"
            />

            <p>
              Na nossa plataforma, você também pode cadastrar animais
              disponíveis para adoção ou apadrinhamento e conseguir mais apoio e
              visibilidade.
            </p>

            <Button onClick={() => router.push("/registro-animal")}>
              Cadastrar animal
            </Button>
          </div>
          <figure>
            <img
              src="/assets/images/about-adoption-big.png"
              className={style.rightImage}
              alt="Imagem representativa de adoção"
            />
          </figure>
        </div>

        <div className={style.sectionsGrid} id={style.sectionsLeftGrid}>
          <div className={style.aboutContent}>
            <div className={style.benefitsTitle}>Eventos da causa animal</div>
            <img
              src="/assets/images/about-events.png"
              id={style.hide}
              alt="Imagem representativa de eventos"
            />

            <p>
              A plataforma também pode ser usada para divulgação de eventos da
              causa animal. Eventos de adoção até feiras veganas, este é um
              espaço para aumentar a visibilidade daqueles que trabalham pelos
              animais.
            </p>
            <div
              style={{
                clear: "both",
              }}
            ></div>
            <Button onClick={() => router.push("/events")}>Ver eventos</Button>
          </div>
          <figure>
            <img
              src="/assets/images/about-events-big.png"
              alt="Imagem representativa de eventos"
              className={style.leftImage}
            />
          </figure>
        </div>
      </div>
    </>
  );
}
