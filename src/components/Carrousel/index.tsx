import styles from './carrousel.module.scss';
import React from 'react';

export function Carrousel() {
  return (
    <div className={styles.bankSection}>
      <h1>Bancos parceiros</h1>
      <div className={styles.bankCarrousel}>
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            <div className={styles.slide}>
              <img src="bancos/banco aspecir.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/banco bradesco.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/c6 bank.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/banco safra.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/banco ccb.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/banco-bv.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/bancomaxima.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/banrisul banco.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/bmg.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/caixa.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/cbss.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/cetelem-1.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/itau.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/daycoval.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/Inter_logo_2020.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/logo (1).svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/mercantil_do_brasil.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/ole.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/pan.svg" alt="" />
            </div>
            <div className={styles.slide}>
              <img src="bancos/sabemi.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
