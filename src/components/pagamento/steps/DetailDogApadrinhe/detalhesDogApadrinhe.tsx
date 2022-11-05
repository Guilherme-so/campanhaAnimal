import Image from "next/image";
import React, { useContext } from "react";
import { ApadrinheContext } from "../../../../context/ApadrinheContext";
import { apadrinheAnimais } from "../../../../dummyData";

import style from "./detailDogApadrinhe.module.scss";

function DetalhesDogApadrinhe({ setpage }) {
  //@ts-ignore
  const { apadrinheAnimalId } = useContext(ApadrinheContext);

  const animalApadrinhado = apadrinheAnimais.find(
    (name) => name.slug === apadrinheAnimalId
  );

  console.log(animalApadrinhado);

  return (
    <div>
      <div className={style.aboutWrapper}>

        <div className={style.animalImgDiv}>
        <img
          className={style.animalImage}
          src={animalApadrinhado?.thumbnail.url}
          alt={animalApadrinhado?.thumbnail.alt}
          width="225px"
          height="159px"
          />
          </div>
        <div className={style.about}>
          <h1>
            Apadrinhe {animalApadrinhado?.genero === "macho" ? "o" : "a"}{" "}
            {animalApadrinhado?.nome}
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            beatae id ea. Quod voluptas beatae dolor corrupti, qui nihil
            dolorem.
          </p>
        </div>
      </div>
      <div className={style.ajudeContainer}>
          <div className={style.customRadio}>
            <input type="radio" value="0" name="question" id="ajudeUmaVezSO" />
            <label htmlFor="ajudeUmaVezSO">Ajudar Uma Vez Só</label>
          </div>

          <div className={style.customRadio}>
            <input type="radio" value="1" name="question" id="ajudarMensal" />
            <label htmlFor="ajudarMensal">Ajudar mensal</label>
          </div>
        </div>

      <button
        className={style.buttonNext}
        onClick={() => setpage((old) => old + 1)}
      >
        Proximo
      </button>
    </div>
  );
}

export default DetalhesDogApadrinhe;
