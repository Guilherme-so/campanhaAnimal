import { Button } from "../Button";
import style from "./styles.module.scss";

interface IDogBoxData {
  data: {
    id: number;
    img: string;
    owner: string;
    title: string;
    description: string;
  };
}

export function DogBox({ data: dog }: IDogBoxData) {
  return (
    <>
      <div key={dog.id} className={style.dogBox}>
        <div className={style.dogBoxHeader}>
          <figure>
            <img src={dog.img} alt="Cachorro" />
          </figure>
          <div className={style.dataDog}>
            <div className={style.dataDogTitle}>
              <img
                src="/assets/images/avatarIco.png"
                alt="Owner"
                loading="lazy"
              />
            </div>
            <div className={style.dataDogContent}>{dog.owner}</div>
          </div>
        </div>
        <div className={style.dogBoxContent}>
          <h3>{dog.title}</h3>
          <div id={style.content}>
            <p>{dog.description}</p>
          </div>

          <Button>Sobre mim</Button>
        </div>
      </div>
    </>
  );
}
