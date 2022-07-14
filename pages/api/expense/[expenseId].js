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

import { Authentication_Middleware } from '../../../middleware/authenticate';

export default async function handler(req, res) {
  const { expenseId } = req.query;
  const expRef = doc(db, 'expenses', expenseId);

  Authentication_Middleware(req, res);

  const user_id = req.user.id;

  try {
    if (req.method === 'GET') {
      // TODO: GET AN EXPENSE
      const expSnap = await getDoc(expRef);

      if (expSnap.exists()) {
        if (expSnap.data().user_id !== user_id)
          return res
            .status(403)
            .json({ success: false, error: 'UnAuthorized User' });
        return res.status(200).json(expSnap.data());
      } else {
        throw `Expense Does Not Exist: ${expenseId}`;
      }
    } else if (req.method === 'PUT') {
      /**
       * @param {Object} payload    Updated Fields to an Expense
       */
      const expSnap = await getDoc(expRef);

      if (!expSnap.exists()) throw `Expense Does Not Exist: ${expenseId}`;

      if (expSnap.data().user_id !== user_id)
        return res
          .status(403)
          .json({ success: false, error: 'UnAuthorized User' });

      const payload = req.body;

      await updateDoc(expRef, payload);

      return res
        .status(200)
        .json({ success: true, message: `Expense Updated: ${expenseId}` });
    } else if (req.method === 'DELETE') {
      // TODO: DELETE AN EXPENSE
      const expSnap = await getDoc(expRef);

      if (!expSnap.exists()) throw `Expense Does Not Exist: ${expenseId}`;

      if (expSnap.data().user_id !== user_id)
        return res
          .status(403)
          .json({ success: false, error: 'UnAuthorized User' });

      await deleteDoc(expRef);

      return res
        .status(200)
        .json({ success: true, message: `Expense Deleted: ${expenseId}` });
    }
  } catch (err) {
    res.status(500).json({ error: err.message, success: false });
  }
}
