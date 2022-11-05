import { useRouter } from "next/router";
import { CaretCircleLeft } from "phosphor-react";
import React, { FormEvent, useRef, useState, useContext } from "react";
import { apadrinheAnimais } from "../../dummyData";
import { Modal } from "../../components/Modal";
import { useModal } from "../../hooks/useModal";
import { apadrinhePrice } from "../../utils/apadrinhePrice";
import { ApadrinheContext } from "../../context/ApadrinheContext";

import style from "../style/apadrinheDetail.module.scss";
import { SEO } from "../../SEO";


function ApadrinheDetail() {
  const rote = useRouter();
  const carousel = useRef(null);
  const { apadrinheId } = useRouter().query;
  const { setModalOpen } = useModal();
  const [active, setActive] = useState<{}>()
  const [outrosValores, setOutrosValores] = useState(false)

  //@ts-ignore
  const {setApadrinheAnimalId} = useContext(ApadrinheContext)

  const animalDetail = apadrinheAnimais.find(
    (animal) => animal.slug === apadrinheId
  );

  function handleLeftClick(e: FormEvent) {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function handleRightClick(e: FormEvent) {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  function handleModalApadrinhar() {
  setApadrinheAnimalId(apadrinheId)

  rote.push("/pagamento")
  }

  return (
    <div>
      <SEO
				title={`Apadrinhe ${animalDetail?.genero === "macho" ? 'o' : 'a'} ${animalDetail?.nome}`}
				description="Desenvolvida pela equipe da ONG santuário das fadas, A Plataforma campanha animal conta com o empenho de um time voluntários dedicados á causa animal que oferecem seu tempo e talento a essa iniciativa para ajudar animais de todas as espécies pelo Brasil."
			/>

      <div className={style.headerDetail}>
        <p>
          <img src="/assets/images/home.svg" alt="" />
          <img src="/assets/images/mdi_chevron-right.png" alt="" />
          <span
            className={style.feedApadrinhamento}
            onClick={() => rote.push("/apadrinhe")}
          >
            Feed de apadrinhamento
          </span>
          <img src="/assets/images/mdi_chevron-right.png" alt="" />
          <span>{animalDetail?.nome}</span>
        </p>
      </div>

      <div className={style.detailWrapper}>
        <div className={style.imagesContainer}>
          <img
            className={style.thumbnailImg}
            src={animalDetail?.thumbnail.url}
            alt={animalDetail?.thumbnail.alt}
          />

          <div className={style.tyneImages}>
            {animalDetail?.images?.map((image: any, index: number) => {
              return (
                <div key={index}>
                  <img src={image.url} alt={image.alt} />
                </div>
              );
            })}
          </div>
        </div>

        <div className={style.singleDogDetail}>
          <h1>
            Apadrinhe {animalDetail?.genero === "macho" ? "o" : "a"}{" "}
            {animalDetail?.nome}
          </h1>

          <div className={style.ongAndLocation}>
            <div className={style.ong}>
              <img src="/assets/images/user.png" alt="user" />
              <p>ONG toca das fadas</p>
            </div>
            <div>
              <p>
                <img src="/assets/images/locationicon.svg" alt="location" />{" "}
                Interlagos, São Paulo-SP
              </p>
            </div>
          </div>

          <div className={style.detailPs}>
            <p>
              Oi gente, eu sou a Buzina! Uma moça pediu ajuda para as tias do
              abrigo porque desde neném eu não consigo andar muito bem.
            </p>
            <br />

            <p>Idade: até {animalDetail?.idade} anos</p>
            <p>Porte: M (até 25kg) </p>
            <p>Sexo: {animalDetail?.genero}</p>
            <br />

            <p>
              Custos mensais: Cálculo baseado em um mês normal com consultas,
              vacinas e acompanhamento usual. Mesmo que hajam gastos
              emergenciais eles não serão adicionados além da ajuda mensal.
            </p>
            <br />

            <p className={style.total}>TOTAL: R${animalDetail?.custos}/mẽs</p>
            <br />

            <p>
              Você pode doar o valor total ou qualquer quantia para nós ajudar.
            </p>
            <br />

            <button
              className={style.buttonApadrinhar}
              onClick={() => setModalOpen()}
            >
              quero apadrinhar
            </button>
          </div>

          <Modal title="QUAIS VALORES VOCÊ DESEJA DOAR?">
            <div className={style.modalContent}>

              <div className={style.ajudeContainer}>

                <div className={style.customRadio}>
                  <input type="radio" value='0' name="question" id="ajudeUmaVezSO" />
                  <label htmlFor="ajudeUmaVezSO">Ajudar Uma Vez Só</label>
                </div>
                
                <div className={style.customRadio}>
                  <input type="radio" value='1' name="question" id="ajudarMensal" />
                  <label htmlFor="ajudarMensal">Ajudar mensal</label>
                </div>

              </div>


              <div className={style.containerButtonsPrice}>
                {apadrinhePrice.map((price) => {
                  return (
                    <button key={price.id} onClick={() => setActive(price.id)}  className={`${style.buttonPrice} ${active === price.id ? style.selected : ""}`}>R$ {price.preco}</button>
                  )
                })}
                <button onClickCapture={()=> setOutrosValores(!outrosValores)}
                onClick={() => setActive("outros")}  className={`${style.buttonPrice} ${active === "outros" ? style.selected : ""}`}>Outros</button>
              </div>

              <div className={style.containerInputOutrosAndApadrinhar}>
              {outrosValores && (
                  <input className={style.inputOutros} type="text" placeholder="R$ 0,00" />
              )}

              <button
              onClick={() => handleModalApadrinhar()} 
              className={style.apadrinheModalButton} 
              >Apadrinhar</button>
              </div>

            </div>
          </Modal>

        </div>
      </div>

      <div className={style.carouselWrapper}>
        <h1>Veja também:</h1>
        <div className={style.carrosselContent}>
          <div className={style.carousel} ref={carousel}>
            {apadrinheAnimais.map((animal) => {
              const {
                id,
                nome,
                genero,
                idade,
                isHereSince,
                thumbnail,
                custos,
                slug,
              } = animal;
              return (
                <div key={id} className={style.animalSolo}>
                  <div className={style.onwer}>
                    <img src="/assets/images/user.png" alt="user" />
                    <p>toca das fadas</p>
                  </div>
                  <img
                    className={style.dog}
                    src={thumbnail.url}
                    alt={thumbnail.alt}
                  />
                  <div className={style.animalDetail}>
                    <h2>
                      Apadrinhe {genero === "macho" ? "o" : "a"} {nome}{" "}
                    </h2>
                    <p>{genero}</p>
                    <p>{idade} anos de idade</p>
                    <p>
                      no abrigo desde: <br />
                      {isHereSince}
                    </p>
                    <p>Custos mensais: R$ {custos}</p>
                    <button
                      onClick={() => rote.push(`/apadrinhe/${animal.slug}`)}
                    >
                      sobre min
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button className={style.buttonsLeft} onClick={handleLeftClick}>
            <img className={style.imgLeft}
              src="/assets/images/mdi_chevron-left-circle-outline (1).png"
              alt="left"
            />
          </button>
          <button className={style.buttonsRight} onClick={handleRightClick}>
            <img className={style.imgRight}
              src="/assets/images/mdi_chevron-left-circle-outline.png"
              alt="right"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApadrinheDetail;
