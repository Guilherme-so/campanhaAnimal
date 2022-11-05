import { useEffect, useRef, useState } from "react";
import { api } from "../../services/axios";
import { Button } from "../Button";
import style from "./styles.module.scss";
import { v4 as uuid } from "uuid";

interface IPatronizeResponse {
  title: string;
  description: string;
  image: string;
}

export function Patronize() {
  const containerRef = useRef<HTMLDivElement>();
  const limitPerPage = 3;
  const [patronizes, setPatronizes] = useState<IPatronizeResponse[]>([]);
  const [windowSize, setWindowSize] = useState(0);

  const arrowsIsDisabled = (): boolean => {
    return windowSize <= 1060
      ? patronizes.length < 1
      : patronizes.length <= limitPerPage;
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
    api.get("/dogs").then((response) => {
      setPatronizes(response.data);
    });
  }, []);

  // Todo
  function handleLeftClick() {
    if (windowSize <= 1020) {
      const classToAddRemove = "activeSlider";
      const elementContainer = containerRef.current;

      const sliderActive = elementContainer.children[3].querySelector(
        `.${classToAddRemove}`
      );

      const prevElement =
        sliderActive.previousElementSibling ||
        elementContainer.children[3].lastElementChild;

      prevElement.classList.add(classToAddRemove);
      sliderActive.classList.remove(classToAddRemove);

      return;
    }
  }

  function handleRightClick() {
    if (windowSize <= 1020) {
      const classToAddRemove = "activeSlider";
      const elementContainer = containerRef.current;

      const sliderActive = elementContainer.children[3].querySelector(
        `.${classToAddRemove}`
      );

      const nextElement =
        sliderActive.nextElementSibling ||
        elementContainer.children[3].firstElementChild;

      nextElement.classList.add(classToAddRemove);
      sliderActive.classList.remove(classToAddRemove);

      return;
    }
  }

  return (
    <>
      <section ref={containerRef} className={style.patronizeContainer}>
        <svg className={style.svg}>
          <clipPath id="patronize" clipPathUnits="objectBoundingBox">
            <path d="M0.48,0 C0.558,-0.002,0.624,0.053,0.697,0.089 C0.8,0.14,0.958,0.122,0.994,0.254 C1,0.386,0.883,0.484,0.841,0.612 C0.803,0.723,0.837,0.876,0.761,0.951 C0.686,1,0.576,0.966,0.48,0.969 C0.38,0.972,0.271,1,0.188,0.969 C0.103,0.901,0.095,0.754,0.065,0.634 C0.035,0.515,-0.029,0.387,0.015,0.275 C0.058,0.163,0.18,0.155,0.27,0.102 C0.339,0.061,0.403,0.002,0.48,0"></path>
          </clipPath>
        </svg>

        <div className={style.title}>
          <h1>Apadrinhe um animal </h1>
        </div>

        <div id={style.arrowLeft} className={style.arrow}>
          <img
            className={`${arrowsIsDisabled() ? "disabledImage" : ""}`}
            src="/assets/images/arrowLeft.svg"
            onClick={handleLeftClick}
            alt="Ícone seta para esquerda"
            loading="lazy"
          />
        </div>
        <div className={style.patronizeContent}>
          {patronizes.map((data, i) => {
            return (
              <div
                key={uuid()}
                className={`${style.patronize} ${i == 1 && "activeSlider"}`}
              >
                <figure>
                  <img src={data.image} alt="Dog" loading="lazy" />
                </figure>
                <div className={style.patronizeInfo}>
                  <h3>{data.title}</h3>
                  <p>{data.description}</p>
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
            loading="lazy"
          />
        </div>
        <div className={style.seeAll}>
          <Button onClick={() => (window.location.href = "/apadrinhe")}>
            Apadrinhe um animal
          </Button>
          <a>Cadastrar animal</a>
        </div>
      </section>
    </>
  );
}
