import { TableRow, TableCell } from '@mui/material';

import Image from 'next/image';
import styles from './recentExpenses.module.css';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default function RecentExpenseRow({ row }) {
  return (
    <TableRow>
      <TableCell align='left'>
        <div className={styles.ExpenseNameContainer}>
          <div className={styles.ExpenseImg}>
            <Image src={row.img} alt={row.business} width={40} height={40} />
          </div>
          <div>
            <p className={styles.boldTxt}>{row.name}</p>
            <p className={styles.lightTxt + ' ' + styles.businessTxt}>
              {row.business}
            </p>
          </div>
        </div>
      </TableCell>
      <TableCell align='left'>
        <p className={styles.lightTxt}>{row.type}</p>
      </TableCell>
      <TableCell align='left'>
        <p className={styles.boldTxt}>${row.amount.toFixed(2)}</p>
      </TableCell>
      <TableCell align='left'>
        <p className={styles.lightTxt}>
          {row.date.getDate()}-{monthNames[row.date.getMonth()]}-
          {row.date.getFullYear()}
        </p>
      </TableCell>
    </TableRow>
  );
}
