/**
 * This Dynamic File handles requests for individual expenses
 * GET request: Get an Expense
 * PUT request: Edit an Expense
 * DELETE request: Delete an Expense
 * @author Michael Li
 * @version 1.0.0
 */
import { db } from '../../../firebase/firebase';
import {
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

export default async function handler(req, res) {
  const { expenseId } = req.query;
  const expRef = doc(db, 'expenses', expenseId);

  try {
    if (req.method === 'GET') {
      // TODO: GET AN EXPENSE
      const expSnap = await getDoc(expRef);

      if (expSnap.exists()) {
        res.status(200).json(expSnap.data());
      } else {
        throw `Expense Does Not Exist: ${expenseId}`;
      }
    } else if (req.method === 'PUT') {
      /**
       * @param {Object} payload    Updated Fields to an Expense
       */

      const payload = req.body;

      const response = await updateDoc(expRef, payload);

      res
        .status(200)
        .json({ success: true, message: `Expense Updated: ${expenseId}` });
    } else if (req.method === 'DELETE') {
      // TODO: DELETE AN EXPENSE
      const response = await deleteDoc(expRef);
      res
        .status(200)
        .json({ success: true, message: `Expense Deleted: ${expenseId}` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message, success: false });
  }
}
