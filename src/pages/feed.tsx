import { Button } from "../components/Button";
import { DogBox } from "../components/DogBox";
import { Menu } from "../components/Menu";
import { SEO } from "../SEO";
import style from "./style/feed.module.scss";

const data = [
  {
    id: 1,
    img: "https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png",
    owner: "Toca das fadas",
    title: "Adote o Mureta",
    description: "Macho 7 anos de idade cão surdo no abrigo desde:Janeiro/2019",
  },
  {
    id: 2,
    img: "https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png",
    owner: "Toca das fadas",
    title: "Adote o Mureta",
    description: "Macho 7 anos de idade cão surdo no abrigo desde:Janeiro/2019",
  },
  {
    id: 3,
    img: "https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png",
    owner: "Toca das fadas",
    title: "Adote o Mureta",
    description: "Macho 7 anos de idade cão surdo no abrigo desde:Janeiro/2019",
  },
  {
    id: 4,
    img: "https://s2.glbimg.com/nvjFq8VRjyrpdQqaOeywz-5DFwY=/e.glbimg.com/og/ed/f/original/2021/08/27/captura_de_tela_2021-08-27_as_11.01.15.png",
    owner: "Toca das fadas",
    title: "Adote o Mureta",
    description: "Macho 7 anos de idade cão surdo no abrigo desde:Janeiro/2019",
  },
];

export default function Feed() {
  function getFilterApplied(e) {
    // To do when API finished
    console.log(e);
  }
  return (
    <>
      <SEO title="Área de adoção" />

      <section className={style.feedContainer}>
        <div className={style.feedHeader}>
          <h4>Bem-vindo a nossa</h4>
          <h3>ÁREA DE ADOÇÃO ONLINE</h3>

          <div className={style.feedHeaderContent}>
            <span>
              Estamos muito felizes de ter você aqui! Seu apoio é essencial para
              continuarmos resgatando, reabilitando e encontrando lares cheios
              de amos para esses patudinhos!
            </span>
          </div>
          <a href="#">Não posso adotar agora, mas quero ajudar!</a>

          <Button onClick={() => (window.location.href = "/colabore")}>
            Ajude aqui
          </Button>
        </div>
        <div id={style.grid}>
          <div className={style.feedMenu}>
            <Menu onApplyFilter={getFilterApplied} />
          </div>

          <div className={style.feedContent}>
            <h3>Conheça os animais</h3>
            <div className={style.containerBox}>
              <DogBox data={data[0]} />
              <DogBox data={data[1]} />
              <DogBox data={data[2]} />
              <DogBox data={data[3]} />
            </div>

            <div id={style.seeMore}>
              Ver mais <img src="/assets/images/Vector.svg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
