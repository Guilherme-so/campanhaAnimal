import { useRouter } from "next/router";
import { SEO } from "../../SEO";
import CampaignsProgress from "../../components/CampaignsProgress";
import { fakeCampaigns } from "../../dummyData";

import style from "../style/campaigns.module.scss";
import Image from "next/image";

export default function Campaigns() {
  const router = useRouter();

  function handlePushDetail(slug: string) {
    router.push(`/campanhas/${slug}`);
  }

  return (
    <div>
      <SEO
        title="Campanhas"
        description="Criada por uma equipe 100% voluntária
				para ajudar animais de todas as espécies
				pelo Brasil"
      />

      <div className={style.containerBg}>
        <div className={style.elipse}>
          <img src="/assets/images/elipse.png" alt="elipse" />
        </div>

        <div className={style.wrapper}>
          <div className={style.apadrinheInfo}>
            <h1>Nós ajude a salvar vidas</h1>
            <p>
              Nesse momento difícil, a única coisa que pode ser <br />
              contagiante é a solidariedade. Vamos fazer o bem!
            </p>
          </div>

          <div className={style.imageHeroContainer}>
            <img
              className={style.imgHero}
              src="/assets/images/woman-with-many-dogs.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>

      <section className={style.contentContainer}>
        <div className={style.contentMenu}>
          <h1>Campanhas no ar</h1>

          <form>
            <div className={style.search}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Pesquisar por eventos"
              />
              <button>Buscar</button>
            </div>
          </form>
        </div>

        <section className={style.contentCardsContainer}>
          {fakeCampaigns?.map((data) => {
            return (
              <div
                className={style.card}
                key={data.id}
                onClick={() => handlePushDetail(data.slug)}
              >
              
                  <img
                    className={style.imgThumb}
                    src={data.thumbnail.url}
                    alt={data.thumbnail.alt}
                  />

                  <div className={style.onwer}>
                      <img src="/assets/images/user.png" alt="user" />
                      <p>ONG BNG</p>
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
      </section>
    </div>
  );
}
