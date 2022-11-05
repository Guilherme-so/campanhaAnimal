import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";
import { FaBars } from "react-icons/fa";

import style from "./styles.module.scss";

export function Header() {
	const router = useRouter()
	const [menuShow, setMenuShow] = useState(false);
	const { userData } = useAuth();
	const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
	const body = document.querySelector("body");
    const overflow = menuShow ? "hidden" : "auto";
    body.style.overflow = overflow;
	}, [menuShow]);

  function hiddenMenu() {
    setMenuShow((prev) => !prev);
    navRef.current.classList.toggle(style.smLeft);
  }

  return (
    <header
      className={`${style.headerContainer} ${
        menuShow === true && style.responsiveActive
      }`}
    >
      <div className={style.headerContent}>
        <div className={style.responsiveButton}>
          <FaBars size={40} color="#99E7B7" onClick={hiddenMenu} />
        </div>

        <div
          onClick={() => router.push("/")}
          className={style.logo}
        ></div>
        <div id={style.overlay} onClick={hiddenMenu}></div>
        <nav ref={navRef}>
          <div className={style.logo}></div>

          <div className={`${style.dropdown}`}>
            <li className={router.pathname === '/' ? style.active : 
				router.pathname === '/campanhas' ? style.active : 
				router.pathname === '/criar-campanha' ? style.active : 
			''}>Campanhas</li>

            <div className={style.dropdownContent}>
              <li onClick={() => router.push("/campanhas")}>
                Campanhas no ar
              </li>
              <li onClick={() => router.push("/criar-campanha")}>
                Criar campanha
              </li>
            </div>
          </div>
          <div className={style.dropdown}>
            <li className={
				router.pathname === '/adoption-feed' ? style.active : 
				router.pathname === '/apadrinhe' ? style.active : 
				router.pathname === '/colaborate' ? style.active : 
				''}>Participar</li>

            <div className={style.dropdownContent}>
              <li onClick={() => router.push("/adoption-feed")}>
                Adote
              </li>
              <li onClick={() => router.push("/apadrinhe")}>
                Apadrinhe
              </li>
              <li onClick={() => router.push("/colaborate")}>
                Colabore
              </li>
            </div>
          </div>
          <li className={router.pathname === "/events" ? style.active : ''} onClick={() => router.push("/events")}>Eventos</li>
          <li className={router.pathname === "/contato" ? style.active : ''} onClick={() => router.push("/contato")}>Contatos</li>
          <li className={router.pathname === "/sobre" ? style.active : ''} onClick={() => router.push("/sobre")}>Sobre</li>
        </nav>

        <nav className={style.right}>
          <li className={router.pathname === "/login" ? style.active : ''}
            onClick={() =>
              !userData?.email && router.push("/login")
            }
          >
            {userData?.email || "Login"}
          </li>
          <li>
            <button>Apoiar campanha</button>
          </li>
        </nav>
      </div>
    </header>
  );
}
