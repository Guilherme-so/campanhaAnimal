import styles from './modal.module.scss';
import Link from 'next/link';
// import ShowModal from '../../hooks/modal';
// import { useState } from 'react';
type ModalHeaderProps = {
  onClose?: () => void;
  id?: string;
};

const ModalHeader = ({ id = 'modal', onClose }: ModalHeaderProps) => {
  const handleOutClick = e => {
    if (e.target.id === id) onClose();
  };
  return (
    <div id={id} className={styles.modal} onClick={handleOutClick}>
      <div className={styles.content}>
        <div className={styles.headerModal}>
          <Link href="/">
            <a>
              <img src="logo-horizontal.svg" alt="" />
            </a>
          </Link>
          <div className={styles.closeModal} onClick={onClose}>
            <img src="close-purple.svg" alt="" />
          </div>
        </div>
        <div className={styles.linkModal}>
          <img src="loan-icon.svg" alt="" />
          <Link href="/emprestimo ">
            <a>Emprestimo consignado</a>
          </Link>
        </div>
        <div className={styles.linkModal}>
          <img src="card-icon.svg" alt="" />
          <Link href="/cartao-credito">
            <a>Cartão de Crédito</a>
          </Link>
        </div>
        <div className={styles.linkModal}>
          <img src="about-icon.svg" alt="" />
          <Link href="/sobre">
            <a>Sobre nós</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ModalHeader;
