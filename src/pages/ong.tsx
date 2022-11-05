import React, { useState } from "react";
import Image from "next/image";
import { EditIcon } from "../components/EditIcon";
import { LocationIcon } from "../components/LocationItem";
import { PhoneIcon } from "../components/PhoneIcon";
import { MailIcon } from "../components/MailIcon";

import style from "./style/ong.module.scss";
import { apadrinheAnimais, fakeCampaigns } from "../dummyData";
import { useRouter } from "next/router";
import CampaignsProgress from "../components/CampaignsProgress";
import { animals } from "../dogs";
import { SEO } from "../SEO";

function Ong() {
  const router = useRouter();
  const [activeContent, setActiveContent] = useState(1);

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handlePushDetail(slug: string) {
    router.push(`/campanhas/${slug}`);
  }

  return (
    <div>
      
      <SEO
				title='Santuário das fadas'
				description="Criada por uma equipe 100% voluntária
				para ajudar animais de todas as espécies
				pelo Brasil"
			/>

      <div
        className={style.heroBackground}
        // style={{
        //   backgroundImage: "url(/assets/images/image_user_background.png)",
        // }}
      >
        <img src="/assets/images/image_user_background.png" alt="" />
      </div>

      <main className={style.mainContent}>
        <div className={style.wrapper}>
          <div className={style.imgDiv}>
            <img src="/assets/images/user-big-radius.png" alt="user" />
          </div>

          <div className={style.userInfo}>
            <h1>Santuário das fadas</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita aperiam incidunt mollitia iure, iste corrupti provident quasi. Mollitia quas accusantium tempora doloribus quae doloremque nisi nam ipsa culpa veritatis vitae officia at nobis minus amet facilis, maxime optio quis. Deserunt, optio explicabo quo laboriosam reprehenderit ipsam earum impedit. Molestiae, pariatur.
            </span>

            <div className={style.userInfoDetail}>
              <div className={style.location}>
                <LocationIcon />
                <span>
                  Av. Jaceguava, 1699 - Casa Grande, São Paulo - SP, 04870-425
                </span>
              </div>
              <div className={style.contact}>
                <div className={style.contactData}>
                  <Image src="/assets/images/cell.png" alt="" width={30} height={42} layout='fixed' />
                  {/* <PhoneIcon /> */}
                  <span>(11) 9 9999-9999</span>
                </div>
                <div className={style.contactData}>
                  <MailIcon />
                  <span>Santuáriodasfadas@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.userInfoDetailBottom}>
          <div className={style.location}>
            {/* <Image src="/assets/images/localizacao.png" alt='' width={20} height={30} layout={"fixed"} /> */}
            <LocationIcon />
            <span>
              Av. Jaceguava, 1699 - Casa Grande, São Paulo - SP, 04870-425
            </span>
          </div>
          <div className={style.contact}>
            <div className={style.contactData}>
            <Image src="/assets/images/cell.png" alt='' width={20} height={30} layout={"fixed"} />
              {/* <PhoneIcon /> */}
              <span>(11) 9 9999-9999</span>
            </div>
            <div className={style.contactData}>
            <Image src="/assets/images/fontisto_email.png" alt='' width={30} height={30} layout={"fixed"} />
              {/* <MailIcon /> */}
              <span>Santuáriodasfadas@gmail.com</span>
            </div>
          </div>
        </div>
      </main>
      
      <section className={style.handleSelectUserContent}>
        <div className={style.selectedButtonContainer}>
          <button
            onClick={() => setActiveContent(1)}
            className={activeContent === 1 && style.activeButton}
          >
            Adoção
          </button>
          <button
            onClick={() => setActiveContent(2)}
            className={activeContent === 2 && style.activeButton}
          >
            Apadrinhamento
          </button>
          <button
            onClick={() => setActiveContent(3)}
            className={activeContent === 3 && style.activeButton}
          >
            Campanhas
          </button>
        </div>
      </section>

      <div>
        {activeContent === 1 ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <section className={style.content}>
              {animals.map((animal) => {
                return (
                  <div className={style.card} key={animal.name}>
                    <img src="/assets/images/mureta.png" alt="" />
                    
                    <div className={style.cardUserInfo}>
                      <img src="/assets/images/user.png" alt="" />
                      <span>Toca das fadas</span>
                    </div>
                    
                    <div className={style.cardContentAdote}>
                      <h1>
                        Adote {animal.sex === "female" ? "a" : "o"}{" "}
                        {animal.name}
                      </h1>
                      <span>{animal.sex === "female" ? "Fêmea" : "Macho"}</span>
                      <span>{animal.age} anos de idade</span>
                      {animal.disabilities && (
                        <span>{animal.disabilities}</span>
                      )}

                      <span>no abrigo desde:</span>
                      <span>{animal.isHereSince}</span>
                      <button
                        type="button"
                        onClick={() =>
                          (window.location.href = "/adoption-details/1")
                        }
                      >
                        Sobre mim
                      </button>
                    </div>
                  </div>
                );
              })}
            </section>
            <div id={style.seeMore}>
              Ver mais <img src="/assets/images/Vector.svg" />
            </div>
          </div>
        ) : activeContent === 2 ? (
          <div className={style.todosAnimais}>
            <div className={style.animaisContainer}>
              {apadrinheAnimais.map((animal) => {
                return (
                  <div key={animal.id} className={style.animalSolo}>
                    <div className={style.onwer}>
                      <img src="/assets/images/user.png" alt="user" />
                      <p>toca das fadas</p>
                    </div>
                    <img
                      className={style.animalSoloThumbnail}
                      src={animal.thumbnail.url}
                      alt={animal.thumbnail.alt}
                    />
                    <div className={style.animalDetail}>
                      <h2>
                        Apadrinhe {animal.genero === "macho" ? "o" : "a"}{" "}
                        {animal.nome}{" "}
                      </h2>
                      <p>{capitalizeFirstLetter(animal.genero)}</p>
                      <p>{animal.idade} anos de idade</p>
                      <p>
                        no abrigo desde: <br />
                        {animal.isHereSince}
                      </p>
                      <p>Custos mensais: R$ {animal.custos}</p>

                      <button
                        onClick={() => router.push(`apadrinhe/${animal.slug}`)}
                      >
                        sobre min
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <section className={style.contentCardsContainer}>
              {fakeCampaigns?.map((data) => {
                return (
                  <div
                    className={style.card}
                    key={data.id}
                    onClick={() => handlePushDetail(data.slug)}
                  >
                    <img src={data.thumbnail.url} alt={data.thumbnail.alt} />

                    <div className={style.cardUserInfo}>
                      <img src="/assets/images/user.png" alt="" />
                      <span>ONG BNG</span>
                    </div>

                    <div className={style.cardContent}>
                      <h1>{data.name}</h1>
                      <span>ID da doação: {data.donationId}</span>
                    </div>

                    <div className={style.cardAnimalInfo}>
                      <div className={style.cardArrecadation}>
                        <h1>Arrecadado R${data.Arrecadado} </h1>
                      </div>

                      <div className={style.cardProgress}>
                        {data.progress}%
                        <CampaignsProgress value={data.progress} />
                      </div>

                      <div className={style.cardAnimalGoal}>
                        <span>Meta {data.meta}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
            <div id={style.seeMore}>
              Ver mais <img src="/assets/images/Vector.svg" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ong;
