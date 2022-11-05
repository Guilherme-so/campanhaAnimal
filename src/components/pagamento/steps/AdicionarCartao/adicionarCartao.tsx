import React, { FormEvent, useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MastercardIcon } from "../../../MastercardIcon";
import { ApadrinheContext } from "../../../../context/ApadrinheContext";

import style from "./adicionarCartao.module.scss";

function AdicionarCartao() {
  const router = useRouter();
  const { pix, setPix, boleto, setBoleto } = useContext(ApadrinheContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isUserAddingNewCard, setIsUserAddingNewCard] = useState(false);
  const [numeroDoCartao, setNumeroDoCartao] = useState<any>();
  const [concluirPagamento, setConcluirPagamento] = useState(false);
  const [pixComprovante, setPixComprovantw] = useState("nomedoarquivo.pdf");

  let lastFourDigits = numeroDoCartao?.slice(numeroDoCartao?.length - 4);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleAddNewCard() {
    setIsUserAddingNewCard(true);
  }
  function handleSubmitAddNewCard() {
    setIsUserAddingNewCard(false);
  }

  function handlePaymentFinish() {
    setConcluirPagamento(false);
    router.push("/apadrinhe");
  }

  return (
    <>
      <div className={style.modalContainer}>
        {isOpen && (
          <div className={`${style.modal} ${isOpen && style.active}`}>
            <div className={style.modalContent}>
              <div className={style.modalHeader}>
                <div id={style.closeButton} onClick={() => setIsOpen(false)}>
                  <img src="/assets/images/close-modal.png" alt="close-modal" />
                  {/* <MdOutlineClose size={24} color="#FF9D71" /> */}
                </div>
              </div>

              {concluirPagamento === false ? (
                <div className={style.concluirPayment}>
                  <h2>
                    Deseja concuir o <br />
                    pagamento?
                  </h2>

                  <button onClick={() => setConcluirPagamento((prev) => !prev)}>
                    concluir
                  </button>
                </div>
              ) : (
                <div className={style.pagamentoConcluido}>
                  <img src="/assets/images/Vector.png" alt="concluido" />
                  <h2>Doação finalizada!</h2>
                  <button onClick={handlePaymentFinish}>
                    Voltar para a tela inicial
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className={style.paymentSection}>
        {isUserAddingNewCard ? (
          <div>
            <form onSubmit={handleSubmit}>
              <div className={style.wrapperDebitoCredito}>
                <div className={style.debito}>
                  <label className={style.containerDebito}>
                    <span className={style.checkmarkDebito}></span>
                    <input type="checkbox" name="checkbox" />
                    Débito
                  </label>
                </div>

                <div className={style.credito}>
                  <input type="checkbox" id="Crédito" name="Crédito" />
                  <label htmlFor="Crédito">Crédito</label>
                </div>
              </div>

              <div className={style.inputController}>
                <span>Número do cartão</span>
                <input
                  type="text"
                  value={numeroDoCartao}
                  onChange={(e: any) => setNumeroDoCartao(e.target.value)}
                />
              </div>

              <div className={style.inputController}>
                <span>Nome impresso no cartão</span>
                <input type="text" />
              </div>

              <div style={{ display: "flex", gap: "73px" }}>
                <div className={style.inputController}>
                  <span>Validade</span>
                  <input type="text" />
                </div>

                <div className={style.inputController}>
                  <span>Cvv</span>
                  <input type="text" />
                </div>
              </div>

              <div className={style.inputController}>
                <span>CPF/CNPJ do titular</span>
                <input type="text" />
              </div>

              <button
                type="submit"
                onClick={() => handleSubmitAddNewCard()}
                className={style.saveButton}
                style={{
                  marginTop: "5rem",
                  padding: "10px 40px",
                  backgroundColor: "var(--green-500)",
                  border: "none",
                  borderRadius: "20px",
                }}
              >
                Adicionar
              </button>
            </form>
          </div>
        ) : (
          <>
            {pix ? (
              <div className={style.pixContainer}>
                <h1>Pague com PIX</h1>
                <p className={style.prHeading}>É pratico, seguro e você não perde nenhum minuto a mais.</p>

                <div className={style.pixInfo}>
                  <h2>Informações do Pix</h2>

                  <div className={style.pixInfoDetail1}>
                    <p>Telefone:</p><span>+55 (62 )99478-5547 </span>
                  </div>

                  <div className={style.pixInfoDetail2}>
                    <p>CNPJ:</p><span>0000000-00</span>
                  </div>

                  <div className={style.pixInfoDetail3}>
                    <p>E-mail:</p> <span>campanhaanimal@gmail.com</span>
                  </div>
                </div>

                <div className={style.pixComprovante}>
                  <h2>Enviar Comprovante</h2>
                  <p>Opcional</p>

                  <div className={style.enviarComprovante}>
                    <input type="text" id="boxShadow" value={pixComprovante} />
                    <button>
                      <Image
                        src="/assets/images/file-import.png"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>

                <button className={style.btnConcluir}>Concluir</button>
              </div>
            ) : boleto ? (
              <div className={style.boletoContainer}>
                <h1>Pague com Boleto</h1>
                <p>É pratico, seguro e você não perde nenhum minuto a mais.</p>

                <form onSubmit={handleSubmit} className={style.form}>

                  <div className={style.nomeCompleto}>
                    <label
                      className={style.nomeCampletoLabel}
                      htmlFor="nomeCompleto"
                    >
                      Nome Completo
                    </label>
                    <input type="text" id="nomeCompleto" required />
                  </div>

                  <div className={style.inputControllers}>
                    <div className={style.meta}>
                      <label htmlFor="meta">CPF</label>
                      <input type="text" id="meta" required />
                    </div>
                    <div className={style.ong}>
                      <label htmlFor="ong">CEP</label>
                      <input type="text" id="ong" required />
                    </div>
                  </div>

                  <div className={style.nomeCompleto}>
                    <label
                      className={style.nomeCampletoLabel}
                      htmlFor="nomeCompleto"
                    >
                      Endereço
                    </label>
                    <input type="text" id="nomeCompleto" required />
                  </div>

                  <div className={style.inputControllers}>
                    <div className={style.meta}>
                      <label htmlFor="meta">Cidade</label>
                      <input type="text" id="meta" required />
                    </div>
                    <div className={style.ong}>
                      <label htmlFor="ong">Estado</label>
                      <input type="text" id="ong" required />
                    </div>
                  </div>

                  <button type="submit" className={style.dadosBasicosNext}>
                  Gerar Boleto
                  </button>
                </form>
              </div>
            ) : (
              <>
                {" "}
                <div className={style.paymentCard}>
                  <div
                    className={style.paymentInfo}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <MastercardIcon />
                    <div style={{ marginLeft: "24px" }}>
                      <p>Mastercard débito</p>
                      <span>
                        ****** {lastFourDigits ? lastFourDigits : "5321"}
                      </span>
                    </div>
                  </div>
                  <div
                    className={style.paymentInfo}
                    onClick={() => setPix(!pix)}
                  >
                    <Image
                      src="/assets/images/pix.png"
                      width={40}
                      height={35}
                      layout="fixed"
                    />
                    <div style={{ marginLeft: "24px" }}>
                      <p onClick={() => setPix(!pix)}>Pix</p>
                    </div>
                  </div>
                  <div
                    className={style.paymentInfo}
                    onClick={() => setBoleto(!boleto)}
                  >
                    <Image
                      src="/assets/images/boleto.png"
                      width={30}
                      height={35}
                      layout="fixed"
                    />
                    <div style={{ marginLeft: "24px" }}>
                      <p>Boleto</p>
                    </div>
                  </div>
                  {/* <div className={style.editAndDelete}>
              <button className={style.editButton}>
                <EditIconSmall />
              </button>
              <button className={style.deleteButton}>
                <TrashIconSmall />
              </button>
            </div> */}
                </div>
                <button
                  onClick={() => handleAddNewCard()}
                  className={style.saveButton}
                  style={{
                    marginTop: "5rem",
                    padding: "10px 40px",
                    backgroundColor: "var(--green-500)",
                    border: "none",
                    borderRadius: "20px",
                  }}
                >
                  Adicionar novo cartão
                </button>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default AdicionarCartao;
