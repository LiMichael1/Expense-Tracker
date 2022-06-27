import styles from './Modal.module.css';

import { useState } from 'react';

export default function Modal({ children, isOpen, close }) {
  return (
    <div className={styles.container + ` ${isOpen ? '' : styles.display_none}`}>
      <div className={styles.modalContainer}>{children}</div>
      <div onClick={close} className={styles.modalBg}></div>
    </div>
  );
}
