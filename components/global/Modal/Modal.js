import styles from './Modal.module.css';

import { useState } from 'react';

export default function Modal({ children, isOpen = false }) {
  const [isOpenModal, setIsOpenModal] = useState(isOpen);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div
      className={
        styles.container + ` ${isOpenModal ? '' : styles.display_none}`
      }
    >
      <div className={styles.modalContainer}>{children}</div>
      <div onClick={closeModal} className={styles.modalBg}></div>
    </div>
  );
}
