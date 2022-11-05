import { useRef, useState } from "react";
import { SEO } from "../SEO";
import { useAuth } from "../hooks/useAuth";
import { MultiRangeSlider } from "../components/MultiRange";
import { animals } from "../dogs";

import style from "./style/adoptionFeed.module.scss";
import Image from "next/image";
import { AdoteAnimals } from "../dummyData";

export default function AdoptionFeed() {
  const [filter, setFilter] = useState(false);
  const [filterOption, setFilterOption] = useState("porte");

  return (
    <>
      <SEO
        title="Adoção"
        description="Criada por uma equipe 100% voluntária
        para ajudar animais de todas as espécies pelo Brasil"
      />

      <div className={style.containerBg}>
        <div className={style.elipse}>
          <img src="/assets/images/elipse.png" alt="elipse" />
        </div>

        <div className={style.wrapper}>
          <div className={style.apadrinheInfo}>
            <h2>Bem-vindo a nossa</h2>
            <h1>ÁREA DE ADOÇÃO ONLINE</h1>
            <p>
              Estamos muito felizes de ter você aqui! Seu apoio é essencial para
              continuarmos resgatando, reabilitando e encontrando lares cheios
              de amor para esses patudinhos!
            </p>

            <span>Não pode adotar agora, mas quer ajudar?</span>

            <button
              className={style.apadrinheButtonComoFunciona}
              // onClick={() => setIsOpen(true)}
            >
              Ajude aqui
            </button>
          </div>

          <div className={style.imageHeroContainer}>
            <img
              className={style.imgHero}
              src="/assets/images/woman-with-dog.png"
              alt="image hero"
            />
          </div>
        </div>
      </div>

      {/* <section className={style.bannerContainer}>
        <div className={style.bannerContent}>
          <h1>Bem-vindo a nossa</h1>
          <h2>ÁREA DE ADOÇÃO ONLINE</h2>
          <p>
            Estamos muito felizes de ter você aqui! Seu apoio é essencial para
            continuarmos resgatando, reabilitando e encontrando lares cheios de
            amor para esses patudinhos!
          </p>
          <span>Não pode adotar agora, mas quer ajudar?</span>
          <button type="button">Ajude aqui</button>
        </div>

        <img src="/assets/images/elipse.png" alt="" />
        <img
					className={style.womanImg}
					src="/assets/images/woman-with-dog.png"
					alt=""
				/>
      </section> */}

      <section className={style.mobileSearchContainer}>
        <div className={style.mobileSearchContainerButtons}>
          <button onClick={() => setFilter((prev) => !prev)}>
            <svg
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 17.924H6M0 3.34033H4H0ZM18 3.34033H8H18ZM0 10.6322H12H0ZM18 10.6322H16H18ZM0 17.924H2H0Z"
                stroke="#FF9D71"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M6 5.42358C7.10457 5.42358 8 4.49083 8 3.34021C8 2.18959 7.10457 1.25684 6 1.25684C4.89543 1.25684 4 2.18959 4 3.34021C4 4.49083 4.89543 5.42358 6 5.42358Z"
                stroke="#FF9D71"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M14 12.7156C15.1046 12.7156 16 11.7828 16 10.6322C16 9.48159 15.1046 8.54883 14 8.54883C12.8954 8.54883 12 9.48159 12 10.6322C12 11.7828 12.8954 12.7156 14 12.7156Z"
                stroke="#FF9D71"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 20.0071C5.10457 20.0071 6 19.0743 6 17.9237C6 16.7731 5.10457 15.8403 4 15.8403C2.89543 15.8403 2 16.7731 2 17.9237C2 19.0743 2.89543 20.0071 4 20.0071Z"
                stroke="#FF9D71"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Filtrar
          </button>
          <button>
            <svg
              width="12"
              height="17"
              viewBox="0 0 12 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1.81937C7.65 1.81937 9 3.22565 9 4.94443C9 6.58509 7.425 9.24139 6 11.1164C4.575 9.16327 3 6.58509 3 4.94443C3 3.22565 4.35 1.81937 6 1.81937ZM6 0.256836C3.525 0.256836 1.5 2.36625 1.5 4.94443C1.5 8.46013 6 13.5384 6 13.5384C6 13.5384 10.5 8.382 10.5 4.94443C10.5 2.36625 8.475 0.256836 6 0.256836ZM6 3.3819C5.175 3.3819 4.5 4.08504 4.5 4.94443C4.5 5.80382 5.175 6.50696 6 6.50696C6.825 6.50696 7.5 5.80382 7.5 4.94443C7.5 4.08504 6.825 3.3819 6 3.3819ZM12 13.5384C12 15.2571 9.3 16.6634 6 16.6634C2.7 16.6634 0 15.2571 0 13.5384C0 12.5227 0.9 11.6633 2.325 11.0383L2.775 11.7414C2.025 12.1321 1.5 12.6008 1.5 13.1477C1.5 14.2415 3.525 15.1009 6 15.1009C8.475 15.1009 10.5 14.2415 10.5 13.1477C10.5 12.6008 9.975 12.1321 9.15 11.7414L9.6 11.0383C11.1 11.6633 12 12.5227 12 13.5384Z"
                fill="#FF9D71"
              />
            </svg>
            Localização
          </button>
        </div>

        <input
          className={style.filterSearch}
          type="text"
          placeholder="Buscar"
        />
      </section>

      {filter && (
        <section
          className={style.sidebarFilterContainer}
          // onClick={()=> setFilter(prev => (!prev))}
        >
          {filterOption === "animais" ? (
            <div className={style.sidebarFilter}>
              <div className={style.animaisHeaderFilter}>
                <div>
                  <Image
                    onClick={() => setFilterOption("")}
                    src="/assets/images/left-indicator-filter.png"
                    alt=""
                    width={18}
                    height={14}
                  />
                  <span className={style.filterAnimaisTitle}>Animais</span>
                </div>
                <button className={style.aplicar}>aplicar</button>
              </div>

              <div className={style.checkboxes}>
                <div className={style.checkboxCont}>
                  <input type="checkbox" id="caes" name="Cães" value="Cães" />
                  <label htmlFor="caes">Cães</label>
                </div>
                <div className={style.checkboxCont}>
                  <input
                    type="checkbox"
                    id="gatos"
                    name="Gatos"
                    value="Gatos"
                  />
                  <label htmlFor="gatos">Gatos</label>
                </div>
                <div className={style.checkboxCont}>
                  <input
                    type="checkbox"
                    id="caprinos"
                    name="Caprinos"
                    value="Caprinos"
                  />
                  <label htmlFor="caprinos">Caprinos</label>
                </div>
                <div className={style.checkboxCont}>
                  <input
                    type="checkbox"
                    id="Cavalos"
                    name="Cavalos"
                    value="Cavalos"
                  />
                  <label htmlFor="Cavalos">Cavalos</label>
                </div>
                <div className={style.checkboxCont}>
                  <input
                    type="checkbox"
                    id="Coelhos"
                    name="Coelhos"
                    value="Coelhos"
                  />
                  <label htmlFor="Coelhos">Coelhos</label>
                </div>
              </div>
            </div>
          ) : filterOption === "sexo" ? (
            <div className={style.sidebarFilter}>
              <div className={style.animaisHeaderFilter}>
                <div>
                  <Image
                    onClick={() => setFilterOption("")}
                    src="/assets/images/left-indicator-filter.png"
                    alt=""
                    width={18}
                    height={14}
                  />
                  <span className={style.filterAnimaisTitle}>Sexo</span>
                </div>
                <button className={style.aplicar}>aplicar</button>
              </div>

              <div className={style.checkboxes}>
                <div className={style.checkboxCont}>
                  <input
                    type="checkbox"
                    id="Fêmea"
                    name="Fêmea"
                    value="Fêmea"
                  />
                  <label htmlFor="Fêmea">Fêmea</label>
                </div>
                <div className={style.checkboxCont}>
                  <input
                    type="checkbox"
                    id="Macho"
                    name="Macho"
                    value="Macho"
                  />
                  <label htmlFor="Macho">Macho</label>
                </div>
              </div>
            </div>
          ) : filterOption === "porte" ? (
            <div className={style.sidebarFilter}>
              <div className={style.animaisHeaderFilter}>
                <div>
                  <Image
                    onClick={() => setFilterOption("")}
                    src="/assets/images/left-indicator-filter.png"
                    alt=""
                    width={18}
                    height={14}
                  />
                  <span className={style.filterAnimaisTitle}>Porte</span>
                </div>
                <button className={style.aplicar}>aplicar</button>
              </div>

              <div className={style.checkboxes}>
                <div className={style.checkboxCont}>
                  <input type="checkbox" id="G" name="G" value="G" />
                  <label htmlFor="G">G (mais de 25kg)</label>
                </div>
                <div className={style.checkboxCont}>
                  <input type="checkbox" id="M" name="M" value="M" />
                  <label htmlFor="M">M (até 25kg)</label>
                </div>
                <div className={style.checkboxCont}>
                  <input type="checkbox" id="P" name="P" value="P" />
                  <label htmlFor="P">P (até 10kg)</label>
                </div>
              </div>
            </div>
          ) : filterOption === "idade" ? (
            <div className={style.sidebarFilter}>
              <div className={style.animaisHeaderFilter}>
                <div>
                  <Image
                    onClick={() => setFilterOption("")}
                    src="/assets/images/left-indicator-filter.png"
                    alt=""
                    width={18}
                    height={14}
                  />
                  <span className={style.filterAnimaisTitle}>Idade</span>
                </div>
                <button className={style.aplicar}>aplicar</button>
              </div>

              <div className={style.idadeRange}>
                <MultiRangeSlider
                  min={0}
                  max={10}
                  onChange={({ min, max }: { min: number; max: number }) =>
                    console.log(`min = ${min}, max = ${max}`)
                  }
                />
              </div>
            </div>
          ) : (
            <div className={style.sidebarFilter}>
              <div className={style.filterHeader}>
                <div className={style.filterWrapper}>
                  <div onClick={() => setFilter((prev) => !prev)}>
                    <Image
                      src="/assets/images/close-filterSidebar.png"
                      alt="close-sidebar-filter"
                      width={30}
                      height={30}
                      layout="fixed"
                    />
                  </div>

                  <button>Limpar tudo</button>
                </div>
                <h1>Filtrar</h1>
              </div>

              <ul className={style.filterOptions}>
                <li
                  className={style.filterOption}
                  onClick={() => setFilterOption("animais")}
                >
                  Animais
                  <Image
                    src="/assets/images/right-indicator-filter.png"
                    alt="right-indicator"
                    width={10}
                    height={18}
                  />
                </li>
                <li
                  className={style.filterOption}
                  onClick={() => setFilterOption("sexo")}
                >
                  Sexo
                  <Image
                    src="/assets/images/right-indicator-filter.png"
                    alt="right-indicator"
                    width={10}
                    height={18}
                  />
                </li>
                <li
                  className={style.filterOption}
                  onClick={() => setFilterOption("porte")}
                >
                  Porte
                  <Image
                    src="/assets/images/right-indicator-filter.png"
                    alt="right-indicator"
                    width={10}
                    height={18}
                  />
                </li>
                <li
                  className={style.filterOption}
                  onClick={() => setFilterOption("idade")}
                >
                  Idade
                  <Image
                    src="/assets/images/right-indicator-filter.png"
                    alt="right-indicator"
                    width={10}
                    height={18}
                  />
                </li>
              </ul>
            </div>
          )}
        </section>
      )}

      <section className={style.mainContent}>
        <section className={style.sidebar}>
          <div className={style.sidebarSearchContainer}>
            <span>Pesquisar</span>
            <input type="text" placeholder="Buscar" id="test" />
          </div>
          <div className={style.sidebarSearchContainer}>
            <span>Localização</span>
            <input
              type="text"
              placeholder="Digite o nome da sua cidade/estado"
            />
          </div>
          <div className={style.sidebarSearchContainer}>
            <span>Animais</span>
            <div className={style.checkboxContainer}>
              <input type="checkbox" id="caes" name="Cães" value="Cães" />
              <label htmlFor="caes">Cães</label>
            </div>
            <div className={style.checkboxContainer}>
              <input type="checkbox" id="gatos" name="Gatos" value="Gatos" />
              <label htmlFor="gatos">Gatos</label>
            </div>
          </div>
          <div className={style.sidebarSearchContainer}>
            <span>Sexo</span>
            <div className={style.checkboxContainer}>
              <input type="checkbox" id="scales" name="Fêmea" value="Fêmea" />
              <label htmlFor="Fêmea">Fêmea</label>
            </div>
            <div className={style.checkboxContainer}>
              <input type="checkbox" id="scales" name="Macho" value="Macho" />
              <label htmlFor="Macho">Macho</label>
            </div>
          </div>
          <div className={style.sidebarSearchContainer}>
            <span>Porte</span>
            <div className={style.checkboxContainer}>
              <input
                type="checkbox"
                id="scales"
                name="G (mais de 25kg)"
                value="G (mais de 25kg)"
              />
              <label htmlFor="G (mais de 25kg)">G (mais de 25kg)</label>
            </div>
            <div className={style.checkboxContainer}>
              <input
                type="checkbox"
                id="scales"
                name="M (até 25kg)"
                value="M (até 25kg)"
              />
              <label htmlFor="M (até 25kg)">M (até 25kg)</label>
            </div>
            <div className={style.checkboxContainer}>
              <input
                type="checkbox"
                id="scales"
                name="P (até 10kg)"
                value="P (até 10kg)"
              />
              <label htmlFor="P (até 10kg)">P (até 10kg)</label>
            </div>
          </div>
          <div className={style.sidebarSearchContainer}>
            <span>Idade</span>
          </div>
          <MultiRangeSlider
            min={0}
            max={10}
            onChange={({ min, max }: { min: number; max: number }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </section>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <section className={style.content}>
            <h1>Conheça os animais</h1>
            {AdoteAnimals.map((animal) => {
              return (
                <div className={style.card} key={animal.name}>
                  <img src="/assets/images/mureta.png" alt="" />

                  <div className={style.onwer}>
                      <img src="/assets/images/user.png" alt="user" />
                      <p>toca das fadas</p>
                  </div>

                  {/* <div className={style.cardUserInfo}>
                    <img src="/assets/images/user.png" alt="" />
                    <span>Toca das fadas</span>
                  </div> */}

                  <div className={style.cardContent}>
                    <h1>
                      Adote {animal.sex === "female" ? "a" : "o"} {animal.name}
                    </h1>
                    <span>{animal.sex === "female" ? "Fêmea" : "Macho"}</span>
                    <span>{animal.age} anos de idade</span>
                    {animal.disabilities && <span>{animal.disabilities}</span>}

                    <span>no abrigo desde:</span>
                    <span>{animal.isHereSince}</span>
                    <button
                      type="button"
                      onClick={() =>
                        (window.location.href = "/adoption-details/1")
                      }
                    >
                      Sobre mim
                    </button>
                  </div>
                </div>
              );
            })}
          </section>
          <div id={style.seeMore}>
            Ver mais <img src="/assets/images/Vector.svg" />
          </div>
        </div>
      </section>
    </>
  );
}
