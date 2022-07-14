/**
 * General File to GET multiple Expenses [Database Entries]
 * @author Michael Li
 * @version 1.0.0
 */

import { db } from '../../../firebase/firebase';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  doc,
  startAt,
  endAt,
} from 'firebase/firestore';

export default async function handler(req, res) {
  const expRef = collection(db, 'expenses');
  if (req.method === 'GET') {
    // TODO: ADD AUTHENTICATION
    const { page } = req.query;

    let q;

    try {
      switch (page) {
        case 'recent':
          q = query(expRef, orderBy('date', 'desc'), limit(3));
          break;

        case 'recur':
          q = query(expRef, where('recur', '==', true));
          break;

        case 'timeFrame':
          const { days } = req.query;

          // Check if Days Query Field is an Integer
          if (!Number.isInteger(Number(days))) {
            throw new TypeError('Needs an Integer for Days Query Field');
          }

          // Get Current Time and Past Date Time
          const pastDate = getPastDate(days);
          const now = new Date();

          // Convert Dates into Miliseconds
          const startDate = pastDate.valueOf();
          const endDate = now.valueOf();

          q = query(
            expRef,
            orderBy('date'),
            startAt(startDate),
            endAt(endDate)
          );
          break;

        default:
          q = query(expRef, orderBy('date', 'desc'));
          break;
      }

      const querySnapshot = await getDocs(q);
      let expenses = [];
      querySnapshot.forEach((exp) => {
        expenses.push({ ...exp.data(), id: exp.id });
      });

      res.status(200).json(expenses);
    } catch (err) {
      res.status(500).json({ error: err.message, success: false });
    }
  }
}

const getPastDate = (days) => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - days);
};
