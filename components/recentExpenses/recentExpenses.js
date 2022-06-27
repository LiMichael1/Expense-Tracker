import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import styles from './recentExpenses.module.css';
import RecentExpenseRow from './recentExpenseRow';

export default function RecentExpenses({ data = [] }) {
  const [recentData, setRecentData] = useState(data);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.headerTxt}>Recent Expenses</h1>
        <Link href='/expenses'>
          <a>
            <p className={styles.header_btn}>View All {' >'} </p>
          </a>
        </Link>
      </div>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table aria-label='Recent Expenses'>
          <TableHead>
            <TableRow className={styles.headerRow}>
              <TableCell>
                <p>NAME/BUSINESS</p>
              </TableCell>
              <TableCell>
                <p>TYPE</p>
              </TableCell>
              <TableCell>
                <p>AMOUNT</p>
              </TableCell>
              <TableCell>
                <p>DATE</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentData.map((row, index) => {
              return <RecentExpenseRow row={row} key={index} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
