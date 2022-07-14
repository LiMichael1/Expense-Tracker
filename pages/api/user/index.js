import {
  doc,
  collection,
  getDoc,
  updateDoc,
  getDocs,
  query,
  where,
  limit,
} from 'firebase/firestore';

import { db } from '../../../firebase/firebase';
import { Authentication_Middleware } from '../../../middleware/authenticate';

/**
 * @route   GET /api/user
 * @desc    Get User Account Information
 *
 * @route   PUT /api/user
 * @desc    Edit User Account Information
 *
 * @access  private
 */

export default async (req, res) => {
  Authentication_Middleware(req, res);
  const user_id = req.user.id;

  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('user_id', '==', user_id), limit(1));

  try {
    if (req.method === 'GET' || req.method === 'PUT') {
      const usersQuery = await getDocs(q);
      let userDocId, userData;
      usersQuery.forEach((user) => {
        userData = user.data();
        userDocId = user.id;
      });

      const request = req.method;

      switch (request) {
        case 'PUT':
          // EDIT USER INFORMATION
          const userRef = doc(db, 'users', userDocId);

          const payload = req.body;

          await updateDoc(userRef, payload);
          return res.status(200).json({
            success: true,
            message: `User Information Updated: ${user_id}`,
          });
          break;

        case 'GET':
        default:
          // GET USER INFORMATION
          return res.status(200).json({ success: true, payload: userData });
          break;
      }
    } else {
      return res.status(405).json({
        success: false,
        error: 'UnAuthorized Method. Need a GET or PUT request',
      });
    }
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};
