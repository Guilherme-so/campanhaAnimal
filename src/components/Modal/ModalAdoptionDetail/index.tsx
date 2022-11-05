import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";

import style from "./modalAdoptionDetail.module.scss";

export function ModalAdoption({ isModalOpen, closeModal }) {
  const [comfirmAdoption, setComfirmAdoption] = useState(false);

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
        className={style.canfirmAdoptionModel}
        isOpen={isModalOpen}
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

          {comfirmAdoption === true ? (
            <div className={style.solicitacaoEnviada}>
              <img src="/assets/images/check-circle-green.png" alt="check" />
              <h2 className={style.heading}>Solicitação enviada </h2>
               <h2> com sucesso</h2>

               <p>Seus dados foram enviados para a Ong, ela <br />
                entrará em contato em breve.</p>
            </div>
          ) : (
            <div className={style.confirmAdoption}>
              <p>
                Tem certeza que deseja <br />
                continuar com a adoção?
              </p>

              <div className={style.buttonsWrapper}>
                <button className={style.cancel} onClick={() => closeModal()}>
                  Cancelar
                </button>
                <button
                  className={style.comfirm}
                  onClick={() => setComfirmAdoption(true)}
                >
                  Continuar
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
