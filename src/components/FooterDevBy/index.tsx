import style from "./styles.module.scss";

export default function FooterCopy() {
  return (
    <>
      <div>
        <section className={style.footerCopy}>
          <p>Copyright © 2022 Campanha Animal - Todos os Direitos Reservados</p>

          <div className={style.developedBy}>
            <p>Desenvolvido por:</p>
            <a href="https://www.linkedin.com/in/guilherme-so/" target="_blank">Guilherme</a>
          </div>
        </section>
      </div>
    </>
  );
}
