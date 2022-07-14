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

export default function RecurExpenses({ data = [] }) {
  const [recurExpenses, setRecurExpenses] = useState(data);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTxt}>Recurring Expenses</h1>
        <Link href='/expenses'>
          <a>
            <p className={styles.headerBtn}>View All {'>'}</p>
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
