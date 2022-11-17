import React, { useState } from "react";
import { SEO } from "../../SEO";
import { ModalAdoption } from "../../components/Modal/ModalAdoptionDetail";
import { AdoptionSlider } from "../../components/AdoptionSlider";

import style from "../style/adoptionDetails.module.scss";

interface ICampaignsResponse {
  title: string;
  description: string;
  image: string;
}

export default function AdoptionDetails(data) {
  const [animals, setAnimals] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function modalOpen() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }


  return (
    <>
      <SEO
        title={`Detalhes da adoção`}
        description="Página de descrição de uma adoção."
      />

      <div className={style.tabs}>
        <a href="/">
          <svg
            width="25"
            height="22"
            viewBox="0 0 25 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.865 11.5654L12.5 1.62818L23.135 11.5654C23.3838 11.7978 23.5 12.0856 23.5 12.3647V20.2645L23.5 20.2648C23.5 20.2657 23.5 20.2666 23.4984 20.2702C23.496 20.2756 23.4886 20.2888 23.4709 20.3052C23.4348 20.339 23.3697 20.3731 23.2784 20.3731H17.0398C16.9532 20.3731 16.894 20.341 16.8629 20.3119C16.8479 20.2979 16.8423 20.2874 16.8409 20.2844V15.5076C16.8409 13.1196 14.7991 11.3531 12.5 11.3531C10.2009 11.3531 8.15909 13.1196 8.15909 15.5076V20.2844C8.1577 20.2874 8.15206 20.2979 8.13713 20.3119C8.10598 20.341 8.04677 20.3731 7.96023 20.3731H1.72159C1.63034 20.3731 1.56519 20.339 1.52906 20.3052C1.51145 20.2888 1.50403 20.2756 1.50157 20.2702C1.49995 20.2666 1.49997 20.2657 1.49999 20.2648L1.5 20.2645V12.3647C1.5 12.0856 1.61625 11.7978 1.865 11.5654ZM12.7457 1.39862C12.7455 1.39877 12.7454 1.39891 12.7452 1.39906L12.7457 1.39862L12.5 1.13568L12.7457 1.39862ZM12.2548 1.3991C12.2547 1.39894 12.2545 1.39878 12.2543 1.39862L12.2548 1.3991ZM16.8409 20.2858L16.8409 20.2857C16.8409 20.2858 16.8409 20.2858 16.8409 20.2858Z"
              stroke="#FF9D71"
              stroke-width="3"
            />
          </svg>
        </a>
        <div>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7383 20.725L16.4633 15L10.7383 9.2625L12.5008 7.5L20.0008 15L12.5008 22.5L10.7383 20.725Z"
              fill="#FF9D71"
            />
          </svg>
        </div>
        <div>
          <a href="/adoption-feed">Feed de adoção</a>
        </div>
        <div>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7383 20.725L16.4633 15L10.7383 9.2625L12.5008 7.5L20.0008 15L12.5008 22.5L10.7383 20.725Z"
              fill="#FF9D71"
            />
          </svg>
        </div>
        <div>adote o {data.data.name}</div>
      </div>

      <section className={style.mainContent}>
        <div className={style.imageAndDetails}>
          <div className={style.Image}>
            <div className={style.allImages}>
              {data.data.images.map((image, index) => {
                return (
                  <button
                    type="button"
                    key={image.id}
                    className={activeImageIndex === index ? "active" : ""}
                    onClick={() => {
                      setActiveImageIndex(index);
                    }}
                  >
                    <img
                      src={`/assets/images/${image.src}`}
                      alt="mureta"
                      width={70}
                      height={70}
                    />
                  </button>
                );
              })}
            </div>

            <div className={style.activeImageContainer}>
              <img
                className={style.activeImage}
                src={
                  `/assets/images/${data.data.images[activeImageIndex]?.src}` ||
                  `/assets/images/${data.data.images[0]}`
                }
                alt="mureta"
              />
            </div>
          </div>

          <div className={style.details}>
            <h1>Adote o Mureta</h1>

            <div className={style.info}>
              <div className={style.cardUserInfo}>
                <img src="/assets/images/user.png" alt="" />
                <span>ONG toca das fadas</span>
              </div>
              <div className={style.address}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4ZM12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19C12 19 18 12.4 18 8C18 4.7 15.3 2 12 2ZM12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6ZM20 19C20 21.2 16.4 23 12 23C7.6 23 4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21C15.3 21 18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z"
                    fill="#FF9D71"
                  />
                </svg>
                <span>Interlagos, São Paulo -SP</span>
              </div>
            </div>
            <div className={style.description}>
              <span>
                Eu já tive uma casa, mas depois de 3 anos eu não tinha mais
                espaço na vida família, então me deixaram no abrigo. Chorei por
                noites seguidas, não queria comer e só ficava tentando entender
                o que eu tinha feito para ser descartado. Meus tios falam que eu
                sou um dos meninos mais doces do Instituto e que não tem nada de
                errado comigo.
              </span>
            </div>
            <div className={style.moreInformation}>
              <div className={style.infoData}>
                <h3>Idade:</h3>
                <span>Até 10 anos</span>
              </div>
              <div className={style.infoData}>
                <h3>Porte:</h3>
                <span>G (mais de 25kg)</span>
              </div>
              <div className={style.infoData}>
                <h3>Sexo:</h3>
                <span>Macho</span>
              </div>
            </div>
            <button
              type="button"
              className={style.adoptionButton}
              onClick={() => modalOpen()}
            >
              Quero adotar
            </button>
          </div>
        </div>
      </section>

      <AdoptionSlider animals={animals} />

      {isModalOpen && (
        <ModalAdoption isModalOpen={isModalOpen} closeModal={closeModal} />
      )}

      {/* <Modal title={`${showTerms === true ? "Termos e condições" : ""} `}>
        <div className={style.modalContent}>
          <form>
            <h3>Tem certeza que deseja continuar com a adoção?</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="checkbox" required />
              <span>Termos e condições</span>
            </div>
            <div className={style.modalButtons}>
              <button type="button" className={style.cancelButton}>
                Cancelar
              </button>
              <button type="submit" className={style.adoptionButton}>
                Continuar
              </button>
            </div>
          </form>
        </div>
      </Modal> */}
    </>
  );
}

export const getStaticPaths = async () => {
  const data = [
    {
      id: 1,
      name: "Muralha",
      type: "dog",
      disabilities: "cão surdo",
      sex: "male",
      size: "M",
      age: "7",
      isHereSince: "Janeiro/2019",
      images: [
        {
          src: "adote_mureta2.png",
        },
        {
          src: "adote_mureta3.png",
        },
        {
          src: "adote_mureta4.png",
        },
        {
          src: "adote_mureta5.png",
        },
      ],
    },
  ];

  const paths = data.map((data) => {
    return {
      params: { id: data.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const data = {
    id: 1,
    name: "Mureta",
    type: "dog",
    disabilities: "cão surdo",
    sex: "male",
    size: "M",
    age: "7",
    isHereSince: "Janeiro/2019",
    images: [
      {
        src: "adote_mureta2.png",
      },
      {
        src: "adote_mureta3.png",
      },
      {
        src: "adote_mureta4.png",
      },
      {
        src: "adote_mureta5.png",
      },
      {
        src: "adote_mureta5.png",
      },
    ],
  };

  return {
    props: { data: data },
  };
};
