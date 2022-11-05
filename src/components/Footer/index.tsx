import Image from "next/image";
import style from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={style.footer}>

		<div className={style.dogAside}>
			<img src='/assets/images/dog.png' alt="dog image" />
		</div>

      <div className={style.footerWrapper}>
        
		<div className={style.aboutUs}>
          <img
            src="/assets/images/logo.svg"
            loading="lazy"
            alt="Logo Campanha Animal"
          />
          <p>
            Somos um time de <br />
			voluntários da causa animal <br />
			liderados pela equipe da <br />
			ONG SANTUÁRIO DAS <br />
			FADAS
          </p>
        </div>

		<div className={style.redesSociais}>
          <div className={style.footerCategory}>
            <h2>Redes Sociais</h2>
            <p>Conheça e siga nossos <br />
			canais. <br />
			Faça parte do nosso <br />
			trabalho.</p>

            <a className={style.insta}
              href="https://instagram.com/santuario_das_fadas"
              target="_blank"
              rel="noopener"
            >
              <img
                src="/assets/images/instagramBig.svg"
                alt="Ícone Instagram"
                loading="lazy"
				width={60}
				height={60}
              />
            </a>
            <img
              src="/assets/images/emailBig.svg"
              alt="Ícone email"
              loading="lazy"
			  width={60}
			  height={60}
            />
          </div>
        </div>


        <div className={style.contact} >
          <h2>Contato</h2>
          <p>+55 (62 )99478-5547 </p>
          <p>+55 (62 )99478-5547 </p>
          <p className={style.email}>campanhaanimal@gmail.com</p>
        </div>

      </div>
      <div className={style.politicAndTerms}>
        <p>Política de privacidade | Termos de uso</p>
      </div>
    </footer>
  );
}
