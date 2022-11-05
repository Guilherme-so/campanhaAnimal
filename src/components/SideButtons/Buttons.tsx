import styles from './Buttons.module.scss';

const WhatsappButton = () => {
  return (
    <div>
      <img src="/whatsapp.svg" alt="Whatsapp" />
    </div>
  );
};

export const SideButtons = () => (
  <div className={styles.buttons}>
    <WhatsappButton />
  </div>
);
