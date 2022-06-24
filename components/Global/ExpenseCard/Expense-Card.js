import Image from 'next/image';
import { useState } from 'react';

import styles from './Expense-Card.module.css';

import ExpenseCardIcon from '../../../public/Icons/DashboardExpenseCard.png';
import ExpenseCardIconBg from '../../../public/Icons/DashboardExpenseCardBg.png';

import ExpenseCardIcon_S from '../../../public/Icons/DashboardExpenseCard_Selected.png';
import ExpenseCardIconBg_S from '../../../public/Icons/DashboardExpenseCardBg_Selected.png';

const ExpenseCard = ({ selected = false }) => {
  const [select, setSelect] = useState(selected);

  const toggleDark = () => {
    setSelect(!select);
  };

  return (
    <div
      onClick={toggleDark}
      className={styles.container + ` ${select ? styles.container_S : ''}`}
    >
      <div className={styles.left}>
        <div className={styles.icon}>
          <Image
            src={select ? ExpenseCardIcon_S : ExpenseCardIcon}
            alt='Expense Icon'
          />
        </div>

        <div className={styles.iconBg}>
          <Image
            src={select ? ExpenseCardIconBg_S : ExpenseCardIconBg}
            alt='Icon Background'
          />
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.descTxt}>Total Spending</p>
        <p className={styles.moneyTxt + ` ${select ? styles.moneyTxt_S : ''}`}>
          5240.12
        </p>
      </div>
    </div>
  );
};

export default ExpenseCard;
