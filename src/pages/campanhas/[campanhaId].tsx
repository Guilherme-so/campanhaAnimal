import React, { FormEvent, useRef } from "react";
import { useRouter } from "next/router";
import { fakeCampaigns } from "../../dummyData";
import CampaignsProgress from "../../components/CampaignsProgress";

import style from "../style/campaignDetail.module.scss";
import { SEO } from "../../SEO";

function CampanhaId() {
  const rote = useRouter();
  const { campanhaId } = useRouter().query;
  const carousel = useRef(null);

  const campanhaDetail = fakeCampaigns.find(
    (campanha) => campanha.slug === campanhaId
  );

  function handleClipBoard() {
    if (typeof window !== "undefined") {
      const pathname = window.location.href;
      navigator.clipboard.writeText(pathname);
    }
  }

  function handleLeftClick(e: FormEvent) {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function handleRightClick(e: FormEvent) {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <div>

      <SEO
				title={campanhaDetail?.name}
				description="Desenvolvida pela equipe da ONG santuário das fadas, A Plataforma campanha animal conta com o empenho de um time voluntários dedicados á causa animal que oferecem seu tempo e talento a essa iniciativa para ajudar animais de todas as espécies pelo Brasil."
			/>


      <div className={style.headerDetail}>
        <p>
          <img src="/assets/images/home.svg" alt="" />
          <img src="/assets/images/mdi_chevron-right.png" alt="" />
          <span
            className={style.campanhasNoAr}
            onClick={() => rote.push("/campanhas")}
          >
            Campanha no ar
          </span>
          <img src="/assets/images/mdi_chevron-right.png" alt="" />
          <span className={style.campanhaName}>{campanhaDetail?.name}</span>
        </p>
      </div>

      {/* -----------------------------------------------------------------------------------------------------------------       */}

      <div className={style.mainDetail}>

        <div className={style.gridH1}>
          <h1 className={style.campanhaName}> {campanhaDetail?.name}</h1>
        </div>

        <div className={style.detailWrapper}>
          <div>
            
            <img className={style.imgThumbnail} src={campanhaDetail?.thumbnail.url} alt={campanhaDetail?.thumbnail.alt} />
            {/* </div> */}
            <h1 className={style.campanhaName1}> {campanhaDetail?.name}</h1>

            <div className={style.subMain}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                beatae unde iusto tempore aut nisi quibusdam modi dolorem quas
                voluptatem?
              </p>

              <h3>Campartilhe essa campanha</h3>

              <div className={style.clipboard}>
                <input type="text" value={`/campanhas/${campanhaId}`} />
                <button onClick={handleClipBoard}>Copiar</button>
              </div>
            </div>

          </div>

          <div className={style.detailCampaign}>
            <div className={style.ongDetail}>
              <img
                src="/assets/images/user.png"
                alt="perfil ong"
                width={60}
                height={60}
              />
              <p>ONG toca bng</p>
            </div>

            <CampaignsProgress value={campanhaDetail?.progress} />

            <h3 className={style.arrecadado}>Arrecadado</h3>
            <h2 className={style.arrecadadoPrice}>
              R${campanhaDetail?.Arrecadado}
            </h2>

            <p className={style.meta}>
              Meta <br />
              {campanhaDetail?.meta}
            </p>

            <p className={style.apoiadores}>
              Apoiadores <br />
              80
            </p>

            <p className={style.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                beatae unde iusto tempore aut nisi quibusdam modi dolorem quas
                voluptatem?
              </p>

            <button className={style.buttonApoiar}>$ Apoiar</button>

            <h3 className={style.shareCampain}>Campartilhe essa campanha</h3>

            <div className={style.clipboard}>
                <input type="text" value={`/campanhas/${campanhaId}`} />
                <button onClick={handleClipBoard}>Copiar</button>
            </div>

          </div>

        </div>
      </div>

      <div className={style.carouselWrapper}>
        <h1>Veja também:</h1>
        <div className={style.carrosselContent}>
          <div className={style.carousel} ref={carousel}>
            {fakeCampaigns.map((campanha) => {
              return (
                <div key={campanha.id} className={style.campanhaDetailCoursel}
                onClick={() => rote.push(`/campanhas/${campanha.slug}`)}
                >
                  {/* <div className={style.onwer}>
                    <img src="/assets/images/user.png" alt="user" />
                    <p>toca das fadas</p>
                  </div> */}
                  <img
                    className={style.campanhaThumbnail}
                    src={campanha.thumbnail.url}
                    alt={campanha.thumbnail.alt}
                  />

                  <div className={style.campanhaAbout}>

                    <div className={style.heading}>
                      <h3>{campanha.name}</h3>
                      <p className={style.donationId}>
                        ID da doação: {campanha.donationId}
                      </p>
                    </div>

                    <div className={style.downPart}>
                      <p>Arrecadado R${campanha.Arrecadado}</p>

                      <div className={style.progressbar}>
                        {campanha.progress}%

                        <div className={style.barraDeProgresso}>
                          <div 
                          className={style.indicadorBar} 
                          style={{ transform: `translateX(-${100 - campanha.progress}%)` }}
                          />
                        </div>

                      </div>

                    <p className={style.meta}>meta R${campanha.meta}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className={style.buttonsLeft} onClick={handleLeftClick}>
            <img
              className={style.imgLeft}
              src="/assets/images/mdi_chevron-left-circle-outline (1).png"
              alt="left"
            />
          </button>
          <button className={style.buttonsRight} onClick={handleRightClick}>
            <img
              className={style.imgRight}
              src="/assets/images/mdi_chevron-left-circle-outline.png"
              alt="right"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampanhaId;
