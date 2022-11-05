import { useState } from "react";
import { SEO } from "../SEO";
import Image from "next/image";

import { DocumentIcon } from "../components/DocumentIcon";
import { CheckIcon } from "../components/CheckIcon";
import { EditIcon } from "../components/EditIcon";
import { LocationIcon } from "../components/LocationItem";
import { MailIcon } from "../components/MailIcon";
import { PhoneIcon } from "../components/PhoneIcon";
import { MastercardIcon } from "../components/MastercardIcon";
import { EditIconSmall } from "../components/EditIconSmall";
import { TrashIconSmall } from "../components/TrashIconSmall";
import { CloseIcon } from "../components/CloseIcon";
import {CancelAdoption, Modal1, Modal2} from "../components/Modal/ModalTutor";

import style from "../pages/style/tutor.module.scss";

export default function Tutor() {
  const [activeContent, setActiveContent] = useState(1);
  const [acountDetailsActiveButton, setAcountDetailsActiveButton] = useState(1);
  const [isUserAddingNewCard, setIsUserAddingNewCard] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cancelAdoptcao, setCalcelAdocao] = useState(false)

  const [modalAproved, setModalAproved] = useState(false)

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setModalAproved(false);
    setCalcelAdocao(false)
  }

  function handleAddNewCard() {
    setIsUserAddingNewCard(true);
  }
  function handleSubmitAddNewCard() {
    setIsUserAddingNewCard(false);
  }

  return (
    <>
      <SEO
				title='Stheffane carvalho'
				description="Criada por uma equipe 100% voluntária
				para ajudar animais de todas as espécies
				pelo Brasil"
			/>

    <div>

      {modalIsOpen && (
        <Modal1 modalIsOpen={modalIsOpen} closeModal={closeModal} />
      )}

      {cancelAdoptcao && (
        <CancelAdoption cancelAdoptcao={cancelAdoptcao} closeModal={closeModal} />
      )}

      {modalAproved && (
        <Modal2  modalAproved={modalAproved}  closeModal={closeModal} />
      )}

      <div
        className={style.container}
        style={{
          backgroundImage: "url(/assets/images/image_user_background.png)",
        }}
      >
        <button>
          <EditIcon />
        </button>
      </div>
      <div>
        <main className={style.mainContent}>
          <div className={style.tutorImageT} />
          {/* <img
							src="https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
							alt=""
						/>
					</div> */}
          <div className={style.userInfo}>
            <h1>Stheffane carvalho</h1>
            <span>
              Oi gente, eu sou a Buzina! Uma moça pediu ajuda para as tias do
              abrigo porque desde neném eu não consigo andar muito bem. Fiz uma
              bateria de exames, mas os médicos não conseguiram saber a causa
              dessa minha condição. Faço até hoje muita fisioterapia e, por
              causa disso e de muito empenho das pessoas que cuidam de mim, tive
              pequenas evoluções! Tenho minha própria cadeirinha de rodas e
              adoro passear nela
            </span>
            <div className={style.location}>
              <LocationIcon />
              <span>
                Av. Jaceguava, 1699 - Casa Grande, São Paulo - SP, 04870-425
              </span>
            </div>
            <div className={style.contact}>
              <div className={style.contactData}>
                <PhoneIcon />
                <span>(11) 9 9999-9999</span>
              </div>
              <div className={style.contactData}>
                <MailIcon />
                <span>Santuáriodasfadas@gmail.com</span>
              </div>
            </div>
          </div>
        </main>

        <section className={style.handleSelectUserContent}>
          <div className={style.selectedButtonContainer}>
            <button
              onClick={() => setActiveContent(1)}
              className={activeContent === 1 && style.activeButton}
            >
              Geral
            </button>
            <button
              onClick={() => setActiveContent(2)}
              className={activeContent === 2 && style.activeButton}
            >
              Histórico
            </button>
            <button
              onClick={() => setActiveContent(3)}
              className={activeContent === 3 && style.activeButton}
            >
              Detalhes da conta
            </button>
            <button
              onClick={() => setActiveContent(4)}
              className={activeContent === 4 && style.activeButton}
            >
              Notificações
            </button>
          </div>

          <div>
            {activeContent === 1 ? (
              <div className={style.generalCard}>
                <div className={style.cardData}>
                  <h1>3</h1>
                  <span>adoções ja feitas</span>
                </div>
                <div className={style.cardData}>
                  <h1>1</h1>
                  <span>Apadrinhamento</span>
                </div>
                <div className={style.cardData}>
                  <h1>0</h1>
                  <span>Campanhas apoiadas</span>
                </div>
              </div>
            ) : activeContent === 2 ? (
              <>
                <div className={style.historyCardWrapper}>
                  <div className={style.historyCard}>
                    <div className={style.historyCardSelect}>
                      <div className={style.historyCardSelectData}>
                        Filtrar por:
                        <select name="filterBy" id="filterBy">
                          <option value="adoption">Adoção</option>
                          <option value="sponsorship">Apadrinhamento</option>
                          <option value="campaings">Campanhas</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className={style.historyCardData}>
                    <div className={style.imgHistory}>
                      <img src="/assets/images/mureta_base.png" alt="" />
                    </div>

                    <div className={style.cardButtonsWrapper}>
                      <div>
                        <h1 className={style.title}>O Mureta</h1>
                      </div>
                      <div className={style.historyCardButtons}>
                        <>
                          <button onClick={openModal}>
                            <DocumentIcon />
                            Acompanhar adoção
                          </button>
                          
                          <button onClick={() =>setCalcelAdocao(true)}>
                            <Image
                              src="/assets/images/x.png"
                              alt="cancelar-adoçaão"
                              width={25}
                              height={25}
                            />
                            Cancelar adoção
                          </button>
                        </>
                      </div>
                    </div>
                  </div>

                  <div className={style.historyCardData}>
                    <div className={style.imgHistory}>
                      <img src="/assets/images/mureta_base.png" alt="" />
                    </div>

                    <div className={style.cardButtonsWrapper}>
                      <div>
                        <h1 className={style.title}>O Mureta</h1>
                      </div>
                      <div className={style.historyCardButtons}>
                        <button className={style.completed} onClick={() => setModalAproved(true)}>
                          <CheckIcon />
                          Adoção concluida com sucesso
                        </button>
                      </div>
                    </div>
                  </div>

                  <div id={style.seeMore}>
                    Ver mais <img src="/assets/images/Vector.svg" />
                  </div>
                </div>
              </>
            ) : activeContent === 3 ? (
              <div className={style.acountDetailsCard}>
                <div className={style.asideTabs}>
                  <button
                    className={
                      acountDetailsActiveButton === 1 &&
                      style.acountDetailsActive
                    }
                    onClick={() => setAcountDetailsActiveButton(1)}
                  >
                    Configuração da conta
                  </button>
                  <button
                    className={
                      acountDetailsActiveButton === 2 &&
                      style.acountDetailsActive
                    }
                    onClick={() => setAcountDetailsActiveButton(2)}
                  >
                    Redefinir senha
                  </button>
                  <button
                    className={
                      acountDetailsActiveButton === 3 &&
                      style.acountDetailsActive
                    }
                    onClick={() => setAcountDetailsActiveButton(3)}
                  >
                    Dados báncarios
                  </button>
                </div>
                {acountDetailsActiveButton === 1 ? (
                  <div className={style.userInfoCard}>
                    <div className={style.userImageContainer}>
                      <img
                        src="https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                        alt=""
                      />
                    </div>
                    <div className={style.inputsContainer}>
                      <div className={style.inputWrapper}>
                        <div className={style.Input}>
                          <span>Nome</span>
                          <input type="text" />
                        </div>
                        <div className={style.Input}>
                          <span>Cpf</span>
                          <input type="text" />
                        </div>
                      </div>
                      <div className={style.inputWrapper}>
                        <div className={style.Input}>
                          <span>E-mail</span>
                          <input type="email" />
                        </div>
                        <div className={style.Input}>
                          <span>Telefone</span>
                          <input type="text" />
                        </div>
                      </div>
                      <div className={style.inputWrapper}>
                        <div className={style.Input}>
                          <span>CEP</span>
                          <input type="email" />
                        </div>
                        <div className={style.Input}>
                          <span>Endereço</span>
                          <input type="text" />
                        </div>
                      </div>
                      <div className={style.inputWrapper}>
                        <div className={style.Input}>
                          <span>Complemento</span>
                          <input type="email" />
                        </div>
                        <div className={style.Input}>
                          <span>Número</span>
                          <input type="text" />
                        </div>
                      </div>
                      <div className={style.inputWrapper}>
                        <div className={style.Input}>
                          <span>Bairro</span>
                          <input type="email" />
                        </div>
                        <div className={style.Input}>
                          <span>Cidade</span>
                          <input type="text" />
                        </div>
                      </div>
                      <div className={style.inputWrapper}>
                        <div className={style.textarea}>
                          <span>Descrição</span>
                          <textarea placeholder="" />
                        </div>
                      </div>
                    </div>
                    {/* <div className={style.textArea}>
											<span>Cidade</span>
											<textarea placeholder="" />
										</div> */}
                    <button className={style.saveButton}>Salvar</button>
                  </div>
                ) : acountDetailsActiveButton === 2 ? (
                  <div className={style.resetPassContainer}>
                    <h1>Redefinir senha</h1>
                    <form>
                      <div className={style.resetPassInputContainer}>
                        <div className={style.resetPassInputWrapper}>
                          <span>Senha atual</span>
                          <input type="password" />
                        </div>
                        <div className={style.resetPassInputWrapper}>
                          <span>Nova senha</span>
                          <input type="password" />
                        </div>
                        <div className={style.resetPassInputWrapper}>
                          <span>Confirma nova senha</span>
                          <input type="password" />
                        </div>
                      </div>
                      <button type="button" className={style.saveButton}>
                        Redefinir senha
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className={style.paymentSection}>
                    <div style={{ marginBottom: "30px" }}>
                      <h1>Formas de Pagamento</h1>
                      <span>
                        É pratico, seguro e você não perde nenhum minuto a mais.
                      </span>
                    </div>
                    {isUserAddingNewCard ? (
                      <div>
                        <form>
                          <div className={style.ajudeContainer}>
                            <div className={style.customRadio}>
                              <input
                                type="radio"
                                value="0"
                                name="debito"
                                id="debito"
                              />
                              <label htmlFor="debito">Débito</label>
                            </div>

                            <div className={style.customRadio}>
                              <input
                                type="radio"
                                value="1"
                                name="credito"
                                id="credito"
                              />
                              <label htmlFor="credito">Crédito</label>
                            </div>
                          </div>

                          {/* <div className={style.wrapperDebitoCredito}>
                            <div className={style.debito}>
                              <label className={style.containerDebito}>
                                <span className={style.checkmarkDebito}></span>
                                <input type="checkbox" name="checkbox" />
                                Débito
                              </label>

                              <input className={style.inputCheckBox} 
                                type="checkbox" id="Débito" name="Débito" />
                                <label htmlFor="Débito">Débito</label>
                            </div>

                            <div className={style.credito}>
                              <input
                                type="checkbox"
                                id="Crédito"
                                name="Crédito"
                              />
                              <label htmlFor="Crédito">Crédito</label>
                            </div>
                          </div> */}

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              marginTop: "14px",
                            }}
                          >
                            <span>Número do cartão</span>
                            <input type="text" />
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              marginTop: "14px",
                            }}
                          >
                            <span>Nome impresso no cartão</span>
                            <input type="text" />
                          </div>

                          <div style={{ display: "flex", gap: "73px" }}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "14px",
                              }}
                            >
                              <span>Validade</span>
                              <input type="text" />
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "14px",
                              }}
                            >
                              <span>Cvv</span>
                              <input type="text" />
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              marginTop: "14px",
                            }}
                          >
                            <span>CPF/CNPJ do titular</span>
                            <input type="text" />
                          </div>
                          <button
                            type="submit"
                            onClick={() => handleSubmitAddNewCard()}
                            className={style.saveButton}
                          >
                            Adicionar
                          </button>
                        </form>
                      </div>
                    ) : (
                      <>
                        <div className={style.paymentCard}>
                          <div className={style.paymentInfo}>
                            <MastercardIcon />
                            <div style={{ marginLeft: "24px" }}>
                              <p>Mastercard débito</p>
                              <span>******5745</span>
                            </div>
                          </div>
                          <div>
                            <button className={style.editButton}>
                              <EditIconSmall />
                            </button>
                            <button className={style.deleteButton}>
                              <TrashIconSmall />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => handleAddNewCard()}
                          className={style.saveButton}
                        >
                          Adicionar novo cartão
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div style={{ width: "100%", display: "flex" }}>
                <div className={style.notificationContainer}>
                  <img
                    className={style.sino}
                    src="/assets/images/mdi_bell-badge.png"
                    alt="sino"
                    height={40}
                    width={40}
                  />
                  <h1>Notificações</h1>
                  {/* <div className={style.bellIcon}>
										<BellIcon />
									</div> */}
                  <div className={style.notificationData}>
                    <div className={style.notificationUserAndNotification}>
                      <div className={style.cardUserInfo}>
                        <img src="/assets/images/user.png" alt="" />
                      </div>
                      <span>
                        Ong toca das fadas aceitou seu pedido de adoção
                      </span>
                    </div>
                    <button>
                      <CloseIcon />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
{/* 
          <Modal title="Termos e condições">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            lectus neque, maecenas sit quis ornare sagittis a platea. Maecenas
            suscipit enim, id tortor eget adipiscing fermentum. Risus lorem duis
            scelerisque nunc nisl eget placerat orci. Viverra rhoncus arcu massa
            pellentesque magna. Viverra ullamcorper id leo phasellus. Purus eget
            elementum turpis a ornare libero quis. Eget platea diam morbi massa
            sed. Sit eu ac pellentesque euismod enim. Pellentesque eu mauris
            aenean quis tempor sed venenatis. Ante magna duis malesvitae.
            Pellentesque arcu mattis dictum commodo dignissim in sodales nisl
            netus. Elementum vitae gravida dui pharetra volutpat tincidunt urna
            morbi. Nunc, amet sapien in donec fusce viverra. Quis quis nibh
            interdum nibh. Maecenas nisl velit rhoncus nunc. Sem faucibus
            placerat non augue id ac massa vitae, cras. Leo, senectus eu pretium
            sed. Nam eget pulvinar faucibus parturient consequat, egestas
            pellentesque. Egestas lorem risus in sit faucibus a ultrices orci.
            Aliquam ornare varius sapien suspendisse justo bibendum orci lectus.
            Mauris penatibus ut tortor nulla facilisi ullamcorper ipsum
            ultricies a
          </Modal> */}
        </section>
      </div>
    </div>
  </>
  );
}
