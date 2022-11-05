import { Button } from "../Button";
import style from "./styles.module.scss";

export function Benefits() {
  return (
    <section className={style.benefitsContainer}>
      <div className={style.benefitsContent}>
        <h1>
          Descubra as vantagens da <br /> nossa plataforma
        </h1>

        <div className={style.videoContainer}>
          <video controls>
            <source
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
              type="video/webm"
            />
          </video>
        </div>

        <div className={style.benefits}>
          <div className={style.benefitsInfo}>
            <img src="/assets/images/check-circle.svg " alt="Ícone de check" width={50} height={50}/>
            <h2>
              Menor taxa para <br />
              financiamento coletivo
            </h2>
          </div>

          <div className={style.benefitsInfo}>
            <img src="/assets/images/check-circle.svg " alt="Ícone de check" width={50} height={50}/>
            <h2>Adote e apadrinhe</h2>
          </div>

          <div className={style.benefitsInfo}>
            <img src="/assets/images/check-circle.svg " alt="Ícone de check" width={50} height={50}/>
            <h2>
              E muitas outras <br />
              vantagens!
            </h2>
          </div>

          <div></div>
          <div>
            <Button>Saiba mais</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
