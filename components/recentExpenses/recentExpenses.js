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
// sample
import Iphone from '../../public/ExpensePhotos/Iphone13.png';
import Netflix from '../../public/ExpensePhotos/Netflix.png';
import Figma from '../../public/ExpensePhotos/Figma.png';

function createRow(id, name, business, type, amount, date, img) {
  return { id, name, business, type, amount, date, img };
}

const rows = [
  createRow(
    1,
    'Iphone 13 Pro MAX',
    'Apple Inc',
    'Mobile',
    420.84,
    new Date('2022-07-12'),
    Iphone
  ),
  createRow(
    2,
    'Netflix Subscription',
    'Netflix',
    'Entertainment',
    100.0,
    new Date('2022-04-05'),
    Netflix
  ),
  createRow(
    3,
    'Figma Subscription',
    'Figma Inc',
    'Software',
    244.2,
    new Date('2022-04-02'),
    Figma
  ),
];

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

export default function RecentExpenses({ data = [] }) {
  const [recentData, setRecentData] = useState([]);

  useEffect(() => {
    const fetchRecentExpenses = () => {
      console.log(rows);
      data.length === 0
        ? setRecentData(rows)
        : setRecentData(data.splice(0, 3));
      console.log('Recent Expenses Data', recentData);
    };

    fetchRecentExpenses();
  }, []);

  return (
    <div>
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
              return (
                <TableRow key={index}>
                  <TableCell align='left'>
                    <div className={styles.ExpenseNameContainer}>
                      <div className={styles.ExpenseImg}>
                        <Image
                          src={row.img}
                          alt={row.business}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p>{row.name}</p>
                        <p className={styles.lightTxt}>{row.business}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align='left'>
                    <p className={styles.lightTxt}>{row.type}</p>
                  </TableCell>
                  <TableCell align='left'>
                    <p>${row.amount.toFixed(2)}</p>
                  </TableCell>
                  <TableCell align='left'>
                    <p className={styles.lightTxt}>
                      {row.date.getDate()}-{monthNames[row.date.getMonth()]}-
                      {row.date.getFullYear()}
                    </p>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
