import Image from 'next/image';
import { TableRow, TableCell } from '@mui/material';

import styles from './recurExpenses.module.css';

export default function RecurExpenseRow({ row }) {
  return (
    <TableRow className={styles.container}>
      <TableCell className={styles.nameContainer}>
        <div className={styles.img}>
          <Image src={row.img} alt={row.business} />
        </div>

        <div>
          <p className={styles.boldTxt}>{row.name}</p>
          <p className={styles.businessTxt}>{row.business}</p>
        </div>
      </TableCell>

      <TableCell>
        <p className={styles.boldTxt}>
          {row.amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
      </TableCell>
    </TableRow>
  );
}
