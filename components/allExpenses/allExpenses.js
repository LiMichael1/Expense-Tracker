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

import styles from './allExpenses.module.css';

import AllExpenseRow from './allExpenseRow';

import EditExpense from '../editExpenseModal/editExpenseModal';
import AddExpense from '../addExpenseModal/AddExpenseModal';

import Iphone from '../../public/ExpensePhotos/Iphone13.png';
import Netflix from '../../public/ExpensePhotos/Netflix.png';
import Figma from '../../public/ExpensePhotos/Figma.png';

function createRow(img, name, business, type, amount, date, invoice_id) {
  return { img, name, business, type, amount, date, invoice_id };
}

export default function AllExpenses({ data = [] }) {
  const [allExpenses, setAllExpenses] = useState([]);
  const [editModal, setEditModal] = useState({
    isOpen: false,
    data: {},
  });
  const [addModal, setAddModal] = useState({
    isOpen: false,
    data: {},
  });

  const rows = [
    createRow(
      Iphone,
      'Iphone 13 Pro MAX',
      'Apple Inc.',
      'Mobile',
      420.84,
      new Date('2002-12-21'),
      'MGL0124877'
    ),
    createRow(
      Netflix,
      'Netflix Subscription',
      'Netflix',
      'Entertainment',
      100.0,
      new Date('2002-04-05'),
      'MGL0124877'
    ),
    createRow(
      Figma,
      'Figma Subscription',
      'Figma Inc.',
      'Software',
      244.2,
      new Date('2002-04-02'),
      'MGL0124877'
    ),
  ];

  useEffect(() => {
    const fetchAllExpenses = () => {
      console.log(data.length);
      data.length === 0 ? setAllExpenses(rows) : setAllExpenses(data);
    };

    fetchAllExpenses();
  }, []);

  const handleEdit = (row) => {
    setEditModal({
      isOpen: true,
      data: row,
    });
    console.log(row);
  };

  const openAddModal = () => {
    setAddModal({ ...addModal, isOpen: true });
  };

  const closeEditModal = () => {
    setEditModal({ isOpen: false, data: {} });
  };

  const closeAddModal = () => {
    setAddModal({ isOpen: false, data: {} });
  };

  return (
    <div className={styles.container}>
      <button onClick={openAddModal} className={styles.createBtn}>
        Create Expense
      </button>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table aria-label='All Expenses'>
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
              <TableCell>
                <p>INVOICE ID</p>
              </TableCell>
              <TableCell>
                <p>ACTION</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allExpenses.map((row, index) => {
              return (
                <AllExpenseRow row={row} key={index} editRow={handleEdit} />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Edit MODAL */}
      <EditExpense
        isOpen={editModal.isOpen}
        data={editModal.data}
        close={closeEditModal}
      />
      {/* Add MODAL */}
      <AddExpense isOpen={addModal.isOpen} close={closeAddModal} />
    </div>
  );
}
