import { useRouter } from "next/router";
import React from "react";
import { events } from "../../dummyData";
import { SEO } from "../../SEO";

import style from "../style/eventDetail.module.scss";

function EventDetail() {
  const rote = useRouter()
  const router = useRouter().query;
  const eventDetail = events.find((event) => event.slug === router.eventDetail);

  
  const backgroundImage = {
    backgroundImage: `url(${eventDetail?.thumbnail.url})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: -10,
    opacity: .7,
    filter: `blur(5px)`,
  };

  return (
    <div>
      
      <SEO
				title={eventDetail?.name}
				description="Criada por uma equipe 100% voluntária
				para ajudar animais de todas as espécies
				pelo Brasil"
			/>

      <div className={style.headerDetail}>
        <p>
          <img src="/assets/images/home.svg" alt="" />
          <img src="/assets/images/mdi_chevron-right.png" alt="" />
          <span className={style.eventos} onClick={() => rote.push("/events")}>eventos</span>
          <img src="/assets/images/mdi_chevron-right.png" alt="" />
          <span>{eventDetail?.name}</span>
        </p>
      </div>

      <div className={style.container}>
        <div style={backgroundImage} className={style.imageContaienr}>
          <img
            src={`${eventDetail?.thumbnail?.url}`}
            alt={`${eventDetail?.thumbnail.alt}`}
          />
        </div>
        <img
          className={style.imgTop}
          src={`${eventDetail?.thumbnail.url}`}
          alt={`${eventDetail?.thumbnail.alt}`}
        />
      </div>

      <div className={style.containerAbout}>
        <div>
          <h1 className={style.title}>
            <span>{eventDetail?.name}</span>
          </h1>

          <p className={style.placeAndDate}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2714 6C19.2814 8.17 19.0514 10.73 17.9414 12.81C17.0014 14.5 15.6514 15.93 14.5014 17.5C14.0014 18.2 13.5014 18.95 13.1314 19.76C13.0014 20.03 12.9114 20.31 12.8114 20.59C12.7114 20.87 12.6214 21.15 12.5314 21.43C12.4414 21.69 12.3314 22 12.0014 22C11.6114 22 11.5014 21.56 11.4214 21.26C11.1814 20.53 10.9414 19.83 10.5714 19.16C10.1514 18.37 9.62142 17.64 9.08142 16.93L18.2714 6ZM9.12142 8.42L5.82142 12.34C6.43142 13.63 7.34142 14.73 8.21142 15.83C8.42142 16.08 8.63142 16.34 8.83142 16.61L13.0014 11.67L12.9614 11.68C11.5014 12.18 9.88142 11.44 9.30142 10C9.22142 9.83 9.16142 9.63 9.12142 9.43C9.0664 9.09894 9.0664 8.76106 9.12142 8.43V8.42ZM6.58142 4.62L6.57142 4.63C4.95142 6.68 4.67142 9.53 5.64142 11.94L9.63142 7.2L9.58142 7.15L6.58142 4.62ZM14.2214 2.36L11.0014 6.17L11.0414 6.16C12.3814 5.7 13.8814 6.28 14.5614 7.5C14.7114 7.78 14.8314 8.08 14.8714 8.38C14.9314 8.76 14.9514 9.03 14.8814 9.4V9.41L18.0814 5.61C17.2449 4.08939 15.8726 2.93445 14.2314 2.37L14.2214 2.36ZM9.89142 6.89L13.8014 2.24L13.7614 2.23C13.1814 2.08 12.5914 2 12.0014 2C10.0314 2 8.17142 2.85 6.85142 4.31L6.83142 4.32L9.89142 6.89Z"
                fill="#FF9D71"
              />
            </svg>
            <span className={style.place}>{eventDetail?.adress}</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19H5V8H19V19ZM16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H18V1H16ZM17 12H12V17H17V12Z"
                fill="#FF9D71"
              />
            </svg>
            <span className={style.place}>
              {eventDetail?.schedule_date} as {eventDetail?.event_hour}
            </span>
          </p>
        </div>

        <div className={style.localizacao}>
          <button>Localização</button>
        </div>

      </div>

      <div className={style.userWrapper}>
        <div className={style.user}>
          <img src="/assets/images/user_Image_big.png" alt="user image" />
          <h2>Organizado por</h2>
          <p>Santuário das fadas</p>

          <button>Saiba mais</button>
        </div>
        <div className={style.userAbout}>
          <h3>Sobre o evento</h3>
          <p className={style.userP}>Nos dias 24 e 25 de junho (sábado e domingo) acontecerá a “Feira Vegana Solidária no SuperShopping Osasco”, na região metropolitana de São Paulo. Com entrada gratuita, o evento reunirá diversas atividades e comercializará produtos livres de sofrimento animal. <br />
          <br />
          Com organização do Instituto Surya Solidária e apoio da ONG Bendita Adoção, a feira acontecerá, quinzenalmente, até dezembro. Serão dois dias onde serão oferecidos cosméticos veganos (sem elementos de origem animal e livre de testes em animais), produtos artesanais, souvenirs, entre outras novidades que ajudam a divulgar e a manter os projetos sociais.

          </p>
        </div>
      </div>

    </div>
  );
}

export default EventDetail;
