import { useEffect, useRef, useState } from "react";
import { api } from "../../services/axios";
import { Button } from "../Button";
import style from "./styles.module.scss";
import { v4 as uuid } from "uuid";

interface IAdoptionResponse {
  title: string;
  description: string;
  image: string;
}

export function Adoption() {
  const containerRef = useRef<HTMLDivElement>();
  const limitPerPage = 3;
  const [adoptions, setAdoptions] = useState<IAdoptionResponse[]>([]);
  const [windowSize, setWindowSize] = useState(0);

  const arrowsIsDisabled = (): boolean => {
    return windowSize <= 1020
      ? adoptions.length < 1
      : adoptions.length <= limitPerPage;
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
    api.get("/dogs").then((response) => {
      setAdoptions(response.data);
    });
  }, []);

  // Todo

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
      <section ref={containerRef} className={style.adoptionContainer}>
        <div className={style.title}>
          <h1>Adote um animal </h1>
        </div>

        <div id={style.arrowLeft} className={style.arrow}>
          <img
            className={`${arrowsIsDisabled() ? "disabledImage" : ""}`}
            src="/assets/images/arrowLeft.svg"
            onClick={handleLeftClick}
            alt="Ícone seta para esquerda"
          />
        </div>
        <div key={uuid()} className={style.adoptionContent}>
          {adoptions.map((data, i) => {
            return (
              <div
                key={uuid()}
                className={`${style.adoption} ${i == 1 && "activeSlider"}`}
              >
                <figure>
                  <img src={data.image} alt="Dog" />
                </figure>
                <div className={style.adoptionInfo}>
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
            alt="Ícone seta para direta"
          />
        </div>
        <div className={style.seeAll}>
          <Button onClick={() => (window.location.href = "/adoption-feed")}>
            Adotar um animal
          </Button>
          <a href="/adoption/create">Cadastrar animal</a>
        </div>
      </section>
    </>
  );
}
