import { useRouter } from "next/router";
import { Button } from "../Button";
import style from "./styles.module.scss";

export function Banner() {
  const router = useRouter()

  return (
    <section className={style.bannerContainer}>
      <div className={style.bannerContent}>
        <h1>
          A primeira plataforma de financiamento coletivo da causa animal!
        </h1>
        <p>
          Criada por uma equipe 100% voluntária <br /> para ajudar animais de
          todas as espécies <br />
          pelo Brasil
        </p>

        <div className={style.bannerFooter}>
          <Button onClick={() => router.push("/campanhas")}>Apoiar campanha</Button>
          <Button isTransparent={true} onClick={()=> router.push("/criar-campanha")} >Criar campanha</Button>
        </div>
      </div>
    </section>
  );
}
