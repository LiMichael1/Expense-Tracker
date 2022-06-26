import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  TableCell,
  TableRow,
} from '@mui/material';

import Link from 'next/link';

import styles from './recurExpenses.module.css';

import RecurExpenseRow from './recurExpenseRow';

import Netflix from '../../public/ExpensePhotos/Netflix.png';
import styledEngine from '@mui/styled-engine';

function createRow(img, name, business, amount) {
  return { img, name, business, amount };
}

const rows = [createRow(Netflix, 'Netflix Subscription', 'Netflix', -121.21)];

export default function RecurExpenses({ data = [] }) {
  const [recurExpenses, setRecurExpenses] = useState(
    data.length == 0 ? rows : data
  );

  console.log(rows[0].img);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTxt}>Recurring Expenses</h1>
        <Link href='/expenses'>
          <a>
            <p className={styles.headerBtn}>View All {' >'}</p>
          </a>
        </Link>
      </div>
      <TableContainer component={Paper} style={styles.tableContainer}>
        <Table aria-label='Recurring Expenses'>
          <TableBody>
            {recurExpenses.map((row, index) => {
              return <RecurExpenseRow row={row} key={index} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
