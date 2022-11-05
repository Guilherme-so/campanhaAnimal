import { useEffect, useRef, useState } from "react";
import { api } from "../../services/axios";
import { Button } from "../Button";
import style from "./styles.module.scss";
import { v4 as uuid } from "uuid";

interface ICampaignsResponse {
  title: string;
  description: string;
  image: string;
}

export function Campaigns() {
  const limitPerPage = 3;
  const [campaigns, setCampaigns] = useState<ICampaignsResponse[]>([]);
  const [windowSize, setWindowSize] = useState(0);
  const containerRef = useRef<HTMLDivElement>();

  const arrowsIsDisabled = (): boolean => {
    return windowSize <= 1060
      ? campaigns.length < 1
      : campaigns.length <= limitPerPage;
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
    api.get("/dogs").then((response) => {
      setCampaigns(response.data);
    });
  }, []);

  function handleLeftClick() {
    if (windowSize <= 1020) {
      const classToAddRemove = "activeSlider";
      const elementContainer = containerRef.current;

      const sliderActive = elementContainer.children[2].querySelector(
        `.${classToAddRemove}`
      );

      const prevElement =
        sliderActive.previousElementSibling ||
        elementContainer.children[2].lastElementChild;

      prevElement.classList.add(classToAddRemove);
      sliderActive.classList.remove(classToAddRemove);

      return;
    }
  }

  function handleRightClick() {
    if (windowSize <= 1020) {
      const classToAddRemove = "activeSlider";
      const elementContainer = containerRef.current;

      const sliderActive = elementContainer.children[2].querySelector(
        `.${classToAddRemove}`
      );

      const nextElement =
        sliderActive.nextElementSibling ||
        elementContainer.children[2].firstElementChild;

      nextElement.classList.add(classToAddRemove);
      sliderActive.classList.remove(classToAddRemove);

      return;
    }
  }

  return (
    <>
      <section ref={containerRef} className={style.campaignsContainer}>
        <div className={style.title}>
          <h1>Campanhas em destaques</h1>
        </div>

        <div id={style.arrowLeft} className={style.arrow}>
          <img
            className={`${arrowsIsDisabled() ? "disabledImage" : ""}`}
            src="/assets/images/arrowLeft.svg"
            onClick={handleLeftClick}
            alt="Ícone seta para esquerda"
          />
        </div>
        <div className={style.campaignsContent}>
          {campaigns.map((data, i) => {
            return (
              <div
                key={uuid()}
                className={`${style.campaing} ${i == 1 && "activeSlider"}`}
              >
                <figure>
                  <img src={data.image} alt="Dog" />
                </figure>
                <div className={style.campaingInfo}>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>

                  <Button> Participar </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div id={style.arrowRight} className={style.arrow}>
          <img
            className={`${arrowsIsDisabled() ? "disabledImage" : ""}`}
            src="/assets/images/arrowRight.svg"
            onClick={handleRightClick}
            alt="Ícone seta para direita"
          />
        </div>
        <div className={style.seeAll}>
          <a href="/campanhas">
            Ver todos
            <img src="/assets/images/arrow.svg" alt="Ícone seta para direita" />
          </a>
        </div>
      </section>
    </>
  );
}
