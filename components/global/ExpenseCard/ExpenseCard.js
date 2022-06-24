import Image from 'next/image';
import { useState } from 'react';

import styles from './ExpenseCard.module.css';

import CardIcon from '../../../public/Icons/ExpenseCardIcon.png';
import CardIcon_S from '../../../public/icons/ExpenseCardIcon_S.png';
import CardIconBg from '../../../public/Icons/ExpenseCardIconBg.png';
import CardIconBg_S from '../../../public/Icons/ExpenseCardIconBg_S.png';

export default function ExpenseCard({ selected = false }) {
  const [select, setSelected] = useState(selected);

  const [cardInfo, setCardInfo] = useState({
    descTxt: 'Monthly Spending',
    money: 250.8,
  });

  return (
    <div
      onClick={() => setSelected(!select)}
      className={styles.container + ` ${select ? styles.container_S : ''}`}
    >
      <div className={styles.left}>
        <div className={styles.icon}>
          <Image src={select ? CardIcon_S : CardIcon} alt='icon' />
        </div>
        <div className={styles.iconBg}>
          <Image
            src={select ? CardIconBg_S : CardIconBg}
            alt='icon background'
          />
        </div>
      </div>

      <div className={styles.right}>
        <p className={styles.descTxt}>{cardInfo.descTxt}</p>
        <p className={styles.moneyTxt + ` ${select ? styles.moneyTxt_S : ''}`}>
          ${cardInfo.money.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
