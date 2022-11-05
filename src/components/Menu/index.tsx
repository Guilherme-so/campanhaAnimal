import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { MultiRangeSlider } from "../MultiRange";
import style from "./styles.module.scss";

interface IMenuProps {
  onApplyFilter?(content: string | [] | {}): void;
}

export function Menu({ onApplyFilter }: IMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [maxAge, setMax] = useState(0);
  const [minAge, setMin] = useState(0);

  const menuRef = useRef<HTMLDivElement>();
  const animalsRef = useRef<HTMLDivElement>();
  const genreRef = useRef<HTMLDivElement>();
  const porteRef = useRef<HTMLDivElement>();
  const ageRef = useRef<HTMLDivElement>();

  const flushAll = useCallback(() => {
    const allCheckbox = menuRef.current.querySelectorAll(
      "input[type=checkbox]:checked"
    );

    allCheckbox.forEach((el: HTMLInputElement) => {
      el.checked = false;
    });
  }, []);

  const applyFilters = useCallback(() => {
    const dogsCheckbox = menuRef.current.querySelectorAll(
      "#dogsSubMenu input[type=checkbox]:checked"
    );

    const genreCheckbox = menuRef.current.querySelectorAll(
      "#genreSubMenu input[type=checkbox]:checked"
    );

    const porteCheckbox = menuRef.current.querySelectorAll(
      "#porteSubMenu input[type=checkbox]:checked"
    );
    const ageCheckbox = menuRef.current.querySelectorAll(
      "#agedSubMenu input[type=checkbox]:checked"
    );

    const animalsFilter = [],
      genreFilter = [],
      porteFilter = [],
      ageFilter = [];

    dogsCheckbox.forEach((el: HTMLInputElement) => {
      animalsFilter.push(el.value);
    });

    genreCheckbox.forEach((el: HTMLInputElement) => {
      genreFilter.push(el.value);
    });

    porteCheckbox.forEach((el: HTMLInputElement) => {
      porteFilter.push(el.value);
    });

    ageCheckbox.forEach((el: HTMLInputElement) => {
      ageFilter.push(el.value);
    });

    const concatArray = [
      { animalsFilter, genreFilter, porteFilter, minAge, maxAge },
    ];
    onApplyFilter(concatArray);
  }, []);

  const subMenuOpen = useCallback(
    (element: HTMLDivElement, isMenu: boolean = false) => {
      if (isMenu) {
        animalsRef.current.style.display = "none";
        genreRef.current.style.display = "none";
        porteRef.current.style.display = "none";
        ageRef.current.style.display = "none";
        return;
      }
      element.style.display = "block ";
    },
    []
  );

  useEffect(() => {
    const body = document.querySelector("body");
    const overflow = isMenuOpen ? "hidden" : "auto";
    body.style.overflow = overflow;
    window.location.href = "#";
  }, [isMenuOpen]);

  useEffect(() => {
    if (window.outerWidth > 769) {
      const inputs = document.querySelectorAll("input[type='checkbox']");

      if (inputs.length > 0) {
        inputs.forEach((el) => {
          el.addEventListener("change", () => {
            applyFilters();
          });
        });
      }

      return () => {
        inputs.forEach((el) => {
          el.removeEventListener("change", () => {});
        });
      };
    }
  }, []);

  return (
    <nav ref={menuRef} id={style.menu}>
      <li onClick={() => setIsMenuOpen(!isMenuOpen)} id={style.mobile}>
        <img src="/assets/images/filtericon.svg" />
        Filtrar
      </li>
      <li id={style.mobile}>
        <img src="/assets/images/locationicon.svg" />
        Localização
      </li>
      <li>
        <div className={style.inputArea}>
          <div className={style.inputWithIcon}>
            <label htmlFor="searchInput">Pesquisar</label>
            <input
              id="searchInput"
              placeholder="Buscar"
              onKeyUp={() => {
                // TO DO filter search
                console.log("eheh");
              }}
            />
            <img src="/assets/images/searchIcon.svg" />
          </div>
        </div>
      </li>
      <li id={style.desktop}>
        <div className={style.inputArea}>
          <div className={style.inputWithIcon}>
            <label htmlFor="locationInput">Localização</label>
            <input
              id="locationInput"
              placeholder="Digite o nome da sua cidade/estado"
              onKeyUp={() => {
                // TO DO filter search
                console.log("eheh");
              }}
            />
            <img src="/assets/images/locationicon.svg" />
          </div>
        </div>
      </li>

      {isMenuOpen && (
        <div id="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}

      <div
        id={style.subMenu}
        className={`${isMenuOpen ? style.showAnimation : style.outAnimation}`}
      >
        <div className={style.subMenuHeader}>
          <img
            onClick={() => setIsMenuOpen(false)}
            src="/assets/images/closeSVG.svg"
          />
          <Button onClick={() => flushAll()}>Limpar tudo</Button>
        </div>
        <h3>Filtrar</h3>

        <div id={style.categories}>
          <li onClick={() => subMenuOpen(animalsRef.current)}>Animais</li>
          <li onClick={() => subMenuOpen(genreRef.current)}>Sexo</li>
          <li onClick={() => subMenuOpen(porteRef.current)}>Porte</li>
          <li onClick={() => subMenuOpen(ageRef.current)}>Idade</li>
        </div>

        <div
          ref={animalsRef}
          id="dogsSubMenu"
          className={`${style.categoriesMenu} `}
        >
          <div className={style.subMenuHeader} id="boxShadow">
            <img
              onClick={() => subMenuOpen(menuRef.current, true)}
              src="/assets/images/backSVG.svg"
            />{" "}
            <span>Animais</span>
            <Button onClick={() => applyFilters()}>Aplicar</Button>
          </div>
          <div id="desktop">
            <label>Animais</label>
          </div>
          <div className={style.checkboxArea}>
            <input value="dogs" id="dogs" type="checkbox" />
            <span className={style.checkedBox}></span>
            <label htmlFor="dogs">Caẽs</label>
          </div>
          <div className={style.checkboxArea}>
            <input value="cats" id="cats" type="checkbox" />
            <span className={style.checkedBox}></span>
            <label htmlFor="cats">Gatos</label>
          </div>
          <div className={style.checkboxArea}>
            <input value="caprinos" id="caprinos" type="checkbox" />
            <span className={style.checkedBox}></span>
            <label htmlFor="caprinos">Caprinos</label>
          </div>
          <div className={style.checkboxArea}>
            <input value="horses" id="horses" type="checkbox" />
            <span className={style.checkedBox}></span>
            <label htmlFor="horses">Cavalos</label>
          </div>
          <div className={style.checkboxArea}>
            <input value="bunny" id="bunny" type="checkbox" />
            <span className={style.checkedBox}></span>
            <label htmlFor="bunny">Coelho</label>
          </div>
        </div>

        <div
          ref={porteRef}
          id="porteSubMenu"
          className={`${style.categoriesMenu} `}
        >
          <div className={style.subMenuHeader} id="boxShadow">
            <img
              onClick={() => subMenuOpen(menuRef.current, true)}
              src="/assets/images/backSVG.svg"
            />
            <span>Porte</span>
            <Button onClick={() => applyFilters()}>Aplicar</Button>
          </div>
          <div id="desktop">
            <label>Porte</label>
          </div>
          <div className={style.checkboxArea}>
            <input value="g" id="g25" type="checkbox" />
            <span className={style.checkedBox}></span>
            <label htmlFor="g25">G (mais de 25kg)</label>
          </div>

          <div className={style.checkboxArea}>
            <input value="m" id="m25" type="checkbox" />
            <span className={style.checkedBox}></span>
            <label htmlFor="m25">M (até 25kg)</label>
          </div>

          <div className={style.checkboxArea}>
            <input value="p" id="p10" type="checkbox" />
            <span className={style.checkedBox}></span>
            <label htmlFor="p10">P (até 10kg)</label>
          </div>
        </div>

        <div
          ref={genreRef}
          id="genreSubMenu"
          className={`${style.categoriesMenu} `}
        >
          <div className={style.subMenuHeader} id="boxShadow">
            <img
              onClick={() => subMenuOpen(menuRef.current, true)}
              src="/assets/images/backSVG.svg"
            />
            <span>Gênero</span>
            <Button onClick={() => applyFilters()}>Aplicar</Button>
          </div>

          <div id="desktop">
            <label>Gênero</label>
          </div>
          <div className={style.checkboxArea}>
            <input value="female" id="female" type="checkbox" />
            <span className={style.checkedBox}></span>
            <label htmlFor="female">Fêmea</label>
          </div>
          <div className={style.checkboxArea}>
            <input value="male" id="male" type="checkbox" />
            <span className={style.checkedBox}></span>
            <label htmlFor="male">Macho</label>
          </div>
        </div>

        <div
          ref={ageRef}
          id="ageSubMenu"
          className={`${style.categoriesMenu} `}
        >
          <div className={style.subMenuHeader} id="boxShadow">
            <img
              onClick={() => subMenuOpen(menuRef.current, true)}
              src="/assets/images/backSVG.svg"
            />
            <span>Idade</span>
            <Button onClick={() => applyFilters()}>Aplicar</Button>
          </div>
          <div id="desktop">
            <label>Idade</label>
          </div>
          <div id={style.padding}>
            <MultiRangeSlider
              min={0}
              max={14}
              onChange={({ min, max }: { min: number; max: number }) => {
                setMax(max);
                setMin(min);
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
