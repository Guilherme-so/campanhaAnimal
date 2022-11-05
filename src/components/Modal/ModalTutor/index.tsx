import { useState } from "react";
import Image from "next/image";
import { Check } from "phosphor-react";
import Modal from "react-modal"

import style from "./modal.module.scss"

export function Modal1({modalIsOpen,closeModal}) {
  
    return (
    <div>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
        className={style.myModal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        //onAfterOpen={afterOpenModal}
        // style={customStyles}
      >
        <div className={style.modalContainer}>
          <button className={style.btnCloseModal} onClick={closeModal}>
            <Image
              src="/assets/images/akar-icons_circle-x-fill.png"
              alt="modal-close"
              width={30}
              height={30}
            />
          </button>

          <div className={style.modalWrapper}>
            <div className={style.modalImg}>
              <img
                src="/assets/images/mureta_base.png"
                alt=""
                width={250}
                height={200}
              />
            </div>

            <div className={style.description}>
              <h2>Adote o Mureta</h2>
              <p>
                Eu já tive uma casa, mas depois de 3 anos eu não tinha mais
                espaço na vida família, então me deixaram no abrigo. Chorei por
                noites seguidas, não queria comer e só ficava tentando entender
                o que eu tinha feito para ser descartado. Meus tios falam que eu
                sou um dos meninos mais doces do Instituto e que não tem nada de
                errado comigo.
              </p>

              <div className={style.subdesc}>
                <p>Idade: Até 10 anos</p>
                <p>Porte: G (mais de 25kg)</p>
                <p> Sexo: Macho</p>
              </div>
            </div>
          </div>

          <div className={style.processModal}>
            <div className={style.processItem}>
              <div className={style.selected}>
                <Check className="circleEmoji" size={25} fontWeight="bold" />
              </div>

              <p>
                Solicitação <br />
                enviada
              </p>
            </div>

            <div className={style.processItem}>
              <div className={style.selected}>
                <Image
                  src="/assets/images/file.png"
                  className="circleEmoji"
                  width={15}
                  height={32}
                />
              </div>
              <p>
                Avaliando <br />
                solicitação
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}


export function Modal2({modalAproved,closeModal}) {
  
    return (
    <div>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
        className={style.myModal}
        isOpen={modalAproved}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        //onAfterOpen={afterOpenModal}
        // style={customStyles}
      >
        <div className={style.modalContainer}>
          <button className={style.btnCloseModal} onClick={closeModal}>
            <Image
              src="/assets/images/akar-icons_circle-x-fill.png"
              alt="modal-close"
              width={30}
              height={30}
            />
          </button>

          <div className={style.modalWrapper}>
            <div className={style.modalImg}>
              <img
                src="/assets/images/mureta_base.png"
                alt=""
                width={250}
                height={200}
              />
            </div>

            <div className={style.description}>
              <h2>Adote o Mureta</h2>
              <p>
                Eu já tive uma casa, mas depois de 3 anos eu não tinha mais
                espaço na vida família, então me deixaram no abrigo. Chorei por
                noites seguidas, não queria comer e só ficava tentando entender
                o que eu tinha feito para ser descartado. Meus tios falam que eu
                sou um dos meninos mais doces do Instituto e que não tem nada de
                errado comigo.
              </p>

              <div className={style.subdesc}>
                <p>Idade: Até 10 anos</p>
                <p>Porte: G (mais de 25kg)</p>
                <p> Sexo: Macho</p>
              </div>
            </div>
          </div>

          <div className={style.processModal}>
            <div className={style.processItem}>
              <div className={style.selected}>
                <Check className="circleEmoji" size={25} fontWeight="bold" />
              </div>

              <p>
                Solicitação <br />
                enviada
              </p>
            </div>

            <div className={style.processItem}>
              <div className={style.selected}>
                <Image
                  src="/assets/images/file.png"
                  className="circleEmoji"
                  width={15}
                  height={32}
                />
              </div>
              <p>
                Avaliando <br />
                solicitação
              </p>
            </div>

            <div className={style.processItem}>
            <div className={style.selected}>
                <Check className="circleEmoji" size={25} fontWeight="bold" />
            </div>
              <p>
              Adoção <br />
              Aprovada
              </p>
            </div>

          </div>
        </div>
      </Modal>
    </div>
  );
}



export function CancelAdoption({cancelAdoptcao,closeModal}) {
    const [cancelAdoption, setCancelAdoption] = useState(false)

    return (
    <div>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
        className={style.cancelAdoptionModel}
        isOpen={cancelAdoptcao}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        //onAfterOpen={afterOpenModal}
        // style={customStyles}
      >
        <div className={style.modalContainer}>
          <button className={style.btnCloseModal} onClick={closeModal}>
            <Image
              src="/assets/images/akar-icons_circle-x-fill.png"
              alt="modal-close"
              width={30}
              height={30}
            />
          </button>

          {cancelAdoption ? (
            <div className={style.cancelAdoption}>
                    <div className={style.sucessoCancel}>
                        <Check className="circleEmoji" size={35} fontWeight="bold" />
                    </div>
                <p>Adoção cancelada <br />
                 com sucesso!</p>
            </div>

          ) : (
          <div className={style.cancelAdoption}>
            <p>Tem certeza que deseja <br />
             cancelar a adoção?</p>
            <button onClick={()=>setCancelAdoption(true)}>Cancelar</button>
          </div>
          )}

        </div>
      </Modal>
    </div>
  );
}

