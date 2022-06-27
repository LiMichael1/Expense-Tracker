import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Paper,
  TableCell,
  TableRow,
} from "@mui/material";

import styles from "./allExpenses.module.css";

import AllExpenseRow from "./allExpenseRow";

import EditExpense from "../editExpenseModal/editExpenseModal";
import AddExpense from "../addExpenseModal/AddExpenseModal";

export default function AllExpenses({ data = [] }) {
  const [allExpenses, setAllExpenses] = useState(data);
  const [editModal, setEditModal] = useState({
    isOpen: false,
    data: {},
  });
  const [addModal, setAddModal] = useState({
    isOpen: false,
    data: {},
  });

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
        <Table aria-label="All Expenses">
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
