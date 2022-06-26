import { useState } from 'react';
import { TableRow, TableCell } from '@mui/material';

import Image from 'next/image';

import styles from './allExpenses.module.css';

// sample
import Netflix from '../../public/ExpensePhotos/Netflix.png';

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

const defaultState = {
  name: 'Netflix Subscription',
  business: 'Netflix',
  type: 'Entertainment',
  amount: 100.0,
  date: new Date('2022-02-12'),
  img: Netflix,
  invoice_id: 'MGL0124877',
};

export default function AllExpenseRow({ row = defaultState, editRow }) {
  return (
    <TableRow>
      <TableCell>
        <div className={styles.nameContainer}>
          <div className={styles.img}>
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
      <TableCell>
        <p>{row.type}</p>
      </TableCell>
      <TableCell>
        <p className={styles.boldTxt}>
          {row.amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </p>
      </TableCell>
      <TableCell>
        <p className={styles.boldTxt}>
          {row.date.getDate()}-{monthNames[row.date.getMonth()]}-
          {row.date.getFullYear()}
        </p>
      </TableCell>
      <TableCell>
        <p>{row.invoice_id}</p>
      </TableCell>
      <TableCell>
        <button className={styles.editBtn} onClick={() => editRow(row)}>
          Edit
        </button>
      </TableCell>
    </TableRow>
  );
}
